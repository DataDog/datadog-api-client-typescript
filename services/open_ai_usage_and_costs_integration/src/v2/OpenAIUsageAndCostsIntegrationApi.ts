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
import { OpenAIUsageAndCostsIntegrationAccountCreateRequest } from "./models/OpenAIUsageAndCostsIntegrationAccountCreateRequest";
import { OpenAIUsageAndCostsIntegrationAccountResponse } from "./models/OpenAIUsageAndCostsIntegrationAccountResponse";
import { OpenAIUsageAndCostsIntegrationAccountsResponse } from "./models/OpenAIUsageAndCostsIntegrationAccountsResponse";
import { OpenAIUsageAndCostsIntegrationAccountUpdateRequest } from "./models/OpenAIUsageAndCostsIntegrationAccountUpdateRequest";
import { version } from "../version";

export class OpenAIUsageAndCostsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "open-ai-usage-and-costs-integration",
        version,
      );
    }
  }
  public async createOpenAIUsageAndCostsIntegrationAccount(
    body: OpenAIUsageAndCostsIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAIUsageAndCostsIntegrationApi.v2.createOpenAIUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createOpenAIUsageAndCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAIUsageAndCostsIntegrationApi.v2.createOpenAIUsageAndCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createOpenAIUsageAndCostsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-usage-and-costs/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAIUsageAndCostsIntegrationApi.v2.createOpenAIUsageAndCostsIntegrationAccount",
      OpenAIUsageAndCostsIntegrationApi.operationServers,
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
        "OpenAIUsageAndCostsIntegrationAccountCreateRequest",
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

  public async deleteOpenAIUsageAndCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAIUsageAndCostsIntegrationApi.v2.deleteOpenAIUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteOpenAIUsageAndCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAIUsageAndCostsIntegrationApi.v2.deleteOpenAIUsageAndCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteOpenAIUsageAndCostsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-usage-and-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAIUsageAndCostsIntegrationApi.v2.deleteOpenAIUsageAndCostsIntegrationAccount",
      OpenAIUsageAndCostsIntegrationApi.operationServers,
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

  public async getOpenAIUsageAndCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAIUsageAndCostsIntegrationApi.v2.getOpenAIUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getOpenAIUsageAndCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAIUsageAndCostsIntegrationApi.v2.getOpenAIUsageAndCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getOpenAIUsageAndCostsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-usage-and-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAIUsageAndCostsIntegrationApi.v2.getOpenAIUsageAndCostsIntegrationAccount",
      OpenAIUsageAndCostsIntegrationApi.operationServers,
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

  public async listOpenAIUsageAndCostsIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAIUsageAndCostsIntegrationApi.v2.listOpenAIUsageAndCostsIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listOpenAIUsageAndCostsIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['OpenAIUsageAndCostsIntegrationApi.v2.listOpenAIUsageAndCostsIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-usage-and-costs/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAIUsageAndCostsIntegrationApi.v2.listOpenAIUsageAndCostsIntegrationAccounts",
      OpenAIUsageAndCostsIntegrationApi.operationServers,
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

  public async updateOpenAIUsageAndCostsIntegrationAccount(
    accountId: string,
    body: OpenAIUsageAndCostsIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OpenAIUsageAndCostsIntegrationApi.v2.updateOpenAIUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateOpenAIUsageAndCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['OpenAIUsageAndCostsIntegrationApi.v2.updateOpenAIUsageAndCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateOpenAIUsageAndCostsIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateOpenAIUsageAndCostsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-usage-and-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OpenAIUsageAndCostsIntegrationApi.v2.updateOpenAIUsageAndCostsIntegrationAccount",
      OpenAIUsageAndCostsIntegrationApi.operationServers,
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
        "OpenAIUsageAndCostsIntegrationAccountUpdateRequest",
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

export class OpenAIUsageAndCostsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOpenAIUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpenAIUsageAndCostsIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OpenAIUsageAndCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountResponse",
      ) as OpenAIUsageAndCostsIntegrationAccountResponse;
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
      const body: OpenAIUsageAndCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountResponse",
        "",
      ) as OpenAIUsageAndCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteOpenAIUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpenAIUsageAndCostsIntegrationAccount(
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
   * @params response Response returned by the server for a request to getOpenAIUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOpenAIUsageAndCostsIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAIUsageAndCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountResponse",
      ) as OpenAIUsageAndCostsIntegrationAccountResponse;
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
      const body: OpenAIUsageAndCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountResponse",
        "",
      ) as OpenAIUsageAndCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listOpenAIUsageAndCostsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOpenAIUsageAndCostsIntegrationAccounts(
    response: ResponseContext,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAIUsageAndCostsIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountsResponse",
      ) as OpenAIUsageAndCostsIntegrationAccountsResponse;
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
      const body: OpenAIUsageAndCostsIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountsResponse",
        "",
      ) as OpenAIUsageAndCostsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateOpenAIUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpenAIUsageAndCostsIntegrationAccount(
    response: ResponseContext,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OpenAIUsageAndCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountResponse",
      ) as OpenAIUsageAndCostsIntegrationAccountResponse;
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
      const body: OpenAIUsageAndCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OpenAIUsageAndCostsIntegrationAccountResponse",
        "",
      ) as OpenAIUsageAndCostsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OpenAIUsageAndCostsIntegrationApiCreateOpenAIUsageAndCostsIntegrationAccountRequest {
  /**
   * @type OpenAIUsageAndCostsIntegrationAccountCreateRequest
   */
  body: OpenAIUsageAndCostsIntegrationAccountCreateRequest;
}

export interface OpenAIUsageAndCostsIntegrationApiDeleteOpenAIUsageAndCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAIUsageAndCostsIntegrationApiGetOpenAIUsageAndCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAIUsageAndCostsIntegrationApiUpdateOpenAIUsageAndCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type OpenAIUsageAndCostsIntegrationAccountUpdateRequest
   */
  body: OpenAIUsageAndCostsIntegrationAccountUpdateRequest;
}

export class OpenAIUsageAndCostsIntegrationApi {
  private requestFactory: OpenAIUsageAndCostsIntegrationApiRequestFactory;
  private responseProcessor: OpenAIUsageAndCostsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OpenAIUsageAndCostsIntegrationApiRequestFactory,
    responseProcessor?: OpenAIUsageAndCostsIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new OpenAIUsageAndCostsIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new OpenAIUsageAndCostsIntegrationApiResponseProcessor();
  }

  /**
   * Create an OpenAI Usage and Costs integration account.
   * @param param The request object
   */
  public createOpenAIUsageAndCostsIntegrationAccount(
    param: OpenAIUsageAndCostsIntegrationApiCreateOpenAIUsageAndCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createOpenAIUsageAndCostsIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpenAIUsageAndCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an OpenAI Usage and Costs integration account.
   * @param param The request object
   */
  public deleteOpenAIUsageAndCostsIntegrationAccount(
    param: OpenAIUsageAndCostsIntegrationApiDeleteOpenAIUsageAndCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOpenAIUsageAndCostsIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpenAIUsageAndCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get an OpenAI Usage and Costs integration account.
   * @param param The request object
   */
  public getOpenAIUsageAndCostsIntegrationAccount(
    param: OpenAIUsageAndCostsIntegrationApiGetOpenAIUsageAndCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getOpenAIUsageAndCostsIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOpenAIUsageAndCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List OpenAI Usage and Costs integration accounts.
   * @param param The request object
   */
  public listOpenAIUsageAndCostsIntegrationAccounts(
    options?: Configuration,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listOpenAIUsageAndCostsIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOpenAIUsageAndCostsIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an OpenAI Usage and Costs integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateOpenAIUsageAndCostsIntegrationAccount(
    param: OpenAIUsageAndCostsIntegrationApiUpdateOpenAIUsageAndCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<OpenAIUsageAndCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateOpenAIUsageAndCostsIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpenAIUsageAndCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
