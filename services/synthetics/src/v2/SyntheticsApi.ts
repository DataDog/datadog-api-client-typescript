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
import { DeletedSuitesRequestDeleteRequest } from "./models/DeletedSuitesRequestDeleteRequest";
import { DeletedSuitesResponse } from "./models/DeletedSuitesResponse";
import { DeletedTestsRequestDeleteRequest } from "./models/DeletedTestsRequestDeleteRequest";
import { DeletedTestsResponse } from "./models/DeletedTestsResponse";
import { GlobalVariableJsonPatchRequest } from "./models/GlobalVariableJsonPatchRequest";
import { GlobalVariableResponse } from "./models/GlobalVariableResponse";
import { OnDemandConcurrencyCapAttributes } from "./models/OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "./models/OnDemandConcurrencyCapResponse";
import { SuiteCreateEditRequest } from "./models/SuiteCreateEditRequest";
import { SyntheticsNetworkTestEditRequest } from "./models/SyntheticsNetworkTestEditRequest";
import { SyntheticsNetworkTestResponse } from "./models/SyntheticsNetworkTestResponse";
import { SyntheticsSuiteResponse } from "./models/SyntheticsSuiteResponse";
import { SyntheticsSuiteSearchResponse } from "./models/SyntheticsSuiteSearchResponse";
import { version } from "../version";

export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("synthetics", version);
    }
  }
  public async createSyntheticsNetworkTest(
    body: SyntheticsNetworkTestEditRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsNetworkTest");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/network";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.createSyntheticsNetworkTest",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "SyntheticsNetworkTestEditRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createSyntheticsSuite(
    body: SuiteCreateEditRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsSuite");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.createSyntheticsSuite",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "SuiteCreateEditRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteSyntheticsSuites(
    body: DeletedSuitesRequestDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteSyntheticsSuites");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/bulk-delete";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.deleteSyntheticsSuites",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "DeletedSuitesRequestDeleteRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteSyntheticsTests(
    body: DeletedTestsRequestDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteSyntheticsTests");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/bulk-delete";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.deleteSyntheticsTests",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "DeletedTestsRequestDeleteRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async editSyntheticsSuite(
    publicId: string,
    body: SuiteCreateEditRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "editSyntheticsSuite");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSyntheticsSuite");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.editSyntheticsSuite",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "SuiteCreateEditRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getOnDemandConcurrencyCap(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/settings/on_demand_concurrency_cap";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.getOnDemandConcurrencyCap",
      SyntheticsApi.operationServers,
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

  public async getSyntheticsNetworkTest(
    publicId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsNetworkTest");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/network/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.getSyntheticsNetworkTest",
      SyntheticsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSyntheticsSuite(
    publicId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsSuite");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.getSyntheticsSuite",
      SyntheticsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async patchGlobalVariable(
    variableId: string,
    body: GlobalVariableJsonPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError("variableId", "patchGlobalVariable");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchGlobalVariable");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/variables/{variable_id}/jsonpatch".replace(
        "{variable_id}",
        encodeURIComponent(String(variableId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.patchGlobalVariable",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "GlobalVariableJsonPatchRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchSuites(
    query?: string,
    sort?: string,
    facetsOnly?: boolean,
    start?: number,
    count?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.searchSuites",
      SyntheticsApi.operationServers,
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
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (facetsOnly !== undefined) {
      requestContext.setQueryParam(
        "facets_only",
        serialize(facetsOnly, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        serialize(count, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async setOnDemandConcurrencyCap(
    body: OnDemandConcurrencyCapAttributes,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "setOnDemandConcurrencyCap");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/settings/on_demand_concurrency_cap";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.setOnDemandConcurrencyCap",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "OnDemandConcurrencyCapAttributes", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateSyntheticsNetworkTest(
    publicId: string,
    body: SyntheticsNetworkTestEditRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "updateSyntheticsNetworkTest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSyntheticsNetworkTest");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/network/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SyntheticsApi.v2.updateSyntheticsNetworkTest",
      SyntheticsApi.operationServers,
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
      serialize(body, TypingInfo, "SyntheticsNetworkTestEditRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class SyntheticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsNetworkTest(
    response: ResponseContext,
  ): Promise<SyntheticsNetworkTestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsNetworkTestResponse",
      ) as SyntheticsNetworkTestResponse;
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
      const body: SyntheticsNetworkTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsNetworkTestResponse",
        "",
      ) as SyntheticsNetworkTestResponse;
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
   * @params response Response returned by the server for a request to createSyntheticsSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsSuite(
    response: ResponseContext,
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteResponse",
      ) as SyntheticsSuiteResponse;
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
      const body: SyntheticsSuiteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteResponse",
        "",
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to deleteSyntheticsSuites
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSyntheticsSuites(
    response: ResponseContext,
  ): Promise<DeletedSuitesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeletedSuitesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeletedSuitesResponse",
      ) as DeletedSuitesResponse;
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
      const body: DeletedSuitesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeletedSuitesResponse",
        "",
      ) as DeletedSuitesResponse;
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
   * @params response Response returned by the server for a request to deleteSyntheticsTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSyntheticsTests(
    response: ResponseContext,
  ): Promise<DeletedTestsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeletedTestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeletedTestsResponse",
      ) as DeletedTestsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: DeletedTestsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeletedTestsResponse",
        "",
      ) as DeletedTestsResponse;
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
   * @params response Response returned by the server for a request to editSyntheticsSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSyntheticsSuite(
    response: ResponseContext,
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteResponse",
      ) as SyntheticsSuiteResponse;
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
      const body: SyntheticsSuiteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteResponse",
        "",
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to getOnDemandConcurrencyCap
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnDemandConcurrencyCap(
    response: ResponseContext,
  ): Promise<OnDemandConcurrencyCapResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OnDemandConcurrencyCapResponse",
      ) as OnDemandConcurrencyCapResponse;
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
      const body: OnDemandConcurrencyCapResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OnDemandConcurrencyCapResponse",
        "",
      ) as OnDemandConcurrencyCapResponse;
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
   * @params response Response returned by the server for a request to getSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsNetworkTest(
    response: ResponseContext,
  ): Promise<SyntheticsNetworkTestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsNetworkTestResponse",
      ) as SyntheticsNetworkTestResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SyntheticsNetworkTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsNetworkTestResponse",
        "",
      ) as SyntheticsNetworkTestResponse;
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
   * @params response Response returned by the server for a request to getSyntheticsSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsSuite(
    response: ResponseContext,
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteResponse",
      ) as SyntheticsSuiteResponse;
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
      const body: SyntheticsSuiteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteResponse",
        "",
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to patchGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchGlobalVariable(
    response: ResponseContext,
  ): Promise<GlobalVariableResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GlobalVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GlobalVariableResponse",
      ) as GlobalVariableResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GlobalVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GlobalVariableResponse",
        "",
      ) as GlobalVariableResponse;
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
   * @params response Response returned by the server for a request to searchSuites
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSuites(
    response: ResponseContext,
  ): Promise<SyntheticsSuiteSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteSearchResponse",
      ) as SyntheticsSuiteSearchResponse;
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
      const body: SyntheticsSuiteSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsSuiteSearchResponse",
        "",
      ) as SyntheticsSuiteSearchResponse;
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
   * @params response Response returned by the server for a request to setOnDemandConcurrencyCap
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setOnDemandConcurrencyCap(
    response: ResponseContext,
  ): Promise<OnDemandConcurrencyCapResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OnDemandConcurrencyCapResponse",
      ) as OnDemandConcurrencyCapResponse;
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
      const body: OnDemandConcurrencyCapResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OnDemandConcurrencyCapResponse",
        "",
      ) as OnDemandConcurrencyCapResponse;
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
   * @params response Response returned by the server for a request to updateSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSyntheticsNetworkTest(
    response: ResponseContext,
  ): Promise<SyntheticsNetworkTestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsNetworkTestResponse",
      ) as SyntheticsNetworkTestResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SyntheticsNetworkTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SyntheticsNetworkTestResponse",
        "",
      ) as SyntheticsNetworkTestResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SyntheticsApiCreateSyntheticsNetworkTestRequest {
  /**
   * @type SyntheticsNetworkTestEditRequest
   */
  body: SyntheticsNetworkTestEditRequest;
}

export interface SyntheticsApiCreateSyntheticsSuiteRequest {
  /**
   * @type SuiteCreateEditRequest
   */
  body: SuiteCreateEditRequest;
}

export interface SyntheticsApiDeleteSyntheticsSuitesRequest {
  /**
   * @type DeletedSuitesRequestDeleteRequest
   */
  body: DeletedSuitesRequestDeleteRequest;
}

export interface SyntheticsApiDeleteSyntheticsTestsRequest {
  /**
   * @type DeletedTestsRequestDeleteRequest
   */
  body: DeletedTestsRequestDeleteRequest;
}

export interface SyntheticsApiEditSyntheticsSuiteRequest {
  /**
   * The public ID of the suite to edit.
   * @type string
   */
  publicId: string;
  /**
   * New suite details to be saved.
   * @type SuiteCreateEditRequest
   */
  body: SuiteCreateEditRequest;
}

export interface SyntheticsApiGetSyntheticsNetworkTestRequest {
  /**
   * The public ID of the Network Path test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetSyntheticsSuiteRequest {
  /**
   * The public ID of the suite to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiPatchGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
  /**
   * JSON Patch document with operations to apply.
   * @type GlobalVariableJsonPatchRequest
   */
  body: GlobalVariableJsonPatchRequest;
}

export interface SyntheticsApiSearchSuitesRequest {
  /**
   * The search query.
   * @type string
   */
  query?: string;
  /**
   * The sort order for the results (e.g., `name,asc` or `name,desc`).
   * @type string
   */
  sort?: string;
  /**
   * If true, return only facets instead of full test details.
   * @type boolean
   */
  facetsOnly?: boolean;
  /**
   * The offset from which to start returning results.
   * @type number
   */
  start?: number;
  /**
   * The maximum number of results to return.
   * @type number
   */
  count?: number;
}

export interface SyntheticsApiSetOnDemandConcurrencyCapRequest {
  /**
   * .
   * @type OnDemandConcurrencyCapAttributes
   */
  body: OnDemandConcurrencyCapAttributes;
}

export interface SyntheticsApiUpdateSyntheticsNetworkTestRequest {
  /**
   * The public ID of the Network Path test to edit.
   * @type string
   */
  publicId: string;
  /**
   * New Network Path test details to be saved.
   * @type SyntheticsNetworkTestEditRequest
   */
  body: SyntheticsNetworkTestEditRequest;
}

export class SyntheticsApi {
  private requestFactory: SyntheticsApiRequestFactory;
  private responseProcessor: SyntheticsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

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
  }

  /**
   * @param param The request object
   */
  public createSyntheticsNetworkTest(
    param: SyntheticsApiCreateSyntheticsNetworkTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsNetworkTestResponse> {
    const requestContextPromise =
      this.requestFactory.createSyntheticsNetworkTest(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsNetworkTest(
            responseContext,
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public createSyntheticsSuite(
    param: SyntheticsApiCreateSyntheticsSuiteRequest,
    options?: Configuration,
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.createSyntheticsSuite(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsSuite(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public deleteSyntheticsSuites(
    param: SyntheticsApiDeleteSyntheticsSuitesRequest,
    options?: Configuration,
  ): Promise<DeletedSuitesResponse> {
    const requestContextPromise = this.requestFactory.deleteSyntheticsSuites(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSyntheticsSuites(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public deleteSyntheticsTests(
    param: SyntheticsApiDeleteSyntheticsTestsRequest,
    options?: Configuration,
  ): Promise<DeletedTestsResponse> {
    const requestContextPromise = this.requestFactory.deleteSyntheticsTests(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSyntheticsTests(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public editSyntheticsSuite(
    param: SyntheticsApiEditSyntheticsSuiteRequest,
    options?: Configuration,
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.editSyntheticsSuite(
      param.publicId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSyntheticsSuite(responseContext);
        });
    });
  }

  /**
   * Get the on-demand concurrency cap.
   * @param param The request object
   */
  public getOnDemandConcurrencyCap(
    options?: Configuration,
  ): Promise<OnDemandConcurrencyCapResponse> {
    const requestContextPromise =
      this.requestFactory.getOnDemandConcurrencyCap(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnDemandConcurrencyCap(
            responseContext,
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public getSyntheticsNetworkTest(
    param: SyntheticsApiGetSyntheticsNetworkTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsNetworkTestResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsNetworkTest(
      param.publicId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsNetworkTest(
            responseContext,
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public getSyntheticsSuite(
    param: SyntheticsApiGetSyntheticsSuiteRequest,
    options?: Configuration,
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsSuite(
      param.publicId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsSuite(responseContext);
        });
    });
  }

  /**
   * Patch a global variable using JSON Patch (RFC 6902).
   * This endpoint allows partial updates to a global variable by specifying only the fields to modify.
   *
   * Common operations include:
   * - Replace field values: `{"op": "replace", "path": "/name", "value": "new_name"}`
   * - Update nested values: `{"op": "replace", "path": "/value/value", "value": "new_value"}`
   * - Add/update tags: `{"op": "add", "path": "/tags/-", "value": "new_tag"}`
   * - Remove fields: `{"op": "remove", "path": "/description"}`
   * @param param The request object
   */
  public patchGlobalVariable(
    param: SyntheticsApiPatchGlobalVariableRequest,
    options?: Configuration,
  ): Promise<GlobalVariableResponse> {
    const requestContextPromise = this.requestFactory.patchGlobalVariable(
      param.variableId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Search for Synthetics suites.
   * @param param The request object
   */
  public searchSuites(
    param: SyntheticsApiSearchSuitesRequest = {},
    options?: Configuration,
  ): Promise<SyntheticsSuiteSearchResponse> {
    const requestContextPromise = this.requestFactory.searchSuites(
      param.query,
      param.sort,
      param.facetsOnly,
      param.start,
      param.count,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSuites(responseContext);
        });
    });
  }

  /**
   * Save new value for on-demand concurrency cap.
   * @param param The request object
   */
  public setOnDemandConcurrencyCap(
    param: SyntheticsApiSetOnDemandConcurrencyCapRequest,
    options?: Configuration,
  ): Promise<OnDemandConcurrencyCapResponse> {
    const requestContextPromise = this.requestFactory.setOnDemandConcurrencyCap(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setOnDemandConcurrencyCap(
            responseContext,
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public updateSyntheticsNetworkTest(
    param: SyntheticsApiUpdateSyntheticsNetworkTestRequest,
    options?: Configuration,
  ): Promise<SyntheticsNetworkTestResponse> {
    const requestContextPromise =
      this.requestFactory.updateSyntheticsNetworkTest(
        param.publicId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSyntheticsNetworkTest(
            responseContext,
          );
        });
    });
  }
}
