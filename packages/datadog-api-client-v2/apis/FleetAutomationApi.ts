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
import { FleetAgentDetailV2Response } from "../models/FleetAgentDetailV2Response";
import { FleetAgentsV2Response } from "../models/FleetAgentsV2Response";
import { FleetAgentVersionsV2Response } from "../models/FleetAgentVersionsV2Response";
import { FleetDeploymentConfigureV2CreateRequest } from "../models/FleetDeploymentConfigureV2CreateRequest";
import { FleetDeploymentConfigureV2DryRunResponse } from "../models/FleetDeploymentConfigureV2DryRunResponse";
import { FleetDeploymentPackageUpgradeV2CreateRequest } from "../models/FleetDeploymentPackageUpgradeV2CreateRequest";
import { FleetDeploymentResponse } from "../models/FleetDeploymentResponse";
import { FleetDeploymentsV2Response } from "../models/FleetDeploymentsV2Response";
import { FleetDeploymentV2CancelResponse } from "../models/FleetDeploymentV2CancelResponse";
import { FleetDeploymentV2CreateResponse } from "../models/FleetDeploymentV2CreateResponse";
import { FleetDeploymentV2DetailResponse } from "../models/FleetDeploymentV2DetailResponse";
import { FleetScheduleCreateRequest } from "../models/FleetScheduleCreateRequest";
import { FleetSchedulePatchRequest } from "../models/FleetSchedulePatchRequest";
import { FleetScheduleResponse } from "../models/FleetScheduleResponse";
import { FleetSchedulesV2Response } from "../models/FleetSchedulesV2Response";
import { FleetScheduleV2Response } from "../models/FleetScheduleV2Response";
import { FleetTracersResponse } from "../models/FleetTracersResponse";

export class FleetAutomationApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelFleetDeploymentV2(
    deploymentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "cancelFleetDeploymentV2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/fleet/deployments/{deployment_id}/cancel".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.cancelFleetDeploymentV2")
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

  public async createFleetDeploymentConfigureV2(
    body: FleetDeploymentConfigureV2CreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentConfigureV2");
    }

    // Path Params
    const localVarPath = "/api/v2/fleet/deployments/configure";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.createFleetDeploymentConfigureV2")
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
        "FleetDeploymentConfigureV2CreateRequest",
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

  public async createFleetDeploymentUpgradeV2(
    body: FleetDeploymentPackageUpgradeV2CreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentUpgradeV2");
    }

    // Path Params
    const localVarPath = "/api/v2/fleet/deployments/upgrade";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.createFleetDeploymentUpgradeV2")
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
        "FleetDeploymentPackageUpgradeV2CreateRequest",
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

  public async getFleetAgentDetailV2(
    agentKey: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentKey' is not null or undefined
    if (agentKey === null || agentKey === undefined) {
      throw new RequiredError("agentKey", "getFleetAgentDetailV2");
    }

    // Path Params
    const localVarPath = "/api/v2/fleet/agents/{agent_key}".replace(
      "{agent_key}",
      encodeURIComponent(String(agentKey))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetAgentDetailV2")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getFleetDeploymentV2(
    deploymentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "getFleetDeploymentV2");
    }

    // Path Params
    const localVarPath = "/api/v2/fleet/deployments/{deployment_id}".replace(
      "{deployment_id}",
      encodeURIComponent(String(deploymentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetDeploymentV2")
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

  public async getFleetScheduleV2(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getFleetScheduleV2");
    }

    // Path Params
    const localVarPath = "/api/v2/fleet/schedules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetScheduleV2")
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

  public async listFleetAgentsV2(
    pageNumber?: number,
    pageSize?: number,
    filter?: string,
    tags?: string,
    sortAttribute?: string,
    sortDescending?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/fleet/agents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetAgentsV2")
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
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFleetAgentTracers(
    agentKey: string,
    pageNumber?: number,
    pageSize?: number,
    sortAttribute?: string,
    sortDescending?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetAgentTracers'");
    if (!_config.unstableOperations["v2.listFleetAgentTracers"]) {
      throw new Error("Unstable operation 'listFleetAgentTracers' is disabled");
    }

    // verify required parameter 'agentKey' is not null or undefined
    if (agentKey === null || agentKey === undefined) {
      throw new RequiredError("agentKey", "listFleetAgentTracers");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/agents/{agent_key}/tracers".replace(
        "{agent_key}",
        encodeURIComponent(String(agentKey))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetAgentTracers")
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFleetAgentVersionsV2(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/fleet/agent_versions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetAgentVersionsV2")
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

  public async listFleetDeploymentsV2(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    ascending?: boolean,
    filter?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/fleet/deployments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetDeploymentsV2")
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
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page_number",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
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
    if (ascending !== undefined) {
      requestContext.setQueryParam(
        "ascending",
        ObjectSerializer.serialize(ascending, "boolean", ""),
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

  public async listFleetSchedulesV2(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/fleet/schedules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetSchedulesV2")
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

  public async listFleetTracers(
    pageNumber?: number,
    pageSize?: number,
    sortAttribute?: string,
    sortDescending?: boolean,
    filter?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetTracers'");
    if (!_config.unstableOperations["v2.listFleetTracers"]) {
      throw new Error("Unstable operation 'listFleetTracers' is disabled");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/tracers";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetTracers")
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
   * @params response Response returned by the server for a request to cancelFleetDeploymentV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelFleetDeploymentV2(
    response: ResponseContext
  ): Promise<FleetDeploymentV2CancelResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentV2CancelResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2CancelResponse"
        ) as FleetDeploymentV2CancelResponse;
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
      const body: FleetDeploymentV2CancelResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2CancelResponse",
          ""
        ) as FleetDeploymentV2CancelResponse;
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
   * @params response Response returned by the server for a request to createFleetDeploymentConfigureV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentConfigureV2(
    response: ResponseContext
  ): Promise<FleetDeploymentConfigureV2DryRunResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentConfigureV2DryRunResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentConfigureV2DryRunResponse"
        ) as FleetDeploymentConfigureV2DryRunResponse;
      return body;
    }
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentV2CreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2CreateResponse"
        ) as FleetDeploymentV2CreateResponse;
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
      const body: FleetDeploymentConfigureV2DryRunResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentConfigureV2DryRunResponse",
          ""
        ) as FleetDeploymentConfigureV2DryRunResponse;
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
   * @params response Response returned by the server for a request to createFleetDeploymentUpgradeV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentUpgradeV2(
    response: ResponseContext
  ): Promise<FleetDeploymentV2CreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentV2CreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2CreateResponse"
        ) as FleetDeploymentV2CreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: FleetDeploymentV2CreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2CreateResponse",
          ""
        ) as FleetDeploymentV2CreateResponse;
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
   * @params response Response returned by the server for a request to getFleetAgentDetailV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetAgentDetailV2(
    response: ResponseContext
  ): Promise<FleetAgentDetailV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetAgentDetailV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentDetailV2Response"
      ) as FleetAgentDetailV2Response;
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
      const body: FleetAgentDetailV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentDetailV2Response",
        ""
      ) as FleetAgentDetailV2Response;
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
   * @params response Response returned by the server for a request to getFleetDeploymentV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetDeploymentV2(
    response: ResponseContext
  ): Promise<FleetDeploymentV2DetailResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentV2DetailResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2DetailResponse"
        ) as FleetDeploymentV2DetailResponse;
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
      const body: FleetDeploymentV2DetailResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FleetDeploymentV2DetailResponse",
          ""
        ) as FleetDeploymentV2DetailResponse;
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
   * @params response Response returned by the server for a request to getFleetScheduleV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetScheduleV2(
    response: ResponseContext
  ): Promise<FleetScheduleV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetScheduleV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleV2Response"
      ) as FleetScheduleV2Response;
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
      const body: FleetScheduleV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetScheduleV2Response",
        ""
      ) as FleetScheduleV2Response;
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
   * @params response Response returned by the server for a request to listFleetAgentsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetAgentsV2(
    response: ResponseContext
  ): Promise<FleetAgentsV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetAgentsV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentsV2Response"
      ) as FleetAgentsV2Response;
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
      const body: FleetAgentsV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentsV2Response",
        ""
      ) as FleetAgentsV2Response;
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
   * @params response Response returned by the server for a request to listFleetAgentTracers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetAgentTracers(
    response: ResponseContext
  ): Promise<FleetTracersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetTracersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetTracersResponse"
      ) as FleetTracersResponse;
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
      const body: FleetTracersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetTracersResponse",
        ""
      ) as FleetTracersResponse;
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
   * @params response Response returned by the server for a request to listFleetAgentVersionsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetAgentVersionsV2(
    response: ResponseContext
  ): Promise<FleetAgentVersionsV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetAgentVersionsV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentVersionsV2Response"
      ) as FleetAgentVersionsV2Response;
      return body;
    }
    if (
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
      const body: FleetAgentVersionsV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetAgentVersionsV2Response",
        ""
      ) as FleetAgentVersionsV2Response;
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
   * @params response Response returned by the server for a request to listFleetDeploymentsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetDeploymentsV2(
    response: ResponseContext
  ): Promise<FleetDeploymentsV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentsV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentsV2Response"
      ) as FleetDeploymentsV2Response;
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
      const body: FleetDeploymentsV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentsV2Response",
        ""
      ) as FleetDeploymentsV2Response;
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
   * @params response Response returned by the server for a request to listFleetSchedulesV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetSchedulesV2(
    response: ResponseContext
  ): Promise<FleetSchedulesV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetSchedulesV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetSchedulesV2Response"
      ) as FleetSchedulesV2Response;
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
      const body: FleetSchedulesV2Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetSchedulesV2Response",
        ""
      ) as FleetSchedulesV2Response;
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
   * @params response Response returned by the server for a request to listFleetTracers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetTracers(
    response: ResponseContext
  ): Promise<FleetTracersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetTracersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetTracersResponse"
      ) as FleetTracersResponse;
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
      const body: FleetTracersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetTracersResponse",
        ""
      ) as FleetTracersResponse;
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

export interface FleetAutomationApiCancelFleetDeploymentV2Request {
  /**
   * The unique identifier of the deployment to cancel.
   * @type string
   */
  deploymentId: string;
}

export interface FleetAutomationApiCreateFleetDeploymentConfigureV2Request {
  /**
   * Request payload containing the deployment details.
   * @type FleetDeploymentConfigureV2CreateRequest
   */
  body: FleetDeploymentConfigureV2CreateRequest;
}

export interface FleetAutomationApiCreateFleetDeploymentUpgradeV2Request {
  /**
   * Request payload containing the package upgrade details.
   * @type FleetDeploymentPackageUpgradeV2CreateRequest
   */
  body: FleetDeploymentPackageUpgradeV2CreateRequest;
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

export interface FleetAutomationApiGetFleetAgentDetailV2Request {
  /**
   * The unique identifier (Agent key) for the Datadog Agent. Must be a 32-character lowercase hexadecimal string.
   * @type string
   */
  agentKey: string;
  /**
   * Comma-separated list of additional fields to include in the response. Valid values are `integrations` and `configuration_files`. Omitting this parameter returns only `agent_infos`. Unrecognized values are silently ignored rather than causing an error.
   * @type string
   */
  include?: string;
}

export interface FleetAutomationApiGetFleetDeploymentV2Request {
  /**
   * The unique identifier of the deployment to retrieve.
   * @type string
   */
  deploymentId: string;
}

export interface FleetAutomationApiGetFleetScheduleV2Request {
  /**
   * The unique identifier of the schedule to retrieve.
   * @type string
   */
  id: string;
}

export interface FleetAutomationApiListFleetAgentsV2Request {
  /**
   * Page number for pagination, starting at 0.
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of agents to return per page. Maximum value is 100. Defaults to 10.
   * @type number
   */
  pageSize?: number;
  /**
   * Filter string to narrow down agent results.
   * @type string
   */
  filter?: string;
  /**
   * Comma-separated list of tag keys to select which tags are included in each agent's `tags` attribute. Does not filter which agents are returned.
   * @type string
   */
  tags?: string;
  /**
   * Agent attribute to sort results by. Must be a supported attribute name; unsupported values return a 400 error.
   * @type string
   */
  sortAttribute?: string;
  /**
   * Set to `true` to sort results in descending order. Defaults to ascending.
   * @type boolean
   */
  sortDescending?: boolean;
}

export interface FleetAutomationApiListFleetAgentTracersRequest {
  /**
   * The unique identifier (agent key) for the Datadog Agent.
   * @type string
   */
  agentKey: string;
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
}

export interface FleetAutomationApiListFleetDeploymentsV2Request {
  /**
   * Number of deployments to return per page. Maximum value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Page number for pagination, starting at 0.
   * @type number
   */
  pageNumber?: number;
  /**
   * Field to sort results by (for example, `start_date`). Must be a supported field
   * name; unsupported values return a 400 error.
   * @type string
   */
  sort?: string;
  /**
   * Set to `true` to sort in ascending order. This setting has no effect unless `sort` is also set.
   * Defaults to descending order.
   * @type boolean
   */
  ascending?: boolean;
  /**
   * Query used to filter deployments. Uses the Datadog query syntax. Filtering on an
   * unsupported field returns a 400 error. For example:
   * - `status:failed` or `status:done_with_errors`: deployments that need investigation.
   * - `status:running`: deployments currently in flight.
   * - `update_type:update_package` or `update_type:update_config_operations`: deployments of a given type.
   * @type string
   */
  filter?: string;
}

export interface FleetAutomationApiListFleetTracersRequest {
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
   * Filter string for narrowing down tracer results.
   * @type string
   */
  filter?: string;
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
   * - All pending operations on hosts that haven't started yet are stopped.
   * - Operations currently in progress on hosts may complete or be interrupted, depending on their current status.
   * - Configuration changes or package upgrades already applied to hosts are not rolled back.
   *
   * After cancellation, you can view the final state of the deployment using the GET endpoint to see which hosts
   * were successfully updated before the cancellation.
   *
   * Only deployments with a `pending` or `running` status can be canceled. Returns a 400 if the deployment is not in a cancelable status. Returns a 404 if no deployment matches the specified ID or if you do not have access to it.
   * @param param The request object
   */
  public cancelFleetDeploymentV2(
    param: FleetAutomationApiCancelFleetDeploymentV2Request,
    options?: Configuration
  ): Promise<FleetDeploymentV2CancelResponse> {
    const requestContextPromise = this.requestFactory.cancelFleetDeploymentV2(
      param.deploymentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelFleetDeploymentV2(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new deployment to apply configuration changes
   * to a fleet of hosts matching the specified filter query.
   *
   * This endpoint supports two types of configuration operations:
   * - `merge-patch`: Merges the provided patch data with the existing configuration file,
   *   creating the file if it doesn't exist.
   * - `delete`: Removes the specified configuration file from the target hosts.
   *
   * You can optionally use `target_packages` to apply the configuration change only to specific package versions.
   *
   * The deployment is created and started automatically. You can specify multiple configuration
   * operations to execute in order on each target host. Use the filter query to target
   * specific hosts using the Datadog query syntax.
   *
   * Set `dry_run` to `true` to validate the configuration and resolve target hosts and packages without deploying anything. A dry run returns a 200 with the validation result instead of creating and starting a deployment.
   *
   * Returns a 400 if `filter_query` or `config_operations` is missing, a target package is missing a name or version or cannot be resolved, the configuration fails validation, or the filter query does not match any host eligible for the deployment.
   * @param param The request object
   */
  public createFleetDeploymentConfigureV2(
    param: FleetAutomationApiCreateFleetDeploymentConfigureV2Request,
    options?: Configuration
  ): Promise<FleetDeploymentConfigureV2DryRunResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentConfigureV2(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentConfigureV2(
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
   * The deployment is created and started automatically. The system:
   * 1. Identifies all hosts matching the filter query.
   * 2. Validates that the specified version is available.
   * 3. Begins rolling out the package upgrade to the target hosts.
   *
   * Returns a 400 if `filter_query` or `target_packages` is missing, a target package is missing a name or version, or the filter query does not match any host eligible for the upgrade. Returns a 409 if a conflicting upgrade is already running on one or more target hosts.
   * @param param The request object
   */
  public createFleetDeploymentUpgradeV2(
    param: FleetAutomationApiCreateFleetDeploymentUpgradeV2Request,
    options?: Configuration
  ): Promise<FleetDeploymentV2CreateResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentUpgradeV2(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentUpgradeV2(
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
   *
   * By default, only `agent_infos` is returned. Use the `include` query parameter to
   * request additional data: `integrations` and/or `configuration_files`.
   * @param param The request object
   */
  public getFleetAgentDetailV2(
    param: FleetAutomationApiGetFleetAgentDetailV2Request,
    options?: Configuration
  ): Promise<FleetAgentDetailV2Response> {
    const requestContextPromise = this.requestFactory.getFleetAgentDetailV2(
      param.agentKey,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetAgentDetailV2(responseContext);
        });
    });
  }

  /**
   * Retrieve detailed information about a specific deployment, including its current status,
   * configuration operations, and per-host execution status.
   *
   * Returns a 404 if no deployment matches the given ID or if you do not have access to it.
   * @param param The request object
   */
  public getFleetDeploymentV2(
    param: FleetAutomationApiGetFleetDeploymentV2Request,
    options?: Configuration
  ): Promise<FleetDeploymentV2DetailResponse> {
    const requestContextPromise = this.requestFactory.getFleetDeploymentV2(
      param.deploymentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetDeploymentV2(responseContext);
        });
    });
  }

  /**
   * Retrieve detailed information about a specific schedule by its unique identifier.
   * @param param The request object
   */
  public getFleetScheduleV2(
    param: FleetAutomationApiGetFleetScheduleV2Request,
    options?: Configuration
  ): Promise<FleetScheduleV2Response> {
    const requestContextPromise = this.requestFactory.getFleetScheduleV2(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetScheduleV2(responseContext);
        });
    });
  }

  /**
   * Retrieve a paginated list of Datadog Agents.
   *
   * Returns agents with support for pagination, sorting, and filtering.
   * Use `page_number` and `page_size` to navigate pages, `filter` to narrow by field values,
   * and `tags` to filter by agent tags.
   * @param param The request object
   */
  public listFleetAgentsV2(
    param: FleetAutomationApiListFleetAgentsV2Request = {},
    options?: Configuration
  ): Promise<FleetAgentsV2Response> {
    const requestContextPromise = this.requestFactory.listFleetAgentsV2(
      param.pageNumber,
      param.pageSize,
      param.filter,
      param.tags,
      param.sortAttribute,
      param.sortDescending,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetAgentsV2(responseContext);
        });
    });
  }

  /**
   * Retrieve a paginated list of tracers for a specific agent.
   *
   * This endpoint returns tracers associated with a given agent key, identified by the
   * agent's hostname. Use this to discover telemetry-derived service names for a particular host.
   * @param param The request object
   */
  public listFleetAgentTracers(
    param: FleetAutomationApiListFleetAgentTracersRequest,
    options?: Configuration
  ): Promise<FleetTracersResponse> {
    const requestContextPromise = this.requestFactory.listFleetAgentTracers(
      param.agentKey,
      param.pageNumber,
      param.pageSize,
      param.sortAttribute,
      param.sortDescending,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetAgentTracers(responseContext);
        });
    });
  }

  /**
   * Retrieve the list of Datadog Agent versions available for deployment.
   *
   * Returns `200` with an empty `data` array if the Agent package exists in the catalog
   * but has no available versions, and `404` only if the Agent package itself is absent
   * from the catalog.
   * @param param The request object
   */
  public listFleetAgentVersionsV2(
    options?: Configuration
  ): Promise<FleetAgentVersionsV2Response> {
    const requestContextPromise =
      this.requestFactory.listFleetAgentVersionsV2(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetAgentVersionsV2(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a paginated list of all deployments for fleet automation.
   * @param param The request object
   */
  public listFleetDeploymentsV2(
    param: FleetAutomationApiListFleetDeploymentsV2Request = {},
    options?: Configuration
  ): Promise<FleetDeploymentsV2Response> {
    const requestContextPromise = this.requestFactory.listFleetDeploymentsV2(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.ascending,
      param.filter,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetDeploymentsV2(responseContext);
        });
    });
  }

  /**
   * Retrieve all upgrade schedules for the organization.
   *
   * Schedules automate package upgrades by defining maintenance windows and recurrence rules.
   * Each schedule automatically creates deployments based on its configuration.
   * @param param The request object
   */
  public listFleetSchedulesV2(
    options?: Configuration
  ): Promise<FleetSchedulesV2Response> {
    const requestContextPromise =
      this.requestFactory.listFleetSchedulesV2(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetSchedulesV2(responseContext);
        });
    });
  }

  /**
   * Retrieve a paginated list of all fleet tracers.
   *
   * This endpoint returns telemetry-derived service names from the SDK telemetry pipeline.
   * These names may differ from span-derived names in APM and are useful for querying
   * service library configurations.
   * Use the `page_number` and `page_size` query parameters to paginate through results.
   * @param param The request object
   */
  public listFleetTracers(
    param: FleetAutomationApiListFleetTracersRequest = {},
    options?: Configuration
  ): Promise<FleetTracersResponse> {
    const requestContextPromise = this.requestFactory.listFleetTracers(
      param.pageNumber,
      param.pageSize,
      param.sortAttribute,
      param.sortDescending,
      param.filter,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetTracers(responseContext);
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
