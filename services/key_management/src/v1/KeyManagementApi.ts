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
import { ApiKey } from "./models/ApiKey";
import { ApiKeyListResponse } from "./models/ApiKeyListResponse";
import { ApiKeyResponse } from "./models/ApiKeyResponse";
import { ApplicationKey } from "./models/ApplicationKey";
import { ApplicationKeyListResponse } from "./models/ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "./models/ApplicationKeyResponse";
import { version } from "../version";

export class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("key-management", version);
    }
  }
  public async createAPIKey(
    body: ApiKey,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v1/api_key";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.createAPIKey",
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
      serialize(body, TypingInfo, "ApiKey", ""),
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

  public async createApplicationKey(
    body: ApplicationKey,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v1/application_key";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.createApplicationKey",
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
      serialize(body, TypingInfo, "ApplicationKey", ""),
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

  public async deleteAPIKey(
    key: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "deleteAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v1/api_key/{key}".replace(
      "{key}",
      encodeURIComponent(String(key)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.deleteAPIKey",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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

  public async deleteApplicationKey(
    key: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "deleteApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v1/application_key/{key}".replace(
      "{key}",
      encodeURIComponent(String(key)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.deleteApplicationKey",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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

  public async getAPIKey(
    key: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "getAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v1/api_key/{key}".replace(
      "{key}",
      encodeURIComponent(String(key)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.getAPIKey",
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

  public async getApplicationKey(
    key: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "getApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v1/application_key/{key}".replace(
      "{key}",
      encodeURIComponent(String(key)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.getApplicationKey",
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

  public async listAPIKeys(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/api_key";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.listAPIKeys",
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

  public async listApplicationKeys(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/application_key";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.listApplicationKeys",
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

  public async updateAPIKey(
    key: string,
    body: ApiKey,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "updateAPIKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v1/api_key/{key}".replace(
      "{key}",
      encodeURIComponent(String(key)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.updateAPIKey",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "ApiKey", ""),
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

  public async updateApplicationKey(
    key: string,
    body: ApplicationKey,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "updateApplicationKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v1/application_key/{key}".replace(
      "{key}",
      encodeURIComponent(String(key)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v1.updateApplicationKey",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "ApplicationKey", ""),
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

export class KeyManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAPIKey(
    response: ResponseContext,
  ): Promise<ApiKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
      ) as ApiKeyResponse;
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
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
        "",
      ) as ApiKeyResponse;
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
   * @params response Response returned by the server for a request to createApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to deleteAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAPIKey(
    response: ResponseContext,
  ): Promise<ApiKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
      ) as ApiKeyResponse;
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
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
        "",
      ) as ApiKeyResponse;
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
   * @params response Response returned by the server for a request to deleteApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
      return body;
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to getAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPIKey(response: ResponseContext): Promise<ApiKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
      ) as ApiKeyResponse;
      return body;
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
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
        "",
      ) as ApiKeyResponse;
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
   * @params response Response returned by the server for a request to getApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
      return body;
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to listAPIKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAPIKeys(
    response: ResponseContext,
  ): Promise<ApiKeyListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApiKeyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyListResponse",
      ) as ApiKeyListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ApiKeyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyListResponse",
        "",
      ) as ApiKeyListResponse;
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
   * @params response Response returned by the server for a request to listApplicationKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApplicationKeys(
    response: ResponseContext,
  ): Promise<ApplicationKeyListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyListResponse",
      ) as ApplicationKeyListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ApplicationKeyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyListResponse",
        "",
      ) as ApplicationKeyListResponse;
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
   * @params response Response returned by the server for a request to updateAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAPIKey(
    response: ResponseContext,
  ): Promise<ApiKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
      ) as ApiKeyResponse;
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
      const body: ApiKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApiKeyResponse",
        "",
      ) as ApiKeyResponse;
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
   * @params response Response returned by the server for a request to updateApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface KeyManagementApiCreateAPIKeyRequest {
  /**
   * @type ApiKey
   */
  body: ApiKey;
}

export interface KeyManagementApiCreateApplicationKeyRequest {
  /**
   * @type ApplicationKey
   */
  body: ApplicationKey;
}

export interface KeyManagementApiDeleteAPIKeyRequest {
  /**
   * The specific API key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiDeleteApplicationKeyRequest {
  /**
   * The specific APP key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiGetAPIKeyRequest {
  /**
   * The specific API key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiGetApplicationKeyRequest {
  /**
   * The specific APP key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiUpdateAPIKeyRequest {
  /**
   * The specific API key you are working with.
   * @type string
   */
  key: string;
  /**
   * @type ApiKey
   */
  body: ApiKey;
}

export interface KeyManagementApiUpdateApplicationKeyRequest {
  /**
   * The specific APP key you are working with.
   * @type string
   */
  key: string;
  /**
   * @type ApplicationKey
   */
  body: ApplicationKey;
}

export class KeyManagementApi {
  private requestFactory: KeyManagementApiRequestFactory;
  private responseProcessor: KeyManagementApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: KeyManagementApiRequestFactory,
    responseProcessor?: KeyManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new KeyManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new KeyManagementApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(KeyManagementApi.operationServers).length > 0) {
      this.configuration.addOperationServers(KeyManagementApi.operationServers);
    }
  }

  /**
   * Creates an API key with a given name.
   * @param param The request object
   */
  public createAPIKey(
    param: KeyManagementApiCreateAPIKeyRequest,
    options?: Configuration,
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.createAPIKey(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAPIKey(responseContext);
        });
    });
  }

  /**
   * Create an application key with a given name.
   * @param param The request object
   */
  public createApplicationKey(
    param: KeyManagementApiCreateApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.createApplicationKey(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApplicationKey(responseContext);
        });
    });
  }

  /**
   * Delete a given API key.
   * @param param The request object
   */
  public deleteAPIKey(
    param: KeyManagementApiDeleteAPIKeyRequest,
    options?: Configuration,
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.deleteAPIKey(
      param.key,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAPIKey(responseContext);
        });
    });
  }

  /**
   * Delete a given application key.
   * @param param The request object
   */
  public deleteApplicationKey(
    param: KeyManagementApiDeleteApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.deleteApplicationKey(
      param.key,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApplicationKey(responseContext);
        });
    });
  }

  /**
   * Get a given API key.
   * @param param The request object
   */
  public getAPIKey(
    param: KeyManagementApiGetAPIKeyRequest,
    options?: Configuration,
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.getAPIKey(
      param.key,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPIKey(responseContext);
        });
    });
  }

  /**
   * Get a given application key.
   * @param param The request object
   */
  public getApplicationKey(
    param: KeyManagementApiGetApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.getApplicationKey(
      param.key,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApplicationKey(responseContext);
        });
    });
  }

  /**
   * Get all API keys available for your account.
   * @param param The request object
   */
  public listAPIKeys(options?: Configuration): Promise<ApiKeyListResponse> {
    const requestContextPromise = this.requestFactory.listAPIKeys(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAPIKeys(responseContext);
        });
    });
  }

  /**
   * Get all application keys available for your Datadog account.
   * @param param The request object
   */
  public listApplicationKeys(
    options?: Configuration,
  ): Promise<ApplicationKeyListResponse> {
    const requestContextPromise =
      this.requestFactory.listApplicationKeys(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApplicationKeys(responseContext);
        });
    });
  }

  /**
   * Edit an API key name.
   * @param param The request object
   */
  public updateAPIKey(
    param: KeyManagementApiUpdateAPIKeyRequest,
    options?: Configuration,
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.updateAPIKey(
      param.key,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAPIKey(responseContext);
        });
    });
  }

  /**
   * Edit an application key name.
   * @param param The request object
   */
  public updateApplicationKey(
    param: KeyManagementApiUpdateApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.updateApplicationKey(
      param.key,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApplicationKey(responseContext);
        });
    });
  }
}
