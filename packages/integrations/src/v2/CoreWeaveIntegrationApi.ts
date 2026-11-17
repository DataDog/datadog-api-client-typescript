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
} from "@datadog/datadog-api-client-core";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CoreWeaveCloudIntegrationAccountCreateRequest } from "./models/CoreWeaveCloudIntegrationAccountCreateRequest";
import { CoreWeaveCloudIntegrationAccountResponse } from "./models/CoreWeaveCloudIntegrationAccountResponse";
import { CoreWeaveCloudIntegrationAccountsResponse } from "./models/CoreWeaveCloudIntegrationAccountsResponse";
import { CoreWeaveCloudIntegrationAccountUpdateRequest } from "./models/CoreWeaveCloudIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class CoreWeaveIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("integrations", version);
    }
  }
  public async createCoreWeaveCloudIntegrationAccount(
    body: CoreWeaveCloudIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createCoreWeaveCloudIntegrationAccount'",
    );
    if (
      !_config.unstableOperations["v2.createCoreWeaveCloudIntegrationAccount"]
    ) {
      throw new Error(
        "Unstable operation 'createCoreWeaveCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['v2.createCoreWeaveCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCoreWeaveCloudIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/coreweave-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CoreWeaveIntegrationApi.createCoreWeaveCloudIntegrationAccount",
      CoreWeaveIntegrationApi.operationServers,
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
        "CoreWeaveCloudIntegrationAccountCreateRequest",
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

  public async deleteCoreWeaveCloudIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteCoreWeaveCloudIntegrationAccount'",
    );
    if (
      !_config.unstableOperations["v2.deleteCoreWeaveCloudIntegrationAccount"]
    ) {
      throw new Error(
        "Unstable operation 'deleteCoreWeaveCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteCoreWeaveCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteCoreWeaveCloudIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/coreweave-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CoreWeaveIntegrationApi.deleteCoreWeaveCloudIntegrationAccount",
      CoreWeaveIntegrationApi.operationServers,
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

  public async getCoreWeaveCloudIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getCoreWeaveCloudIntegrationAccount'",
    );
    if (!_config.unstableOperations["v2.getCoreWeaveCloudIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'getCoreWeaveCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['v2.getCoreWeaveCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getCoreWeaveCloudIntegrationAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/coreweave-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CoreWeaveIntegrationApi.getCoreWeaveCloudIntegrationAccount",
      CoreWeaveIntegrationApi.operationServers,
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

  public async listCoreWeaveCloudIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listCoreWeaveCloudIntegrationAccounts'",
    );
    if (
      !_config.unstableOperations["v2.listCoreWeaveCloudIntegrationAccounts"]
    ) {
      throw new Error(
        "Unstable operation 'listCoreWeaveCloudIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['v2.listCoreWeaveCloudIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/coreweave-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CoreWeaveIntegrationApi.listCoreWeaveCloudIntegrationAccounts",
      CoreWeaveIntegrationApi.operationServers,
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

  public async updateCoreWeaveCloudIntegrationAccount(
    accountId: string,
    body: CoreWeaveCloudIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateCoreWeaveCloudIntegrationAccount'",
    );
    if (
      !_config.unstableOperations["v2.updateCoreWeaveCloudIntegrationAccount"]
    ) {
      throw new Error(
        "Unstable operation 'updateCoreWeaveCloudIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateCoreWeaveCloudIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateCoreWeaveCloudIntegrationAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCoreWeaveCloudIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/coreweave-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.CoreWeaveIntegrationApi.updateCoreWeaveCloudIntegrationAccount",
      CoreWeaveIntegrationApi.operationServers,
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
        "CoreWeaveCloudIntegrationAccountUpdateRequest",
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

export class CoreWeaveIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCoreWeaveCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCoreWeaveCloudIntegrationAccount(
    response: ResponseContext,
  ): Promise<CoreWeaveCloudIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CoreWeaveCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountResponse",
      ) as CoreWeaveCloudIntegrationAccountResponse;
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
      const body: CoreWeaveCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountResponse",
        "",
      ) as CoreWeaveCloudIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteCoreWeaveCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCoreWeaveCloudIntegrationAccount(
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
   * @params response Response returned by the server for a request to getCoreWeaveCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCoreWeaveCloudIntegrationAccount(
    response: ResponseContext,
  ): Promise<CoreWeaveCloudIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CoreWeaveCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountResponse",
      ) as CoreWeaveCloudIntegrationAccountResponse;
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
      const body: CoreWeaveCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountResponse",
        "",
      ) as CoreWeaveCloudIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listCoreWeaveCloudIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCoreWeaveCloudIntegrationAccounts(
    response: ResponseContext,
  ): Promise<CoreWeaveCloudIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CoreWeaveCloudIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountsResponse",
      ) as CoreWeaveCloudIntegrationAccountsResponse;
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
      const body: CoreWeaveCloudIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountsResponse",
        "",
      ) as CoreWeaveCloudIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateCoreWeaveCloudIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCoreWeaveCloudIntegrationAccount(
    response: ResponseContext,
  ): Promise<CoreWeaveCloudIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CoreWeaveCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountResponse",
      ) as CoreWeaveCloudIntegrationAccountResponse;
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
      const body: CoreWeaveCloudIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CoreWeaveCloudIntegrationAccountResponse",
        "",
      ) as CoreWeaveCloudIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CoreWeaveIntegrationApiCreateCoreWeaveCloudIntegrationAccountRequest {
  /**
   * @type CoreWeaveCloudIntegrationAccountCreateRequest
   */
  body: CoreWeaveCloudIntegrationAccountCreateRequest;
}

export interface CoreWeaveIntegrationApiDeleteCoreWeaveCloudIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface CoreWeaveIntegrationApiGetCoreWeaveCloudIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface CoreWeaveIntegrationApiUpdateCoreWeaveCloudIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type CoreWeaveCloudIntegrationAccountUpdateRequest
   */
  body: CoreWeaveCloudIntegrationAccountUpdateRequest;
}

export class CoreWeaveIntegrationApi {
  private requestFactory: CoreWeaveIntegrationApiRequestFactory;
  private responseProcessor: CoreWeaveIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CoreWeaveIntegrationApiRequestFactory,
    responseProcessor?: CoreWeaveIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CoreWeaveIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CoreWeaveIntegrationApiResponseProcessor();
  }

  /**
   * Create a CoreWeave integration account.
   * @param param The request object
   */
  public createCoreWeaveCloudIntegrationAccount(
    param: CoreWeaveIntegrationApiCreateCoreWeaveCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<CoreWeaveCloudIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createCoreWeaveCloudIntegrationAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCoreWeaveCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a CoreWeave integration account.
   * @param param The request object
   */
  public deleteCoreWeaveCloudIntegrationAccount(
    param: CoreWeaveIntegrationApiDeleteCoreWeaveCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCoreWeaveCloudIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCoreWeaveCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a CoreWeave integration account.
   * @param param The request object
   */
  public getCoreWeaveCloudIntegrationAccount(
    param: CoreWeaveIntegrationApiGetCoreWeaveCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<CoreWeaveCloudIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getCoreWeaveCloudIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCoreWeaveCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List CoreWeave integration accounts.
   * @param param The request object
   */
  public listCoreWeaveCloudIntegrationAccounts(
    options?: Configuration,
  ): Promise<CoreWeaveCloudIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listCoreWeaveCloudIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCoreWeaveCloudIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a CoreWeave integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateCoreWeaveCloudIntegrationAccount(
    param: CoreWeaveIntegrationApiUpdateCoreWeaveCloudIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<CoreWeaveCloudIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateCoreWeaveCloudIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCoreWeaveCloudIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
