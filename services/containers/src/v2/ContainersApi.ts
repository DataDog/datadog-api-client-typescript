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
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { ContainerItem } from "./models/ContainerItem";
import { ContainersResponse } from "./models/ContainersResponse";

export class ContainersApiRequestFactory extends BaseAPIRequestFactory {
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
    const requestContext = _config
      .getServer("0.0.1.ContainersApi.listContainers")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
        "",
      );
    }
    if (groupBy !== undefined) {
      requestContext.setQueryParam(
        "group_by",
        ObjectSerializer.serialize(groupBy, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int32"),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
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
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: ContainersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ContainersResponse",
      ) as ContainersResponse;
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
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ContainersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
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
   * Comma-separated list of tags to filter containers by.
   * @type string
   */
  filterTags?: string;
  /**
   * Comma-separated list of tags to group containers by.
   * @type string
   */
  groupBy?: string;
  /**
   * Attribute to sort containers by.
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

export class ContainersApi {
  private requestFactory: ContainersApiRequestFactory;
  private responseProcessor: ContainersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ContainersApiRequestFactory,
    responseProcessor?: ContainersApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ContainersApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ContainersApiResponseProcessor();
  }

  /**
   * Get all containers for your organization.
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
    param: ContainersApiListContainersRequest = {}, options?: Configuration,
  ): AsyncGenerator<ContainerItem> {

    let pageSize = 1000;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listContainers(param.filterTags,param.groupBy,param.sort,param.pageSize,param.pageCursor,options);
      const responseContext = await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listContainers(responseContext);
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
