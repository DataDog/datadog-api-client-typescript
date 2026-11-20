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
import { ViewershipHistorySessionArray } from "./models/ViewershipHistorySessionArray";
import { Watch } from "./models/Watch";
import { WatcherArray } from "./models/WatcherArray";
import { version } from "../version";

export class RUMReplayViewershipApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-replay-viewership", version);
    }
  }
  public async createRUMReplaySessionWatch(
    sessionId: string,
    body: Watch,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "createRUMReplaySessionWatch");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMReplaySessionWatch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/watches".replace(
        "{session_id}",
        encodeURIComponent(String(sessionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayViewershipApi.v2.createRUMReplaySessionWatch",
      RUMReplayViewershipApi.operationServers,
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
      serialize(body, TypingInfo, "Watch", ""),
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

  public async deleteRUMReplaySessionWatch(
    sessionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "deleteRUMReplaySessionWatch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/watches".replace(
        "{session_id}",
        encodeURIComponent(String(sessionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayViewershipApi.v2.deleteRUMReplaySessionWatch",
      RUMReplayViewershipApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listRUMReplaySessionWatchers(
    sessionId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "listRUMReplaySessionWatchers");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/watchers".replace(
        "{session_id}",
        encodeURIComponent(String(sessionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayViewershipApi.v2.listRUMReplaySessionWatchers",
      RUMReplayViewershipApi.operationServers,
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
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

  public async listRUMReplayViewershipHistorySessions(
    filterWatchedAtStart?: number,
    pageNumber?: number,
    filterCreatedBy?: string,
    filterWatchedAtEnd?: number,
    filterSessionIds?: string,
    pageSize?: number,
    filterApplicationId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/replay/viewership-history/sessions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayViewershipApi.v2.listRUMReplayViewershipHistorySessions",
      RUMReplayViewershipApi.operationServers,
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
    if (filterWatchedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[watched_at][start]",
        serialize(filterWatchedAtStart, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterCreatedBy !== undefined) {
      requestContext.setQueryParam(
        "filter[created_by]",
        serialize(filterCreatedBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterWatchedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[watched_at][end]",
        serialize(filterWatchedAtEnd, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterSessionIds !== undefined) {
      requestContext.setQueryParam(
        "filter[session_ids]",
        serialize(filterSessionIds, TypingInfo, "string", ""),
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
    if (filterApplicationId !== undefined) {
      requestContext.setQueryParam(
        "filter[application_id]",
        serialize(filterApplicationId, TypingInfo, "string", ""),
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
}

export class RUMReplayViewershipApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRUMReplaySessionWatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMReplaySessionWatch(
    response: ResponseContext,
  ): Promise<Watch> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: Watch = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Watch",
      ) as Watch;
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
      const body: Watch = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Watch",
        "",
      ) as Watch;
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
   * @params response Response returned by the server for a request to deleteRUMReplaySessionWatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMReplaySessionWatch(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to listRUMReplaySessionWatchers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplaySessionWatchers(
    response: ResponseContext,
  ): Promise<WatcherArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WatcherArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WatcherArray",
      ) as WatcherArray;
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
      const body: WatcherArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WatcherArray",
        "",
      ) as WatcherArray;
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
   * @params response Response returned by the server for a request to listRUMReplayViewershipHistorySessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplayViewershipHistorySessions(
    response: ResponseContext,
  ): Promise<ViewershipHistorySessionArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ViewershipHistorySessionArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ViewershipHistorySessionArray",
      ) as ViewershipHistorySessionArray;
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
      const body: ViewershipHistorySessionArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ViewershipHistorySessionArray",
        "",
      ) as ViewershipHistorySessionArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMReplayViewershipApiCreateRUMReplaySessionWatchRequest {
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
  /**
   * @type Watch
   */
  body: Watch;
}

export interface RUMReplayViewershipApiDeleteRUMReplaySessionWatchRequest {
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
}

export interface RUMReplayViewershipApiListRUMReplaySessionWatchersRequest {
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
  /**
   * Number of items per page.
   * @type number
   */
  pageSize?: number;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
}

export interface RUMReplayViewershipApiListRUMReplayViewershipHistorySessionsRequest {
  /**
   * Start timestamp in milliseconds for watched_at filter.
   * @type number
   */
  filterWatchedAtStart?: number;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by user UUID. Defaults to current user if not specified.
   * @type string
   */
  filterCreatedBy?: string;
  /**
   * End timestamp in milliseconds for watched_at filter.
   * @type number
   */
  filterWatchedAtEnd?: number;
  /**
   * Comma-separated list of session IDs to filter by.
   * @type string
   */
  filterSessionIds?: string;
  /**
   * Number of items per page.
   * @type number
   */
  pageSize?: number;
  /**
   * Filter by application ID.
   * @type string
   */
  filterApplicationId?: string;
}

export class RUMReplayViewershipApi {
  private requestFactory: RUMReplayViewershipApiRequestFactory;
  private responseProcessor: RUMReplayViewershipApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMReplayViewershipApiRequestFactory,
    responseProcessor?: RUMReplayViewershipApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMReplayViewershipApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMReplayViewershipApiResponseProcessor();
  }

  /**
   * Record a session watch.
   * @param param The request object
   */
  public createRUMReplaySessionWatch(
    param: RUMReplayViewershipApiCreateRUMReplaySessionWatchRequest,
    options?: Configuration,
  ): Promise<Watch> {
    const requestContextPromise =
      this.requestFactory.createRUMReplaySessionWatch(
        param.sessionId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMReplaySessionWatch(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete session watch history.
   * @param param The request object
   */
  public deleteRUMReplaySessionWatch(
    param: RUMReplayViewershipApiDeleteRUMReplaySessionWatchRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteRUMReplaySessionWatch(param.sessionId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMReplaySessionWatch(
            responseContext,
          );
        });
    });
  }

  /**
   * List session watchers.
   * @param param The request object
   */
  public listRUMReplaySessionWatchers(
    param: RUMReplayViewershipApiListRUMReplaySessionWatchersRequest,
    options?: Configuration,
  ): Promise<WatcherArray> {
    const requestContextPromise =
      this.requestFactory.listRUMReplaySessionWatchers(
        param.sessionId,
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplaySessionWatchers(
            responseContext,
          );
        });
    });
  }

  /**
   * List watched sessions.
   * @param param The request object
   */
  public listRUMReplayViewershipHistorySessions(
    param: RUMReplayViewershipApiListRUMReplayViewershipHistorySessionsRequest = {},
    options?: Configuration,
  ): Promise<ViewershipHistorySessionArray> {
    const requestContextPromise =
      this.requestFactory.listRUMReplayViewershipHistorySessions(
        param.filterWatchedAtStart,
        param.pageNumber,
        param.filterCreatedBy,
        param.filterWatchedAtEnd,
        param.filterSessionIds,
        param.pageSize,
        param.filterApplicationId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplayViewershipHistorySessions(
            responseContext,
          );
        });
    });
  }
}
