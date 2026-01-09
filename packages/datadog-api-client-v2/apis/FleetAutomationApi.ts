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
import { FleetAgentInfoResponse } from "../models/FleetAgentInfoResponse";
import { FleetAgentsResponse } from "../models/FleetAgentsResponse";
import { FleetAgentVersionsResponse } from "../models/FleetAgentVersionsResponse";
import { FleetDeploymentConfigureCreateRequest } from "../models/FleetDeploymentConfigureCreateRequest";
import { FleetDeploymentPackageUpgradeCreateRequest } from "../models/FleetDeploymentPackageUpgradeCreateRequest";
import { FleetDeploymentResponse } from "../models/FleetDeploymentResponse";
import { FleetDeploymentsResponse } from "../models/FleetDeploymentsResponse";
import { FleetScheduleCreateRequest } from "../models/FleetScheduleCreateRequest";
import { FleetSchedulePatchRequest } from "../models/FleetSchedulePatchRequest";
import { FleetScheduleResponse } from "../models/FleetScheduleResponse";
import { FleetSchedulesResponse } from "../models/FleetSchedulesResponse";

export class FleetAutomationApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelFleetDeployment(
    deploymentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelFleetDeployment'");
    if (!_config.unstableOperations["v2.cancelFleetDeployment"]) {
      throw new Error("Unstable operation 'cancelFleetDeployment' is disabled");
    }

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "cancelFleetDeployment");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/deployments/{deployment_id}/cancel".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.cancelFleetDeployment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createFleetDeploymentConfigure(
    body: FleetDeploymentConfigureCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createFleetDeploymentConfigure'");
    if (!_config.unstableOperations["v2.createFleetDeploymentConfigure"]) {
      throw new Error(
        "Unstable operation 'createFleetDeploymentConfigure' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentConfigure");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments/configure";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.createFleetDeploymentConfigure")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "FleetDeploymentConfigureCreateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createFleetDeploymentUpgrade'");
    if (!_config.unstableOperations["v2.createFleetDeploymentUpgrade"]) {
      throw new Error(
        "Unstable operation 'createFleetDeploymentUpgrade' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentUpgrade");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments/upgrade";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.createFleetDeploymentUpgrade")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "FleetDeploymentPackageUpgradeCreateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createFleetSchedule'");
    if (!_config.unstableOperations["v2.createFleetSchedule"]) {
      throw new Error("Unstable operation 'createFleetSchedule' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.createFleetSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FleetScheduleCreateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteFleetSchedule'");
    if (!_config.unstableOperations["v2.deleteFleetSchedule"]) {
      throw new Error("Unstable operation 'deleteFleetSchedule' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.deleteFleetSchedule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getFleetAgentInfo(
    agentKey: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFleetAgentInfo'");
    if (!_config.unstableOperations["v2.getFleetAgentInfo"]) {
      throw new Error("Unstable operation 'getFleetAgentInfo' is disabled");
    }

    // verify required parameter 'agentKey' is not null or undefined
    if (agentKey === null || agentKey === undefined) {
      throw new RequiredError("agentKey", "getFleetAgentInfo");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/agents/{agent_key}".replace(
      "{agent_key}",
      encodeURIComponent(String(agentKey))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetAgentInfo")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFleetDeployment'");
    if (!_config.unstableOperations["v2.getFleetDeployment"]) {
      throw new Error("Unstable operation 'getFleetDeployment' is disabled");
    }

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "getFleetDeployment");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/deployments/{deployment_id}".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetDeployment")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        ObjectSerializer.serialize(page, "number", "int64"),
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

  public async getFleetSchedule(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFleetSchedule'");
    if (!_config.unstableOperations["v2.getFleetSchedule"]) {
      throw new Error("Unstable operation 'getFleetSchedule' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetSchedule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFleetAgents(
    pageNumber?: number,
    pageSize?: number,
    sortAttribute?: string,
    sortDescending?: boolean,
    tags?: string,
    filter?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetAgents'");
    if (!_config.unstableOperations["v2.listFleetAgents"]) {
      throw new Error("Unstable operation 'listFleetAgents' is disabled");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/agents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetAgents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page_number",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (sortAttribute !== undefined) {
      requestContext.setQueryParam(
        "sort_attribute",
        ObjectSerializer.serialize(sortAttribute, "string", ""),
        ""
      );
    }
    if (sortDescending !== undefined) {
      requestContext.setQueryParam(
        "sort_descending",
        ObjectSerializer.serialize(sortDescending, "boolean", ""),
        ""
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "string", ""),
        ""
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
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

  public async listFleetAgentVersions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetAgentVersions'");
    if (!_config.unstableOperations["v2.listFleetAgentVersions"]) {
      throw new Error(
        "Unstable operation 'listFleetAgentVersions' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/agent_versions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetAgentVersions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetDeployments'");
    if (!_config.unstableOperations["v2.listFleetDeployments"]) {
      throw new Error("Unstable operation 'listFleetDeployments' is disabled");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetDeployments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page_offset",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
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

  public async listFleetSchedules(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetSchedules'");
    if (!_config.unstableOperations["v2.listFleetSchedules"]) {
      throw new Error("Unstable operation 'listFleetSchedules' is disabled");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetSchedules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async triggerFleetSchedule(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'triggerFleetSchedule'");
    if (!_config.unstableOperations["v2.triggerFleetSchedule"]) {
      throw new Error("Unstable operation 'triggerFleetSchedule' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "triggerFleetSchedule");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/schedules/{id}/trigger".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.triggerFleetSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateFleetSchedule'");
    if (!_config.unstableOperations["v2.updateFleetSchedule"]) {
      throw new Error("Unstable operation 'updateFleetSchedule' is disabled");
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
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.updateFleetSchedule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FleetSchedulePatchRequest", ""),
      contentType
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
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      return;
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
   * @params response Response returned by the server for a request to createFleetDeploymentConfigure
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentConfigure(
    response: ResponseContext
  ): Promise<FleetDeploymentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse"
      ) as FleetDeploymentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse",
        ""
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to createFleetDeploymentUpgrade
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentUpgrade(
    response: ResponseContext
  ): Promise<FleetDeploymentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse"
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
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse",
        ""
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to createFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetSchedule(
    response: ResponseContext
  ): Promise<FleetScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FleetScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleResponse"
      ) as FleetScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleResponse",
        ""
      ) as FleetScheduleResponse;
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
   * @params response Response returned by the server for a request to deleteFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteFleetSchedule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      return;
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
   * @params response Response returned by the server for a request to getFleetAgentInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetAgentInfo(
    response: ResponseContext
  ): Promise<FleetAgentInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetAgentInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentInfoResponse"
      ) as FleetAgentInfoResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetAgentInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentInfoResponse",
        ""
      ) as FleetAgentInfoResponse;
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
   * @params response Response returned by the server for a request to getFleetDeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetDeployment(
    response: ResponseContext
  ): Promise<FleetDeploymentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse"
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
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse",
        ""
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to getFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetSchedule(
    response: ResponseContext
  ): Promise<FleetScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleResponse"
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
      const body: FleetScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleResponse",
        ""
      ) as FleetScheduleResponse;
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
   * @params response Response returned by the server for a request to listFleetAgents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetAgents(
    response: ResponseContext
  ): Promise<FleetAgentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetAgentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentsResponse"
      ) as FleetAgentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetAgentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentsResponse",
        ""
      ) as FleetAgentsResponse;
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
   * @params response Response returned by the server for a request to listFleetAgentVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetAgentVersions(
    response: ResponseContext
  ): Promise<FleetAgentVersionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetAgentVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentVersionsResponse"
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
      const body: FleetAgentVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentVersionsResponse",
        ""
      ) as FleetAgentVersionsResponse;
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
   * @params response Response returned by the server for a request to listFleetDeployments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetDeployments(
    response: ResponseContext
  ): Promise<FleetDeploymentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentsResponse"
      ) as FleetDeploymentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetDeploymentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentsResponse",
        ""
      ) as FleetDeploymentsResponse;
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
   * @params response Response returned by the server for a request to listFleetSchedules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetSchedules(
    response: ResponseContext
  ): Promise<FleetSchedulesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetSchedulesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetSchedulesResponse"
      ) as FleetSchedulesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FleetSchedulesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetSchedulesResponse",
        ""
      ) as FleetSchedulesResponse;
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
   * @params response Response returned by the server for a request to triggerFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerFleetSchedule(
    response: ResponseContext
  ): Promise<FleetDeploymentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse"
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
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse",
        ""
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to updateFleetSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFleetSchedule(
    response: ResponseContext
  ): Promise<FleetScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleResponse"
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
      const body: FleetScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleResponse",
        ""
      ) as FleetScheduleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

export interface FleetAutomationApiGetFleetAgentInfoRequest {
  /**
   * The unique identifier (agent key) for the Datadog Agent.
   * @type string
   */
  agentKey: string;
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

export interface FleetAutomationApiListFleetAgentsRequest {
  /**
   * Page number for pagination (starts at 0).
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of results per page (must be greater than 0 and less than or equal to 100).
   * @type number
   */
  pageSize?: number;
  /**
   * Attribute to sort by.
   * @type string
   */
  sortAttribute?: string;
  /**
   * Sort order (true for descending, false for ascending).
   * @type boolean
   */
  sortDescending?: boolean;
  /**
   * Comma-separated list of tags to filter agents.
   * @type string
   */
  tags?: string;
  /**
   * Filter string for narrowing down agent results.
   * @type string
   */
  filter?: string;
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

  public constructor(
    configuration: Configuration,
    requestFactory?: FleetAutomationApiRequestFactory,
    responseProcessor?: FleetAutomationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new FleetAutomationApiRequestFactory(configuration);
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelFleetDeployment(
      param.deploymentId,
      options
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
    options?: Configuration
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentConfigure(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentConfigure(
            responseContext
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
    options?: Configuration
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentUpgrade(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentUpgrade(
            responseContext
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
    options?: Configuration
  ): Promise<FleetScheduleResponse> {
    const requestContextPromise = this.requestFactory.createFleetSchedule(
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteFleetSchedule(
      param.id,
      options
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
   * Retrieve detailed information about a specific Datadog Agent.
   * This endpoint returns comprehensive information about an agent including:
   * - Agent details and metadata
   * - Configured integrations organized by status (working, warning, error, missing)
   * - Detected integrations
   * - Configuration files and layers
   * @param param The request object
   */
  public getFleetAgentInfo(
    param: FleetAutomationApiGetFleetAgentInfoRequest,
    options?: Configuration
  ): Promise<FleetAgentInfoResponse> {
    const requestContextPromise = this.requestFactory.getFleetAgentInfo(
      param.agentKey,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetAgentInfo(responseContext);
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
    options?: Configuration
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise = this.requestFactory.getFleetDeployment(
      param.deploymentId,
      param.limit,
      param.page,
      options
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
    options?: Configuration
  ): Promise<FleetScheduleResponse> {
    const requestContextPromise = this.requestFactory.getFleetSchedule(
      param.id,
      options
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
   * Retrieve a paginated list of all Datadog Agents.
   * This endpoint returns a paginated list of all Datadog Agents with support for pagination, sorting, and filtering.
   * Use the `page_number` and `page_size` query parameters to paginate through results.
   * @param param The request object
   */
  public listFleetAgents(
    param: FleetAutomationApiListFleetAgentsRequest = {},
    options?: Configuration
  ): Promise<FleetAgentsResponse> {
    const requestContextPromise = this.requestFactory.listFleetAgents(
      param.pageNumber,
      param.pageSize,
      param.sortAttribute,
      param.sortDescending,
      param.tags,
      param.filter,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetAgents(responseContext);
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
    options?: Configuration
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
    options?: Configuration
  ): Promise<FleetDeploymentsResponse> {
    const requestContextPromise = this.requestFactory.listFleetDeployments(
      param.pageSize,
      param.pageOffset,
      options
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
    options?: Configuration
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
    options?: Configuration
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise = this.requestFactory.triggerFleetSchedule(
      param.id,
      options
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
    options?: Configuration
  ): Promise<FleetScheduleResponse> {
    const requestContextPromise = this.requestFactory.updateFleetSchedule(
      param.id,
      param.body,
      options
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
