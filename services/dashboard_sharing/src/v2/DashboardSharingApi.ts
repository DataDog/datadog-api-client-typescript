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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListSharedDashboardsResponse } from "./models/ListSharedDashboardsResponse";
import { version } from "../version";

export class DashboardSharingApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dashboard-sharing", version);
    }
  }
  public async listSharedDashboardsByDashboardId(
    dashboardId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["DashboardSharingApi.v2.listSharedDashboardsByDashboardId"]) {
      throw new Error("Unstable operation 'listSharedDashboardsByDashboardId' is disabled. Enable it by setting `configuration.unstableOperations['DashboardSharingApi.v2.listSharedDashboardsByDashboardId'] = true`");
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "listSharedDashboardsByDashboardId");
    }

    // Path Params
    const localVarPath = "/api/v2/dashboard/{dashboard_id}/shared".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("DashboardSharingApi.v2.listSharedDashboardsByDashboardId", DashboardSharingApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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

export class DashboardSharingApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSharedDashboardsByDashboardId
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSharedDashboardsByDashboardId(
    response: ResponseContext,
  ): Promise<ListSharedDashboardsResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: ListSharedDashboardsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSharedDashboardsResponse",
      ) as ListSharedDashboardsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListSharedDashboardsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSharedDashboardsResponse",
        "",
      ) as ListSharedDashboardsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: DashboardSharingApiRequestFactory,
    responseProcessor?: DashboardSharingApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DashboardSharingApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DashboardSharingApiResponseProcessor();
  }

  /**
   * Retrieve shared dashboards associated with the specified dashboard.
   * @param param The request object
   */
  public listSharedDashboardsByDashboardId(
    param: DashboardSharingApiListSharedDashboardsByDashboardIdRequest,
    options?: Configuration,
  ): Promise<ListSharedDashboardsResponse> {
    const requestContextPromise = this.requestFactory.listSharedDashboardsByDashboardId(
      param.dashboardId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSharedDashboardsByDashboardId(responseContext);
        });
    });
  }
}
