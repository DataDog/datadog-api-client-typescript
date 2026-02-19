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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { RumSegmentCreateRequest } from "./models/RumSegmentCreateRequest";
import { RumSegmentDeleteResponse } from "./models/RumSegmentDeleteResponse";
import { RumSegmentListResponse } from "./models/RumSegmentListResponse";
import { RumSegmentResponse } from "./models/RumSegmentResponse";
import { RumSegmentTemplateListResponse } from "./models/RumSegmentTemplateListResponse";
import { RumSegmentUpdateRequest } from "./models/RumSegmentUpdateRequest";
import { RumStaticSegmentCreateRequest } from "./models/RumStaticSegmentCreateRequest";
import { version } from "../version";

export class RUMUserSegmentsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-user-segments", version);
    }
  }
  public async createRumSegment(
    body: RumSegmentCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMUserSegmentsApi.v2.createRumSegment"]) {
      throw new Error(
        "Unstable operation 'createRumSegment' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.createRumSegment'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.createRumSegment",
      RUMUserSegmentsApi.operationServers,
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
      serialize(body, TypingInfo, "RumSegmentCreateRequest", ""),
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

  public async createRumStaticSegment(
    body: RumStaticSegmentCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RUMUserSegmentsApi.v2.createRumStaticSegment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createRumStaticSegment' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.createRumStaticSegment'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumStaticSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/static";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.createRumStaticSegment",
      RUMUserSegmentsApi.operationServers,
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
      serialize(body, TypingInfo, "RumStaticSegmentCreateRequest", ""),
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

  public async deleteRumSegment(
    segmentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMUserSegmentsApi.v2.deleteRumSegment"]) {
      throw new Error(
        "Unstable operation 'deleteRumSegment' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.deleteRumSegment'] = true`",
      );
    }

    // verify required parameter 'segmentId' is not null or undefined
    if (segmentId === null || segmentId === undefined) {
      throw new RequiredError("segmentId", "deleteRumSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/{segment_id}".replace(
      "{segment_id}",
      encodeURIComponent(String(segmentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.deleteRumSegment",
      RUMUserSegmentsApi.operationServers,
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

  public async getRumSegment(
    segmentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMUserSegmentsApi.v2.getRumSegment"]) {
      throw new Error(
        "Unstable operation 'getRumSegment' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.getRumSegment'] = true`",
      );
    }

    // verify required parameter 'segmentId' is not null or undefined
    if (segmentId === null || segmentId === undefined) {
      throw new RequiredError("segmentId", "getRumSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/{segment_id}".replace(
      "{segment_id}",
      encodeURIComponent(String(segmentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.getRumSegment",
      RUMUserSegmentsApi.operationServers,
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

  public async initializeRumSegments(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["RUMUserSegmentsApi.v2.initializeRumSegments"]
    ) {
      throw new Error(
        "Unstable operation 'initializeRumSegments' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.initializeRumSegments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/initialize";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.initializeRumSegments",
      RUMUserSegmentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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

  public async listRumSegments(
    sort?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMUserSegmentsApi.v2.listRumSegments"]) {
      throw new Error(
        "Unstable operation 'listRumSegments' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.listRumSegments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.listRumSegments",
      RUMUserSegmentsApi.operationServers,
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

    // Query Params
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listRumSegmentTemplates(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RUMUserSegmentsApi.v2.listRumSegmentTemplates"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listRumSegmentTemplates' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.listRumSegmentTemplates'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.listRumSegmentTemplates",
      RUMUserSegmentsApi.operationServers,
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

  public async updateRumSegment(
    segmentId: string,
    body: RumSegmentUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMUserSegmentsApi.v2.updateRumSegment"]) {
      throw new Error(
        "Unstable operation 'updateRumSegment' is disabled. Enable it by setting `configuration.unstableOperations['RUMUserSegmentsApi.v2.updateRumSegment'] = true`",
      );
    }

    // verify required parameter 'segmentId' is not null or undefined
    if (segmentId === null || segmentId === undefined) {
      throw new RequiredError("segmentId", "updateRumSegment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRumSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/{segment_id}".replace(
      "{segment_id}",
      encodeURIComponent(String(segmentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMUserSegmentsApi.v2.updateRumSegment",
      RUMUserSegmentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RumSegmentUpdateRequest", ""),
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

export class RUMUserSegmentsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRumSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumSegment(
    response: ResponseContext,
  ): Promise<RumSegmentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumSegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentResponse",
      ) as RumSegmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: RumSegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentResponse",
        "",
      ) as RumSegmentResponse;
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
   * @params response Response returned by the server for a request to createRumStaticSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumStaticSegment(
    response: ResponseContext,
  ): Promise<RumSegmentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumSegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentResponse",
      ) as RumSegmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: RumSegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentResponse",
        "",
      ) as RumSegmentResponse;
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
   * @params response Response returned by the server for a request to deleteRumSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRumSegment(
    response: ResponseContext,
  ): Promise<RumSegmentDeleteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSegmentDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentDeleteResponse",
      ) as RumSegmentDeleteResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: RumSegmentDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentDeleteResponse",
        "",
      ) as RumSegmentDeleteResponse;
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
   * @params response Response returned by the server for a request to getRumSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumSegment(
    response: ResponseContext,
  ): Promise<RumSegmentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentResponse",
      ) as RumSegmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: RumSegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentResponse",
        "",
      ) as RumSegmentResponse;
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
   * @params response Response returned by the server for a request to initializeRumSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async initializeRumSegments(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to listRumSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumSegments(
    response: ResponseContext,
  ): Promise<RumSegmentListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSegmentListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentListResponse",
      ) as RumSegmentListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: RumSegmentListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentListResponse",
        "",
      ) as RumSegmentListResponse;
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
   * @params response Response returned by the server for a request to listRumSegmentTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumSegmentTemplates(
    response: ResponseContext,
  ): Promise<RumSegmentTemplateListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSegmentTemplateListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentTemplateListResponse",
      ) as RumSegmentTemplateListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: RumSegmentTemplateListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSegmentTemplateListResponse",
        "",
      ) as RumSegmentTemplateListResponse;
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
   * @params response Response returned by the server for a request to updateRumSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRumSegment(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
}

export interface RUMUserSegmentsApiCreateRumSegmentRequest {
  /**
   * @type RumSegmentCreateRequest
   */
  body: RumSegmentCreateRequest;
}

export interface RUMUserSegmentsApiCreateRumStaticSegmentRequest {
  /**
   * @type RumStaticSegmentCreateRequest
   */
  body: RumStaticSegmentCreateRequest;
}

export interface RUMUserSegmentsApiDeleteRumSegmentRequest {
  /**
   * The identifier of the segment.
   * @type string
   */
  segmentId: string;
}

export interface RUMUserSegmentsApiGetRumSegmentRequest {
  /**
   * The identifier of the segment.
   * @type string
   */
  segmentId: string;
}

export interface RUMUserSegmentsApiListRumSegmentsRequest {
  /**
   * Sort order for the segments list.
   * @type string
   */
  sort?: string;
  /**
   * Maximum number of segments to return.
   * @type number
   */
  limit?: number;
}

export interface RUMUserSegmentsApiUpdateRumSegmentRequest {
  /**
   * The identifier of the segment.
   * @type string
   */
  segmentId: string;
  /**
   * @type RumSegmentUpdateRequest
   */
  body: RumSegmentUpdateRequest;
}

export class RUMUserSegmentsApi {
  private requestFactory: RUMUserSegmentsApiRequestFactory;
  private responseProcessor: RUMUserSegmentsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMUserSegmentsApiRequestFactory,
    responseProcessor?: RUMUserSegmentsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMUserSegmentsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMUserSegmentsApiResponseProcessor();
  }

  /**
   * Create a new user segment for the current organization.
   * @param param The request object
   */
  public createRumSegment(
    param: RUMUserSegmentsApiCreateRumSegmentRequest,
    options?: Configuration,
  ): Promise<RumSegmentResponse> {
    const requestContextPromise = this.requestFactory.createRumSegment(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumSegment(responseContext);
        });
    });
  }

  /**
   * Create a new static user segment from a journey query. Static segments contain a fixed list of users computed from the query at creation time.
   * @param param The request object
   */
  public createRumStaticSegment(
    param: RUMUserSegmentsApiCreateRumStaticSegmentRequest,
    options?: Configuration,
  ): Promise<RumSegmentResponse> {
    const requestContextPromise = this.requestFactory.createRumStaticSegment(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumStaticSegment(responseContext);
        });
    });
  }

  /**
   * Delete a user segment by its identifier.
   * @param param The request object
   */
  public deleteRumSegment(
    param: RUMUserSegmentsApiDeleteRumSegmentRequest,
    options?: Configuration,
  ): Promise<RumSegmentDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteRumSegment(
      param.segmentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRumSegment(responseContext);
        });
    });
  }

  /**
   * Get a specific user segment by its identifier.
   * @param param The request object
   */
  public getRumSegment(
    param: RUMUserSegmentsApiGetRumSegmentRequest,
    options?: Configuration,
  ): Promise<RumSegmentResponse> {
    const requestContextPromise = this.requestFactory.getRumSegment(
      param.segmentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumSegment(responseContext);
        });
    });
  }

  /**
   * Initialize default segments for the current organization. This creates a set of predefined segments if they do not already exist.
   * @param param The request object
   */
  public initializeRumSegments(options?: Configuration): Promise<void> {
    const requestContextPromise =
      this.requestFactory.initializeRumSegments(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.initializeRumSegments(responseContext);
        });
    });
  }

  /**
   * List all user segments for the current organization. Supports sorting and pagination.
   * @param param The request object
   */
  public listRumSegments(
    param: RUMUserSegmentsApiListRumSegmentsRequest = {},
    options?: Configuration,
  ): Promise<RumSegmentListResponse> {
    const requestContextPromise = this.requestFactory.listRumSegments(
      param.sort,
      param.limit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumSegments(responseContext);
        });
    });
  }

  /**
   * List all available segment templates. Templates provide predefined segment configurations that can be customized with parameters.
   * @param param The request object
   */
  public listRumSegmentTemplates(
    options?: Configuration,
  ): Promise<RumSegmentTemplateListResponse> {
    const requestContextPromise =
      this.requestFactory.listRumSegmentTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumSegmentTemplates(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an existing user segment. All fields in the request body are optional.
   * @param param The request object
   */
  public updateRumSegment(
    param: RUMUserSegmentsApiUpdateRumSegmentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateRumSegment(
      param.segmentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRumSegment(responseContext);
        });
    });
  }
}
