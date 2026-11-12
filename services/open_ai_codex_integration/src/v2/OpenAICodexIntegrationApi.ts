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
import { OpenAICodexIntegrationAccountCreateRequest } from "./models/OpenAICodexIntegrationAccountCreateRequest";
import { OpenAICodexIntegrationAccountResponse } from "./models/OpenAICodexIntegrationAccountResponse";
import { OpenAICodexIntegrationAccountsResponse } from "./models/OpenAICodexIntegrationAccountsResponse";
import { OpenAICodexIntegrationAccountUpdateRequest } from "./models/OpenAICodexIntegrationAccountUpdateRequest";
import { version } from "../version";

export class OpenAICodexIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("open-ai-codex-integration", version);
    }
  }
  public async createOpenAICodexIntegrationAccount(
    body: OpenAICodexIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAICodexIntegrationApi.v2.createOpenAICodexIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createOpenAICodexIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAICodexIntegrationApi.v2.createOpenAICodexIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOpenAICodexIntegrationAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/openai-codex/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAICodexIntegrationApi.v2.createOpenAICodexIntegrationAccount",
      OpenAICodexIntegrationApi.operationServers,
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
        "OpenAICodexIntegrationAccountCreateRequest",
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

  public async deleteOpenAICodexIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAICodexIntegrationApi.v2.deleteOpenAICodexIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteOpenAICodexIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAICodexIntegrationApi.v2.deleteOpenAICodexIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteOpenAICodexIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-codex/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAICodexIntegrationApi.v2.deleteOpenAICodexIntegrationAccount",
      OpenAICodexIntegrationApi.operationServers,
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

  public async getOpenAICodexIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAICodexIntegrationApi.v2.getOpenAICodexIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getOpenAICodexIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAICodexIntegrationApi.v2.getOpenAICodexIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getOpenAICodexIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-codex/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAICodexIntegrationApi.v2.getOpenAICodexIntegrationAccount",
      OpenAICodexIntegrationApi.operationServers,
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

  public async listOpenAICodexIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAICodexIntegrationApi.v2.listOpenAICodexIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listOpenAICodexIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['OpenAICodexIntegrationApi.v2.listOpenAICodexIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/openai-codex/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAICodexIntegrationApi.v2.listOpenAICodexIntegrationAccounts",
      OpenAICodexIntegrationApi.operationServers,
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

  public async updateOpenAICodexIntegrationAccount(
    accountId: string,
    body: OpenAICodexIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAICodexIntegrationApi.v2.updateOpenAICodexIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateOpenAICodexIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAICodexIntegrationApi.v2.updateOpenAICodexIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateOpenAICodexIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOpenAICodexIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-codex/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAICodexIntegrationApi.v2.updateOpenAICodexIntegrationAccount",
      OpenAICodexIntegrationApi.operationServers,
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
        "OpenAICodexIntegrationAccountUpdateRequest",
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

export class OpenAICodexIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOpenAICodexIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpenAICodexIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAICodexIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OpenAICodexIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountResponse",
      ) as OpenAICodexIntegrationAccountResponse;
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
      const body: OpenAICodexIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountResponse",
        "",
      ) as OpenAICodexIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteOpenAICodexIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpenAICodexIntegrationAccount(
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
   * @params response Response returned by the server for a request to getOpenAICodexIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOpenAICodexIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAICodexIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAICodexIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountResponse",
      ) as OpenAICodexIntegrationAccountResponse;
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
      const body: OpenAICodexIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountResponse",
        "",
      ) as OpenAICodexIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listOpenAICodexIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOpenAICodexIntegrationAccounts(
    response: ResponseContext,
  ): Promise<OpenAICodexIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAICodexIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountsResponse",
      ) as OpenAICodexIntegrationAccountsResponse;
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
      const body: OpenAICodexIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountsResponse",
        "",
      ) as OpenAICodexIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateOpenAICodexIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpenAICodexIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAICodexIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAICodexIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountResponse",
      ) as OpenAICodexIntegrationAccountResponse;
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
      const body: OpenAICodexIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAICodexIntegrationAccountResponse",
        "",
      ) as OpenAICodexIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OpenAICodexIntegrationApiCreateOpenAICodexIntegrationAccountRequest {
  /**
   * @type OpenAICodexIntegrationAccountCreateRequest
   */
  body: OpenAICodexIntegrationAccountCreateRequest;
}

export interface OpenAICodexIntegrationApiDeleteOpenAICodexIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAICodexIntegrationApiGetOpenAICodexIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAICodexIntegrationApiUpdateOpenAICodexIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type OpenAICodexIntegrationAccountUpdateRequest
   */
  body: OpenAICodexIntegrationAccountUpdateRequest;
}

export class OpenAICodexIntegrationApi {
  private requestFactory: OpenAICodexIntegrationApiRequestFactory;
  private responseProcessor: OpenAICodexIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OpenAICodexIntegrationApiRequestFactory,
    responseProcessor?: OpenAICodexIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new OpenAICodexIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OpenAICodexIntegrationApiResponseProcessor();
  }

  /**
   * Create an OpenAI Codex integration account.
   * @param param The request object
   */
  public createOpenAICodexIntegrationAccount(
    param: OpenAICodexIntegrationApiCreateOpenAICodexIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAICodexIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createOpenAICodexIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpenAICodexIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an OpenAI Codex integration account.
   * @param param The request object
   */
  public deleteOpenAICodexIntegrationAccount(
    param: OpenAICodexIntegrationApiDeleteOpenAICodexIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOpenAICodexIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpenAICodexIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get an OpenAI Codex integration account.
   * @param param The request object
   */
  public getOpenAICodexIntegrationAccount(
    param: OpenAICodexIntegrationApiGetOpenAICodexIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAICodexIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getOpenAICodexIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOpenAICodexIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List OpenAI Codex integration accounts.
   * @param param The request object
   */
  public listOpenAICodexIntegrationAccounts(
    options?: Configuration,
  ): Promise<OpenAICodexIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listOpenAICodexIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOpenAICodexIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an OpenAI Codex integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateOpenAICodexIntegrationAccount(
    param: OpenAICodexIntegrationApiUpdateOpenAICodexIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAICodexIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateOpenAICodexIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpenAICodexIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
