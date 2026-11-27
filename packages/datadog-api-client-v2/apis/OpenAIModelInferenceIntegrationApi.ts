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
import { OpenAIModelInferenceIntegrationAccountCreateRequest } from "../models/OpenAIModelInferenceIntegrationAccountCreateRequest";
import { OpenAIModelInferenceIntegrationAccountResponse } from "../models/OpenAIModelInferenceIntegrationAccountResponse";
import { OpenAIModelInferenceIntegrationAccountsResponse } from "../models/OpenAIModelInferenceIntegrationAccountsResponse";
import { OpenAIModelInferenceIntegrationAccountUpdateRequest } from "../models/OpenAIModelInferenceIntegrationAccountUpdateRequest";

export class OpenAIModelInferenceIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createOpenAIModelInferenceIntegrationAccount(
    body: OpenAIModelInferenceIntegrationAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createOpenAIModelInferenceIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.createOpenAIModelInferenceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createOpenAIModelInferenceIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createOpenAIModelInferenceIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-model-inference/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OpenAIModelInferenceIntegrationApi.createOpenAIModelInferenceIntegrationAccount"
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
        "OpenAIModelInferenceIntegrationAccountCreateRequest",
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

  public async deleteOpenAIModelInferenceIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteOpenAIModelInferenceIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.deleteOpenAIModelInferenceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteOpenAIModelInferenceIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "deleteOpenAIModelInferenceIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-model-inference/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OpenAIModelInferenceIntegrationApi.deleteOpenAIModelInferenceIntegrationAccount"
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

  public async getOpenAIModelInferenceIntegrationAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getOpenAIModelInferenceIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.getOpenAIModelInferenceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getOpenAIModelInferenceIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "getOpenAIModelInferenceIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-model-inference/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OpenAIModelInferenceIntegrationApi.getOpenAIModelInferenceIntegrationAccount"
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

  public async listOpenAIModelInferenceIntegrationAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listOpenAIModelInferenceIntegrationAccounts'"
    );
    if (
      !_config.unstableOperations[
        "v2.listOpenAIModelInferenceIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listOpenAIModelInferenceIntegrationAccounts' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-model-inference/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OpenAIModelInferenceIntegrationApi.listOpenAIModelInferenceIntegrationAccounts"
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

  public async updateOpenAIModelInferenceIntegrationAccount(
    accountId: string,
    body: OpenAIModelInferenceIntegrationAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateOpenAIModelInferenceIntegrationAccount'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateOpenAIModelInferenceIntegrationAccount"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateOpenAIModelInferenceIntegrationAccount' is disabled"
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError(
        "accountId",
        "updateOpenAIModelInferenceIntegrationAccount"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateOpenAIModelInferenceIntegrationAccount"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration-interfaces/openai-model-inference/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OpenAIModelInferenceIntegrationApi.updateOpenAIModelInferenceIntegrationAccount"
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
        "OpenAIModelInferenceIntegrationAccountUpdateRequest",
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

export class OpenAIModelInferenceIntegrationApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOpenAIModelInferenceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpenAIModelInferenceIntegrationAccount(
    response: ResponseContext
  ): Promise<OpenAIModelInferenceIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OpenAIModelInferenceIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountResponse;
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
      const body: OpenAIModelInferenceIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to deleteOpenAIModelInferenceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpenAIModelInferenceIntegrationAccount(
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
   * @params response Response returned by the server for a request to getOpenAIModelInferenceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOpenAIModelInferenceIntegrationAccount(
    response: ResponseContext
  ): Promise<OpenAIModelInferenceIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpenAIModelInferenceIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountResponse;
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
      const body: OpenAIModelInferenceIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountResponse;
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
   * @params response Response returned by the server for a request to listOpenAIModelInferenceIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOpenAIModelInferenceIntegrationAccounts(
    response: ResponseContext
  ): Promise<OpenAIModelInferenceIntegrationAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpenAIModelInferenceIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountsResponse;
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
      const body: OpenAIModelInferenceIntegrationAccountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountsResponse;
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
   * @params response Response returned by the server for a request to updateOpenAIModelInferenceIntegrationAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpenAIModelInferenceIntegrationAccount(
    response: ResponseContext
  ): Promise<OpenAIModelInferenceIntegrationAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpenAIModelInferenceIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountResponse;
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
      const body: OpenAIModelInferenceIntegrationAccountResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OpenAIModelInferenceIntegrationAccountResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OpenAIModelInferenceIntegrationAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OpenAIModelInferenceIntegrationApiCreateOpenAIModelInferenceIntegrationAccountRequest {
  /**
   * @type OpenAIModelInferenceIntegrationAccountCreateRequest
   */
  body: OpenAIModelInferenceIntegrationAccountCreateRequest;
}

export interface OpenAIModelInferenceIntegrationApiDeleteOpenAIModelInferenceIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAIModelInferenceIntegrationApiGetOpenAIModelInferenceIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
}

export interface OpenAIModelInferenceIntegrationApiUpdateOpenAIModelInferenceIntegrationAccountRequest {
  /**
   * Unique identifier of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * @type OpenAIModelInferenceIntegrationAccountUpdateRequest
   */
  body: OpenAIModelInferenceIntegrationAccountUpdateRequest;
}

export class OpenAIModelInferenceIntegrationApi {
  private requestFactory: OpenAIModelInferenceIntegrationApiRequestFactory;
  private responseProcessor: OpenAIModelInferenceIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OpenAIModelInferenceIntegrationApiRequestFactory,
    responseProcessor?: OpenAIModelInferenceIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new OpenAIModelInferenceIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new OpenAIModelInferenceIntegrationApiResponseProcessor(configuration);
  }

  /**
   * Create an OpenAI Model Inference integration account.
   * @param param The request object
   */
  public createOpenAIModelInferenceIntegrationAccount(
    param: OpenAIModelInferenceIntegrationApiCreateOpenAIModelInferenceIntegrationAccountRequest,
    options?: Configuration
  ): Promise<OpenAIModelInferenceIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.createOpenAIModelInferenceIntegrationAccount(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpenAIModelInferenceIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an OpenAI Model Inference integration account.
   * @param param The request object
   */
  public deleteOpenAIModelInferenceIntegrationAccount(
    param: OpenAIModelInferenceIntegrationApiDeleteOpenAIModelInferenceIntegrationAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOpenAIModelInferenceIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpenAIModelInferenceIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * Get an OpenAI Model Inference integration account.
   * @param param The request object
   */
  public getOpenAIModelInferenceIntegrationAccount(
    param: OpenAIModelInferenceIntegrationApiGetOpenAIModelInferenceIntegrationAccountRequest,
    options?: Configuration
  ): Promise<OpenAIModelInferenceIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getOpenAIModelInferenceIntegrationAccount(
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOpenAIModelInferenceIntegrationAccount(
            responseContext
          );
        });
    });
  }

  /**
   * List OpenAI Model Inference integration accounts.
   * @param param The request object
   */
  public listOpenAIModelInferenceIntegrationAccounts(
    options?: Configuration
  ): Promise<OpenAIModelInferenceIntegrationAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listOpenAIModelInferenceIntegrationAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOpenAIModelInferenceIntegrationAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Update an OpenAI Model Inference integration account. Only the fields provided are changed.
   * @param param The request object
   */
  public updateOpenAIModelInferenceIntegrationAccount(
    param: OpenAIModelInferenceIntegrationApiUpdateOpenAIModelInferenceIntegrationAccountRequest,
    options?: Configuration
  ): Promise<OpenAIModelInferenceIntegrationAccountResponse> {
    const requestContextPromise =
      this.requestFactory.updateOpenAIModelInferenceIntegrationAccount(
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpenAIModelInferenceIntegrationAccount(
            responseContext
          );
        });
    });
  }
}
