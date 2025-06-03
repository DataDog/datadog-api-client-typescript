import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { SyntheticsAPITest } from "./models/SyntheticsAPITest";
import { SyntheticsAPITestResultFull } from "./models/SyntheticsAPITestResultFull";
import { SyntheticsBatchDetails } from "./models/SyntheticsBatchDetails";
import { SyntheticsBrowserTest } from "./models/SyntheticsBrowserTest";
import { SyntheticsBrowserTestResultFull } from "./models/SyntheticsBrowserTestResultFull";
import { SyntheticsCITestBody } from "./models/SyntheticsCITestBody";
import { SyntheticsDeleteTestsPayload } from "./models/SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "./models/SyntheticsDeleteTestsResponse";
import { SyntheticsFetchUptimesPayload } from "./models/SyntheticsFetchUptimesPayload";
import { SyntheticsGetAPITestLatestResultsResponse } from "./models/SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "./models/SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "./models/SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableRequest } from "./models/SyntheticsGlobalVariableRequest";
import { SyntheticsListGlobalVariablesResponse } from "./models/SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "./models/SyntheticsListTestsResponse";
import { SyntheticsLocations } from "./models/SyntheticsLocations";
import { SyntheticsMobileTest } from "./models/SyntheticsMobileTest";
import { SyntheticsPatchTestBody } from "./models/SyntheticsPatchTestBody";
import { SyntheticsPrivateLocation } from "./models/SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "./models/SyntheticsPrivateLocationCreationResponse";
import { SyntheticsTestDetails } from "./models/SyntheticsTestDetails";
import { SyntheticsTestUptime } from "./models/SyntheticsTestUptime";
import { SyntheticsTriggerBody } from "./models/SyntheticsTriggerBody";
import { SyntheticsTriggerCITestsResponse } from "./models/SyntheticsTriggerCITestsResponse";
import { SyntheticsUpdateTestPauseStatusPayload } from "./models/SyntheticsUpdateTestPauseStatusPayload";
import { version } from "../version";

export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("synthetics", version);
    }
  }
  public async createGlobalVariable(
    body: SyntheticsGlobalVariableRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGlobalVariable");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.createGlobalVariable",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsGlobalVariableRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createPrivateLocation(
    body: SyntheticsPrivateLocation,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPrivateLocation");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/private-locations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.createPrivateLocation",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsPrivateLocation", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createSyntheticsAPITest(
    body: SyntheticsAPITest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsAPITest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/api";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.createSyntheticsAPITest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsAPITest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createSyntheticsBrowserTest(
    body: SyntheticsBrowserTest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsBrowserTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/browser";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.createSyntheticsBrowserTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsBrowserTest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createSyntheticsMobileTest(
    body: SyntheticsMobileTest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsMobileTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/mobile";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.createSyntheticsMobileTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsMobileTest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteGlobalVariable(
    variableId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError("variableId", "deleteGlobalVariable");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables/{variable_id}".replace(
      "{variable_id}",
      encodeURIComponent(String(variableId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.deleteGlobalVariable",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deletePrivateLocation(
    locationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'locationId' is not null or undefined
    if (locationId === null || locationId === undefined) {
      throw new RequiredError("locationId", "deletePrivateLocation");
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/private-locations/{location_id}".replace(
        "{location_id}",
        encodeURIComponent(String(locationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.deletePrivateLocation",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteTests(
    body: SyntheticsDeleteTestsPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteTests");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/delete";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.deleteTests",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsDeleteTestsPayload", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async editGlobalVariable(
    variableId: string,
    body: SyntheticsGlobalVariableRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError("variableId", "editGlobalVariable");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editGlobalVariable");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables/{variable_id}".replace(
      "{variable_id}",
      encodeURIComponent(String(variableId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.editGlobalVariable",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsGlobalVariableRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async fetchUptimes(
    body: SyntheticsFetchUptimesPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "fetchUptimes");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/uptimes";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.fetchUptimes",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsFetchUptimesPayload", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getAPITest(
    publicId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getAPITest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/api/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getAPITest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getAPITestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    probeDc?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getAPITestLatestResults");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}/results".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getAPITestLatestResults",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        serialize(fromTs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        serialize(toTs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (probeDc !== undefined) {
      requestContext.setQueryParam(
        "probe_dc",
        serialize(probeDc, TypingInfo, "Array<string>", ""),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getAPITestResult(
    publicId: string,
    resultId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getAPITestResult");
    }

    // verify required parameter 'resultId' is not null or undefined
    if (resultId === null || resultId === undefined) {
      throw new RequiredError("resultId", "getAPITestResult");
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/tests/{public_id}/results/{result_id}"
        .replace("{public_id}", encodeURIComponent(String(publicId)))
        .replace("{result_id}", encodeURIComponent(String(resultId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getAPITestResult",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getBrowserTest(
    publicId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getBrowserTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/browser/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getBrowserTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getBrowserTestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    probeDc?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getBrowserTestLatestResults");
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/tests/browser/{public_id}/results".replace(
        "{public_id}",
        encodeURIComponent(String(publicId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getBrowserTestLatestResults",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        serialize(fromTs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        serialize(toTs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (probeDc !== undefined) {
      requestContext.setQueryParam(
        "probe_dc",
        serialize(probeDc, TypingInfo, "Array<string>", ""),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getBrowserTestResult(
    publicId: string,
    resultId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getBrowserTestResult");
    }

    // verify required parameter 'resultId' is not null or undefined
    if (resultId === null || resultId === undefined) {
      throw new RequiredError("resultId", "getBrowserTestResult");
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/tests/browser/{public_id}/results/{result_id}"
        .replace("{public_id}", encodeURIComponent(String(publicId)))
        .replace("{result_id}", encodeURIComponent(String(resultId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getBrowserTestResult",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getGlobalVariable(
    variableId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError("variableId", "getGlobalVariable");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables/{variable_id}".replace(
      "{variable_id}",
      encodeURIComponent(String(variableId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getGlobalVariable",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMobileTest(
    publicId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getMobileTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/mobile/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getMobileTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getPrivateLocation(
    locationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'locationId' is not null or undefined
    if (locationId === null || locationId === undefined) {
      throw new RequiredError("locationId", "getPrivateLocation");
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/private-locations/{location_id}".replace(
        "{location_id}",
        encodeURIComponent(String(locationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getPrivateLocation",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSyntheticsCIBatch(
    batchId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError("batchId", "getSyntheticsCIBatch");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/ci/batch/{batch_id}".replace(
      "{batch_id}",
      encodeURIComponent(String(batchId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getSyntheticsCIBatch",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSyntheticsDefaultLocations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/settings/default_locations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getSyntheticsDefaultLocations",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTest(
    publicId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.getTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listGlobalVariables(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.listGlobalVariables",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLocations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/locations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.listLocations",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTests(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.listTests",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page_number",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async patchTest(
    publicId: string,
    body: SyntheticsPatchTestBody,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "patchTest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.patchTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsPatchTestBody", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async triggerCITests(
    body: SyntheticsCITestBody,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "triggerCITests");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/trigger/ci";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.triggerCITests",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsCITestBody", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async triggerTests(
    body: SyntheticsTriggerBody,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "triggerTests");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/trigger";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.triggerTests",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsTriggerBody", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateAPITest(
    publicId: string,
    body: SyntheticsAPITest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "updateAPITest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAPITest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/api/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.updateAPITest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsAPITest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateBrowserTest(
    publicId: string,
    body: SyntheticsBrowserTest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "updateBrowserTest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateBrowserTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/browser/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.updateBrowserTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsBrowserTest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateMobileTest(
    publicId: string,
    body: SyntheticsMobileTest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "updateMobileTest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMobileTest");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/mobile/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.updateMobileTest",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsMobileTest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updatePrivateLocation(
    locationId: string,
    body: SyntheticsPrivateLocation,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'locationId' is not null or undefined
    if (locationId === null || locationId === undefined) {
      throw new RequiredError("locationId", "updatePrivateLocation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePrivateLocation");
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/private-locations/{location_id}".replace(
        "{location_id}",
        encodeURIComponent(String(locationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.updatePrivateLocation",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsPrivateLocation", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateTestPauseStatus(
    publicId: string,
    body: SyntheticsUpdateTestPauseStatusPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "updateTestPauseStatus");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTestPauseStatus");
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}/status".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v1.updateTestPauseStatus",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SyntheticsUpdateTestPauseStatusPayload", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SyntheticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGlobalVariable(
    response: ResponseContext,
  ): Promise<SyntheticsGlobalVariable> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsGlobalVariable = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGlobalVariable",
      ) as SyntheticsGlobalVariable;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGlobalVariable = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGlobalVariable",
        "",
      ) as SyntheticsGlobalVariable;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPrivateLocation(
    response: ResponseContext,
  ): Promise<SyntheticsPrivateLocationCreationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsPrivateLocationCreationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsPrivateLocationCreationResponse",
      ) as SyntheticsPrivateLocationCreationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 402 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsPrivateLocationCreationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsPrivateLocationCreationResponse",
        "",
      ) as SyntheticsPrivateLocationCreationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsAPITest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsAPITest(
    response: ResponseContext,
  ): Promise<SyntheticsAPITest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsAPITest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITest",
      ) as SyntheticsAPITest;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 402 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITest",
        "",
      ) as SyntheticsAPITest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsBrowserTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsBrowserTest(
    response: ResponseContext,
  ): Promise<SyntheticsBrowserTest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsBrowserTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTest",
      ) as SyntheticsBrowserTest;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 402 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTest",
        "",
      ) as SyntheticsBrowserTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsMobileTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsMobileTest(
    response: ResponseContext,
  ): Promise<SyntheticsMobileTest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsMobileTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsMobileTest",
      ) as SyntheticsMobileTest;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 402 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsMobileTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsMobileTest",
        "",
      ) as SyntheticsMobileTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGlobalVariable(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deletePrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePrivateLocation(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTests(
    response: ResponseContext,
  ): Promise<SyntheticsDeleteTestsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsDeleteTestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsDeleteTestsResponse",
      ) as SyntheticsDeleteTestsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsDeleteTestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsDeleteTestsResponse",
        "",
      ) as SyntheticsDeleteTestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to editGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editGlobalVariable(
    response: ResponseContext,
  ): Promise<SyntheticsGlobalVariable> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsGlobalVariable = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGlobalVariable",
      ) as SyntheticsGlobalVariable;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGlobalVariable = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGlobalVariable",
        "",
      ) as SyntheticsGlobalVariable;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to fetchUptimes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async fetchUptimes(
    response: ResponseContext,
  ): Promise<Array<SyntheticsTestUptime>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<SyntheticsTestUptime> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<SyntheticsTestUptime>",
      ) as Array<SyntheticsTestUptime>;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<SyntheticsTestUptime> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<SyntheticsTestUptime>",
        "",
      ) as Array<SyntheticsTestUptime>;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAPITest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPITest(
    response: ResponseContext,
  ): Promise<SyntheticsAPITest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsAPITest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITest",
      ) as SyntheticsAPITest;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITest",
        "",
      ) as SyntheticsAPITest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAPITestLatestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPITestLatestResults(
    response: ResponseContext,
  ): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsGetAPITestLatestResultsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGetAPITestLatestResultsResponse",
      ) as SyntheticsGetAPITestLatestResultsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGetAPITestLatestResultsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGetAPITestLatestResultsResponse",
        "",
      ) as SyntheticsGetAPITestLatestResultsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAPITestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPITestResult(
    response: ResponseContext,
  ): Promise<SyntheticsAPITestResultFull> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsAPITestResultFull = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITestResultFull",
      ) as SyntheticsAPITestResultFull;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITestResultFull = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITestResultFull",
        "",
      ) as SyntheticsAPITestResultFull;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBrowserTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBrowserTest(
    response: ResponseContext,
  ): Promise<SyntheticsBrowserTest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsBrowserTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTest",
      ) as SyntheticsBrowserTest;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTest",
        "",
      ) as SyntheticsBrowserTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBrowserTestLatestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBrowserTestLatestResults(
    response: ResponseContext,
  ): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsGetBrowserTestLatestResultsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGetBrowserTestLatestResultsResponse",
      ) as SyntheticsGetBrowserTestLatestResultsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGetBrowserTestLatestResultsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGetBrowserTestLatestResultsResponse",
        "",
      ) as SyntheticsGetBrowserTestLatestResultsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBrowserTestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBrowserTestResult(
    response: ResponseContext,
  ): Promise<SyntheticsBrowserTestResultFull> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsBrowserTestResultFull = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTestResultFull",
      ) as SyntheticsBrowserTestResultFull;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTestResultFull = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTestResultFull",
        "",
      ) as SyntheticsBrowserTestResultFull;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGlobalVariable(
    response: ResponseContext,
  ): Promise<SyntheticsGlobalVariable> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsGlobalVariable = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGlobalVariable",
      ) as SyntheticsGlobalVariable;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGlobalVariable = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsGlobalVariable",
        "",
      ) as SyntheticsGlobalVariable;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getMobileTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMobileTest(
    response: ResponseContext,
  ): Promise<SyntheticsMobileTest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsMobileTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsMobileTest",
      ) as SyntheticsMobileTest;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsMobileTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsMobileTest",
        "",
      ) as SyntheticsMobileTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getPrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPrivateLocation(
    response: ResponseContext,
  ): Promise<SyntheticsPrivateLocation> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsPrivateLocation = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsPrivateLocation",
      ) as SyntheticsPrivateLocation;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsPrivateLocation = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsPrivateLocation",
        "",
      ) as SyntheticsPrivateLocation;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSyntheticsCIBatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsCIBatch(
    response: ResponseContext,
  ): Promise<SyntheticsBatchDetails> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsBatchDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBatchDetails",
      ) as SyntheticsBatchDetails;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBatchDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBatchDetails",
        "",
      ) as SyntheticsBatchDetails;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSyntheticsDefaultLocations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsDefaultLocations(
    response: ResponseContext,
  ): Promise<Array<string>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<string> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<string>",
      ) as Array<string>;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<string> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<string>",
        "",
      ) as Array<string>;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTest(
    response: ResponseContext,
  ): Promise<SyntheticsTestDetails> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTestDetails",
      ) as SyntheticsTestDetails;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTestDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTestDetails",
        "",
      ) as SyntheticsTestDetails;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listGlobalVariables
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGlobalVariables(
    response: ResponseContext,
  ): Promise<SyntheticsListGlobalVariablesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsListGlobalVariablesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsListGlobalVariablesResponse",
      ) as SyntheticsListGlobalVariablesResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsListGlobalVariablesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsListGlobalVariablesResponse",
        "",
      ) as SyntheticsListGlobalVariablesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listLocations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLocations(
    response: ResponseContext,
  ): Promise<SyntheticsLocations> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsLocations = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsLocations",
      ) as SyntheticsLocations;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsLocations = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsLocations",
        "",
      ) as SyntheticsLocations;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTests(
    response: ResponseContext,
  ): Promise<SyntheticsListTestsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsListTestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsListTestsResponse",
      ) as SyntheticsListTestsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsListTestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsListTestsResponse",
        "",
      ) as SyntheticsListTestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to patchTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchTest(
    response: ResponseContext,
  ): Promise<SyntheticsTestDetails> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTestDetails",
      ) as SyntheticsTestDetails;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTestDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTestDetails",
        "",
      ) as SyntheticsTestDetails;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to triggerCITests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerCITests(
    response: ResponseContext,
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTriggerCITestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTriggerCITestsResponse",
      ) as SyntheticsTriggerCITestsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTriggerCITestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTriggerCITestsResponse",
        "",
      ) as SyntheticsTriggerCITestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to triggerTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerTests(
    response: ResponseContext,
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTriggerCITestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTriggerCITestsResponse",
      ) as SyntheticsTriggerCITestsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTriggerCITestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsTriggerCITestsResponse",
        "",
      ) as SyntheticsTriggerCITestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAPITest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAPITest(
    response: ResponseContext,
  ): Promise<SyntheticsAPITest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsAPITest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITest",
      ) as SyntheticsAPITest;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsAPITest",
        "",
      ) as SyntheticsAPITest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateBrowserTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateBrowserTest(
    response: ResponseContext,
  ): Promise<SyntheticsBrowserTest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsBrowserTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTest",
      ) as SyntheticsBrowserTest;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsBrowserTest",
        "",
      ) as SyntheticsBrowserTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateMobileTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMobileTest(
    response: ResponseContext,
  ): Promise<SyntheticsMobileTest> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsMobileTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsMobileTest",
      ) as SyntheticsMobileTest;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsMobileTest = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsMobileTest",
        "",
      ) as SyntheticsMobileTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updatePrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePrivateLocation(
    response: ResponseContext,
  ): Promise<SyntheticsPrivateLocation> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsPrivateLocation = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsPrivateLocation",
      ) as SyntheticsPrivateLocation;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsPrivateLocation = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsPrivateLocation",
        "",
      ) as SyntheticsPrivateLocation;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateTestPauseStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTestPauseStatus(
    response: ResponseContext,
  ): Promise<boolean> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: boolean = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "boolean",
      ) as boolean;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: boolean = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "boolean",
        "",
      ) as boolean;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SyntheticsApiCreateGlobalVariableRequest {
  /**
   * Details of the global variable to create.
   * @type SyntheticsGlobalVariableRequest
   */
  body: SyntheticsGlobalVariableRequest;
}

export interface SyntheticsApiCreatePrivateLocationRequest {
  /**
   * Details of the private location to create.
   * @type SyntheticsPrivateLocation
   */
  body: SyntheticsPrivateLocation;
}

export interface SyntheticsApiCreateSyntheticsAPITestRequest {
  /**
   * Details of the test to create.
   * @type SyntheticsAPITest
   */
  body: SyntheticsAPITest;
}

export interface SyntheticsApiCreateSyntheticsBrowserTestRequest {
  /**
   * Details of the test to create.
   * @type SyntheticsBrowserTest
   */
  body: SyntheticsBrowserTest;
}

export interface SyntheticsApiCreateSyntheticsMobileTestRequest {
  /**
   * Details of the test to create.
   * @type SyntheticsMobileTest
   */
  body: SyntheticsMobileTest;
}

export interface SyntheticsApiDeleteGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
}

export interface SyntheticsApiDeletePrivateLocationRequest {
  /**
   * The ID of the private location.
   * @type string
   */
  locationId: string;
}

export interface SyntheticsApiDeleteTestsRequest {
  /**
   * Public ID list of the Synthetic tests to be deleted.
   * @type SyntheticsDeleteTestsPayload
   */
  body: SyntheticsDeleteTestsPayload;
}

export interface SyntheticsApiEditGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
  /**
   * Details of the global variable to update.
   * @type SyntheticsGlobalVariableRequest
   */
  body: SyntheticsGlobalVariableRequest;
}

export interface SyntheticsApiFetchUptimesRequest {
  /**
   * Public ID list of the Synthetic tests and timeframe.
   * @type SyntheticsFetchUptimesPayload
   */
  body: SyntheticsFetchUptimesPayload;
}

export interface SyntheticsApiGetAPITestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetAPITestLatestResultsRequest {
  /**
   * The public ID of the test for which to search results for.
   * @type string
   */
  publicId: string;
  /**
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
   * @type number
   */
  toTs?: number;
  /**
   * Locations for which to query results.
   * @type Array<string>
   */
  probeDc?: Array<string>;
}

export interface SyntheticsApiGetAPITestResultRequest {
  /**
   * The public ID of the API test to which the target result belongs.
   * @type string
   */
  publicId: string;
  /**
   * The ID of the result to get.
   * @type string
   */
  resultId: string;
}

export interface SyntheticsApiGetBrowserTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetBrowserTestLatestResultsRequest {
  /**
   * The public ID of the browser test for which to search results
   * for.
   * @type string
   */
  publicId: string;
  /**
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
   * @type number
   */
  toTs?: number;
  /**
   * Locations for which to query results.
   * @type Array<string>
   */
  probeDc?: Array<string>;
}

export interface SyntheticsApiGetBrowserTestResultRequest {
  /**
   * The public ID of the browser test to which the target result
   * belongs.
   * @type string
   */
  publicId: string;
  /**
   * The ID of the result to get.
   * @type string
   */
  resultId: string;
}

export interface SyntheticsApiGetGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
}

export interface SyntheticsApiGetMobileTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetPrivateLocationRequest {
  /**
   * The ID of the private location.
   * @type string
   */
  locationId: string;
}

export interface SyntheticsApiGetSyntheticsCIBatchRequest {
  /**
   * The ID of the batch.
   * @type string
   */
  batchId: string;
}

export interface SyntheticsApiGetTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiListTestsRequest {
  /**
   * Used for pagination. The number of tests returned in the page.
   * @type number
   */
  pageSize?: number;
  /**
   * Used for pagination. Which page you want to retrieve. Starts at zero.
   * @type number
   */
  pageNumber?: number;
}

export interface SyntheticsApiPatchTestRequest {
  /**
   * The public ID of the test to patch.
   * @type string
   */
  publicId: string;
  /**
   * [JSON Patch](https://jsonpatch.com/) compliant list of operations
   * @type SyntheticsPatchTestBody
   */
  body: SyntheticsPatchTestBody;
}

export interface SyntheticsApiTriggerCITestsRequest {
  /**
   * Details of the test to trigger.
   * @type SyntheticsCITestBody
   */
  body: SyntheticsCITestBody;
}

export interface SyntheticsApiTriggerTestsRequest {
  /**
   * The identifiers of the tests to trigger.
   * @type SyntheticsTriggerBody
   */
  body: SyntheticsTriggerBody;
}

export interface SyntheticsApiUpdateAPITestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
  /**
   * New test details to be saved.
   * @type SyntheticsAPITest
   */
  body: SyntheticsAPITest;
}

export interface SyntheticsApiUpdateBrowserTestRequest {
  /**
   * The public ID of the test to edit.
   * @type string
   */
  publicId: string;
  /**
   * New test details to be saved.
   * @type SyntheticsBrowserTest
   */
  body: SyntheticsBrowserTest;
}

export interface SyntheticsApiUpdateMobileTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
  /**
   * New test details to be saved.
   * @type SyntheticsMobileTest
   */
  body: SyntheticsMobileTest;
}

export interface SyntheticsApiUpdatePrivateLocationRequest {
  /**
   * The ID of the private location.
   * @type string
   */
  locationId: string;
  /**
   * Details of the private location to be updated.
   * @type SyntheticsPrivateLocation
   */
  body: SyntheticsPrivateLocation;
}

export interface SyntheticsApiUpdateTestPauseStatusRequest {
  /**
   * The public ID of the Synthetic test to update.
   * @type string
   */
  publicId: string;
  /**
   * Status to set the given Synthetic test to.
   * @type SyntheticsUpdateTestPauseStatusPayload
   */
  body: SyntheticsUpdateTestPauseStatusPayload;
}

export class SyntheticsApi {
  private requestFactory: SyntheticsApiRequestFactory;
  private responseProcessor: SyntheticsApiResponseProcessor;
  private configuration: Configuration;

  private operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SyntheticsApiRequestFactory,
    responseProcessor?: SyntheticsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new SyntheticsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SyntheticsApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Create a Synthetic global variable.
   * @param param The request object
   */
  public createGlobalVariable(
    param: SyntheticsApiCreateGlobalVariableRequest,
    options?: Configuration,
  ): Promise<SyntheticsGlobalVariable> {
    const requestContextPromise = this.requestFactory.createGlobalVariable(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Create a new Synthetic private location.
   * @param param The request object
   */
  public createPrivateLocation(
    param: SyntheticsApiCreatePrivateLocationRequest,
    options?: Configuration,
  ): Promise<SyntheticsPrivateLocationCreationResponse> {
    const requestContextPromise = this.requestFactory.createPrivateLocation(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPrivateLocation(responseContext);
        });
    });
  }

  /**
   * Create a Synthetic API test.
   * @param param The request object
   */
  public createSyntheticsAPITest(
    param: SyntheticsApiCreateSyntheticsAPITestRequest,
    options?: Configuration,
  ): Promise<SyntheticsAPITest> {
    const requestContextPromise = this.requestFactory.createSyntheticsAPITest(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsAPITest(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Synthetic browser test.
   * @param param The request object
   */
  public createSyntheticsBrowserTest(
    param: SyntheticsApiCreateSyntheticsBrowserTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsBrowserTest> {
    const requestContextPromise =
      this.requestFactory.createSyntheticsBrowserTest(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsBrowserTest(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Synthetic mobile test.
   * @param param The request object
   */
  public createSyntheticsMobileTest(
    param: SyntheticsApiCreateSyntheticsMobileTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsMobileTest> {
    const requestContextPromise =
      this.requestFactory.createSyntheticsMobileTest(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsMobileTest(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Synthetic global variable.
   * @param param The request object
   */
  public deleteGlobalVariable(
    param: SyntheticsApiDeleteGlobalVariableRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteGlobalVariable(
      param.variableId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Delete a Synthetic private location.
   * @param param The request object
   */
  public deletePrivateLocation(
    param: SyntheticsApiDeletePrivateLocationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deletePrivateLocation(
      param.locationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePrivateLocation(responseContext);
        });
    });
  }

  /**
   * Delete multiple Synthetic tests by ID.
   * @param param The request object
   */
  public deleteTests(
    param: SyntheticsApiDeleteTestsRequest,
    options?: Configuration,
  ): Promise<SyntheticsDeleteTestsResponse> {
    const requestContextPromise = this.requestFactory.deleteTests(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTests(responseContext);
        });
    });
  }

  /**
   * Edit a Synthetic global variable.
   * @param param The request object
   */
  public editGlobalVariable(
    param: SyntheticsApiEditGlobalVariableRequest,
    options?: Configuration,
  ): Promise<SyntheticsGlobalVariable> {
    const requestContextPromise = this.requestFactory.editGlobalVariable(
      param.variableId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Fetch uptime for multiple Synthetic tests by ID.
   * @param param The request object
   */
  public fetchUptimes(
    param: SyntheticsApiFetchUptimesRequest,
    options?: Configuration,
  ): Promise<Array<SyntheticsTestUptime>> {
    const requestContextPromise = this.requestFactory.fetchUptimes(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.fetchUptimes(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration associated with
   * a Synthetic API test.
   * @param param The request object
   */
  public getAPITest(
    param: SyntheticsApiGetAPITestRequest,
    options?: Configuration,
  ): Promise<SyntheticsAPITest> {
    const requestContextPromise = this.requestFactory.getAPITest(
      param.publicId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPITest(responseContext);
        });
    });
  }

  /**
   * Get the last 150 test results summaries for a given Synthetic API test.
   * @param param The request object
   */
  public getAPITestLatestResults(
    param: SyntheticsApiGetAPITestLatestResultsRequest,
    options?: Configuration,
  ): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    const requestContextPromise = this.requestFactory.getAPITestLatestResults(
      param.publicId,
      param.fromTs,
      param.toTs,
      param.probeDc,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPITestLatestResults(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a specific full result from a given Synthetic API test.
   * @param param The request object
   */
  public getAPITestResult(
    param: SyntheticsApiGetAPITestResultRequest,
    options?: Configuration,
  ): Promise<SyntheticsAPITestResultFull> {
    const requestContextPromise = this.requestFactory.getAPITestResult(
      param.publicId,
      param.resultId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPITestResult(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration (including steps) associated with
   * a Synthetic browser test.
   * @param param The request object
   */
  public getBrowserTest(
    param: SyntheticsApiGetBrowserTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsBrowserTest> {
    const requestContextPromise = this.requestFactory.getBrowserTest(
      param.publicId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBrowserTest(responseContext);
        });
    });
  }

  /**
   * Get the last 150 test results summaries for a given Synthetic browser test.
   * @param param The request object
   */
  public getBrowserTestLatestResults(
    param: SyntheticsApiGetBrowserTestLatestResultsRequest,
    options?: Configuration,
  ): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    const requestContextPromise =
      this.requestFactory.getBrowserTestLatestResults(
        param.publicId,
        param.fromTs,
        param.toTs,
        param.probeDc,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBrowserTestLatestResults(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a specific full result from a given Synthetic browser test.
   * @param param The request object
   */
  public getBrowserTestResult(
    param: SyntheticsApiGetBrowserTestResultRequest,
    options?: Configuration,
  ): Promise<SyntheticsBrowserTestResultFull> {
    const requestContextPromise = this.requestFactory.getBrowserTestResult(
      param.publicId,
      param.resultId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBrowserTestResult(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration of a global variable.
   * @param param The request object
   */
  public getGlobalVariable(
    param: SyntheticsApiGetGlobalVariableRequest,
    options?: Configuration,
  ): Promise<SyntheticsGlobalVariable> {
    const requestContextPromise = this.requestFactory.getGlobalVariable(
      param.variableId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration associated with
   * a Synthetic Mobile test.
   * @param param The request object
   */
  public getMobileTest(
    param: SyntheticsApiGetMobileTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsMobileTest> {
    const requestContextPromise = this.requestFactory.getMobileTest(
      param.publicId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMobileTest(responseContext);
        });
    });
  }

  /**
   * Get a Synthetic private location.
   * @param param The request object
   */
  public getPrivateLocation(
    param: SyntheticsApiGetPrivateLocationRequest,
    options?: Configuration,
  ): Promise<SyntheticsPrivateLocation> {
    const requestContextPromise = this.requestFactory.getPrivateLocation(
      param.locationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPrivateLocation(responseContext);
        });
    });
  }

  /**
   * Get a batch's updated details.
   * @param param The request object
   */
  public getSyntheticsCIBatch(
    param: SyntheticsApiGetSyntheticsCIBatchRequest,
    options?: Configuration,
  ): Promise<SyntheticsBatchDetails> {
    const requestContextPromise = this.requestFactory.getSyntheticsCIBatch(
      param.batchId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsCIBatch(responseContext);
        });
    });
  }

  /**
   * Get the default locations settings.
   * @param param The request object
   */
  public getSyntheticsDefaultLocations(
    options?: Configuration,
  ): Promise<Array<string>> {
    const requestContextPromise =
      this.requestFactory.getSyntheticsDefaultLocations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsDefaultLocations(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the detailed configuration associated with a Synthetic test.
   * @param param The request object
   */
  public getTest(
    param: SyntheticsApiGetTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsTestDetails> {
    const requestContextPromise = this.requestFactory.getTest(
      param.publicId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTest(responseContext);
        });
    });
  }

  /**
   * Get the list of all Synthetic global variables.
   * @param param The request object
   */
  public listGlobalVariables(
    options?: Configuration,
  ): Promise<SyntheticsListGlobalVariablesResponse> {
    const requestContextPromise =
      this.requestFactory.listGlobalVariables(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGlobalVariables(responseContext);
        });
    });
  }

  /**
   * Get the list of public and private locations available for Synthetic
   * tests. No arguments required.
   * @param param The request object
   */
  public listLocations(options?: Configuration): Promise<SyntheticsLocations> {
    const requestContextPromise = this.requestFactory.listLocations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLocations(responseContext);
        });
    });
  }

  /**
   * Get the list of all Synthetic tests.
   * @param param The request object
   */
  public listTests(
    param: SyntheticsApiListTestsRequest = {},
    options?: Configuration,
  ): Promise<SyntheticsListTestsResponse> {
    const requestContextPromise = this.requestFactory.listTests(
      param.pageSize,
      param.pageNumber,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTests(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listTests returning a generator with all the items.
   */
  public async *listTestsWithPagination(
    param: SyntheticsApiListTestsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<SyntheticsTestDetails> {
    let pageSize = 100;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listTests(
        param.pageSize,
        param.pageNumber,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listTests(responseContext);
      const responseTests = response.tests;
      if (responseTests === undefined) {
        break;
      }
      const results = responseTests;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Patch the configuration of a Synthetic test with partial data.
   * @param param The request object
   */
  public patchTest(
    param: SyntheticsApiPatchTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsTestDetails> {
    const requestContextPromise = this.requestFactory.patchTest(
      param.publicId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchTest(responseContext);
        });
    });
  }

  /**
   * Trigger a set of Synthetic tests for continuous integration.
   * @param param The request object
   */
  public triggerCITests(
    param: SyntheticsApiTriggerCITestsRequest,
    options?: Configuration,
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const requestContextPromise = this.requestFactory.triggerCITests(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerCITests(responseContext);
        });
    });
  }

  /**
   * Trigger a set of Synthetic tests.
   * @param param The request object
   */
  public triggerTests(
    param: SyntheticsApiTriggerTestsRequest,
    options?: Configuration,
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const requestContextPromise = this.requestFactory.triggerTests(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerTests(responseContext);
        });
    });
  }

  /**
   * Edit the configuration of a Synthetic API test.
   * @param param The request object
   */
  public updateAPITest(
    param: SyntheticsApiUpdateAPITestRequest,
    options?: Configuration,
  ): Promise<SyntheticsAPITest> {
    const requestContextPromise = this.requestFactory.updateAPITest(
      param.publicId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAPITest(responseContext);
        });
    });
  }

  /**
   * Edit the configuration of a Synthetic browser test.
   * @param param The request object
   */
  public updateBrowserTest(
    param: SyntheticsApiUpdateBrowserTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsBrowserTest> {
    const requestContextPromise = this.requestFactory.updateBrowserTest(
      param.publicId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateBrowserTest(responseContext);
        });
    });
  }

  /**
   * Edit the configuration of a Synthetic Mobile test.
   * @param param The request object
   */
  public updateMobileTest(
    param: SyntheticsApiUpdateMobileTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsMobileTest> {
    const requestContextPromise = this.requestFactory.updateMobileTest(
      param.publicId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMobileTest(responseContext);
        });
    });
  }

  /**
   * Edit a Synthetic private location.
   * @param param The request object
   */
  public updatePrivateLocation(
    param: SyntheticsApiUpdatePrivateLocationRequest,
    options?: Configuration,
  ): Promise<SyntheticsPrivateLocation> {
    const requestContextPromise = this.requestFactory.updatePrivateLocation(
      param.locationId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePrivateLocation(responseContext);
        });
    });
  }

  /**
   * Pause or start a Synthetic test by changing the status.
   * @param param The request object
   */
  public updateTestPauseStatus(
    param: SyntheticsApiUpdateTestPauseStatusRequest,
    options?: Configuration,
  ): Promise<boolean> {
    const requestContextPromise = this.requestFactory.updateTestPauseStatus(
      param.publicId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTestPauseStatus(responseContext);
        });
    });
  }
}
