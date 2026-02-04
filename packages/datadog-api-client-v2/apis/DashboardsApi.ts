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
import { DashboardSearchResponse } from "../models/DashboardSearchResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
  public async searchDashboards(
    query?: string,
    sort?: string,
    include?: string,
    page?: number,
    limit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchDashboards'");
    if (!_config.unstableOperations["v2.searchDashboards"]) {
      throw new Error("Unstable operation 'searchDashboards' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/dashboards/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardsApi.searchDashboards")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        ObjectSerializer.serialize(page, "number", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class DashboardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to searchDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchDashboards(
    response: ResponseContext
  ): Promise<DashboardSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardSearchResponse"
      ) as DashboardSearchResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 503) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: DashboardSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardSearchResponse",
        ""
      ) as DashboardSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DashboardsApiSearchDashboardsRequest {
  /**
   * Search query string.
   * @type string
   */
  query?: string;
  /**
   * Sort field for results.
   * @type string
   */
  sort?: string;
  /**
   * Additional data to include in the response.
   * @type string
   */
  include?: string;
  /**
   * Page number for pagination.
   * @type number
   */
  page?: number;
  /**
   * Maximum number of results to return.
   * @type number
   */
  limit?: number;
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
   * Search for dashboards using a query string.
   * @param param The request object
   */
  public searchDashboards(
    param: DashboardsApiSearchDashboardsRequest = {},
    options?: Configuration
  ): Promise<DashboardSearchResponse> {
    const requestContextPromise = this.requestFactory.searchDashboards(
      param.query,
      param.sort,
      param.include,
      param.page,
      param.limit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchDashboards(responseContext);
        });
    });
  }
}
