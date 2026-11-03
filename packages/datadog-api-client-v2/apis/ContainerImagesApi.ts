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
import { ContainerImageItem } from "../models/ContainerImageItem";
import { ContainerImagesResponse } from "../models/ContainerImagesResponse";

export class ContainerImagesApiRequestFactory extends BaseAPIRequestFactory {
  public async listContainerImages(
    filterTags?: string,
    groupBy?: string,
    sort?: string,
    pageSize?: number,
    pageCursor?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/container_images";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ContainerImagesApi.listContainerImages")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
        ""
      );
    }
    if (groupBy !== undefined) {
      requestContext.setQueryParam(
        "group_by",
        ObjectSerializer.serialize(groupBy, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int32"),
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

export class ContainerImagesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listContainerImages
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listContainerImages(
    response: ResponseContext
  ): Promise<ContainerImagesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ContainerImagesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ContainerImagesResponse"
      ) as ContainerImagesResponse;
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
      const body: ContainerImagesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ContainerImagesResponse",
        ""
      ) as ContainerImagesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ContainerImagesApiListContainerImagesRequest {
  /**
   * Comma-separated `key:value` tags. An image must match every tag. Wildcards, negation
   * (`-key:value`), spaces, and `IN (...)` are not supported. Use keys such as `image_registry`
   * and `image_tag`. To match any of several values of the same key, make one request per value.
   * @type string
   */
  filterTags?: string;
  /**
   * Comma-separated list of up to three tag keys, such as `image_registry,image_tag`. Returns
   * `container_image_group` objects with counts and tags. Grouped results ignore `sort` and do
   * not support pagination. Images missing a grouping key are excluded. An image with multiple
   * values for a grouping tag can appear in multiple groups. Grouped results may be incomplete.
   * Compare counts only within the returned groups; they do not establish the most common tags
   * or proportions across the inventory. For inventory-wide comparisons, omit `group_by`, keep the
   * same filters, paginate all results, and deduplicate by returned image ID. For an inventory total,
   * use `meta.pagination.total` from a query without grouping.
   * @type string
   */
  groupBy?: string;
  /**
   * Attribute to sort individual images by, such as `size` or `container_count`.
   * Defaults to `image_name` in ascending order. Prefix the attribute with `-` for
   * descending order, such as `-size`. Ignored when `group_by` is specified.
   * @type string
   */
  sort?: string;
  /**
   * Maximum number of results returned. Grouped queries default to `100`, with a maximum of `1000` groups.
   * Without grouping, queries default to `1000`, with a maximum of `10000` images. Minimum is `1`.
   * @type number
   */
  pageSize?: number;
  /**
   * Opaque cursor from `meta.pagination.next_cursor` for individual images. Keep the same filters
   * and sort order. Stop when absent or empty. Grouped queries do not support pagination.
   * @type string
   */
  pageCursor?: string;
}

export class ContainerImagesApi {
  private requestFactory: ContainerImagesApiRequestFactory;
  private responseProcessor: ContainerImagesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ContainerImagesApiRequestFactory,
    responseProcessor?: ContainerImagesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ContainerImagesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ContainerImagesApiResponseProcessor();
  }

  /**
   * Get all container images for your organization. This endpoint queries current
   * inventory and does not support time-range parameters.
   *
   * Use `group_by` to return image groups with counts. Grouped results are limited
   * by `page[size]`, may be incomplete, and do not support pagination.
   *
   * **Note**: To enrich the data returned by this endpoint with security scans, see the new [api/v2/security/scanned-assets-metadata](https://docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.
   * @param param The request object
   */
  public listContainerImages(
    param: ContainerImagesApiListContainerImagesRequest = {},
    options?: Configuration
  ): Promise<ContainerImagesResponse> {
    const requestContextPromise = this.requestFactory.listContainerImages(
      param.filterTags,
      param.groupBy,
      param.sort,
      param.pageSize,
      param.pageCursor,
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listContainerImages(
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
