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
import { TwilioAccountRequest } from "./models/TwilioAccountRequest";
import { TwilioAccountResponse } from "./models/TwilioAccountResponse";
import { TwilioAccountsResponse } from "./models/TwilioAccountsResponse";
import { TwilioAccountUpdateRequest } from "./models/TwilioAccountUpdateRequest";
import { version } from "../version";

export class TwilioIntegrationAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("twilio-integration-accounts", version);
    }
  }
  public async createTwilioAccount(
    body: TwilioAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.createTwilioAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createTwilioAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.createTwilioAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTwilioAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/twilio/interfaces/twilio/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.createTwilioAccount",
      TwilioIntegrationAccountsApi.operationServers,
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
      serialize(body, TypingInfo, "TwilioAccountRequest", ""),
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

  public async deleteTwilioAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.deleteTwilioAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteTwilioAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.deleteTwilioAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteTwilioAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/twilio/interfaces/twilio/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.deleteTwilioAccount",
      TwilioIntegrationAccountsApi.operationServers,
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

  public async getTwilioAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.getTwilioAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getTwilioAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.getTwilioAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getTwilioAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/twilio/interfaces/twilio/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.getTwilioAccount",
      TwilioIntegrationAccountsApi.operationServers,
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

  public async listTwilioAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.listTwilioAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listTwilioAccounts' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.listTwilioAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/twilio/interfaces/twilio/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.listTwilioAccounts",
      TwilioIntegrationAccountsApi.operationServers,
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

  public async updateTwilioAccount(
    accountId: string,
    body: TwilioAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.updateTwilioAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateTwilioAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.updateTwilioAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateTwilioAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTwilioAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/twilio/interfaces/twilio/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.updateTwilioAccount",
      TwilioIntegrationAccountsApi.operationServers,
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
      serialize(body, TypingInfo, "TwilioAccountUpdateRequest", ""),
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

export class TwilioIntegrationAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTwilioAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTwilioAccount(
    response: ResponseContext,
  ): Promise<TwilioAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TwilioAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountResponse",
      ) as TwilioAccountResponse;
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
      const body: TwilioAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountResponse",
        "",
      ) as TwilioAccountResponse;
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
   * @params response Response returned by the server for a request to deleteTwilioAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTwilioAccount(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getTwilioAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTwilioAccount(
    response: ResponseContext,
  ): Promise<TwilioAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TwilioAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountResponse",
      ) as TwilioAccountResponse;
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
      const body: TwilioAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountResponse",
        "",
      ) as TwilioAccountResponse;
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
   * @params response Response returned by the server for a request to listTwilioAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTwilioAccounts(
    response: ResponseContext,
  ): Promise<TwilioAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TwilioAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountsResponse",
      ) as TwilioAccountsResponse;
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
      const body: TwilioAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountsResponse",
        "",
      ) as TwilioAccountsResponse;
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
   * @params response Response returned by the server for a request to updateTwilioAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTwilioAccount(
    response: ResponseContext,
  ): Promise<TwilioAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TwilioAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountResponse",
      ) as TwilioAccountResponse;
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
      const body: TwilioAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioAccountResponse",
        "",
      ) as TwilioAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface TwilioIntegrationAccountsApiCreateTwilioAccountRequest {
  /**
   * @type TwilioAccountRequest
   */
  body: TwilioAccountRequest;
}

export interface TwilioIntegrationAccountsApiDeleteTwilioAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface TwilioIntegrationAccountsApiGetTwilioAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface TwilioIntegrationAccountsApiUpdateTwilioAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type TwilioAccountUpdateRequest
   */
  body: TwilioAccountUpdateRequest;
}

export class TwilioIntegrationAccountsApi {
  private requestFactory: TwilioIntegrationAccountsApiRequestFactory;
  private responseProcessor: TwilioIntegrationAccountsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: TwilioIntegrationAccountsApiRequestFactory,
    responseProcessor?: TwilioIntegrationAccountsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new TwilioIntegrationAccountsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new TwilioIntegrationAccountsApiResponseProcessor();
  }

  /**
   * Create a Twilio integration account.
   * @param param The request object
   */
  public createTwilioAccount(
    param: TwilioIntegrationAccountsApiCreateTwilioAccountRequest,
    options?: Configuration,
  ): Promise<TwilioAccountResponse> {
    const requestContextPromise = this.requestFactory.createTwilioAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTwilioAccount(responseContext);
        });
    });
  }

  /**
   * Delete a Twilio integration account.
   * @param param The request object
   */
  public deleteTwilioAccount(
    param: TwilioIntegrationAccountsApiDeleteTwilioAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTwilioAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTwilioAccount(responseContext);
        });
    });
  }

  /**
   * Get a single Twilio integration account.
   * @param param The request object
   */
  public getTwilioAccount(
    param: TwilioIntegrationAccountsApiGetTwilioAccountRequest,
    options?: Configuration,
  ): Promise<TwilioAccountResponse> {
    const requestContextPromise = this.requestFactory.getTwilioAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTwilioAccount(responseContext);
        });
    });
  }

  /**
   * List the Twilio integration accounts.
   * @param param The request object
   */
  public listTwilioAccounts(
    options?: Configuration,
  ): Promise<TwilioAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listTwilioAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTwilioAccounts(responseContext);
        });
    });
  }

  /**
   * Update a Twilio integration account. The update is a partial merge: only the fields provided are changed, so a name-only or settings-only update does not need to resend the full payload or write-only credentials.
   * @param param The request object
   */
  public updateTwilioAccount(
    param: TwilioIntegrationAccountsApiUpdateTwilioAccountRequest,
    options?: Configuration,
  ): Promise<TwilioAccountResponse> {
    const requestContextPromise = this.requestFactory.updateTwilioAccount(
      param.accountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTwilioAccount(responseContext);
        });
    });
  }
}
