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
import { FleetAgentVersionsResponse } from "./models/FleetAgentVersionsResponse";
import { FleetDeploymentConfigureCreateRequest } from "./models/FleetDeploymentConfigureCreateRequest";
import { FleetDeploymentPackageUpgradeCreateRequest } from "./models/FleetDeploymentPackageUpgradeCreateRequest";
import { FleetDeploymentResponse } from "./models/FleetDeploymentResponse";
import { FleetDeploymentsResponse } from "./models/FleetDeploymentsResponse";
import { FleetScheduleCreateRequest } from "./models/FleetScheduleCreateRequest";
import { FleetSchedulePatchRequest } from "./models/FleetSchedulePatchRequest";
import { FleetScheduleResponse } from "./models/FleetScheduleResponse";
import { FleetSchedulesResponse } from "./models/FleetSchedulesResponse";
import { version } from "../version";

export class FleetAutomationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("fleet-automation", version);
    }
  }
  public async cancelFleetDeployment(
    deploymentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.cancelFleetDeployment"]
    ) {
      throw new Error(
        "Unstable operation 'cancelFleetDeployment' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.cancelFleetDeployment'] = true`",
      );
    }

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "cancelFleetDeployment");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/deployments/{deployment_id}/cancel".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.cancelFleetDeployment",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createFleetDeploymentConfigure(
    body: FleetDeploymentConfigureCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "FleetAutomationApi.v2.createFleetDeploymentConfigure"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createFleetDeploymentConfigure' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.createFleetDeploymentConfigure'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentConfigure");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments/configure";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.createFleetDeploymentConfigure",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "FleetDeploymentConfigureCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createFleetDeploymentUpgrade(
    body: FleetDeploymentPackageUpgradeCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "FleetAutomationApi.v2.createFleetDeploymentUpgrade"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createFleetDeploymentUpgrade' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.createFleetDeploymentUpgrade'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentUpgrade");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments/upgrade";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.createFleetDeploymentUpgrade",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "FleetDeploymentPackageUpgradeCreateRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createFleetSchedule(
    body: FleetScheduleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.createFleetSchedule"]
    ) {
      throw new Error(
        "Unstable operation 'createFleetSchedule' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.createFleetSchedule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.createFleetSchedule",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "FleetScheduleCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteFleetSchedule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.deleteFleetSchedule"]
    ) {
      throw new Error(
        "Unstable operation 'deleteFleetSchedule' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.deleteFleetSchedule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.deleteFleetSchedule",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getFleetDeployment(
    deploymentId: string,
    limit?: number,
    page?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.getFleetDeployment"]
    ) {
      throw new Error(
        "Unstable operation 'getFleetDeployment' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.getFleetDeployment'] = true`",
      );
    }

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "getFleetDeployment");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/deployments/{deployment_id}".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.getFleetDeployment",
      FleetAutomationApi.operationServers,
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
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getFleetSchedule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FleetAutomationApi.v2.getFleetSchedule"]) {
      throw new Error(
        "Unstable operation 'getFleetSchedule' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.getFleetSchedule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.getFleetSchedule",
      FleetAutomationApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFleetAgentVersions(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "FleetAutomationApi.v2.listFleetAgentVersions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listFleetAgentVersions' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.listFleetAgentVersions'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/agents";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.listFleetAgentVersions",
      FleetAutomationApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFleetDeployments(
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.listFleetDeployments"]
    ) {
      throw new Error(
        "Unstable operation 'listFleetDeployments' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.listFleetDeployments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.listFleetDeployments",
      FleetAutomationApi.operationServers,
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page_offset",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFleetSchedules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.listFleetSchedules"]
    ) {
      throw new Error(
        "Unstable operation 'listFleetSchedules' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.listFleetSchedules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.listFleetSchedules",
      FleetAutomationApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async triggerFleetSchedule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.triggerFleetSchedule"]
    ) {
      throw new Error(
        "Unstable operation 'triggerFleetSchedule' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.triggerFleetSchedule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "triggerFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}/trigger".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.triggerFleetSchedule",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
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
    ]);

    return requestContext;
  }

  public async updateFleetSchedule(
    id: string,
    body: FleetSchedulePatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FleetAutomationApi.v2.updateFleetSchedule"]
    ) {
      throw new Error(
        "Unstable operation 'updateFleetSchedule' is disabled. Enable it by setting `configuration.unstableOperations['FleetAutomationApi.v2.updateFleetSchedule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateFleetSchedule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FleetAutomationApi.v2.updateFleetSchedule",
      FleetAutomationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "FleetSchedulePatchRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class FleetAutomationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelFleetDeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelFleetDeployment(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      return;
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
   * @params response Response returned by the server for a request to createFleetDeploymentConfigure
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentConfigure(
    response: ResponseContext,
  ): Promise<FleetDeploymentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
      ) as FleetDeploymentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
        "",
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to createFleetDeploymentUpgrade
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentUpgrade(
    response: ResponseContext,
  ): Promise<FleetDeploymentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
      ) as FleetDeploymentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
        "",
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to createFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetSchedule(
    response: ResponseContext,
  ): Promise<FleetScheduleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FleetScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetScheduleResponse",
      ) as FleetScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetScheduleResponse",
        "",
      ) as FleetScheduleResponse;
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
   * @params response Response returned by the server for a request to deleteFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteFleetSchedule(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      return;
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
   * @params response Response returned by the server for a request to getFleetDeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetDeployment(
    response: ResponseContext,
  ): Promise<FleetDeploymentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
      ) as FleetDeploymentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
        "",
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to getFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetSchedule(
    response: ResponseContext,
  ): Promise<FleetScheduleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FleetScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetScheduleResponse",
      ) as FleetScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetScheduleResponse",
        "",
      ) as FleetScheduleResponse;
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
   * @params response Response returned by the server for a request to listFleetAgentVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetAgentVersions(
    response: ResponseContext,
  ): Promise<FleetAgentVersionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FleetAgentVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetAgentVersionsResponse",
      ) as FleetAgentVersionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetAgentVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetAgentVersionsResponse",
        "",
      ) as FleetAgentVersionsResponse;
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
   * @params response Response returned by the server for a request to listFleetDeployments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetDeployments(
    response: ResponseContext,
  ): Promise<FleetDeploymentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentsResponse",
      ) as FleetDeploymentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentsResponse",
        "",
      ) as FleetDeploymentsResponse;
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
   * @params response Response returned by the server for a request to listFleetSchedules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetSchedules(
    response: ResponseContext,
  ): Promise<FleetSchedulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FleetSchedulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetSchedulesResponse",
      ) as FleetSchedulesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetSchedulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetSchedulesResponse",
        "",
      ) as FleetSchedulesResponse;
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
   * @params response Response returned by the server for a request to triggerFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerFleetSchedule(
    response: ResponseContext,
  ): Promise<FleetDeploymentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
      ) as FleetDeploymentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetDeploymentResponse",
        "",
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to updateFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFleetSchedule(
    response: ResponseContext,
  ): Promise<FleetScheduleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FleetScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetScheduleResponse",
      ) as FleetScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FleetScheduleResponse",
        "",
      ) as FleetScheduleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface FleetAutomationApiCancelFleetDeploymentRequest {
  /**
   * The unique identifier of the deployment to cancel.
   * @type string
   */
  deploymentId: string;
}

export interface FleetAutomationApiCreateFleetDeploymentConfigureRequest {
  /**
   * Request payload containing the deployment details.
   * @type FleetDeploymentConfigureCreateRequest
   */
  body: FleetDeploymentConfigureCreateRequest;
}

export interface FleetAutomationApiCreateFleetDeploymentUpgradeRequest {
  /**
   * Request payload containing the package upgrade details.
   * @type FleetDeploymentPackageUpgradeCreateRequest
   */
  body: FleetDeploymentPackageUpgradeCreateRequest;
}

export interface FleetAutomationApiCreateFleetScheduleRequest {
  /**
   * Request payload containing the schedule details.
   * @type FleetScheduleCreateRequest
   */
  body: FleetScheduleCreateRequest;
}

export interface FleetAutomationApiDeleteFleetScheduleRequest {
  /**
   * The unique identifier of the schedule to delete.
   * @type string
   */
  id: string;
}

export interface FleetAutomationApiGetFleetDeploymentRequest {
  /**
   * The unique identifier of the deployment to retrieve.
   * @type string
   */
  deploymentId: string;
  /**
   * Maximum number of hosts to return per page. Default is 50, maximum is 100.
   * @type number
   */
  limit?: number;
  /**
   * Page index for pagination (zero-based). Use this to retrieve subsequent pages of hosts.
   * @type number
   */
  page?: number;
}

export interface FleetAutomationApiGetFleetScheduleRequest {
  /**
   * The unique identifier of the schedule to retrieve.
   * @type string
   */
  id: string;
}

export interface FleetAutomationApiListFleetDeploymentsRequest {
  /**
   * Number of deployments to return per page. Maximum value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Index of the first deployment to return. Use this with `page_size` to paginate through results.
   * @type number
   */
  pageOffset?: number;
}

export interface FleetAutomationApiTriggerFleetScheduleRequest {
  /**
   * The unique identifier of the schedule to trigger.
   * @type string
   */
  id: string;
}

export interface FleetAutomationApiUpdateFleetScheduleRequest {
  /**
   * The unique identifier of the schedule to update.
   * @type string
   */
  id: string;
  /**
   * Request payload containing the fields to update.
   * @type FleetSchedulePatchRequest
   */
  body: FleetSchedulePatchRequest;
}

export class FleetAutomationApi {
  private requestFactory: FleetAutomationApiRequestFactory;
  private responseProcessor: FleetAutomationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: FleetAutomationApiRequestFactory,
    responseProcessor?: FleetAutomationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new FleetAutomationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new FleetAutomationApiResponseProcessor();
  }

  /**
   * Cancel an active deployment and stop all pending operations.
   * When you cancel a deployment:
   * - All pending operations on hosts that haven't started yet are stopped
   * - Operations currently in progress on hosts may complete or be interrupted, depending on their current state
   * - Configuration changes or package upgrades already applied to hosts are not rolled back
   *
   * After cancellation, you can view the final state of the deployment using the GET endpoint to see which hosts
   * were successfully updated before the cancellation.
   * @param param The request object
   */
  public cancelFleetDeployment(
    param: FleetAutomationApiCancelFleetDeploymentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelFleetDeployment(
      param.deploymentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelFleetDeployment(responseContext);
        });
    });
  }

  /**
   * Create a new deployment to apply configuration changes
   * to a fleet of hosts matching the specified filter query.
   *
   * This endpoint supports two types of configuration operations:
   * - `merge-patch`: Merges the provided patch data with the existing configuration file,
   *   creating the file if it doesn't exist
   * - `delete`: Removes the specified configuration file from the target hosts
   *
   * The deployment is created and started automatically. You can specify multiple configuration
   * operations that will be executed in order on each target host. Use the filter query to target
   * specific hosts using the Datadog query syntax.
   * @param param The request object
   */
  public createFleetDeploymentConfigure(
    param: FleetAutomationApiCreateFleetDeploymentConfigureRequest,
    options?: Configuration,
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentConfigure(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentConfigure(
            responseContext,
          );
        });
    });
  }

  /**
   * Create and immediately start a new package upgrade
   * on hosts matching the specified filter query.
   *
   * This endpoint allows you to upgrade the Datadog Agent to a specific version
   * on hosts matching the specified filter query.
   *
   * The deployment is created and started automatically. The system will:
   * 1. Identify all hosts matching the filter query
   * 2. Validate that the specified version is available
   * 3. Begin rolling out the package upgrade to the target hosts
   * @param param The request object
   */
  public createFleetDeploymentUpgrade(
    param: FleetAutomationApiCreateFleetDeploymentUpgradeRequest,
    options?: Configuration,
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentUpgrade(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentUpgrade(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new schedule for automated package upgrades.
   *
   * Schedules define when and how often to automatically deploy package upgrades to a fleet
   * of hosts. Each schedule includes:
   * - A filter query to select target hosts
   * - A recurrence rule defining maintenance windows
   * - A version strategy (e.g., always latest, or N versions behind latest)
   *
   * When the schedule triggers during a maintenance window, it automatically creates a
   * deployment that upgrades the Datadog Agent to the specified version on all matching hosts.
   * @param param The request object
   */
  public createFleetSchedule(
    param: FleetAutomationApiCreateFleetScheduleRequest,
    options?: Configuration,
  ): Promise<FleetScheduleResponse> {
    const requestContextPromise = this.requestFactory.createFleetSchedule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetSchedule(responseContext);
        });
    });
  }

  /**
   * Delete a schedule permanently.
   *
   * When you delete a schedule:
   * - The schedule is permanently removed and will no longer create deployments
   * - Any deployments already created by this schedule are not affected
   * - This action cannot be undone
   *
   * If you want to temporarily stop a schedule from creating deployments, consider
   * updating its status to "inactive" instead of deleting it.
   * @param param The request object
   */
  public deleteFleetSchedule(
    param: FleetAutomationApiDeleteFleetScheduleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteFleetSchedule(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteFleetSchedule(responseContext);
        });
    });
  }

  /**
   * Retrieve detailed information about a specific deployment using its unique identifier.
   * This endpoint returns comprehensive information about a deployment, including:
   * - Deployment metadata (ID, type, filter query)
   * - Total number of target hosts
   * - Current high-level status (pending, running, succeeded, failed)
   * - Estimated completion time
   * - Configuration operations that were or are being applied
   * - Detailed host list: A paginated array of hosts included in this deployment with individual
   *   host status, current package versions, and any errors
   *
   * The host list provides visibility into the per-host execution status, allowing you to:
   * - Monitor which hosts have completed successfully
   * - Identify hosts that are still in progress
   * - Investigate failures on specific hosts
   * - View current package versions installed on each host (including initial, target, and current
   *   versions for each package)
   *
   * Pagination: Use the `limit` and `page` query parameters to paginate through hosts. The response
   * includes pagination metadata in the `meta.hosts` field with information about the current page,
   * total pages, and total host count. The default page size is 50 hosts, with a maximum of 100.
   * @param param The request object
   */
  public getFleetDeployment(
    param: FleetAutomationApiGetFleetDeploymentRequest,
    options?: Configuration,
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise = this.requestFactory.getFleetDeployment(
      param.deploymentId,
      param.limit,
      param.page,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetDeployment(responseContext);
        });
    });
  }

  /**
   * Retrieve detailed information about a specific schedule using its unique identifier.
   *
   * This endpoint returns comprehensive information about a schedule, including:
   * - Schedule metadata (ID, name, creation/update timestamps)
   * - Filter query for selecting target hosts
   * - Recurrence rule defining when deployments are triggered
   * - Version strategy for package upgrades
   * - Current status (active or inactive)
   * @param param The request object
   */
  public getFleetSchedule(
    param: FleetAutomationApiGetFleetScheduleRequest,
    options?: Configuration,
  ): Promise<FleetScheduleResponse> {
    const requestContextPromise = this.requestFactory.getFleetSchedule(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetSchedule(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of all available Datadog Agent versions.
   *
   * This endpoint returns the available Agent versions that can be deployed to your fleet.
   * These versions are used when creating deployments or configuring schedules for
   * automated Agent upgrades.
   * @param param The request object
   */
  public listFleetAgentVersions(
    options?: Configuration,
  ): Promise<FleetAgentVersionsResponse> {
    const requestContextPromise =
      this.requestFactory.listFleetAgentVersions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetAgentVersions(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of all deployments for fleet automation.
   * Use the `page_size` and `page_offset` parameters to paginate results.
   * @param param The request object
   */
  public listFleetDeployments(
    param: FleetAutomationApiListFleetDeploymentsRequest = {},
    options?: Configuration,
  ): Promise<FleetDeploymentsResponse> {
    const requestContextPromise = this.requestFactory.listFleetDeployments(
      param.pageSize,
      param.pageOffset,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetDeployments(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of all schedules for automated fleet deployments.
   *
   * Schedules allow you to automate package upgrades by defining maintenance windows
   * and recurrence rules. Each schedule automatically creates deployments based on its
   * configuration.
   * @param param The request object
   */
  public listFleetSchedules(
    options?: Configuration,
  ): Promise<FleetSchedulesResponse> {
    const requestContextPromise =
      this.requestFactory.listFleetSchedules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetSchedules(responseContext);
        });
    });
  }

  /**
   * Manually trigger a schedule to immediately create and start a deployment.
   *
   * This endpoint allows you to manually initiate a deployment using the schedule's
   * configuration, without waiting for the next scheduled maintenance window. This is
   * useful for:
   * - Testing a schedule before it runs automatically
   * - Performing an emergency update outside the regular maintenance window
   * - Creating an ad-hoc deployment with the same settings as a schedule
   *
   * The deployment is created immediately with:
   * - The same filter query as the schedule
   * - The package version determined by the schedule's version strategy
   * - All matching hosts as targets
   *
   * The manually triggered deployment is independent of the schedule and does not
   * affect the schedule's normal recurrence pattern.
   * @param param The request object
   */
  public triggerFleetSchedule(
    param: FleetAutomationApiTriggerFleetScheduleRequest,
    options?: Configuration,
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise = this.requestFactory.triggerFleetSchedule(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerFleetSchedule(responseContext);
        });
    });
  }

  /**
   * Partially update a schedule by providing only the fields you want to change.
   *
   * This endpoint allows you to modify specific attributes of a schedule without
   * affecting other fields. Common use cases include:
   * - Changing the schedule status between active and inactive
   * - Updating the maintenance window times
   * - Modifying the filter query to target different hosts
   * - Adjusting the version strategy
   *
   * Only include the fields you want to update in the request body. All fields
   * are optional in a PATCH request.
   * @param param The request object
   */
  public updateFleetSchedule(
    param: FleetAutomationApiUpdateFleetScheduleRequest,
    options?: Configuration,
  ): Promise<FleetScheduleResponse> {
    const requestContextPromise = this.requestFactory.updateFleetSchedule(
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFleetSchedule(responseContext);
        });
    });
  }
}
