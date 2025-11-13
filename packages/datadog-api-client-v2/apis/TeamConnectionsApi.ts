import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { TeamConnection } from "../models/TeamConnection";
import { TeamConnectionCreateRequest } from "../models/TeamConnectionCreateRequest";
import { TeamConnectionDeleteRequest } from "../models/TeamConnectionDeleteRequest";
import { TeamConnectionsResponse } from "../models/TeamConnectionsResponse";

export class TeamConnectionsApiRequestFactory extends BaseAPIRequestFactory {
  public async createTeamConnections(
    body: TeamConnectionCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createTeamConnections'");
    if (!_config.unstableOperations["v2.createTeamConnections"]) {
      throw new Error("Unstable operation 'createTeamConnections' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/team/connections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamConnectionsApi.createTeamConnections")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamConnectionCreateRequest", ""),
      contentType
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

  public async deleteTeamConnections(
    body: TeamConnectionDeleteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteTeamConnections'");
    if (!_config.unstableOperations["v2.deleteTeamConnections"]) {
      throw new Error("Unstable operation 'deleteTeamConnections' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteTeamConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/team/connections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamConnectionsApi.deleteTeamConnections")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamConnectionDeleteRequest", ""),
      contentType
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

  public async listTeamConnections(
    pageSize?: number,
    pageNumber?: number,
    filterSources?: Array<string>,
    filterTeamIds?: Array<string>,
    filterConnectedTeamIds?: Array<string>,
    filterConnectionIds?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listTeamConnections'");
    if (!_config.unstableOperations["v2.listTeamConnections"]) {
      throw new Error("Unstable operation 'listTeamConnections' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/team/connections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamConnectionsApi.listTeamConnections")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (filterSources !== undefined) {
      requestContext.setQueryParam(
        "filter[sources]",
        ObjectSerializer.serialize(filterSources, "Array<string>", ""),
        "csv"
      );
    }
    if (filterTeamIds !== undefined) {
      requestContext.setQueryParam(
        "filter[team_ids]",
        ObjectSerializer.serialize(filterTeamIds, "Array<string>", ""),
        "csv"
      );
    }
    if (filterConnectedTeamIds !== undefined) {
      requestContext.setQueryParam(
        "filter[connected_team_ids]",
        ObjectSerializer.serialize(filterConnectedTeamIds, "Array<string>", ""),
        "csv"
      );
    }
    if (filterConnectionIds !== undefined) {
      requestContext.setQueryParam(
        "filter[connection_ids]",
        ObjectSerializer.serialize(filterConnectionIds, "Array<string>", ""),
        "csv"
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
}

export class TeamConnectionsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTeamConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamConnections(
    response: ResponseContext
  ): Promise<TeamConnectionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TeamConnectionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamConnectionsResponse"
      ) as TeamConnectionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TeamConnectionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamConnectionsResponse",
        ""
      ) as TeamConnectionsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteTeamConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamConnections(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
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
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTeamConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeamConnections(
    response: ResponseContext
  ): Promise<TeamConnectionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamConnectionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamConnectionsResponse"
      ) as TeamConnectionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TeamConnectionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamConnectionsResponse",
        ""
      ) as TeamConnectionsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface TeamConnectionsApiCreateTeamConnectionsRequest {
  /**
   * @type TeamConnectionCreateRequest
   */
  body: TeamConnectionCreateRequest;
}

export interface TeamConnectionsApiDeleteTeamConnectionsRequest {
  /**
   * @type TeamConnectionDeleteRequest
   */
  body: TeamConnectionDeleteRequest;
}

export interface TeamConnectionsApiListTeamConnectionsRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter team connections by external source systems.
   * @type Array<string>
   */
  filterSources?: Array<string>;
  /**
   * Filter team connections by Datadog team IDs.
   * @type Array<string>
   */
  filterTeamIds?: Array<string>;
  /**
   * Filter team connections by connected team IDs from external systems.
   * @type Array<string>
   */
  filterConnectedTeamIds?: Array<string>;
  /**
   * Filter team connections by connection IDs.
   * @type Array<string>
   */
  filterConnectionIds?: Array<string>;
}

export class TeamConnectionsApi {
  private requestFactory: TeamConnectionsApiRequestFactory;
  private responseProcessor: TeamConnectionsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TeamConnectionsApiRequestFactory,
    responseProcessor?: TeamConnectionsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TeamConnectionsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TeamConnectionsApiResponseProcessor();
  }

  /**
   * Create multiple team connections.
   * @param param The request object
   */
  public createTeamConnections(
    param: TeamConnectionsApiCreateTeamConnectionsRequest,
    options?: Configuration
  ): Promise<TeamConnectionsResponse> {
    const requestContextPromise = this.requestFactory.createTeamConnections(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamConnections(responseContext);
        });
    });
  }

  /**
   * Delete multiple team connections.
   * @param param The request object
   */
  public deleteTeamConnections(
    param: TeamConnectionsApiDeleteTeamConnectionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeamConnections(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeamConnections(responseContext);
        });
    });
  }

  /**
   * Returns all team connections.
   * @param param The request object
   */
  public listTeamConnections(
    param: TeamConnectionsApiListTeamConnectionsRequest = {},
    options?: Configuration
  ): Promise<TeamConnectionsResponse> {
    const requestContextPromise = this.requestFactory.listTeamConnections(
      param.pageSize,
      param.pageNumber,
      param.filterSources,
      param.filterTeamIds,
      param.filterConnectedTeamIds,
      param.filterConnectionIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTeamConnections(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listTeamConnections returning a generator with all the items.
   */
  public async *listTeamConnectionsWithPagination(
    param: TeamConnectionsApiListTeamConnectionsRequest = {},
    options?: Configuration
  ): AsyncGenerator<TeamConnection> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listTeamConnections(
        param.pageSize,
        param.pageNumber,
        param.filterSources,
        param.filterTeamIds,
        param.filterConnectedTeamIds,
        param.filterConnectionIds,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listTeamConnections(
        responseContext
      );
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }
}
