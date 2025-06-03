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
import { AuditLogsEvent } from "./models/AuditLogsEvent";
import { AuditLogsEventsResponse } from "./models/AuditLogsEventsResponse";
import { AuditLogsQueryPageOptions } from "./models/AuditLogsQueryPageOptions";
import { AuditLogsSearchEventsRequest } from "./models/AuditLogsSearchEventsRequest";
import { AuditLogsSort } from "./models/AuditLogsSort";
import { version } from "../version";

export class AuditApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("audit", version);
    }
  }
  public async listAuditLogs(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: AuditLogsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/audit/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AuditApi.v2.listAuditLogs",
      AuditApi.operationServers,
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
        serialize(sort, TypingInfo, "AuditLogsSort", ""),
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

  public async searchAuditLogs(
    body?: AuditLogsSearchEventsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/audit/events/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AuditApi.v2.searchAuditLogs",
      AuditApi.operationServers,
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
      serialize(body, TypingInfo, "AuditLogsSearchEventsRequest", ""),
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

export class AuditApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAuditLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAuditLogs(
    response: ResponseContext,
  ): Promise<AuditLogsEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AuditLogsEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AuditLogsEventsResponse",
      ) as AuditLogsEventsResponse;
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
      const body: AuditLogsEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AuditLogsEventsResponse",
        "",
      ) as AuditLogsEventsResponse;
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
   * @params response Response returned by the server for a request to searchAuditLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchAuditLogs(
    response: ResponseContext,
  ): Promise<AuditLogsEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AuditLogsEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AuditLogsEventsResponse",
      ) as AuditLogsEventsResponse;
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
      const body: AuditLogsEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AuditLogsEventsResponse",
        "",
      ) as AuditLogsEventsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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
   * @type AuditLogsSearchEventsRequest
   */
  body?: AuditLogsSearchEventsRequest;
}

export class AuditApi {
  private requestFactory: AuditApiRequestFactory;
  private responseProcessor: AuditApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: AuditApiRequestFactory,
    responseProcessor?: AuditApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AuditApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AuditApiResponseProcessor();
  }

  /**
   * List endpoint returns events that match a Audit Logs search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to see your latest Audit Logs events.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public listAuditLogs(
    param: AuditApiListAuditLogsRequest = {},
    options?: Configuration,
  ): Promise<AuditLogsEventsResponse> {
    const requestContextPromise = this.requestFactory.listAuditLogs(
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
          return this.responseProcessor.listAuditLogs(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listAuditLogs returning a generator with all the items.
   */
  public async *listAuditLogsWithPagination(
    param: AuditApiListAuditLogsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<AuditLogsEvent> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listAuditLogs(
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
        await this.responseProcessor.listAuditLogs(responseContext);
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
   * List endpoint returns Audit Logs events that match an Audit search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to build complex Audit Logs events filtering and search.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public searchAuditLogs(
    param: AuditApiSearchAuditLogsRequest = {},
    options?: Configuration,
  ): Promise<AuditLogsEventsResponse> {
    const requestContextPromise = this.requestFactory.searchAuditLogs(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchAuditLogs(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchAuditLogs returning a generator with all the items.
   */
  public async *searchAuditLogsWithPagination(
    param: AuditApiSearchAuditLogsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<AuditLogsEvent> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new AuditLogsSearchEventsRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new AuditLogsQueryPageOptions();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchAuditLogs(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchAuditLogs(responseContext);
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
