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
import { OwnershipEvidenceResponse } from "./models/OwnershipEvidenceResponse";
import { OwnershipFeedbackRequest } from "./models/OwnershipFeedbackRequest";
import { OwnershipFeedbackResponse } from "./models/OwnershipFeedbackResponse";
import { OwnershipHistoryResponse } from "./models/OwnershipHistoryResponse";
import { OwnershipInferenceListResponse } from "./models/OwnershipInferenceListResponse";
import { OwnershipInferenceResponse } from "./models/OwnershipInferenceResponse";
import { OwnershipOwnerType } from "./models/OwnershipOwnerType";
import { version } from "../version";

export class CSMOwnershipApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("csm-ownership", version);
    }
  }
  public async createOwnershipFeedback(
    resourceId: string,
    ownerType: OwnershipOwnerType,
    body: OwnershipFeedbackRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CSMOwnershipApi.v2.createOwnershipFeedback"]) {
      throw new Error("Unstable operation 'createOwnershipFeedback' is disabled. Enable it by setting `configuration.unstableOperations['CSMOwnershipApi.v2.createOwnershipFeedback'] = true`");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "createOwnershipFeedback");
    }

    // verify required parameter 'ownerType' is not null or undefined
    if (ownerType === null || ownerType === undefined) {
      throw new RequiredError("ownerType", "createOwnershipFeedback");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOwnershipFeedback");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/ownership/{resource_id}/{owner_type}/feedback".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId)),
    ).replace(
      "{owner_type}",
      encodeURIComponent(String(ownerType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CSMOwnershipApi.v2.createOwnershipFeedback", CSMOwnershipApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.POST, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "OwnershipFeedbackRequest", ""),
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

  public async getOwnershipEvidence(
    resourceId: string,
    ownerType: OwnershipOwnerType,
    ifNoneMatch?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CSMOwnershipApi.v2.getOwnershipEvidence"]) {
      throw new Error("Unstable operation 'getOwnershipEvidence' is disabled. Enable it by setting `configuration.unstableOperations['CSMOwnershipApi.v2.getOwnershipEvidence'] = true`");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "getOwnershipEvidence");
    }

    // verify required parameter 'ownerType' is not null or undefined
    if (ownerType === null || ownerType === undefined) {
      throw new RequiredError("ownerType", "getOwnershipEvidence");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/ownership/{resource_id}/{owner_type}/evidence".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId)),
    ).replace(
      "{owner_type}",
      encodeURIComponent(String(ownerType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CSMOwnershipApi.v2.getOwnershipEvidence", CSMOwnershipApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Header Params
    if (ifNoneMatch !== undefined) {
      requestContext.setHeaderParam("If-None-Match", serialize(ifNoneMatch, TypingInfo, "string", ""));
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getOwnershipInference(
    resourceId: string,
    ownerType: OwnershipOwnerType,
    ifNoneMatch?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CSMOwnershipApi.v2.getOwnershipInference"]) {
      throw new Error("Unstable operation 'getOwnershipInference' is disabled. Enable it by setting `configuration.unstableOperations['CSMOwnershipApi.v2.getOwnershipInference'] = true`");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "getOwnershipInference");
    }

    // verify required parameter 'ownerType' is not null or undefined
    if (ownerType === null || ownerType === undefined) {
      throw new RequiredError("ownerType", "getOwnershipInference");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/ownership/{resource_id}/{owner_type}".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId)),
    ).replace(
      "{owner_type}",
      encodeURIComponent(String(ownerType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CSMOwnershipApi.v2.getOwnershipInference", CSMOwnershipApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Header Params
    if (ifNoneMatch !== undefined) {
      requestContext.setHeaderParam("If-None-Match", serialize(ifNoneMatch, TypingInfo, "string", ""));
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listOwnershipHistory(
    resourceId: string,
    cursor?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CSMOwnershipApi.v2.listOwnershipHistory"]) {
      throw new Error("Unstable operation 'listOwnershipHistory' is disabled. Enable it by setting `configuration.unstableOperations['CSMOwnershipApi.v2.listOwnershipHistory'] = true`");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "listOwnershipHistory");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/ownership/{resource_id}/history".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CSMOwnershipApi.v2.listOwnershipHistory", CSMOwnershipApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (cursor !== undefined) {
      requestContext.setQueryParam(
        "cursor",
        serialize(cursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int32"),
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

  public async listOwnershipHistoryByOwnerType(
    resourceId: string,
    ownerType: OwnershipOwnerType,
    cursor?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CSMOwnershipApi.v2.listOwnershipHistoryByOwnerType"]) {
      throw new Error("Unstable operation 'listOwnershipHistoryByOwnerType' is disabled. Enable it by setting `configuration.unstableOperations['CSMOwnershipApi.v2.listOwnershipHistoryByOwnerType'] = true`");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "listOwnershipHistoryByOwnerType");
    }

    // verify required parameter 'ownerType' is not null or undefined
    if (ownerType === null || ownerType === undefined) {
      throw new RequiredError("ownerType", "listOwnershipHistoryByOwnerType");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/ownership/{resource_id}/{owner_type}/history".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId)),
    ).replace(
      "{owner_type}",
      encodeURIComponent(String(ownerType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CSMOwnershipApi.v2.listOwnershipHistoryByOwnerType", CSMOwnershipApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (cursor !== undefined) {
      requestContext.setQueryParam(
        "cursor",
        serialize(cursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int32"),
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

  public async listOwnershipInferences(
    resourceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CSMOwnershipApi.v2.listOwnershipInferences"]) {
      throw new Error("Unstable operation 'listOwnershipInferences' is disabled. Enable it by setting `configuration.unstableOperations['CSMOwnershipApi.v2.listOwnershipInferences'] = true`");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "listOwnershipInferences");
    }

    // Path Params
    const localVarPath = "/api/v2/csm/ownership/{resource_id}".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CSMOwnershipApi.v2.listOwnershipInferences", CSMOwnershipApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
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
}

export class CSMOwnershipApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOwnershipFeedback
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOwnershipFeedback(
    response: ResponseContext,
  ): Promise<OwnershipFeedbackResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 201) {
      const body: OwnershipFeedbackResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipFeedbackResponse",
      ) as OwnershipFeedbackResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
    if (response.httpStatusCode === 409) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
      let body: OwnershipInferenceResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "OwnershipInferenceResponse",
        ) as OwnershipInferenceResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<OwnershipInferenceResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<OwnershipInferenceResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OwnershipFeedbackResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipFeedbackResponse",
        "",
      ) as OwnershipFeedbackResponse;
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
   * @params response Response returned by the server for a request to getOwnershipEvidence
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOwnershipEvidence(
    response: ResponseContext,
  ): Promise<OwnershipEvidenceResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: OwnershipEvidenceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipEvidenceResponse",
      ) as OwnershipEvidenceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OwnershipEvidenceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipEvidenceResponse",
        "",
      ) as OwnershipEvidenceResponse;
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
   * @params response Response returned by the server for a request to getOwnershipInference
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOwnershipInference(
    response: ResponseContext,
  ): Promise<OwnershipInferenceResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: OwnershipInferenceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipInferenceResponse",
      ) as OwnershipInferenceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OwnershipInferenceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipInferenceResponse",
        "",
      ) as OwnershipInferenceResponse;
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
   * @params response Response returned by the server for a request to listOwnershipHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOwnershipHistory(
    response: ResponseContext,
  ): Promise<OwnershipHistoryResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: OwnershipHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipHistoryResponse",
      ) as OwnershipHistoryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OwnershipHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipHistoryResponse",
        "",
      ) as OwnershipHistoryResponse;
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
   * @params response Response returned by the server for a request to listOwnershipHistoryByOwnerType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOwnershipHistoryByOwnerType(
    response: ResponseContext,
  ): Promise<OwnershipHistoryResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: OwnershipHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipHistoryResponse",
      ) as OwnershipHistoryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OwnershipHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipHistoryResponse",
        "",
      ) as OwnershipHistoryResponse;
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
   * @params response Response returned by the server for a request to listOwnershipInferences
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOwnershipInferences(
    response: ResponseContext,
  ): Promise<OwnershipInferenceListResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: OwnershipInferenceListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipInferenceListResponse",
      ) as OwnershipInferenceListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OwnershipInferenceListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OwnershipInferenceListResponse",
        "",
      ) as OwnershipInferenceListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CSMOwnershipApiCreateOwnershipFeedbackRequest {
  /**
   * The identifier of the resource that the feedback applies to.
   * @type string
   */
  resourceId: string;
  /**
   * The type of owner that the feedback applies to.
   * @type OwnershipOwnerType
   */
  ownerType: OwnershipOwnerType;
  /**
   * @type OwnershipFeedbackRequest
   */
  body: OwnershipFeedbackRequest;
}

export interface CSMOwnershipApiGetOwnershipEvidenceRequest {
  /**
   * The identifier of the resource to retrieve evidence for.
   * @type string
   */
  resourceId: string;
  /**
   * The owner type of the inference to retrieve evidence for.
   * @type OwnershipOwnerType
   */
  ownerType: OwnershipOwnerType;
  /**
   * A previously returned weak `ETag` value. When supplied and the evidence has not changed, the endpoint returns `304 Not Modified`.
   * @type string
   */
  ifNoneMatch?: string;
}

export interface CSMOwnershipApiGetOwnershipInferenceRequest {
  /**
   * The identifier of the resource to retrieve the ownership inference for.
   * @type string
   */
  resourceId: string;
  /**
   * The owner type of the inference to retrieve.
   * @type OwnershipOwnerType
   */
  ownerType: OwnershipOwnerType;
  /**
   * A previously returned `ETag` value. When supplied and the resource has not changed, the endpoint returns `304 Not Modified`.
   * @type string
   */
  ifNoneMatch?: string;
}

export interface CSMOwnershipApiListOwnershipHistoryRequest {
  /**
   * The identifier of the resource to retrieve inference history for.
   * @type string
   */
  resourceId: string;
  /**
   * An opaque, base64-encoded cursor token returned by a previous call in `pagination.next_cursor`. Omit to fetch the first page.
   * @type string
   */
  cursor?: string;
  /**
   * The maximum number of history entries to return per page.
   * @type number
   */
  limit?: number;
}

export interface CSMOwnershipApiListOwnershipHistoryByOwnerTypeRequest {
  /**
   * The identifier of the resource to retrieve inference history for.
   * @type string
   */
  resourceId: string;
  /**
   * The owner type to filter history by.
   * @type OwnershipOwnerType
   */
  ownerType: OwnershipOwnerType;
  /**
   * An opaque, base64-encoded cursor token returned by a previous call in `pagination.next_cursor`. Omit to fetch the first page.
   * @type string
   */
  cursor?: string;
  /**
   * The maximum number of history entries to return per page.
   * @type number
   */
  limit?: number;
}

export interface CSMOwnershipApiListOwnershipInferencesRequest {
  /**
   * The identifier of the resource to retrieve ownership inferences for.
   * @type string
   */
  resourceId: string;
}

export class CSMOwnershipApi {
  private requestFactory: CSMOwnershipApiRequestFactory;
  private responseProcessor: CSMOwnershipApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: CSMOwnershipApiRequestFactory,
    responseProcessor?: CSMOwnershipApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CSMOwnershipApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CSMOwnershipApiResponseProcessor();
  }

  /**
   * Submit feedback on the current ownership inference for a resource and owner type. Valid actions are `confirm`, `reject`, `correct`, and `persist`.
   * 
   * The request must include the current inference `checksum` in `inference_checksum`. If the checksum does not match the current inference state, the endpoint returns `409 Conflict`.
   * 
   * When `action` is `correct`, `corrected_owner_handle` and `corrected_owner_type` are required.
   * @param param The request object
   */
  public createOwnershipFeedback(
    param: CSMOwnershipApiCreateOwnershipFeedbackRequest,
    options?: Configuration,
  ): Promise<OwnershipFeedbackResponse> {
    const requestContextPromise = this.requestFactory.createOwnershipFeedback(
      param.resourceId,
      param.ownerType,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOwnershipFeedback(responseContext);
        });
    });
  }

  /**
   * Get the evidence versions backing the current ownership inference for a resource and owner type.
   * 
   * This endpoint supports weak ETag caching. Pass the previously returned `ETag` value in the `If-None-Match` request header to receive a `304 Not Modified` response when the evidence has not changed.
   * @param param The request object
   */
  public getOwnershipEvidence(
    param: CSMOwnershipApiGetOwnershipEvidenceRequest,
    options?: Configuration,
  ): Promise<OwnershipEvidenceResponse> {
    const requestContextPromise = this.requestFactory.getOwnershipEvidence(
      param.resourceId,
      param.ownerType,
      param.ifNoneMatch,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOwnershipEvidence(responseContext);
        });
    });
  }

  /**
   * Get the current ownership inference for a resource for a specific owner type.
   * 
   * This endpoint supports ETag-based caching. Pass the previously returned `ETag` value in the `If-None-Match` request header to receive a `304 Not Modified` response when the inference has not changed.
   * @param param The request object
   */
  public getOwnershipInference(
    param: CSMOwnershipApiGetOwnershipInferenceRequest,
    options?: Configuration,
  ): Promise<OwnershipInferenceResponse> {
    const requestContextPromise = this.requestFactory.getOwnershipInference(
      param.resourceId,
      param.ownerType,
      param.ifNoneMatch,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOwnershipInference(responseContext);
        });
    });
  }

  /**
   * List inference history entries for a resource across all owner types, ordered from most recent to oldest. Uses cursor-based pagination.
   * @param param The request object
   */
  public listOwnershipHistory(
    param: CSMOwnershipApiListOwnershipHistoryRequest,
    options?: Configuration,
  ): Promise<OwnershipHistoryResponse> {
    const requestContextPromise = this.requestFactory.listOwnershipHistory(
      param.resourceId,
      param.cursor,
      param.limit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOwnershipHistory(responseContext);
        });
    });
  }

  /**
   * List inference history entries for a resource filtered by owner type, ordered from most recent to oldest. Uses cursor-based pagination.
   * @param param The request object
   */
  public listOwnershipHistoryByOwnerType(
    param: CSMOwnershipApiListOwnershipHistoryByOwnerTypeRequest,
    options?: Configuration,
  ): Promise<OwnershipHistoryResponse> {
    const requestContextPromise = this.requestFactory.listOwnershipHistoryByOwnerType(
      param.resourceId,
      param.ownerType,
      param.cursor,
      param.limit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOwnershipHistoryByOwnerType(responseContext);
        });
    });
  }

  /**
   * Get all current ownership inferences for a resource, one per owner type (`user`, `team`, `service`, `unknown`).
   * @param param The request object
   */
  public listOwnershipInferences(
    param: CSMOwnershipApiListOwnershipInferencesRequest,
    options?: Configuration,
  ): Promise<OwnershipInferenceListResponse> {
    const requestContextPromise = this.requestFactory.listOwnershipInferences(
      param.resourceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOwnershipInferences(responseContext);
        });
    });
  }
}
