import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { World } from "../support/world";

import { fixKeys, pathLookup } from "../support/templating";
import { Store } from "../support/store";
import { buildUndoFor, UndoActions } from "../support/undo";
import * as datadogApiClient from "../../index";

Given('a valid "apiKeyAuth" key in the system', function (this: World) {
  this.authMethods["apiKeyAuth"] = process.env.DD_TEST_CLIENT_API_KEY;
});

Given('a valid "appKeyAuth" key in the system', function (this: World) {
  this.authMethods["appKeyAuth"] = process.env.DD_TEST_CLIENT_APP_KEY;
});

Given("an instance of {string} API", function (this: World, apiName: string) {
  // TODO add support for DEBUG=true when supported in configuration
  this.apiName = apiName;
});

Given(
  "operation {string} enabled",
  function (this: World, operationId: string) {
    // TODO add support for unstable operations
    // this.configuration().unstableOperations[operationId] = true;
  }
);

Given(/body (.*)/, function (this: World, body: string) {
  this.opts["body"] = JSON.parse(body.templated(this.fixtures), fixKeys);
});

Given(
  "request contains {string} parameter from {string}",
  function (this: World, parameterName: string, fixturePath: string) {
    this.opts[parameterName.toAttributeName()] = pathLookup(
      this.fixtures,
      fixturePath
    );
  }
);

Given(
  /request contains "([^"]+)" parameter with value (.*)/,
  function (this: World, parameterName: string, value: string) {
    this.opts[parameterName.toAttributeName()] = JSON.parse(
      value.templated(this.fixtures)
    );
  }
);

Given("new {string} request", function (this: World, operationId: string) {
  this.operationId = operationId;
});

When("the request is sent", async function (this: World) {
  // build request from scenario
  const api = (datadogApiClient as any)[this.apiVersion];
  const configuration = api.createConfiguration({
    authMethods: this.authMethods,
  });
  const apiInstance = new api[`${this.apiName}Api`](configuration);

  const undoAction = UndoActions[this.apiVersion][this.operationId];
  if (undoAction === undefined) {
    throw new Error(
      `missing undo for ${this.operationId} in ${this.apiVersion}`
    );
  }
  // store request context from response processor
  Store((...args) => {
    this.requestContext = args[0];
  })(apiInstance.api.responseProcessor);
  // example: await v1.IPRangesApi(v1.createConfiguration({authMethod: {...}})).getIPRanges({});
  try {
    this.response = await apiInstance[this.operationId.toOperationName()](
      this.opts
    );
    if (undoAction.undo.type == "unsafe") {
      this.undo.push(buildUndoFor(this.apiVersion, undoAction, this.response));
    }
  } catch (error) {
    console.log(error);
  }
});

Then(
  /^the response status is (\d+) (.*)/,
  function (this: World, status: number, msg: string) {
    expect(this.requestContext.httpStatusCode).to.equal(status);
  }
);

Then(
  "the response {string} has the same value as {string}",
  function (this: World, responsePath: string, fixturePath: string) {
    expect(pathLookup(this.response, responsePath)).to.equal(
      pathLookup(this.fixtures, fixturePath)
    );
  }
);

Then(
  /the response "([^"]+)" is equal to (.*)/,
  function (this: World, responsePath: string, value: string) {
    expect(pathLookup(this.response, responsePath)).to.equal(
      JSON.parse(value.templated(this.fixtures))
    );
  }
);

Then(
  "the response {string} is false",
  function (this: World, responsePath: string) {
    expect(pathLookup(this.response, responsePath)).to.equal(false);
  }
);

Then(
  "the response {string} has length {int}",
  function (this: World, responsePath: string, fixtureLength: number) {
    expect(pathLookup(this.response, responsePath).length).to.equal(
      fixtureLength
    );
  }
);
