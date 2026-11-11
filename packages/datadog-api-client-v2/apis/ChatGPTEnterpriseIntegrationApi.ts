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
import { ChatGPTEnterpriseIntegrationAccountCreateRequest } from "../models/ChatGPTEnterpriseIntegrationAccountCreateRequest";
import { ChatGPTEnterpriseIntegrationAccountResponse } from "../models/ChatGPTEnterpriseIntegrationAccountResponse";
import { ChatGPTEnterpriseIntegrationAccountsResponse } from "../models/ChatGPTEnterpriseIntegrationAccountsResponse";
import { ChatGPTEnterpriseIntegrationAccountUpdateRequest } from "../models/ChatGPTEnterpriseIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class ChatGPTEnterpriseIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createChatGPTEnterpriseIntegrationAccount(
    body: ChatGPTEnterpriseIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createChatGPTEnterpriseIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.createChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createChatGPTEnterpriseIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createChatGPTEnterpriseIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ChatGPTEnterpriseIntegrationApi.createChatGPTEnterpriseIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ChatGPTEnterpriseIntegrationAccountCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteChatGPTEnterpriseIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.deleteChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteChatGPTEnterpriseIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteChatGPTEnterpriseIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ChatGPTEnterpriseIntegrationApi.deleteChatGPTEnterpriseIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getChatGPTEnterpriseIntegrationAccount'"
    );
    if (
      !_config.unstableOperations["v2.getChatGPTEnterpriseIntegrationAccount"]
    ) {
      throw new Error(
        "Unstable operation 'getChatGPTEnterpriseIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getChatGPTEnterpriseIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ChatGPTEnterpriseIntegrationApi.getChatGPTEnterpriseIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listChatGPTEnterpriseIntegrationAccounts'"
    );
    if (
      !_config.unstableOperations["v2.listChatGPTEnterpriseIntegrationAccounts"]
    ) {
      throw new Error(
        "Unstable operation 'listChatGPTEnterpriseIntegrationAccounts' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ChatGPTEnterpriseIntegrationApi.listChatGPTEnterpriseIntegrationAccounts"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateChatGPTEnterpriseIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateChatGPTEnterpriseIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateChatGPTEnterpriseIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateChatGPTEnterpriseIntegrationAccount"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateChatGPTEnterpriseIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/chatgpt-enterprise/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ChatGPTEnterpriseIntegrationApi.updateChatGPTEnterpriseIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ChatGPTEnterpriseIntegrationAccountUpdateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 422) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      return;
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
   * @params response Response returned by the server for a request to getChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: ChatGPTEnterpriseIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listChatGPTEnterpriseIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listChatGPTEnterpriseIntegrationAccounts(
    response: ResponseContext
  ): Promise<ChatGPTEnterpriseIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChatGPTEnterpriseIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountsResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: ChatGPTEnterpriseIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateChatGPTEnterpriseIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateChatGPTEnterpriseIntegrationAccount(
    response: ResponseContext
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 422) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ChatGPTEnterpriseIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "ChatGPTEnterpriseIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as ChatGPTEnterpriseIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: ChatGPTEnterpriseIntegrationApiRequestFactory,
    responseProcessor?: ChatGPTEnterpriseIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ChatGPTEnterpriseIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new ChatGPTEnterpriseIntegrationApiResponseProcessor(configuration);
  }

  /**
   * Create a ChatGPT Enterprise integration account.
   * @param param The request object
   */
  public createChatGPTEnterpriseIntegrationAccount(
    param: ChatGPTEnterpriseIntegrationApiCreateChatGPTEnterpriseIntegrationAccountRequest,
    options?: Configuration
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createChatGPTEnterpriseIntegrationAccount(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createChatGPTEnterpriseIntegrationAccount(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteChatGPTEnterpriseIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteChatGPTEnterpriseIntegrationAccount(
            responseContext
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
    options?: Configuration
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getChatGPTEnterpriseIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getChatGPTEnterpriseIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List ChatGPT Enterprise integration accounts.
   * @param param The request object
   */
  public listChatGPTEnterpriseIntegrationAccounts(
    options?: Configuration
  ): Promise<ChatGPTEnterpriseIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listChatGPTEnterpriseIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listChatGPTEnterpriseIntegrationAccounts(
            responseContext
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
    options?: Configuration
  ): Promise<ChatGPTEnterpriseIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateChatGPTEnterpriseIntegrationAccount(
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateChatGPTEnterpriseIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
