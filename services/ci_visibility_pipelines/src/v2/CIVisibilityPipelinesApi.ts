import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CIAppCreatePipelineEventRequest } from "./models/CIAppCreatePipelineEventRequest";
import { CIAppPipelineEvent } from "./models/CIAppPipelineEvent";
import { CIAppPipelineEventsRequest } from "./models/CIAppPipelineEventsRequest";
import { CIAppPipelineEventsResponse } from "./models/CIAppPipelineEventsResponse";
import { CIAppPipelinesAggregateRequest } from "./models/CIAppPipelinesAggregateRequest";
import { CIAppPipelinesAnalyticsAggregateResponse } from "./models/CIAppPipelinesAnalyticsAggregateResponse";
import { CIAppQueryPageOptions } from "./models/CIAppQueryPageOptions";
import { CIAppSort } from "./models/CIAppSort";
import { HTTPCIAppErrors } from "./models/HTTPCIAppErrors";
import { version } from "../version";

export class CIVisibilityPipelinesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ci-visibility-pipelines", version);
    }
  }
  public async aggregateCIAppPipelineEvents(
    body: CIAppPipelinesAggregateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateCIAppPipelineEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/ci/pipelines/analytics/aggregate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CIVisibilityPipelinesApi.aggregateCIAppPipelineEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CIAppPipelinesAggregateRequest", ""),
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

  public async createCIAppPipelineEvent(
    body: CIAppCreatePipelineEventRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCIAppPipelineEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/ci/pipeline";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CIVisibilityPipelinesApi.createCIAppPipelineEvent")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CIAppCreatePipelineEventRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async listCIAppPipelineEvents(
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
    const localVarPath = "/api/v2/ci/pipelines/events";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CIVisibilityPipelinesApi.listCIAppPipelineEvents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchCIAppPipelineEvents(
    body?: CIAppPipelineEventsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ci/pipelines/events/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CIVisibilityPipelinesApi.searchCIAppPipelineEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CIAppPipelineEventsRequest", ""),
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

export class CIVisibilityPipelinesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateCIAppPipelineEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateCIAppPipelineEvents(
    response: ResponseContext,
  ): Promise<CIAppPipelinesAnalyticsAggregateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CIAppPipelinesAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppPipelinesAnalyticsAggregateResponse",
      ) as CIAppPipelinesAnalyticsAggregateResponse;
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
      const body: CIAppPipelinesAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppPipelinesAnalyticsAggregateResponse",
        "",
      ) as CIAppPipelinesAnalyticsAggregateResponse;
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
   * @params response Response returned by the server for a request to createCIAppPipelineEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCIAppPipelineEvent(
    response: ResponseContext,
  ): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500 ||
      response.httpStatusCode === 503
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to listCIAppPipelineEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCIAppPipelineEvents(
    response: ResponseContext,
  ): Promise<CIAppPipelineEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CIAppPipelineEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppPipelineEventsResponse",
      ) as CIAppPipelineEventsResponse;
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
      const body: CIAppPipelineEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppPipelineEventsResponse",
        "",
      ) as CIAppPipelineEventsResponse;
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
   * @params response Response returned by the server for a request to searchCIAppPipelineEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCIAppPipelineEvents(
    response: ResponseContext,
  ): Promise<CIAppPipelineEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CIAppPipelineEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppPipelineEventsResponse",
      ) as CIAppPipelineEventsResponse;
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
      const body: CIAppPipelineEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CIAppPipelineEventsResponse",
        "",
      ) as CIAppPipelineEventsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest {
  /**
   * @type CIAppPipelinesAggregateRequest
   */
  body: CIAppPipelinesAggregateRequest;
}

export interface CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest {
  /**
   * @type CIAppCreatePipelineEventRequest
   */
  body: CIAppCreatePipelineEventRequest;
}

export interface CIVisibilityPipelinesApiListCIAppPipelineEventsRequest {
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

export interface CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest {
  /**
   * @type CIAppPipelineEventsRequest
   */
  body?: CIAppPipelineEventsRequest;
}

export class CIVisibilityPipelinesApi {
  private requestFactory: CIVisibilityPipelinesApiRequestFactory;
  private responseProcessor: CIVisibilityPipelinesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CIVisibilityPipelinesApiRequestFactory,
    responseProcessor?: CIVisibilityPipelinesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CIVisibilityPipelinesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CIVisibilityPipelinesApiResponseProcessor();
  }

  /**
   * Use this API endpoint to aggregate CI Visibility pipeline events into buckets of computed metrics and timeseries.
   * @param param The request object
   */
  public aggregateCIAppPipelineEvents(
    param: CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest,
    options?: Configuration,
  ): Promise<CIAppPipelinesAnalyticsAggregateResponse> {
    const requestContextPromise =
      this.requestFactory.aggregateCIAppPipelineEvents(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateCIAppPipelineEvents(
            responseContext,
          );
        });
    });
  }

  /**
   * Send your pipeline event to your Datadog platform over HTTP. For details about how pipeline executions are modeled and what execution types we support, see [Pipeline Data Model And Execution Types](https://docs.datadoghq.com/continuous_integration/guides/pipeline_data_model/).
   *
   * Pipeline events can be submitted with a timestamp that is up to 18 hours in the past.
   * @param param The request object
   */
  public createCIAppPipelineEvent(
    param: CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createCIAppPipelineEvent(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCIAppPipelineEvent(
            responseContext,
          );
        });
    });
  }

  /**
   * List endpoint returns CI Visibility pipeline events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to see your latest pipeline events.
   * @param param The request object
   */
  public listCIAppPipelineEvents(
    param: CIVisibilityPipelinesApiListCIAppPipelineEventsRequest = {},
    options?: Configuration,
  ): Promise<CIAppPipelineEventsResponse> {
    const requestContextPromise = this.requestFactory.listCIAppPipelineEvents(
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
          return this.responseProcessor.listCIAppPipelineEvents(
            responseContext,
          );
        });
    });
  }

  /**
   * Provide a paginated version of listCIAppPipelineEvents returning a generator with all the items.
   */
  public async *listCIAppPipelineEventsWithPagination(
    param: CIVisibilityPipelinesApiListCIAppPipelineEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<CIAppPipelineEvent> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listCIAppPipelineEvents(
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
        await this.responseProcessor.listCIAppPipelineEvents(responseContext);
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
   * List endpoint returns CI Visibility pipeline events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to build complex events filtering and search.
   * @param param The request object
   */
  public searchCIAppPipelineEvents(
    param: CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest = {},
    options?: Configuration,
  ): Promise<CIAppPipelineEventsResponse> {
    const requestContextPromise = this.requestFactory.searchCIAppPipelineEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchCIAppPipelineEvents(
            responseContext,
          );
        });
    });
  }

  /**
   * Provide a paginated version of searchCIAppPipelineEvents returning a generator with all the items.
   */
  public async *searchCIAppPipelineEventsWithPagination(
    param: CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<CIAppPipelineEvent> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new CIAppPipelineEventsRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new CIAppQueryPageOptions();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext =
        await this.requestFactory.searchCIAppPipelineEvents(
          param.body,
          options,
        );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchCIAppPipelineEvents(responseContext);
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
