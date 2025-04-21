import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { WebhooksIntegration } from "./models/WebhooksIntegration";
import { WebhooksIntegrationCustomVariable } from "./models/WebhooksIntegrationCustomVariable";
import { WebhooksIntegrationCustomVariableResponse } from "./models/WebhooksIntegrationCustomVariableResponse";
import { WebhooksIntegrationCustomVariableUpdateRequest } from "./models/WebhooksIntegrationCustomVariableUpdateRequest";
import { WebhooksIntegrationUpdateRequest } from "./models/WebhooksIntegrationUpdateRequest";

export class WebhooksIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createWebhooksIntegration(
    body: WebhooksIntegration,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWebhooksIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/webhooks/configuration/webhooks";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.WebhooksIntegrationApi.createWebhooksIntegration")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "WebhooksIntegration", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createWebhooksIntegrationCustomVariable(
    body: WebhooksIntegrationCustomVariable,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createWebhooksIntegrationCustomVariable",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v1.WebhooksIntegrationApi.createWebhooksIntegrationCustomVariable",
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "WebhooksIntegrationCustomVariable", ""),
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

  public async deleteWebhooksIntegration(
    webhookName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'webhookName' is not null or undefined
    if (webhookName === null || webhookName === undefined) {
      throw new RequiredError("webhookName", "deleteWebhooksIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/webhooks/{webhook_name}".replace(
        "{webhook_name}",
        encodeURIComponent(String(webhookName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.WebhooksIntegrationApi.deleteWebhooksIntegration")
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

  public async deleteWebhooksIntegrationCustomVariable(
    customVariableName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customVariableName' is not null or undefined
    if (customVariableName === null || customVariableName === undefined) {
      throw new RequiredError(
        "customVariableName",
        "deleteWebhooksIntegrationCustomVariable",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}".replace(
        "{custom_variable_name}",
        encodeURIComponent(String(customVariableName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v1.WebhooksIntegrationApi.deleteWebhooksIntegrationCustomVariable",
      )
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

  public async getWebhooksIntegration(
    webhookName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'webhookName' is not null or undefined
    if (webhookName === null || webhookName === undefined) {
      throw new RequiredError("webhookName", "getWebhooksIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/webhooks/{webhook_name}".replace(
        "{webhook_name}",
        encodeURIComponent(String(webhookName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.WebhooksIntegrationApi.getWebhooksIntegration")
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

  public async getWebhooksIntegrationCustomVariable(
    customVariableName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customVariableName' is not null or undefined
    if (customVariableName === null || customVariableName === undefined) {
      throw new RequiredError(
        "customVariableName",
        "getWebhooksIntegrationCustomVariable",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}".replace(
        "{custom_variable_name}",
        encodeURIComponent(String(customVariableName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v1.WebhooksIntegrationApi.getWebhooksIntegrationCustomVariable",
      )
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

  public async updateWebhooksIntegration(
    webhookName: string,
    body: WebhooksIntegrationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'webhookName' is not null or undefined
    if (webhookName === null || webhookName === undefined) {
      throw new RequiredError("webhookName", "updateWebhooksIntegration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateWebhooksIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/webhooks/{webhook_name}".replace(
        "{webhook_name}",
        encodeURIComponent(String(webhookName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.WebhooksIntegrationApi.updateWebhooksIntegration")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "WebhooksIntegrationUpdateRequest", ""),
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

  public async updateWebhooksIntegrationCustomVariable(
    customVariableName: string,
    body: WebhooksIntegrationCustomVariableUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customVariableName' is not null or undefined
    if (customVariableName === null || customVariableName === undefined) {
      throw new RequiredError(
        "customVariableName",
        "updateWebhooksIntegrationCustomVariable",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateWebhooksIntegrationCustomVariable",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}".replace(
        "{custom_variable_name}",
        encodeURIComponent(String(customVariableName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v1.WebhooksIntegrationApi.updateWebhooksIntegrationCustomVariable",
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "WebhooksIntegrationCustomVariableUpdateRequest",
        "",
      ),
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

export class WebhooksIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWebhooksIntegration(
    response: ResponseContext,
  ): Promise<WebhooksIntegration> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: WebhooksIntegration = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegration",
      ) as WebhooksIntegration;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: WebhooksIntegration = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegration",
        "",
      ) as WebhooksIntegration;
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
   * @params response Response returned by the server for a request to createWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWebhooksIntegrationCustomVariable(
    response: ResponseContext,
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: WebhooksIntegrationCustomVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegrationCustomVariableResponse",
      ) as WebhooksIntegrationCustomVariableResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: WebhooksIntegrationCustomVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegrationCustomVariableResponse",
        "",
      ) as WebhooksIntegrationCustomVariableResponse;
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
   * @params response Response returned by the server for a request to deleteWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWebhooksIntegration(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
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
   * @params response Response returned by the server for a request to deleteWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWebhooksIntegrationCustomVariable(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
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
   * @params response Response returned by the server for a request to getWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebhooksIntegration(
    response: ResponseContext,
  ): Promise<WebhooksIntegration> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksIntegration = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegration",
      ) as WebhooksIntegration;
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
      const body: WebhooksIntegration = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegration",
        "",
      ) as WebhooksIntegration;
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
   * @params response Response returned by the server for a request to getWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebhooksIntegrationCustomVariable(
    response: ResponseContext,
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksIntegrationCustomVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegrationCustomVariableResponse",
      ) as WebhooksIntegrationCustomVariableResponse;
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
      const body: WebhooksIntegrationCustomVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegrationCustomVariableResponse",
        "",
      ) as WebhooksIntegrationCustomVariableResponse;
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
   * @params response Response returned by the server for a request to updateWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWebhooksIntegration(
    response: ResponseContext,
  ): Promise<WebhooksIntegration> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksIntegration = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegration",
      ) as WebhooksIntegration;
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
      const body: WebhooksIntegration = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegration",
        "",
      ) as WebhooksIntegration;
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
   * @params response Response returned by the server for a request to updateWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWebhooksIntegrationCustomVariable(
    response: ResponseContext,
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksIntegrationCustomVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegrationCustomVariableResponse",
      ) as WebhooksIntegrationCustomVariableResponse;
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
      const body: WebhooksIntegrationCustomVariableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksIntegrationCustomVariableResponse",
        "",
      ) as WebhooksIntegrationCustomVariableResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface WebhooksIntegrationApiCreateWebhooksIntegrationRequest {
  /**
   * Create a webhooks integration request body.
   * @type WebhooksIntegration
   */
  body: WebhooksIntegration;
}

export interface WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest {
  /**
   * Define a custom variable request body.
   * @type WebhooksIntegrationCustomVariable
   */
  body: WebhooksIntegrationCustomVariable;
}

export interface WebhooksIntegrationApiDeleteWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   */
  webhookName: string;
}

export interface WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   */
  customVariableName: string;
}

export interface WebhooksIntegrationApiGetWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   */
  webhookName: string;
}

export interface WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   */
  customVariableName: string;
}

export interface WebhooksIntegrationApiUpdateWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   */
  webhookName: string;
  /**
   * Update an existing Datadog-Webhooks integration.
   * @type WebhooksIntegrationUpdateRequest
   */
  body: WebhooksIntegrationUpdateRequest;
}

export interface WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   */
  customVariableName: string;
  /**
   * Update an existing custom variable request body.
   * @type WebhooksIntegrationCustomVariableUpdateRequest
   */
  body: WebhooksIntegrationCustomVariableUpdateRequest;
}

export class WebhooksIntegrationApi {
  private requestFactory: WebhooksIntegrationApiRequestFactory;
  private responseProcessor: WebhooksIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: WebhooksIntegrationApiRequestFactory,
    responseProcessor?: WebhooksIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new WebhooksIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new WebhooksIntegrationApiResponseProcessor();
  }

  /**
   * Creates an endpoint with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public createWebhooksIntegration(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationRequest,
    options?: Configuration,
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.createWebhooksIntegration(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebhooksIntegration(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates an endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * @param param The request object
   */
  public createWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest,
    options?: Configuration,
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.createWebhooksIntegrationCustomVariable(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebhooksIntegrationCustomVariable(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes the endpoint with the name `<WEBHOOK NAME>`.
   * @param param The request object
   */
  public deleteWebhooksIntegration(
    param: WebhooksIntegrationApiDeleteWebhooksIntegrationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWebhooksIntegration(
      param.webhookName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebhooksIntegration(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * @param param The request object
   */
  public deleteWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebhooksIntegrationCustomVariable(
            responseContext,
          );
        });
    });
  }

  /**
   * Gets the content of the webhook with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public getWebhooksIntegration(
    param: WebhooksIntegrationApiGetWebhooksIntegrationRequest,
    options?: Configuration,
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.getWebhooksIntegration(
      param.webhookName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebhooksIntegration(responseContext);
        });
    });
  }

  /**
   * Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.
   *
   * If the custom variable is secret, the value does not return in the
   * response payload.
   * @param param The request object
   */
  public getWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest,
    options?: Configuration,
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.getWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebhooksIntegrationCustomVariable(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates the endpoint with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public updateWebhooksIntegration(
    param: WebhooksIntegrationApiUpdateWebhooksIntegrationRequest,
    options?: Configuration,
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.updateWebhooksIntegration(
      param.webhookName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebhooksIntegration(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * @param param The request object
   */
  public updateWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest,
    options?: Configuration,
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.updateWebhooksIntegrationCustomVariable(
        param.customVariableName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebhooksIntegrationCustomVariable(
            responseContext,
          );
        });
    });
  }
}
