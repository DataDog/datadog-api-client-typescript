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

import { AnthropicUsageAndCostsIntegrationAccountCreateRequest } from "../models/AnthropicUsageAndCostsIntegrationAccountCreateRequest";
import { AnthropicUsageAndCostsIntegrationAccountResponse } from "../models/AnthropicUsageAndCostsIntegrationAccountResponse";
import { AnthropicUsageAndCostsIntegrationAccountsResponse } from "../models/AnthropicUsageAndCostsIntegrationAccountsResponse";
import { AnthropicUsageAndCostsIntegrationAccountUpdateRequest } from "../models/AnthropicUsageAndCostsIntegrationAccountUpdateRequest";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class AnthropicUsageAndCostsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createAnthropicUsageAndCostsIntegrationAccount(
    body: AnthropicUsageAndCostsIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createAnthropicUsageAndCostsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.createAnthropicUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createAnthropicUsageAndCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createAnthropicUsageAndCostsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/anthropic-usage-and-costs/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.AnthropicUsageAndCostsIntegrationApi.createAnthropicUsageAndCostsIntegrationAccount"
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
        "AnthropicUsageAndCostsIntegrationAccountCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async deleteAnthropicUsageAndCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteAnthropicUsageAndCostsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.deleteAnthropicUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteAnthropicUsageAndCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteAnthropicUsageAndCostsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/anthropic-usage-and-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.AnthropicUsageAndCostsIntegrationApi.deleteAnthropicUsageAndCostsIntegrationAccount"
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

  public async getAnthropicUsageAndCostsIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getAnthropicUsageAndCostsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.getAnthropicUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getAnthropicUsageAndCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getAnthropicUsageAndCostsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/anthropic-usage-and-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.AnthropicUsageAndCostsIntegrationApi.getAnthropicUsageAndCostsIntegrationAccount"
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

  public async listAnthropicUsageAndCostsIntegrationAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listAnthropicUsageAndCostsIntegrationAccounts'"
    );
    if (
      !_config.unstableOperations[
        "v2.listAnthropicUsageAndCostsIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listAnthropicUsageAndCostsIntegrationAccounts' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/anthropic-usage-and-costs/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.AnthropicUsageAndCostsIntegrationApi.listAnthropicUsageAndCostsIntegrationAccounts"
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

  public async updateAnthropicUsageAndCostsIntegrationAccount(
    accountId: string,
    body: AnthropicUsageAndCostsIntegrationAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateAnthropicUsageAndCostsIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateAnthropicUsageAndCostsIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateAnthropicUsageAndCostsIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateAnthropicUsageAndCostsIntegrationAccount"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateAnthropicUsageAndCostsIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/anthropic-usage-and-costs/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.AnthropicUsageAndCostsIntegrationApi.updateAnthropicUsageAndCostsIntegrationAccount"
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
        "AnthropicUsageAndCostsIntegrationAccountUpdateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

export class AnthropicUsageAndCostsIntegrationApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAnthropicUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAnthropicUsageAndCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<AnthropicUsageAndCostsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AnthropicUsageAndCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AnthropicUsageAndCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteAnthropicUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAnthropicUsageAndCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getAnthropicUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAnthropicUsageAndCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<AnthropicUsageAndCostsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnthropicUsageAndCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AnthropicUsageAndCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listAnthropicUsageAndCostsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAnthropicUsageAndCostsIntegrationAccounts(
    response: ResponseContext
  ): Promise<AnthropicUsageAndCostsIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnthropicUsageAndCostsIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AnthropicUsageAndCostsIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateAnthropicUsageAndCostsIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAnthropicUsageAndCostsIntegrationAccount(
    response: ResponseContext
  ): Promise<AnthropicUsageAndCostsIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnthropicUsageAndCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AnthropicUsageAndCostsIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AnthropicUsageAndCostsIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AnthropicUsageAndCostsIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AnthropicUsageAndCostsIntegrationApiCreateAnthropicUsageAndCostsIntegrationAccountRequest {
  /**
   * @type AnthropicUsageAndCostsIntegrationAccountCreateRequest
   */
  body: AnthropicUsageAndCostsIntegrationAccountCreateRequest;
}

export interface AnthropicUsageAndCostsIntegrationApiDeleteAnthropicUsageAndCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface AnthropicUsageAndCostsIntegrationApiGetAnthropicUsageAndCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface AnthropicUsageAndCostsIntegrationApiUpdateAnthropicUsageAndCostsIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type AnthropicUsageAndCostsIntegrationAccountUpdateRequest
   */
  body: AnthropicUsageAndCostsIntegrationAccountUpdateRequest;
}

export class AnthropicUsageAndCostsIntegrationApi {
  private requestFactory: AnthropicUsageAndCostsIntegrationApiRequestFactory;
  private responseProcessor: AnthropicUsageAndCostsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AnthropicUsageAndCostsIntegrationApiRequestFactory,
    responseProcessor?: AnthropicUsageAndCostsIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new AnthropicUsageAndCostsIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new AnthropicUsageAndCostsIntegrationApiResponseProcessor(configuration);
  }

  /**
   * Create an Anthropic Usage and Costs integration account.
   * @param param The request object
   */
  public createAnthropicUsageAndCostsIntegrationAccount(
    param: AnthropicUsageAndCostsIntegrationApiCreateAnthropicUsageAndCostsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<AnthropicUsageAndCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createAnthropicUsageAndCostsIntegrationAccount(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAnthropicUsageAndCostsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an Anthropic Usage and Costs integration account.
   * @param param The request object
   */
  public deleteAnthropicUsageAndCostsIntegrationAccount(
    param: AnthropicUsageAndCostsIntegrationApiDeleteAnthropicUsageAndCostsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAnthropicUsageAndCostsIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAnthropicUsageAndCostsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Get an Anthropic Usage and Costs integration account.
   * @param param The request object
   */
  public getAnthropicUsageAndCostsIntegrationAccount(
    param: AnthropicUsageAndCostsIntegrationApiGetAnthropicUsageAndCostsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<AnthropicUsageAndCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getAnthropicUsageAndCostsIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAnthropicUsageAndCostsIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List Anthropic Usage and Costs integration accounts.
   * @param param The request object
   */
  public listAnthropicUsageAndCostsIntegrationAccounts(
    options?: Configuration
  ): Promise<AnthropicUsageAndCostsIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listAnthropicUsageAndCostsIntegrationAccounts(
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAnthropicUsageAndCostsIntegrationAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Update an Anthropic Usage and Costs integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateAnthropicUsageAndCostsIntegrationAccount(
    param: AnthropicUsageAndCostsIntegrationApiUpdateAnthropicUsageAndCostsIntegrationAccountRequest,
    options?: Configuration
  ): Promise<AnthropicUsageAndCostsIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateAnthropicUsageAndCostsIntegrationAccount(
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAnthropicUsageAndCostsIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
