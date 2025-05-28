import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration, applySecurityAuthentication} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile
  } from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";


import { APIErrorResponse } from "../models/APIErrorResponse";
import { CloudWorkloadSecurityAgentPoliciesListResponse } from "../models/CloudWorkloadSecurityAgentPoliciesListResponse";
import { CloudWorkloadSecurityAgentPolicyCreateRequest } from "../models/CloudWorkloadSecurityAgentPolicyCreateRequest";
import { CloudWorkloadSecurityAgentPolicyResponse } from "../models/CloudWorkloadSecurityAgentPolicyResponse";
import { CloudWorkloadSecurityAgentPolicyUpdateRequest } from "../models/CloudWorkloadSecurityAgentPolicyUpdateRequest";
import { CloudWorkloadSecurityAgentRuleCreateRequest } from "../models/CloudWorkloadSecurityAgentRuleCreateRequest";
import { CloudWorkloadSecurityAgentRuleResponse } from "../models/CloudWorkloadSecurityAgentRuleResponse";
import { CloudWorkloadSecurityAgentRulesListResponse } from "../models/CloudWorkloadSecurityAgentRulesListResponse";
import { CloudWorkloadSecurityAgentRuleUpdateRequest } from "../models/CloudWorkloadSecurityAgentRuleUpdateRequest";

export class CSMThreatsApiRequestFactory extends BaseAPIRequestFactory {

  public async createCloudWorkloadSecurityAgentRule(body: CloudWorkloadSecurityAgentRuleCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createCloudWorkloadSecurityAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/security_monitoring/cloud_workload_security/agent_rules';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.createCloudWorkloadSecurityAgentRule').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async createCSMThreatsAgentPolicy(body: CloudWorkloadSecurityAgentPolicyCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createCSMThreatsAgentPolicy');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/policy';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.createCSMThreatsAgentPolicy').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentPolicyCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async createCSMThreatsAgentRule(body: CloudWorkloadSecurityAgentRuleCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createCSMThreatsAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/agent_rules';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.createCSMThreatsAgentRule').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteCloudWorkloadSecurityAgentRule(agentRuleId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError('agentRuleId', 'deleteCloudWorkloadSecurityAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}'
      .replace('{agent_rule_id}', encodeURIComponent(String(agentRuleId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.deleteCloudWorkloadSecurityAgentRule').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteCSMThreatsAgentPolicy(policyId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError('policyId', 'deleteCSMThreatsAgentPolicy');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/policy/{policy_id}'
      .replace('{policy_id}', encodeURIComponent(String(policyId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.deleteCSMThreatsAgentPolicy').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteCSMThreatsAgentRule(agentRuleId: string,policyId?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError('agentRuleId', 'deleteCSMThreatsAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}'
      .replace('{agent_rule_id}', encodeURIComponent(String(agentRuleId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.deleteCSMThreatsAgentRule').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (policyId !== undefined) {
      requestContext.setQueryParam("policy_id", ObjectSerializer.serialize(policyId, "string", ""), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async downloadCloudWorkloadPolicyFile(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/security/cloud_workload/policy/download';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.downloadCloudWorkloadPolicyFile').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/yaml, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async downloadCSMThreatsPolicy(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/policy/download';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.downloadCSMThreatsPolicy').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/zip, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async getCloudWorkloadSecurityAgentRule(agentRuleId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError('agentRuleId', 'getCloudWorkloadSecurityAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}'
      .replace('{agent_rule_id}', encodeURIComponent(String(agentRuleId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.getCloudWorkloadSecurityAgentRule').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async getCSMThreatsAgentPolicy(policyId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError('policyId', 'getCSMThreatsAgentPolicy');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/policy/{policy_id}'
      .replace('{policy_id}', encodeURIComponent(String(policyId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.getCSMThreatsAgentPolicy').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async getCSMThreatsAgentRule(agentRuleId: string,policyId?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError('agentRuleId', 'getCSMThreatsAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}'
      .replace('{agent_rule_id}', encodeURIComponent(String(agentRuleId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.getCSMThreatsAgentRule').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (policyId !== undefined) {
      requestContext.setQueryParam("policy_id", ObjectSerializer.serialize(policyId, "string", ""), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async listCloudWorkloadSecurityAgentRules(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/security_monitoring/cloud_workload_security/agent_rules';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.listCloudWorkloadSecurityAgentRules').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async listCSMThreatsAgentPolicies(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/policy';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.listCSMThreatsAgentPolicies').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async listCSMThreatsAgentRules(policyId?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/agent_rules';

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.listCSMThreatsAgentRules').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (policyId !== undefined) {
      requestContext.setQueryParam("policy_id", ObjectSerializer.serialize(policyId, "string", ""), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateCloudWorkloadSecurityAgentRule(agentRuleId: string,body: CloudWorkloadSecurityAgentRuleUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError('agentRuleId', 'updateCloudWorkloadSecurityAgentRule');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateCloudWorkloadSecurityAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}'
      .replace('{agent_rule_id}', encodeURIComponent(String(agentRuleId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.updateCloudWorkloadSecurityAgentRule').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateCSMThreatsAgentPolicy(policyId: string,body: CloudWorkloadSecurityAgentPolicyUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError('policyId', 'updateCSMThreatsAgentPolicy');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateCSMThreatsAgentPolicy');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/policy/{policy_id}'
      .replace('{policy_id}', encodeURIComponent(String(policyId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.updateCSMThreatsAgentPolicy').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentPolicyUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateCSMThreatsAgentRule(agentRuleId: string,body: CloudWorkloadSecurityAgentRuleUpdateRequest,policyId?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError('agentRuleId', 'updateCSMThreatsAgentRule');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateCSMThreatsAgentRule');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}'
      .replace('{agent_rule_id}', encodeURIComponent(String(agentRuleId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.CSMThreatsApi.updateCSMThreatsAgentRule').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (policyId !== undefined) {
      requestContext.setQueryParam("policy_id", ObjectSerializer.serialize(policyId, "string", ""), "");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

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
   public async createCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse"
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse", ""
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCSMThreatsAgentPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createCSMThreatsAgentPolicy(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPolicyResponse"
      ) as CloudWorkloadSecurityAgentPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPolicyResponse", ""
      ) as CloudWorkloadSecurityAgentPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createCSMThreatsAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse"
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse", ""
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCSMThreatsAgentPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteCSMThreatsAgentPolicy(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202||response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteCSMThreatsAgentRule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to downloadCloudWorkloadPolicyFile
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async downloadCloudWorkloadPolicyFile(response: ResponseContext): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HttpFile = await response.getBodyAsFile() as HttpFile;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to downloadCSMThreatsPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async downloadCSMThreatsPolicy(response: ResponseContext): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HttpFile = await response.getBodyAsFile() as HttpFile;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse"
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse", ""
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCSMThreatsAgentPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getCSMThreatsAgentPolicy(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPolicyResponse"
      ) as CloudWorkloadSecurityAgentPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPolicyResponse", ""
      ) as CloudWorkloadSecurityAgentPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getCSMThreatsAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse"
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse", ""
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCloudWorkloadSecurityAgentRules
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listCloudWorkloadSecurityAgentRules(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse"
      ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse", ""
      ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCSMThreatsAgentPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listCSMThreatsAgentPolicies(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPoliciesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentPoliciesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPoliciesListResponse"
      ) as CloudWorkloadSecurityAgentPoliciesListResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentPoliciesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPoliciesListResponse", ""
      ) as CloudWorkloadSecurityAgentPoliciesListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCSMThreatsAgentRules
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listCSMThreatsAgentRules(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse"
      ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRulesListResponse", ""
      ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateCloudWorkloadSecurityAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse"
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse", ""
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateCSMThreatsAgentPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateCSMThreatsAgentPolicy(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPolicyResponse"
      ) as CloudWorkloadSecurityAgentPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentPolicyResponse", ""
      ) as CloudWorkloadSecurityAgentPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateCSMThreatsAgentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateCSMThreatsAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse"
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudWorkloadSecurityAgentRuleResponse", ""
      ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The definition of the new agent rule
   * @type CloudWorkloadSecurityAgentRuleCreateRequest
   */
  body: CloudWorkloadSecurityAgentRuleCreateRequest
}

export interface CSMThreatsApiCreateCSMThreatsAgentPolicyRequest {
  /**
   * The definition of the new Agent policy
   * @type CloudWorkloadSecurityAgentPolicyCreateRequest
   */
  body: CloudWorkloadSecurityAgentPolicyCreateRequest
}

export interface CSMThreatsApiCreateCSMThreatsAgentRuleRequest {
  /**
   * The definition of the new agent rule
   * @type CloudWorkloadSecurityAgentRuleCreateRequest
   */
  body: CloudWorkloadSecurityAgentRuleCreateRequest
}

export interface CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule
   * @type string
   */
  agentRuleId: string
}

export interface CSMThreatsApiDeleteCSMThreatsAgentPolicyRequest {
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId: string
}

export interface CSMThreatsApiDeleteCSMThreatsAgentRuleRequest {
  /**
   * The ID of the Agent rule
   * @type string
   */
  agentRuleId: string
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId?: string
}

export interface CSMThreatsApiGetCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule
   * @type string
   */
  agentRuleId: string
}

export interface CSMThreatsApiGetCSMThreatsAgentPolicyRequest {
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId: string
}

export interface CSMThreatsApiGetCSMThreatsAgentRuleRequest {
  /**
   * The ID of the Agent rule
   * @type string
   */
  agentRuleId: string
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId?: string
}

export interface CSMThreatsApiListCSMThreatsAgentRulesRequest {
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId?: string
}

export interface CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule
   * @type string
   */
  agentRuleId: string
  /**
   * New definition of the agent rule
   * @type CloudWorkloadSecurityAgentRuleUpdateRequest
   */
  body: CloudWorkloadSecurityAgentRuleUpdateRequest
}

export interface CSMThreatsApiUpdateCSMThreatsAgentPolicyRequest {
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId: string
  /**
   * New definition of the Agent policy
   * @type CloudWorkloadSecurityAgentPolicyUpdateRequest
   */
  body: CloudWorkloadSecurityAgentPolicyUpdateRequest
}

export interface CSMThreatsApiUpdateCSMThreatsAgentRuleRequest {
  /**
   * The ID of the Agent rule
   * @type string
   */
  agentRuleId: string
  /**
   * New definition of the agent rule
   * @type CloudWorkloadSecurityAgentRuleUpdateRequest
   */
  body: CloudWorkloadSecurityAgentRuleUpdateRequest
  /**
   * The ID of the Agent policy
   * @type string
   */
  policyId?: string
}

export class CSMThreatsApi {
  private requestFactory: CSMThreatsApiRequestFactory;
  private responseProcessor: CSMThreatsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: CSMThreatsApiRequestFactory, responseProcessor?: CSMThreatsApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new CSMThreatsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new CSMThreatsApiResponseProcessor();
  }

  /**
   * Create a new agent rule with the given parameters.
   * 
   * **Note**: This endpoint should only be used for the Government (US1-FED) site.
   * @param param The request object
   */
  public createCloudWorkloadSecurityAgentRule(param: CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.createCloudWorkloadSecurityAgentRule(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Create a new Workload Protection policy with the given parameters.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public createCSMThreatsAgentPolicy(param: CSMThreatsApiCreateCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentPolicyResponse> {
    const requestContextPromise = this.requestFactory.createCSMThreatsAgentPolicy(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createCSMThreatsAgentPolicy(responseContext);
        });
    });
  }

  /**
   * Create a new Workload Protection agent rule with the given parameters.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public createCSMThreatsAgentRule(param: CSMThreatsApiCreateCSMThreatsAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.createCSMThreatsAgentRule(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createCSMThreatsAgentRule(responseContext);
        });
    });
  }

  /**
   * Delete a specific agent rule.
   * 
   * **Note**: This endpoint should only be used for the Government (US1-FED) site.
   * @param param The request object
   */
  public deleteCloudWorkloadSecurityAgentRule(param: CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCloudWorkloadSecurityAgentRule(param.agentRuleId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Delete a specific Workload Protection policy.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public deleteCSMThreatsAgentPolicy(param: CSMThreatsApiDeleteCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCSMThreatsAgentPolicy(param.policyId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteCSMThreatsAgentPolicy(responseContext);
        });
    });
  }

  /**
   * Delete a specific Workload Protection agent rule.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public deleteCSMThreatsAgentRule(param: CSMThreatsApiDeleteCSMThreatsAgentRuleRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCSMThreatsAgentRule(param.agentRuleId,param.policyId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteCSMThreatsAgentRule(responseContext);
        });
    });
  }

  /**
   * The download endpoint generates a Workload Protection policy file from your currently active
   * Workload Protection agent rules, and downloads them as a `.policy` file. This file can then be deployed to
   * your agents to update the policy running in your environment.
   * 
   * **Note**: This endpoint should only be used for the Government (US1-FED) site.
   * @param param The request object
   */
  public downloadCloudWorkloadPolicyFile( options?: Configuration): Promise<HttpFile> {
    const requestContextPromise = this.requestFactory.downloadCloudWorkloadPolicyFile(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.downloadCloudWorkloadPolicyFile(responseContext);
        });
    });
  }

  /**
   * The download endpoint generates a Workload Protection policy file from your currently active
   * Workload Protection agent rules, and downloads them as a `.policy` file. This file can then be deployed to
   * your agents to update the policy running in your environment.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public downloadCSMThreatsPolicy( options?: Configuration): Promise<HttpFile> {
    const requestContextPromise = this.requestFactory.downloadCSMThreatsPolicy(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.downloadCSMThreatsPolicy(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific agent rule.
   * 
   * **Note**: This endpoint should only be used for the Government (US1-FED) site.
   * @param param The request object
   */
  public getCloudWorkloadSecurityAgentRule(param: CSMThreatsApiGetCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.getCloudWorkloadSecurityAgentRule(param.agentRuleId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific Workload Protection policy.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public getCSMThreatsAgentPolicy(param: CSMThreatsApiGetCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentPolicyResponse> {
    const requestContextPromise = this.requestFactory.getCSMThreatsAgentPolicy(param.policyId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getCSMThreatsAgentPolicy(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific Workload Protection agent rule.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public getCSMThreatsAgentRule(param: CSMThreatsApiGetCSMThreatsAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.getCSMThreatsAgentRule(param.agentRuleId,param.policyId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getCSMThreatsAgentRule(responseContext);
        });
    });
  }

  /**
   * Get the list of agent rules.
   * 
   * **Note**: This endpoint should only be used for the Government (US1-FED) site.
   * @param param The request object
   */
  public listCloudWorkloadSecurityAgentRules( options?: Configuration): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const requestContextPromise = this.requestFactory.listCloudWorkloadSecurityAgentRules(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listCloudWorkloadSecurityAgentRules(responseContext);
        });
    });
  }

  /**
   * Get the list of Workload Protection policies.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public listCSMThreatsAgentPolicies( options?: Configuration): Promise<CloudWorkloadSecurityAgentPoliciesListResponse> {
    const requestContextPromise = this.requestFactory.listCSMThreatsAgentPolicies(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listCSMThreatsAgentPolicies(responseContext);
        });
    });
  }

  /**
   * Get the list of Workload Protection agent rules.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public listCSMThreatsAgentRules(param: CSMThreatsApiListCSMThreatsAgentRulesRequest = {}, options?: Configuration): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const requestContextPromise = this.requestFactory.listCSMThreatsAgentRules(param.policyId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listCSMThreatsAgentRules(responseContext);
        });
    });
  }

  /**
   * Update a specific agent rule.
   * Returns the agent rule object when the request is successful.
   * 
   * **Note**: This endpoint should only be used for the Government (US1-FED) site.
   * @param param The request object
   */
  public updateCloudWorkloadSecurityAgentRule(param: CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.updateCloudWorkloadSecurityAgentRule(param.agentRuleId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateCloudWorkloadSecurityAgentRule(responseContext);
        });
    });
  }

  /**
   * Update a specific Workload Protection policy.
   * Returns the policy object when the request is successful.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public updateCSMThreatsAgentPolicy(param: CSMThreatsApiUpdateCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateCSMThreatsAgentPolicy(param.policyId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateCSMThreatsAgentPolicy(responseContext);
        });
    });
  }

  /**
   * Update a specific Workload Protection Agent rule.
   * Returns the agent rule object when the request is successful.
   * 
   * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
   * @param param The request object
   */
  public updateCSMThreatsAgentRule(param: CSMThreatsApiUpdateCSMThreatsAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise = this.requestFactory.updateCSMThreatsAgentRule(param.agentRuleId,param.body,param.policyId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateCSMThreatsAgentRule(responseContext);
        });
    });
  }
}