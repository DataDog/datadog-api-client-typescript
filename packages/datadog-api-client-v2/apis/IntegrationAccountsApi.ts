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

import { AmsIntegrationAccountCreateRequest } from "../models/AmsIntegrationAccountCreateRequest";
import { AmsIntegrationAccountResponse } from "../models/AmsIntegrationAccountResponse";
import { AmsIntegrationAccountSchemaResponse } from "../models/AmsIntegrationAccountSchemaResponse";
import { AmsIntegrationAccountsResponse } from "../models/AmsIntegrationAccountsResponse";
import { AmsIntegrationAccountUpdateRequest } from "../models/AmsIntegrationAccountUpdateRequest";
import { APIErrorResponse } from "../models/APIErrorResponse";

export class IntegrationAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public async createAmsIntegrationAccount(
    integrationName: string,
    interfaceId: string,
    body: AmsIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "createAmsIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "createAmsIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAmsIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_name}/interfaces/{interface_id}/accounts"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName))
        )
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IntegrationAccountsApi.createAmsIntegrationAccount")
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
        "AmsIntegrationAccountCreateRequest",
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

  public async deleteAmsIntegrationAccount(
    integrationName: string,
    interfaceId: string,
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "deleteAmsIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "deleteAmsIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteAmsIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_name}/interfaces/{interface_id}/accounts/{account_id}"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName))
        )
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IntegrationAccountsApi.deleteAmsIntegrationAccount")
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

  public async getAmsIntegrationAccount(
    integrationName: string,
    interfaceId: string,
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "getAmsIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "getAmsIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getAmsIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_name}/interfaces/{interface_id}/accounts/{account_id}"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName))
        )
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IntegrationAccountsApi.getAmsIntegrationAccount")
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

  public async getAmsIntegrationAccountSchema(
    integrationName: string,
    interfaceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError(
        "integrationName",
        "getAmsIntegrationAccountSchema"
      );
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "getAmsIntegrationAccountSchema");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_name}/interfaces/{interface_id}/accounts/schema"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName))
        )
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IntegrationAccountsApi.getAmsIntegrationAccountSchema")
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

  public async listAmsIntegrationAccounts(
    integrationName: string,
    interfaceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "listAmsIntegrationAccounts");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "listAmsIntegrationAccounts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_name}/interfaces/{interface_id}/accounts"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName))
        )
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IntegrationAccountsApi.listAmsIntegrationAccounts")
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

  public async updateAmsIntegrationAccount(
    integrationName: string,
    interfaceId: string,
    accountId: string,
    body: AmsIntegrationAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationName' is not null or undefined
    if (integrationName === null || integrationName === undefined) {
      throw new RequiredError("integrationName", "updateAmsIntegrationAccount");
    }

    // verify required parameter 'interfaceId' is not null or undefined
    if (interfaceId === null || interfaceId === undefined) {
      throw new RequiredError("interfaceId", "updateAmsIntegrationAccount");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateAmsIntegrationAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAmsIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/{integration_name}/interfaces/{interface_id}/accounts/{account_id}"
        .replace(
          "{integration_name}",
          encodeURIComponent(String(integrationName))
        )
        .replace("{interface_id}", encodeURIComponent(String(interfaceId)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IntegrationAccountsApi.updateAmsIntegrationAccount")
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
        "AmsIntegrationAccountUpdateRequest",
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

export class IntegrationAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAmsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAmsIntegrationAccount(
    response: ResponseContext
  ): Promise<AmsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AmsIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountResponse"
      ) as AmsIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: AmsIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountResponse",
        ""
      ) as AmsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteAmsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAmsIntegrationAccount(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to getAmsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAmsIntegrationAccount(
    response: ResponseContext
  ): Promise<AmsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AmsIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountResponse"
      ) as AmsIntegrationAccountResponse;
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
      const body: AmsIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountResponse",
        ""
      ) as AmsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to getAmsIntegrationAccountSchema
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAmsIntegrationAccountSchema(
    response: ResponseContext
  ): Promise<AmsIntegrationAccountSchemaResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AmsIntegrationAccountSchemaResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AmsIntegrationAccountSchemaResponse"
        ) as AmsIntegrationAccountSchemaResponse;
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
      const body: AmsIntegrationAccountSchemaResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AmsIntegrationAccountSchemaResponse",
          ""
        ) as AmsIntegrationAccountSchemaResponse;
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
   * @params response Response returned by the server for a request to listAmsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAmsIntegrationAccounts(
    response: ResponseContext
  ): Promise<AmsIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AmsIntegrationAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountsResponse"
      ) as AmsIntegrationAccountsResponse;
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
      const body: AmsIntegrationAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountsResponse",
        ""
      ) as AmsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateAmsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAmsIntegrationAccount(
    response: ResponseContext
  ): Promise<AmsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AmsIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountResponse"
      ) as AmsIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: AmsIntegrationAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AmsIntegrationAccountResponse",
        ""
      ) as AmsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface IntegrationAccountsApiCreateAmsIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the interface.
   * @type string
   */
  interfaceId: string;
  /**
   * @type AmsIntegrationAccountCreateRequest
   */
  body: AmsIntegrationAccountCreateRequest;
}

export interface IntegrationAccountsApiDeleteAmsIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the interface.
   * @type string
   */
  interfaceId: string;
  /**
   * The unique identifier of the account.
   * @type string
   */
  accountId: string;
}

export interface IntegrationAccountsApiGetAmsIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the interface.
   * @type string
   */
  interfaceId: string;
  /**
   * The unique identifier of the account.
   * @type string
   */
  accountId: string;
}

export interface IntegrationAccountsApiGetAmsIntegrationAccountSchemaRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the interface.
   * @type string
   */
  interfaceId: string;
}

export interface IntegrationAccountsApiListAmsIntegrationAccountsRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the interface.
   * @type string
   */
  interfaceId: string;
}

export interface IntegrationAccountsApiUpdateAmsIntegrationAccountRequest {
  /**
   * The name of the integration.
   * @type string
   */
  integrationName: string;
  /**
   * The unique identifier of the interface.
   * @type string
   */
  interfaceId: string;
  /**
   * The unique identifier of the account.
   * @type string
   */
  accountId: string;
  /**
   * @type AmsIntegrationAccountUpdateRequest
   */
  body: AmsIntegrationAccountUpdateRequest;
}

export class IntegrationAccountsApi {
  private requestFactory: IntegrationAccountsApiRequestFactory;
  private responseProcessor: IntegrationAccountsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IntegrationAccountsApiRequestFactory,
    responseProcessor?: IntegrationAccountsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IntegrationAccountsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IntegrationAccountsApiResponseProcessor();
  }

  /**
   * Create a new account for a specific integration. The account configuration must conform
   * to the schema defined for the integration, which can be retrieved using the schema endpoint.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public createAmsIntegrationAccount(
    param: IntegrationAccountsApiCreateAmsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<AmsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createAmsIntegrationAccount(
        param.integrationName,
        param.interfaceId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAmsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific account by its ID for a given integration. This removes the
   * account configuration and stops any data collection associated with it.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public deleteAmsIntegrationAccount(
    param: IntegrationAccountsApiDeleteAmsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAmsIntegrationAccount(
        param.integrationName,
        param.interfaceId,
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAmsIntegrationAccount(
            responseContext
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
  public getAmsIntegrationAccount(
    param: IntegrationAccountsApiGetAmsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<AmsIntegrationAccountResponse> {
    const requestContextPromise = this.requestFactory.getAmsIntegrationAccount(
      param.integrationName,
      param.interfaceId,
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAmsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Get the JSON schema that defines the structure and validation rules for account configuration
   * of a specific integration. This schema describes the required and optional fields for both
   * **settings** and **secrets** when creating or updating an account.
   *
   * The schema structure varies between integrations, so always retrieve the schema for your
   * specific integration before creating or updating accounts.
   *
   * Rate limit: 12000 requests per organization every 60 seconds.
   * @param param The request object
   */
  public getAmsIntegrationAccountSchema(
    param: IntegrationAccountsApiGetAmsIntegrationAccountSchemaRequest,
    options?: Configuration
  ): Promise<AmsIntegrationAccountSchemaResponse> {
    const requestContextPromise =
      this.requestFactory.getAmsIntegrationAccountSchema(
        param.integrationName,
        param.interfaceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAmsIntegrationAccountSchema(
            responseContext
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
  public listAmsIntegrationAccounts(
    param: IntegrationAccountsApiListAmsIntegrationAccountsRequest,
    options?: Configuration
  ): Promise<AmsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listAmsIntegrationAccounts(
        param.integrationName,
        param.interfaceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAmsIntegrationAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Update an existing account for a specific integration. You can update the name, settings,
   * and secrets. Only the fields provided in the request are updated.
   *
   * Rate limit: 50 requests per user every 20 seconds.
   * @param param The request object
   */
  public updateAmsIntegrationAccount(
    param: IntegrationAccountsApiUpdateAmsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<AmsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateAmsIntegrationAccount(
        param.integrationName,
        param.interfaceId,
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAmsIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
