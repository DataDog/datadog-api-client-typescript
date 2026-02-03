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
import { ViewershipHistorySessionArray } from "../models/ViewershipHistorySessionArray";
import { Watch } from "../models/Watch";
import { WatcherArray } from "../models/WatcherArray";

export class RumReplayViewershipApiRequestFactory extends BaseAPIRequestFactory {
  public async createRumReplaySessionWatch(
    sessionId: string,
    body: Watch,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "createRumReplaySessionWatch");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumReplaySessionWatch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/watches".replace(
        "{session_id}",
        encodeURIComponent(String(sessionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayViewershipApi.createRumReplaySessionWatch")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Watch", ""),
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

  public async deleteRumReplaySessionWatch(
    sessionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "deleteRumReplaySessionWatch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/watches".replace(
        "{session_id}",
        encodeURIComponent(String(sessionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayViewershipApi.deleteRumReplaySessionWatch")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listRumReplaySessionWatchers(
    sessionId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "listRumReplaySessionWatchers");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/watchers".replace(
        "{session_id}",
        encodeURIComponent(String(sessionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayViewershipApi.listRumReplaySessionWatchers")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
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

  public async listRumReplayViewershipHistorySessions(
    filterWatchedAtStart?: number,
    pageNumber?: number,
    filterCreatedBy?: string,
    filterWatchedAtEnd?: number,
    filterSessionIds?: string,
    pageSize?: number,
    filterApplicationId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/replay/viewership-history/sessions";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.RumReplayViewershipApi.listRumReplayViewershipHistorySessions"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterWatchedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[watched_at][start]",
        ObjectSerializer.serialize(filterWatchedAtStart, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (filterCreatedBy !== undefined) {
      requestContext.setQueryParam(
        "filter[created_by]",
        ObjectSerializer.serialize(filterCreatedBy, "string", ""),
        ""
      );
    }
    if (filterWatchedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[watched_at][end]",
        ObjectSerializer.serialize(filterWatchedAtEnd, "number", "int64"),
        ""
      );
    }
    if (filterSessionIds !== undefined) {
      requestContext.setQueryParam(
        "filter[session_ids]",
        ObjectSerializer.serialize(filterSessionIds, "string", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
      );
    }
    if (filterApplicationId !== undefined) {
      requestContext.setQueryParam(
        "filter[application_id]",
        ObjectSerializer.serialize(filterApplicationId, "string", ""),
        ""
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

export class RumReplayViewershipApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRumReplaySessionWatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumReplaySessionWatch(
    response: ResponseContext
  ): Promise<Watch> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Watch = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Watch"
      ) as Watch;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Watch = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Watch",
        ""
      ) as Watch;
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
   * @params response Response returned by the server for a request to deleteRumReplaySessionWatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRumReplaySessionWatch(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to listRumReplaySessionWatchers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumReplaySessionWatchers(
    response: ResponseContext
  ): Promise<WatcherArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WatcherArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WatcherArray"
      ) as WatcherArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: WatcherArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WatcherArray",
        ""
      ) as WatcherArray;
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
   * @params response Response returned by the server for a request to listRumReplayViewershipHistorySessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumReplayViewershipHistorySessions(
    response: ResponseContext
  ): Promise<ViewershipHistorySessionArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ViewershipHistorySessionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ViewershipHistorySessionArray"
      ) as ViewershipHistorySessionArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: ViewershipHistorySessionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ViewershipHistorySessionArray",
        ""
      ) as ViewershipHistorySessionArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumReplayViewershipApiCreateRumReplaySessionWatchRequest {
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

export interface RumReplayViewershipApiDeleteRumReplaySessionWatchRequest {
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
}

export interface RumReplayViewershipApiListRumReplaySessionWatchersRequest {
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

export interface RumReplayViewershipApiListRumReplayViewershipHistorySessionsRequest {
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

export class RumReplayViewershipApi {
  private requestFactory: RumReplayViewershipApiRequestFactory;
  private responseProcessor: RumReplayViewershipApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumReplayViewershipApiRequestFactory,
    responseProcessor?: RumReplayViewershipApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RumReplayViewershipApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumReplayViewershipApiResponseProcessor();
  }

  /**
   * Record a session watch.
   * @param param The request object
   */
  public createRumReplaySessionWatch(
    param: RumReplayViewershipApiCreateRumReplaySessionWatchRequest,
    options?: Configuration
  ): Promise<Watch> {
    const requestContextPromise =
      this.requestFactory.createRumReplaySessionWatch(
        param.sessionId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumReplaySessionWatch(
            responseContext
          );
        });
    });
  }

  /**
   * Delete session watch history.
   * @param param The request object
   */
  public deleteRumReplaySessionWatch(
    param: RumReplayViewershipApiDeleteRumReplaySessionWatchRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteRumReplaySessionWatch(param.sessionId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRumReplaySessionWatch(
            responseContext
          );
        });
    });
  }

  /**
   * List session watchers.
   * @param param The request object
   */
  public listRumReplaySessionWatchers(
    param: RumReplayViewershipApiListRumReplaySessionWatchersRequest,
    options?: Configuration
  ): Promise<WatcherArray> {
    const requestContextPromise =
      this.requestFactory.listRumReplaySessionWatchers(
        param.sessionId,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumReplaySessionWatchers(
            responseContext
          );
        });
    });
  }

  /**
   * List watched sessions.
   * @param param The request object
   */
  public listRumReplayViewershipHistorySessions(
    param: RumReplayViewershipApiListRumReplayViewershipHistorySessionsRequest = {},
    options?: Configuration
  ): Promise<ViewershipHistorySessionArray> {
    const requestContextPromise =
      this.requestFactory.listRumReplayViewershipHistorySessions(
        param.filterWatchedAtStart,
        param.pageNumber,
        param.filterCreatedBy,
        param.filterWatchedAtEnd,
        param.filterSessionIds,
        param.pageSize,
        param.filterApplicationId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumReplayViewershipHistorySessions(
            responseContext
          );
        });
    });
  }
}
