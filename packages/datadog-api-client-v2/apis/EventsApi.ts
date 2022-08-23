import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
import { isCodeInRange } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { EventResponse } from "../models/EventResponse";
import { EventsListRequest } from "../models/EventsListRequest";
import { EventsListResponse } from "../models/EventsListResponse";
import { EventsRequestPage } from "../models/EventsRequestPage";
import { EventsSort } from "../models/EventsSort";

export class EventsApiRequestFactory extends BaseAPIRequestFactory {
  public async listEvents(
    filterQuery?: string,
    filterFrom?: string,
    filterTo?: string,
    sort?: EventsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listEvents'");
    if (!_config.unstableOperations["v2.listEvents"]) {
      throw new Error("Unstable operation 'listEvents' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/events";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.EventsApi.listEvents"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", "")
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "string", "")
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "string", "")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "EventsSort", "")
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", "")
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32")
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

  public async searchEvents(
    body?: EventsListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchEvents'");
    if (!_config.unstableOperations["v2.searchEvents"]) {
      throw new Error("Unstable operation 'searchEvents' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/events/search";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.EventsApi.searchEvents"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "EventsListRequest", ""),
      contentType
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

export class EventsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEvents(
    response: ResponseContext
  ): Promise<EventsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: EventsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventsListResponse",
        ""
      ) as EventsListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventsListResponse",
        ""
      ) as EventsListResponse;
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
   * @params response Response returned by the server for a request to searchEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchEvents(
    response: ResponseContext
  ): Promise<EventsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: EventsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventsListResponse",
        ""
      ) as EventsListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventsListResponse",
        ""
      ) as EventsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface EventsApiListEventsRequest {
  /**
   * Search query following events syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested events.
   * @type string
   */
  filterFrom?: string;
  /**
   * Maximum timestamp for requested events.
   * @type string
   */
  filterTo?: string;
  /**
   * Order of events in results.
   * @type EventsSort
   */
  sort?: EventsSort;
  /**
   * List following results with a cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of events in the response.
   * @type number
   */
  pageLimit?: number;
}

export interface EventsApiSearchEventsRequest {
  /**
   * @type EventsListRequest
   */
  body?: EventsListRequest;
}

export class EventsApi {
  private requestFactory: EventsApiRequestFactory;
  private responseProcessor: EventsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: EventsApiRequestFactory,
    responseProcessor?: EventsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new EventsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new EventsApiResponseProcessor();
  }

  /**
   * List endpoint returns events that match an events search query.
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to see your latest events.
   * @param param The request object
   */
  public listEvents(
    param: EventsApiListEventsRequest = {},
    options?: Configuration
  ): Promise<EventsListResponse> {
    const requestContextPromise = this.requestFactory.listEvents(
      param.filterQuery,
      param.filterFrom,
      param.filterTo,
      param.sort,
      param.pageCursor,
      param.pageLimit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listEvents returning a generator with all the items.
   */
  public async *listEventsWithPagination(
    param: EventsApiListEventsRequest = {},
    options?: Configuration
  ): AsyncGenerator<EventResponse> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listEvents(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listEvents(responseContext);
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
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageAfter;
    }
  }

  /**
   * List endpoint returns events that match an events search query.
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to build complex events filtering and search.
   * @param param The request object
   */
  public searchEvents(
    param: EventsApiSearchEventsRequest = {},
    options?: Configuration
  ): Promise<EventsListResponse> {
    const requestContextPromise = this.requestFactory.searchEvents(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchEvents returning a generator with all the items.
   */
  public async *searchEventsWithPagination(
    param: EventsApiSearchEventsRequest = {},
    options?: Configuration
  ): AsyncGenerator<EventResponse> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new EventsListRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new EventsRequestPage();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchEvents(
        param.body,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.searchEvents(
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
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.body.page.cursor = cursorMetaPageAfter;
    }
  }
}
