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
import { AIWorkflowResponse } from "./models/AIWorkflowResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CancelWorkflowExecutionsResponse } from "./models/CancelWorkflowExecutionsResponse";
import { CreateAIWorkflowRequest } from "./models/CreateAIWorkflowRequest";
import { CreateWorkflowExecutionsResponse } from "./models/CreateWorkflowExecutionsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListAIWorkflowsResponse } from "./models/ListAIWorkflowsResponse";
import { ListExecutionStepsResponse } from "./models/ListExecutionStepsResponse";
import { ListPROutputsResponse } from "./models/ListPROutputsResponse";
import { ListWorkflowInstancesResponse } from "./models/ListWorkflowInstancesResponse";
import { UpdateAIWorkflowRequest } from "./models/UpdateAIWorkflowRequest";
import { WorkflowExecutionResponse } from "./models/WorkflowExecutionResponse";
import { version } from "../version";

export class DependencyManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dependency-management", version);
    }
  }
  public async cancelWorkflowExecution(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.cancelWorkflowExecution"
      ]
    ) {
      throw new Error(
        "Unstable operation 'cancelWorkflowExecution' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.cancelWorkflowExecution'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "cancelWorkflowExecution");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/workflow-executions/{id}/cancel".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.cancelWorkflowExecution",
      DependencyManagementApi.operationServers,
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

  public async cancelWorkflowExecutions(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.cancelWorkflowExecutions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'cancelWorkflowExecutions' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.cancelWorkflowExecutions'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "cancelWorkflowExecutions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}/cancel".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.cancelWorkflowExecutions",
      DependencyManagementApi.operationServers,
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

  public async createAIWorkflow(
    body: CreateAIWorkflowRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DependencyManagementApi.v2.createAIWorkflow"]
    ) {
      throw new Error(
        "Unstable operation 'createAIWorkflow' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.createAIWorkflow'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAIWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/dependency-management/ai-workflow";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.createAIWorkflow",
      DependencyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CreateAIWorkflowRequest", ""),
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

  public async createWorkflowExecution(
    id: string,
    maxInstances?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.createWorkflowExecution"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createWorkflowExecution' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.createWorkflowExecution'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "createWorkflowExecution");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}/executions".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.createWorkflowExecution",
      DependencyManagementApi.operationServers,
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

    // Query Params
    if (maxInstances !== undefined) {
      requestContext.setQueryParam(
        "max_instances",
        serialize(maxInstances, TypingInfo, "number", ""),
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

  public async deleteAIWorkflow(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DependencyManagementApi.v2.deleteAIWorkflow"]
    ) {
      throw new Error(
        "Unstable operation 'deleteAIWorkflow' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.deleteAIWorkflow'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAIWorkflow");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.deleteAIWorkflow",
      DependencyManagementApi.operationServers,
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

  public async deleteWorkflowExecutions(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.deleteWorkflowExecutions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteWorkflowExecutions' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.deleteWorkflowExecutions'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteWorkflowExecutions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}/executions".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.deleteWorkflowExecutions",
      DependencyManagementApi.operationServers,
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

  public async getAIWorkflow(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DependencyManagementApi.v2.getAIWorkflow"]
    ) {
      throw new Error(
        "Unstable operation 'getAIWorkflow' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.getAIWorkflow'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAIWorkflow");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.getAIWorkflow",
      DependencyManagementApi.operationServers,
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

  public async listAIWorkflowInstances(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.listAIWorkflowInstances"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listAIWorkflowInstances' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.listAIWorkflowInstances'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "listAIWorkflowInstances");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}/instances".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.listAIWorkflowInstances",
      DependencyManagementApi.operationServers,
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

  public async listAIWorkflows(
    idpCampaignId?: string,
    repository?: string,
    user?: string,
    completed?: boolean,
    createdAfter?: Date,
    createdBefore?: Date,
    limit?: number,
    offset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DependencyManagementApi.v2.listAIWorkflows"]
    ) {
      throw new Error(
        "Unstable operation 'listAIWorkflows' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.listAIWorkflows'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/dependency-management/ai-workflows";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.listAIWorkflows",
      DependencyManagementApi.operationServers,
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
    if (idpCampaignId !== undefined) {
      requestContext.setQueryParam(
        "idp_campaign_id",
        serialize(idpCampaignId, TypingInfo, "string", ""),
        "",
      );
    }
    if (repository !== undefined) {
      requestContext.setQueryParam(
        "repository",
        serialize(repository, TypingInfo, "string", ""),
        "",
      );
    }
    if (user !== undefined) {
      requestContext.setQueryParam(
        "user",
        serialize(user, TypingInfo, "string", ""),
        "",
      );
    }
    if (completed !== undefined) {
      requestContext.setQueryParam(
        "completed",
        serialize(completed, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (createdAfter !== undefined) {
      requestContext.setQueryParam(
        "created_after",
        serialize(createdAfter, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (createdBefore !== undefined) {
      requestContext.setQueryParam(
        "created_before",
        serialize(createdBefore, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", ""),
        "",
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        serialize(offset, TypingInfo, "number", ""),
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

  public async listExecutionSteps(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.listExecutionSteps"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listExecutionSteps' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.listExecutionSteps'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "listExecutionSteps");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/workflow-executions/{id}/steps".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.listExecutionSteps",
      DependencyManagementApi.operationServers,
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

  public async listPROutputs(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DependencyManagementApi.v2.listPROutputs"]
    ) {
      throw new Error(
        "Unstable operation 'listPROutputs' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.listPROutputs'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "listPROutputs");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/workflow-executions/{id}/pr-outputs".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.listPROutputs",
      DependencyManagementApi.operationServers,
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

  public async rerunWorkflowExecution(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DependencyManagementApi.v2.rerunWorkflowExecution"
      ]
    ) {
      throw new Error(
        "Unstable operation 'rerunWorkflowExecution' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.rerunWorkflowExecution'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "rerunWorkflowExecution");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/workflow-executions/{id}/rerun".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.rerunWorkflowExecution",
      DependencyManagementApi.operationServers,
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

  public async updateAIWorkflow(
    id: string,
    body: UpdateAIWorkflowRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DependencyManagementApi.v2.updateAIWorkflow"]
    ) {
      throw new Error(
        "Unstable operation 'updateAIWorkflow' is disabled. Enable it by setting `configuration.unstableOperations['DependencyManagementApi.v2.updateAIWorkflow'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateAIWorkflow");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAIWorkflow");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dependency-management/ai-workflows/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DependencyManagementApi.v2.updateAIWorkflow",
      DependencyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateAIWorkflowRequest", ""),
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

export class DependencyManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelWorkflowExecution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelWorkflowExecution(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 409) {
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
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to cancelWorkflowExecutions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelWorkflowExecutions(
    response: ResponseContext,
  ): Promise<CancelWorkflowExecutionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CancelWorkflowExecutionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CancelWorkflowExecutionsResponse",
      ) as CancelWorkflowExecutionsResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: CancelWorkflowExecutionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CancelWorkflowExecutionsResponse",
        "",
      ) as CancelWorkflowExecutionsResponse;
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
   * @params response Response returned by the server for a request to createAIWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAIWorkflow(
    response: ResponseContext,
  ): Promise<AIWorkflowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: AIWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIWorkflowResponse",
      ) as AIWorkflowResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
    if (response.httpStatusCode === 429) {
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
      const body: AIWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIWorkflowResponse",
        "",
      ) as AIWorkflowResponse;
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
   * @params response Response returned by the server for a request to createWorkflowExecution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWorkflowExecution(
    response: ResponseContext,
  ): Promise<CreateWorkflowExecutionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CreateWorkflowExecutionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateWorkflowExecutionsResponse",
      ) as CreateWorkflowExecutionsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: CreateWorkflowExecutionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateWorkflowExecutionsResponse",
        "",
      ) as CreateWorkflowExecutionsResponse;
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
   * @params response Response returned by the server for a request to deleteAIWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAIWorkflow(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to deleteWorkflowExecutions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWorkflowExecutions(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getAIWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAIWorkflow(
    response: ResponseContext,
  ): Promise<AIWorkflowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AIWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIWorkflowResponse",
      ) as AIWorkflowResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: AIWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIWorkflowResponse",
        "",
      ) as AIWorkflowResponse;
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
   * @params response Response returned by the server for a request to listAIWorkflowInstances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAIWorkflowInstances(
    response: ResponseContext,
  ): Promise<ListWorkflowInstancesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListWorkflowInstancesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListWorkflowInstancesResponse",
      ) as ListWorkflowInstancesResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: ListWorkflowInstancesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListWorkflowInstancesResponse",
        "",
      ) as ListWorkflowInstancesResponse;
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
   * @params response Response returned by the server for a request to listAIWorkflows
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAIWorkflows(
    response: ResponseContext,
  ): Promise<ListAIWorkflowsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAIWorkflowsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAIWorkflowsResponse",
      ) as ListAIWorkflowsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
    if (response.httpStatusCode === 429) {
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
      const body: ListAIWorkflowsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAIWorkflowsResponse",
        "",
      ) as ListAIWorkflowsResponse;
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
   * @params response Response returned by the server for a request to listExecutionSteps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExecutionSteps(
    response: ResponseContext,
  ): Promise<ListExecutionStepsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListExecutionStepsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListExecutionStepsResponse",
      ) as ListExecutionStepsResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: ListExecutionStepsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListExecutionStepsResponse",
        "",
      ) as ListExecutionStepsResponse;
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
   * @params response Response returned by the server for a request to listPROutputs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPROutputs(
    response: ResponseContext,
  ): Promise<ListPROutputsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListPROutputsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListPROutputsResponse",
      ) as ListPROutputsResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: ListPROutputsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListPROutputsResponse",
        "",
      ) as ListPROutputsResponse;
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
   * @params response Response returned by the server for a request to rerunWorkflowExecution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async rerunWorkflowExecution(
    response: ResponseContext,
  ): Promise<WorkflowExecutionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: WorkflowExecutionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorkflowExecutionResponse",
      ) as WorkflowExecutionResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 409) {
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
    if (response.httpStatusCode === 429) {
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
      const body: WorkflowExecutionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WorkflowExecutionResponse",
        "",
      ) as WorkflowExecutionResponse;
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
   * @params response Response returned by the server for a request to updateAIWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAIWorkflow(
    response: ResponseContext,
  ): Promise<AIWorkflowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AIWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIWorkflowResponse",
      ) as AIWorkflowResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (response.httpStatusCode === 429) {
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
      const body: AIWorkflowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIWorkflowResponse",
        "",
      ) as AIWorkflowResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DependencyManagementApiCancelWorkflowExecutionRequest {
  /**
   * The UUID of the workflow execution.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiCancelWorkflowExecutionsRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiCreateAIWorkflowRequest {
  /**
   * @type CreateAIWorkflowRequest
   */
  body: CreateAIWorkflowRequest;
}

export interface DependencyManagementApiCreateWorkflowExecutionRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
  /**
   * Maximum number of new workflow instances to start. Must be between 1 and 30.
   * @type number
   */
  maxInstances?: number;
}

export interface DependencyManagementApiDeleteAIWorkflowRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiDeleteWorkflowExecutionsRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiGetAIWorkflowRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiListAIWorkflowInstancesRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiListAIWorkflowsRequest {
  /**
   * Filter workflows by IDP campaign ID.
   * @type string
   */
  idpCampaignId?: string;
  /**
   * Filter workflows by repository name (owner/repo format).
   * @type string
   */
  repository?: string;
  /**
   * Filter workflows by the username of the creator.
   * @type string
   */
  user?: string;
  /**
   * Filter workflows by completion status. Use `true` to return only completed workflows, `false` for incomplete.
   * @type boolean
   */
  completed?: boolean;
  /**
   * Filter workflows created after this timestamp (RFC3339 format).
   * @type Date
   */
  createdAfter?: Date;
  /**
   * Filter workflows created before this timestamp (RFC3339 format).
   * @type Date
   */
  createdBefore?: Date;
  /**
   * Maximum number of workflows to return. Defaults to 50, maximum 100.
   * @type number
   */
  limit?: number;
  /**
   * Number of workflows to skip for pagination.
   * @type number
   */
  offset?: number;
}

export interface DependencyManagementApiListExecutionStepsRequest {
  /**
   * The UUID of the workflow execution.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiListPROutputsRequest {
  /**
   * The UUID of the workflow execution.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiRerunWorkflowExecutionRequest {
  /**
   * The UUID of the workflow execution.
   * @type string
   */
  id: string;
}

export interface DependencyManagementApiUpdateAIWorkflowRequest {
  /**
   * The UUID of the AI workflow.
   * @type string
   */
  id: string;
  /**
   * @type UpdateAIWorkflowRequest
   */
  body: UpdateAIWorkflowRequest;
}

export class DependencyManagementApi {
  private requestFactory: DependencyManagementApiRequestFactory;
  private responseProcessor: DependencyManagementApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DependencyManagementApiRequestFactory,
    responseProcessor?: DependencyManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DependencyManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DependencyManagementApiResponseProcessor();
  }

  /**
   * Cancel a specific workflow execution instance. Returns 409 if the instance is not currently in a running state.
   * @param param The request object
   */
  public cancelWorkflowExecution(
    param: DependencyManagementApiCancelWorkflowExecutionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelWorkflowExecution(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelWorkflowExecution(
            responseContext,
          );
        });
    });
  }

  /**
   * Cancel all running workflow execution instances for the given AI workflow.
   * @param param The request object
   */
  public cancelWorkflowExecutions(
    param: DependencyManagementApiCancelWorkflowExecutionsRequest,
    options?: Configuration,
  ): Promise<CancelWorkflowExecutionsResponse> {
    const requestContextPromise = this.requestFactory.cancelWorkflowExecutions(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelWorkflowExecutions(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new AI workflow for dependency management. This creates both the workflow definition and initializes its executions.
   * @param param The request object
   */
  public createAIWorkflow(
    param: DependencyManagementApiCreateAIWorkflowRequest,
    options?: Configuration,
  ): Promise<AIWorkflowResponse> {
    const requestContextPromise = this.requestFactory.createAIWorkflow(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAIWorkflow(responseContext);
        });
    });
  }

  /**
   * Create workflow executions for an AI workflow. One execution is created per entity group defined in the workflow.
   * @param param The request object
   */
  public createWorkflowExecution(
    param: DependencyManagementApiCreateWorkflowExecutionRequest,
    options?: Configuration,
  ): Promise<CreateWorkflowExecutionsResponse> {
    const requestContextPromise = this.requestFactory.createWorkflowExecution(
      param.id,
      param.maxInstances,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWorkflowExecution(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific AI workflow. This also removes the workflow from Datadog Workflow Automation.
   * @param param The request object
   */
  public deleteAIWorkflow(
    param: DependencyManagementApiDeleteAIWorkflowRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAIWorkflow(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAIWorkflow(responseContext);
        });
    });
  }

  /**
   * Delete all workflow executions for a given AI workflow. Running instances are canceled before deletion.
   * @param param The request object
   */
  public deleteWorkflowExecutions(
    param: DependencyManagementApiDeleteWorkflowExecutionsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWorkflowExecutions(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWorkflowExecutions(
            responseContext,
          );
        });
    });
  }

  /**
   * Get details of a specific AI workflow by its ID.
   * @param param The request object
   */
  public getAIWorkflow(
    param: DependencyManagementApiGetAIWorkflowRequest,
    options?: Configuration,
  ): Promise<AIWorkflowResponse> {
    const requestContextPromise = this.requestFactory.getAIWorkflow(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAIWorkflow(responseContext);
        });
    });
  }

  /**
   * List all workflow instances for a given AI workflow with their live status from Workflow Automation and entity information.
   * @param param The request object
   */
  public listAIWorkflowInstances(
    param: DependencyManagementApiListAIWorkflowInstancesRequest,
    options?: Configuration,
  ): Promise<ListWorkflowInstancesResponse> {
    const requestContextPromise = this.requestFactory.listAIWorkflowInstances(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAIWorkflowInstances(
            responseContext,
          );
        });
    });
  }

  /**
   * List AI workflows for the organization with optional filters.
   * @param param The request object
   */
  public listAIWorkflows(
    param: DependencyManagementApiListAIWorkflowsRequest = {},
    options?: Configuration,
  ): Promise<ListAIWorkflowsResponse> {
    const requestContextPromise = this.requestFactory.listAIWorkflows(
      param.idpCampaignId,
      param.repository,
      param.user,
      param.completed,
      param.createdAfter,
      param.createdBefore,
      param.limit,
      param.offset,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAIWorkflows(responseContext);
        });
    });
  }

  /**
   * Get the real-time step status for a specific workflow execution instance from Datadog Workflow Automation.
   * @param param The request object
   */
  public listExecutionSteps(
    param: DependencyManagementApiListExecutionStepsRequest,
    options?: Configuration,
  ): Promise<ListExecutionStepsResponse> {
    const requestContextPromise = this.requestFactory.listExecutionSteps(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExecutionSteps(responseContext);
        });
    });
  }

  /**
   * Get the pull request outputs for a specific workflow execution. Includes PR URL, status, and CI status enriched from GitHub.
   * @param param The request object
   */
  public listPROutputs(
    param: DependencyManagementApiListPROutputsRequest,
    options?: Configuration,
  ): Promise<ListPROutputsResponse> {
    const requestContextPromise = this.requestFactory.listPROutputs(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPROutputs(responseContext);
        });
    });
  }

  /**
   * Rerun a failed or canceled workflow execution. This replaces the existing execution with a new one using the same entities.
   * @param param The request object
   */
  public rerunWorkflowExecution(
    param: DependencyManagementApiRerunWorkflowExecutionRequest,
    options?: Configuration,
  ): Promise<WorkflowExecutionResponse> {
    const requestContextPromise = this.requestFactory.rerunWorkflowExecution(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.rerunWorkflowExecution(responseContext);
        });
    });
  }

  /**
   * Update the configuration of an existing AI workflow. Only the provided fields are updated.
   * @param param The request object
   */
  public updateAIWorkflow(
    param: DependencyManagementApiUpdateAIWorkflowRequest,
    options?: Configuration,
  ): Promise<AIWorkflowResponse> {
    const requestContextPromise = this.requestFactory.updateAIWorkflow(
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAIWorkflow(responseContext);
        });
    });
  }
}
