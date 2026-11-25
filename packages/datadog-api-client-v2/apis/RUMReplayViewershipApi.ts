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
import { Int64Input } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { ViewershipHistorySessionArray } from "../models/ViewershipHistorySessionArray";
import { Watch } from "../models/Watch";
import { WatcherArray } from "../models/WatcherArray";

export class RUMReplayViewershipApiRequestFactory extends BaseAPIRequestFactory {
  public async createRUMReplaySessionWatch(
    sessionId: string,
    body: Watch,
    _options?: Configuration
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
        encodeURIComponent(String(sessionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayViewershipApi.createRUMReplaySessionWatch")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Watch", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
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
        encodeURIComponent(String(sessionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayViewershipApi.deleteRUMReplaySessionWatch")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    pageSize?: Int64Input,
    pageNumber?: Int64Input,
    _options?: Configuration
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
        encodeURIComponent(String(sessionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayViewershipApi.listRUMReplaySessionWatchers")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listRUMReplayViewershipHistorySessions(
    filterWatchedAtStart?: Int64Input,
    pageNumber?: Int64Input,
    filterCreatedBy?: string,
    filterWatchedAtEnd?: Int64Input,
    filterSessionIds?: string,
    pageSize?: Int64Input,
    filterApplicationId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/replay/viewership-history/sessions";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.RUMReplayViewershipApi.listRUMReplayViewershipHistorySessions"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
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
        ObjectSerializer.serialize(pageSize, "number", "int64"),
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

export class RUMReplayViewershipApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRUMReplaySessionWatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMReplaySessionWatch(
    response: ResponseContext
  ): Promise<Watch> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Watch = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Watch",
        "",
        this.configuration?.preserveLargeIntegers
      ) as Watch;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Watch",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteRUMReplaySessionWatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMReplaySessionWatch(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to listRUMReplaySessionWatchers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplaySessionWatchers(
    response: ResponseContext
  ): Promise<WatcherArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WatcherArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "WatcherArray",
        "",
        this.configuration?.preserveLargeIntegers
      ) as WatcherArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "WatcherArray",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to listRUMReplayViewershipHistorySessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplayViewershipHistorySessions(
    response: ResponseContext
  ): Promise<ViewershipHistorySessionArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ViewershipHistorySessionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "ViewershipHistorySessionArray",
        "",
        this.configuration?.preserveLargeIntegers
      ) as ViewershipHistorySessionArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "ViewershipHistorySessionArray",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @type Int64Input
   */
  pageSize?: Int64Input;
  /**
   * Page number for pagination (0-indexed).
   * @type Int64Input
   */
  pageNumber?: Int64Input;
}

export interface RUMReplayViewershipApiListRUMReplayViewershipHistorySessionsRequest {
  /**
   * Start timestamp in milliseconds for watched_at filter.
   * @type Int64Input
   */
  filterWatchedAtStart?: Int64Input;
  /**
   * Page number for pagination (0-indexed).
   * @type Int64Input
   */
  pageNumber?: Int64Input;
  /**
   * Filter by user UUID. Defaults to current user if not specified.
   * @type string
   */
  filterCreatedBy?: string;
  /**
   * End timestamp in milliseconds for watched_at filter.
   * @type Int64Input
   */
  filterWatchedAtEnd?: Int64Input;
  /**
   * Comma-separated list of session IDs to filter by.
   * @type string
   */
  filterSessionIds?: string;
  /**
   * Number of items per page.
   * @type Int64Input
   */
  pageSize?: Int64Input;
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

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMReplayViewershipApiRequestFactory,
    responseProcessor?: RUMReplayViewershipApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMReplayViewershipApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new RUMReplayViewershipApiResponseProcessor(configuration);
  }

  /**
   * Record a session watch.
   * @param param The request object
   */
  public createRUMReplaySessionWatch(
    param: RUMReplayViewershipApiCreateRUMReplaySessionWatchRequest,
    options?: Configuration
  ): Promise<Watch> {
    const requestContextPromise =
      this.requestFactory.createRUMReplaySessionWatch(
        param.sessionId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMReplaySessionWatch(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteRUMReplaySessionWatch(param.sessionId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMReplaySessionWatch(
            responseContext
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
    options?: Configuration
  ): Promise<WatcherArray> {
    const requestContextPromise =
      this.requestFactory.listRUMReplaySessionWatchers(
        param.sessionId,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplaySessionWatchers(
            responseContext
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
    options?: Configuration
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
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplayViewershipHistorySessions(
            responseContext
          );
        });
    });
  }
}
