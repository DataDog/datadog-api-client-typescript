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
import { OpenAILLMEvaluationsIntegrationAccountCreateRequest } from "./models/OpenAILLMEvaluationsIntegrationAccountCreateRequest";
import { OpenAILLMEvaluationsIntegrationAccountResponse } from "./models/OpenAILLMEvaluationsIntegrationAccountResponse";
import { OpenAILLMEvaluationsIntegrationAccountsResponse } from "./models/OpenAILLMEvaluationsIntegrationAccountsResponse";
import { OpenAILLMEvaluationsIntegrationAccountUpdateRequest } from "./models/OpenAILLMEvaluationsIntegrationAccountUpdateRequest";
import { version } from "../version";

export class OpenAILLMEvaluationsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "open-ai-llm-evaluations-integration",
        version,
      );
    }
  }
  public async createOpenAILLMEvaluationsIntegrationAccount(
    body: OpenAILLMEvaluationsIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAILLMEvaluationsIntegrationApi.v2.createOpenAILLMEvaluationsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createOpenAILLMEvaluationsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAILLMEvaluationsIntegrationApi.v2.createOpenAILLMEvaluationsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createOpenAILLMEvaluationsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-llm-evaluations/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAILLMEvaluationsIntegrationApi.v2.createOpenAILLMEvaluationsIntegrationAccount",
      OpenAILLMEvaluationsIntegrationApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountCreateRequest",
        "",
      ),
      contentType,
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

  public async deleteOpenAILLMEvaluationsIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAILLMEvaluationsIntegrationApi.v2.deleteOpenAILLMEvaluationsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteOpenAILLMEvaluationsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAILLMEvaluationsIntegrationApi.v2.deleteOpenAILLMEvaluationsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteOpenAILLMEvaluationsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-llm-evaluations/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAILLMEvaluationsIntegrationApi.v2.deleteOpenAILLMEvaluationsIntegrationAccount",
      OpenAILLMEvaluationsIntegrationApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getOpenAILLMEvaluationsIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAILLMEvaluationsIntegrationApi.v2.getOpenAILLMEvaluationsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getOpenAILLMEvaluationsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAILLMEvaluationsIntegrationApi.v2.getOpenAILLMEvaluationsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getOpenAILLMEvaluationsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-llm-evaluations/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAILLMEvaluationsIntegrationApi.v2.getOpenAILLMEvaluationsIntegrationAccount",
      OpenAILLMEvaluationsIntegrationApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listOpenAILLMEvaluationsIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAILLMEvaluationsIntegrationApi.v2.listOpenAILLMEvaluationsIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listOpenAILLMEvaluationsIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['OpenAILLMEvaluationsIntegrationApi.v2.listOpenAILLMEvaluationsIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-llm-evaluations/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAILLMEvaluationsIntegrationApi.v2.listOpenAILLMEvaluationsIntegrationAccounts",
      OpenAILLMEvaluationsIntegrationApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateOpenAILLMEvaluationsIntegrationAccount(
    accountId: string,
    body: OpenAILLMEvaluationsIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAILLMEvaluationsIntegrationApi.v2.updateOpenAILLMEvaluationsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateOpenAILLMEvaluationsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAILLMEvaluationsIntegrationApi.v2.updateOpenAILLMEvaluationsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateOpenAILLMEvaluationsIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateOpenAILLMEvaluationsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-llm-evaluations/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAILLMEvaluationsIntegrationApi.v2.updateOpenAILLMEvaluationsIntegrationAccount",
      OpenAILLMEvaluationsIntegrationApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountUpdateRequest",
        "",
      ),
      contentType,
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
}

export class OpenAILLMEvaluationsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOpenAILLMEvaluationsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpenAILLMEvaluationsIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OpenAILLMEvaluationsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountResponse",
      ) as OpenAILLMEvaluationsIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
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
      const body: OpenAILLMEvaluationsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountResponse",
        "",
      ) as OpenAILLMEvaluationsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteOpenAILLMEvaluationsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpenAILLMEvaluationsIntegrationAccount(
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
   * @params response Response returned by the server for a request to getOpenAILLMEvaluationsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOpenAILLMEvaluationsIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAILLMEvaluationsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountResponse",
      ) as OpenAILLMEvaluationsIntegrationAccountResponse;
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
      const body: OpenAILLMEvaluationsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountResponse",
        "",
      ) as OpenAILLMEvaluationsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listOpenAILLMEvaluationsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOpenAILLMEvaluationsIntegrationAccounts(
    response: ResponseContext,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAILLMEvaluationsIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountsResponse",
      ) as OpenAILLMEvaluationsIntegrationAccountsResponse;
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
      const body: OpenAILLMEvaluationsIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountsResponse",
        "",
      ) as OpenAILLMEvaluationsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateOpenAILLMEvaluationsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpenAILLMEvaluationsIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAILLMEvaluationsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountResponse",
      ) as OpenAILLMEvaluationsIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
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
      const body: OpenAILLMEvaluationsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAILLMEvaluationsIntegrationAccountResponse",
        "",
      ) as OpenAILLMEvaluationsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OpenAILLMEvaluationsIntegrationApiCreateOpenAILLMEvaluationsIntegrationAccountRequest {
  /**
   * @type OpenAILLMEvaluationsIntegrationAccountCreateRequest
   */
  body: OpenAILLMEvaluationsIntegrationAccountCreateRequest;
}

export interface OpenAILLMEvaluationsIntegrationApiDeleteOpenAILLMEvaluationsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAILLMEvaluationsIntegrationApiGetOpenAILLMEvaluationsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAILLMEvaluationsIntegrationApiUpdateOpenAILLMEvaluationsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type OpenAILLMEvaluationsIntegrationAccountUpdateRequest
   */
  body: OpenAILLMEvaluationsIntegrationAccountUpdateRequest;
}

export class OpenAILLMEvaluationsIntegrationApi {
  private requestFactory: OpenAILLMEvaluationsIntegrationApiRequestFactory;
  private responseProcessor: OpenAILLMEvaluationsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OpenAILLMEvaluationsIntegrationApiRequestFactory,
    responseProcessor?: OpenAILLMEvaluationsIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new OpenAILLMEvaluationsIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new OpenAILLMEvaluationsIntegrationApiResponseProcessor();
  }

  /**
   * Create an OpenAI LLM Evaluations integration account.
   * @param param The request object
   */
  public createOpenAILLMEvaluationsIntegrationAccount(
    param: OpenAILLMEvaluationsIntegrationApiCreateOpenAILLMEvaluationsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createOpenAILLMEvaluationsIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpenAILLMEvaluationsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an OpenAI LLM Evaluations integration account.
   * @param param The request object
   */
  public deleteOpenAILLMEvaluationsIntegrationAccount(
    param: OpenAILLMEvaluationsIntegrationApiDeleteOpenAILLMEvaluationsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOpenAILLMEvaluationsIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpenAILLMEvaluationsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get an OpenAI LLM Evaluations integration account.
   * @param param The request object
   */
  public getOpenAILLMEvaluationsIntegrationAccount(
    param: OpenAILLMEvaluationsIntegrationApiGetOpenAILLMEvaluationsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getOpenAILLMEvaluationsIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOpenAILLMEvaluationsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List OpenAI LLM Evaluations integration accounts.
   * @param param The request object
   */
  public listOpenAILLMEvaluationsIntegrationAccounts(
    options?: Configuration,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listOpenAILLMEvaluationsIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOpenAILLMEvaluationsIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an OpenAI LLM Evaluations integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateOpenAILLMEvaluationsIntegrationAccount(
    param: OpenAILLMEvaluationsIntegrationApiUpdateOpenAILLMEvaluationsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAILLMEvaluationsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateOpenAILLMEvaluationsIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpenAILLMEvaluationsIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
