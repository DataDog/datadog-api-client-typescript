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
import { IntegrationAccountIntegrationId } from "./models/IntegrationAccountIntegrationId";
import { IntegrationAccountInterfaceId } from "./models/IntegrationAccountInterfaceId";
import { IntegrationAccountRequest } from "./models/IntegrationAccountRequest";
import { IntegrationAccountResponse } from "./models/IntegrationAccountResponse";
import { IntegrationAccountsResponse } from "./models/IntegrationAccountsResponse";
import { IntegrationAccountUpdateRequest } from "./models/IntegrationAccountUpdateRequest";
import { version } from "../version";

export class IntegrationAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("integration-accounts", version);
    }
  }
  public async createIntegrationAccount(
    integrationId: IntegrationAccountIntegrationId,
    interfaceId: IntegrationAccountInterfaceId,
    body: IntegrationAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IntegrationAccountsApi.v2.createIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['IntegrationAccountsApi.v2.createIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "createIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "createIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_id}/interfaces/{interface_id}/accounts"
        .replace("{integration_id}", encodeURIComponent(String(integrationId)))
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IntegrationAccountsApi.v2.createIntegrationAccount",
      IntegrationAccountsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IntegrationAccountRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteIntegrationAccount(
    integrationId: IntegrationAccountIntegrationId,
    interfaceId: IntegrationAccountInterfaceId,
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IntegrationAccountsApi.v2.deleteIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['IntegrationAccountsApi.v2.deleteIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "deleteIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "deleteIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_id}/interfaces/{interface_id}/accounts/{account_id}"
        .replace("{integration_id}", encodeURIComponent(String(integrationId)))
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IntegrationAccountsApi.v2.deleteIntegrationAccount",
      IntegrationAccountsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getIntegrationAccount(
    integrationId: IntegrationAccountIntegrationId,
    interfaceId: IntegrationAccountInterfaceId,
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IntegrationAccountsApi.v2.getIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['IntegrationAccountsApi.v2.getIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "getIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "getIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_id}/interfaces/{interface_id}/accounts/{account_id}"
        .replace("{integration_id}", encodeURIComponent(String(integrationId)))
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IntegrationAccountsApi.v2.getIntegrationAccount",
      IntegrationAccountsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listIntegrationAccounts(
    integrationId: IntegrationAccountIntegrationId,
    interfaceId: IntegrationAccountInterfaceId,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IntegrationAccountsApi.v2.listIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['IntegrationAccountsApi.v2.listIntegrationAccounts'] = true`",
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "listIntegrationAccounts");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "listIntegrationAccounts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_id}/interfaces/{interface_id}/accounts"
        .replace("{integration_id}", encodeURIComponent(String(integrationId)))
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IntegrationAccountsApi.v2.listIntegrationAccounts",
      IntegrationAccountsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateIntegrationAccount(
    integrationId: IntegrationAccountIntegrationId,
    interfaceId: IntegrationAccountInterfaceId,
    accountId: string,
    body: IntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IntegrationAccountsApi.v2.updateIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['IntegrationAccountsApi.v2.updateIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "updateIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "updateIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_id}/interfaces/{interface_id}/accounts/{account_id}"
        .replace("{integration_id}", encodeURIComponent(String(integrationId)))
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IntegrationAccountsApi.v2.updateIntegrationAccount",
      IntegrationAccountsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IntegrationAccountUpdateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class IntegrationAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIntegrationAccount(
    response: ResponseContext,
  ): Promise<IntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountResponse",
      ) as IntegrationAccountResponse;
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
      const body: IntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountResponse",
        "",
      ) as IntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIntegrationAccount(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
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
   * @params response Response returned by the server for a request to getIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIntegrationAccount(
    response: ResponseContext,
  ): Promise<IntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountResponse",
      ) as IntegrationAccountResponse;
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
      const body: IntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountResponse",
        "",
      ) as IntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIntegrationAccounts(
    response: ResponseContext,
  ): Promise<IntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountsResponse",
      ) as IntegrationAccountsResponse;
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
      const body: IntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountsResponse",
        "",
      ) as IntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIntegrationAccount(
    response: ResponseContext,
  ): Promise<IntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountResponse",
      ) as IntegrationAccountResponse;
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
      const body: IntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntegrationAccountResponse",
        "",
      ) as IntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface IntegrationAccountsApiCreateIntegrationAccountRequest {
  /**
   * Grouping/RBAC scope. Selects the integration whose accounts are addressed.
   * @type IntegrationAccountIntegrationId
   */
  integrationId: IntegrationAccountIntegrationId;
  /**
   * Selects the interface (source-type) within the integration.
   * @type IntegrationAccountInterfaceId
   */
  interfaceId: IntegrationAccountInterfaceId;
  /**
   * @type IntegrationAccountRequest
   */
  body: IntegrationAccountRequest;
}

export interface IntegrationAccountsApiDeleteIntegrationAccountRequest {
  /**
   * Grouping/RBAC scope. Selects the integration whose accounts are addressed.
   * @type IntegrationAccountIntegrationId
   */
  integrationId: IntegrationAccountIntegrationId;
  /**
   * Selects the interface (source-type) within the integration.
   * @type IntegrationAccountInterfaceId
   */
  interfaceId: IntegrationAccountInterfaceId;
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface IntegrationAccountsApiGetIntegrationAccountRequest {
  /**
   * Grouping/RBAC scope. Selects the integration whose accounts are addressed.
   * @type IntegrationAccountIntegrationId
   */
  integrationId: IntegrationAccountIntegrationId;
  /**
   * Selects the interface (source-type) within the integration.
   * @type IntegrationAccountInterfaceId
   */
  interfaceId: IntegrationAccountInterfaceId;
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface IntegrationAccountsApiListIntegrationAccountsRequest {
  /**
   * Grouping/RBAC scope. Selects the integration whose accounts are addressed.
   * @type IntegrationAccountIntegrationId
   */
  integrationId: IntegrationAccountIntegrationId;
  /**
   * Selects the interface (source-type) within the integration.
   * @type IntegrationAccountInterfaceId
   */
  interfaceId: IntegrationAccountInterfaceId;
}

export interface IntegrationAccountsApiUpdateIntegrationAccountRequest {
  /**
   * Grouping/RBAC scope. Selects the integration whose accounts are addressed.
   * @type IntegrationAccountIntegrationId
   */
  integrationId: IntegrationAccountIntegrationId;
  /**
   * Selects the interface (source-type) within the integration.
   * @type IntegrationAccountInterfaceId
   */
  interfaceId: IntegrationAccountInterfaceId;
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type IntegrationAccountUpdateRequest
   */
  body: IntegrationAccountUpdateRequest;
}

export class IntegrationAccountsApi {
  private requestFactory: IntegrationAccountsApiRequestFactory;
  private responseProcessor: IntegrationAccountsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: IntegrationAccountsApiRequestFactory,
    responseProcessor?: IntegrationAccountsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new IntegrationAccountsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new IntegrationAccountsApiResponseProcessor();
  }

  /**
   * Create an integration account for a given integration/interface.
   * @param param The request object
   */
  public createIntegrationAccount(
    param: IntegrationAccountsApiCreateIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<IntegrationAccountResponse> {
    const requestContextPromise = this.requestFactory.createIntegrationAccount(
      param.integrationId,
      param.interfaceId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an integration account.
   * @param param The request object
   */
  public deleteIntegrationAccount(
    param: IntegrationAccountsApiDeleteIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIntegrationAccount(
      param.integrationId,
      param.interfaceId,
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single integration account.
   * @param param The request object
   */
  public getIntegrationAccount(
    param: IntegrationAccountsApiGetIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<IntegrationAccountResponse> {
    const requestContextPromise = this.requestFactory.getIntegrationAccount(
      param.integrationId,
      param.interfaceId,
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIntegrationAccount(responseContext);
        });
    });
  }

  /**
   * List the integration accounts for a given integration/interface.
   * @param param The request object
   */
  public listIntegrationAccounts(
    param: IntegrationAccountsApiListIntegrationAccountsRequest,
    options?: Configuration,
  ): Promise<IntegrationAccountsResponse> {
    const requestContextPromise = this.requestFactory.listIntegrationAccounts(
      param.integrationId,
      param.interfaceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an integration account. The update is a partial merge: only the fields provided are changed, so a name-only or settings-only update does not need to resend the full integration payload or write-only credentials. When present, `type` selects the integration/interface variant. Top-level attributes and the contents of `authentication` and `settings` are merged one level deep; the `dataflows` array is merged by `id`.
   * @param param The request object
   */
  public updateIntegrationAccount(
    param: IntegrationAccountsApiUpdateIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<IntegrationAccountResponse> {
    const requestContextPromise = this.requestFactory.updateIntegrationAccount(
      param.integrationId,
      param.interfaceId,
      param.accountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
