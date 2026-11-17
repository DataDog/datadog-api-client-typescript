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
import { ChatGPTEnterpriseIntegrationAccountCreateRequest } from "./models/ChatGPTEnterpriseIntegrationAccountCreateRequest";
import { ChatGPTEnterpriseIntegrationAccountResponse } from "./models/ChatGPTEnterpriseIntegrationAccountResponse";
import { ChatGPTEnterpriseIntegrationAccountsResponse } from "./models/ChatGPTEnterpriseIntegrationAccountsResponse";
import { ChatGPTEnterpriseIntegrationAccountUpdateRequest } from "./models/ChatGPTEnterpriseIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class ChatGPTEnterpriseIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "chat-gpt-enterprise-integration",
        version,
      );
    }
  }
  public async createChatGPTEnterpriseIntegrationAccount(
    body: ChatGPTEnterpriseIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ChatGPTEnterpriseIntegrationApi.v2.createChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createChatGPTEnterpriseIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ChatGPTEnterpriseIntegrationApi.v2.createChatGPTEnterpriseIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createChatGPTEnterpriseIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ChatGPTEnterpriseIntegrationApi.v2.createChatGPTEnterpriseIntegrationAccount",
      ChatGPTEnterpriseIntegrationApi.operationServers,
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
        "ChatGPTEnterpriseIntegrationAccountCreateRequest",
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

  public async deleteChatGPTEnterpriseIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ChatGPTEnterpriseIntegrationApi.v2.deleteChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteChatGPTEnterpriseIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ChatGPTEnterpriseIntegrationApi.v2.deleteChatGPTEnterpriseIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteChatGPTEnterpriseIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ChatGPTEnterpriseIntegrationApi.v2.deleteChatGPTEnterpriseIntegrationAccount",
      ChatGPTEnterpriseIntegrationApi.operationServers,
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

  public async getChatGPTEnterpriseIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ChatGPTEnterpriseIntegrationApi.v2.getChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getChatGPTEnterpriseIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ChatGPTEnterpriseIntegrationApi.v2.getChatGPTEnterpriseIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getChatGPTEnterpriseIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ChatGPTEnterpriseIntegrationApi.v2.getChatGPTEnterpriseIntegrationAccount",
      ChatGPTEnterpriseIntegrationApi.operationServers,
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

  public async listChatGPTEnterpriseIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ChatGPTEnterpriseIntegrationApi.v2.listChatGPTEnterpriseIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listChatGPTEnterpriseIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['ChatGPTEnterpriseIntegrationApi.v2.listChatGPTEnterpriseIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ChatGPTEnterpriseIntegrationApi.v2.listChatGPTEnterpriseIntegrationAccounts",
      ChatGPTEnterpriseIntegrationApi.operationServers,
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

  public async updateChatGPTEnterpriseIntegrationAccount(
    accountId: string,
    body: ChatGPTEnterpriseIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ChatGPTEnterpriseIntegrationApi.v2.updateChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateChatGPTEnterpriseIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ChatGPTEnterpriseIntegrationApi.v2.updateChatGPTEnterpriseIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateChatGPTEnterpriseIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateChatGPTEnterpriseIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ChatGPTEnterpriseIntegrationApi.v2.updateChatGPTEnterpriseIntegrationAccount",
      ChatGPTEnterpriseIntegrationApi.operationServers,
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
        "ChatGPTEnterpriseIntegrationAccountUpdateRequest",
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

export class ChatGPTEnterpriseIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext,
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountResponse",
      ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
    if (response.httpStatusCode === 422) {
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
      const body: ChatGPTEnterpriseIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountResponse",
        "",
      ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to getChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext,
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountResponse",
      ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
      const body: ChatGPTEnterpriseIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountResponse",
        "",
      ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listChatGPTEnterpriseIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listChatGPTEnterpriseIntegrationAccounts(
    response: ResponseContext,
  ): Promise<ChatGPTEnterpriseIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ChatGPTEnterpriseIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountsResponse",
      ) as ChatGPTEnterpriseIntegrationAccountsResponse;
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
      const body: ChatGPTEnterpriseIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountsResponse",
        "",
      ) as ChatGPTEnterpriseIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext,
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountResponse",
      ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
    if (response.httpStatusCode === 422) {
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
      const body: ChatGPTEnterpriseIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ChatGPTEnterpriseIntegrationAccountResponse",
        "",
      ) as ChatGPTEnterpriseIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ChatGPTEnterpriseIntegrationApiCreateChatGPTEnterpriseIntegrationAccountRequest {
  /**
   * @type ChatGPTEnterpriseIntegrationAccountCreateRequest
   */
  body: ChatGPTEnterpriseIntegrationAccountCreateRequest;
}

export interface ChatGPTEnterpriseIntegrationApiDeleteChatGPTEnterpriseIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ChatGPTEnterpriseIntegrationApiGetChatGPTEnterpriseIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ChatGPTEnterpriseIntegrationApiUpdateChatGPTEnterpriseIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type ChatGPTEnterpriseIntegrationAccountUpdateRequest
   */
  body: ChatGPTEnterpriseIntegrationAccountUpdateRequest;
}

export class ChatGPTEnterpriseIntegrationApi {
  private requestFactory: ChatGPTEnterpriseIntegrationApiRequestFactory;
  private responseProcessor: ChatGPTEnterpriseIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ChatGPTEnterpriseIntegrationApiRequestFactory,
    responseProcessor?: ChatGPTEnterpriseIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ChatGPTEnterpriseIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new ChatGPTEnterpriseIntegrationApiResponseProcessor();
  }

  /**
   * Create a ChatGPT Enterprise integration account.
   * @param param The request object
   */
  public createChatGPTEnterpriseIntegrationAccount(
    param: ChatGPTEnterpriseIntegrationApiCreateChatGPTEnterpriseIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createChatGPTEnterpriseIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createChatGPTEnterpriseIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a ChatGPT Enterprise integration account.
   * @param param The request object
   */
  public deleteChatGPTEnterpriseIntegrationAccount(
    param: ChatGPTEnterpriseIntegrationApiDeleteChatGPTEnterpriseIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteChatGPTEnterpriseIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteChatGPTEnterpriseIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a ChatGPT Enterprise integration account.
   * @param param The request object
   */
  public getChatGPTEnterpriseIntegrationAccount(
    param: ChatGPTEnterpriseIntegrationApiGetChatGPTEnterpriseIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getChatGPTEnterpriseIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getChatGPTEnterpriseIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List ChatGPT Enterprise integration accounts.
   * @param param The request object
   */
  public listChatGPTEnterpriseIntegrationAccounts(
    options?: Configuration,
  ): Promise<ChatGPTEnterpriseIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listChatGPTEnterpriseIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listChatGPTEnterpriseIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a ChatGPT Enterprise integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateChatGPTEnterpriseIntegrationAccount(
    param: ChatGPTEnterpriseIntegrationApiUpdateChatGPTEnterpriseIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateChatGPTEnterpriseIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateChatGPTEnterpriseIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
