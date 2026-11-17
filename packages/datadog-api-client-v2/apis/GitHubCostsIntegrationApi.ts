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
import { GitHubCostsIntegrationAccountCreateRequest } from "../models/GitHubCostsIntegrationAccountCreateRequest";
import { GitHubCostsIntegrationAccountResponse } from "../models/GitHubCostsIntegrationAccountResponse";
import { GitHubCostsIntegrationAccountsResponse } from "../models/GitHubCostsIntegrationAccountsResponse";
import { GitHubCostsIntegrationAccountUpdateRequest } from "../models/GitHubCostsIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class GitHubCostsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createGitHubCostsIntegrationAccount(
    body: GitHubCostsIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createGitHubCostsIntegrationAccount'"
    );
    if (!_config.unstableOperations["v2.createGitHubCostsIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'createGitHubCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGitHubCostsIntegrationAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/github-costs/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GitHubCostsIntegrationApi.createGitHubCostsIntegrationAccount"
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
        "GitHubCostsIntegrationAccountCreateRequest",
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

  public async deleteGitHubCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteGitHubCostsIntegrationAccount'"
    );
    if (!_config.unstableOperations["v2.deleteGitHubCostsIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'deleteGitHubCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteGitHubCostsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/github-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GitHubCostsIntegrationApi.deleteGitHubCostsIntegrationAccount"
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

  public async getGitHubCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGitHubCostsIntegrationAccount'");
    if (!_config.unstableOperations["v2.getGitHubCostsIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'getGitHubCostsIntegrationAccount' is disabled"
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
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GitHubCostsIntegrationApi.getGitHubCostsIntegrationAccount"
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

  public async listGitHubCostsIntegrationAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listGitHubCostsIntegrationAccounts'"
    );
    if (!_config.unstableOperations["v2.listGitHubCostsIntegrationAccounts"]) {
      throw new Error(
        "Unstable operation 'listGitHubCostsIntegrationAccounts' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/github-costs/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GitHubCostsIntegrationApi.listGitHubCostsIntegrationAccounts"
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

  public async updateGitHubCostsIntegrationAccount(
    accountId: string,
    body: GitHubCostsIntegrationAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateGitHubCostsIntegrationAccount'"
    );
    if (!_config.unstableOperations["v2.updateGitHubCostsIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'updateGitHubCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateGitHubCostsIntegrationAccount"
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
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GitHubCostsIntegrationApi.updateGitHubCostsIntegrationAccount"
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
        "GitHubCostsIntegrationAccountUpdateRequest",
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

export class GitHubCostsIntegrationApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGitHubCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GitHubCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountResponse;
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
      const body: GitHubCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGitHubCostsIntegrationAccount(
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
   * @params response Response returned by the server for a request to getGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGitHubCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountResponse;
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
      const body: GitHubCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listGitHubCostsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGitHubCostsIntegrationAccounts(
    response: ResponseContext
  ): Promise<GitHubCostsIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCostsIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountsResponse;
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
      const body: GitHubCostsIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateGitHubCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGitHubCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountResponse;
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
      const body: GitHubCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCostsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: GitHubCostsIntegrationApiRequestFactory,
    responseProcessor?: GitHubCostsIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new GitHubCostsIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new GitHubCostsIntegrationApiResponseProcessor(configuration);
  }

  /**
   * Create a GitHub Costs integration account.
   * @param param The request object
   */
  public createGitHubCostsIntegrationAccount(
    param: GitHubCostsIntegrationApiCreateGitHubCostsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createGitHubCostsIntegrationAccount(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGitHubCostsIntegrationAccount(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGitHubCostsIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGitHubCostsIntegrationAccount(
            responseContext
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
    options?: Configuration
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getGitHubCostsIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGitHubCostsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List GitHub Costs integration accounts.
   * @param param The request object
   */
  public listGitHubCostsIntegrationAccounts(
    options?: Configuration
  ): Promise<GitHubCostsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listGitHubCostsIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGitHubCostsIntegrationAccounts(
            responseContext
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
    options?: Configuration
  ): Promise<GitHubCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateGitHubCostsIntegrationAccount(
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGitHubCostsIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
