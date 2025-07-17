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
import { ContainerImageItem } from "./models/ContainerImageItem";
import { ContainerImagesResponse } from "./models/ContainerImagesResponse";
import { version } from "../version";

export class ContainerImagesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("container-images", version);
    }
  }
  public async listContainerImages(
    filterTags?: string,
    groupBy?: string,
    sort?: string,
    pageSize?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/container_images";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ContainerImagesApi.v2.listContainerImages",
      ContainerImagesApi.operationServers,
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

export class ContainerImagesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listContainerImages
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listContainerImages(
    response: ResponseContext,
  ): Promise<ContainerImagesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ContainerImagesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ContainerImagesResponse",
      ) as ContainerImagesResponse;
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
      const body: ContainerImagesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ContainerImagesResponse",
        "",
      ) as ContainerImagesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ContainerImagesApiListContainerImagesRequest {
  /**
   * Comma-separated list of tags to filter Container Images by.
   * @type string
   */
  filterTags?: string;
  /**
   * Comma-separated list of tags to group Container Images by.
   * @type string
   */
  groupBy?: string;
  /**
   * Attribute to sort Container Images by.
   * @type string
   */
  sort?: string;
  /**
   * Maximum number of results returned.
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

export class ContainerImagesApi {
  private requestFactory: ContainerImagesApiRequestFactory;
  private responseProcessor: ContainerImagesApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ContainerImagesApiRequestFactory,
    responseProcessor?: ContainerImagesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ContainerImagesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ContainerImagesApiResponseProcessor();
  }

  /**
   * Get all Container Images for your organization.
   * @param param The request object
   */
  public listContainerImages(
    param: ContainerImagesApiListContainerImagesRequest = {},
    options?: Configuration,
  ): Promise<ContainerImagesResponse> {
    const requestContextPromise = this.requestFactory.listContainerImages(
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
          return this.responseProcessor.listContainerImages(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listContainerImages returning a generator with all the items.
   */
  public async *listContainerImagesWithPagination(
    param: ContainerImagesApiListContainerImagesRequest = {},
    options?: Configuration,
  ): AsyncGenerator<ContainerImageItem> {
    let pageSize = 1000;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listContainerImages(
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
        await this.responseProcessor.listContainerImages(responseContext);
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
