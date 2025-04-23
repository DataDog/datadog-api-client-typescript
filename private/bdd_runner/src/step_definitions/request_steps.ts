import { Given, Then, When, AfterAll } from "@cucumber/cucumber";
import { expect, use } from "chai";
import chaiQuantifiers from "chai-quantifiers";
use(chaiQuantifiers);
import { World } from "../support/world";

import { apiTypes } from "../support/api_info";

import {
  pathLookup,
  getTypeForValue,
  tagToApiClassName,
  apiClassNameToServicePackageDirName,
} from "../support/templating";
import { Store } from "../support/store";
import { buildUndoFor, UndoActions } from "../support/undo";
import * as datadogCommon from "@datadog/datadog-api-client";
import fs from "fs";
import path from "path";

import { compressSync } from "zstd.ts";
import log from "loglevel";
import { ScenariosModelMappings } from "../support/scenarios_model_mapping";
import { deserializeOpts } from "../support/deserialize_opts";
const logger = log.getLogger("testing");
logger.setLevel(process.env.DEBUG ? logger.levels.DEBUG : logger.levels.INFO);

Given('a valid "apiKeyAuth" key in the system', function (this: World) {
  this.authMethods["apiKeyAuth"] = process.env.DD_TEST_CLIENT_API_KEY;
});

Given('a valid "appKeyAuth" key in the system', function (this: World) {
  this.authMethods["appKeyAuth"] = process.env.DD_TEST_CLIENT_APP_KEY;
});

Given("an instance of {string} API", function (this: World, apiName: string) {
  // TODO add support for DEBUG=true when supported in configuration
  this.apiName = tagToApiClassName(apiName);
});

Given(
  "operation {string} enabled",
  function (this: World, operationId: string) {
    this.unstableOperations[operationId.toOperationName()] = true;
  },
);

Given(/body with value (.*)/, function (this: World, body: string) {
  this.opts["body"] = JSON.parse(body.templated(this.fixtures));
});

Given(/body from file "(.*)"/, function (this: World, filename: string) {
  const content = fs
    .readFileSync(
      path.join(this.workingDir, "features", this.apiVersion, filename),
    )
    .toString();
  this.opts["body"] = JSON.parse(content.templated(this.fixtures));
});

Given(
  "request contains {string} parameter from {string}",
  function (this: World, parameterName: string, fixturePath: string) {
    this.opts[parameterName.toAttributeName()] = pathLookup(
      this.fixtures,
      fixturePath,
    );
  },
);

Given(
  /request contains "([^"]+)" parameter with value (.*)/,
  function (this: World, parameterName: string, value: string) {
    this.opts[parameterName.toAttributeName().toOperationName()] = JSON.parse(
      value.templated(this.fixtures),
    );
  },
);

Given("new {string} request", function (this: World, operationId: string) {
  this.operationId = operationId;
});

When("the request is sent", async function (this: World) {
  // build request from scenario
  const apiNameWithVersion = `${this.apiName}${this.apiVersion.toUpperCase()}`;
  const api = apiTypes[apiNameWithVersion];

  const configurationOpts = {
    authMethods: this.authMethods,
    httpConfig: { compress: false },
    zstdCompressorCallback: (body: string) =>
      compressSync({ input: Buffer.from(body, "utf8") }),
    enableRetry: true,
  };

  if (process.env.DD_TEST_SITE) {
    const serverConf = datadogCommon.servers[2].getConfiguration();
    datadogCommon.servers[2].setVariables({
      site: process.env.DD_TEST_SITE,
    } as typeof serverConf);
    (configurationOpts as any)["serverIndex"] = 2;
  }
  if (process.env.DD_TEST_SITE_URL) {
    const serverConf = datadogCommon.servers[1].getConfiguration();
    datadogCommon.servers[1].setVariables({
      name: process.env.DD_TEST_SITE_URL,
      protocol: "http",
    } as typeof serverConf);
    (configurationOpts as any)["serverIndex"] = 1;
  }

  const configuration = datadogCommon.createConfiguration(configurationOpts);
  for (const operationId in this.unstableOperations) {
    if (
      `${this.apiVersion}.${operationId}` in configuration.unstableOperations
    ) {
      configuration.unstableOperations[`${this.apiVersion}.${operationId}`] =
        this.unstableOperations[operationId];
    } else {
      // FIXME throw new Error(`Operation ${operationId} is not unstable`);
      logger.warn(`Operation ${operationId} is not unstable`);
    }
  }
  const apiInstance = new api(configuration);
  const undoAction = UndoActions[this.apiVersion][this.operationId];
  if (undoAction === undefined) {
    throw new Error(
      `missing undo for ${this.operationId} in ${this.apiVersion}`,
    );
  }
  // Deserialize obejcts into correct model types
  this.opts = deserializeOpts(
    this.opts,
    this.servicesDir,
    this.apiVersion,
    this.apiName,
    this.operationId,
  );

  // store request context from response processor
  Store((...args) => {
    this.requestContext = args[0];
  })(apiInstance.responseProcessor);
  try {
    if (Object.keys(this.opts).length) {
      this.response = await apiInstance[this.operationId.toOperationName()](
        this.opts,
      );
    } else {
      this.response = await apiInstance[this.operationId.toOperationName()]();
    }
    if (undoAction.undo.type == "unsafe") {
      this.undo.push(
        buildUndoFor(
          this.apiVersion,
          undoAction,
          this.operationId,
          this.response,
          this.opts,
          this.servicesDir,
        ),
      );
    }
  } catch (error) {
    if (error instanceof datadogCommon.ApiException) {
      this.response = error.body;
    } else {
      throw error;
    }
    logger.debug(error);
    if (this.requestContext === undefined) {
      throw error;
    }
    if (
      this.requestContext !== undefined &&
      this.requestContext.headers["content-type"] ==
        "application/problem+json" &&
      this.requestContext.httpStatusCode == 500
    ) {
      logger.debug(this.requestContext.body.text);
      throw error;
    }
  }
});

When("the request with pagination is sent", async function (this: World) {
  const apiNameWithVersion = `${this.apiName}${this.apiVersion.toUpperCase()}`;
  const api = apiTypes[apiNameWithVersion];
  const configurationOpts = {
    authMethods: this.authMethods,
    httpConfig: { compress: false },
    enableRetry: true,
  };
  if (process.env.DD_TEST_SITE) {
    const serverConf = datadogCommon.servers[2].getConfiguration();
    datadogCommon.servers[2].setVariables({
      site: process.env.DD_TEST_SITE,
    } as typeof serverConf);
    (configurationOpts as any)["serverIndex"] = 2;
  }
  if (process.env.DD_TEST_SITE_URL) {
    const serverConf = datadogCommon.servers[1].getConfiguration();
    datadogCommon.servers[1].setVariables({
      name: process.env.DD_TEST_SITE_URL,
      protocol: "http",
    } as typeof serverConf);
    (configurationOpts as any)["serverIndex"] = 1;
  }
  const configuration = datadogCommon.createConfiguration(configurationOpts);
  for (const operationId in this.unstableOperations) {
    if (
      `${this.apiVersion}.${operationId}` in configuration.unstableOperations
    ) {
      configuration.unstableOperations[`${this.apiVersion}.${operationId}`] =
        this.unstableOperations[operationId];
    } else {
      // FIXME throw new Error(`Operation ${operationId} is not unstable`);
      logger.warn(`Operation ${operationId} is not unstable`);
    }
  }
  const apiInstance = new api(configuration);
  // Deserialize obejcts into correct model types
  this.opts = deserializeOpts(
    this.opts,
    this.servicesDir,
    this.apiVersion,
    this.apiName,
    this.operationId,
  );

  // store request context from response processor
  Store((...args) => {
    this.requestContext = args[0];
  })(apiInstance.responseProcessor);
  try {
    let response: any = [];
    if (Object.keys(this.opts).length) {
      for await (const item of apiInstance[
        this.operationId.toOperationName() + "WithPagination"
      ](this.opts)) {
        response.push(item);
      }
    } else {
      for await (const item of apiInstance[
        this.operationId.toOperationName() + "WithPagination"
      ]()) {
        response.push(item);
      }
    }
    this.response = response;
  } catch (error) {
    if (error instanceof datadogCommon.ApiException) {
      this.response = error.body;
    } else {
      throw error;
    }
    logger.debug(error);
    if (this.requestContext === undefined) {
      throw error;
    }
    if (
      this.requestContext !== undefined &&
      this.requestContext.headers["content-type"] ==
        "application/problem+json" &&
      this.requestContext.httpStatusCode == 500
    ) {
      logger.debug(this.requestContext.body.text);
      throw error;
    }
  }
});

Then(
  /^the response status is (\d+) (.*)/,
  function (this: World, status: number, msg: string) {
    expect(this.requestContext.httpStatusCode).to.equal(status);
  },
);

Then(
  "the response {string} has the same value as {string}",
  function (this: World, responsePath: string, fixturePath: string) {
    expect(pathLookup(this.response, responsePath)).to.equal(
      pathLookup(this.fixtures, fixturePath),
    );
  },
);

Then(
  /the response "([^"]+)" is equal to (.*)/,
  function (this: World, responsePath: string, value: string) {
    const pathResult = pathLookup(this.response, responsePath);
    const _type = getTypeForValue(pathResult);
    let templatedFixtureValue = JSON.parse(value.templated(this.fixtures));
    if (_type) {
      const typingInfo = require(
        `${this.servicesDir}/${apiClassNameToServicePackageDirName(this.apiName)}/src/${this.apiVersion}/models/TypingInfo`,
      )["TypingInfo"];
      templatedFixtureValue = datadogCommon.deserialize(
        templatedFixtureValue,
        typingInfo,
        _type,
        "",
      );
    }
    expect(pathResult).to.deep.equal(templatedFixtureValue);
  },
);

Then(
  "the response {string} is false",
  function (this: World, responsePath: string) {
    expect(pathLookup(this.response, responsePath)).to.equal(false);
  },
);

Then(
  "the response {string} has field {string}",
  function (this: World, responsePath: string, field: string) {
    expect(pathLookup(this.response, responsePath)).to.have.property(
      field.toAttributeName(),
    );
  },
);

Then(
  "the response {string} does not have field {string}",
  function (this: World, responsePath: string, field: string) {
    expect(pathLookup(this.response, responsePath)).to.not.have.property(
      field.toAttributeName(),
    );
  },
);

Then(
  "the response {string} has length {int}",
  function (this: World, responsePath: string, fixtureLength: number) {
    expect(pathLookup(this.response, responsePath).length).to.equal(
      fixtureLength,
    );
  },
);

Then(
  "the response has {int} items",
  function (this: World, fixtureLength: number) {
    expect(this.response.length).to.equal(fixtureLength);
  },
);

Then(
  /the response "([^"]+)" has item with field "([^"]+)" with value (.*)/,
  function (this: World, responsePath: string, keyPath: string, value: string) {
    expect(pathLookup(this.response, responsePath)).to.containOne((item) => {
      try {
        expect(pathLookup(item, keyPath)).to.deep.equal(
          JSON.parse(value.templated(this.fixtures)),
        );
        return true;
      } catch (error) {
        return false;
      }
    });
  },
);

Then(
  /the response "([^"]+)" array contains value (.*)/,
  function (this: World, responsePath: string, value: string) {
    expect(pathLookup(this.response, responsePath)).to.contain(
      JSON.parse(value.templated(this.fixtures)),
    );
  },
);

AfterAll(function (this: World) {
  let dd_service = process.env.DD_SERVICE;
  let ci_pipeline_id = process.env.GITHUB_RUN_ID;
  if (dd_service !== undefined && ci_pipeline_id !== undefined) {
    console.log("\nTest reports:\n");
    console.log(
      "* View test APM traces and detailed time reports on Datadog (can take a few minutes to become available):",
    );
    console.log(
      `* https://app.datadoghq.com/ci/test-runs?query=%40test.service%3A${dd_service}%20%40ci.pipeline.id%3A${ci_pipeline_id}&index=citest\n`,
    );
  }
});
