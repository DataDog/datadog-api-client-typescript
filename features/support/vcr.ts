import tracer from "./tracer";
import fs from "fs";
import path from "path";

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import { Polly } from "@pollyjs/core";
import { After, Before } from "@cucumber/cucumber";
import { World } from "./world";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { MODES } from "@pollyjs/utils";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const RecordMode: { [value: string]: any } = {
  true: MODES.RECORD,
  false: MODES.REPLAY,
  none: MODES.PASSTHROUGH,
};

function filterHeader(value: any) {
  return value.name != "dd-api-key" && value.name != "dd-application-key";
}

Before(function (
  this: World,
  { gherkinDocument, pickle }: ITestCaseHookParameter
) {
  const recordingsDir = path.resolve(
    __dirname,
    `../../cassettes/${this.apiVersion}`
  );
  const recordingName = `${gherkinDocument.feature?.name as string}/${
    pickle.name
  }`;
  this.polly = new Polly(recordingName, {
    adapters: ["node-http"],
    flushRequestsOnStop: true,
    persister: "fs",
    matchRequestsBy: {
      headers: false,
    },
    mode: RecordMode[process.env.RECORD || "false"],
    recordIfMissing: process.env.RERECORD_FAILED_TESTS === "true", // make sure that we match body exactly
    recordFailedRequests: true, // make sure we can replay responses with 4xx codes
    logging: false,
    persisterOptions: {
      fs: {
        recordingsDir: recordingsDir,
      },
    },
  });
  const { server } = this.polly;

  let date: Date;
  const frozen = path.join(
    recordingsDir,
    this.polly?.recordingId,
    "frozen.json"
  );
  let frozenExists = fs.existsSync(frozen);
  if (frozenExists && this.polly?.mode == MODES.REPLAY) {
    date = new Date(JSON.parse(fs.readFileSync(frozen).toString()));
  } else {
    date = new Date();
    if (this.polly?.mode == MODES.RECORD || this.polly?.config?.recordIfMissing) {
      fs.mkdirSync(path.dirname(frozen), {recursive: true});
      fs.writeFileSync(frozen, JSON.stringify(date));
    }
  }

  const now = date.getTime() / 1000;
  const name = pickle.name?.replace(/[^A-Za-z0-9]+/g, "_").substr(0, 100);
  const prefix = this.polly?.mode == MODES.PASSTHROUGH ? "Test-Typescript" : "Test";
  const unique = `${prefix}-${name}-${Math.floor(now)}`;
  this.fixtures["unique"] = unique;
  this.fixtures["unique_lower"] = unique.toLowerCase();
  this.fixtures["unique_alnum"] = unique.replace(/[^A-Za-z0-9]+/g, "");
  this.fixtures["unique_lower_alnum"] = this.fixtures["unique_alnum"].toLowerCase();
  this.fixtures["now_ts"] = Math.floor(now);
  this.fixtures["now_iso"] = date.toISOString();
  const hourLater = new Date(JSON.stringify(date));
  hourLater.setTime(date.getTime() + 60*60*1000);
  this.fixtures["hour_later_ts"] = Math.floor(hourLater.getTime() / 1000);
  this.fixtures["hour_later_iso"] = hourLater.toISOString();
  const hourAgo = new Date(JSON.stringify(date));
  hourAgo.setTime(date.getTime() - 60*60*1000);
  this.fixtures["hour_ago_ts"] = Math.floor(hourAgo.getTime() / 1000);
  this.fixtures["hour_ago_iso"] = hourAgo.toISOString();

  // make sure that we are not recording APM traces
  if ((tracer as any)._tracer._url !== undefined) {
    server.any((tracer as any)._tracer._url.href + '*').passthrough();
  }

  // remove secrets from request headers before persisting
  server.any().on("beforePersist", (req, recording) => {
    recording.request.headers = recording.request.headers.filter(filterHeader);
  });
});

// The order of After functions is important. They are in reverse order
// hence this.cleanup() must be defined after this.polly.stop().

After(async function (this: World) {
  if (this.polly !== undefined) {
    try {
      await this.polly.stop();
    } catch {
      this.polly.disconnect();
    }
  }
});

After(function (this: World) {
  this.cleanup();
});
