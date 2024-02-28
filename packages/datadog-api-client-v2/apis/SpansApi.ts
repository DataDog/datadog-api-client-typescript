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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { Span } from "../models/Span";
import { SpansAggregateRequest } from "../models/SpansAggregateRequest";
import { SpansAggregateResponse } from "../models/SpansAggregateResponse";
import { SpansListRequest } from "../models/SpansListRequest";
import { SpansListRequestAttributes } from "../models/SpansListRequestAttributes";
import { SpansListRequestData } from "../models/SpansListRequestData";
import { SpansListRequestPage } from "../models/SpansListRequestPage";
import { SpansListResponse } from "../models/SpansListResponse";
import { SpansSort } from "../models/SpansSort";

export class SpansApiRequestFactory extends BaseAPIRequestFactory {
  public async aggregateSpans(
    body: SpansAggregateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateSpans");
    }

    // Path Params
    const localVarPath = "/api/v2/spans/analytics/aggregate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansApi.aggregateSpans")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SpansAggregateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listSpans(
    body: SpansListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "listSpans");
    }

    // Path Params
    const localVarPath = "/api/v2/spans/events/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansApi.listSpans")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SpansListRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listSpansGet(
    filterQuery?: string,
    filterFrom?: string,
    filterTo?: string,
    sort?: SpansSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/spans/events";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansApi.listSpansGet")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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
        ObjectSerializer.serialize(sort, "SpansSort", "")
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
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SpansApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateSpans(
    response: ResponseContext
  ): Promise<SpansAggregateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansAggregateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansAggregateResponse"
      ) as SpansAggregateResponse;
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
      const body: SpansAggregateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansAggregateResponse",
        ""
      ) as SpansAggregateResponse;
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
   * @params response Response returned by the server for a request to listSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSpans(
    response: ResponseContext
  ): Promise<SpansListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansListResponse"
      ) as SpansListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 422 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SpansListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansListResponse",
        ""
      ) as SpansListResponse;
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
   * @params response Response returned by the server for a request to listSpansGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSpansGet(
    response: ResponseContext
  ): Promise<SpansListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansListResponse"
      ) as SpansListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 422 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SpansListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansListResponse",
        ""
      ) as SpansListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SpansApiAggregateSpansRequest {
  /**
   * @type SpansAggregateRequest
   */
  body: SpansAggregateRequest;
}

export interface SpansApiListSpansRequest {
  /**
   * @type SpansListRequest
   */
  body: SpansListRequest;
}

export interface SpansApiListSpansGetRequest {
  /**
   * Search query following spans syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   * @type string
   */
  filterFrom?: string;
  /**
   * Maximum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   * @type string
   */
  filterTo?: string;
  /**
   * Order of spans in results.
   * @type SpansSort
   */
  sort?: SpansSort;
  /**
   * List following results with a cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of spans in the response.
   * @type number
   */
  pageLimit?: number;
}

export class SpansApi {
  private requestFactory: SpansApiRequestFactory;
  private responseProcessor: SpansApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SpansApiRequestFactory,
    responseProcessor?: SpansApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SpansApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SpansApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate spans into buckets and compute metrics and timeseries.
   * This endpoint is rate limited to `300` requests per hour.
   * @param param The request object
   */
  public aggregateSpans(
    param: SpansApiAggregateSpansRequest,
    options?: Configuration
  ): Promise<SpansAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateSpans(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateSpans(responseContext);
        });
    });
  }

  /**
   * List endpoint returns spans that match a span search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to build complex spans filtering and search.
   * This endpoint is rate limited to `300` requests per hour.
   *
   * [1]: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api
   * @param param The request object
   */
  public listSpans(
    param: SpansApiListSpansRequest,
    options?: Configuration
  ): Promise<SpansListResponse> {
    const requestContextPromise = this.requestFactory.listSpans(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSpans(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listSpans returning a generator with all the items.
   */
  public async *listSpansWithPagination(
    param: SpansApiListSpansRequest,
    options?: Configuration
  ): AsyncGenerator<Span> {
    let pageSize = 10;
    if (param.body.data === undefined) {
      param.body.data = new SpansListRequestData();
    }
    if (param.body.data.attributes === undefined) {
      param.body.data.attributes = new SpansListRequestAttributes();
    }
    if (param.body.data.attributes.page === undefined) {
      param.body.data.attributes.page = new SpansListRequestPage();
    }
    if (param.body.data.attributes.page.limit === undefined) {
      param.body.data.attributes.page.limit = pageSize;
    } else {
      pageSize = param.body.data.attributes.page.limit;
    }
    while (true) {
      const requestContext = await this.requestFactory.listSpans(
        param.body,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listSpans(responseContext);
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

      param.body.data.attributes.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * List endpoint returns spans that match a span search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to see your latest spans.
   * This endpoint is rate limited to `300` requests per hour.
   *
   * [1]: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api
   * @param param The request object
   */
  public listSpansGet(
    param: SpansApiListSpansGetRequest = {},
    options?: Configuration
  ): Promise<SpansListResponse> {
    const requestContextPromise = this.requestFactory.listSpansGet(
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
          return this.responseProcessor.listSpansGet(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listSpansGet returning a generator with all the items.
   */
  public async *listSpansGetWithPagination(
    param: SpansApiListSpansGetRequest = {},
    options?: Configuration
  ): AsyncGenerator<Span> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listSpansGet(
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

      const response = await this.responseProcessor.listSpansGet(
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
}
