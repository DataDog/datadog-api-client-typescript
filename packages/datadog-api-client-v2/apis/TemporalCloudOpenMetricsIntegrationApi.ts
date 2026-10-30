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
import { TemporalCloudOpenMetricsIntegrationAccountCreateRequest } from "../models/TemporalCloudOpenMetricsIntegrationAccountCreateRequest";
import { TemporalCloudOpenMetricsIntegrationAccountResponse } from "../models/TemporalCloudOpenMetricsIntegrationAccountResponse";
import { TemporalCloudOpenMetricsIntegrationAccountsResponse } from "../models/TemporalCloudOpenMetricsIntegrationAccountsResponse";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateRequest } from "../models/TemporalCloudOpenMetricsIntegrationAccountUpdateRequest";

export class TemporalCloudOpenMetricsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createTemporalCloudOpenMetricsIntegrationAccount(
    body: TemporalCloudOpenMetricsIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createTemporalCloudOpenMetricsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.createTemporalCloudOpenMetricsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createTemporalCloudOpenMetricsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createTemporalCloudOpenMetricsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/temporal-cloud-openmetrics/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.TemporalCloudOpenMetricsIntegrationApi.createTemporalCloudOpenMetricsIntegrationAccount"
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
        "TemporalCloudOpenMetricsIntegrationAccountCreateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteTemporalCloudOpenMetricsIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteTemporalCloudOpenMetricsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.deleteTemporalCloudOpenMetricsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteTemporalCloudOpenMetricsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteTemporalCloudOpenMetricsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/temporal-cloud-openmetrics/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.TemporalCloudOpenMetricsIntegrationApi.deleteTemporalCloudOpenMetricsIntegrationAccount"
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTemporalCloudOpenMetricsIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getTemporalCloudOpenMetricsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.getTemporalCloudOpenMetricsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getTemporalCloudOpenMetricsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getTemporalCloudOpenMetricsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/temporal-cloud-openmetrics/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.TemporalCloudOpenMetricsIntegrationApi.getTemporalCloudOpenMetricsIntegrationAccount"
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listTemporalCloudOpenMetricsIntegrationAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listTemporalCloudOpenMetricsIntegrationAccounts'"
    );
    if (
      !_config.unstableOperations[
        "v2.listTemporalCloudOpenMetricsIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listTemporalCloudOpenMetricsIntegrationAccounts' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/temporal-cloud-openmetrics/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.TemporalCloudOpenMetricsIntegrationApi.listTemporalCloudOpenMetricsIntegrationAccounts"
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateTemporalCloudOpenMetricsIntegrationAccount(
    accountId: string,
    body: TemporalCloudOpenMetricsIntegrationAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateTemporalCloudOpenMetricsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateTemporalCloudOpenMetricsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateTemporalCloudOpenMetricsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateTemporalCloudOpenMetricsIntegrationAccount"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateTemporalCloudOpenMetricsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/temporal-cloud-openmetrics/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.TemporalCloudOpenMetricsIntegrationApi.updateTemporalCloudOpenMetricsIntegrationAccount"
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
        "TemporalCloudOpenMetricsIntegrationAccountUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class TemporalCloudOpenMetricsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTemporalCloudOpenMetricsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTemporalCloudOpenMetricsIntegrationAccount(
    response: ResponseContext
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TemporalCloudOpenMetricsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountResponse"
        ) as TemporalCloudOpenMetricsIntegrationAccountResponse;
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
      const body: TemporalCloudOpenMetricsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountResponse",
          ""
        ) as TemporalCloudOpenMetricsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteTemporalCloudOpenMetricsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTemporalCloudOpenMetricsIntegrationAccount(
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
   * @params response Response returned by the server for a request to getTemporalCloudOpenMetricsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTemporalCloudOpenMetricsIntegrationAccount(
    response: ResponseContext
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TemporalCloudOpenMetricsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountResponse"
        ) as TemporalCloudOpenMetricsIntegrationAccountResponse;
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
      const body: TemporalCloudOpenMetricsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountResponse",
          ""
        ) as TemporalCloudOpenMetricsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listTemporalCloudOpenMetricsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTemporalCloudOpenMetricsIntegrationAccounts(
    response: ResponseContext
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TemporalCloudOpenMetricsIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountsResponse"
        ) as TemporalCloudOpenMetricsIntegrationAccountsResponse;
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
      const body: TemporalCloudOpenMetricsIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountsResponse",
          ""
        ) as TemporalCloudOpenMetricsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateTemporalCloudOpenMetricsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTemporalCloudOpenMetricsIntegrationAccount(
    response: ResponseContext
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TemporalCloudOpenMetricsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountResponse"
        ) as TemporalCloudOpenMetricsIntegrationAccountResponse;
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
      const body: TemporalCloudOpenMetricsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "TemporalCloudOpenMetricsIntegrationAccountResponse",
          ""
        ) as TemporalCloudOpenMetricsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface TemporalCloudOpenMetricsIntegrationApiCreateTemporalCloudOpenMetricsIntegrationAccountRequest {
  /**
   * @type TemporalCloudOpenMetricsIntegrationAccountCreateRequest
   */
  body: TemporalCloudOpenMetricsIntegrationAccountCreateRequest;
}

export interface TemporalCloudOpenMetricsIntegrationApiDeleteTemporalCloudOpenMetricsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface TemporalCloudOpenMetricsIntegrationApiGetTemporalCloudOpenMetricsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface TemporalCloudOpenMetricsIntegrationApiUpdateTemporalCloudOpenMetricsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type TemporalCloudOpenMetricsIntegrationAccountUpdateRequest
   */
  body: TemporalCloudOpenMetricsIntegrationAccountUpdateRequest;
}

export class TemporalCloudOpenMetricsIntegrationApi {
  private requestFactory: TemporalCloudOpenMetricsIntegrationApiRequestFactory;
  private responseProcessor: TemporalCloudOpenMetricsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TemporalCloudOpenMetricsIntegrationApiRequestFactory,
    responseProcessor?: TemporalCloudOpenMetricsIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new TemporalCloudOpenMetricsIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new TemporalCloudOpenMetricsIntegrationApiResponseProcessor();
  }

  /**
   * Create a Temporal Cloud OpenMetrics integration account.
   * @param param The request object
   */
  public createTemporalCloudOpenMetricsIntegrationAccount(
    param: TemporalCloudOpenMetricsIntegrationApiCreateTemporalCloudOpenMetricsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createTemporalCloudOpenMetricsIntegrationAccount(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTemporalCloudOpenMetricsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a Temporal Cloud OpenMetrics integration account.
   * @param param The request object
   */
  public deleteTemporalCloudOpenMetricsIntegrationAccount(
    param: TemporalCloudOpenMetricsIntegrationApiDeleteTemporalCloudOpenMetricsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteTemporalCloudOpenMetricsIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTemporalCloudOpenMetricsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Get a Temporal Cloud OpenMetrics integration account.
   * @param param The request object
   */
  public getTemporalCloudOpenMetricsIntegrationAccount(
    param: TemporalCloudOpenMetricsIntegrationApiGetTemporalCloudOpenMetricsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getTemporalCloudOpenMetricsIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTemporalCloudOpenMetricsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List Temporal Cloud OpenMetrics integration accounts.
   * @param param The request object
   */
  public listTemporalCloudOpenMetricsIntegrationAccounts(
    options?: Configuration
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listTemporalCloudOpenMetricsIntegrationAccounts(
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTemporalCloudOpenMetricsIntegrationAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Temporal Cloud OpenMetrics integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateTemporalCloudOpenMetricsIntegrationAccount(
    param: TemporalCloudOpenMetricsIntegrationApiUpdateTemporalCloudOpenMetricsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<TemporalCloudOpenMetricsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateTemporalCloudOpenMetricsIntegrationAccount(
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTemporalCloudOpenMetricsIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
