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
import { WebIntegrationAccountCreateRequest } from "./models/WebIntegrationAccountCreateRequest";
import { WebIntegrationAccountResponse } from "./models/WebIntegrationAccountResponse";
import { WebIntegrationAccountSchemaResponse } from "./models/WebIntegrationAccountSchemaResponse";
import { WebIntegrationAccountsResponse } from "./models/WebIntegrationAccountsResponse";
import { WebIntegrationAccountUpdateRequest } from "./models/WebIntegrationAccountUpdateRequest";
import { version } from "../version";

export class WebIntegrationsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("web-integrations", version);
    }
  }
  public async createWebIntegrationAccount(
    integrationName: string,
    body: WebIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "createWebIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWebIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts".replace(
        "{integration_name}",
        encodeURIComponent(String(integrationName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebIntegrationsApi.v2.createWebIntegrationAccount",
      WebIntegrationsApi.operationServers,
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
      serialize(body, TypingInfo, "WebIntegrationAccountCreateRequest", ""),
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

  public async deleteWebIntegrationAccount(
    integrationName: string,
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "deleteWebIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteWebIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts/{account_id}"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName)),
        )
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebIntegrationsApi.v2.deleteWebIntegrationAccount",
      WebIntegrationsApi.operationServers,
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

  public async getWebIntegrationAccount(
    integrationName: string,
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "getWebIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getWebIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts/{account_id}"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName)),
        )
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebIntegrationsApi.v2.getWebIntegrationAccount",
      WebIntegrationsApi.operationServers,
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

  public async getWebIntegrationAccountSchema(
    integrationName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError(
        "integrationName",
        "getWebIntegrationAccountSchema",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts/schema".replace(
        "{integration_name}",
        encodeURIComponent(String(integrationName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebIntegrationsApi.v2.getWebIntegrationAccountSchema",
      WebIntegrationsApi.operationServers,
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

  public async listWebIntegrationAccounts(
    integrationName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "listWebIntegrationAccounts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts".replace(
        "{integration_name}",
        encodeURIComponent(String(integrationName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebIntegrationsApi.v2.listWebIntegrationAccounts",
      WebIntegrationsApi.operationServers,
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

  public async updateWebIntegrationAccount(
    integrationName: string,
    accountId: string,
    body: WebIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "updateWebIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateWebIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateWebIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts/{account_id}"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName)),
        )
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebIntegrationsApi.v2.updateWebIntegrationAccount",
      WebIntegrationsApi.operationServers,
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
      serialize(body, TypingInfo, "WebIntegrationAccountUpdateRequest", ""),
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

export class WebIntegrationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWebIntegrationAccount(
    response: ResponseContext,
  ): Promise<WebIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: WebIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountResponse",
      ) as WebIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: WebIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountResponse",
        "",
      ) as WebIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWebIntegrationAccount(
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
   * @params response Response returned by the server for a request to getWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebIntegrationAccount(
    response: ResponseContext,
  ): Promise<WebIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountResponse",
      ) as WebIntegrationAccountResponse;
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
      const body: WebIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountResponse",
        "",
      ) as WebIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to getWebIntegrationAccountSchema
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebIntegrationAccountSchema(
    response: ResponseContext,
  ): Promise<WebIntegrationAccountSchemaResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountSchemaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountSchemaResponse",
      ) as WebIntegrationAccountSchemaResponse;
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
      const body: WebIntegrationAccountSchemaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountSchemaResponse",
        "",
      ) as WebIntegrationAccountSchemaResponse;
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
   * @params response Response returned by the server for a request to listWebIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listWebIntegrationAccounts(
    response: ResponseContext,
  ): Promise<WebIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountsResponse",
      ) as WebIntegrationAccountsResponse;
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
      const body: WebIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountsResponse",
        "",
      ) as WebIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWebIntegrationAccount(
    response: ResponseContext,
  ): Promise<WebIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountResponse",
      ) as WebIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: WebIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebIntegrationAccountResponse",
        "",
      ) as WebIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface WebIntegrationsApiCreateWebIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * @type WebIntegrationAccountCreateRequest
   */
  body: WebIntegrationAccountCreateRequest;
}

export interface WebIntegrationsApiDeleteWebIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the account.
   * @type string
   */
  accountId: string;
}

export interface WebIntegrationsApiGetWebIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the account.
   * @type string
   */
  accountId: string;
}

export interface WebIntegrationsApiGetWebIntegrationAccountSchemaRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
}

export interface WebIntegrationsApiListWebIntegrationAccountsRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
}

export interface WebIntegrationsApiUpdateWebIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the account.
   * @type string
   */
  accountId: string;
  /**
   * @type WebIntegrationAccountUpdateRequest
   */
  body: WebIntegrationAccountUpdateRequest;
}

export class WebIntegrationsApi {
  private requestFactory: WebIntegrationsApiRequestFactory;
  private responseProcessor: WebIntegrationsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: WebIntegrationsApiRequestFactory,
    responseProcessor?: WebIntegrationsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new WebIntegrationsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new WebIntegrationsApiResponseProcessor();
  }

  /**
   * Create a new account for a specific integration. The account configuration must conform
   * to the schema defined for the integration, which can be retrieved using the schema endpoint.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public createWebIntegrationAccount(
    param: WebIntegrationsApiCreateWebIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<WebIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createWebIntegrationAccount(
        param.integrationName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific account by its ID for a given integration. This will remove the
   * account configuration and stop any data collection associated with it.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public deleteWebIntegrationAccount(
    param: WebIntegrationsApiDeleteWebIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWebIntegrationAccount(
        param.integrationName,
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a specific account by its ID for a given integration. The response includes
   * the account name and settings, but excludes sensitive secret values.
   *
   * Rate limit: 12000 requests per organization every 60 seconds.
   * @param param The request object
   */
  public getWebIntegrationAccount(
    param: WebIntegrationsApiGetWebIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<WebIntegrationAccountResponse> {
    const requestContextPromise = this.requestFactory.getWebIntegrationAccount(
      param.integrationName,
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the JSON schema that defines the structure and validation rules for account configuration
   * of a specific integration. This schema describes the required and optional fields for both
   * settings and secrets when creating or updating an account.
   *
   * Rate limit: 12000 requests per organization every 60 seconds.
   * @param param The request object
   */
  public getWebIntegrationAccountSchema(
    param: WebIntegrationsApiGetWebIntegrationAccountSchemaRequest,
    options?: Configuration,
  ): Promise<WebIntegrationAccountSchemaResponse> {
    const requestContextPromise =
      this.requestFactory.getWebIntegrationAccountSchema(
        param.integrationName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebIntegrationAccountSchema(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve all configured accounts for a specific integration within your organization.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public listWebIntegrationAccounts(
    param: WebIntegrationsApiListWebIntegrationAccountsRequest,
    options?: Configuration,
  ): Promise<WebIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listWebIntegrationAccounts(
        param.integrationName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listWebIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an existing account for a specific integration. You can update the name, settings,
   * and/or secrets. Only the fields provided in the request will be updated.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public updateWebIntegrationAccount(
    param: WebIntegrationsApiUpdateWebIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<WebIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateWebIntegrationAccount(
        param.integrationName,
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
