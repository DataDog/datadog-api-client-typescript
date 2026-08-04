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
import { ElasticCloudCcmAccountRequest } from "./models/ElasticCloudCcmAccountRequest";
import { ElasticCloudCcmAccountResponse } from "./models/ElasticCloudCcmAccountResponse";
import { ElasticCloudCcmAccountsResponse } from "./models/ElasticCloudCcmAccountsResponse";
import { ElasticCloudCcmAccountUpdateRequest } from "./models/ElasticCloudCcmAccountUpdateRequest";
import { ElasticCloudMonitoringAccountRequest } from "./models/ElasticCloudMonitoringAccountRequest";
import { ElasticCloudMonitoringAccountResponse } from "./models/ElasticCloudMonitoringAccountResponse";
import { ElasticCloudMonitoringAccountsResponse } from "./models/ElasticCloudMonitoringAccountsResponse";
import { ElasticCloudMonitoringAccountUpdateRequest } from "./models/ElasticCloudMonitoringAccountUpdateRequest";
import { version } from "../version";

export class ElasticCloudIntegrationAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "elastic-cloud-integration-accounts",
        version,
      );
    }
  }
  public async createElasticCloudCcmAccount(
    body: ElasticCloudCcmAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.createElasticCloudCcmAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createElasticCloudCcmAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.createElasticCloudCcmAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createElasticCloudCcmAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud-ccm/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.createElasticCloudCcmAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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
      serialize(body, TypingInfo, "ElasticCloudCcmAccountRequest", ""),
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

  public async createElasticCloudMonitoringAccount(
    body: ElasticCloudMonitoringAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.createElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.createElasticCloudMonitoringAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createElasticCloudMonitoringAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.createElasticCloudMonitoringAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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
      serialize(body, TypingInfo, "ElasticCloudMonitoringAccountRequest", ""),
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

  public async deleteElasticCloudCcmAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.deleteElasticCloudCcmAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteElasticCloudCcmAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.deleteElasticCloudCcmAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteElasticCloudCcmAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud-ccm/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.deleteElasticCloudCcmAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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

  public async deleteElasticCloudMonitoringAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.deleteElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.deleteElasticCloudMonitoringAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteElasticCloudMonitoringAccount",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.deleteElasticCloudMonitoringAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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

  public async getElasticCloudCcmAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.getElasticCloudCcmAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getElasticCloudCcmAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.getElasticCloudCcmAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getElasticCloudCcmAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud-ccm/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.getElasticCloudCcmAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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

  public async getElasticCloudMonitoringAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.getElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.getElasticCloudMonitoringAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getElasticCloudMonitoringAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.getElasticCloudMonitoringAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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

  public async listElasticCloudCcmAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudCcmAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listElasticCloudCcmAccounts' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.listElasticCloudCcmAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud-ccm/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudCcmAccounts",
      ElasticCloudIntegrationAccountsApi.operationServers,
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

  public async listElasticCloudMonitoringAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudMonitoringAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listElasticCloudMonitoringAccounts' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.listElasticCloudMonitoringAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudMonitoringAccounts",
      ElasticCloudIntegrationAccountsApi.operationServers,
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

  public async updateElasticCloudCcmAccount(
    accountId: string,
    body: ElasticCloudCcmAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.updateElasticCloudCcmAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateElasticCloudCcmAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.updateElasticCloudCcmAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateElasticCloudCcmAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateElasticCloudCcmAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud-ccm/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.updateElasticCloudCcmAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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
      serialize(body, TypingInfo, "ElasticCloudCcmAccountUpdateRequest", ""),
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

  public async updateElasticCloudMonitoringAccount(
    accountId: string,
    body: ElasticCloudMonitoringAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudIntegrationAccountsApi.v2.updateElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudIntegrationAccountsApi.v2.updateElasticCloudMonitoringAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateElasticCloudMonitoringAccount",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateElasticCloudMonitoringAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudIntegrationAccountsApi.v2.updateElasticCloudMonitoringAccount",
      ElasticCloudIntegrationAccountsApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "ElasticCloudMonitoringAccountUpdateRequest",
        "",
      ),
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

export class ElasticCloudIntegrationAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createElasticCloudCcmAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createElasticCloudCcmAccount(
    response: ResponseContext,
  ): Promise<ElasticCloudCcmAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ElasticCloudCcmAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountResponse",
      ) as ElasticCloudCcmAccountResponse;
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
      const body: ElasticCloudCcmAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountResponse",
        "",
      ) as ElasticCloudCcmAccountResponse;
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
   * @params response Response returned by the server for a request to createElasticCloudMonitoringAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createElasticCloudMonitoringAccount(
    response: ResponseContext,
  ): Promise<ElasticCloudMonitoringAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ElasticCloudMonitoringAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountResponse",
      ) as ElasticCloudMonitoringAccountResponse;
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
      const body: ElasticCloudMonitoringAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountResponse",
        "",
      ) as ElasticCloudMonitoringAccountResponse;
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
   * @params response Response returned by the server for a request to deleteElasticCloudCcmAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteElasticCloudCcmAccount(
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
   * @params response Response returned by the server for a request to deleteElasticCloudMonitoringAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteElasticCloudMonitoringAccount(
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
   * @params response Response returned by the server for a request to getElasticCloudCcmAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getElasticCloudCcmAccount(
    response: ResponseContext,
  ): Promise<ElasticCloudCcmAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ElasticCloudCcmAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountResponse",
      ) as ElasticCloudCcmAccountResponse;
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
      const body: ElasticCloudCcmAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountResponse",
        "",
      ) as ElasticCloudCcmAccountResponse;
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
   * @params response Response returned by the server for a request to getElasticCloudMonitoringAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getElasticCloudMonitoringAccount(
    response: ResponseContext,
  ): Promise<ElasticCloudMonitoringAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ElasticCloudMonitoringAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountResponse",
      ) as ElasticCloudMonitoringAccountResponse;
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
      const body: ElasticCloudMonitoringAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountResponse",
        "",
      ) as ElasticCloudMonitoringAccountResponse;
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
   * @params response Response returned by the server for a request to listElasticCloudCcmAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listElasticCloudCcmAccounts(
    response: ResponseContext,
  ): Promise<ElasticCloudCcmAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ElasticCloudCcmAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountsResponse",
      ) as ElasticCloudCcmAccountsResponse;
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
      const body: ElasticCloudCcmAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountsResponse",
        "",
      ) as ElasticCloudCcmAccountsResponse;
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
   * @params response Response returned by the server for a request to listElasticCloudMonitoringAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listElasticCloudMonitoringAccounts(
    response: ResponseContext,
  ): Promise<ElasticCloudMonitoringAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ElasticCloudMonitoringAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountsResponse",
      ) as ElasticCloudMonitoringAccountsResponse;
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
      const body: ElasticCloudMonitoringAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountsResponse",
        "",
      ) as ElasticCloudMonitoringAccountsResponse;
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
   * @params response Response returned by the server for a request to updateElasticCloudCcmAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateElasticCloudCcmAccount(
    response: ResponseContext,
  ): Promise<ElasticCloudCcmAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ElasticCloudCcmAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountResponse",
      ) as ElasticCloudCcmAccountResponse;
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
      const body: ElasticCloudCcmAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudCcmAccountResponse",
        "",
      ) as ElasticCloudCcmAccountResponse;
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
   * @params response Response returned by the server for a request to updateElasticCloudMonitoringAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateElasticCloudMonitoringAccount(
    response: ResponseContext,
  ): Promise<ElasticCloudMonitoringAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ElasticCloudMonitoringAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountResponse",
      ) as ElasticCloudMonitoringAccountResponse;
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
      const body: ElasticCloudMonitoringAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ElasticCloudMonitoringAccountResponse",
        "",
      ) as ElasticCloudMonitoringAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ElasticCloudIntegrationAccountsApiCreateElasticCloudCcmAccountRequest {
  /**
   * @type ElasticCloudCcmAccountRequest
   */
  body: ElasticCloudCcmAccountRequest;
}

export interface ElasticCloudIntegrationAccountsApiCreateElasticCloudMonitoringAccountRequest {
  /**
   * @type ElasticCloudMonitoringAccountRequest
   */
  body: ElasticCloudMonitoringAccountRequest;
}

export interface ElasticCloudIntegrationAccountsApiDeleteElasticCloudCcmAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ElasticCloudIntegrationAccountsApiDeleteElasticCloudMonitoringAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ElasticCloudIntegrationAccountsApiGetElasticCloudCcmAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ElasticCloudIntegrationAccountsApiGetElasticCloudMonitoringAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ElasticCloudIntegrationAccountsApiUpdateElasticCloudCcmAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type ElasticCloudCcmAccountUpdateRequest
   */
  body: ElasticCloudCcmAccountUpdateRequest;
}

export interface ElasticCloudIntegrationAccountsApiUpdateElasticCloudMonitoringAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type ElasticCloudMonitoringAccountUpdateRequest
   */
  body: ElasticCloudMonitoringAccountUpdateRequest;
}

export class ElasticCloudIntegrationAccountsApi {
  private requestFactory: ElasticCloudIntegrationAccountsApiRequestFactory;
  private responseProcessor: ElasticCloudIntegrationAccountsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ElasticCloudIntegrationAccountsApiRequestFactory,
    responseProcessor?: ElasticCloudIntegrationAccountsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ElasticCloudIntegrationAccountsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new ElasticCloudIntegrationAccountsApiResponseProcessor();
  }

  /**
   * Create an Elastic Cloud CCM (Cloud Cost Management) account.
   * @param param The request object
   */
  public createElasticCloudCcmAccount(
    param: ElasticCloudIntegrationAccountsApiCreateElasticCloudCcmAccountRequest,
    options?: Configuration,
  ): Promise<ElasticCloudCcmAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createElasticCloudCcmAccount(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createElasticCloudCcmAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Create an Elastic Cloud monitoring account.
   * @param param The request object
   */
  public createElasticCloudMonitoringAccount(
    param: ElasticCloudIntegrationAccountsApiCreateElasticCloudMonitoringAccountRequest,
    options?: Configuration,
  ): Promise<ElasticCloudMonitoringAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createElasticCloudMonitoringAccount(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createElasticCloudMonitoringAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an Elastic Cloud CCM (Cloud Cost Management) account.
   * @param param The request object
   */
  public deleteElasticCloudCcmAccount(
    param: ElasticCloudIntegrationAccountsApiDeleteElasticCloudCcmAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteElasticCloudCcmAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteElasticCloudCcmAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an Elastic Cloud monitoring account.
   * @param param The request object
   */
  public deleteElasticCloudMonitoringAccount(
    param: ElasticCloudIntegrationAccountsApiDeleteElasticCloudMonitoringAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteElasticCloudMonitoringAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteElasticCloudMonitoringAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single Elastic Cloud CCM (Cloud Cost Management) account.
   * @param param The request object
   */
  public getElasticCloudCcmAccount(
    param: ElasticCloudIntegrationAccountsApiGetElasticCloudCcmAccountRequest,
    options?: Configuration,
  ): Promise<ElasticCloudCcmAccountResponse> {
    const requestContextPromise = this.requestFactory.getElasticCloudCcmAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getElasticCloudCcmAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single Elastic Cloud monitoring account.
   * @param param The request object
   */
  public getElasticCloudMonitoringAccount(
    param: ElasticCloudIntegrationAccountsApiGetElasticCloudMonitoringAccountRequest,
    options?: Configuration,
  ): Promise<ElasticCloudMonitoringAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getElasticCloudMonitoringAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getElasticCloudMonitoringAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List the Elastic Cloud CCM (Cloud Cost Management) accounts.
   * @param param The request object
   */
  public listElasticCloudCcmAccounts(
    options?: Configuration,
  ): Promise<ElasticCloudCcmAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listElasticCloudCcmAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listElasticCloudCcmAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * List the Elastic Cloud monitoring accounts.
   * @param param The request object
   */
  public listElasticCloudMonitoringAccounts(
    options?: Configuration,
  ): Promise<ElasticCloudMonitoringAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listElasticCloudMonitoringAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listElasticCloudMonitoringAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an Elastic Cloud CCM account. The update is a partial merge: only the fields provided are changed, so a name-only or settings-only update does not need to resend the full payload or write-only credentials.
   * @param param The request object
   */
  public updateElasticCloudCcmAccount(
    param: ElasticCloudIntegrationAccountsApiUpdateElasticCloudCcmAccountRequest,
    options?: Configuration,
  ): Promise<ElasticCloudCcmAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateElasticCloudCcmAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateElasticCloudCcmAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an Elastic Cloud monitoring account. The update is a partial merge: only the fields provided are changed, so a name-only or settings-only update does not need to resend the full payload or write-only credentials.
   * @param param The request object
   */
  public updateElasticCloudMonitoringAccount(
    param: ElasticCloudIntegrationAccountsApiUpdateElasticCloudMonitoringAccountRequest,
    options?: Configuration,
  ): Promise<ElasticCloudMonitoringAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateElasticCloudMonitoringAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateElasticCloudMonitoringAccount(
            responseContext,
          );
        });
    });
  }
}
