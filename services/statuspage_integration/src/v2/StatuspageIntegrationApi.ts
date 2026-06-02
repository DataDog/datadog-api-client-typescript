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
import { StatuspageAccountCreateRequest } from "./models/StatuspageAccountCreateRequest";
import { StatuspageAccountResponse } from "./models/StatuspageAccountResponse";
import { StatuspageAccountUpdateRequest } from "./models/StatuspageAccountUpdateRequest";
import { StatuspageUrlSettingCreateRequest } from "./models/StatuspageUrlSettingCreateRequest";
import { StatuspageUrlSettingResponse } from "./models/StatuspageUrlSettingResponse";
import { StatuspageUrlSettingsResponse } from "./models/StatuspageUrlSettingsResponse";
import { StatuspageUrlSettingUpdateRequest } from "./models/StatuspageUrlSettingUpdateRequest";
import { version } from "../version";

export class StatuspageIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("statuspage-integration", version);
    }
  }
  public async createStatuspageAccount(
    body: StatuspageAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStatuspageAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/statuspage/account";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.createStatuspageAccount",
      StatuspageIntegrationApi.operationServers,
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
      serialize(body, TypingInfo, "StatuspageAccountCreateRequest", ""),
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

  public async createStatuspageUrlSetting(
    body: StatuspageUrlSettingCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStatuspageUrlSetting");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/statuspage/url_settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.createStatuspageUrlSetting",
      StatuspageIntegrationApi.operationServers,
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
      serialize(body, TypingInfo, "StatuspageUrlSettingCreateRequest", ""),
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

  public async deleteStatuspageAccount(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/statuspage/account";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.deleteStatuspageAccount",
      StatuspageIntegrationApi.operationServers,
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

  public async deleteStatuspageUrlSetting(
    statuspageUrlSettingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'statuspageUrlSettingId' is not null or undefined
    if (
      statuspageUrlSettingId === null ||
      statuspageUrlSettingId === undefined
    ) {
      throw new RequiredError(
        "statuspageUrlSettingId",
        "deleteStatuspageUrlSetting",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/statuspage/url_settings/{statuspage_url_setting_id}".replace(
        "{statuspage_url_setting_id}",
        encodeURIComponent(String(statuspageUrlSettingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.deleteStatuspageUrlSetting",
      StatuspageIntegrationApi.operationServers,
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

  public async getStatuspageAccount(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/statuspage/account";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.getStatuspageAccount",
      StatuspageIntegrationApi.operationServers,
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

  public async listStatuspageUrlSettings(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/statuspage/url_settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.listStatuspageUrlSettings",
      StatuspageIntegrationApi.operationServers,
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

  public async updateStatuspageAccount(
    body: StatuspageAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateStatuspageAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/statuspage/account";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.updateStatuspageAccount",
      StatuspageIntegrationApi.operationServers,
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
      serialize(body, TypingInfo, "StatuspageAccountUpdateRequest", ""),
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

  public async updateStatuspageUrlSetting(
    statuspageUrlSettingId: string,
    body: StatuspageUrlSettingUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'statuspageUrlSettingId' is not null or undefined
    if (
      statuspageUrlSettingId === null ||
      statuspageUrlSettingId === undefined
    ) {
      throw new RequiredError(
        "statuspageUrlSettingId",
        "updateStatuspageUrlSetting",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateStatuspageUrlSetting");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/statuspage/url_settings/{statuspage_url_setting_id}".replace(
        "{statuspage_url_setting_id}",
        encodeURIComponent(String(statuspageUrlSettingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StatuspageIntegrationApi.v2.updateStatuspageUrlSetting",
      StatuspageIntegrationApi.operationServers,
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
      serialize(body, TypingInfo, "StatuspageUrlSettingUpdateRequest", ""),
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

export class StatuspageIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createStatuspageAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStatuspageAccount(
    response: ResponseContext,
  ): Promise<StatuspageAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: StatuspageAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageAccountResponse",
      ) as StatuspageAccountResponse;
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
      const body: StatuspageAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageAccountResponse",
        "",
      ) as StatuspageAccountResponse;
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
   * @params response Response returned by the server for a request to createStatuspageUrlSetting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStatuspageUrlSetting(
    response: ResponseContext,
  ): Promise<StatuspageUrlSettingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: StatuspageUrlSettingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageUrlSettingResponse",
      ) as StatuspageUrlSettingResponse;
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
      const body: StatuspageUrlSettingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageUrlSettingResponse",
        "",
      ) as StatuspageUrlSettingResponse;
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
   * @params response Response returned by the server for a request to deleteStatuspageAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteStatuspageAccount(
    response: ResponseContext,
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteStatuspageUrlSetting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteStatuspageUrlSetting(
    response: ResponseContext,
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to getStatuspageAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStatuspageAccount(
    response: ResponseContext,
  ): Promise<StatuspageAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: StatuspageAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageAccountResponse",
      ) as StatuspageAccountResponse;
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
      const body: StatuspageAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageAccountResponse",
        "",
      ) as StatuspageAccountResponse;
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
   * @params response Response returned by the server for a request to listStatuspageUrlSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listStatuspageUrlSettings(
    response: ResponseContext,
  ): Promise<StatuspageUrlSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: StatuspageUrlSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageUrlSettingsResponse",
      ) as StatuspageUrlSettingsResponse;
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
      const body: StatuspageUrlSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageUrlSettingsResponse",
        "",
      ) as StatuspageUrlSettingsResponse;
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
   * @params response Response returned by the server for a request to updateStatuspageAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatuspageAccount(
    response: ResponseContext,
  ): Promise<StatuspageAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: StatuspageAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageAccountResponse",
      ) as StatuspageAccountResponse;
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
      const body: StatuspageAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageAccountResponse",
        "",
      ) as StatuspageAccountResponse;
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
   * @params response Response returned by the server for a request to updateStatuspageUrlSetting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatuspageUrlSetting(
    response: ResponseContext,
  ): Promise<StatuspageUrlSettingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: StatuspageUrlSettingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageUrlSettingResponse",
      ) as StatuspageUrlSettingResponse;
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
      const body: StatuspageUrlSettingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StatuspageUrlSettingResponse",
        "",
      ) as StatuspageUrlSettingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface StatuspageIntegrationApiCreateStatuspageAccountRequest {
  /**
   * Statuspage account payload.
   * @type StatuspageAccountCreateRequest
   */
  body: StatuspageAccountCreateRequest;
}

export interface StatuspageIntegrationApiCreateStatuspageUrlSettingRequest {
  /**
   * Statuspage URL setting payload.
   * @type StatuspageUrlSettingCreateRequest
   */
  body: StatuspageUrlSettingCreateRequest;
}

export interface StatuspageIntegrationApiDeleteStatuspageUrlSettingRequest {
  /**
   * The UUID of the Statuspage URL setting.
   * @type string
   */
  statuspageUrlSettingId: string;
}

export interface StatuspageIntegrationApiUpdateStatuspageAccountRequest {
  /**
   * Statuspage account payload.
   * @type StatuspageAccountUpdateRequest
   */
  body: StatuspageAccountUpdateRequest;
}

export interface StatuspageIntegrationApiUpdateStatuspageUrlSettingRequest {
  /**
   * The UUID of the Statuspage URL setting.
   * @type string
   */
  statuspageUrlSettingId: string;
  /**
   * Statuspage URL setting payload.
   * @type StatuspageUrlSettingUpdateRequest
   */
  body: StatuspageUrlSettingUpdateRequest;
}

export class StatuspageIntegrationApi {
  private requestFactory: StatuspageIntegrationApiRequestFactory;
  private responseProcessor: StatuspageIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: StatuspageIntegrationApiRequestFactory,
    responseProcessor?: StatuspageIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new StatuspageIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new StatuspageIntegrationApiResponseProcessor();
  }

  /**
   * Create a Statuspage account for your organization. Only one Statuspage
   * account can be configured per organization.
   * @param param The request object
   */
  public createStatuspageAccount(
    param: StatuspageIntegrationApiCreateStatuspageAccountRequest,
    options?: Configuration,
  ): Promise<StatuspageAccountResponse> {
    const requestContextPromise = this.requestFactory.createStatuspageAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStatuspageAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Statuspage URL setting for your organization.
   * @param param The request object
   */
  public createStatuspageUrlSetting(
    param: StatuspageIntegrationApiCreateStatuspageUrlSettingRequest,
    options?: Configuration,
  ): Promise<StatuspageUrlSettingResponse> {
    const requestContextPromise =
      this.requestFactory.createStatuspageUrlSetting(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStatuspageUrlSetting(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete the Statuspage account configured for your organization.
   * @param param The request object
   */
  public deleteStatuspageAccount(options?: Configuration): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteStatuspageAccount(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteStatuspageAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a single Statuspage URL setting from your organization.
   * @param param The request object
   */
  public deleteStatuspageUrlSetting(
    param: StatuspageIntegrationApiDeleteStatuspageUrlSettingRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteStatuspageUrlSetting(
        param.statuspageUrlSettingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteStatuspageUrlSetting(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the Statuspage account configured for your organization.
   * @param param The request object
   */
  public getStatuspageAccount(
    options?: Configuration,
  ): Promise<StatuspageAccountResponse> {
    const requestContextPromise =
      this.requestFactory.getStatuspageAccount(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStatuspageAccount(responseContext);
        });
    });
  }

  /**
   * Get all Statuspage URL settings configured for your organization.
   * @param param The request object
   */
  public listStatuspageUrlSettings(
    options?: Configuration,
  ): Promise<StatuspageUrlSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.listStatuspageUrlSettings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listStatuspageUrlSettings(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the Statuspage account configured for your organization.
   * @param param The request object
   */
  public updateStatuspageAccount(
    param: StatuspageIntegrationApiUpdateStatuspageAccountRequest,
    options?: Configuration,
  ): Promise<StatuspageAccountResponse> {
    const requestContextPromise = this.requestFactory.updateStatuspageAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateStatuspageAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a single Statuspage URL setting in your organization.
   * @param param The request object
   */
  public updateStatuspageUrlSetting(
    param: StatuspageIntegrationApiUpdateStatuspageUrlSettingRequest,
    options?: Configuration,
  ): Promise<StatuspageUrlSettingResponse> {
    const requestContextPromise =
      this.requestFactory.updateStatuspageUrlSetting(
        param.statuspageUrlSettingId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateStatuspageUrlSetting(
            responseContext,
          );
        });
    });
  }
}
