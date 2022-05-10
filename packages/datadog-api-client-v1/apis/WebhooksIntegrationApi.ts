import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { WebhooksIntegration } from "../models/WebhooksIntegration";
import { WebhooksIntegrationCustomVariable } from "../models/WebhooksIntegrationCustomVariable";
import { WebhooksIntegrationCustomVariableResponse } from "../models/WebhooksIntegrationCustomVariableResponse";
import { WebhooksIntegrationCustomVariableUpdateRequest } from "../models/WebhooksIntegrationCustomVariableUpdateRequest";
import { WebhooksIntegrationUpdateRequest } from "../models/WebhooksIntegrationUpdateRequest";

export class WebhooksIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createWebhooksIntegration(
    body: WebhooksIntegration,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createWebhooksIntegration."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/webhooks/configuration/webhooks";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.createWebhooksIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "WebhooksIntegration", ""),
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

  public async createWebhooksIntegrationCustomVariable(
    body: WebhooksIntegrationCustomVariable,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createWebhooksIntegrationCustomVariable."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.createWebhooksIntegrationCustomVariable"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "WebhooksIntegrationCustomVariable", ""),
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

  public async deleteWebhooksIntegration(
    webhookName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'webhookName' is not null or undefined
    if (webhookName === null || webhookName === undefined) {
      throw new RequiredError(
        "Required parameter webhookName was null or undefined when calling deleteWebhooksIntegration."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/webhooks/{webhook_name}".replace(
        "{" + "webhook_name" + "}",
        encodeURIComponent(String(webhookName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.deleteWebhooksIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customVariableName' is not null or undefined
    if (customVariableName === null || customVariableName === undefined) {
      throw new RequiredError(
        "Required parameter customVariableName was null or undefined when calling deleteWebhooksIntegrationCustomVariable."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}".replace(
        "{" + "custom_variable_name" + "}",
        encodeURIComponent(String(customVariableName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.deleteWebhooksIntegrationCustomVariable"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'webhookName' is not null or undefined
    if (webhookName === null || webhookName === undefined) {
      throw new RequiredError(
        "Required parameter webhookName was null or undefined when calling getWebhooksIntegration."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/webhooks/{webhook_name}".replace(
        "{" + "webhook_name" + "}",
        encodeURIComponent(String(webhookName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.getWebhooksIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customVariableName' is not null or undefined
    if (customVariableName === null || customVariableName === undefined) {
      throw new RequiredError(
        "Required parameter customVariableName was null or undefined when calling getWebhooksIntegrationCustomVariable."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}".replace(
        "{" + "custom_variable_name" + "}",
        encodeURIComponent(String(customVariableName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.getWebhooksIntegrationCustomVariable"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'webhookName' is not null or undefined
    if (webhookName === null || webhookName === undefined) {
      throw new RequiredError(
        "Required parameter webhookName was null or undefined when calling updateWebhooksIntegration."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateWebhooksIntegration."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/webhooks/{webhook_name}".replace(
        "{" + "webhook_name" + "}",
        encodeURIComponent(String(webhookName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.updateWebhooksIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "WebhooksIntegrationUpdateRequest", ""),
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

  public async updateWebhooksIntegrationCustomVariable(
    customVariableName: string,
    body: WebhooksIntegrationCustomVariableUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customVariableName' is not null or undefined
    if (customVariableName === null || customVariableName === undefined) {
      throw new RequiredError(
        "Required parameter customVariableName was null or undefined when calling updateWebhooksIntegrationCustomVariable."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateWebhooksIntegrationCustomVariable."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}".replace(
        "{" + "custom_variable_name" + "}",
        encodeURIComponent(String(customVariableName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "WebhooksIntegrationApi.updateWebhooksIntegrationCustomVariable"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
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
        "WebhooksIntegrationCustomVariableUpdateRequest",
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

export class WebhooksIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWebhooksIntegration(
    response: ResponseContext
  ): Promise<WebhooksIntegration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: WebhooksIntegration = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebhooksIntegration",
        ""
      ) as WebhooksIntegration;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksIntegration = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebhooksIntegration",
        ""
      ) as WebhooksIntegration;
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
   * @params response Response returned by the server for a request to createWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWebhooksIntegrationCustomVariable(
    response: ResponseContext
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: WebhooksIntegrationCustomVariableResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WebhooksIntegrationCustomVariableResponse",
          ""
        ) as WebhooksIntegrationCustomVariableResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksIntegrationCustomVariableResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WebhooksIntegrationCustomVariableResponse",
          ""
        ) as WebhooksIntegrationCustomVariableResponse;
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
   * @params response Response returned by the server for a request to deleteWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWebhooksIntegration(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to deleteWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWebhooksIntegrationCustomVariable(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebhooksIntegration(
    response: ResponseContext
  ): Promise<WebhooksIntegration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: WebhooksIntegration = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebhooksIntegration",
        ""
      ) as WebhooksIntegration;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksIntegration = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebhooksIntegration",
        ""
      ) as WebhooksIntegration;
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
   * @params response Response returned by the server for a request to getWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWebhooksIntegrationCustomVariable(
    response: ResponseContext
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: WebhooksIntegrationCustomVariableResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WebhooksIntegrationCustomVariableResponse",
          ""
        ) as WebhooksIntegrationCustomVariableResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksIntegrationCustomVariableResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WebhooksIntegrationCustomVariableResponse",
          ""
        ) as WebhooksIntegrationCustomVariableResponse;
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
   * @params response Response returned by the server for a request to updateWebhooksIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWebhooksIntegration(
    response: ResponseContext
  ): Promise<WebhooksIntegration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: WebhooksIntegration = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebhooksIntegration",
        ""
      ) as WebhooksIntegration;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksIntegration = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WebhooksIntegration",
        ""
      ) as WebhooksIntegration;
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
   * @params response Response returned by the server for a request to updateWebhooksIntegrationCustomVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWebhooksIntegrationCustomVariable(
    response: ResponseContext
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: WebhooksIntegrationCustomVariableResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WebhooksIntegrationCustomVariableResponse",
          ""
        ) as WebhooksIntegrationCustomVariableResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksIntegrationCustomVariableResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WebhooksIntegrationCustomVariableResponse",
          ""
        ) as WebhooksIntegrationCustomVariableResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    configuration: Configuration,
    requestFactory?: WebhooksIntegrationApiRequestFactory,
    responseProcessor?: WebhooksIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WebhooksIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WebhooksIntegrationApiResponseProcessor();
  }

  /**
   * Creates an endpoint with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public createWebhooksIntegration(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.createWebhooksIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebhooksIntegration(
            responseContext
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
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.createWebhooksIntegrationCustomVariable(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebhooksIntegrationCustomVariable(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWebhooksIntegration(
      param.webhookName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebhooksIntegration(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebhooksIntegrationCustomVariable(
            responseContext
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
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.getWebhooksIntegration(
      param.webhookName,
      options
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
   * Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.  If the custom variable is secret, the value does not return in the response payload.
   * @param param The request object
   */
  public getWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.getWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebhooksIntegrationCustomVariable(
            responseContext
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
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.updateWebhooksIntegration(
      param.webhookName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebhooksIntegration(
            responseContext
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
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.updateWebhooksIntegrationCustomVariable(
        param.customVariableName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebhooksIntegrationCustomVariable(
            responseContext
          );
        });
    });
  }
}
