import {
  BaseAPIRequestFactory,
  RequiredError,
  deserializeError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { CloudWorkloadSecurityAgentRuleCreateRequest } from "../models/CloudWorkloadSecurityAgentRuleCreateRequest";
import { CloudWorkloadSecurityAgentRuleResponse } from "../models/CloudWorkloadSecurityAgentRuleResponse";
import { CloudWorkloadSecurityAgentRulesListResponse } from "../models/CloudWorkloadSecurityAgentRulesListResponse";
import { CloudWorkloadSecurityAgentRuleUpdateRequest } from "../models/CloudWorkloadSecurityAgentRuleUpdateRequest";

export class CloudWorkloadSecurityApiRequestFactory extends BaseAPIRequestFactory {
  public async createCloudWorkloadSecurityAgentRule(
    body: CloudWorkloadSecurityAgentRuleCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCloudWorkloadSecurityAgentRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/cloud_workload_security/agent_rules";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudWorkloadSecurityApi.createCloudWorkloadSecurityAgentRule"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = "application/json";
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "CloudWorkloadSecurityAgentRuleCreateRequest",
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

  public async deleteCloudWorkloadSecurityAgentRule(
    agentRuleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError(
        "agentRuleId",
        "deleteCloudWorkloadSecurityAgentRule"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace(
        "{agent_rule_id}",
        encodeURIComponent(String(agentRuleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudWorkloadSecurityApi.deleteCloudWorkloadSecurityAgentRule"
      )
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/cloud_workload/policy/download";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudWorkloadSecurityApi.downloadCloudWorkloadPolicyFile")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/yaml, application/json"
    );
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError(
        "agentRuleId",
        "getCloudWorkloadSecurityAgentRule"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace(
        "{agent_rule_id}",
        encodeURIComponent(String(agentRuleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudWorkloadSecurityApi.getCloudWorkloadSecurityAgentRule"
      )
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/cloud_workload_security/agent_rules";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudWorkloadSecurityApi.listCloudWorkloadSecurityAgentRules"
      )
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'agentRuleId' is not null or undefined
    if (agentRuleId === null || agentRuleId === undefined) {
      throw new RequiredError(
        "agentRuleId",
        "updateCloudWorkloadSecurityAgentRule"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCloudWorkloadSecurityAgentRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace(
        "{agent_rule_id}",
        encodeURIComponent(String(agentRuleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudWorkloadSecurityApi.updateCloudWorkloadSecurityAgentRule"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = "application/json";
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "CloudWorkloadSecurityAgentRuleUpdateRequest",
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
}

export class CloudWorkloadSecurityApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects.
   *
   * @params response Response returned by the server for a request to createCloudWorkloadSecurityAgentRule.
   * @throws ApiException if the response code is not a successful one.
   */
  public async createCloudWorkloadSecurityAgentRule(
    response: ResponseContext
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CloudWorkloadSecurityAgentRuleResponse"
        ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 429
    ) {
      await deserializeError(
        ObjectSerializer,
        "APIErrorResponse",
        response,
        contentType
      );
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects.
   *
   * @params response Response returned by the server for a request to deleteCloudWorkloadSecurityAgentRule.
   * @throws ApiException if the response code is not a successful one.
   */
  public async deleteCloudWorkloadSecurityAgentRule(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      await deserializeError(
        ObjectSerializer,
        "APIErrorResponse",
        response,
        contentType
      );
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects.
   *
   * @params response Response returned by the server for a request to downloadCloudWorkloadPolicyFile.
   * @throws ApiException if the response code is not a successful one.
   */
  public async downloadCloudWorkloadPolicyFile(
    response: ResponseContext
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
      await deserializeError(
        ObjectSerializer,
        "APIErrorResponse",
        response,
        contentType
      );
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects.
   *
   * @params response Response returned by the server for a request to getCloudWorkloadSecurityAgentRule.
   * @throws ApiException if the response code is not a successful one.
   */
  public async getCloudWorkloadSecurityAgentRule(
    response: ResponseContext
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CloudWorkloadSecurityAgentRuleResponse"
        ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      await deserializeError(
        ObjectSerializer,
        "APIErrorResponse",
        response,
        contentType
      );
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects.
   *
   * @params response Response returned by the server for a request to listCloudWorkloadSecurityAgentRules.
   * @throws ApiException if the response code is not a successful one.
   */
  public async listCloudWorkloadSecurityAgentRules(
    response: ResponseContext
  ): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRulesListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CloudWorkloadSecurityAgentRulesListResponse"
        ) as CloudWorkloadSecurityAgentRulesListResponse;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
      await deserializeError(
        ObjectSerializer,
        "APIErrorResponse",
        response,
        contentType
      );
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects.
   *
   * @params response Response returned by the server for a request to updateCloudWorkloadSecurityAgentRule.
   * @throws ApiException if the response code is not a successful one.
   */
  public async updateCloudWorkloadSecurityAgentRule(
    response: ResponseContext
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudWorkloadSecurityAgentRuleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CloudWorkloadSecurityAgentRuleResponse"
        ) as CloudWorkloadSecurityAgentRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 429
    ) {
      await deserializeError(
        ObjectSerializer,
        "APIErrorResponse",
        response,
        contentType
      );
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CloudWorkloadSecurityApiCreateCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The definition of the new Agent rule.
   * @type CloudWorkloadSecurityAgentRuleCreateRequest
   */
  body: CloudWorkloadSecurityAgentRuleCreateRequest;
}

export interface CloudWorkloadSecurityApiDeleteCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
}

export interface CloudWorkloadSecurityApiGetCloudWorkloadSecurityAgentRuleRequest {
  /**
   * The ID of the Agent rule.
   * @type string
   */
  agentRuleId: string;
}

export interface CloudWorkloadSecurityApiUpdateCloudWorkloadSecurityAgentRuleRequest {
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

export class CloudWorkloadSecurityApi {
  private requestFactory: CloudWorkloadSecurityApiRequestFactory;
  private responseProcessor: CloudWorkloadSecurityApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CloudWorkloadSecurityApiRequestFactory,
    responseProcessor?: CloudWorkloadSecurityApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new CloudWorkloadSecurityApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CloudWorkloadSecurityApiResponseProcessor();
  }

  /**
   * Create a new Agent rule with the given parameters.
   * @param param The request object
   */
  public createCloudWorkloadSecurityAgentRule(
    param: CloudWorkloadSecurityApiCreateCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createCloudWorkloadSecurityAgentRule(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCloudWorkloadSecurityAgentRule(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific Agent rule.
   * @param param The request object
   */
  public deleteCloudWorkloadSecurityAgentRule(
    param: CloudWorkloadSecurityApiDeleteCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCloudWorkloadSecurityAgentRule(
        param.agentRuleId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCloudWorkloadSecurityAgentRule(
            responseContext
          );
        });
    });
  }

  /**
   * The download endpoint generates a Cloud Workload Security policy file from your currently active
   * Cloud Workload Security rules, and downloads them as a .policy file. This file can then be deployed to
   * your Agents to update the policy running in your environment.
   * @param param The request object
   */
  public downloadCloudWorkloadPolicyFile(
    options?: Configuration
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.downloadCloudWorkloadPolicyFile(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.downloadCloudWorkloadPolicyFile(
            responseContext
          );
        });
    });
  }

  /**
   * Get the details of a specific Agent rule.
   * @param param The request object
   */
  public getCloudWorkloadSecurityAgentRule(
    param: CloudWorkloadSecurityApiGetCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getCloudWorkloadSecurityAgentRule(
        param.agentRuleId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCloudWorkloadSecurityAgentRule(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of Agent rules.
   * @param param The request object
   */
  public listCloudWorkloadSecurityAgentRules(
    options?: Configuration
  ): Promise<CloudWorkloadSecurityAgentRulesListResponse> {
    const requestContextPromise =
      this.requestFactory.listCloudWorkloadSecurityAgentRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCloudWorkloadSecurityAgentRules(
            responseContext
          );
        });
    });
  }

  /**
   * Update a specific Agent rule.
   * Returns the Agent rule object when the request is successful.
   * @param param The request object
   */
  public updateCloudWorkloadSecurityAgentRule(
    param: CloudWorkloadSecurityApiUpdateCloudWorkloadSecurityAgentRuleRequest,
    options?: Configuration
  ): Promise<CloudWorkloadSecurityAgentRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateCloudWorkloadSecurityAgentRule(
        param.agentRuleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCloudWorkloadSecurityAgentRule(
            responseContext
          );
        });
    });
  }
}
