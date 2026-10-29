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
import { ContainerItem } from "./models/ContainerItem";
import { ContainersResponse } from "./models/ContainersResponse";
import { version } from "../version";

export class ContainersApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("containers", version);
    }
  }
  public async listContainers(
    filterTags?: string,
    groupBy?: string,
    sort?: string,
    pageSize?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/containers";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ContainersApi.v2.listContainers",
      ContainersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (groupBy !== undefined) {
      requestContext.setQueryParam(
        "group_by",
        serialize(groupBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int32"),
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class ContainersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listContainers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listContainers(
    response: ResponseContext,
  ): Promise<ContainersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ContainersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ContainersResponse",
      ) as ContainersResponse;
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
      const body: ContainersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ContainersResponse",
        "",
      ) as ContainersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ContainersApiListContainersRequest {
  /**
   * Comma-separated `key:value` tags. A container must match every tag. Wildcards, negation
   * (`-key:value`), spaces, and `IN (...)` are not supported. To cover several hosts, make one
   * request per host.
   * @type string
   */
  filterTags?: string;
  /**
   * Comma-separated list of up to three tag keys to group containers by. Returns `container_group`
   * objects with counts and tags. Grouped results ignore `sort` and do not support pagination.
   * Containers with multiple values for a grouping tag can appear in multiple groups.
   * Summing group counts can overcount distinct containers.
   * @type string
   */
  groupBy?: string;
  /**
   * Attribute to sort individual containers by: `name`, `created_at`, `started_at`, `state`,
   * `container_id`, `host`, `image_name`, or `image_digest`. Defaults to `started_at` in ascending
   * order. Prefix the attribute with `-` for descending order, such as `-started_at`.
   * Ignored when `group_by` is specified.
   * @type string
   */
  sort?: string;
  /**
   * Maximum number of results returned. For grouped results, defaults to `100` with a maximum
   * of `1000` groups.
   * @type number
   */
  pageSize?: number;
  /**
   * String to query the next page of results.
   * This key is provided with each valid response from the API in `meta.pagination.next_cursor`.
   * @type string
   */
  pageCursor?: string;
}

export class ContainersApi {
  private requestFactory: ContainersApiRequestFactory;
  private responseProcessor: ContainersApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ContainersApiRequestFactory,
    responseProcessor?: ContainersApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ContainersApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ContainersApiResponseProcessor();
  }

  /**
   * Get all containers for your organization. Use `group_by` to return container groups with counts.
   * Grouped results are limited by `page[size]` and do not support pagination.
   *
   * To get CPU or memory metrics, use a `container` data source query with `/api/v2/query/scalar`
   * or `/api/v2/query/timeseries`.
   * @param param The request object
   */
  public listContainers(
    param: ContainersApiListContainersRequest = {},
    options?: Configuration,
  ): Promise<ContainersResponse> {
    const requestContextPromise = this.requestFactory.listContainers(
      param.filterTags,
      param.groupBy,
      param.sort,
      param.pageSize,
      param.pageCursor,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listContainers(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listContainers returning a generator with all the items.
   */
  public async *listContainersWithPagination(
    param: ContainersApiListContainersRequest = {},
    options?: Configuration,
  ): AsyncGenerator<ContainerItem> {
    let pageSize = 1000;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listContainers(
        param.filterTags,
        param.groupBy,
        param.sort,
        param.pageSize,
        param.pageCursor,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listContainers(responseContext);
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
      const cursorMetaPagination = cursorMeta.pagination;
      if (cursorMetaPagination === undefined) {
        break;
      }
      const cursorMetaPaginationNextCursor = cursorMetaPagination.nextCursor;
      if (cursorMetaPaginationNextCursor === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPaginationNextCursor;
    }
  }
}
