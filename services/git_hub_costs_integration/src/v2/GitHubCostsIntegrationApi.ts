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
import { GitHubCostsIntegrationAccountCreateRequest } from "./models/GitHubCostsIntegrationAccountCreateRequest";
import { GitHubCostsIntegrationAccountResponse } from "./models/GitHubCostsIntegrationAccountResponse";
import { GitHubCostsIntegrationAccountsResponse } from "./models/GitHubCostsIntegrationAccountsResponse";
import { GitHubCostsIntegrationAccountUpdateRequest } from "./models/GitHubCostsIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class GitHubCostsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("git-hub-costs-integration", version);
    }
  }
  public async createGitHubCostsIntegrationAccount(
    body: GitHubCostsIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GitHubCostsIntegrationApi.v2.createGitHubCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createGitHubCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['GitHubCostsIntegrationApi.v2.createGitHubCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGitHubCostsIntegrationAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/github-costs/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GitHubCostsIntegrationApi.v2.createGitHubCostsIntegrationAccount",
      GitHubCostsIntegrationApi.operationServers,
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
        "GitHubCostsIntegrationAccountCreateRequest",
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

  public async deleteGitHubCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GitHubCostsIntegrationApi.v2.deleteGitHubCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteGitHubCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['GitHubCostsIntegrationApi.v2.deleteGitHubCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteGitHubCostsIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/github-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GitHubCostsIntegrationApi.v2.deleteGitHubCostsIntegrationAccount",
      GitHubCostsIntegrationApi.operationServers,
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

  public async getGitHubCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GitHubCostsIntegrationApi.v2.getGitHubCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getGitHubCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['GitHubCostsIntegrationApi.v2.getGitHubCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getGitHubCostsIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/github-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GitHubCostsIntegrationApi.v2.getGitHubCostsIntegrationAccount",
      GitHubCostsIntegrationApi.operationServers,
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

  public async listGitHubCostsIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GitHubCostsIntegrationApi.v2.listGitHubCostsIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listGitHubCostsIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['GitHubCostsIntegrationApi.v2.listGitHubCostsIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/github-costs/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GitHubCostsIntegrationApi.v2.listGitHubCostsIntegrationAccounts",
      GitHubCostsIntegrationApi.operationServers,
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

  public async updateGitHubCostsIntegrationAccount(
    accountId: string,
    body: GitHubCostsIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GitHubCostsIntegrationApi.v2.updateGitHubCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGitHubCostsIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['GitHubCostsIntegrationApi.v2.updateGitHubCostsIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateGitHubCostsIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGitHubCostsIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/github-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GitHubCostsIntegrationApi.v2.updateGitHubCostsIntegrationAccount",
      GitHubCostsIntegrationApi.operationServers,
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
        "GitHubCostsIntegrationAccountUpdateRequest",
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

export class GitHubCostsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGitHubCostsIntegrationAccount(
    response: ResponseContext,
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: GitHubCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountResponse",
      ) as GitHubCostsIntegrationAccountResponse;
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
      const body: GitHubCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountResponse",
        "",
      ) as GitHubCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGitHubCostsIntegrationAccount(
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
   * @params response Response returned by the server for a request to getGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGitHubCostsIntegrationAccount(
    response: ResponseContext,
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GitHubCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountResponse",
      ) as GitHubCostsIntegrationAccountResponse;
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
      const body: GitHubCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountResponse",
        "",
      ) as GitHubCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listGitHubCostsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGitHubCostsIntegrationAccounts(
    response: ResponseContext,
  ): Promise<GitHubCostsIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GitHubCostsIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountsResponse",
      ) as GitHubCostsIntegrationAccountsResponse;
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
      const body: GitHubCostsIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountsResponse",
        "",
      ) as GitHubCostsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGitHubCostsIntegrationAccount(
    response: ResponseContext,
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GitHubCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountResponse",
      ) as GitHubCostsIntegrationAccountResponse;
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
      const body: GitHubCostsIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GitHubCostsIntegrationAccountResponse",
        "",
      ) as GitHubCostsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface GitHubCostsIntegrationApiCreateGitHubCostsIntegrationAccountRequest {
  /**
   * @type GitHubCostsIntegrationAccountCreateRequest
   */
  body: GitHubCostsIntegrationAccountCreateRequest;
}

export interface GitHubCostsIntegrationApiDeleteGitHubCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface GitHubCostsIntegrationApiGetGitHubCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface GitHubCostsIntegrationApiUpdateGitHubCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type GitHubCostsIntegrationAccountUpdateRequest
   */
  body: GitHubCostsIntegrationAccountUpdateRequest;
}

export class GitHubCostsIntegrationApi {
  private requestFactory: GitHubCostsIntegrationApiRequestFactory;
  private responseProcessor: GitHubCostsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: GitHubCostsIntegrationApiRequestFactory,
    responseProcessor?: GitHubCostsIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new GitHubCostsIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new GitHubCostsIntegrationApiResponseProcessor();
  }

  /**
   * Create a GitHub Costs integration account.
   * @param param The request object
   */
  public createGitHubCostsIntegrationAccount(
    param: GitHubCostsIntegrationApiCreateGitHubCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createGitHubCostsIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGitHubCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a GitHub Costs integration account.
   * @param param The request object
   */
  public deleteGitHubCostsIntegrationAccount(
    param: GitHubCostsIntegrationApiDeleteGitHubCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGitHubCostsIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGitHubCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a GitHub Costs integration account.
   * @param param The request object
   */
  public getGitHubCostsIntegrationAccount(
    param: GitHubCostsIntegrationApiGetGitHubCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getGitHubCostsIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGitHubCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List GitHub Costs integration accounts.
   * @param param The request object
   */
  public listGitHubCostsIntegrationAccounts(
    options?: Configuration,
  ): Promise<GitHubCostsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listGitHubCostsIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGitHubCostsIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a GitHub Costs integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateGitHubCostsIntegrationAccount(
    param: GitHubCostsIntegrationApiUpdateGitHubCostsIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateGitHubCostsIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGitHubCostsIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
