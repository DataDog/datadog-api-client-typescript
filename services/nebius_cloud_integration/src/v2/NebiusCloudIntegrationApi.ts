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
import { NebiusCloudIntegrationAccountCreateRequest } from "./models/NebiusCloudIntegrationAccountCreateRequest";
import { NebiusCloudIntegrationAccountResponse } from "./models/NebiusCloudIntegrationAccountResponse";
import { NebiusCloudIntegrationAccountsResponse } from "./models/NebiusCloudIntegrationAccountsResponse";
import { NebiusCloudIntegrationAccountUpdateRequest } from "./models/NebiusCloudIntegrationAccountUpdateRequest";
import { version } from "../version";

export class NebiusCloudIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("nebius-cloud-integration", version);
    }
  }
  public async createNebiusCloudIntegrationAccount(
    body: NebiusCloudIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "NebiusCloudIntegrationApi.v2.createNebiusCloudIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createNebiusCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['NebiusCloudIntegrationApi.v2.createNebiusCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createNebiusCloudIntegrationAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/nebius-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NebiusCloudIntegrationApi.v2.createNebiusCloudIntegrationAccount",
      NebiusCloudIntegrationApi.operationServers,
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
        "NebiusCloudIntegrationAccountCreateRequest",
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

  public async deleteNebiusCloudIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "NebiusCloudIntegrationApi.v2.deleteNebiusCloudIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteNebiusCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['NebiusCloudIntegrationApi.v2.deleteNebiusCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteNebiusCloudIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/nebius-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NebiusCloudIntegrationApi.v2.deleteNebiusCloudIntegrationAccount",
      NebiusCloudIntegrationApi.operationServers,
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

  public async getNebiusCloudIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "NebiusCloudIntegrationApi.v2.getNebiusCloudIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getNebiusCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['NebiusCloudIntegrationApi.v2.getNebiusCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getNebiusCloudIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/nebius-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NebiusCloudIntegrationApi.v2.getNebiusCloudIntegrationAccount",
      NebiusCloudIntegrationApi.operationServers,
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

  public async listNebiusCloudIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "NebiusCloudIntegrationApi.v2.listNebiusCloudIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listNebiusCloudIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['NebiusCloudIntegrationApi.v2.listNebiusCloudIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/nebius-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NebiusCloudIntegrationApi.v2.listNebiusCloudIntegrationAccounts",
      NebiusCloudIntegrationApi.operationServers,
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

  public async updateNebiusCloudIntegrationAccount(
    accountId: string,
    body: NebiusCloudIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "NebiusCloudIntegrationApi.v2.updateNebiusCloudIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateNebiusCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['NebiusCloudIntegrationApi.v2.updateNebiusCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateNebiusCloudIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateNebiusCloudIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/nebius-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NebiusCloudIntegrationApi.v2.updateNebiusCloudIntegrationAccount",
      NebiusCloudIntegrationApi.operationServers,
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
        "NebiusCloudIntegrationAccountUpdateRequest",
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

export class NebiusCloudIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createNebiusCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createNebiusCloudIntegrationAccount(
    response: ResponseContext,
  ): Promise<NebiusCloudIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: NebiusCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountResponse",
      ) as NebiusCloudIntegrationAccountResponse;
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
      const body: NebiusCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountResponse",
        "",
      ) as NebiusCloudIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteNebiusCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteNebiusCloudIntegrationAccount(
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
   * @params response Response returned by the server for a request to getNebiusCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getNebiusCloudIntegrationAccount(
    response: ResponseContext,
  ): Promise<NebiusCloudIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NebiusCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountResponse",
      ) as NebiusCloudIntegrationAccountResponse;
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
      const body: NebiusCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountResponse",
        "",
      ) as NebiusCloudIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listNebiusCloudIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listNebiusCloudIntegrationAccounts(
    response: ResponseContext,
  ): Promise<NebiusCloudIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NebiusCloudIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountsResponse",
      ) as NebiusCloudIntegrationAccountsResponse;
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
      const body: NebiusCloudIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountsResponse",
        "",
      ) as NebiusCloudIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateNebiusCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateNebiusCloudIntegrationAccount(
    response: ResponseContext,
  ): Promise<NebiusCloudIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NebiusCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountResponse",
      ) as NebiusCloudIntegrationAccountResponse;
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
      const body: NebiusCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NebiusCloudIntegrationAccountResponse",
        "",
      ) as NebiusCloudIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface NebiusCloudIntegrationApiCreateNebiusCloudIntegrationAccountRequest {
  /**
   * @type NebiusCloudIntegrationAccountCreateRequest
   */
  body: NebiusCloudIntegrationAccountCreateRequest;
}

export interface NebiusCloudIntegrationApiDeleteNebiusCloudIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface NebiusCloudIntegrationApiGetNebiusCloudIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface NebiusCloudIntegrationApiUpdateNebiusCloudIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type NebiusCloudIntegrationAccountUpdateRequest
   */
  body: NebiusCloudIntegrationAccountUpdateRequest;
}

export class NebiusCloudIntegrationApi {
  private requestFactory: NebiusCloudIntegrationApiRequestFactory;
  private responseProcessor: NebiusCloudIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: NebiusCloudIntegrationApiRequestFactory,
    responseProcessor?: NebiusCloudIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new NebiusCloudIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new NebiusCloudIntegrationApiResponseProcessor();
  }

  /**
   * Create a Nebius Cloud integration account.
   * @param param The request object
   */
  public createNebiusCloudIntegrationAccount(
    param: NebiusCloudIntegrationApiCreateNebiusCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<NebiusCloudIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createNebiusCloudIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createNebiusCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Nebius Cloud integration account.
   * @param param The request object
   */
  public deleteNebiusCloudIntegrationAccount(
    param: NebiusCloudIntegrationApiDeleteNebiusCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteNebiusCloudIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteNebiusCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Nebius Cloud integration account.
   * @param param The request object
   */
  public getNebiusCloudIntegrationAccount(
    param: NebiusCloudIntegrationApiGetNebiusCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<NebiusCloudIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getNebiusCloudIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getNebiusCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List Nebius Cloud integration accounts.
   * @param param The request object
   */
  public listNebiusCloudIntegrationAccounts(
    options?: Configuration,
  ): Promise<NebiusCloudIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listNebiusCloudIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listNebiusCloudIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Nebius Cloud integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateNebiusCloudIntegrationAccount(
    param: NebiusCloudIntegrationApiUpdateNebiusCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<NebiusCloudIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateNebiusCloudIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateNebiusCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
