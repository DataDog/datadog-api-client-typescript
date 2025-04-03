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
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CloudWorkloadSecurityAgentRuleCreateRequest } from "./models/CloudWorkloadSecurityAgentRuleCreateRequest";
import { CloudWorkloadSecurityAgentRuleResponse } from "./models/CloudWorkloadSecurityAgentRuleResponse";
import { CloudWorkloadSecurityAgentRulesListResponse } from "./models/CloudWorkloadSecurityAgentRulesListResponse";
import { CloudWorkloadSecurityAgentRuleUpdateRequest } from "./models/CloudWorkloadSecurityAgentRuleUpdateRequest";

export class CSMThreatsApiRequestFactory extends BaseAPIRequestFactory {
  public async createCloudWorkloadSecurityAgentRule(
    body: CloudWorkloadSecurityAgentRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCloudWorkloadSecurityAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.createCloudWorkloadSecurityAgentRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CloudWorkloadSecurityAgentRuleCreateRequest", ""),
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

  public async createCSMThreatsAgentRule(
    body: CloudWorkloadSecurityAgentRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCSMThreatsAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/cws/agent_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.createCSMThreatsAgentRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CloudWorkloadSecurityAgentRuleCreateRequest", ""),
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

  public async deleteCloudWorkloadSecurityAgentRule(
    agentRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError("agentRuleId", "deleteCloudWorkloadSecurityAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace(
      "{agent_rule_id}",
      encodeURIComponent(String(agentRuleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.deleteCloudWorkloadSecurityAgentRule")
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

  public async deleteCSMThreatsAgentRule(
    agentRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError("agentRuleId", "deleteCSMThreatsAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}".replace(
      "{agent_rule_id}",
      encodeURIComponent(String(agentRuleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.deleteCSMThreatsAgentRule")
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

  public async downloadCloudWorkloadPolicyFile(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/cloud_workload/policy/download";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.downloadCloudWorkloadPolicyFile")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/yaml, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async downloadCSMThreatsPolicy(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/cws/policy/download";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.downloadCSMThreatsPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/zip, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getCloudWorkloadSecurityAgentRule(
    agentRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError("agentRuleId", "getCloudWorkloadSecurityAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace(
      "{agent_rule_id}",
      encodeURIComponent(String(agentRuleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.getCloudWorkloadSecurityAgentRule")
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

  public async getCSMThreatsAgentRule(
    agentRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError("agentRuleId", "getCSMThreatsAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}".replace(
      "{agent_rule_id}",
      encodeURIComponent(String(agentRuleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.getCSMThreatsAgentRule")
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

  public async listCloudWorkloadSecurityAgentRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.listCloudWorkloadSecurityAgentRules")
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

  public async listCSMThreatsAgentRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/cws/agent_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.listCSMThreatsAgentRules")
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

  public async updateCloudWorkloadSecurityAgentRule(
    agentRuleId: string,
    body: CloudWorkloadSecurityAgentRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError("agentRuleId", "updateCloudWorkloadSecurityAgentRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCloudWorkloadSecurityAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace(
      "{agent_rule_id}",
      encodeURIComponent(String(agentRuleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.updateCloudWorkloadSecurityAgentRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CloudWorkloadSecurityAgentRuleUpdateRequest", ""),
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

  public async updateCSMThreatsAgentRule(
    agentRuleId: string,
    body: CloudWorkloadSecurityAgentRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError("agentRuleId", "updateCSMThreatsAgentRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCSMThreatsAgentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}".replace(
      "{agent_rule_id}",
      encodeURIComponent(String(agentRuleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.CSMThreatsApi.updateCSMThreatsAgentRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CloudWorkloadSecurityAgentRuleUpdateRequest", ""),
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

export class CSMThreatsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCloudWorkloadSecurityAgentRule(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
        "",
      ) as CloudWorkloadSecurityAgentRuleResponse;
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
   * @params response Response returned by the server for a request to createCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCSMThreatsAgentRule(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
        "",
      ) as CloudWorkloadSecurityAgentRuleResponse;
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
   * @params response Response returned by the server for a request to deleteCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCloudWorkloadSecurityAgentRule(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
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
   * @params response Response returned by the server for a request to deleteCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCSMThreatsAgentRule(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
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
   * @params response Response returned by the server for a request to downloadCloudWorkloadPolicyFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async downloadCloudWorkloadPolicyFile(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = await response.getBodyAsFile() as HttpFile;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
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
   * @params response Response returned by the server for a request to downloadCSMThreatsPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async downloadCSMThreatsPolicy(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = await response.getBodyAsFile() as HttpFile;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
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
   * @params response Response returned by the server for a request to getCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCloudWorkloadSecurityAgentRule(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
        "",
      ) as CloudWorkloadSecurityAgentRuleResponse;
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
   * @params response Response returned by the server for a request to getCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCSMThreatsAgentRule(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
        "",
      ) as CloudWorkloadSecurityAgentRuleResponse;
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
   * @params response Response returned by the server for a request to listCloudWorkloadSecurityAgentRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCloudWorkloadSecurityAgentRules(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse",
      ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse",
        "",
      ) as CloudWorkloadSecurityAgentRulesListResponse;
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
   * @params response Response returned by the server for a request to listCSMThreatsAgentRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCSMThreatsAgentRules(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse",
      ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse",
        "",
      ) as CloudWorkloadSecurityAgentRulesListResponse;
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
   * @params response Response returned by the server for a request to updateCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCloudWorkloadSecurityAgentRule(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
        "",
      ) as CloudWorkloadSecurityAgentRuleResponse;
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
   * @params response Response returned by the server for a request to updateCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCSMThreatsAgentRule(
    response: ResponseContext,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse",
        "",
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The definition of the new Agent rule.
   * @type CloudWorkloadSecurityAgentRuleCreateRequest
   */
  body: CloudWorkloadSecurityAgentRuleCreateRequest;
}

export interface CSMThreatsApiCreateCSMThreatsAgentRuleRequest {
  /**
   * The definition of the new Agent rule.
   * @type CloudWorkloadSecurityAgentRuleCreateRequest
   */
  body: CloudWorkloadSecurityAgentRuleCreateRequest;
}

export interface CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
}

export interface CSMThreatsApiDeleteCSMThreatsAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
}

export interface CSMThreatsApiGetCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
}

export interface CSMThreatsApiGetCSMThreatsAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
}

export interface CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
  /**
   * New definition of the Agent rule.
   * @type CloudWorkloadSecurityAgentRuleUpdateRequest
   */
  body: CloudWorkloadSecurityAgentRuleUpdateRequest;
}

export interface CSMThreatsApiUpdateCSMThreatsAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
  /**
   * New definition of the Agent rule.
   * @type CloudWorkloadSecurityAgentRuleUpdateRequest
   */
  body: CloudWorkloadSecurityAgentRuleUpdateRequest;
}

export class CSMThreatsApi {
  private requestFactory: CSMThreatsApiRequestFactory;
  private responseProcessor: CSMThreatsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CSMThreatsApiRequestFactory,
    responseProcessor?: CSMThreatsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CSMThreatsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CSMThreatsApiResponseProcessor();
  }

  /**
   * Create a new Agent rule with the given parameters.
   * @param param The request object
   */
  public createCloudWorkloadSecurityAgentRule(
    param: CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.createCloudWorkloadSecurityAgentRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Create a new Cloud Security Management Threats Agent rule with the given parameters.
   * @param param The request object
   */
  public createCSMThreatsAgentRule(
    param: CSMThreatsApiCreateCSMThreatsAgentRuleRequest,
    options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.createCSMThreatsAgentRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCSMThreatsAgentRule(responseContext);
        });
    });
  }

  /**
   * Delete a specific Agent rule.
   * @param param The request object
   */
  public deleteCloudWorkloadSecurityAgentRule(
    param: CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCloudWorkloadSecurityAgentRule(
      param.agentRuleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Delete a specific Cloud Security Management Threats Agent rule.
   * @param param The request object
   */
  public deleteCSMThreatsAgentRule(
    param: CSMThreatsApiDeleteCSMThreatsAgentRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCSMThreatsAgentRule(
      param.agentRuleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCSMThreatsAgentRule(responseContext);
        });
    });
  }

  /**
   * The download endpoint generates a Cloud Workload Security policy file from your currently active
   * Cloud Workload Security rules, and downloads them as a .policy file. This file can then be deployed to
   * your Agents to update the policy running in your environment.
   * @param param The request object
   */
  public downloadCloudWorkloadPolicyFile(options?: Configuration,
  ): Promise<HttpFile> {
    const requestContextPromise = this.requestFactory.downloadCloudWorkloadPolicyFile(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.downloadCloudWorkloadPolicyFile(responseContext);
        });
    });
  }

  /**
   * The download endpoint generates a CSM Threats policy file from your currently active
   * CSM Threats rules, and downloads them as a `.policy` file. This file can then be deployed to
   * your Agents to update the policy running in your environment.
   * @param param The request object
   */
  public downloadCSMThreatsPolicy(options?: Configuration,
  ): Promise<HttpFile> {
    const requestContextPromise = this.requestFactory.downloadCSMThreatsPolicy(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.downloadCSMThreatsPolicy(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific Agent rule.
   * @param param The request object
   */
  public getCloudWorkloadSecurityAgentRule(
    param: CSMThreatsApiGetCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.getCloudWorkloadSecurityAgentRule(
      param.agentRuleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific Cloud Security Management Threats Agent rule.
   * @param param The request object
   */
  public getCSMThreatsAgentRule(
    param: CSMThreatsApiGetCSMThreatsAgentRuleRequest,
    options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.getCSMThreatsAgentRule(
      param.agentRuleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCSMThreatsAgentRule(responseContext);
        });
    });
  }

  /**
   * Get the list of Agent rules.
   * @param param The request object
   */
  public listCloudWorkloadSecurityAgentRules(options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const requestContextPromise = this.requestFactory.listCloudWorkloadSecurityAgentRules(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCloudWorkloadSecurityAgentRules(responseContext);
        });
    });
  }

  /**
   * Get the list of Cloud Security Management Threats Agent rules.
   * @param param The request object
   */
  public listCSMThreatsAgentRules(options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const requestContextPromise = this.requestFactory.listCSMThreatsAgentRules(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCSMThreatsAgentRules(responseContext);
        });
    });
  }

  /**
   * Update a specific Agent rule.
   * Returns the Agent rule object when the request is successful.
   * @param param The request object
   */
  public updateCloudWorkloadSecurityAgentRule(
    param: CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.updateCloudWorkloadSecurityAgentRule(
      param.agentRuleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Update a specific Cloud Security Management Threats Agent rule.
   * Returns the Agent rule object when the request is successful.
   * @param param The request object
   */
  public updateCSMThreatsAgentRule(
    param: CSMThreatsApiUpdateCSMThreatsAgentRuleRequest,
    options?: Configuration,
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.updateCSMThreatsAgentRule(
      param.agentRuleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCSMThreatsAgentRule(responseContext);
        });
    });
  }
}
