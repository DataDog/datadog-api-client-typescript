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
import { IncidentRelatedObject } from "./models/IncidentRelatedObject";
import { IncidentTeamCreateRequest } from "./models/IncidentTeamCreateRequest";
import { IncidentTeamResponse } from "./models/IncidentTeamResponse";
import { IncidentTeamsResponse } from "./models/IncidentTeamsResponse";
import { IncidentTeamUpdateRequest } from "./models/IncidentTeamUpdateRequest";
import { version } from "../version";

export class IncidentTeamsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("incident-teams", version);
    }
  }
  public async createIncidentTeam(
    body: IncidentTeamCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentTeamsApi.v2.createIncidentTeam"]) {
      throw new Error(
        "Unstable operation 'createIncidentTeam' is disabled. Enable it by setting `configuration.unstableOperations['IncidentTeamsApi.v2.createIncidentTeam'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/teams";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentTeamsApi.v2.createIncidentTeam",
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
      serialize(body, TypingInfo, "IncidentTeamCreateRequest", ""),
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

  public async deleteIncidentTeam(
    teamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentTeamsApi.v2.deleteIncidentTeam"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentTeam' is disabled. Enable it by setting `configuration.unstableOperations['IncidentTeamsApi.v2.deleteIncidentTeam'] = true`",
      );
    }

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "deleteIncidentTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/teams/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentTeamsApi.v2.deleteIncidentTeam",
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

  public async getIncidentTeam(
    teamId: string,
    include?: IncidentRelatedObject,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentTeamsApi.v2.getIncidentTeam"]) {
      throw new Error(
        "Unstable operation 'getIncidentTeam' is disabled. Enable it by setting `configuration.unstableOperations['IncidentTeamsApi.v2.getIncidentTeam'] = true`",
      );
    }

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getIncidentTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/teams/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentTeamsApi.v2.getIncidentTeam",
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "IncidentRelatedObject", ""),
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

  public async listIncidentTeams(
    include?: IncidentRelatedObject,
    pageSize?: number,
    pageOffset?: number,
    filter?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentTeamsApi.v2.listIncidentTeams"]) {
      throw new Error(
        "Unstable operation 'listIncidentTeams' is disabled. Enable it by setting `configuration.unstableOperations['IncidentTeamsApi.v2.listIncidentTeams'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/teams";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentTeamsApi.v2.listIncidentTeams",
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "IncidentRelatedObject", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
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

  public async updateIncidentTeam(
    teamId: string,
    body: IncidentTeamUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentTeamsApi.v2.updateIncidentTeam"]) {
      throw new Error(
        "Unstable operation 'updateIncidentTeam' is disabled. Enable it by setting `configuration.unstableOperations['IncidentTeamsApi.v2.updateIncidentTeam'] = true`",
      );
    }

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "updateIncidentTeam");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/teams/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentTeamsApi.v2.updateIncidentTeam",
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
      serialize(body, TypingInfo, "IncidentTeamUpdateRequest", ""),
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

export class IncidentTeamsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createIncidentTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentTeam(
    response: ResponseContext,
  ): Promise<IncidentTeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamResponse",
      ) as IncidentTeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamResponse",
        "",
      ) as IncidentTeamResponse;
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
   * @params response Response returned by the server for a request to deleteIncidentTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentTeam(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to getIncidentTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentTeam(
    response: ResponseContext,
  ): Promise<IncidentTeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamResponse",
      ) as IncidentTeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamResponse",
        "",
      ) as IncidentTeamResponse;
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
   * @params response Response returned by the server for a request to listIncidentTeams
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTeams(
    response: ResponseContext,
  ): Promise<IncidentTeamsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamsResponse",
      ) as IncidentTeamsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamsResponse",
        "",
      ) as IncidentTeamsResponse;
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
   * @params response Response returned by the server for a request to updateIncidentTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentTeam(
    response: ResponseContext,
  ): Promise<IncidentTeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamResponse",
      ) as IncidentTeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTeamResponse",
        "",
      ) as IncidentTeamResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface IncidentTeamsApiCreateIncidentTeamRequest {
  /**
   * Incident Team Payload.
   * @type IncidentTeamCreateRequest
   */
  body: IncidentTeamCreateRequest;
}

export interface IncidentTeamsApiDeleteIncidentTeamRequest {
  /**
   * The ID of the incident team.
   * @type string
   */
  teamId: string;
}

export interface IncidentTeamsApiGetIncidentTeamRequest {
  /**
   * The ID of the incident team.
   * @type string
   */
  teamId: string;
  /**
   * Specifies which types of related objects should be included in the response.
   * @type IncidentRelatedObject
   */
  include?: IncidentRelatedObject;
}

export interface IncidentTeamsApiListIncidentTeamsRequest {
  /**
   * Specifies which types of related objects should be included in the response.
   * @type IncidentRelatedObject
   */
  include?: IncidentRelatedObject;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * A search query that filters teams by name.
   * @type string
   */
  filter?: string;
}

export interface IncidentTeamsApiUpdateIncidentTeamRequest {
  /**
   * The ID of the incident team.
   * @type string
   */
  teamId: string;
  /**
   * Incident Team Payload.
   * @type IncidentTeamUpdateRequest
   */
  body: IncidentTeamUpdateRequest;
}

export class IncidentTeamsApi {
  private requestFactory: IncidentTeamsApiRequestFactory;
  private responseProcessor: IncidentTeamsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: IncidentTeamsApiRequestFactory,
    responseProcessor?: IncidentTeamsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new IncidentTeamsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new IncidentTeamsApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(IncidentTeamsApi.operationServers).length > 0) {
      this.configuration.addOperationServers(IncidentTeamsApi.operationServers);
    }
  }

  /**
   * Creates a new incident team.
   * @param param The request object
   */
  public createIncidentTeam(
    param: IncidentTeamsApiCreateIncidentTeamRequest,
    options?: Configuration,
  ): Promise<IncidentTeamResponse> {
    const requestContextPromise = this.requestFactory.createIncidentTeam(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentTeam(responseContext);
        });
    });
  }

  /**
   * Deletes an existing incident team.
   * @param param The request object
   */
  public deleteIncidentTeam(
    param: IncidentTeamsApiDeleteIncidentTeamRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentTeam(
      param.teamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentTeam(responseContext);
        });
    });
  }

  /**
   * Get details of an incident team. If the `include[users]` query parameter is provided,
   * the included attribute will contain the users related to these incident teams.
   * @param param The request object
   */
  public getIncidentTeam(
    param: IncidentTeamsApiGetIncidentTeamRequest,
    options?: Configuration,
  ): Promise<IncidentTeamResponse> {
    const requestContextPromise = this.requestFactory.getIncidentTeam(
      param.teamId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentTeam(responseContext);
        });
    });
  }

  /**
   * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
   * @param param The request object
   */
  public listIncidentTeams(
    param: IncidentTeamsApiListIncidentTeamsRequest = {},
    options?: Configuration,
  ): Promise<IncidentTeamsResponse> {
    const requestContextPromise = this.requestFactory.listIncidentTeams(
      param.include,
      param.pageSize,
      param.pageOffset,
      param.filter,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentTeams(responseContext);
        });
    });
  }

  /**
   * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
   * @param param The request object
   */
  public updateIncidentTeam(
    param: IncidentTeamsApiUpdateIncidentTeamRequest,
    options?: Configuration,
  ): Promise<IncidentTeamResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentTeam(
      param.teamId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentTeam(responseContext);
        });
    });
  }
}
