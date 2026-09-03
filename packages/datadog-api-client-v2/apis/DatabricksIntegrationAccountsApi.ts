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
import { DatabricksIntegrationAccountCreateRequest } from "../models/DatabricksIntegrationAccountCreateRequest";
import { DatabricksIntegrationAccountResponse } from "../models/DatabricksIntegrationAccountResponse";
import { DatabricksIntegrationAccountsResponse } from "../models/DatabricksIntegrationAccountsResponse";
import { DatabricksIntegrationAccountUpdateRequest } from "../models/DatabricksIntegrationAccountUpdateRequest";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class DatabricksIntegrationAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDatabricksIntegrationAccount(
    body: DatabricksIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createDatabricksIntegrationAccount'"
    );
    if (!_config.unstableOperations["v2.createDatabricksIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'createDatabricksIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDatabricksIntegrationAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/databricks/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.DatabricksIntegrationAccountsApi.createDatabricksIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "DatabricksIntegrationAccountCreateRequest",
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

  public async deleteDatabricksIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteDatabricksIntegrationAccount'"
    );
    if (!_config.unstableOperations["v2.deleteDatabricksIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'deleteDatabricksIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteDatabricksIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/databricks/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.DatabricksIntegrationAccountsApi.deleteDatabricksIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getDatabricksIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getDatabricksIntegrationAccount'");
    if (!_config.unstableOperations["v2.getDatabricksIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'getDatabricksIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getDatabricksIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/databricks/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.DatabricksIntegrationAccountsApi.getDatabricksIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDatabricksIntegrationAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listDatabricksIntegrationAccounts'");
    if (!_config.unstableOperations["v2.listDatabricksIntegrationAccounts"]) {
      throw new Error(
        "Unstable operation 'listDatabricksIntegrationAccounts' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration-interfaces/databricks/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.DatabricksIntegrationAccountsApi.listDatabricksIntegrationAccounts"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateDatabricksIntegrationAccount(
    accountId: string,
    body: DatabricksIntegrationAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateDatabricksIntegrationAccount'"
    );
    if (!_config.unstableOperations["v2.updateDatabricksIntegrationAccount"]) {
      throw new Error(
        "Unstable operation 'updateDatabricksIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateDatabricksIntegrationAccount"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDatabricksIntegrationAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/databricks/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.DatabricksIntegrationAccountsApi.updateDatabricksIntegrationAccount"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "DatabricksIntegrationAccountUpdateRequest",
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

export class DatabricksIntegrationAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDatabricksIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDatabricksIntegrationAccount(
    response: ResponseContext
  ): Promise<DatabricksIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: DatabricksIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountResponse"
        ) as DatabricksIntegrationAccountResponse;
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
      const body: DatabricksIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountResponse",
          ""
        ) as DatabricksIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteDatabricksIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDatabricksIntegrationAccount(
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
   * @params response Response returned by the server for a request to getDatabricksIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDatabricksIntegrationAccount(
    response: ResponseContext
  ): Promise<DatabricksIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatabricksIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountResponse"
        ) as DatabricksIntegrationAccountResponse;
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
      const body: DatabricksIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountResponse",
          ""
        ) as DatabricksIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listDatabricksIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatabricksIntegrationAccounts(
    response: ResponseContext
  ): Promise<DatabricksIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatabricksIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountsResponse"
        ) as DatabricksIntegrationAccountsResponse;
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
      const body: DatabricksIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountsResponse",
          ""
        ) as DatabricksIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateDatabricksIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDatabricksIntegrationAccount(
    response: ResponseContext
  ): Promise<DatabricksIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatabricksIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountResponse"
        ) as DatabricksIntegrationAccountResponse;
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
      const body: DatabricksIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatabricksIntegrationAccountResponse",
          ""
        ) as DatabricksIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DatabricksIntegrationAccountsApiCreateDatabricksIntegrationAccountRequest {
  /**
   * @type DatabricksIntegrationAccountCreateRequest
   */
  body: DatabricksIntegrationAccountCreateRequest;
}

export interface DatabricksIntegrationAccountsApiDeleteDatabricksIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface DatabricksIntegrationAccountsApiGetDatabricksIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface DatabricksIntegrationAccountsApiUpdateDatabricksIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type DatabricksIntegrationAccountUpdateRequest
   */
  body: DatabricksIntegrationAccountUpdateRequest;
}

export class DatabricksIntegrationAccountsApi {
  private requestFactory: DatabricksIntegrationAccountsApiRequestFactory;
  private responseProcessor: DatabricksIntegrationAccountsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DatabricksIntegrationAccountsApiRequestFactory,
    responseProcessor?: DatabricksIntegrationAccountsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new DatabricksIntegrationAccountsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new DatabricksIntegrationAccountsApiResponseProcessor();
  }

  /**
   * Create a Databricks integration account.
   * @param param The request object
   */
  public createDatabricksIntegrationAccount(
    param: DatabricksIntegrationAccountsApiCreateDatabricksIntegrationAccountRequest,
    options?: Configuration
  ): Promise<DatabricksIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createDatabricksIntegrationAccount(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDatabricksIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a Databricks integration account.
   * @param param The request object
   */
  public deleteDatabricksIntegrationAccount(
    param: DatabricksIntegrationAccountsApiDeleteDatabricksIntegrationAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteDatabricksIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDatabricksIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Get a Databricks integration account.
   * @param param The request object
   */
  public getDatabricksIntegrationAccount(
    param: DatabricksIntegrationAccountsApiGetDatabricksIntegrationAccountRequest,
    options?: Configuration
  ): Promise<DatabricksIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getDatabricksIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDatabricksIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List Databricks integration accounts.
   * @param param The request object
   */
  public listDatabricksIntegrationAccounts(
    options?: Configuration
  ): Promise<DatabricksIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listDatabricksIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDatabricksIntegrationAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Databricks integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateDatabricksIntegrationAccount(
    param: DatabricksIntegrationAccountsApiUpdateDatabricksIntegrationAccountRequest,
    options?: Configuration
  ): Promise<DatabricksIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateDatabricksIntegrationAccount(
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDatabricksIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
