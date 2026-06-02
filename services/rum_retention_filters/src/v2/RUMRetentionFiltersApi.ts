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
import { RumPermanentRetentionFilterID } from "./models/RumPermanentRetentionFilterID";
import { RumPermanentRetentionFilterResponse } from "./models/RumPermanentRetentionFilterResponse";
import { RumPermanentRetentionFiltersResponse } from "./models/RumPermanentRetentionFiltersResponse";
import { RumPermanentRetentionFilterUpdateRequest } from "./models/RumPermanentRetentionFilterUpdateRequest";
import { RumRetentionFilterCreateRequest } from "./models/RumRetentionFilterCreateRequest";
import { RumRetentionFilterResponse } from "./models/RumRetentionFilterResponse";
import { RumRetentionFiltersOrderRequest } from "./models/RumRetentionFiltersOrderRequest";
import { RumRetentionFiltersOrderResponse } from "./models/RumRetentionFiltersOrderResponse";
import { RumRetentionFiltersResponse } from "./models/RumRetentionFiltersResponse";
import { RumRetentionFilterUpdateRequest } from "./models/RumRetentionFilterUpdateRequest";
import { version } from "../version";

export class RUMRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-retention-filters", version);
    }
  }
  public async createRetentionFilter(
    appId: string,
    body: RumRetentionFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "createRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.createRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumRetentionFilterCreateRequest", ""),
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

  public async deleteRetentionFilter(
    appId: string,
    rfId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "deleteRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.deleteRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

  public async getPermanentRetentionFilter(
    appId: string,
    permanentRfId: RumPermanentRetentionFilterID,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getPermanentRetentionFilter");
    }

    // verify required parameter 'permanentRfId' is not null or undefined
    if (permanentRfId === null || permanentRfId === undefined) {
      throw new RequiredError("permanentRfId", "getPermanentRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/permanent/{permanent_rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace(
          "{permanent_rf_id}",
          encodeURIComponent(String(permanentRfId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.getPermanentRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

  public async getRetentionFilter(
    appId: string,
    rfId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "getRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.getRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

  public async listPermanentRetentionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listPermanentRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/permanent".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.listPermanentRetentionFilters",
      RUMRetentionFiltersApi.operationServers,
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

  public async listRetentionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.listRetentionFilters",
      RUMRetentionFiltersApi.operationServers,
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

  public async orderRetentionFilters(
    appId: string,
    body: RumRetentionFiltersOrderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "orderRetentionFilters");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "orderRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/relationships/retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.orderRetentionFilters",
      RUMRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumRetentionFiltersOrderRequest", ""),
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

  public async updatePermanentRetentionFilter(
    appId: string,
    permanentRfId: RumPermanentRetentionFilterID,
    body: RumPermanentRetentionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updatePermanentRetentionFilter");
    }

    // verify required parameter 'permanentRfId' is not null or undefined
    if (permanentRfId === null || permanentRfId === undefined) {
      throw new RequiredError(
        "permanentRfId",
        "updatePermanentRetentionFilter",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePermanentRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/permanent/{permanent_rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace(
          "{permanent_rf_id}",
          encodeURIComponent(String(permanentRfId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.updatePermanentRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "RumPermanentRetentionFilterUpdateRequest",
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

  public async updateRetentionFilter(
    appId: string,
    rfId: string,
    body: RumRetentionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "updateRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersApi.v2.updateRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumRetentionFilterUpdateRequest", ""),
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

export class RUMRetentionFiltersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRetentionFilter(
    response: ResponseContext,
  ): Promise<RumRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
      ) as RumRetentionFilterResponse;
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
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
        "",
      ) as RumRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to deleteRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRetentionFilter(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
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
   * @params response Response returned by the server for a request to getPermanentRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPermanentRetentionFilter(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
      ) as RumPermanentRetentionFilterResponse;
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
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
        "",
      ) as RumPermanentRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to getRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRetentionFilter(
    response: ResponseContext,
  ): Promise<RumRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
      ) as RumRetentionFilterResponse;
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
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
        "",
      ) as RumRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to listPermanentRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPermanentRetentionFilters(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFiltersResponse",
      ) as RumPermanentRetentionFiltersResponse;
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
      const body: RumPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFiltersResponse",
        "",
      ) as RumPermanentRetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to listRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRetentionFilters(
    response: ResponseContext,
  ): Promise<RumRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersResponse",
      ) as RumRetentionFiltersResponse;
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
      const body: RumRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersResponse",
        "",
      ) as RumRetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to orderRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async orderRetentionFilters(
    response: ResponseContext,
  ): Promise<RumRetentionFiltersOrderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFiltersOrderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersOrderResponse",
      ) as RumRetentionFiltersOrderResponse;
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
      const body: RumRetentionFiltersOrderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersOrderResponse",
        "",
      ) as RumRetentionFiltersOrderResponse;
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
   * @params response Response returned by the server for a request to updatePermanentRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePermanentRetentionFilter(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
      ) as RumPermanentRetentionFilterResponse;
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
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
        "",
      ) as RumPermanentRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to updateRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRetentionFilter(
    response: ResponseContext,
  ): Promise<RumRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
      ) as RumRetentionFilterResponse;
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
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
        "",
      ) as RumRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMRetentionFiltersApiCreateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The definition of the new RUM retention filter.
   * @type RumRetentionFilterCreateRequest
   */
  body: RumRetentionFilterCreateRequest;
}

export interface RUMRetentionFiltersApiDeleteRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string;
}

export interface RUMRetentionFiltersApiGetPermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The identifier of the permanent RUM retention filter.
   * @type RumPermanentRetentionFilterID
   */
  permanentRfId: RumPermanentRetentionFilterID;
}

export interface RUMRetentionFiltersApiGetRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string;
}

export interface RUMRetentionFiltersApiListPermanentRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMRetentionFiltersApiListRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMRetentionFiltersApiOrderRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * New definition of the RUM retention filter.
   * @type RumRetentionFiltersOrderRequest
   */
  body: RumRetentionFiltersOrderRequest;
}

export interface RUMRetentionFiltersApiUpdatePermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The identifier of the permanent RUM retention filter.
   * @type RumPermanentRetentionFilterID
   */
  permanentRfId: RumPermanentRetentionFilterID;
  /**
   * New configuration of the permanent RUM retention filter.
   * @type RumPermanentRetentionFilterUpdateRequest
   */
  body: RumPermanentRetentionFilterUpdateRequest;
}

export interface RUMRetentionFiltersApiUpdateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string;
  /**
   * New definition of the RUM retention filter.
   * @type RumRetentionFilterUpdateRequest
   */
  body: RumRetentionFilterUpdateRequest;
}

export class RUMRetentionFiltersApi {
  private requestFactory: RUMRetentionFiltersApiRequestFactory;
  private responseProcessor: RUMRetentionFiltersApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMRetentionFiltersApiRequestFactory,
    responseProcessor?: RUMRetentionFiltersApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMRetentionFiltersApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMRetentionFiltersApiResponseProcessor();
  }

  /**
   * Create a RUM retention filter for a RUM application.
   * Returns RUM retention filter objects from the request body when the request is successful.
   * @param param The request object
   */
  public createRetentionFilter(
    param: RUMRetentionFiltersApiCreateRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.createRetentionFilter(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Delete a RUM retention filter for a RUM application.
   * @param param The request object
   */
  public deleteRetentionFilter(
    param: RUMRetentionFiltersApiDeleteRetentionFilterRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRetentionFilter(
      param.appId,
      param.rfId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get a permanent RUM retention filter for a RUM application by its identifier.
   * @param param The request object
   */
  public getPermanentRetentionFilter(
    param: RUMRetentionFiltersApiGetPermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.getPermanentRetentionFilter(
        param.appId,
        param.permanentRfId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPermanentRetentionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a RUM retention filter for a RUM application.
   * @param param The request object
   */
  public getRetentionFilter(
    param: RUMRetentionFiltersApiGetRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.getRetentionFilter(
      param.appId,
      param.rfId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get the list of permanent RUM retention filters for a RUM application.
   * Permanent retention filters are predefined filters that cannot be created or deleted.
   * For each filter, the `editability` block indicates which cross-product fields can be updated.
   * @param param The request object
   */
  public listPermanentRetentionFilters(
    param: RUMRetentionFiltersApiListPermanentRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listPermanentRetentionFilters(param.appId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPermanentRetentionFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of RUM retention filters for a RUM application.
   * @param param The request object
   */
  public listRetentionFilters(
    param: RUMRetentionFiltersApiListRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumRetentionFiltersResponse> {
    const requestContextPromise = this.requestFactory.listRetentionFilters(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRetentionFilters(responseContext);
        });
    });
  }

  /**
   * Order RUM retention filters for a RUM application.
   * Returns RUM retention filter objects without attributes from the request body when the request is successful.
   * @param param The request object
   */
  public orderRetentionFilters(
    param: RUMRetentionFiltersApiOrderRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumRetentionFiltersOrderResponse> {
    const requestContextPromise = this.requestFactory.orderRetentionFilters(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.orderRetentionFilters(responseContext);
        });
    });
  }

  /**
   * Update the cross-product sampling configuration of a permanent RUM retention filter for a RUM application.
   * Only fields marked as editable in the `editability` block of the filter can be updated.
   * Updating a non-editable field returns a `400` response.
   * @param param The request object
   */
  public updatePermanentRetentionFilter(
    param: RUMRetentionFiltersApiUpdatePermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updatePermanentRetentionFilter(
        param.appId,
        param.permanentRfId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePermanentRetentionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a RUM retention filter for a RUM application.
   * Returns RUM retention filter objects from the request body when the request is successful.
   * @param param The request object
   */
  public updateRetentionFilter(
    param: RUMRetentionFiltersApiUpdateRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.updateRetentionFilter(
      param.appId,
      param.rfId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRetentionFilter(responseContext);
        });
    });
  }
}
