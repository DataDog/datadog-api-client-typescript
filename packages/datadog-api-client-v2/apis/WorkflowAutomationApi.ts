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
import { CreateWorkflowRequest } from "../models/CreateWorkflowRequest";
import { CreateWorkflowResponse } from "../models/CreateWorkflowResponse";
import { GetWorkflowResponse } from "../models/GetWorkflowResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { UpdateWorkflowRequest } from "../models/UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "../models/UpdateWorkflowResponse";
import { WorkflowFavoriteRequest } from "../models/WorkflowFavoriteRequest";
import { WorkflowHeadlessExecutionRequest } from "../models/WorkflowHeadlessExecutionRequest";
import { WorkflowHeadlessExecutionResponse } from "../models/WorkflowHeadlessExecutionResponse";
import { WorkflowInstanceCreateRequest } from "../models/WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "../models/WorkflowInstanceCreateResponse";
import { WorkflowListInstancesResponse } from "../models/WorkflowListInstancesResponse";
import { WorkflowWebhookExecutionResponse } from "../models/WorkflowWebhookExecutionResponse";
import { WorklflowCancelInstanceResponse } from "../models/WorklflowCancelInstanceResponse";
import { WorklflowGetInstanceResponse } from "../models/WorklflowGetInstanceResponse";

export class WorkflowAutomationApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelWorkflowInstance(
    workflowId: string,
    instanceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "cancelWorkflowInstance");
    }

    // verify required parameter 'instanceId' is not null or undefined
    if (instanceId === null || instanceId === undefined) {
      throw new RequiredError("instanceId", "cancelWorkflowInstance");
    }

    // Path Params
    const localVarPath =
      "/api/v2/workflows/{workflow_id}/instances/{instance_id}/cancel"
        .replace("{workflow_id}", encodeURIComponent(String(workflowId)))
        .replace("{instance_id}", encodeURIComponent(String(instanceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.cancelWorkflowInstance")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createWorkflow(
    body: CreateWorkflowRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.createWorkflow")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateWorkflowRequest", ""),
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

  public async createWorkflowInstance(
    workflowId: string,
    body: WorkflowInstanceCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "createWorkflowInstance");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWorkflowInstance");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}/instances".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.createWorkflowInstance")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "WorkflowInstanceCreateRequest", ""),
      contentType
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

  public async deleteWorkflow(
    workflowId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "deleteWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.deleteWorkflow")
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

  public async executeWorkflowFromTemplate(
    parentId: string,
    body: WorkflowHeadlessExecutionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'executeWorkflowFromTemplate'");
    if (!_config.unstableOperations["v2.executeWorkflowFromTemplate"]) {
      throw new Error(
        "Unstable operation 'executeWorkflowFromTemplate' is disabled"
      );
    }

    // verify required parameter 'parentId' is not null or undefined
    if (parentId === null || parentId === undefined) {
      throw new RequiredError("parentId", "executeWorkflowFromTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "executeWorkflowFromTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/workflow_headless/{parent_id}/instances".replace(
        "{parent_id}",
        encodeURIComponent(String(parentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.executeWorkflowFromTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "WorkflowHeadlessExecutionRequest", ""),
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

  public async executeWorkflowFromWebhook(
    workflowId: string,
    orgId: string,
    xHubSignature256: string,
    userAgent: string,
    body: { [key: string]: any },
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'executeWorkflowFromWebhook'");
    if (!_config.unstableOperations["v2.executeWorkflowFromWebhook"]) {
      throw new Error(
        "Unstable operation 'executeWorkflowFromWebhook' is disabled"
      );
    }

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "executeWorkflowFromWebhook");
    }

    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new RequiredError("orgId", "executeWorkflowFromWebhook");
    }

    // verify required parameter 'xHubSignature256' is not null or undefined
    if (xHubSignature256 === null || xHubSignature256 === undefined) {
      throw new RequiredError("xHubSignature256", "executeWorkflowFromWebhook");
    }

    // verify required parameter 'userAgent' is not null or undefined
    if (userAgent === null || userAgent === undefined) {
      throw new RequiredError("userAgent", "executeWorkflowFromWebhook");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "executeWorkflowFromWebhook");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}/webhook".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.executeWorkflowFromWebhook")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (orgId !== undefined) {
      requestContext.setQueryParam(
        "orgId",
        ObjectSerializer.serialize(orgId, "string", "uuid"),
        ""
      );
    }

    // Header Params
    if (xHubSignature256 !== undefined) {
      requestContext.setHeaderParam(
        "X-Hub-Signature-256",
        ObjectSerializer.serialize(xHubSignature256, "string", "")
      );
    }
    if (userAgent !== undefined) {
      requestContext.setHeaderParam(
        "User-Agent",
        ObjectSerializer.serialize(userAgent, "string", "")
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "{ [key: string]: any; }", ""),
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

  public async getWorkflow(
    workflowId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "getWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.getWorkflow")
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

  public async getWorkflowInstance(
    workflowId: string,
    instanceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "getWorkflowInstance");
    }

    // verify required parameter 'instanceId' is not null or undefined
    if (instanceId === null || instanceId === undefined) {
      throw new RequiredError("instanceId", "getWorkflowInstance");
    }

    // Path Params
    const localVarPath =
      "/api/v2/workflows/{workflow_id}/instances/{instance_id}"
        .replace("{workflow_id}", encodeURIComponent(String(workflowId)))
        .replace("{instance_id}", encodeURIComponent(String(instanceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.getWorkflowInstance")
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

  public async listWorkflowInstances(
    workflowId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "listWorkflowInstances");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}/instances".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.listWorkflowInstances")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
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

  public async updateWorkflow(
    workflowId: string,
    body: UpdateWorkflowRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "updateWorkflow");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.updateWorkflow")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateWorkflowRequest", ""),
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

  public async updateWorkflowFavorite(
    workflowId: string,
    body: WorkflowFavoriteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateWorkflowFavorite'");
    if (!_config.unstableOperations["v2.updateWorkflowFavorite"]) {
      throw new Error(
        "Unstable operation 'updateWorkflowFavorite' is disabled"
      );
    }

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "updateWorkflowFavorite");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateWorkflowFavorite");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}/favorite".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WorkflowAutomationApi.updateWorkflowFavorite")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "WorkflowFavoriteRequest", ""),
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

export class WorkflowAutomationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelWorkflowInstance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelWorkflowInstance(
    response: ResponseContext
  ): Promise<WorklflowCancelInstanceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WorklflowCancelInstanceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WorklflowCancelInstanceResponse"
        ) as WorklflowCancelInstanceResponse;
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
      const body: WorklflowCancelInstanceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WorklflowCancelInstanceResponse",
          ""
        ) as WorklflowCancelInstanceResponse;
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
   * @params response Response returned by the server for a request to createWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWorkflow(
    response: ResponseContext
  ): Promise<CreateWorkflowResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: CreateWorkflowResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateWorkflowResponse"
      ) as CreateWorkflowResponse;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CreateWorkflowResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateWorkflowResponse",
        ""
      ) as CreateWorkflowResponse;
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
   * @params response Response returned by the server for a request to createWorkflowInstance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWorkflowInstance(
    response: ResponseContext
  ): Promise<WorkflowInstanceCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WorkflowInstanceCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WorkflowInstanceCreateResponse"
      ) as WorkflowInstanceCreateResponse;
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
      const body: WorkflowInstanceCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WorkflowInstanceCreateResponse",
        ""
      ) as WorkflowInstanceCreateResponse;
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
   * @params response Response returned by the server for a request to deleteWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWorkflow(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to executeWorkflowFromTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async executeWorkflowFromTemplate(
    response: ResponseContext
  ): Promise<WorkflowHeadlessExecutionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WorkflowHeadlessExecutionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WorkflowHeadlessExecutionResponse"
        ) as WorkflowHeadlessExecutionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
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
      const body: WorkflowHeadlessExecutionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WorkflowHeadlessExecutionResponse",
          ""
        ) as WorkflowHeadlessExecutionResponse;
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
   * @params response Response returned by the server for a request to executeWorkflowFromWebhook
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async executeWorkflowFromWebhook(
    response: ResponseContext
  ): Promise<WorkflowWebhookExecutionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WorkflowWebhookExecutionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WorkflowWebhookExecutionResponse"
        ) as WorkflowWebhookExecutionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
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
      const body: WorkflowWebhookExecutionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WorkflowWebhookExecutionResponse",
          ""
        ) as WorkflowWebhookExecutionResponse;
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
   * @params response Response returned by the server for a request to getWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWorkflow(
    response: ResponseContext
  ): Promise<GetWorkflowResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetWorkflowResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetWorkflowResponse"
      ) as GetWorkflowResponse;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetWorkflowResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetWorkflowResponse",
        ""
      ) as GetWorkflowResponse;
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
   * @params response Response returned by the server for a request to getWorkflowInstance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWorkflowInstance(
    response: ResponseContext
  ): Promise<WorklflowGetInstanceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WorklflowGetInstanceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WorklflowGetInstanceResponse"
      ) as WorklflowGetInstanceResponse;
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
      const body: WorklflowGetInstanceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WorklflowGetInstanceResponse",
        ""
      ) as WorklflowGetInstanceResponse;
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
   * @params response Response returned by the server for a request to listWorkflowInstances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listWorkflowInstances(
    response: ResponseContext
  ): Promise<WorkflowListInstancesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WorkflowListInstancesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WorkflowListInstancesResponse"
      ) as WorkflowListInstancesResponse;
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
      const body: WorkflowListInstancesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WorkflowListInstancesResponse",
        ""
      ) as WorkflowListInstancesResponse;
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
   * @params response Response returned by the server for a request to updateWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWorkflow(
    response: ResponseContext
  ): Promise<UpdateWorkflowResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateWorkflowResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateWorkflowResponse"
      ) as UpdateWorkflowResponse;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UpdateWorkflowResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateWorkflowResponse",
        ""
      ) as UpdateWorkflowResponse;
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
   * @params response Response returned by the server for a request to updateWorkflowFavorite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWorkflowFavorite(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface WorkflowAutomationApiCancelWorkflowInstanceRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * The ID of the workflow instance.
   * @type string
   */
  instanceId: string;
}

export interface WorkflowAutomationApiCreateWorkflowRequest {
  /**
   * @type CreateWorkflowRequest
   */
  body: CreateWorkflowRequest;
}

export interface WorkflowAutomationApiCreateWorkflowInstanceRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * @type WorkflowInstanceCreateRequest
   */
  body: WorkflowInstanceCreateRequest;
}

export interface WorkflowAutomationApiDeleteWorkflowRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
}

export interface WorkflowAutomationApiExecuteWorkflowFromTemplateRequest {
  /**
   * The ID of the parent workflow
   * @type string
   */
  parentId: string;
  /**
   * @type WorkflowHeadlessExecutionRequest
   */
  body: WorkflowHeadlessExecutionRequest;
}

export interface WorkflowAutomationApiExecuteWorkflowFromWebhookRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * The organization ID
   * @type string
   */
  orgId: string;
  /**
   * GitHub webhook signature for payload validation
   * @type string
   */
  xHubSignature256: string;
  /**
   * Must start with "GitHub-Hookshot/"
   * @type string
   */
  userAgent: string;
  /**
   * @type { [key: string]: any; }
   */
  body: { [key: string]: any };
}

export interface WorkflowAutomationApiGetWorkflowRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
}

export interface WorkflowAutomationApiGetWorkflowInstanceRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * The ID of the workflow instance.
   * @type string
   */
  instanceId: string;
}

export interface WorkflowAutomationApiListWorkflowInstancesRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface WorkflowAutomationApiUpdateWorkflowRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * @type UpdateWorkflowRequest
   */
  body: UpdateWorkflowRequest;
}

export interface WorkflowAutomationApiUpdateWorkflowFavoriteRequest {
  /**
   * The ID of the workflow.
   * @type string
   */
  workflowId: string;
  /**
   * @type WorkflowFavoriteRequest
   */
  body: WorkflowFavoriteRequest;
}

export class WorkflowAutomationApi {
  private requestFactory: WorkflowAutomationApiRequestFactory;
  private responseProcessor: WorkflowAutomationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WorkflowAutomationApiRequestFactory,
    responseProcessor?: WorkflowAutomationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WorkflowAutomationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WorkflowAutomationApiResponseProcessor();
  }

  /**
   * Cancels a specific execution of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public cancelWorkflowInstance(
    param: WorkflowAutomationApiCancelWorkflowInstanceRequest,
    options?: Configuration
  ): Promise<WorklflowCancelInstanceResponse> {
    const requestContextPromise = this.requestFactory.cancelWorkflowInstance(
      param.workflowId,
      param.instanceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelWorkflowInstance(responseContext);
        });
    });
  }

  /**
   * Create a new workflow, returning the workflow ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public createWorkflow(
    param: WorkflowAutomationApiCreateWorkflowRequest,
    options?: Configuration
  ): Promise<CreateWorkflowResponse> {
    const requestContextPromise = this.requestFactory.createWorkflow(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWorkflow(responseContext);
        });
    });
  }

  /**
   * Execute the given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public createWorkflowInstance(
    param: WorkflowAutomationApiCreateWorkflowInstanceRequest,
    options?: Configuration
  ): Promise<WorkflowInstanceCreateResponse> {
    const requestContextPromise = this.requestFactory.createWorkflowInstance(
      param.workflowId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWorkflowInstance(responseContext);
        });
    });
  }

  /**
   * Delete a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public deleteWorkflow(
    param: WorkflowAutomationApiDeleteWorkflowRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWorkflow(
      param.workflowId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWorkflow(responseContext);
        });
    });
  }

  /**
   * Execute a headless workflow instance from a template. This endpoint creates and executes
   * a workflow instance based on a template configuration.
   *
   * **Note**: This endpoint is in public beta and is subject to change.
   * If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).
   * @param param The request object
   */
  public executeWorkflowFromTemplate(
    param: WorkflowAutomationApiExecuteWorkflowFromTemplateRequest,
    options?: Configuration
  ): Promise<WorkflowHeadlessExecutionResponse> {
    const requestContextPromise =
      this.requestFactory.executeWorkflowFromTemplate(
        param.parentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.executeWorkflowFromTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Execute a workflow triggered by a GitHub webhook. This endpoint validates the GitHub webhook signature
   * and the GitHub user agent before executing the workflow.
   *
   * This endpoint requires:
   * - Valid GitHub webhook signature in the X-Hub-Signature-256 header
   * - GitHub user agent in the User-Agent header
   * - Valid organization ID in the orgId query parameter
   * - Valid workflow ID in the path
   *
   * **Note**: This endpoint is in public beta and is subject to change.
   * If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).
   * @param param The request object
   */
  public executeWorkflowFromWebhook(
    param: WorkflowAutomationApiExecuteWorkflowFromWebhookRequest,
    options?: Configuration
  ): Promise<WorkflowWebhookExecutionResponse> {
    const requestContextPromise =
      this.requestFactory.executeWorkflowFromWebhook(
        param.workflowId,
        param.orgId,
        param.xHubSignature256,
        param.userAgent,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.executeWorkflowFromWebhook(
            responseContext
          );
        });
    });
  }

  /**
   * Get a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public getWorkflow(
    param: WorkflowAutomationApiGetWorkflowRequest,
    options?: Configuration
  ): Promise<GetWorkflowResponse> {
    const requestContextPromise = this.requestFactory.getWorkflow(
      param.workflowId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWorkflow(responseContext);
        });
    });
  }

  /**
   * Get a specific execution of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public getWorkflowInstance(
    param: WorkflowAutomationApiGetWorkflowInstanceRequest,
    options?: Configuration
  ): Promise<WorklflowGetInstanceResponse> {
    const requestContextPromise = this.requestFactory.getWorkflowInstance(
      param.workflowId,
      param.instanceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWorkflowInstance(responseContext);
        });
    });
  }

  /**
   * List all instances of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public listWorkflowInstances(
    param: WorkflowAutomationApiListWorkflowInstancesRequest,
    options?: Configuration
  ): Promise<WorkflowListInstancesResponse> {
    const requestContextPromise = this.requestFactory.listWorkflowInstances(
      param.workflowId,
      param.pageSize,
      param.pageNumber,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listWorkflowInstances(responseContext);
        });
    });
  }

  /**
   * Update a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public updateWorkflow(
    param: WorkflowAutomationApiUpdateWorkflowRequest,
    options?: Configuration
  ): Promise<UpdateWorkflowResponse> {
    const requestContextPromise = this.requestFactory.updateWorkflow(
      param.workflowId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWorkflow(responseContext);
        });
    });
  }

  /**
   * Mark a workflow as favorite or unfavorite for the authenticated user.
   *
   * **Note**: This endpoint is in public beta and is subject to change.
   * If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).
   * @param param The request object
   */
  public updateWorkflowFavorite(
    param: WorkflowAutomationApiUpdateWorkflowFavoriteRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateWorkflowFavorite(
      param.workflowId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWorkflowFavorite(responseContext);
        });
    });
  }
}
