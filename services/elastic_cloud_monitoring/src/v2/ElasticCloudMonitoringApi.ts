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
import { ElasticCloudMonitoringAccountRequest } from "./models/ElasticCloudMonitoringAccountRequest";
import { ElasticCloudMonitoringAccountResponse } from "./models/ElasticCloudMonitoringAccountResponse";
import { ElasticCloudMonitoringAccountsResponse } from "./models/ElasticCloudMonitoringAccountsResponse";
import { ElasticCloudMonitoringAccountUpdateRequest } from "./models/ElasticCloudMonitoringAccountUpdateRequest";
import { version } from "../version";

export class ElasticCloudMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("elastic-cloud-monitoring", version);
    }
  }
  public async createElasticCloudMonitoringAccount(
    body: ElasticCloudMonitoringAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudMonitoringApi.v2.createElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudMonitoringApi.v2.createElasticCloudMonitoringAccount'] = true`",
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
      "ElasticCloudMonitoringApi.v2.createElasticCloudMonitoringAccount",
      ElasticCloudMonitoringApi.operationServers,
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

  public async deleteElasticCloudMonitoringAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudMonitoringApi.v2.deleteElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudMonitoringApi.v2.deleteElasticCloudMonitoringAccount'] = true`",
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
      "ElasticCloudMonitoringApi.v2.deleteElasticCloudMonitoringAccount",
      ElasticCloudMonitoringApi.operationServers,
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

  public async getElasticCloudMonitoringAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudMonitoringApi.v2.getElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudMonitoringApi.v2.getElasticCloudMonitoringAccount'] = true`",
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
      "ElasticCloudMonitoringApi.v2.getElasticCloudMonitoringAccount",
      ElasticCloudMonitoringApi.operationServers,
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
        "ElasticCloudMonitoringApi.v2.listElasticCloudMonitoringAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listElasticCloudMonitoringAccounts' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudMonitoringApi.v2.listElasticCloudMonitoringAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/elastic-cloud/interfaces/elastic-cloud/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ElasticCloudMonitoringApi.v2.listElasticCloudMonitoringAccounts",
      ElasticCloudMonitoringApi.operationServers,
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

  public async updateElasticCloudMonitoringAccount(
    accountId: string,
    body: ElasticCloudMonitoringAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ElasticCloudMonitoringApi.v2.updateElasticCloudMonitoringAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateElasticCloudMonitoringAccount' is disabled. Enable it by setting `configuration.unstableOperations['ElasticCloudMonitoringApi.v2.updateElasticCloudMonitoringAccount'] = true`",
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
      "ElasticCloudMonitoringApi.v2.updateElasticCloudMonitoringAccount",
      ElasticCloudMonitoringApi.operationServers,
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

export class ElasticCloudMonitoringApiResponseProcessor {
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

export interface ElasticCloudMonitoringApiCreateElasticCloudMonitoringAccountRequest {
  /**
   * @type ElasticCloudMonitoringAccountRequest
   */
  body: ElasticCloudMonitoringAccountRequest;
}

export interface ElasticCloudMonitoringApiDeleteElasticCloudMonitoringAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ElasticCloudMonitoringApiGetElasticCloudMonitoringAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface ElasticCloudMonitoringApiUpdateElasticCloudMonitoringAccountRequest {
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

export class ElasticCloudMonitoringApi {
  private requestFactory: ElasticCloudMonitoringApiRequestFactory;
  private responseProcessor: ElasticCloudMonitoringApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ElasticCloudMonitoringApiRequestFactory,
    responseProcessor?: ElasticCloudMonitoringApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ElasticCloudMonitoringApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ElasticCloudMonitoringApiResponseProcessor();
  }

  /**
   * Create an Elastic Cloud monitoring account.
   * @param param The request object
   */
  public createElasticCloudMonitoringAccount(
    param: ElasticCloudMonitoringApiCreateElasticCloudMonitoringAccountRequest,
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
   * Delete an Elastic Cloud monitoring account.
   * @param param The request object
   */
  public deleteElasticCloudMonitoringAccount(
    param: ElasticCloudMonitoringApiDeleteElasticCloudMonitoringAccountRequest,
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
   * Get a single Elastic Cloud monitoring account.
   * @param param The request object
   */
  public getElasticCloudMonitoringAccount(
    param: ElasticCloudMonitoringApiGetElasticCloudMonitoringAccountRequest,
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
   * Update an Elastic Cloud monitoring account. The update is a partial merge: only the fields provided are changed, so a name-only or settings-only update does not need to resend the full payload or write-only credentials.
   * @param param The request object
   */
  public updateElasticCloudMonitoringAccount(
    param: ElasticCloudMonitoringApiUpdateElasticCloudMonitoringAccountRequest,
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
