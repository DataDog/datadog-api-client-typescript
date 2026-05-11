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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { WebIntegrationAccountCreateRequest } from "../models/WebIntegrationAccountCreateRequest";
import { WebIntegrationAccountResponse } from "../models/WebIntegrationAccountResponse";
import { WebIntegrationAccountsResponse } from "../models/WebIntegrationAccountsResponse";
import { WebIntegrationAccountUpdateRequest } from "../models/WebIntegrationAccountUpdateRequest";

export class WebIntegrationsApiRequestFactory extends BaseAPIRequestFactory {
  public async createWebIntegrationAccount(
    integrationName: string,
    body: WebIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createWebIntegrationAccount'");
    if (!_config.unstableOperations["v2.createWebIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'createWebIntegrationAccount' is disabled"
      );
    }

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
        encodeURIComponent(String(integrationName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WebIntegrationsApi.createWebIntegrationAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "WebIntegrationAccountCreateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteWebIntegrationAccount'");
    if (!_config.unstableOperations["v2.deleteWebIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'deleteWebIntegrationAccount' is disabled"
      );
    }

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
          encodeURIComponent(String(integrationName))
        )
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WebIntegrationsApi.deleteWebIntegrationAccount")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getWebIntegrationAccount'");
    if (!_config.unstableOperations["v2.getWebIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'getWebIntegrationAccount' is disabled"
      );
    }

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
          encodeURIComponent(String(integrationName))
        )
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WebIntegrationsApi.getWebIntegrationAccount")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listWebIntegrationAccounts(
    integrationName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listWebIntegrationAccounts'");
    if (!_config.unstableOperations["v2.listWebIntegrationAccounts"]) {
      throw new Error(
        "Unstable operation 'listWebIntegrationAccounts' is disabled"
      );
    }

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "listWebIntegrationAccounts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/web-integrations/{integration_name}/accounts".replace(
        "{integration_name}",
        encodeURIComponent(String(integrationName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WebIntegrationsApi.listWebIntegrationAccounts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateWebIntegrationAccount'");
    if (!_config.unstableOperations["v2.updateWebIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'updateWebIntegrationAccount' is disabled"
      );
    }

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
          encodeURIComponent(String(integrationName))
        )
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WebIntegrationsApi.updateWebIntegrationAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "WebIntegrationAccountUpdateRequest",
        ""
      ),
      contentType
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
    response: ResponseContext
  ): Promise<WebIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: WebIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountResponse"
      ) as WebIntegrationAccountResponse;
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
      const body: WebIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountResponse",
        ""
      ) as WebIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWebIntegrationAccount(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to getWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebIntegrationAccount(
    response: ResponseContext
  ): Promise<WebIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountResponse"
      ) as WebIntegrationAccountResponse;
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: WebIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountResponse",
        ""
      ) as WebIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listWebIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listWebIntegrationAccounts(
    response: ResponseContext
  ): Promise<WebIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountsResponse"
      ) as WebIntegrationAccountsResponse;
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: WebIntegrationAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountsResponse",
        ""
      ) as WebIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateWebIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWebIntegrationAccount(
    response: ResponseContext
  ): Promise<WebIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WebIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountResponse"
      ) as WebIntegrationAccountResponse;
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
      const body: WebIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebIntegrationAccountResponse",
        ""
      ) as WebIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface WebIntegrationsApiCreateWebIntegrationAccountRequest {
  /**
   * The name of the integration (for example, `databricks`).
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
   * The name of the integration (for example, `databricks`).
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the web integration account.
   * @type string
   */
  accountId: string;
}

export interface WebIntegrationsApiGetWebIntegrationAccountRequest {
  /**
   * The name of the integration (for example, `databricks`).
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the web integration account.
   * @type string
   */
  accountId: string;
}

export interface WebIntegrationsApiListWebIntegrationAccountsRequest {
  /**
   * The name of the integration (for example, `databricks`).
   * @type string
   */
  integrationName: string;
}

export interface WebIntegrationsApiUpdateWebIntegrationAccountRequest {
  /**
   * The name of the integration (for example, `databricks`).
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the web integration account.
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

  public constructor(
    configuration: Configuration,
    requestFactory?: WebIntegrationsApiRequestFactory,
    responseProcessor?: WebIntegrationsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WebIntegrationsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WebIntegrationsApiResponseProcessor();
  }

  /**
   * Create a new account for a given web integration.
   * @param param The request object
   */
  public createWebIntegrationAccount(
    param: WebIntegrationsApiCreateWebIntegrationAccountRequest,
    options?: Configuration
  ): Promise<WebIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createWebIntegrationAccount(
        param.integrationName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an account for a given web integration.
   * @param param The request object
   */
  public deleteWebIntegrationAccount(
    param: WebIntegrationsApiDeleteWebIntegrationAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWebIntegrationAccount(
        param.integrationName,
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Get a single account for a given web integration.
   * @param param The request object
   */
  public getWebIntegrationAccount(
    param: WebIntegrationsApiGetWebIntegrationAccountRequest,
    options?: Configuration
  ): Promise<WebIntegrationAccountResponse> {
    const requestContextPromise = this.requestFactory.getWebIntegrationAccount(
      param.integrationName,
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List accounts for a given web integration.
   * @param param The request object
   */
  public listWebIntegrationAccounts(
    param: WebIntegrationsApiListWebIntegrationAccountsRequest,
    options?: Configuration
  ): Promise<WebIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listWebIntegrationAccounts(
        param.integrationName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listWebIntegrationAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Update an existing account for a given web integration.
   * @param param The request object
   */
  public updateWebIntegrationAccount(
    param: WebIntegrationsApiUpdateWebIntegrationAccountRequest,
    options?: Configuration
  ): Promise<WebIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateWebIntegrationAccount(
        param.integrationName,
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
