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
import { ProcessSummariesResponse } from "./models/ProcessSummariesResponse";
import { ProcessSummary } from "./models/ProcessSummary";
import { version } from "../version";

export class ProcessesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("processes", version);
    }
  }
  public async listProcesses(
    search?: string,
    tags?: string,
    from?: number,
    to?: number,
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/processes";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProcessesApi.v2.listProcesses",
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
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        serialize(search, TypingInfo, "string", ""),
        "",
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        serialize(tags, TypingInfo, "string", ""),
        "",
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "number", "int64"),
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
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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
}

export class ProcessesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listProcesses
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProcesses(
    response: ResponseContext,
  ): Promise<ProcessSummariesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProcessSummariesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProcessSummariesResponse",
      ) as ProcessSummariesResponse;
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
      const body: ProcessSummariesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProcessSummariesResponse",
        "",
      ) as ProcessSummariesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ProcessesApiListProcessesRequest {
  /**
   * String to search processes by.
   * @type string
   */
  search?: string;
  /**
   * Comma-separated list of tags to filter processes by.
   * @type string
   */
  tags?: string;
  /**
   * Unix timestamp (number of seconds since epoch) of the start of the query window.
   * If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither
   * `from` nor `to` are provided, the query window will be `[now - 15m, now]`.
   * @type number
   */
  from?: number;
  /**
   * Unix timestamp (number of seconds since epoch) of the end of the query window.
   * If not provided, the end of the query window will be 15 minutes after the `from` timestamp. If neither
   * `from` nor `to` are provided, the query window will be `[now - 15m, now]`.
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

  private static operationServers: {
    [key: string]: BaseServerConfiguration[];
  } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ProcessesApiRequestFactory,
    responseProcessor?: ProcessesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ProcessesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ProcessesApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Get all processes for your organization.
   * @param param The request object
   */
  public listProcesses(
    param: ProcessesApiListProcessesRequest = {},
    options?: Configuration,
  ): Promise<ProcessSummariesResponse> {
    const requestContextPromise = this.requestFactory.listProcesses(
      param.search,
      param.tags,
      param.from,
      param.to,
      param.pageLimit,
      param.pageCursor,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProcesses(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listProcesses returning a generator with all the items.
   */
  public async *listProcessesWithPagination(
    param: ProcessesApiListProcessesRequest = {},
    options?: Configuration,
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
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listProcesses(responseContext);
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
