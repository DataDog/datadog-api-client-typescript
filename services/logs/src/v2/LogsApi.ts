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
import { ContentEncoding } from "./models/ContentEncoding";
import { HTTPLogErrors } from "./models/HTTPLogErrors";
import { HTTPLogItem } from "./models/HTTPLogItem";
import { Log } from "./models/Log";
import { LogsAggregateRequest } from "./models/LogsAggregateRequest";
import { LogsAggregateResponse } from "./models/LogsAggregateResponse";
import { LogsListRequest } from "./models/LogsListRequest";
import { LogsListRequestPage } from "./models/LogsListRequestPage";
import { LogsListResponse } from "./models/LogsListResponse";
import { LogsSort } from "./models/LogsSort";
import { LogsStorageTier } from "./models/LogsStorageTier";
import { version } from "../version";

export class LogsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("logs", version);
    }
  }
  public async aggregateLogs(
    body: LogsAggregateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateLogs");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/analytics/aggregate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsApi.aggregateLogs")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "LogsAggregateRequest", ""),
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

  public async listLogs(
    body?: LogsListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/events/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsApi.listLogs")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "LogsListRequest", ""),
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

  public async listLogsGet(
    filterQuery?: string,
    filterIndexes?: Array<string>,
    filterFrom?: Date,
    filterTo?: Date,
    filterStorageTier?: LogsStorageTier,
    sort?: LogsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/events";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsApi.listLogsGet")
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
    if (filterIndexes !== undefined) {
      requestContext.setQueryParam(
        "filter[indexes]",
        serialize(filterIndexes, TypingInfo, "Array<string>", ""),
        "csv",
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
    if (filterStorageTier !== undefined) {
      requestContext.setQueryParam(
        "filter[storage_tier]",
        serialize(filterStorageTier, TypingInfo, "LogsStorageTier", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "LogsSort", ""),
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
    ]);

    return requestContext;
  }

  public async submitLog(
    body: Array<HTTPLogItem>,
    contentEncoding?: ContentEncoding,
    ddtags?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitLog");
    }

    // Path Params
    const localVarPath = "/api/v2/logs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsApi.submitLog")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (ddtags !== undefined) {
      requestContext.setQueryParam(
        "ddtags",
        serialize(ddtags, TypingInfo, "string", ""),
        "",
      );
    }

    // Header Params
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        serialize(contentEncoding, TypingInfo, "ContentEncoding", ""),
      );
    }

    // Body Params
    const contentType = getPreferredMediaType([
      "application/json",
      "application/logplex-1",
      "text/plain",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Array<HTTPLogItem>", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class LogsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateLogs(
    response: ResponseContext,
  ): Promise<LogsAggregateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsAggregateResponse",
      ) as LogsAggregateResponse;
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
      const body: LogsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsAggregateResponse",
        "",
      ) as LogsAggregateResponse;
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
   * @params response Response returned by the server for a request to listLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogs(response: ResponseContext): Promise<LogsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsListResponse",
      ) as LogsListResponse;
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
      const body: LogsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsListResponse",
        "",
      ) as LogsListResponse;
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
   * @params response Response returned by the server for a request to listLogsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsGet(
    response: ResponseContext,
  ): Promise<LogsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsListResponse",
      ) as LogsListResponse;
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
      const body: LogsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsListResponse",
        "",
      ) as LogsListResponse;
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
   * @params response Response returned by the server for a request to submitLog
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitLog(response: ResponseContext): Promise<any> {
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
      let body: HTTPLogErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPLogErrors",
        ) as HTTPLogErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPLogErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPLogErrors>(response.httpStatusCode, body);
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
}

export interface LogsApiAggregateLogsRequest {
  /**
   * @type LogsAggregateRequest
   */
  body: LogsAggregateRequest;
}

export interface LogsApiListLogsRequest {
  /**
   * @type LogsListRequest
   */
  body?: LogsListRequest;
}

export interface LogsApiListLogsGetRequest {
  /**
   * Search query following logs syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * For customers with multiple indexes, the indexes to search.
   * Defaults to '*' which means all indexes
   * @type Array<string>
   */
  filterIndexes?: Array<string>;
  /**
   * Minimum timestamp for requested logs.
   * @type Date
   */
  filterFrom?: Date;
  /**
   * Maximum timestamp for requested logs.
   * @type Date
   */
  filterTo?: Date;
  /**
   * Specifies the storage type to be used
   * @type LogsStorageTier
   */
  filterStorageTier?: LogsStorageTier;
  /**
   * Order of logs in results.
   * @type LogsSort
   */
  sort?: LogsSort;
  /**
   * List following results with a cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of logs in the response.
   * @type number
   */
  pageLimit?: number;
}

export interface LogsApiSubmitLogRequest {
  /**
   * Log to send (JSON format).
   * @type Array<HTTPLogItem>
   */
  body: Array<HTTPLogItem>;
  /**
   * HTTP header used to compress the media-type.
   * @type ContentEncoding
   */
  contentEncoding?: ContentEncoding;
  /**
   * Log tags can be passed as query parameters with `text/plain` content type.
   * @type string
   */
  ddtags?: string;
}

export class LogsApi {
  private requestFactory: LogsApiRequestFactory;
  private responseProcessor: LogsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: LogsApiRequestFactory,
    responseProcessor?: LogsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new LogsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new LogsApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
   * @param param The request object
   */
  public aggregateLogs(
    param: LogsApiAggregateLogsRequest,
    options?: Configuration,
  ): Promise<LogsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateLogs(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateLogs(responseContext);
        });
    });
  }

  /**
   * List endpoint returns logs that match a log search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to search and filter your logs.
   *
   * **If you are considering archiving logs for your organization,
   * consider use of the Datadog archive capabilities instead of the log list API.
   * See [Datadog Logs Archive documentation][2].**
   *
   * [1]: /logs/guide/collect-multiple-logs-with-pagination
   * [2]: https://docs.datadoghq.com/logs/archives
   * @param param The request object
   */
  public listLogs(
    param: LogsApiListLogsRequest = {},
    options?: Configuration,
  ): Promise<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogs(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogs(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listLogs returning a generator with all the items.
   */
  public async *listLogsWithPagination(
    param: LogsApiListLogsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<Log> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new LogsListRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new LogsListRequestPage();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listLogs(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listLogs(responseContext);
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

  /**
   * List endpoint returns logs that match a log search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to search and filter your logs.
   *
   * **If you are considering archiving logs for your organization,
   * consider use of the Datadog archive capabilities instead of the log list API.
   * See [Datadog Logs Archive documentation][2].**
   *
   * [1]: /logs/guide/collect-multiple-logs-with-pagination
   * [2]: https://docs.datadoghq.com/logs/archives
   * @param param The request object
   */
  public listLogsGet(
    param: LogsApiListLogsGetRequest = {},
    options?: Configuration,
  ): Promise<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogsGet(
      param.filterQuery,
      param.filterIndexes,
      param.filterFrom,
      param.filterTo,
      param.filterStorageTier,
      param.sort,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsGet(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listLogsGet returning a generator with all the items.
   */
  public async *listLogsGetWithPagination(
    param: LogsApiListLogsGetRequest = {},
    options?: Configuration,
  ): AsyncGenerator<Log> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listLogsGet(
        param.filterQuery,
        param.filterIndexes,
        param.filterFrom,
        param.filterTo,
        param.filterStorageTier,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listLogsGet(responseContext);
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
   * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:
   *
   * - Maximum content size per payload (uncompressed): 5MB
   * - Maximum size for a single log: 1MB
   * - Maximum array size if sending multiple logs in an array: 1000 entries
   *
   * Any log exceeding 1MB is accepted and truncated by Datadog:
   * - For a single log request, the API truncates the log at 1MB and returns a 2xx.
   * - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.
   *
   * Datadog recommends sending your logs compressed.
   * Add the `Content-Encoding: gzip` header to the request when sending compressed logs.
   * Log events can be submitted with a timestamp that is up to 18 hours in the past.
   *
   * The status codes answered by the HTTP API are:
   * - 202: Accepted: the request has been accepted for processing
   * - 400: Bad request (likely an issue in the payload formatting)
   * - 401: Unauthorized (likely a missing API Key)
   * - 403: Permission issue (likely using an invalid API Key)
   * - 408: Request Timeout, request should be retried after some time
   * - 413: Payload too large (batch is above 5MB uncompressed)
   * - 429: Too Many Requests, request should be retried after some time
   * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
   * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
   * @param param The request object
   */
  public submitLog(
    param: LogsApiSubmitLogRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.submitLog(
      param.body,
      param.contentEncoding,
      param.ddtags,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitLog(responseContext);
        });
    });
  }
}
