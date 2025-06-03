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
import { OktaAccountRequest } from "./models/OktaAccountRequest";
import { OktaAccountResponse } from "./models/OktaAccountResponse";
import { OktaAccountsResponse } from "./models/OktaAccountsResponse";
import { OktaAccountUpdateRequest } from "./models/OktaAccountUpdateRequest";
import { version } from "../version";

export class OktaIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("okta-integration", version);
    }
  }
  public async createOktaAccount(
    body: OktaAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOktaAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integrations/okta/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OktaIntegrationApi.v2.createOktaAccount",
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
      serialize(body, TypingInfo, "OktaAccountRequest", ""),
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

  public async deleteOktaAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteOktaAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/okta/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OktaIntegrationApi.v2.deleteOktaAccount",
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

  public async getOktaAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getOktaAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/okta/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OktaIntegrationApi.v2.getOktaAccount",
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

  public async listOktaAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integrations/okta/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OktaIntegrationApi.v2.listOktaAccounts",
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

  public async updateOktaAccount(
    accountId: string,
    body: OktaAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateOktaAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOktaAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/okta/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OktaIntegrationApi.v2.updateOktaAccount",
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
      serialize(body, TypingInfo, "OktaAccountUpdateRequest", ""),
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

export class OktaIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOktaAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOktaAccount(
    response: ResponseContext,
  ): Promise<OktaAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OktaAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountResponse",
      ) as OktaAccountResponse;
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
      const body: OktaAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountResponse",
        "",
      ) as OktaAccountResponse;
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
   * @params response Response returned by the server for a request to deleteOktaAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOktaAccount(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getOktaAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOktaAccount(
    response: ResponseContext,
  ): Promise<OktaAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OktaAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountResponse",
      ) as OktaAccountResponse;
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
      const body: OktaAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountResponse",
        "",
      ) as OktaAccountResponse;
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
   * @params response Response returned by the server for a request to listOktaAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOktaAccounts(
    response: ResponseContext,
  ): Promise<OktaAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OktaAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountsResponse",
      ) as OktaAccountsResponse;
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
      const body: OktaAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountsResponse",
        "",
      ) as OktaAccountsResponse;
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
   * @params response Response returned by the server for a request to updateOktaAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOktaAccount(
    response: ResponseContext,
  ): Promise<OktaAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OktaAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountResponse",
      ) as OktaAccountResponse;
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
      const body: OktaAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OktaAccountResponse",
        "",
      ) as OktaAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OktaIntegrationApiCreateOktaAccountRequest {
  /**
   * @type OktaAccountRequest
   */
  body: OktaAccountRequest;
}

export interface OktaIntegrationApiDeleteOktaAccountRequest {
  /**
   * None
   * @type string
   */
  accountId: string;
}

export interface OktaIntegrationApiGetOktaAccountRequest {
  /**
   * None
   * @type string
   */
  accountId: string;
}

export interface OktaIntegrationApiUpdateOktaAccountRequest {
  /**
   * None
   * @type string
   */
  accountId: string;
  /**
   * @type OktaAccountUpdateRequest
   */
  body: OktaAccountUpdateRequest;
}

export class OktaIntegrationApi {
  private requestFactory: OktaIntegrationApiRequestFactory;
  private responseProcessor: OktaIntegrationApiResponseProcessor;
  private configuration: Configuration;

  private operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OktaIntegrationApiRequestFactory,
    responseProcessor?: OktaIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new OktaIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OktaIntegrationApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Create an Okta account.
   * @param param The request object
   */
  public createOktaAccount(
    param: OktaIntegrationApiCreateOktaAccountRequest,
    options?: Configuration,
  ): Promise<OktaAccountResponse> {
    const requestContextPromise = this.requestFactory.createOktaAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOktaAccount(responseContext);
        });
    });
  }

  /**
   * Delete an Okta account.
   * @param param The request object
   */
  public deleteOktaAccount(
    param: OktaIntegrationApiDeleteOktaAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOktaAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOktaAccount(responseContext);
        });
    });
  }

  /**
   * Get an Okta account.
   * @param param The request object
   */
  public getOktaAccount(
    param: OktaIntegrationApiGetOktaAccountRequest,
    options?: Configuration,
  ): Promise<OktaAccountResponse> {
    const requestContextPromise = this.requestFactory.getOktaAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOktaAccount(responseContext);
        });
    });
  }

  /**
   * List Okta accounts.
   * @param param The request object
   */
  public listOktaAccounts(
    options?: Configuration,
  ): Promise<OktaAccountsResponse> {
    const requestContextPromise = this.requestFactory.listOktaAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOktaAccounts(responseContext);
        });
    });
  }

  /**
   * Update an Okta account.
   * @param param The request object
   */
  public updateOktaAccount(
    param: OktaIntegrationApiUpdateOktaAccountRequest,
    options?: Configuration,
  ): Promise<OktaAccountResponse> {
    const requestContextPromise = this.requestFactory.updateOktaAccount(
      param.accountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOktaAccount(responseContext);
        });
    });
  }
}
