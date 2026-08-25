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
import { TwilioIntegrationAccountCreateRequest } from "./models/TwilioIntegrationAccountCreateRequest";
import { TwilioIntegrationAccountResponse } from "./models/TwilioIntegrationAccountResponse";
import { TwilioIntegrationAccountsResponse } from "./models/TwilioIntegrationAccountsResponse";
import { TwilioIntegrationAccountUpdateRequest } from "./models/TwilioIntegrationAccountUpdateRequest";
import { version } from "../version";

export class TwilioIntegrationAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("twilio-integration-accounts", version);
    }
  }
  public async createTwilioIntegrationAccount(
    body: TwilioIntegrationAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.createTwilioIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createTwilioIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.createTwilioIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTwilioIntegrationAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/twilio/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.createTwilioIntegrationAccount",
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
      serialize(body, TypingInfo, "TwilioIntegrationAccountCreateRequest", ""),
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

  public async deleteTwilioIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.deleteTwilioIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteTwilioIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.deleteTwilioIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteTwilioIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/twilio/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.deleteTwilioIntegrationAccount",
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

  public async getTwilioIntegrationAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.getTwilioIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getTwilioIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.getTwilioIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getTwilioIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/twilio/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.getTwilioIntegrationAccount",
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

  public async listTwilioIntegrationAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.listTwilioIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listTwilioIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.listTwilioIntegrationAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/twilio/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.listTwilioIntegrationAccounts",
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

  public async updateTwilioIntegrationAccount(
    accountId: string,
    body: TwilioIntegrationAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TwilioIntegrationAccountsApi.v2.updateTwilioIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateTwilioIntegrationAccount' is disabled. Enable it by setting `configuration.unstableOperations['TwilioIntegrationAccountsApi.v2.updateTwilioIntegrationAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateTwilioIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTwilioIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/twilio/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TwilioIntegrationAccountsApi.v2.updateTwilioIntegrationAccount",
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
      serialize(body, TypingInfo, "TwilioIntegrationAccountUpdateRequest", ""),
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
   * @params response Response returned by the server for a request to createTwilioIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTwilioIntegrationAccount(
    response: ResponseContext,
  ): Promise<TwilioIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TwilioIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountResponse",
      ) as TwilioIntegrationAccountResponse;
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
      const body: TwilioIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountResponse",
        "",
      ) as TwilioIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteTwilioIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTwilioIntegrationAccount(
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
   * @params response Response returned by the server for a request to getTwilioIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTwilioIntegrationAccount(
    response: ResponseContext,
  ): Promise<TwilioIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TwilioIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountResponse",
      ) as TwilioIntegrationAccountResponse;
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
      const body: TwilioIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountResponse",
        "",
      ) as TwilioIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listTwilioIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTwilioIntegrationAccounts(
    response: ResponseContext,
  ): Promise<TwilioIntegrationAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TwilioIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountsResponse",
      ) as TwilioIntegrationAccountsResponse;
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
      const body: TwilioIntegrationAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountsResponse",
        "",
      ) as TwilioIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateTwilioIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTwilioIntegrationAccount(
    response: ResponseContext,
  ): Promise<TwilioIntegrationAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TwilioIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountResponse",
      ) as TwilioIntegrationAccountResponse;
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
      const body: TwilioIntegrationAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TwilioIntegrationAccountResponse",
        "",
      ) as TwilioIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface TwilioIntegrationAccountsApiCreateTwilioIntegrationAccountRequest {
  /**
   * @type TwilioIntegrationAccountCreateRequest
   */
  body: TwilioIntegrationAccountCreateRequest;
}

export interface TwilioIntegrationAccountsApiDeleteTwilioIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface TwilioIntegrationAccountsApiGetTwilioIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface TwilioIntegrationAccountsApiUpdateTwilioIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type TwilioIntegrationAccountUpdateRequest
   */
  body: TwilioIntegrationAccountUpdateRequest;
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
  public createTwilioIntegrationAccount(
    param: TwilioIntegrationAccountsApiCreateTwilioIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<TwilioIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createTwilioIntegrationAccount(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTwilioIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Twilio integration account.
   * @param param The request object
   */
  public deleteTwilioIntegrationAccount(
    param: TwilioIntegrationAccountsApiDeleteTwilioIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteTwilioIntegrationAccount(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTwilioIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Twilio integration account.
   * @param param The request object
   */
  public getTwilioIntegrationAccount(
    param: TwilioIntegrationAccountsApiGetTwilioIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<TwilioIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getTwilioIntegrationAccount(param.accountId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTwilioIntegrationAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * List Twilio integration accounts.
   * @param param The request object
   */
  public listTwilioIntegrationAccounts(
    options?: Configuration,
  ): Promise<TwilioIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listTwilioIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTwilioIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Twilio integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateTwilioIntegrationAccount(
    param: TwilioIntegrationAccountsApiUpdateTwilioIntegrationAccountRequest,
    options?: Configuration,
  ): Promise<TwilioIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateTwilioIntegrationAccount(
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTwilioIntegrationAccount(
            responseContext,
          );
        });
    });
  }
}
