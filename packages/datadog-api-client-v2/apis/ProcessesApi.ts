import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
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
import { ProcessSummariesResponse } from "../models/ProcessSummariesResponse";
import { ProcessSummary } from "../models/ProcessSummary";

export class ProcessesApiRequestFactory extends BaseAPIRequestFactory {
  public async listProcesses(
    search?: string,
    tags?: string,
    from?: number,
    to?: number,
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/processes";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProcessesApi.listProcesses")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        ObjectSerializer.serialize(search, "string", ""),
        ""
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "string", ""),
        ""
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64"),
        ""
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "number", "int64"),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
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
}

export class ProcessesApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listProcesses
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProcesses(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ProcessSummariesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProcessSummariesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ProcessSummariesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ProcessSummariesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ProcessSummariesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ProcessSummariesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ProcessSummariesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ProcessesApiListProcessesRequest {
  /**
   * Free-text search over process fields such as the executable and user. When it contains several
   * words, a process must match all of them. Use `tags` for exact values such as host.
   * @type string
   */
  search?: string;
  /**
   * Comma-separated `key:value` tags. A process must match every tag. Wildcards, negation
   * (`-key:value`), spaces, and `IN (...)` are not supported. To cover several hosts, make one
   * request per host.
   * @type string
   */
  tags?: string;
  /**
   * Start of the query window, in Unix seconds. Must be within the past 36 hours and at most 1 hour
   * before `to`. If not provided, the start of the query window is 15 minutes before the `to` timestamp.
   * If neither `from` nor `to` is provided, the query window is `[now - 15m, now]`.
   * @type number
   */
  from?: number;
  /**
   * End of the query window, in Unix seconds. Must be at most 1 hour after `from`. If not provided, the
   * end of the query window is 15 minutes after the `from` timestamp. If neither `from` nor `to` is
   * provided, the query window is `[now - 15m, now]`.
   * @type number
   */
  to?: number;
  /**
   * Maximum number of results returned.
   * @type number
   */
  pageLimit?: number;
  /**
   * String to query the next page of results.
   * This key is provided with each valid response from the API in `meta.page.after`.
   * @type string
   */
  pageCursor?: string;
}

export class ProcessesApi {
  private requestFactory: ProcessesApiRequestFactory;
  private responseProcessor: ProcessesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProcessesApiRequestFactory,
    responseProcessor?: ProcessesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ProcessesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ProcessesApiResponseProcessor(configuration);
  }

  /**
   * Get processes collected by Live Processes for your organization. One request covers a window of
   * at most 1 hour that starts within the past 36 hours. To cover a longer period, make one request
   * per hour. Older data is not available from this endpoint.
   *
   * When a process includes `identifying_tags`, pass them as `tag_filters` in a `process` data source
   * query to `/api/v2/query/scalar` or `/api/v2/query/timeseries` to get CPU or memory metrics for that
   * one process. If absent, don't substitute an empty filter, which would query all processes.
   * @param param The request object
   */
  public listProcesses(
    param: ProcessesApiListProcessesRequest = {},
    options?: Configuration
  ): Promise<ProcessSummariesResponse> {
    const requestContextPromise = this.requestFactory.listProcesses(
      param.search,
      param.tags,
      param.from,
      param.to,
      param.pageLimit,
      param.pageCursor,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProcesses(responseContext, options);
        });
    });
  }

  /**
   * Provide a paginated version of listProcesses returning a generator with all the items.
   */
  public async *listProcessesWithPagination(
    param: ProcessesApiListProcessesRequest = {},
    options?: Configuration
  ): AsyncGenerator<ProcessSummary> {
    let pageSize = 1000;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listProcesses(
        param.search,
        param.tags,
        param.from,
        param.to,
        param.pageLimit,
        param.pageCursor,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listProcesses(
        responseContext,
        options
      );
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
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
