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
import { CreateWorkflowRequest } from "./models/CreateWorkflowRequest";
import { CreateWorkflowResponse } from "./models/CreateWorkflowResponse";
import { GetWorkflowResponse } from "./models/GetWorkflowResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { UpdateWorkflowRequest } from "./models/UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "./models/UpdateWorkflowResponse";
import { WorkflowInstanceCreateRequest } from "./models/WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "./models/WorkflowInstanceCreateResponse";
import { WorkflowListInstancesResponse } from "./models/WorkflowListInstancesResponse";
import { WorklflowCancelInstanceResponse } from "./models/WorklflowCancelInstanceResponse";
import { WorklflowGetInstanceResponse } from "./models/WorklflowGetInstanceResponse";
import { version } from "../version";

export class WorkflowAutomationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("workflow-automation", version);
    }
  }
  public async cancelWorkflowInstance(
    workflowId: string,
    instanceId: string,
    _options?: Configuration,
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
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.cancelWorkflowInstance",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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

  public async createWorkflow(
    body: CreateWorkflowRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.createWorkflow",
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
      serialize(body, TypingInfo, "CreateWorkflowRequest", ""),
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

  public async createWorkflowInstance(
    workflowId: string,
    body: WorkflowInstanceCreateRequest,
    _options?: Configuration,
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
      encodeURIComponent(String(workflowId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.createWorkflowInstance",
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
      serialize(body, TypingInfo, "WorkflowInstanceCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteWorkflow(
    workflowId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "deleteWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.deleteWorkflow",
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

  public async getWorkflow(
    workflowId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "getWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.getWorkflow",
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

  public async getWorkflowInstance(
    workflowId: string,
    instanceId: string,
    _options?: Configuration,
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
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.getWorkflowInstance",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listWorkflowInstances(
    workflowId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "listWorkflowInstances");
    }

    // Path Params
    const localVarPath = "/api/v2/workflows/{workflow_id}/instances".replace(
      "{workflow_id}",
      encodeURIComponent(String(workflowId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.listWorkflowInstances",
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
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateWorkflow(
    workflowId: string,
    body: UpdateWorkflowRequest,
    _options?: Configuration,
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
      encodeURIComponent(String(workflowId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WorkflowAutomationApi.v2.updateWorkflow",
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
      serialize(body, TypingInfo, "UpdateWorkflowRequest", ""),
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

export class WorkflowAutomationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelWorkflowInstance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelWorkflowInstance(
    response: ResponseContext,
  ): Promise<WorklflowCancelInstanceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WorklflowCancelInstanceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorklflowCancelInstanceResponse",
      ) as WorklflowCancelInstanceResponse;
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
      const body: WorklflowCancelInstanceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorklflowCancelInstanceResponse",
        "",
      ) as WorklflowCancelInstanceResponse;
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
   * @params response Response returned by the server for a request to createWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWorkflow(
    response: ResponseContext,
  ): Promise<CreateWorkflowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CreateWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateWorkflowResponse",
      ) as CreateWorkflowResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CreateWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateWorkflowResponse",
        "",
      ) as CreateWorkflowResponse;
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
   * @params response Response returned by the server for a request to createWorkflowInstance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWorkflowInstance(
    response: ResponseContext,
  ): Promise<WorkflowInstanceCreateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WorkflowInstanceCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorkflowInstanceCreateResponse",
      ) as WorkflowInstanceCreateResponse;
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
      const body: WorkflowInstanceCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorkflowInstanceCreateResponse",
        "",
      ) as WorkflowInstanceCreateResponse;
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
   * @params response Response returned by the server for a request to deleteWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWorkflow(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
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
   * @params response Response returned by the server for a request to getWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWorkflow(
    response: ResponseContext,
  ): Promise<GetWorkflowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetWorkflowResponse",
      ) as GetWorkflowResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetWorkflowResponse",
        "",
      ) as GetWorkflowResponse;
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
   * @params response Response returned by the server for a request to getWorkflowInstance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWorkflowInstance(
    response: ResponseContext,
  ): Promise<WorklflowGetInstanceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WorklflowGetInstanceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorklflowGetInstanceResponse",
      ) as WorklflowGetInstanceResponse;
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
      const body: WorklflowGetInstanceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorklflowGetInstanceResponse",
        "",
      ) as WorklflowGetInstanceResponse;
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
   * @params response Response returned by the server for a request to listWorkflowInstances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listWorkflowInstances(
    response: ResponseContext,
  ): Promise<WorkflowListInstancesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WorkflowListInstancesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorkflowListInstancesResponse",
      ) as WorkflowListInstancesResponse;
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
      const body: WorkflowListInstancesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorkflowListInstancesResponse",
        "",
      ) as WorkflowListInstancesResponse;
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
   * @params response Response returned by the server for a request to updateWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWorkflow(
    response: ResponseContext,
  ): Promise<UpdateWorkflowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateWorkflowResponse",
      ) as UpdateWorkflowResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UpdateWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateWorkflowResponse",
        "",
      ) as UpdateWorkflowResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

export class WorkflowAutomationApi {
  private requestFactory: WorkflowAutomationApiRequestFactory;
  private responseProcessor: WorkflowAutomationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: WorkflowAutomationApiRequestFactory,
    responseProcessor?: WorkflowAutomationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new WorkflowAutomationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new WorkflowAutomationApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(WorkflowAutomationApi.operationServers).length > 0) {
      this.configuration.addOperationServers(
        WorkflowAutomationApi.operationServers,
      );
    }
  }

  /**
   * Cancels a specific execution of a given workflow. This API requires an application key scoped with the workflows_run permission.
   * @param param The request object
   */
  public cancelWorkflowInstance(
    param: WorkflowAutomationApiCancelWorkflowInstanceRequest,
    options?: Configuration,
  ): Promise<WorklflowCancelInstanceResponse> {
    const requestContextPromise = this.requestFactory.cancelWorkflowInstance(
      param.workflowId,
      param.instanceId,
      options,
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
   * Create a new workflow, returning the workflow ID. This API requires an application key scoped with the `workflows_write` permission.
   * @param param The request object
   */
  public createWorkflow(
    param: WorkflowAutomationApiCreateWorkflowRequest,
    options?: Configuration,
  ): Promise<CreateWorkflowResponse> {
    const requestContextPromise = this.requestFactory.createWorkflow(
      param.body,
      options,
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
   * Execute the given workflow. This API requires an application key scoped with the workflows_run permission.
   * @param param The request object
   */
  public createWorkflowInstance(
    param: WorkflowAutomationApiCreateWorkflowInstanceRequest,
    options?: Configuration,
  ): Promise<WorkflowInstanceCreateResponse> {
    const requestContextPromise = this.requestFactory.createWorkflowInstance(
      param.workflowId,
      param.body,
      options,
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
   * Delete a workflow by ID. This API requires an application key scoped with the `workflows_write` permission.
   * @param param The request object
   */
  public deleteWorkflow(
    param: WorkflowAutomationApiDeleteWorkflowRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWorkflow(
      param.workflowId,
      options,
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
   * Get a workflow by ID.  This API requires an application key scoped with the `workflows_read` permission.
   * @param param The request object
   */
  public getWorkflow(
    param: WorkflowAutomationApiGetWorkflowRequest,
    options?: Configuration,
  ): Promise<GetWorkflowResponse> {
    const requestContextPromise = this.requestFactory.getWorkflow(
      param.workflowId,
      options,
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
   * Get a specific execution of a given workflow. This API requires an application key scoped with the workflows_read permission.
   * @param param The request object
   */
  public getWorkflowInstance(
    param: WorkflowAutomationApiGetWorkflowInstanceRequest,
    options?: Configuration,
  ): Promise<WorklflowGetInstanceResponse> {
    const requestContextPromise = this.requestFactory.getWorkflowInstance(
      param.workflowId,
      param.instanceId,
      options,
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
   * List all instances of a given workflow. This API requires an application key scoped with the workflows_read permission.
   * @param param The request object
   */
  public listWorkflowInstances(
    param: WorkflowAutomationApiListWorkflowInstancesRequest,
    options?: Configuration,
  ): Promise<WorkflowListInstancesResponse> {
    const requestContextPromise = this.requestFactory.listWorkflowInstances(
      param.workflowId,
      param.pageSize,
      param.pageNumber,
      options,
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
   * Update a workflow by ID. This API requires an application key scoped with the `workflows_write` permission.
   * @param param The request object
   */
  public updateWorkflow(
    param: WorkflowAutomationApiUpdateWorkflowRequest,
    options?: Configuration,
  ): Promise<UpdateWorkflowResponse> {
    const requestContextPromise = this.requestFactory.updateWorkflow(
      param.workflowId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWorkflow(responseContext);
        });
    });
  }
}
