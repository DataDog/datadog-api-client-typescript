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
import { APIErrorResponse } from "../v1/models/APIErrorResponse";
import { Dashboard } from "./models/Dashboard";
import { version } from "../version";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dashboards", version);
    }
  }
  public async createDashboard(
    body: Dashboard,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DashboardsApi.v1_20270101.createDashboard",
      DashboardsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("DD-API-Version", "2027-01-01");
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Dashboard", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getDashboard(
    dashboardId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "getDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/{dashboard_id}".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DashboardsApi.v1_20270101.getDashboard",
      DashboardsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("DD-API-Version", "2027-01-01");
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateDashboard(
    dashboardId: string,
    body: Dashboard,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "updateDashboard");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/{dashboard_id}".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DashboardsApi.v1_20270101.updateDashboard",
      DashboardsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("DD-API-Version", "2027-01-01");
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Dashboard", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

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
   * @params response Response returned by the server for a request to createDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Dashboard = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Dashboard",
      ) as Dashboard;
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
      const body: Dashboard = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Dashboard",
        "",
      ) as Dashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Dashboard = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Dashboard",
      ) as Dashboard;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: Dashboard = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Dashboard",
        "",
      ) as Dashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Dashboard = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Dashboard",
      ) as Dashboard;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: Dashboard = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Dashboard",
        "",
      ) as Dashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DashboardsApiCreateDashboardRequest {
  /**
   * Create a dashboard request body.
   * @type Dashboard
   */
  body: Dashboard;
}

export interface DashboardsApiGetDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardsApiUpdateDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * Update Dashboard request body.
   * @type Dashboard
   */
  body: Dashboard;
}

export class DashboardsApi {
  private requestFactory: DashboardsApiRequestFactory;
  private responseProcessor: DashboardsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DashboardsApiRequestFactory,
    responseProcessor?: DashboardsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DashboardsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DashboardsApiResponseProcessor();
  }

  /**
   * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended.
   * Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
   * @param param The request object
   */
  public createDashboard(
    param: DashboardsApiCreateDashboardRequest,
    options?: Configuration,
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.createDashboard(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboard(responseContext);
        });
    });
  }

  /**
   * Get a dashboard using the specified ID.
   * @param param The request object
   */
  public getDashboard(
    param: DashboardsApiGetDashboardRequest,
    options?: Configuration,
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.getDashboard(
      param.dashboardId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboard(responseContext);
        });
    });
  }

  /**
   * Update a dashboard using the specified ID.
   * @param param The request object
   */
  public updateDashboard(
    param: DashboardsApiUpdateDashboardRequest,
    options?: Configuration,
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.updateDashboard(
      param.dashboardId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboard(responseContext);
        });
    });
  }
}
