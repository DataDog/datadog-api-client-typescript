import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
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
import { DashboardUsage } from "../models/DashboardUsage";
import { DashboardUsageResponse } from "../models/DashboardUsageResponse";
import { ListDashboardsUsageResponse } from "../models/ListDashboardsUsageResponse";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
  public async getDashboardUsage(
    dashboardId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getDashboardUsage'");
    if (!_config.unstableOperations["v2.getDashboardUsage"]) {
      throw new Error("Unstable operation 'getDashboardUsage' is disabled");
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "getDashboardUsage");
    }

    // Path Params
    const localVarPath = "/api/v2/dashboards/{dashboard_id}/usage".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardsApi.getDashboardUsage")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listDashboardsUsage(
    pageLimit?: number,
    pageOffset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listDashboardsUsage'");
    if (!_config.unstableOperations["v2.listDashboardsUsage"]) {
      throw new Error("Unstable operation 'listDashboardsUsage' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/dashboards/usage";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardsApi.listDashboardsUsage")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
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

export class DashboardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDashboardUsage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardUsage(
    response: ResponseContext
  ): Promise<DashboardUsageResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardUsageResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardUsageResponse"
      ) as DashboardUsageResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: DashboardUsageResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardUsageResponse",
        ""
      ) as DashboardUsageResponse;
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
   * @params response Response returned by the server for a request to listDashboardsUsage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDashboardsUsage(
    response: ResponseContext
  ): Promise<ListDashboardsUsageResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListDashboardsUsageResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListDashboardsUsageResponse"
      ) as ListDashboardsUsageResponse;
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
      const body: ListDashboardsUsageResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListDashboardsUsageResponse",
        ""
      ) as ListDashboardsUsageResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DashboardsApiGetDashboardUsageRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardsApiListDashboardsUsageRequest {
  /**
   * Maximum number of dashboards to return per page. Server-side maximum is 500; values above 500 return a 400 Bad Request.
   * @type number
   */
  pageLimit?: number;
  /**
   * Zero-based offset into the result set.
   * @type number
   */
  pageOffset?: number;
}

export class DashboardsApi {
  private requestFactory: DashboardsApiRequestFactory;
  private responseProcessor: DashboardsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardsApiRequestFactory,
    responseProcessor?: DashboardsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DashboardsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardsApiResponseProcessor();
  }

  /**
   * Get usage statistics for a single dashboard. The response includes view counts, the most recent view and edit times, widget counts, and the dashboard quality score.
   * @param param The request object
   */
  public getDashboardUsage(
    param: DashboardsApiGetDashboardUsageRequest,
    options?: Configuration
  ): Promise<DashboardUsageResponse> {
    const requestContextPromise = this.requestFactory.getDashboardUsage(
      param.dashboardId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardUsage(responseContext);
        });
    });
  }

  /**
   * Get paginated usage statistics for every dashboard in the caller's organization. Use `page[limit]` and `page[offset]` to walk the result set.
   * @param param The request object
   */
  public listDashboardsUsage(
    param: DashboardsApiListDashboardsUsageRequest = {},
    options?: Configuration
  ): Promise<ListDashboardsUsageResponse> {
    const requestContextPromise = this.requestFactory.listDashboardsUsage(
      param.pageLimit,
      param.pageOffset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDashboardsUsage(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listDashboardsUsage returning a generator with all the items.
   */
  public async *listDashboardsUsageWithPagination(
    param: DashboardsApiListDashboardsUsageRequest = {},
    options?: Configuration
  ): AsyncGenerator<DashboardUsage> {
    let pageSize = 250;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listDashboardsUsage(
        param.pageLimit,
        param.pageOffset,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listDashboardsUsage(
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
      if (results.length < pageSize) {
        break;
      }
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }
}
