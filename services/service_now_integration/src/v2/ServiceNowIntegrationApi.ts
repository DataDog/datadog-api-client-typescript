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
import { ServiceNowAssignmentGroupsResponse } from "./models/ServiceNowAssignmentGroupsResponse";
import { ServiceNowBusinessServicesResponse } from "./models/ServiceNowBusinessServicesResponse";
import { ServiceNowInstancesResponse } from "./models/ServiceNowInstancesResponse";
import { ServiceNowTemplateCreateRequest } from "./models/ServiceNowTemplateCreateRequest";
import { ServiceNowTemplateResponse } from "./models/ServiceNowTemplateResponse";
import { ServiceNowTemplatesResponse } from "./models/ServiceNowTemplatesResponse";
import { ServiceNowTemplateUpdateRequest } from "./models/ServiceNowTemplateUpdateRequest";
import { ServiceNowUsersResponse } from "./models/ServiceNowUsersResponse";
import { version } from "../version";

export class ServiceNowIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("service-now-integration", version);
    }
  }
  public async createServiceNowTemplate(
    body: ServiceNowTemplateCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.createServiceNowTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createServiceNowTemplate' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.createServiceNowTemplate'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createServiceNowTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/servicenow/handles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.createServiceNowTemplate",
      ServiceNowIntegrationApi.operationServers,
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
      serialize(body, TypingInfo, "ServiceNowTemplateCreateRequest", ""),
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

  public async deleteServiceNowTemplate(
    templateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.deleteServiceNowTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteServiceNowTemplate' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.deleteServiceNowTemplate'] = true`",
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "deleteServiceNowTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/servicenow/handles/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.deleteServiceNowTemplate",
      ServiceNowIntegrationApi.operationServers,
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

  public async getServiceNowTemplate(
    templateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.getServiceNowTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getServiceNowTemplate' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.getServiceNowTemplate'] = true`",
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "getServiceNowTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/servicenow/handles/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.getServiceNowTemplate",
      ServiceNowIntegrationApi.operationServers,
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

  public async listServiceNowAssignmentGroups(
    instanceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.listServiceNowAssignmentGroups"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listServiceNowAssignmentGroups' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.listServiceNowAssignmentGroups'] = true`",
      );
    }

    // verify required parameter 'instanceId' is not null or undefined
    if (instanceId === null || instanceId === undefined) {
      throw new RequiredError("instanceId", "listServiceNowAssignmentGroups");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/servicenow/assignment_groups/{instance_id}".replace(
        "{instance_id}",
        encodeURIComponent(String(instanceId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.listServiceNowAssignmentGroups",
      ServiceNowIntegrationApi.operationServers,
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

  public async listServiceNowBusinessServices(
    instanceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.listServiceNowBusinessServices"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listServiceNowBusinessServices' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.listServiceNowBusinessServices'] = true`",
      );
    }

    // verify required parameter 'instanceId' is not null or undefined
    if (instanceId === null || instanceId === undefined) {
      throw new RequiredError("instanceId", "listServiceNowBusinessServices");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/servicenow/business_services/{instance_id}".replace(
        "{instance_id}",
        encodeURIComponent(String(instanceId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.listServiceNowBusinessServices",
      ServiceNowIntegrationApi.operationServers,
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

  public async listServiceNowInstances(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.listServiceNowInstances"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listServiceNowInstances' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.listServiceNowInstances'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration/servicenow/instances";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.listServiceNowInstances",
      ServiceNowIntegrationApi.operationServers,
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

  public async listServiceNowTemplates(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.listServiceNowTemplates"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listServiceNowTemplates' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.listServiceNowTemplates'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration/servicenow/handles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.listServiceNowTemplates",
      ServiceNowIntegrationApi.operationServers,
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

  public async listServiceNowUsers(
    instanceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.listServiceNowUsers"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listServiceNowUsers' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.listServiceNowUsers'] = true`",
      );
    }

    // verify required parameter 'instanceId' is not null or undefined
    if (instanceId === null || instanceId === undefined) {
      throw new RequiredError("instanceId", "listServiceNowUsers");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/servicenow/users/{instance_id}".replace(
        "{instance_id}",
        encodeURIComponent(String(instanceId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.listServiceNowUsers",
      ServiceNowIntegrationApi.operationServers,
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

  public async updateServiceNowTemplate(
    templateId: string,
    body: ServiceNowTemplateUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceNowIntegrationApi.v2.updateServiceNowTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateServiceNowTemplate' is disabled. Enable it by setting `configuration.unstableOperations['ServiceNowIntegrationApi.v2.updateServiceNowTemplate'] = true`",
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "updateServiceNowTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateServiceNowTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/servicenow/handles/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceNowIntegrationApi.v2.updateServiceNowTemplate",
      ServiceNowIntegrationApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ServiceNowTemplateUpdateRequest", ""),
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

export class ServiceNowIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createServiceNowTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createServiceNowTemplate(
    response: ResponseContext,
  ): Promise<ServiceNowTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ServiceNowTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplateResponse",
      ) as ServiceNowTemplateResponse;
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
      const body: ServiceNowTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplateResponse",
        "",
      ) as ServiceNowTemplateResponse;
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
   * @params response Response returned by the server for a request to deleteServiceNowTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteServiceNowTemplate(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
   * @params response Response returned by the server for a request to getServiceNowTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceNowTemplate(
    response: ResponseContext,
  ): Promise<ServiceNowTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplateResponse",
      ) as ServiceNowTemplateResponse;
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
      const body: ServiceNowTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplateResponse",
        "",
      ) as ServiceNowTemplateResponse;
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
   * @params response Response returned by the server for a request to listServiceNowAssignmentGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceNowAssignmentGroups(
    response: ResponseContext,
  ): Promise<ServiceNowAssignmentGroupsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowAssignmentGroupsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowAssignmentGroupsResponse",
      ) as ServiceNowAssignmentGroupsResponse;
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
      const body: ServiceNowAssignmentGroupsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowAssignmentGroupsResponse",
        "",
      ) as ServiceNowAssignmentGroupsResponse;
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
   * @params response Response returned by the server for a request to listServiceNowBusinessServices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceNowBusinessServices(
    response: ResponseContext,
  ): Promise<ServiceNowBusinessServicesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowBusinessServicesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowBusinessServicesResponse",
      ) as ServiceNowBusinessServicesResponse;
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
      const body: ServiceNowBusinessServicesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowBusinessServicesResponse",
        "",
      ) as ServiceNowBusinessServicesResponse;
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
   * @params response Response returned by the server for a request to listServiceNowInstances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceNowInstances(
    response: ResponseContext,
  ): Promise<ServiceNowInstancesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowInstancesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowInstancesResponse",
      ) as ServiceNowInstancesResponse;
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
      const body: ServiceNowInstancesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowInstancesResponse",
        "",
      ) as ServiceNowInstancesResponse;
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
   * @params response Response returned by the server for a request to listServiceNowTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceNowTemplates(
    response: ResponseContext,
  ): Promise<ServiceNowTemplatesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplatesResponse",
      ) as ServiceNowTemplatesResponse;
      return body;
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
      const body: ServiceNowTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplatesResponse",
        "",
      ) as ServiceNowTemplatesResponse;
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
   * @params response Response returned by the server for a request to listServiceNowUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceNowUsers(
    response: ResponseContext,
  ): Promise<ServiceNowUsersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowUsersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowUsersResponse",
      ) as ServiceNowUsersResponse;
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
      const body: ServiceNowUsersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowUsersResponse",
        "",
      ) as ServiceNowUsersResponse;
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
   * @params response Response returned by the server for a request to updateServiceNowTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateServiceNowTemplate(
    response: ResponseContext,
  ): Promise<ServiceNowTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceNowTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplateResponse",
      ) as ServiceNowTemplateResponse;
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
      const body: ServiceNowTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceNowTemplateResponse",
        "",
      ) as ServiceNowTemplateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ServiceNowIntegrationApiCreateServiceNowTemplateRequest {
  /**
   * @type ServiceNowTemplateCreateRequest
   */
  body: ServiceNowTemplateCreateRequest;
}

export interface ServiceNowIntegrationApiDeleteServiceNowTemplateRequest {
  /**
   * The ID of the ServiceNow template to delete
   * @type string
   */
  templateId: string;
}

export interface ServiceNowIntegrationApiGetServiceNowTemplateRequest {
  /**
   * The ID of the ServiceNow template to retrieve
   * @type string
   */
  templateId: string;
}

export interface ServiceNowIntegrationApiListServiceNowAssignmentGroupsRequest {
  /**
   * The ID of the ServiceNow instance
   * @type string
   */
  instanceId: string;
}

export interface ServiceNowIntegrationApiListServiceNowBusinessServicesRequest {
  /**
   * The ID of the ServiceNow instance
   * @type string
   */
  instanceId: string;
}

export interface ServiceNowIntegrationApiListServiceNowUsersRequest {
  /**
   * The ID of the ServiceNow instance
   * @type string
   */
  instanceId: string;
}

export interface ServiceNowIntegrationApiUpdateServiceNowTemplateRequest {
  /**
   * The ID of the ServiceNow template to update
   * @type string
   */
  templateId: string;
  /**
   * @type ServiceNowTemplateUpdateRequest
   */
  body: ServiceNowTemplateUpdateRequest;
}

export class ServiceNowIntegrationApi {
  private requestFactory: ServiceNowIntegrationApiRequestFactory;
  private responseProcessor: ServiceNowIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ServiceNowIntegrationApiRequestFactory,
    responseProcessor?: ServiceNowIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ServiceNowIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ServiceNowIntegrationApiResponseProcessor();
  }

  /**
   * Create a new ServiceNow template.
   * @param param The request object
   */
  public createServiceNowTemplate(
    param: ServiceNowIntegrationApiCreateServiceNowTemplateRequest,
    options?: Configuration,
  ): Promise<ServiceNowTemplateResponse> {
    const requestContextPromise = this.requestFactory.createServiceNowTemplate(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createServiceNowTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a ServiceNow template by ID.
   * @param param The request object
   */
  public deleteServiceNowTemplate(
    param: ServiceNowIntegrationApiDeleteServiceNowTemplateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteServiceNowTemplate(
      param.templateId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteServiceNowTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a ServiceNow template by ID.
   * @param param The request object
   */
  public getServiceNowTemplate(
    param: ServiceNowIntegrationApiGetServiceNowTemplateRequest,
    options?: Configuration,
  ): Promise<ServiceNowTemplateResponse> {
    const requestContextPromise = this.requestFactory.getServiceNowTemplate(
      param.templateId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getServiceNowTemplate(responseContext);
        });
    });
  }

  /**
   * Get all assignment groups for a ServiceNow instance.
   * @param param The request object
   */
  public listServiceNowAssignmentGroups(
    param: ServiceNowIntegrationApiListServiceNowAssignmentGroupsRequest,
    options?: Configuration,
  ): Promise<ServiceNowAssignmentGroupsResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceNowAssignmentGroups(
        param.instanceId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceNowAssignmentGroups(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all business services for a ServiceNow instance.
   * @param param The request object
   */
  public listServiceNowBusinessServices(
    param: ServiceNowIntegrationApiListServiceNowBusinessServicesRequest,
    options?: Configuration,
  ): Promise<ServiceNowBusinessServicesResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceNowBusinessServices(
        param.instanceId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceNowBusinessServices(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all ServiceNow instances for the organization.
   * @param param The request object
   */
  public listServiceNowInstances(
    options?: Configuration,
  ): Promise<ServiceNowInstancesResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceNowInstances(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceNowInstances(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all ServiceNow templates for the organization.
   * @param param The request object
   */
  public listServiceNowTemplates(
    options?: Configuration,
  ): Promise<ServiceNowTemplatesResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceNowTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceNowTemplates(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all users for a ServiceNow instance.
   * @param param The request object
   */
  public listServiceNowUsers(
    param: ServiceNowIntegrationApiListServiceNowUsersRequest,
    options?: Configuration,
  ): Promise<ServiceNowUsersResponse> {
    const requestContextPromise = this.requestFactory.listServiceNowUsers(
      param.instanceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceNowUsers(responseContext);
        });
    });
  }

  /**
   * Update a ServiceNow template by ID.
   * @param param The request object
   */
  public updateServiceNowTemplate(
    param: ServiceNowIntegrationApiUpdateServiceNowTemplateRequest,
    options?: Configuration,
  ): Promise<ServiceNowTemplateResponse> {
    const requestContextPromise = this.requestFactory.updateServiceNowTemplate(
      param.templateId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateServiceNowTemplate(
            responseContext,
          );
        });
    });
  }
}
