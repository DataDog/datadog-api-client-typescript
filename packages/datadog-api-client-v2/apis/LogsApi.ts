import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { ContentEncoding } from "../models/ContentEncoding";
import { HTTPLogErrors } from "../models/HTTPLogErrors";
import { HTTPLogItem } from "../models/HTTPLogItem";
import { LogsAggregateRequest } from "../models/LogsAggregateRequest";
import { LogsAggregateResponse } from "../models/LogsAggregateResponse";
import { LogsListRequest } from "../models/LogsListRequest";
import { LogsListResponse } from "../models/LogsListResponse";
import { LogsSort } from "../models/LogsSort";

export class LogsApiRequestFactory extends BaseAPIRequestFactory {
  public async aggregateLogs(
    body: LogsAggregateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling aggregateLogs."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/analytics/aggregate";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsApi.aggregateLogs"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsAggregateRequest", ""),
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

  public async listLogs(
    body?: LogsListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/events/search";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsApi.listLogs"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsListRequest", ""),
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

  public async listLogsGet(
    filterQuery?: string,
    filterIndex?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: LogsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/events";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsApi.listLogsGet"
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
    if (filterIndex !== undefined) {
      requestContext.setQueryParam(
        "filter[index]",
        ObjectSerializer.serialize(filterIndex, "string", "")
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
        ObjectSerializer.serialize(sort, "LogsSort", "")
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

  public async submitLog(
    body: Array<HTTPLogItem>,
    contentEncoding?: ContentEncoding,
    ddtags?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling submitLog."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsApi.submitLog"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (ddtags !== undefined) {
      requestContext.setQueryParam(
        "ddtags",
        ObjectSerializer.serialize(ddtags, "string", "")
      );
    }

    // Header Params
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        ObjectSerializer.serialize(contentEncoding, "ContentEncoding", "")
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
      "application/logplex-1",
      "text/plain",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Array<HTTPLogItem>", ""),
      contentType
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
    response: ResponseContext
  ): Promise<LogsAggregateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsAggregateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAggregateResponse",
        ""
      ) as LogsAggregateResponse;
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
      const body: LogsAggregateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAggregateResponse",
        ""
      ) as LogsAggregateResponse;
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
   * @params response Response returned by the server for a request to listLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogs(response: ResponseContext): Promise<LogsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsListResponse",
        ""
      ) as LogsListResponse;
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
      const body: LogsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsListResponse",
        ""
      ) as LogsListResponse;
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
   * @params response Response returned by the server for a request to listLogsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsGet(
    response: ResponseContext
  ): Promise<LogsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsListResponse",
        ""
      ) as LogsListResponse;
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
      const body: LogsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsListResponse",
        ""
      ) as LogsListResponse;
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
   * @params response Response returned by the server for a request to submitLog
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitLog(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(400, body);
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(401, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(403, body);
    }
    if (isCodeInRange("408", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(408, body);
    }
    if (isCodeInRange("413", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(413, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(429, body);
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(500, body);
    }
    if (isCodeInRange("503", response.httpStatusCode)) {
      const body: HTTPLogErrors = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HTTPLogErrors",
        ""
      ) as HTTPLogErrors;
      throw new ApiException<HTTPLogErrors>(503, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsApiAggregateLogsRequest {
  /**
   *
   * @type LogsAggregateRequest
   */
  body: LogsAggregateRequest;
}

export interface LogsApiListLogsRequest {
  /**
   *
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
   * For customers with multiple indexes, the indexes to search Defaults to &#39;*&#39; which means all indexes
   * @type string
   */
  filterIndex?: string;
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
   * @type Array&lt;HTTPLogItem&gt;
   */
  body: Array<HTTPLogItem>;
  /**
   * HTTP header used to compress the media-type.
   * @type ContentEncoding
   */
  contentEncoding?: ContentEncoding;
  /**
   * Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
   * @type string
   */
  ddtags?: string;
}

export class LogsApi {
  private requestFactory: LogsApiRequestFactory;
  private responseProcessor: LogsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsApiRequestFactory,
    responseProcessor?: LogsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
   * @param param The request object
   */
  public aggregateLogs(
    param: LogsApiAggregateLogsRequest,
    options?: Configuration
  ): Promise<LogsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateLogs(
      param.body,
      options
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
   * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
   * @param param The request object
   */
  public listLogs(
    param: LogsApiListLogsRequest = {},
    options?: Configuration
  ): Promise<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogs(
      param.body,
      options
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
   * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to see your latest logs.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
   * @param param The request object
   */
  public listLogsGet(
    param: LogsApiListLogsGetRequest = {},
    options?: Configuration
  ): Promise<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogsGet(
      param.filterQuery,
      param.filterIndex,
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
          return this.responseProcessor.listLogsGet(responseContext);
        });
    });
  }

  /**
   * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 202: Accepted: the request has been accepted for processing - 400: Bad request (likely an issue in the payload formatting) - 401: Unauthorized (likely a missing API Key) - 403: Permission issue (likely using an invalid API Key) - 408: Request Timeout, request should be retried after some time - 413: Payload too large (batch is above 5MB uncompressed) - 429: Too Many Requests, request should be retried after some time - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
   * @param param The request object
   */
  public submitLog(
    param: LogsApiSubmitLogRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.submitLog(
      param.body,
      param.contentEncoding,
      param.ddtags,
      options
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
