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
import { CIAppQueryPageOptions } from "./models/CIAppQueryPageOptions";
import { CIAppSort } from "./models/CIAppSort";
import { CIAppTestEvent } from "./models/CIAppTestEvent";
import { CIAppTestEventsRequest } from "./models/CIAppTestEventsRequest";
import { CIAppTestEventsResponse } from "./models/CIAppTestEventsResponse";
import { CIAppTestsAggregateRequest } from "./models/CIAppTestsAggregateRequest";
import { CIAppTestsAnalyticsAggregateResponse } from "./models/CIAppTestsAnalyticsAggregateResponse";
import { version } from "../version";

export class CIVisibilityTestsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ci-visibility-tests", version);
    }
  }
  public async aggregateCIAppTestEvents(
    body: CIAppTestsAggregateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateCIAppTestEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/ci/tests/analytics/aggregate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CIVisibilityTestsApi.v2.aggregateCIAppTestEvents",
      CIVisibilityTestsApi.operationServers,
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
      serialize(body, TypingInfo, "CIAppTestsAggregateRequest", ""),
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

  public async listCIAppTestEvents(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: CIAppSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ci/tests/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CIVisibilityTestsApi.v2.listCIAppTestEvents",
      CIVisibilityTestsApi.operationServers,
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
        serialize(filterFrom, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "CIAppSort", ""),
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

  public async searchCIAppTestEvents(
    body?: CIAppTestEventsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ci/tests/events/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CIVisibilityTestsApi.v2.searchCIAppTestEvents",
      CIVisibilityTestsApi.operationServers,
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
      serialize(body, TypingInfo, "CIAppTestEventsRequest", ""),
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

export class CIVisibilityTestsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateCIAppTestEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateCIAppTestEvents(
    response: ResponseContext,
  ): Promise<CIAppTestsAnalyticsAggregateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CIAppTestsAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppTestsAnalyticsAggregateResponse",
      ) as CIAppTestsAnalyticsAggregateResponse;
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
      const body: CIAppTestsAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppTestsAnalyticsAggregateResponse",
        "",
      ) as CIAppTestsAnalyticsAggregateResponse;
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
   * @params response Response returned by the server for a request to listCIAppTestEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCIAppTestEvents(
    response: ResponseContext,
  ): Promise<CIAppTestEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CIAppTestEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppTestEventsResponse",
      ) as CIAppTestEventsResponse;
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
      const body: CIAppTestEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppTestEventsResponse",
        "",
      ) as CIAppTestEventsResponse;
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
   * @params response Response returned by the server for a request to searchCIAppTestEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCIAppTestEvents(
    response: ResponseContext,
  ): Promise<CIAppTestEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CIAppTestEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppTestEventsResponse",
      ) as CIAppTestEventsResponse;
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
      const body: CIAppTestEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppTestEventsResponse",
        "",
      ) as CIAppTestEventsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CIVisibilityTestsApiAggregateCIAppTestEventsRequest {
  /**
   * @type CIAppTestsAggregateRequest
   */
  body: CIAppTestsAggregateRequest;
}

export interface CIVisibilityTestsApiListCIAppTestEventsRequest {
  /**
   * Search query following log syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested events.
   * @type Date
   */
  filterFrom?: Date;
  /**
   * Maximum timestamp for requested events.
   * @type Date
   */
  filterTo?: Date;
  /**
   * Order of events in results.
   * @type CIAppSort
   */
  sort?: CIAppSort;
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

export interface CIVisibilityTestsApiSearchCIAppTestEventsRequest {
  /**
   * @type CIAppTestEventsRequest
   */
  body?: CIAppTestEventsRequest;
}

export class CIVisibilityTestsApi {
  private requestFactory: CIVisibilityTestsApiRequestFactory;
  private responseProcessor: CIVisibilityTestsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CIVisibilityTestsApiRequestFactory,
    responseProcessor?: CIVisibilityTestsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CIVisibilityTestsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CIVisibilityTestsApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate CI Visibility test events into buckets of computed metrics and timeseries.
   * @param param The request object
   */
  public aggregateCIAppTestEvents(
    param: CIVisibilityTestsApiAggregateCIAppTestEventsRequest,
    options?: Configuration,
  ): Promise<CIAppTestsAnalyticsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateCIAppTestEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateCIAppTestEvents(
            responseContext,
          );
        });
    });
  }

  /**
   * List endpoint returns CI Visibility test events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to see your latest test events.
   * @param param The request object
   */
  public listCIAppTestEvents(
    param: CIVisibilityTestsApiListCIAppTestEventsRequest = {},
    options?: Configuration,
  ): Promise<CIAppTestEventsResponse> {
    const requestContextPromise = this.requestFactory.listCIAppTestEvents(
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
          return this.responseProcessor.listCIAppTestEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listCIAppTestEvents returning a generator with all the items.
   */
  public async *listCIAppTestEventsWithPagination(
    param: CIVisibilityTestsApiListCIAppTestEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<CIAppTestEvent> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listCIAppTestEvents(
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

      const response =
        await this.responseProcessor.listCIAppTestEvents(responseContext);
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
   * List endpoint returns CI Visibility test events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to build complex events filtering and search.
   * @param param The request object
   */
  public searchCIAppTestEvents(
    param: CIVisibilityTestsApiSearchCIAppTestEventsRequest = {},
    options?: Configuration,
  ): Promise<CIAppTestEventsResponse> {
    const requestContextPromise = this.requestFactory.searchCIAppTestEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchCIAppTestEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchCIAppTestEvents returning a generator with all the items.
   */
  public async *searchCIAppTestEventsWithPagination(
    param: CIVisibilityTestsApiSearchCIAppTestEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<CIAppTestEvent> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new CIAppTestEventsRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new CIAppQueryPageOptions();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchCIAppTestEvents(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchCIAppTestEvents(responseContext);
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
