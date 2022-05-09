import { BaseAPIRequestFactory } from "./baseapi";
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
import { AuditLogsEventsResponse } from "../models/AuditLogsEventsResponse";
import { AuditLogsSearchEventsRequest } from "../models/AuditLogsSearchEventsRequest";
import { AuditLogsSort } from "../models/AuditLogsSort";

export class AuditApiRequestFactory extends BaseAPIRequestFactory {
  public async listAuditLogs(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: AuditLogsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/audit/events";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuditApi.listAuditLogs"
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
        ObjectSerializer.serialize(sort, "AuditLogsSort", "")
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

  public async searchAuditLogs(
    body?: AuditLogsSearchEventsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/audit/events/search";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuditApi.searchAuditLogs"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AuditLogsSearchEventsRequest", ""),
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
}

export class AuditApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAuditLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAuditLogs(
    response: ResponseContext
  ): Promise<AuditLogsEventsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuditLogsEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuditLogsEventsResponse",
        ""
      ) as AuditLogsEventsResponse;
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
      const body: AuditLogsEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuditLogsEventsResponse",
        ""
      ) as AuditLogsEventsResponse;
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
   * @params response Response returned by the server for a request to searchAuditLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchAuditLogs(
    response: ResponseContext
  ): Promise<AuditLogsEventsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuditLogsEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuditLogsEventsResponse",
        ""
      ) as AuditLogsEventsResponse;
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
      const body: AuditLogsEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuditLogsEventsResponse",
        ""
      ) as AuditLogsEventsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AuditApiListAuditLogsRequest {
  /**
   * Search query following Audit Logs syntax.
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
   * @type AuditLogsSort
   */
  sort?: AuditLogsSort;
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

export interface AuditApiSearchAuditLogsRequest {
  /**
   *
   * @type AuditLogsSearchEventsRequest
   */
  body?: AuditLogsSearchEventsRequest;
}

export class AuditApi {
  private requestFactory: AuditApiRequestFactory;
  private responseProcessor: AuditApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuditApiRequestFactory,
    responseProcessor?: AuditApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AuditApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AuditApiResponseProcessor();
  }

  /**
   * List endpoint returns events that match a Audit Logs search query. [Results are paginated][1].  Use this endpoint to see your latest Audit Logs events.  [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public listAuditLogs(
    param: AuditApiListAuditLogsRequest = {},
    options?: Configuration
  ): Promise<AuditLogsEventsResponse> {
    const requestContextPromise = this.requestFactory.listAuditLogs(
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
          return this.responseProcessor.listAuditLogs(responseContext);
        });
    });
  }

  /**
   * List endpoint returns Audit Logs events that match an Audit search query. [Results are paginated][1].  Use this endpoint to build complex Audit Logs events filtering and search.  [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public searchAuditLogs(
    param: AuditApiSearchAuditLogsRequest = {},
    options?: Configuration
  ): Promise<AuditLogsEventsResponse> {
    const requestContextPromise = this.requestFactory.searchAuditLogs(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchAuditLogs(responseContext);
        });
    });
  }
}
