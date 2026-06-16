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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListSharedDashboardsResponse } from "../models/ListSharedDashboardsResponse";

export class DashboardSharingApiRequestFactory extends BaseAPIRequestFactory {
  public async listSharedDashboardsByDashboardId(
    dashboardId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSharedDashboardsByDashboardId'");
    if (!_config.unstableOperations["v2.listSharedDashboardsByDashboardId"]) {
      throw new Error(
        "Unstable operation 'listSharedDashboardsByDashboardId' is disabled"
      );
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError(
        "dashboardId",
        "listSharedDashboardsByDashboardId"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/dashboard/{dashboard_id}/shared".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardSharingApi.listSharedDashboardsByDashboardId")
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
}

export class DashboardSharingApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSharedDashboardsByDashboardId
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSharedDashboardsByDashboardId(
    response: ResponseContext
  ): Promise<ListSharedDashboardsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListSharedDashboardsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSharedDashboardsResponse"
      ) as ListSharedDashboardsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
      const body: ListSharedDashboardsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSharedDashboardsResponse",
        ""
      ) as ListSharedDashboardsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DashboardSharingApiListSharedDashboardsByDashboardIdRequest {
  /**
   * ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export class DashboardSharingApi {
  private requestFactory: DashboardSharingApiRequestFactory;
  private responseProcessor: DashboardSharingApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardSharingApiRequestFactory,
    responseProcessor?: DashboardSharingApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DashboardSharingApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardSharingApiResponseProcessor();
  }

  /**
   * Retrieve shared dashboards associated with the specified dashboard.
   * @param param The request object
   */
  public listSharedDashboardsByDashboardId(
    param: DashboardSharingApiListSharedDashboardsByDashboardIdRequest,
    options?: Configuration
  ): Promise<ListSharedDashboardsResponse> {
    const requestContextPromise =
      this.requestFactory.listSharedDashboardsByDashboardId(
        param.dashboardId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSharedDashboardsByDashboardId(
            responseContext
          );
        });
    });
  }
}
