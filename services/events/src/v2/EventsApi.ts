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
import { EventCreateRequestPayload } from "./models/EventCreateRequestPayload";
import { EventCreateResponsePayload } from "./models/EventCreateResponsePayload";
import { EventResponse } from "./models/EventResponse";
import { EventsListRequest } from "./models/EventsListRequest";
import { EventsListResponse } from "./models/EventsListResponse";
import { EventsRequestPage } from "./models/EventsRequestPage";
import { EventsSort } from "./models/EventsSort";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { V2EventResponse } from "./models/V2EventResponse";
import { version } from "../version";

export class EventsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("events", version);
    }
  }
  public async createEvent(
    body: EventCreateRequestPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.createEvent",
      EventsApi.operationServers,
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
      serialize(body, TypingInfo, "EventCreateRequestPayload", ""),
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

  public async getEvent(
    eventId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'eventId' is not null or undefined
    if (eventId === null || eventId === undefined) {
      throw new RequiredError("eventId", "getEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/events/{event_id}".replace(
      "{event_id}",
      encodeURIComponent(String(eventId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.getEvent",
      EventsApi.operationServers,
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

  public async listEvents(
    filterQuery?: string,
    filterFrom?: string,
    filterTo?: string,
    sort?: EventsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.listEvents",
      EventsApi.operationServers,
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
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "EventsSort", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int32"),
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

  public async searchEvents(
    body?: EventsListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/events/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.searchEvents",
      EventsApi.operationServers,
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
      serialize(body, TypingInfo, "EventsListRequest", ""),
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
}

export class EventsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createEvent(
    response: ResponseContext,
  ): Promise<EventCreateResponsePayload> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: EventCreateResponsePayload = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventCreateResponsePayload",
      ) as EventCreateResponsePayload;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: EventCreateResponsePayload = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventCreateResponsePayload",
        "",
      ) as EventCreateResponsePayload;
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
   * @params response Response returned by the server for a request to getEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEvent(response: ResponseContext): Promise<V2EventResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: V2EventResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "V2EventResponse",
      ) as V2EventResponse;
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
      const body: V2EventResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "V2EventResponse",
        "",
      ) as V2EventResponse;
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
   * @params response Response returned by the server for a request to listEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEvents(
    response: ResponseContext,
  ): Promise<EventsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
      ) as EventsListResponse;
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
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
        "",
      ) as EventsListResponse;
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
   * @params response Response returned by the server for a request to searchEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchEvents(
    response: ResponseContext,
  ): Promise<EventsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
      ) as EventsListResponse;
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
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
        "",
      ) as EventsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface EventsApiCreateEventRequest {
  /**
   * Event creation request payload.
   * @type EventCreateRequestPayload
   */
  body: EventCreateRequestPayload;
}

export interface EventsApiGetEventRequest {
  /**
   * The UID of the event.
   * @type string
   */
  eventId: string;
}

export interface EventsApiListEventsRequest {
  /**
   * Search query following events syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested events, in milliseconds.
   * @type string
   */
  filterFrom?: string;
  /**
   * Maximum timestamp for requested events, in milliseconds.
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
    "EventsApi.v2.createEvent": [
      new ServerConfiguration<{
        site:
          | "datadoghq.com"
          | "us3.datadoghq.com"
          | "us5.datadoghq.com"
          | "ap1.datadoghq.com"
          | "ap2.datadoghq.com"
          | "datadoghq.eu"
          | "ddog-gov.com";
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "event-management-intake",
      }),
      new ServerConfiguration<{
        name: string;
        protocol: string;
      }>("{protocol}://{name}", {
        name: "event-management-intake.datadoghq.com",
        protocol: "https",
      }),
      new ServerConfiguration<{
        site: string;
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "event-management-intake",
      }),
    ],
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: EventsApiRequestFactory,
    responseProcessor?: EventsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new EventsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new EventsApiResponseProcessor();
  }

  /**
   * This endpoint allows you to publish events.
   *
   * **Note:** To utilize this endpoint with our client libraries, please ensure you are using the latest version released on or after July 1, 2025. Earlier versions do not support this functionality.
   *
   * **Important:** Upgrade to the latest client library version to use the updated endpoint at `https://event-management-intake.{site}/api/v2/events`. Older client library versions of the Post an event (v2) API send requests to a deprecated endpoint (`https://api.{site}/api/v2/events`).
   *
   * ✅ **Only events with the `change` or `alert` category** are in General Availability. For change events, see [Change Tracking](https://docs.datadoghq.com/change_tracking) for more details.
   *
   * ❌ For use cases involving other event categories, use the V1 endpoint or reach out to [support](https://www.datadoghq.com/support/).
   *
   * ❌ Notifications are not yet supported for events sent to this endpoint. Use the V1 endpoint for notification functionality.
   * @param param The request object
   */
  public createEvent(
    param: EventsApiCreateEventRequest,
    options?: Configuration,
  ): Promise<EventCreateResponsePayload> {
    const requestContextPromise = this.requestFactory.createEvent(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createEvent(responseContext);
        });
    });
  }

  /**
   * Get the details of an event by `event_id`.
   * @param param The request object
   */
  public getEvent(
    param: EventsApiGetEventRequest,
    options?: Configuration,
  ): Promise<V2EventResponse> {
    const requestContextPromise = this.requestFactory.getEvent(
      param.eventId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEvent(responseContext);
        });
    });
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
    options?: Configuration,
  ): Promise<EventsListResponse> {
    const requestContextPromise = this.requestFactory.listEvents(
      param.filterQuery,
      param.filterFrom,
      param.filterTo,
      param.sort,
      param.pageCursor,
      param.pageLimit,
      options,
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
    options?: Configuration,
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
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

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
    options?: Configuration,
  ): Promise<EventsListResponse> {
    const requestContextPromise = this.requestFactory.searchEvents(
      param.body,
      options,
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
    options?: Configuration,
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
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchEvents(responseContext);
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
