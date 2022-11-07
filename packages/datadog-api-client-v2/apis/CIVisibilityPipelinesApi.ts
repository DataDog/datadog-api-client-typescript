import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
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

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CIAppPipelineEvent } from "../models/CIAppPipelineEvent";
import { CIAppPipelineEventsRequest } from "../models/CIAppPipelineEventsRequest";
import { CIAppPipelineEventsResponse } from "../models/CIAppPipelineEventsResponse";
import { CIAppPipelinesAggregateRequest } from "../models/CIAppPipelinesAggregateRequest";
import { CIAppPipelinesAnalyticsAggregateResponse } from "../models/CIAppPipelinesAnalyticsAggregateResponse";
import { CIAppQueryPageOptions } from "../models/CIAppQueryPageOptions";
import { CIAppSort } from "../models/CIAppSort";

export class CIVisibilityPipelinesApiRequestFactory extends BaseAPIRequestFactory {
  public async aggregateCIAppPipelineEvents(
    body: CIAppPipelinesAggregateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling aggregateCIAppPipelineEvents."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/ci/pipelines/analytics/aggregate";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.CIVisibilityPipelinesApi.aggregateCIAppPipelineEvents"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CIAppPipelinesAggregateRequest", ""),
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

  public async listCIAppPipelineEvents(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: CIAppSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ci/pipelines/events";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.CIVisibilityPipelinesApi.listCIAppPipelineEvents"
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
        ObjectSerializer.serialize(filterFrom, "Date", "date-time")
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "Date", "date-time")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "CIAppSort", "")
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

  public async searchCIAppPipelineEvents(
    body?: CIAppPipelineEventsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ci/pipelines/events/search";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.CIVisibilityPipelinesApi.searchCIAppPipelineEvents"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CIAppPipelineEventsRequest", ""),
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

export class CIVisibilityPipelinesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateCIAppPipelineEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateCIAppPipelineEvents(
    response: ResponseContext
  ): Promise<CIAppPipelinesAnalyticsAggregateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CIAppPipelinesAnalyticsAggregateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CIAppPipelinesAnalyticsAggregateResponse"
        ) as CIAppPipelinesAnalyticsAggregateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CIAppPipelinesAnalyticsAggregateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CIAppPipelinesAnalyticsAggregateResponse",
          ""
        ) as CIAppPipelinesAnalyticsAggregateResponse;
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
   * @params response Response returned by the server for a request to listCIAppPipelineEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCIAppPipelineEvents(
    response: ResponseContext
  ): Promise<CIAppPipelineEventsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CIAppPipelineEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppPipelineEventsResponse"
      ) as CIAppPipelineEventsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CIAppPipelineEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppPipelineEventsResponse",
        ""
      ) as CIAppPipelineEventsResponse;
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
   * @params response Response returned by the server for a request to searchCIAppPipelineEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCIAppPipelineEvents(
    response: ResponseContext
  ): Promise<CIAppPipelineEventsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CIAppPipelineEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppPipelineEventsResponse"
      ) as CIAppPipelineEventsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CIAppPipelineEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppPipelineEventsResponse",
        ""
      ) as CIAppPipelineEventsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest {
  /**
   * @type CIAppPipelinesAggregateRequest
   */
  body: CIAppPipelinesAggregateRequest;
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
    configuration: Configuration,
    requestFactory?: CIVisibilityPipelinesApiRequestFactory,
    responseProcessor?: CIVisibilityPipelinesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new CIVisibilityPipelinesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CIVisibilityPipelinesApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate CI Visibility pipeline events into buckets of computed metrics and timeseries.
   * @param param The request object
   */
  public aggregateCIAppPipelineEvents(
    param: CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest,
    options?: Configuration
  ): Promise<CIAppPipelinesAnalyticsAggregateResponse> {
    const requestContextPromise =
      this.requestFactory.aggregateCIAppPipelineEvents(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateCIAppPipelineEvents(
            responseContext
          );
        });
    });
  }

  /**
   * List endpoint returns CI Visibility pipeline events that match a log search query.
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to see your latest pipeline events.
   * @param param The request object
   */
  public listCIAppPipelineEvents(
    param: CIVisibilityPipelinesApiListCIAppPipelineEventsRequest = {},
    options?: Configuration
  ): Promise<CIAppPipelineEventsResponse> {
    const requestContextPromise = this.requestFactory.listCIAppPipelineEvents(
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
          return this.responseProcessor.listCIAppPipelineEvents(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of listCIAppPipelineEvents returning a generator with all the items.
   */
  public async *listCIAppPipelineEventsWithPagination(
    param: CIVisibilityPipelinesApiListCIAppPipelineEventsRequest = {},
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listCIAppPipelineEvents(
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

      param.pageCursor = cursorMetaPageAfter;
    }
  }

  /**
   * List endpoint returns CI Visibility pipeline events that match a log search query.
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to build complex events filtering and search.
   * @param param The request object
   */
  public searchCIAppPipelineEvents(
    param: CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest = {},
    options?: Configuration
  ): Promise<CIAppPipelineEventsResponse> {
    const requestContextPromise = this.requestFactory.searchCIAppPipelineEvents(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchCIAppPipelineEvents(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of searchCIAppPipelineEvents returning a generator with all the items.
   */
  public async *searchCIAppPipelineEventsWithPagination(
    param: CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest = {},
    options?: Configuration
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
          options
        );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.searchCIAppPipelineEvents(
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
