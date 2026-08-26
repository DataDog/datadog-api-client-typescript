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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { TeamsOwnershipMappingBatchRequest } from "./models/TeamsOwnershipMappingBatchRequest";
import { TeamsOwnershipMappingBatchResponse } from "./models/TeamsOwnershipMappingBatchResponse";
import { TeamsOwnershipMappingCreateRequest } from "./models/TeamsOwnershipMappingCreateRequest";
import { TeamsOwnershipMappingResponse } from "./models/TeamsOwnershipMappingResponse";
import { TeamsOwnershipMappingsResponse } from "./models/TeamsOwnershipMappingsResponse";
import { TeamsOwnershipRulesResponse } from "./models/TeamsOwnershipRulesResponse";
import { version } from "../version";

export class RumTeamsOwnershipApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-teams-ownership", version);
    }
  }
  public async createTeamsOwnershipMapping(
    body: TeamsOwnershipMappingCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumTeamsOwnershipApi.v2.createTeamsOwnershipMapping"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createTeamsOwnershipMapping' is disabled. Enable it by setting `configuration.unstableOperations['RumTeamsOwnershipApi.v2.createTeamsOwnershipMapping'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamsOwnershipMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/teams-ownership/mappings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumTeamsOwnershipApi.v2.createTeamsOwnershipMapping",
      RumTeamsOwnershipApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TeamsOwnershipMappingCreateRequest", ""),
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

  public async createTeamsOwnershipMappingsBatch(
    body: TeamsOwnershipMappingBatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumTeamsOwnershipApi.v2.createTeamsOwnershipMappingsBatch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createTeamsOwnershipMappingsBatch' is disabled. Enable it by setting `configuration.unstableOperations['RumTeamsOwnershipApi.v2.createTeamsOwnershipMappingsBatch'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamsOwnershipMappingsBatch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/teams-ownership/mappings/operations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumTeamsOwnershipApi.v2.createTeamsOwnershipMappingsBatch",
      RumTeamsOwnershipApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TeamsOwnershipMappingBatchRequest", ""),
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

  public async deleteTeamsOwnershipMapping(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumTeamsOwnershipApi.v2.deleteTeamsOwnershipMapping"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteTeamsOwnershipMapping' is disabled. Enable it by setting `configuration.unstableOperations['RumTeamsOwnershipApi.v2.deleteTeamsOwnershipMapping'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteTeamsOwnershipMapping");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/teams-ownership/mappings/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumTeamsOwnershipApi.v2.deleteTeamsOwnershipMapping",
      RumTeamsOwnershipApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTeamsOwnershipMapping(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumTeamsOwnershipApi.v2.getTeamsOwnershipMapping"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getTeamsOwnershipMapping' is disabled. Enable it by setting `configuration.unstableOperations['RumTeamsOwnershipApi.v2.getTeamsOwnershipMapping'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getTeamsOwnershipMapping");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/teams-ownership/mappings/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumTeamsOwnershipApi.v2.getTeamsOwnershipMapping",
      RumTeamsOwnershipApi.operationServers,
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
    ]);

    return requestContext;
  }

  public async listTeamsOwnershipMappings(
    filterViewName?: Array<string>,
    filterTeamHandle?: Array<string>,
    filterApplicationId?: Array<string>,
    filterService?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumTeamsOwnershipApi.v2.listTeamsOwnershipMappings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listTeamsOwnershipMappings' is disabled. Enable it by setting `configuration.unstableOperations['RumTeamsOwnershipApi.v2.listTeamsOwnershipMappings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/teams-ownership/mappings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumTeamsOwnershipApi.v2.listTeamsOwnershipMappings",
      RumTeamsOwnershipApi.operationServers,
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
    if (filterViewName !== undefined) {
      requestContext.setQueryParam(
        "filter[view_name]",
        serialize(filterViewName, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterTeamHandle !== undefined) {
      requestContext.setQueryParam(
        "filter[team_handle]",
        serialize(filterTeamHandle, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterApplicationId !== undefined) {
      requestContext.setQueryParam(
        "filter[application_id]",
        serialize(filterApplicationId, TypingInfo, "Array<string>", "uuid"),
        "multi",
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        serialize(filterService, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTeamsOwnershipRules(
    filterViewName?: Array<string>,
    filterTeamHandle?: Array<string>,
    filterApplicationId?: Array<string>,
    filterService?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumTeamsOwnershipApi.v2.listTeamsOwnershipRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listTeamsOwnershipRules' is disabled. Enable it by setting `configuration.unstableOperations['RumTeamsOwnershipApi.v2.listTeamsOwnershipRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/teams-ownership/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumTeamsOwnershipApi.v2.listTeamsOwnershipRules",
      RumTeamsOwnershipApi.operationServers,
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
    if (filterViewName !== undefined) {
      requestContext.setQueryParam(
        "filter[view_name]",
        serialize(filterViewName, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterTeamHandle !== undefined) {
      requestContext.setQueryParam(
        "filter[team_handle]",
        serialize(filterTeamHandle, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterApplicationId !== undefined) {
      requestContext.setQueryParam(
        "filter[application_id]",
        serialize(filterApplicationId, TypingInfo, "Array<string>", "uuid"),
        "multi",
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        serialize(filterService, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class RumTeamsOwnershipApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTeamsOwnershipMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamsOwnershipMapping(
    response: ResponseContext,
  ): Promise<TeamsOwnershipMappingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TeamsOwnershipMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingResponse",
      ) as TeamsOwnershipMappingResponse;
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
      const body: TeamsOwnershipMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingResponse",
        "",
      ) as TeamsOwnershipMappingResponse;
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
   * @params response Response returned by the server for a request to createTeamsOwnershipMappingsBatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamsOwnershipMappingsBatch(
    response: ResponseContext,
  ): Promise<TeamsOwnershipMappingBatchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamsOwnershipMappingBatchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingBatchResponse",
      ) as TeamsOwnershipMappingBatchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: TeamsOwnershipMappingBatchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingBatchResponse",
        "",
      ) as TeamsOwnershipMappingBatchResponse;
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
   * @params response Response returned by the server for a request to deleteTeamsOwnershipMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamsOwnershipMapping(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getTeamsOwnershipMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamsOwnershipMapping(
    response: ResponseContext,
  ): Promise<TeamsOwnershipMappingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamsOwnershipMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingResponse",
      ) as TeamsOwnershipMappingResponse;
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
      const body: TeamsOwnershipMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingResponse",
        "",
      ) as TeamsOwnershipMappingResponse;
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
   * @params response Response returned by the server for a request to listTeamsOwnershipMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeamsOwnershipMappings(
    response: ResponseContext,
  ): Promise<TeamsOwnershipMappingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamsOwnershipMappingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingsResponse",
      ) as TeamsOwnershipMappingsResponse;
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
      const body: TeamsOwnershipMappingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipMappingsResponse",
        "",
      ) as TeamsOwnershipMappingsResponse;
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
   * @params response Response returned by the server for a request to listTeamsOwnershipRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeamsOwnershipRules(
    response: ResponseContext,
  ): Promise<TeamsOwnershipRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamsOwnershipRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipRulesResponse",
      ) as TeamsOwnershipRulesResponse;
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
      const body: TeamsOwnershipRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsOwnershipRulesResponse",
        "",
      ) as TeamsOwnershipRulesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RumTeamsOwnershipApiCreateTeamsOwnershipMappingRequest {
  /**
   * The definition of the teams ownership mapping to create.
   * @type TeamsOwnershipMappingCreateRequest
   */
  body: TeamsOwnershipMappingCreateRequest;
}

export interface RumTeamsOwnershipApiCreateTeamsOwnershipMappingsBatchRequest {
  /**
   * The list of add and remove operations to apply atomically.
   * @type TeamsOwnershipMappingBatchRequest
   */
  body: TeamsOwnershipMappingBatchRequest;
}

export interface RumTeamsOwnershipApiDeleteTeamsOwnershipMappingRequest {
  /**
   * The ID of the teams ownership mapping.
   * @type string
   */
  id: string;
}

export interface RumTeamsOwnershipApiGetTeamsOwnershipMappingRequest {
  /**
   * The ID of the teams ownership mapping.
   * @type string
   */
  id: string;
}

export interface RumTeamsOwnershipApiListTeamsOwnershipMappingsRequest {
  /**
   * Filter mappings by RUM view name.
   * @type Array<string>
   */
  filterViewName?: Array<string>;
  /**
   * Filter mappings by owning team handle.
   * @type Array<string>
   */
  filterTeamHandle?: Array<string>;
  /**
   * Filter mappings by RUM application ID. Each value must be a valid UUID.
   * @type Array<string>
   */
  filterApplicationId?: Array<string>;
  /**
   * Filter mappings by RUM application service name.
   * @type Array<string>
   */
  filterService?: Array<string>;
}

export interface RumTeamsOwnershipApiListTeamsOwnershipRulesRequest {
  /**
   * Filter mappings by RUM view name.
   * @type Array<string>
   */
  filterViewName?: Array<string>;
  /**
   * Filter mappings by owning team handle.
   * @type Array<string>
   */
  filterTeamHandle?: Array<string>;
  /**
   * Filter mappings by RUM application ID. Each value must be a valid UUID.
   * @type Array<string>
   */
  filterApplicationId?: Array<string>;
  /**
   * Filter mappings by RUM application service name.
   * @type Array<string>
   */
  filterService?: Array<string>;
}

export class RumTeamsOwnershipApi {
  private requestFactory: RumTeamsOwnershipApiRequestFactory;
  private responseProcessor: RumTeamsOwnershipApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumTeamsOwnershipApiRequestFactory,
    responseProcessor?: RumTeamsOwnershipApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RumTeamsOwnershipApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumTeamsOwnershipApiResponseProcessor();
  }

  /**
   * Create a teams ownership mapping for your organization.
   * Returns the teams ownership mapping object from the request body when the request is successful.
   * @param param The request object
   */
  public createTeamsOwnershipMapping(
    param: RumTeamsOwnershipApiCreateTeamsOwnershipMappingRequest,
    options?: Configuration,
  ): Promise<TeamsOwnershipMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createTeamsOwnershipMapping(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamsOwnershipMapping(
            responseContext,
          );
        });
    });
  }

  /**
   * Add and remove teams ownership mappings for your organization in a single atomic request, following
   * the JSON:API [atomic operations extension](https://jsonapi.org/ext/atomic/).
   * Operations are applied together: if any operation is invalid, none of the operations are applied.
   * Add operations are processed before remove operations, so results may not appear in the same
   * order as the request.
   * @param param The request object
   */
  public createTeamsOwnershipMappingsBatch(
    param: RumTeamsOwnershipApiCreateTeamsOwnershipMappingsBatchRequest,
    options?: Configuration,
  ): Promise<TeamsOwnershipMappingBatchResponse> {
    const requestContextPromise =
      this.requestFactory.createTeamsOwnershipMappingsBatch(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamsOwnershipMappingsBatch(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific teams ownership mapping from your organization.
   * @param param The request object
   */
  public deleteTeamsOwnershipMapping(
    param: RumTeamsOwnershipApiDeleteTeamsOwnershipMappingRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteTeamsOwnershipMapping(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeamsOwnershipMapping(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a specific teams ownership mapping from your organization.
   * @param param The request object
   */
  public getTeamsOwnershipMapping(
    param: RumTeamsOwnershipApiGetTeamsOwnershipMappingRequest,
    options?: Configuration,
  ): Promise<TeamsOwnershipMappingResponse> {
    const requestContextPromise = this.requestFactory.getTeamsOwnershipMapping(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamsOwnershipMapping(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of teams ownership mappings for your organization, optionally filtered.
   * @param param The request object
   */
  public listTeamsOwnershipMappings(
    param: RumTeamsOwnershipApiListTeamsOwnershipMappingsRequest = {},
    options?: Configuration,
  ): Promise<TeamsOwnershipMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listTeamsOwnershipMappings(
        param.filterViewName,
        param.filterTeamHandle,
        param.filterApplicationId,
        param.filterService,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTeamsOwnershipMappings(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of teams ownership rules for your organization, optionally filtered.
   * Rules group the underlying mappings by `view_name`, `application_id`, `service`, and `match_type`,
   * collapsing every team that owns the same view into a single entry.
   * @param param The request object
   */
  public listTeamsOwnershipRules(
    param: RumTeamsOwnershipApiListTeamsOwnershipRulesRequest = {},
    options?: Configuration,
  ): Promise<TeamsOwnershipRulesResponse> {
    const requestContextPromise = this.requestFactory.listTeamsOwnershipRules(
      param.filterViewName,
      param.filterTeamHandle,
      param.filterApplicationId,
      param.filterService,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTeamsOwnershipRules(
            responseContext,
          );
        });
    });
  }
}
