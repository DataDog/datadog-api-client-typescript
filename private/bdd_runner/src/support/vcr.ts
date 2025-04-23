import tracer from "./tracer";
import fs from "fs";
import path from "path";

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import { Headers, Polly, Request } from "@pollyjs/core";
import { After, AfterAll, Before } from "@cucumber/cucumber";
import { World } from "./world";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { MODES } from "@pollyjs/utils";
import { createHash } from "crypto";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

let cassettes: string[] = [];

const RecordMode: { [value: string]: any } = {
  true: MODES.RECORD,
  false: MODES.REPLAY,
  none: MODES.PASSTHROUGH,
};

const headersToPersist: Array<string> = ["accept", "content-type"];

function filterHeader(value: any) {
  return headersToPersist.includes(value.name);
}

function matchHeaders(input: Headers, req: Request): Headers {
  const output: { [value: string]: any } = {};
  for (const key in input) {
    if (headersToPersist.includes(key)) {
      output[key] = input[key];
    }
  }
  return output;
}

function generateUuid(data: any): any {
  const timestring = data.toString();
  return (
    timestring.slice(0, 8) + "-0000-0000-0000-" + timestring.slice(0, 10) + "00"
  );
}

Before(function (
  this: World,
  { gherkinDocument, pickle }: ITestCaseHookParameter,
) {
  const recordingsDir = `${this.cassettesDir}/${this.apiVersion}`;
  const recordingName = `${gherkinDocument.feature?.name as string}/${pickle.name}`;
  this.polly = new Polly(recordingName, {
    adapters: ["node-http"],
    flushRequestsOnStop: true,
    persister: "fs",
    matchRequestsBy: {
      headers: matchHeaders,
    },
    mode: RecordMode[process.env.RECORD || "false"],
    recordIfMissing: process.env.RERECORD_FAILED_TESTS === "true", // make sure that we match body exactly
    recordFailedRequests: true, // make sure we can replay responses with 4xx codes
    logLevel: !!process.env.DEBUG ? "debug" : "warn",
    persisterOptions: {
      fs: {
        recordingsDir: recordingsDir,
      },
    },
  });
  const { server } = this.polly;

  // register used cassettes
  cassettes.push(path.join(recordingsDir, this.polly?.recordingId));

  let date: Date;
  const frozen = path.join(
    recordingsDir,
    this.polly?.recordingId,
    "frozen.json",
  );
  const frozenExists = fs.existsSync(frozen);
  if (frozenExists && this.polly?.mode == MODES.REPLAY) {
    date = new Date(JSON.parse(fs.readFileSync(frozen).toString()));
  } else {
    date = new Date();
    if (
      this.polly?.mode == MODES.RECORD ||
      this.polly?.config?.recordIfMissing
    ) {
      fs.mkdirSync(path.dirname(frozen), { recursive: true });
      fs.writeFileSync(frozen, JSON.stringify(date) + "\n");
    } else if (this.polly?.mode == MODES.REPLAY) {
      throw new Error(
        `Time file '${frozen}' not found: create one setting \`RECORD=true\` or ignore it using \`RECORD=none\``,
      );
    }
  }

  const cassette = path.join(
    recordingsDir,
    this.polly?.recordingId,
    "recording.har",
  );
  const cassetteExists = fs.existsSync(cassette);

  if (!cassetteExists && this.polly?.mode == MODES.REPLAY) {
    throw new Error(
      `Cassette '${cassette}' not found: create one setting \`RECORD=true\` or ignore it using \`RECORD=none\``,
    );
  }

  const now = date.getTime() / 1000;
  const name = pickle.name?.replace(/[^A-Za-z0-9]+/g, "_").substr(0, 100);
  const prefix =
    this.polly?.mode == MODES.PASSTHROUGH ? "Test-Typescript" : "Test";
  const unique = `${prefix}-${name}-${Math.floor(now)}`;
  const uniqueHash = createHash("sha256")
    .update(unique)
    .digest("hex")
    .substring(0, 16);
  this.fixtures["unique"] = unique;
  this.fixtures["unique_lower"] = unique.toLowerCase();
  this.fixtures["unique_upper"] = unique.toUpperCase();
  this.fixtures["unique_alnum"] = unique.replace(/[^A-Za-z0-9]+/g, "");
  this.fixtures["unique_lower_alnum"] =
    this.fixtures["unique_alnum"].toLowerCase();
  this.fixtures["unique_upper_alnum"] =
    this.fixtures["unique_alnum"].toUpperCase();
  this.fixtures["unique_hash"] = uniqueHash;
  this.fixtures["now"] = date;
  this.fixtures["uuid"] = generateUuid(now);

  // make sure that we are not recording APM traces
  if ((tracer as any)._tracer._url !== undefined) {
    const url = (tracer as any)._tracer._url.href;
    server.put(`${url}*`).passthrough();
  }

  // remove secrets from request headers before persisting
  server.any().on("beforePersist", (req, recording) => {
    recording.request.headers = recording.request.headers.filter(filterHeader);
    recording.response.headers =
      recording.response.headers.filter(filterHeader);

    // remove timing information
    delete recording.timings;
  });
});

// Disable PollyJS request interception when tests are in integration mode
Before(async function (this: World) {
  if (this.polly?.mode == MODES.PASSTHROUGH) {
    this.polly.configure({ adapters: [] });
  }
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

After(async function (this: World) {
  await this.cleanup();
});

AfterAll(function () {
  // const recordMode = process.env.RECORD || "false";
  // if (recordMode !== "false" || process.env.CLEANUP_CASSETTES !== "true") {
  //   return;
  // }
  // const getAllDirs = function (dirPath: string): string[] {
  //   let files = fs.readdirSync(dirPath).map((file) => path.join(dirPath, file));
  //   let arrayOfFiles: any = [];

  //   while (files.length > 0) {
  //     const fileName = files.pop() as string;
  //     if (fs.statSync(fileName).isDirectory()) {
  //       const children = fs
  //         .readdirSync(fileName)
  //         .map((file) => path.join(fileName, file))
  //         .filter((d) => fs.statSync(d).isDirectory());
  //       if (children.length > 0) {
  //         files = files.concat(children);
  //       } else {
  //         arrayOfFiles.push(fileName);
  //       }
  //     }
  //   }

  //   return arrayOfFiles;
  // };

  // const existingCassettes = getAllDirs(this.cassettesDir);
  // const usedCassettes = new Set(cassettes);

  // existingCassettes
  //   .filter((c) => !usedCassettes.has(c))
  //   .forEach((cassette) => {
  //     console.log(`Removing unused cassette ${cassette}`);
  //     fs.rmSync(cassette, { recursive: true });
  //   });
});
