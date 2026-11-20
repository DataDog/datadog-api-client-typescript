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
import { ClaudeComplianceIntegrationAccountCreateRequest } from "./models/ClaudeComplianceIntegrationAccountCreateRequest";
import { ClaudeComplianceIntegrationAccountResponse } from "./models/ClaudeComplianceIntegrationAccountResponse";
import { ClaudeComplianceIntegrationAccountsResponse } from "./models/ClaudeComplianceIntegrationAccountsResponse";
import { ClaudeComplianceIntegrationAccountUpdateRequest } from "./models/ClaudeComplianceIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class ClaudeComplianceIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("claude-compliance-integration", version);
    }
  }
  public async createClaudeComplianceIntegrationAccount(
    body: ClaudeComplianceIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ClaudeComplianceIntegrationApi.v2.createClaudeComplianceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createClaudeComplianceIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ClaudeComplianceIntegrationApi.v2.createClaudeComplianceIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createClaudeComplianceIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/claude-compliance/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ClaudeComplianceIntegrationApi.v2.createClaudeComplianceIntegrationAccount",
      ClaudeComplianceIntegrationApi.operationServers,
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
        "ClaudeComplianceIntegrationAccountCreateRequest",
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

  public async deleteClaudeComplianceIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ClaudeComplianceIntegrationApi.v2.deleteClaudeComplianceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteClaudeComplianceIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ClaudeComplianceIntegrationApi.v2.deleteClaudeComplianceIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteClaudeComplianceIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/claude-compliance/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ClaudeComplianceIntegrationApi.v2.deleteClaudeComplianceIntegrationAccount",
      ClaudeComplianceIntegrationApi.operationServers,
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

  public async getClaudeComplianceIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ClaudeComplianceIntegrationApi.v2.getClaudeComplianceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getClaudeComplianceIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ClaudeComplianceIntegrationApi.v2.getClaudeComplianceIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getClaudeComplianceIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/claude-compliance/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ClaudeComplianceIntegrationApi.v2.getClaudeComplianceIntegrationAccount",
      ClaudeComplianceIntegrationApi.operationServers,
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

  public async listClaudeComplianceIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ClaudeComplianceIntegrationApi.v2.listClaudeComplianceIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listClaudeComplianceIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['ClaudeComplianceIntegrationApi.v2.listClaudeComplianceIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/claude-compliance/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ClaudeComplianceIntegrationApi.v2.listClaudeComplianceIntegrationAccounts",
      ClaudeComplianceIntegrationApi.operationServers,
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

  public async updateClaudeComplianceIntegrationAccount(
    accountId: string,
    body: ClaudeComplianceIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ClaudeComplianceIntegrationApi.v2.updateClaudeComplianceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateClaudeComplianceIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['ClaudeComplianceIntegrationApi.v2.updateClaudeComplianceIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateClaudeComplianceIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateClaudeComplianceIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/claude-compliance/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ClaudeComplianceIntegrationApi.v2.updateClaudeComplianceIntegrationAccount",
      ClaudeComplianceIntegrationApi.operationServers,
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
        "ClaudeComplianceIntegrationAccountUpdateRequest",
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

export class ClaudeComplianceIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createClaudeComplianceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createClaudeComplianceIntegrationAccount(
    response: ResponseContext,
  ): Promise<ClaudeComplianceIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ClaudeComplianceIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountResponse",
      ) as ClaudeComplianceIntegrationAccountResponse;
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
      const body: ClaudeComplianceIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountResponse",
        "",
      ) as ClaudeComplianceIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteClaudeComplianceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteClaudeComplianceIntegrationAccount(
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
   * @params response Response returned by the server for a request to getClaudeComplianceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getClaudeComplianceIntegrationAccount(
    response: ResponseContext,
  ): Promise<ClaudeComplianceIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ClaudeComplianceIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountResponse",
      ) as ClaudeComplianceIntegrationAccountResponse;
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
      const body: ClaudeComplianceIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountResponse",
        "",
      ) as ClaudeComplianceIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listClaudeComplianceIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listClaudeComplianceIntegrationAccounts(
    response: ResponseContext,
  ): Promise<ClaudeComplianceIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ClaudeComplianceIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountsResponse",
      ) as ClaudeComplianceIntegrationAccountsResponse;
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
      const body: ClaudeComplianceIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountsResponse",
        "",
      ) as ClaudeComplianceIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateClaudeComplianceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateClaudeComplianceIntegrationAccount(
    response: ResponseContext,
  ): Promise<ClaudeComplianceIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ClaudeComplianceIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountResponse",
      ) as ClaudeComplianceIntegrationAccountResponse;
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
      const body: ClaudeComplianceIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ClaudeComplianceIntegrationAccountResponse",
        "",
      ) as ClaudeComplianceIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ClaudeComplianceIntegrationApiCreateClaudeComplianceIntegrationAccountRequest {
  /**
   * @type ClaudeComplianceIntegrationAccountCreateRequest
   */
  body: ClaudeComplianceIntegrationAccountCreateRequest;
}

export interface ClaudeComplianceIntegrationApiDeleteClaudeComplianceIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ClaudeComplianceIntegrationApiGetClaudeComplianceIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ClaudeComplianceIntegrationApiUpdateClaudeComplianceIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type ClaudeComplianceIntegrationAccountUpdateRequest
   */
  body: ClaudeComplianceIntegrationAccountUpdateRequest;
}

export class ClaudeComplianceIntegrationApi {
  private requestFactory: ClaudeComplianceIntegrationApiRequestFactory;
  private responseProcessor: ClaudeComplianceIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ClaudeComplianceIntegrationApiRequestFactory,
    responseProcessor?: ClaudeComplianceIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ClaudeComplianceIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new ClaudeComplianceIntegrationApiResponseProcessor();
  }

  /**
   * Create a Claude Compliance integration account.
   * @param param The request object
   */
  public createClaudeComplianceIntegrationAccount(
    param: ClaudeComplianceIntegrationApiCreateClaudeComplianceIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<ClaudeComplianceIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createClaudeComplianceIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createClaudeComplianceIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Claude Compliance integration account.
   * @param param The request object
   */
  public deleteClaudeComplianceIntegrationAccount(
    param: ClaudeComplianceIntegrationApiDeleteClaudeComplianceIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteClaudeComplianceIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteClaudeComplianceIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Claude Compliance integration account.
   * @param param The request object
   */
  public getClaudeComplianceIntegrationAccount(
    param: ClaudeComplianceIntegrationApiGetClaudeComplianceIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<ClaudeComplianceIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getClaudeComplianceIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getClaudeComplianceIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List Claude Compliance integration accounts.
   * @param param The request object
   */
  public listClaudeComplianceIntegrationAccounts(
    options?: Configuration,
  ): Promise<ClaudeComplianceIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listClaudeComplianceIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listClaudeComplianceIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Claude Compliance integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateClaudeComplianceIntegrationAccount(
    param: ClaudeComplianceIntegrationApiUpdateClaudeComplianceIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<ClaudeComplianceIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateClaudeComplianceIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateClaudeComplianceIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
