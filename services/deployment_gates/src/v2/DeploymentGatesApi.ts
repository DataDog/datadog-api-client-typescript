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
import { CreateDeploymentGateParams } from "./models/CreateDeploymentGateParams";
import { CreateDeploymentRuleParams } from "./models/CreateDeploymentRuleParams";
import { DeploymentGateResponse } from "./models/DeploymentGateResponse";
import { DeploymentRuleResponse } from "./models/DeploymentRuleResponse";
import { HTTPCDGatesBadRequestResponse } from "./models/HTTPCDGatesBadRequestResponse";
import { HTTPCDGatesNotFoundResponse } from "./models/HTTPCDGatesNotFoundResponse";
import { HTTPCDRulesNotFoundResponse } from "./models/HTTPCDRulesNotFoundResponse";
import { HTTPCIAppErrors } from "./models/HTTPCIAppErrors";
import { UpdateDeploymentGateParams } from "./models/UpdateDeploymentGateParams";
import { UpdateDeploymentRuleParams } from "./models/UpdateDeploymentRuleParams";
import { version } from "../version";

export class DeploymentGatesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("deployment-gates", version);
    }
  }
  public async createDeploymentGate(
    body: CreateDeploymentGateParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.createDeploymentGate"]
    ) {
      throw new Error(
        "Unstable operation 'createDeploymentGate' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.createDeploymentGate'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDeploymentGate");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.createDeploymentGate",
      DeploymentGatesApi.operationServers,
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
      serialize(body, TypingInfo, "CreateDeploymentGateParams", ""),
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

  public async createDeploymentRule(
    gateId: string,
    body: CreateDeploymentRuleParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.createDeploymentRule"]
    ) {
      throw new Error(
        "Unstable operation 'createDeploymentRule' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.createDeploymentRule'] = true`",
      );
    }

    // verify required parameter 'gateId' is not null or undefined
    if (gateId === null || gateId === undefined) {
      throw new RequiredError("gateId", "createDeploymentRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDeploymentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{gate_id}/rules".replace(
      "{gate_id}",
      encodeURIComponent(String(gateId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.createDeploymentRule",
      DeploymentGatesApi.operationServers,
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
      serialize(body, TypingInfo, "CreateDeploymentRuleParams", ""),
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

  public async deleteDeploymentGate(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.deleteDeploymentGate"]
    ) {
      throw new Error(
        "Unstable operation 'deleteDeploymentGate' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.deleteDeploymentGate'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteDeploymentGate");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.deleteDeploymentGate",
      DeploymentGatesApi.operationServers,
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

  public async deleteDeploymentRule(
    gateId: string,
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.deleteDeploymentRule"]
    ) {
      throw new Error(
        "Unstable operation 'deleteDeploymentRule' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.deleteDeploymentRule'] = true`",
      );
    }

    // verify required parameter 'gateId' is not null or undefined
    if (gateId === null || gateId === undefined) {
      throw new RequiredError("gateId", "deleteDeploymentRule");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteDeploymentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{gate_id}/rules/{id}"
      .replace("{gate_id}", encodeURIComponent(String(gateId)))
      .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.deleteDeploymentRule",
      DeploymentGatesApi.operationServers,
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

  public async getDeploymentGate(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.getDeploymentGate"]
    ) {
      throw new Error(
        "Unstable operation 'getDeploymentGate' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.getDeploymentGate'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getDeploymentGate");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.getDeploymentGate",
      DeploymentGatesApi.operationServers,
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

  public async getDeploymentRule(
    gateId: string,
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.getDeploymentRule"]
    ) {
      throw new Error(
        "Unstable operation 'getDeploymentRule' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.getDeploymentRule'] = true`",
      );
    }

    // verify required parameter 'gateId' is not null or undefined
    if (gateId === null || gateId === undefined) {
      throw new RequiredError("gateId", "getDeploymentRule");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getDeploymentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{gate_id}/rules/{id}"
      .replace("{gate_id}", encodeURIComponent(String(gateId)))
      .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.getDeploymentRule",
      DeploymentGatesApi.operationServers,
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

  public async updateDeploymentGate(
    id: string,
    body: UpdateDeploymentGateParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.updateDeploymentGate"]
    ) {
      throw new Error(
        "Unstable operation 'updateDeploymentGate' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.updateDeploymentGate'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateDeploymentGate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDeploymentGate");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.updateDeploymentGate",
      DeploymentGatesApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateDeploymentGateParams", ""),
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

  public async updateDeploymentRule(
    gateId: string,
    id: string,
    body: UpdateDeploymentRuleParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["DeploymentGatesApi.v2.updateDeploymentRule"]
    ) {
      throw new Error(
        "Unstable operation 'updateDeploymentRule' is disabled. Enable it by setting `configuration.unstableOperations['DeploymentGatesApi.v2.updateDeploymentRule'] = true`",
      );
    }

    // verify required parameter 'gateId' is not null or undefined
    if (gateId === null || gateId === undefined) {
      throw new RequiredError("gateId", "updateDeploymentRule");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateDeploymentRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDeploymentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/deployment_gates/{gate_id}/rules/{id}"
      .replace("{gate_id}", encodeURIComponent(String(gateId)))
      .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DeploymentGatesApi.v2.updateDeploymentRule",
      DeploymentGatesApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateDeploymentRuleParams", ""),
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

export class DeploymentGatesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDeploymentGate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDeploymentGate(
    response: ResponseContext,
  ): Promise<DeploymentGateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeploymentGateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentGateResponse",
      ) as DeploymentGateResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeploymentGateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentGateResponse",
        "",
      ) as DeploymentGateResponse;
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
   * @params response Response returned by the server for a request to createDeploymentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDeploymentRule(
    response: ResponseContext,
  ): Promise<DeploymentRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeploymentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentRuleResponse",
      ) as DeploymentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeploymentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentRuleResponse",
        "",
      ) as DeploymentRuleResponse;
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
   * @params response Response returned by the server for a request to deleteDeploymentGate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDeploymentGate(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesNotFoundResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesNotFoundResponse",
        ) as HTTPCDGatesNotFoundResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesNotFoundResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesNotFoundResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to deleteDeploymentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDeploymentRule(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesNotFoundResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesNotFoundResponse",
        ) as HTTPCDGatesNotFoundResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesNotFoundResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesNotFoundResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to getDeploymentGate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDeploymentGate(
    response: ResponseContext,
  ): Promise<DeploymentGateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeploymentGateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentGateResponse",
      ) as DeploymentGateResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesNotFoundResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesNotFoundResponse",
        ) as HTTPCDGatesNotFoundResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesNotFoundResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesNotFoundResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeploymentGateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentGateResponse",
        "",
      ) as DeploymentGateResponse;
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
   * @params response Response returned by the server for a request to getDeploymentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDeploymentRule(
    response: ResponseContext,
  ): Promise<DeploymentRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeploymentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentRuleResponse",
      ) as DeploymentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDRulesNotFoundResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDRulesNotFoundResponse",
        ) as HTTPCDRulesNotFoundResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDRulesNotFoundResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDRulesNotFoundResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeploymentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentRuleResponse",
        "",
      ) as DeploymentRuleResponse;
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
   * @params response Response returned by the server for a request to updateDeploymentGate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDeploymentGate(
    response: ResponseContext,
  ): Promise<DeploymentGateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeploymentGateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentGateResponse",
      ) as DeploymentGateResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesNotFoundResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesNotFoundResponse",
        ) as HTTPCDGatesNotFoundResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesNotFoundResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesNotFoundResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeploymentGateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentGateResponse",
        "",
      ) as DeploymentGateResponse;
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
   * @params response Response returned by the server for a request to updateDeploymentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDeploymentRule(
    response: ResponseContext,
  ): Promise<DeploymentRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeploymentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentRuleResponse",
      ) as DeploymentRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDGatesBadRequestResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDGatesBadRequestResponse",
        ) as HTTPCDGatesBadRequestResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDGatesBadRequestResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDGatesBadRequestResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCDRulesNotFoundResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCDRulesNotFoundResponse",
        ) as HTTPCDRulesNotFoundResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCDRulesNotFoundResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCDRulesNotFoundResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 500) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: HTTPCIAppErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "HTTPCIAppErrors",
        ) as HTTPCIAppErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPCIAppErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<HTTPCIAppErrors>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeploymentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeploymentRuleResponse",
        "",
      ) as DeploymentRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DeploymentGatesApiCreateDeploymentGateRequest {
  /**
   * @type CreateDeploymentGateParams
   */
  body: CreateDeploymentGateParams;
}

export interface DeploymentGatesApiCreateDeploymentRuleRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  gateId: string;
  /**
   * @type CreateDeploymentRuleParams
   */
  body: CreateDeploymentRuleParams;
}

export interface DeploymentGatesApiDeleteDeploymentGateRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  id: string;
}

export interface DeploymentGatesApiDeleteDeploymentRuleRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  gateId: string;
  /**
   * The ID of the deployment rule.
   * @type string
   */
  id: string;
}

export interface DeploymentGatesApiGetDeploymentGateRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  id: string;
}

export interface DeploymentGatesApiGetDeploymentRuleRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  gateId: string;
  /**
   * The ID of the deployment rule.
   * @type string
   */
  id: string;
}

export interface DeploymentGatesApiUpdateDeploymentGateRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  id: string;
  /**
   * @type UpdateDeploymentGateParams
   */
  body: UpdateDeploymentGateParams;
}

export interface DeploymentGatesApiUpdateDeploymentRuleRequest {
  /**
   * The ID of the deployment gate.
   * @type string
   */
  gateId: string;
  /**
   * The ID of the deployment rule.
   * @type string
   */
  id: string;
  /**
   * @type UpdateDeploymentRuleParams
   */
  body: UpdateDeploymentRuleParams;
}

export class DeploymentGatesApi {
  private requestFactory: DeploymentGatesApiRequestFactory;
  private responseProcessor: DeploymentGatesApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DeploymentGatesApiRequestFactory,
    responseProcessor?: DeploymentGatesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DeploymentGatesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DeploymentGatesApiResponseProcessor();
  }

  /**
   * Endpoint to create a deployment gate.
   * @param param The request object
   */
  public createDeploymentGate(
    param: DeploymentGatesApiCreateDeploymentGateRequest,
    options?: Configuration,
  ): Promise<DeploymentGateResponse> {
    const requestContextPromise = this.requestFactory.createDeploymentGate(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDeploymentGate(responseContext);
        });
    });
  }

  /**
   * Endpoint to create a deployment rule. A gate for the rule must already exist.
   * @param param The request object
   */
  public createDeploymentRule(
    param: DeploymentGatesApiCreateDeploymentRuleRequest,
    options?: Configuration,
  ): Promise<DeploymentRuleResponse> {
    const requestContextPromise = this.requestFactory.createDeploymentRule(
      param.gateId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDeploymentRule(responseContext);
        });
    });
  }

  /**
   * Endpoint to delete a deployment gate. Rules associated with the gate are also deleted.
   * @param param The request object
   */
  public deleteDeploymentGate(
    param: DeploymentGatesApiDeleteDeploymentGateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDeploymentGate(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDeploymentGate(responseContext);
        });
    });
  }

  /**
   * Endpoint to delete a deployment rule.
   * @param param The request object
   */
  public deleteDeploymentRule(
    param: DeploymentGatesApiDeleteDeploymentRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDeploymentRule(
      param.gateId,
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDeploymentRule(responseContext);
        });
    });
  }

  /**
   * Endpoint to get a deployment gate.
   * @param param The request object
   */
  public getDeploymentGate(
    param: DeploymentGatesApiGetDeploymentGateRequest,
    options?: Configuration,
  ): Promise<DeploymentGateResponse> {
    const requestContextPromise = this.requestFactory.getDeploymentGate(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDeploymentGate(responseContext);
        });
    });
  }

  /**
   * Endpoint to get a deployment rule.
   * @param param The request object
   */
  public getDeploymentRule(
    param: DeploymentGatesApiGetDeploymentRuleRequest,
    options?: Configuration,
  ): Promise<DeploymentRuleResponse> {
    const requestContextPromise = this.requestFactory.getDeploymentRule(
      param.gateId,
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDeploymentRule(responseContext);
        });
    });
  }

  /**
   * Endpoint to update a deployment gate.
   * @param param The request object
   */
  public updateDeploymentGate(
    param: DeploymentGatesApiUpdateDeploymentGateRequest,
    options?: Configuration,
  ): Promise<DeploymentGateResponse> {
    const requestContextPromise = this.requestFactory.updateDeploymentGate(
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDeploymentGate(responseContext);
        });
    });
  }

  /**
   * Endpoint to update a deployment rule.
   * @param param The request object
   */
  public updateDeploymentRule(
    param: DeploymentGatesApiUpdateDeploymentRuleRequest,
    options?: Configuration,
  ): Promise<DeploymentRuleResponse> {
    const requestContextPromise = this.requestFactory.updateDeploymentRule(
      param.gateId,
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDeploymentRule(responseContext);
        });
    });
  }
}
