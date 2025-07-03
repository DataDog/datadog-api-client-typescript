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
import { MonitorConfigPolicyCreateRequest } from "../models/MonitorConfigPolicyCreateRequest";
import { MonitorConfigPolicyEditRequest } from "../models/MonitorConfigPolicyEditRequest";
import { MonitorConfigPolicyListResponse } from "../models/MonitorConfigPolicyListResponse";
import { MonitorConfigPolicyResponse } from "../models/MonitorConfigPolicyResponse";
import { MonitorNotificationRuleCreateRequest } from "../models/MonitorNotificationRuleCreateRequest";
import { MonitorNotificationRuleListResponse } from "../models/MonitorNotificationRuleListResponse";
import { MonitorNotificationRuleResponse } from "../models/MonitorNotificationRuleResponse";
import { MonitorNotificationRuleUpdateRequest } from "../models/MonitorNotificationRuleUpdateRequest";
import { MonitorUserTemplateCreateRequest } from "../models/MonitorUserTemplateCreateRequest";
import { MonitorUserTemplateCreateResponse } from "../models/MonitorUserTemplateCreateResponse";
import { MonitorUserTemplateListResponse } from "../models/MonitorUserTemplateListResponse";
import { MonitorUserTemplateResponse } from "../models/MonitorUserTemplateResponse";
import { MonitorUserTemplateUpdateRequest } from "../models/MonitorUserTemplateUpdateRequest";

export class MonitorsApiRequestFactory extends BaseAPIRequestFactory {
  public async createMonitorConfigPolicy(
    body: MonitorConfigPolicyCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.createMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorConfigPolicyCreateRequest", ""),
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

  public async createMonitorNotificationRule(
    body: MonitorNotificationRuleCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMonitorNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.createMonitorNotificationRule")
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
        "MonitorNotificationRuleCreateRequest",
        ""
      ),
      contentType
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

  public async createMonitorUserTemplate(
    body: MonitorUserTemplateCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createMonitorUserTemplate'");
    if (!_config.unstableOperations["v2.createMonitorUserTemplate"]) {
      throw new Error(
        "Unstable operation 'createMonitorUserTemplate' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMonitorUserTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/template";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.createMonitorUserTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorUserTemplateCreateRequest", ""),
      contentType
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

  public async deleteMonitorConfigPolicy(
    policyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "deleteMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.deleteMonitorConfigPolicy")
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

  public async deleteMonitorNotificationRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteMonitorNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.deleteMonitorNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteMonitorUserTemplate(
    templateId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteMonitorUserTemplate'");
    if (!_config.unstableOperations["v2.deleteMonitorUserTemplate"]) {
      throw new Error(
        "Unstable operation 'deleteMonitorUserTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "deleteMonitorUserTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/template/{template_id}".replace(
      "{template_id}",
      encodeURIComponent(String(templateId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.deleteMonitorUserTemplate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMonitorConfigPolicy(
    policyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.getMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMonitorNotificationRule(
    ruleId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getMonitorNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.getMonitorNotificationRule")
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMonitorNotificationRules(
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.getMonitorNotificationRules")
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMonitorUserTemplate(
    templateId: string,
    withAllVersions?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMonitorUserTemplate'");
    if (!_config.unstableOperations["v2.getMonitorUserTemplate"]) {
      throw new Error(
        "Unstable operation 'getMonitorUserTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "getMonitorUserTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/template/{template_id}".replace(
      "{template_id}",
      encodeURIComponent(String(templateId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.getMonitorUserTemplate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (withAllVersions !== undefined) {
      requestContext.setQueryParam(
        "with_all_versions",
        ObjectSerializer.serialize(withAllVersions, "boolean", ""),
        ""
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

  public async listMonitorConfigPolicies(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/monitor/policy";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.listMonitorConfigPolicies")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listMonitorUserTemplates(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listMonitorUserTemplates'");
    if (!_config.unstableOperations["v2.listMonitorUserTemplates"]) {
      throw new Error(
        "Unstable operation 'listMonitorUserTemplates' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/template";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.listMonitorUserTemplates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateMonitorConfigPolicy(
    policyId: string,
    body: MonitorConfigPolicyEditRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "updateMonitorConfigPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.updateMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorConfigPolicyEditRequest", ""),
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

  public async updateMonitorNotificationRule(
    ruleId: string,
    body: MonitorNotificationRuleUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateMonitorNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMonitorNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.updateMonitorNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "MonitorNotificationRuleUpdateRequest",
        ""
      ),
      contentType
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

  public async updateMonitorUserTemplate(
    templateId: string,
    body: MonitorUserTemplateUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateMonitorUserTemplate'");
    if (!_config.unstableOperations["v2.updateMonitorUserTemplate"]) {
      throw new Error(
        "Unstable operation 'updateMonitorUserTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "updateMonitorUserTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMonitorUserTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/template/{template_id}".replace(
      "{template_id}",
      encodeURIComponent(String(templateId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.updateMonitorUserTemplate")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorUserTemplateUpdateRequest", ""),
      contentType
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

  public async validateExistingMonitorUserTemplate(
    templateId: string,
    body: MonitorUserTemplateUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'validateExistingMonitorUserTemplate'"
    );
    if (!_config.unstableOperations["v2.validateExistingMonitorUserTemplate"]) {
      throw new Error(
        "Unstable operation 'validateExistingMonitorUserTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError(
        "templateId",
        "validateExistingMonitorUserTemplate"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateExistingMonitorUserTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/monitor/template/{template_id}/validate".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.validateExistingMonitorUserTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorUserTemplateUpdateRequest", ""),
      contentType
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

  public async validateMonitorUserTemplate(
    body: MonitorUserTemplateCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'validateMonitorUserTemplate'");
    if (!_config.unstableOperations["v2.validateMonitorUserTemplate"]) {
      throw new Error(
        "Unstable operation 'validateMonitorUserTemplate' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateMonitorUserTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/template/validate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.validateMonitorUserTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorUserTemplateCreateRequest", ""),
      contentType
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
}

export class MonitorsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMonitorConfigPolicy(
    response: ResponseContext
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse"
      ) as MonitorConfigPolicyResponse;
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
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
        ""
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to createMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMonitorNotificationRule(
    response: ResponseContext
  ): Promise<MonitorNotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleResponse"
        ) as MonitorNotificationRuleResponse;
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
      const body: MonitorNotificationRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleResponse",
          ""
        ) as MonitorNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to createMonitorUserTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMonitorUserTemplate(
    response: ResponseContext
  ): Promise<MonitorUserTemplateCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorUserTemplateCreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorUserTemplateCreateResponse"
        ) as MonitorUserTemplateCreateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: MonitorUserTemplateCreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorUserTemplateCreateResponse",
          ""
        ) as MonitorUserTemplateCreateResponse;
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
   * @params response Response returned by the server for a request to deleteMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitorConfigPolicy(
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to deleteMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitorNotificationRule(
    response: ResponseContext
  ): Promise<void> {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to deleteMonitorUserTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitorUserTemplate(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorConfigPolicy(
    response: ResponseContext
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse"
      ) as MonitorConfigPolicyResponse;
      return body;
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
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
        ""
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to getMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorNotificationRule(
    response: ResponseContext
  ): Promise<MonitorNotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleResponse"
        ) as MonitorNotificationRuleResponse;
      return body;
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
      const body: MonitorNotificationRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleResponse",
          ""
        ) as MonitorNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getMonitorNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorNotificationRules(
    response: ResponseContext
  ): Promise<MonitorNotificationRuleListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleListResponse"
        ) as MonitorNotificationRuleListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: MonitorNotificationRuleListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleListResponse",
          ""
        ) as MonitorNotificationRuleListResponse;
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
   * @params response Response returned by the server for a request to getMonitorUserTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorUserTemplate(
    response: ResponseContext
  ): Promise<MonitorUserTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorUserTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorUserTemplateResponse"
      ) as MonitorUserTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: MonitorUserTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorUserTemplateResponse",
        ""
      ) as MonitorUserTemplateResponse;
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
   * @params response Response returned by the server for a request to listMonitorConfigPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitorConfigPolicies(
    response: ResponseContext
  ): Promise<MonitorConfigPolicyListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorConfigPolicyListResponse"
        ) as MonitorConfigPolicyListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: MonitorConfigPolicyListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorConfigPolicyListResponse",
          ""
        ) as MonitorConfigPolicyListResponse;
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
   * @params response Response returned by the server for a request to listMonitorUserTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitorUserTemplates(
    response: ResponseContext
  ): Promise<MonitorUserTemplateListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorUserTemplateListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorUserTemplateListResponse"
        ) as MonitorUserTemplateListResponse;
      return body;
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
      const body: MonitorUserTemplateListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorUserTemplateListResponse",
          ""
        ) as MonitorUserTemplateListResponse;
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
   * @params response Response returned by the server for a request to updateMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitorConfigPolicy(
    response: ResponseContext
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse"
      ) as MonitorConfigPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
        ""
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to updateMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitorNotificationRule(
    response: ResponseContext
  ): Promise<MonitorNotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleResponse"
        ) as MonitorNotificationRuleResponse;
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
      const body: MonitorNotificationRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonitorNotificationRuleResponse",
          ""
        ) as MonitorNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to updateMonitorUserTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitorUserTemplate(
    response: ResponseContext
  ): Promise<MonitorUserTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorUserTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorUserTemplateResponse"
      ) as MonitorUserTemplateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: MonitorUserTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorUserTemplateResponse",
        ""
      ) as MonitorUserTemplateResponse;
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
   * @params response Response returned by the server for a request to validateExistingMonitorUserTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateExistingMonitorUserTemplate(
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to validateMonitorUserTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateMonitorUserTemplate(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface MonitorsApiCreateMonitorConfigPolicyRequest {
  /**
   * Create a monitor configuration policy request body.
   * @type MonitorConfigPolicyCreateRequest
   */
  body: MonitorConfigPolicyCreateRequest;
}

export interface MonitorsApiCreateMonitorNotificationRuleRequest {
  /**
   * Request body to create a monitor notification rule.
   * @type MonitorNotificationRuleCreateRequest
   */
  body: MonitorNotificationRuleCreateRequest;
}

export interface MonitorsApiCreateMonitorUserTemplateRequest {
  /**
   * @type MonitorUserTemplateCreateRequest
   */
  body: MonitorUserTemplateCreateRequest;
}

export interface MonitorsApiDeleteMonitorConfigPolicyRequest {
  /**
   * ID of the monitor configuration policy.
   * @type string
   */
  policyId: string;
}

export interface MonitorsApiDeleteMonitorNotificationRuleRequest {
  /**
   * ID of the monitor notification rule to delete.
   * @type string
   */
  ruleId: string;
}

export interface MonitorsApiDeleteMonitorUserTemplateRequest {
  /**
   * ID of the monitor user template.
   * @type string
   */
  templateId: string;
}

export interface MonitorsApiGetMonitorConfigPolicyRequest {
  /**
   * ID of the monitor configuration policy.
   * @type string
   */
  policyId: string;
}

export interface MonitorsApiGetMonitorNotificationRuleRequest {
  /**
   * ID of the monitor notification rule to fetch.
   * @type string
   */
  ruleId: string;
  /**
   * Comma-separated list of resource paths for related resources to include in the response. Supported resource
   * path is `created_by`.
   * @type string
   */
  include?: string;
}

export interface MonitorsApiGetMonitorNotificationRulesRequest {
  /**
   * Comma-separated list of resource paths for related resources to include in the response. Supported resource
   * path is `created_by`.
   * @type string
   */
  include?: string;
}

export interface MonitorsApiGetMonitorUserTemplateRequest {
  /**
   * ID of the monitor user template.
   * @type string
   */
  templateId: string;
  /**
   * Whether to include all versions of the template in the response in the versions field.
   * @type boolean
   */
  withAllVersions?: boolean;
}

export interface MonitorsApiUpdateMonitorConfigPolicyRequest {
  /**
   * ID of the monitor configuration policy.
   * @type string
   */
  policyId: string;
  /**
   * Description of the update.
   * @type MonitorConfigPolicyEditRequest
   */
  body: MonitorConfigPolicyEditRequest;
}

export interface MonitorsApiUpdateMonitorNotificationRuleRequest {
  /**
   * ID of the monitor notification rule to update.
   * @type string
   */
  ruleId: string;
  /**
   * Request body to update the monitor notification rule.
   * @type MonitorNotificationRuleUpdateRequest
   */
  body: MonitorNotificationRuleUpdateRequest;
}

export interface MonitorsApiUpdateMonitorUserTemplateRequest {
  /**
   * ID of the monitor user template.
   * @type string
   */
  templateId: string;
  /**
   * @type MonitorUserTemplateUpdateRequest
   */
  body: MonitorUserTemplateUpdateRequest;
}

export interface MonitorsApiValidateExistingMonitorUserTemplateRequest {
  /**
   * ID of the monitor user template.
   * @type string
   */
  templateId: string;
  /**
   * @type MonitorUserTemplateUpdateRequest
   */
  body: MonitorUserTemplateUpdateRequest;
}

export interface MonitorsApiValidateMonitorUserTemplateRequest {
  /**
   * @type MonitorUserTemplateCreateRequest
   */
  body: MonitorUserTemplateCreateRequest;
}

export class MonitorsApi {
  private requestFactory: MonitorsApiRequestFactory;
  private responseProcessor: MonitorsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MonitorsApiRequestFactory,
    responseProcessor?: MonitorsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new MonitorsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MonitorsApiResponseProcessor();
  }

  /**
   * Create a monitor configuration policy.
   * @param param The request object
   */
  public createMonitorConfigPolicy(
    param: MonitorsApiCreateMonitorConfigPolicyRequest,
    options?: Configuration
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.createMonitorConfigPolicy(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitorConfigPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a monitor notification rule.
   * @param param The request object
   */
  public createMonitorNotificationRule(
    param: MonitorsApiCreateMonitorNotificationRuleRequest,
    options?: Configuration
  ): Promise<MonitorNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createMonitorNotificationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitorNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new monitor user template.
   * @param param The request object
   */
  public createMonitorUserTemplate(
    param: MonitorsApiCreateMonitorUserTemplateRequest,
    options?: Configuration
  ): Promise<MonitorUserTemplateCreateResponse> {
    const requestContextPromise = this.requestFactory.createMonitorUserTemplate(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitorUserTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a monitor configuration policy.
   * @param param The request object
   */
  public deleteMonitorConfigPolicy(
    param: MonitorsApiDeleteMonitorConfigPolicyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMonitorConfigPolicy(
      param.policyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitorConfigPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes a monitor notification rule by `rule_id`.
   * @param param The request object
   */
  public deleteMonitorNotificationRule(
    param: MonitorsApiDeleteMonitorNotificationRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteMonitorNotificationRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitorNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an existing monitor user template by its ID.
   * @param param The request object
   */
  public deleteMonitorUserTemplate(
    param: MonitorsApiDeleteMonitorUserTemplateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMonitorUserTemplate(
      param.templateId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitorUserTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Get a monitor configuration policy by `policy_id`.
   * @param param The request object
   */
  public getMonitorConfigPolicy(
    param: MonitorsApiGetMonitorConfigPolicyRequest,
    options?: Configuration
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.getMonitorConfigPolicy(
      param.policyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorConfigPolicy(responseContext);
        });
    });
  }

  /**
   * Returns a monitor notification rule by `rule_id`.
   * @param param The request object
   */
  public getMonitorNotificationRule(
    param: MonitorsApiGetMonitorNotificationRuleRequest,
    options?: Configuration
  ): Promise<MonitorNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getMonitorNotificationRule(
        param.ruleId,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Returns a list of all monitor notification rules.
   * @param param The request object
   */
  public getMonitorNotificationRules(
    param: MonitorsApiGetMonitorNotificationRulesRequest = {},
    options?: Configuration
  ): Promise<MonitorNotificationRuleListResponse> {
    const requestContextPromise =
      this.requestFactory.getMonitorNotificationRules(param.include, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorNotificationRules(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a monitor user template by its ID.
   * @param param The request object
   */
  public getMonitorUserTemplate(
    param: MonitorsApiGetMonitorUserTemplateRequest,
    options?: Configuration
  ): Promise<MonitorUserTemplateResponse> {
    const requestContextPromise = this.requestFactory.getMonitorUserTemplate(
      param.templateId,
      param.withAllVersions,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorUserTemplate(responseContext);
        });
    });
  }

  /**
   * Get all monitor configuration policies.
   * @param param The request object
   */
  public listMonitorConfigPolicies(
    options?: Configuration
  ): Promise<MonitorConfigPolicyListResponse> {
    const requestContextPromise =
      this.requestFactory.listMonitorConfigPolicies(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorConfigPolicies(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve all monitor user templates.
   * @param param The request object
   */
  public listMonitorUserTemplates(
    options?: Configuration
  ): Promise<MonitorUserTemplateListResponse> {
    const requestContextPromise =
      this.requestFactory.listMonitorUserTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorUserTemplates(
            responseContext
          );
        });
    });
  }

  /**
   * Edit a monitor configuration policy.
   * @param param The request object
   */
  public updateMonitorConfigPolicy(
    param: MonitorsApiUpdateMonitorConfigPolicyRequest,
    options?: Configuration
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateMonitorConfigPolicy(
      param.policyId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitorConfigPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Updates a monitor notification rule by `rule_id`.
   * @param param The request object
   */
  public updateMonitorNotificationRule(
    param: MonitorsApiUpdateMonitorNotificationRuleRequest,
    options?: Configuration
  ): Promise<MonitorNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateMonitorNotificationRule(
        param.ruleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitorNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a new version of an existing monitor user template.
   * @param param The request object
   */
  public updateMonitorUserTemplate(
    param: MonitorsApiUpdateMonitorUserTemplateRequest,
    options?: Configuration
  ): Promise<MonitorUserTemplateResponse> {
    const requestContextPromise = this.requestFactory.updateMonitorUserTemplate(
      param.templateId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitorUserTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Validate the structure and content of an existing monitor user template being updated to a new version.
   * @param param The request object
   */
  public validateExistingMonitorUserTemplate(
    param: MonitorsApiValidateExistingMonitorUserTemplateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateExistingMonitorUserTemplate(
        param.templateId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateExistingMonitorUserTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Validate the structure and content of a monitor user template.
   * @param param The request object
   */
  public validateMonitorUserTemplate(
    param: MonitorsApiValidateMonitorUserTemplateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateMonitorUserTemplate(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateMonitorUserTemplate(
            responseContext
          );
        });
    });
  }
}
