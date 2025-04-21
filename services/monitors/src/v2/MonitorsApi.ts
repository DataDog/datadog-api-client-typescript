import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { MonitorConfigPolicyCreateRequest } from "./models/MonitorConfigPolicyCreateRequest";
import { MonitorConfigPolicyEditRequest } from "./models/MonitorConfigPolicyEditRequest";
import { MonitorConfigPolicyListResponse } from "./models/MonitorConfigPolicyListResponse";
import { MonitorConfigPolicyResponse } from "./models/MonitorConfigPolicyResponse";
import { MonitorNotificationRuleCreateRequest } from "./models/MonitorNotificationRuleCreateRequest";
import { MonitorNotificationRuleListResponse } from "./models/MonitorNotificationRuleListResponse";
import { MonitorNotificationRuleResponse } from "./models/MonitorNotificationRuleResponse";
import { MonitorNotificationRuleUpdateRequest } from "./models/MonitorNotificationRuleUpdateRequest";

export class MonitorsApiRequestFactory extends BaseAPIRequestFactory {
  public async createMonitorConfigPolicy(
    body: MonitorConfigPolicyCreateRequest,
    _options?: Configuration,
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
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MonitorConfigPolicyCreateRequest", ""),
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

  public async createMonitorNotificationRule(
    body: MonitorNotificationRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createMonitorNotificationRule'");
    if (!_config.unstableOperations["v2.createMonitorNotificationRule"]) {
      throw new Error(
        "Unstable operation 'createMonitorNotificationRule' is disabled",
      );
    }

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
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MonitorNotificationRuleCreateRequest", ""),
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

  public async deleteMonitorConfigPolicy(
    policyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "deleteMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId)),
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteMonitorNotificationRule'");
    if (!_config.unstableOperations["v2.deleteMonitorNotificationRule"]) {
      throw new Error(
        "Unstable operation 'deleteMonitorNotificationRule' is disabled",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteMonitorNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
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

  public async getMonitorConfigPolicy(
    policyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId)),
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMonitorNotificationRule'");
    if (!_config.unstableOperations["v2.getMonitorNotificationRule"]) {
      throw new Error(
        "Unstable operation 'getMonitorNotificationRule' is disabled",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getMonitorNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/notification_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
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
        serialize(include, TypingInfo, "string", ""),
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

  public async getMonitorNotificationRules(
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMonitorNotificationRules'");
    if (!_config.unstableOperations["v2.getMonitorNotificationRules"]) {
      throw new Error(
        "Unstable operation 'getMonitorNotificationRules' is disabled",
      );
    }

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
        serialize(include, TypingInfo, "string", ""),
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

  public async listMonitorConfigPolicies(
    _options?: Configuration,
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

  public async updateMonitorConfigPolicy(
    policyId: string,
    body: MonitorConfigPolicyEditRequest,
    _options?: Configuration,
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
      encodeURIComponent(String(policyId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.updateMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MonitorConfigPolicyEditRequest", ""),
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

  public async updateMonitorNotificationRule(
    ruleId: string,
    body: MonitorNotificationRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateMonitorNotificationRule'");
    if (!_config.unstableOperations["v2.updateMonitorNotificationRule"]) {
      throw new Error(
        "Unstable operation 'updateMonitorNotificationRule' is disabled",
      );
    }

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
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MonitorsApi.updateMonitorNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MonitorNotificationRuleUpdateRequest", ""),
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
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyResponse",
      ) as MonitorConfigPolicyResponse;
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
      const body: MonitorConfigPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyResponse",
        "",
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to createMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMonitorNotificationRule(
    response: ResponseContext,
  ): Promise<MonitorNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleResponse",
      ) as MonitorNotificationRuleResponse;
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
      const body: MonitorNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleResponse",
        "",
      ) as MonitorNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to deleteMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitorNotificationRule(
    response: ResponseContext,
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to getMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyResponse",
      ) as MonitorConfigPolicyResponse;
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
      const body: MonitorConfigPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyResponse",
        "",
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to getMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorNotificationRule(
    response: ResponseContext,
  ): Promise<MonitorNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleResponse",
      ) as MonitorNotificationRuleResponse;
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
      const body: MonitorNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleResponse",
        "",
      ) as MonitorNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getMonitorNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorNotificationRules(
    response: ResponseContext,
  ): Promise<MonitorNotificationRuleListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleListResponse",
      ) as MonitorNotificationRuleListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: MonitorNotificationRuleListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleListResponse",
        "",
      ) as MonitorNotificationRuleListResponse;
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
   * @params response Response returned by the server for a request to listMonitorConfigPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitorConfigPolicies(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyListResponse",
      ) as MonitorConfigPolicyListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: MonitorConfigPolicyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyListResponse",
        "",
      ) as MonitorConfigPolicyListResponse;
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
   * @params response Response returned by the server for a request to updateMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyResponse",
      ) as MonitorConfigPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: MonitorConfigPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorConfigPolicyResponse",
        "",
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to updateMonitorNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitorNotificationRule(
    response: ResponseContext,
  ): Promise<MonitorNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleResponse",
      ) as MonitorNotificationRuleResponse;
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
      const body: MonitorNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonitorNotificationRuleResponse",
        "",
      ) as MonitorNotificationRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

export class MonitorsApi {
  private requestFactory: MonitorsApiRequestFactory;
  private responseProcessor: MonitorsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: MonitorsApiRequestFactory,
    responseProcessor?: MonitorsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new MonitorsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new MonitorsApiResponseProcessor();
  }

  /**
   * Create a monitor configuration policy.
   * @param param The request object
   */
  public createMonitorConfigPolicy(
    param: MonitorsApiCreateMonitorConfigPolicyRequest,
    options?: Configuration,
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.createMonitorConfigPolicy(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitorConfigPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<MonitorNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createMonitorNotificationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitorNotificationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMonitorConfigPolicy(
      param.policyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitorConfigPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteMonitorNotificationRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitorNotificationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.getMonitorConfigPolicy(
      param.policyId,
      options,
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
    options?: Configuration,
  ): Promise<MonitorNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getMonitorNotificationRule(
        param.ruleId,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorNotificationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<MonitorNotificationRuleListResponse> {
    const requestContextPromise =
      this.requestFactory.getMonitorNotificationRules(param.include, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorNotificationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all monitor configuration policies.
   * @param param The request object
   */
  public listMonitorConfigPolicies(
    options?: Configuration,
  ): Promise<MonitorConfigPolicyListResponse> {
    const requestContextPromise =
      this.requestFactory.listMonitorConfigPolicies(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorConfigPolicies(
            responseContext,
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
    options?: Configuration,
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateMonitorConfigPolicy(
      param.policyId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitorConfigPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<MonitorNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateMonitorNotificationRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitorNotificationRule(
            responseContext,
          );
        });
    });
  }
}
