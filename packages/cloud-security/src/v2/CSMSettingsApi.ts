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
} from "@datadog/datadog-api-client-core";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CsmAgentlessHostFacetsResponse } from "./models/CsmAgentlessHostFacetsResponse";
import { CsmAgentlessHostsResponse } from "./models/CsmAgentlessHostsResponse";
import { CsmHostFacetInfoResponse } from "./models/CsmHostFacetInfoResponse";
import { CsmUnifiedHostFacetsResponse } from "./models/CsmUnifiedHostFacetsResponse";
import { CsmUnifiedHostsResponse } from "./models/CsmUnifiedHostsResponse";
import { GetResourceEvaluationFiltersResponse } from "./models/GetResourceEvaluationFiltersResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { UpdateResourceEvaluationFiltersRequest } from "./models/UpdateResourceEvaluationFiltersRequest";
import { UpdateResourceEvaluationFiltersResponse } from "./models/UpdateResourceEvaluationFiltersResponse";
import { version } from "../version";

export class CSMSettingsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-security", version);
    }
  }
  public async getCSMAgentlessHostFacetInfo(
    facet: string,
    search?: string,
    query?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCSMAgentlessHostFacetInfo'");
    if (!_config.unstableOperations["v2.getCSMAgentlessHostFacetInfo"]) {
      throw new Error(
        "Unstable operation 'getCSMAgentlessHostFacetInfo' is disabled. Enable it by setting `configuration.unstableOperations['v2.getCSMAgentlessHostFacetInfo'] = true`",
      );
    }

    // verify required parameter 'facet' is not null or undefined
    if (facet === null || facet === undefined) {
      throw new RequiredError("facet", "getCSMAgentlessHostFacetInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/settings/agentless_hosts/facet_info";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CSMSettingsApi.getCSMAgentlessHostFacetInfo",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (facet !== undefined) {
      requestContext.setQueryParam(
        "facet",
        serialize(facet, TypingInfo, "string", ""),
        "",
      );
    }
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        serialize(search, TypingInfo, "string", ""),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
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

  public async getCSMUnifiedHostFacetInfo(
    facet: string,
    search?: string,
    query?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCSMUnifiedHostFacetInfo'");
    if (!_config.unstableOperations["v2.getCSMUnifiedHostFacetInfo"]) {
      throw new Error(
        "Unstable operation 'getCSMUnifiedHostFacetInfo' is disabled. Enable it by setting `configuration.unstableOperations['v2.getCSMUnifiedHostFacetInfo'] = true`",
      );
    }

    // verify required parameter 'facet' is not null or undefined
    if (facet === null || facet === undefined) {
      throw new RequiredError("facet", "getCSMUnifiedHostFacetInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/settings/hosts/facet_info";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CSMSettingsApi.getCSMUnifiedHostFacetInfo",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (facet !== undefined) {
      requestContext.setQueryParam(
        "facet",
        serialize(facet, TypingInfo, "string", ""),
        "",
      );
    }
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        serialize(search, TypingInfo, "string", ""),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
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

  public async getResourceEvaluationFilters(
    cloudProvider?: string,
    accountId?: string,
    skipCache?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/resource_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getResourceEvaluationFilters",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (cloudProvider !== undefined) {
      requestContext.setQueryParam(
        "cloud_provider",
        serialize(cloudProvider, TypingInfo, "string", ""),
        "",
      );
    }
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        serialize(accountId, TypingInfo, "string", ""),
        "",
      );
    }
    if (skipCache !== undefined) {
      requestContext.setQueryParam(
        "skip_cache",
        serialize(skipCache, TypingInfo, "boolean", ""),
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

  public async listCSMAgentlessHostFacets(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCSMAgentlessHostFacets'");
    if (!_config.unstableOperations["v2.listCSMAgentlessHostFacets"]) {
      throw new Error(
        "Unstable operation 'listCSMAgentlessHostFacets' is disabled. Enable it by setting `configuration.unstableOperations['v2.listCSMAgentlessHostFacets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/csm/settings/agentless_hosts/facets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CSMSettingsApi.listCSMAgentlessHostFacets",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCSMAgentlessHosts(
    page?: number,
    size?: number,
    query?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCSMAgentlessHosts'");
    if (!_config.unstableOperations["v2.listCSMAgentlessHosts"]) {
      throw new Error(
        "Unstable operation 'listCSMAgentlessHosts' is disabled. Enable it by setting `configuration.unstableOperations['v2.listCSMAgentlessHosts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/csm/settings/agentless_hosts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CSMSettingsApi.listCSMAgentlessHosts",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (size !== undefined) {
      requestContext.setQueryParam(
        "size",
        serialize(size, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
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

  public async listCSMUnifiedHostFacets(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCSMUnifiedHostFacets'");
    if (!_config.unstableOperations["v2.listCSMUnifiedHostFacets"]) {
      throw new Error(
        "Unstable operation 'listCSMUnifiedHostFacets' is disabled. Enable it by setting `configuration.unstableOperations['v2.listCSMUnifiedHostFacets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/csm/settings/hosts/facets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CSMSettingsApi.listCSMUnifiedHostFacets",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCSMUnifiedHosts(
    page?: number,
    size?: number,
    query?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCSMUnifiedHosts'");
    if (!_config.unstableOperations["v2.listCSMUnifiedHosts"]) {
      throw new Error(
        "Unstable operation 'listCSMUnifiedHosts' is disabled. Enable it by setting `configuration.unstableOperations['v2.listCSMUnifiedHosts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/csm/settings/hosts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CSMSettingsApi.listCSMUnifiedHosts",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (size !== undefined) {
      requestContext.setQueryParam(
        "size",
        serialize(size, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
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

  public async updateResourceEvaluationFilters(
    body: UpdateResourceEvaluationFiltersRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateResourceEvaluationFilters");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/resource_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateResourceEvaluationFilters",
      CSMSettingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateResourceEvaluationFiltersRequest", ""),
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

export class CSMSettingsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCSMAgentlessHostFacetInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCSMAgentlessHostFacetInfo(
    response: ResponseContext,
  ): Promise<CsmHostFacetInfoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmHostFacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmHostFacetInfoResponse",
      ) as CsmHostFacetInfoResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
      const body: CsmHostFacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmHostFacetInfoResponse",
        "",
      ) as CsmHostFacetInfoResponse;
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
   * @params response Response returned by the server for a request to getCSMUnifiedHostFacetInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCSMUnifiedHostFacetInfo(
    response: ResponseContext,
  ): Promise<CsmHostFacetInfoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmHostFacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmHostFacetInfoResponse",
      ) as CsmHostFacetInfoResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
      const body: CsmHostFacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmHostFacetInfoResponse",
        "",
      ) as CsmHostFacetInfoResponse;
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
   * @params response Response returned by the server for a request to getResourceEvaluationFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getResourceEvaluationFilters(
    response: ResponseContext,
  ): Promise<GetResourceEvaluationFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetResourceEvaluationFiltersResponse",
      ) as GetResourceEvaluationFiltersResponse;
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
      const body: GetResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetResourceEvaluationFiltersResponse",
        "",
      ) as GetResourceEvaluationFiltersResponse;
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
   * @params response Response returned by the server for a request to listCSMAgentlessHostFacets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCSMAgentlessHostFacets(
    response: ResponseContext,
  ): Promise<CsmAgentlessHostFacetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmAgentlessHostFacetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentlessHostFacetsResponse",
      ) as CsmAgentlessHostFacetsResponse;
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
      const body: CsmAgentlessHostFacetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentlessHostFacetsResponse",
        "",
      ) as CsmAgentlessHostFacetsResponse;
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
   * @params response Response returned by the server for a request to listCSMAgentlessHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCSMAgentlessHosts(
    response: ResponseContext,
  ): Promise<CsmAgentlessHostsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmAgentlessHostsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentlessHostsResponse",
      ) as CsmAgentlessHostsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
      const body: CsmAgentlessHostsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentlessHostsResponse",
        "",
      ) as CsmAgentlessHostsResponse;
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
   * @params response Response returned by the server for a request to listCSMUnifiedHostFacets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCSMUnifiedHostFacets(
    response: ResponseContext,
  ): Promise<CsmUnifiedHostFacetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmUnifiedHostFacetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmUnifiedHostFacetsResponse",
      ) as CsmUnifiedHostFacetsResponse;
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
      const body: CsmUnifiedHostFacetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmUnifiedHostFacetsResponse",
        "",
      ) as CsmUnifiedHostFacetsResponse;
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
   * @params response Response returned by the server for a request to listCSMUnifiedHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCSMUnifiedHosts(
    response: ResponseContext,
  ): Promise<CsmUnifiedHostsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmUnifiedHostsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmUnifiedHostsResponse",
      ) as CsmUnifiedHostsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
      const body: CsmUnifiedHostsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmUnifiedHostsResponse",
        "",
      ) as CsmUnifiedHostsResponse;
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
   * @params response Response returned by the server for a request to updateResourceEvaluationFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateResourceEvaluationFilters(
    response: ResponseContext,
  ): Promise<UpdateResourceEvaluationFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: UpdateResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateResourceEvaluationFiltersResponse",
      ) as UpdateResourceEvaluationFiltersResponse;
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
      const body: UpdateResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateResourceEvaluationFiltersResponse",
        "",
      ) as UpdateResourceEvaluationFiltersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CSMSettingsApiGetCSMAgentlessHostFacetInfoRequest {
  /**
   * The facet identifier to retrieve value distribution for. Valid values are `resource_name`, `account_id`, `resource_type`, `cloud_provider`, `has_vulnerability_scanning`, and `has_posture_management`.
   * @type string
   */
  facet: string;
  /**
   * A search string to filter the facet values.
   * @type string
   */
  search?: string;
  /**
   * A filter query to scope the facet value counts.
   * @type string
   */
  query?: string;
}

export interface CSMSettingsApiGetCSMUnifiedHostFacetInfoRequest {
  /**
   * The facet identifier to retrieve value distribution for. Valid values include `resource_name`, `account_id`, `resource_type`, `cloud_provider`, `agentless_vulnerability_scanning`, `agentless_posture_management`, `hostname`, `agent_version`, `os`, `cluster_name`, `agent_posture_management`, `agent_cws_enabled`, `agent_csm_vm_hosts_enabled`, and `agent_csm_vm_containers_enabled`.
   * @type string
   */
  facet: string;
  /**
   * A search string to filter the facet values.
   * @type string
   */
  search?: string;
  /**
   * A filter query to scope the facet value counts.
   * @type string
   */
  query?: string;
}

export interface CSMSettingsApiGetResourceEvaluationFiltersRequest {
  /**
   * Filter resource filters by cloud provider (e.g. aws, gcp, azure).
   * @type string
   */
  cloudProvider?: string;
  /**
   * Filter resource filters by cloud provider account ID. This parameter is only valid when provider is specified.
   * @type string
   */
  accountId?: string;
  /**
   * Skip cache for resource filters.
   * @type boolean
   */
  skipCache?: boolean;
}

export interface CSMSettingsApiListCSMAgentlessHostsRequest {
  /**
   * The page index for pagination (zero-based).
   * @type number
   */
  page?: number;
  /**
   * The number of agentless hosts to return per page.
   * @type number
   */
  size?: number;
  /**
   * A search query string to filter agentless hosts.
   * @type string
   */
  query?: string;
}

export interface CSMSettingsApiListCSMUnifiedHostsRequest {
  /**
   * The page index for pagination (zero-based).
   * @type number
   */
  page?: number;
  /**
   * The number of hosts to return per page.
   * @type number
   */
  size?: number;
  /**
   * A search query string to filter unified hosts.
   * @type string
   */
  query?: string;
}

export interface CSMSettingsApiUpdateResourceEvaluationFiltersRequest {
  /**
   * @type UpdateResourceEvaluationFiltersRequest
   */
  body: UpdateResourceEvaluationFiltersRequest;
}

export class CSMSettingsApi {
  private requestFactory: CSMSettingsApiRequestFactory;
  private responseProcessor: CSMSettingsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CSMSettingsApiRequestFactory,
    responseProcessor?: CSMSettingsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new CSMSettingsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CSMSettingsApiResponseProcessor();
  }

  /**
   * Get the value distribution for a specific agentless host facet, with optional search and filtering.
   * @param param The request object
   */
  public getCSMAgentlessHostFacetInfo(
    param: CSMSettingsApiGetCSMAgentlessHostFacetInfoRequest,
    options?: Configuration,
  ): Promise<CsmHostFacetInfoResponse> {
    const requestContextPromise =
      this.requestFactory.getCSMAgentlessHostFacetInfo(
        param.facet,
        param.search,
        param.query,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCSMAgentlessHostFacetInfo(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the value distribution for a specific unified host facet, with optional search and filtering.
   * @param param The request object
   */
  public getCSMUnifiedHostFacetInfo(
    param: CSMSettingsApiGetCSMUnifiedHostFacetInfoRequest,
    options?: Configuration,
  ): Promise<CsmHostFacetInfoResponse> {
    const requestContextPromise =
      this.requestFactory.getCSMUnifiedHostFacetInfo(
        param.facet,
        param.search,
        param.query,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCSMUnifiedHostFacetInfo(
            responseContext,
          );
        });
    });
  }

  /**
   * List resource filters.
   * @param param The request object
   */
  public getResourceEvaluationFilters(
    param: CSMSettingsApiGetResourceEvaluationFiltersRequest = {},
    options?: Configuration,
  ): Promise<GetResourceEvaluationFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.getResourceEvaluationFilters(
        param.cloudProvider,
        param.accountId,
        param.skipCache,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getResourceEvaluationFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of available facets for filtering agentless hosts.
   * @param param The request object
   */
  public listCSMAgentlessHostFacets(
    options?: Configuration,
  ): Promise<CsmAgentlessHostFacetsResponse> {
    const requestContextPromise =
      this.requestFactory.listCSMAgentlessHostFacets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCSMAgentlessHostFacets(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of agentless hosts for CSM, with optional pagination and filtering.
   * @param param The request object
   */
  public listCSMAgentlessHosts(
    param: CSMSettingsApiListCSMAgentlessHostsRequest = {},
    options?: Configuration,
  ): Promise<CsmAgentlessHostsResponse> {
    const requestContextPromise = this.requestFactory.listCSMAgentlessHosts(
      param.page,
      param.size,
      param.query,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCSMAgentlessHosts(responseContext);
        });
    });
  }

  /**
   * Get the list of available facets for filtering unified hosts.
   * @param param The request object
   */
  public listCSMUnifiedHostFacets(
    options?: Configuration,
  ): Promise<CsmUnifiedHostFacetsResponse> {
    const requestContextPromise =
      this.requestFactory.listCSMUnifiedHostFacets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCSMUnifiedHostFacets(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of unified hosts for CSM, combining agent and agentless host data, with optional pagination and filtering.
   * @param param The request object
   */
  public listCSMUnifiedHosts(
    param: CSMSettingsApiListCSMUnifiedHostsRequest = {},
    options?: Configuration,
  ): Promise<CsmUnifiedHostsResponse> {
    const requestContextPromise = this.requestFactory.listCSMUnifiedHosts(
      param.page,
      param.size,
      param.query,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCSMUnifiedHosts(responseContext);
        });
    });
  }

  /**
   * Update resource filters.
   * @param param The request object
   */
  public updateResourceEvaluationFilters(
    param: CSMSettingsApiUpdateResourceEvaluationFiltersRequest,
    options?: Configuration,
  ): Promise<UpdateResourceEvaluationFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.updateResourceEvaluationFilters(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateResourceEvaluationFilters(
            responseContext,
          );
        });
    });
  }
}
