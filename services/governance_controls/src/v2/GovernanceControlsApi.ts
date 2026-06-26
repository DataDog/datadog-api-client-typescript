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
import { ControlNotificationSettingsResponse } from "./models/ControlNotificationSettingsResponse";
import { ControlNotificationSettingsUpdateRequest } from "./models/ControlNotificationSettingsUpdateRequest";
import { GovernanceControlDetectionResponse } from "./models/GovernanceControlDetectionResponse";
import { GovernanceControlDetectionsResponse } from "./models/GovernanceControlDetectionsResponse";
import { GovernanceControlDetectionUpdateRequest } from "./models/GovernanceControlDetectionUpdateRequest";
import { GovernanceControlResponse } from "./models/GovernanceControlResponse";
import { GovernanceControlsResponse } from "./models/GovernanceControlsResponse";
import { GovernanceControlUpdateRequest } from "./models/GovernanceControlUpdateRequest";
import { GovernanceMitigationRequest } from "./models/GovernanceMitigationRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class GovernanceControlsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("governance-controls", version);
    }
  }
  public async createGovernanceMitigation(
    body: GovernanceMitigationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.createGovernanceMitigation"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createGovernanceMitigation' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.createGovernanceMitigation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGovernanceMitigation");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/mitigate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.createGovernanceMitigation",
      GovernanceControlsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "GovernanceMitigationRequest", ""),
      contentType,
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

  public async getGovernanceControl(
    detectionType: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.getGovernanceControl"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getGovernanceControl' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.getGovernanceControl'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError("detectionType", "getGovernanceControl");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control/{detection_type}".replace(
      "{detection_type}",
      encodeURIComponent(String(detectionType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.getGovernanceControl",
      GovernanceControlsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGovernanceControlDetection(
    detectionType: string,
    detectionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.getGovernanceControlDetection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getGovernanceControlDetection' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.getGovernanceControlDetection'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError("detectionType", "getGovernanceControlDetection");
    }

    // verify required parameter 'detectionId' is not null or undefined
    if (detectionId === null || detectionId === undefined) {
      throw new RequiredError("detectionId", "getGovernanceControlDetection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/detections/{detection_id}"
        .replace("{detection_type}", encodeURIComponent(String(detectionType)))
        .replace("{detection_id}", encodeURIComponent(String(detectionId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.getGovernanceControlDetection",
      GovernanceControlsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGovernanceControlNotificationSettings(
    detectionType: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.getGovernanceControlNotificationSettings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getGovernanceControlNotificationSettings' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.getGovernanceControlNotificationSettings'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "getGovernanceControlNotificationSettings",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/notification_settings".replace(
        "{detection_type}",
        encodeURIComponent(String(detectionType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.getGovernanceControlNotificationSettings",
      GovernanceControlsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGovernanceControlDetections(
    detectionType: string,
    filterState?: string,
    filterQuery?: string,
    sort?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.listGovernanceControlDetections"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listGovernanceControlDetections' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.listGovernanceControlDetections'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "listGovernanceControlDetections",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/detections".replace(
        "{detection_type}",
        encodeURIComponent(String(detectionType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.listGovernanceControlDetections",
      GovernanceControlsApi.operationServers,
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
    if (filterState !== undefined) {
      requestContext.setQueryParam(
        "filter[state]",
        serialize(filterState, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGovernanceControls(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.listGovernanceControls"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listGovernanceControls' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.listGovernanceControls'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.listGovernanceControls",
      GovernanceControlsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateGovernanceControl(
    detectionType: string,
    body: GovernanceControlUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.updateGovernanceControl"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGovernanceControl' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.updateGovernanceControl'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError("detectionType", "updateGovernanceControl");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGovernanceControl");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control/{detection_type}".replace(
      "{detection_type}",
      encodeURIComponent(String(detectionType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.updateGovernanceControl",
      GovernanceControlsApi.operationServers,
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
      serialize(body, TypingInfo, "GovernanceControlUpdateRequest", ""),
      contentType,
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

  public async updateGovernanceControlDetection(
    detectionType: string,
    detectionId: string,
    body: GovernanceControlDetectionUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.updateGovernanceControlDetection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGovernanceControlDetection' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.updateGovernanceControlDetection'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "updateGovernanceControlDetection",
      );
    }

    // verify required parameter 'detectionId' is not null or undefined
    if (detectionId === null || detectionId === undefined) {
      throw new RequiredError(
        "detectionId",
        "updateGovernanceControlDetection",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGovernanceControlDetection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/detections/{detection_id}"
        .replace("{detection_type}", encodeURIComponent(String(detectionType)))
        .replace("{detection_id}", encodeURIComponent(String(detectionId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.updateGovernanceControlDetection",
      GovernanceControlsApi.operationServers,
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
        "GovernanceControlDetectionUpdateRequest",
        "",
      ),
      contentType,
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

  public async updateGovernanceControlNotificationSettings(
    detectionType: string,
    body: ControlNotificationSettingsUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceControlsApi.v2.updateGovernanceControlNotificationSettings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGovernanceControlNotificationSettings' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.updateGovernanceControlNotificationSettings'] = true`",
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "updateGovernanceControlNotificationSettings",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateGovernanceControlNotificationSettings",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/notification_settings".replace(
        "{detection_type}",
        encodeURIComponent(String(detectionType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceControlsApi.v2.updateGovernanceControlNotificationSettings",
      GovernanceControlsApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "ControlNotificationSettingsUpdateRequest",
        "",
      ),
      contentType,
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

export class GovernanceControlsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGovernanceMitigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGovernanceMitigation(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGovernanceControl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceControl(
    response: ResponseContext,
  ): Promise<GovernanceControlResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
      ) as GovernanceControlResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
        "",
      ) as GovernanceControlResponse;
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
   * @params response Response returned by the server for a request to getGovernanceControlDetection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceControlDetection(
    response: ResponseContext,
  ): Promise<GovernanceControlDetectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlDetectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlDetectionResponse",
      ) as GovernanceControlDetectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: GovernanceControlDetectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlDetectionResponse",
        "",
      ) as GovernanceControlDetectionResponse;
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
   * @params response Response returned by the server for a request to getGovernanceControlNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceControlNotificationSettings(
    response: ResponseContext,
  ): Promise<ControlNotificationSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ControlNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ControlNotificationSettingsResponse",
      ) as ControlNotificationSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: ControlNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ControlNotificationSettingsResponse",
        "",
      ) as ControlNotificationSettingsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceControlDetections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceControlDetections(
    response: ResponseContext,
  ): Promise<GovernanceControlDetectionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlDetectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlDetectionsResponse",
      ) as GovernanceControlDetectionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: GovernanceControlDetectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlDetectionsResponse",
        "",
      ) as GovernanceControlDetectionsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceControls
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceControls(
    response: ResponseContext,
  ): Promise<GovernanceControlsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlsResponse",
      ) as GovernanceControlsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: GovernanceControlsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlsResponse",
        "",
      ) as GovernanceControlsResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceControl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceControl(
    response: ResponseContext,
  ): Promise<GovernanceControlResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
      ) as GovernanceControlResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
        "",
      ) as GovernanceControlResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceControlDetection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceControlDetection(
    response: ResponseContext,
  ): Promise<GovernanceControlDetectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlDetectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlDetectionResponse",
      ) as GovernanceControlDetectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: GovernanceControlDetectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlDetectionResponse",
        "",
      ) as GovernanceControlDetectionResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceControlNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceControlNotificationSettings(
    response: ResponseContext,
  ): Promise<ControlNotificationSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ControlNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ControlNotificationSettingsResponse",
      ) as ControlNotificationSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: ControlNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ControlNotificationSettingsResponse",
        "",
      ) as ControlNotificationSettingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface GovernanceControlsApiCreateGovernanceMitigationRequest {
  /**
   * @type GovernanceMitigationRequest
   */
  body: GovernanceMitigationRequest;
}

export interface GovernanceControlsApiGetGovernanceControlRequest {
  /**
   * The detection type that identifies the control, for example `unused_api_keys`.
   * @type string
   */
  detectionType: string;
}

export interface GovernanceControlsApiGetGovernanceControlDetectionRequest {
  /**
   * The detection type that identifies the control; for example, `unused_api_keys`.
   * @type string
   */
  detectionType: string;
  /**
   * The unique identifier of the detection.
   * @type string
   */
  detectionId: string;
}

export interface GovernanceControlsApiGetGovernanceControlNotificationSettingsRequest {
  /**
   * The detection type that identifies the control; for example, `unused_api_keys`.
   * @type string
   */
  detectionType: string;
}

export interface GovernanceControlsApiListGovernanceControlDetectionsRequest {
  /**
   * The detection type that identifies the control; for example, `unused_api_keys`.
   * @type string
   */
  detectionType: string;
  /**
   * Restrict the results to detections in the given state.
   * @type string
   */
  filterState?: string;
  /**
   * Restrict the results to detections matching the given free-text query.
   * @type string
   */
  filterQuery?: string;
  /**
   * The attribute to sort detections by. Prefix with `-` for descending order.
   * @type string
   */
  sort?: string;
  /**
   * The zero-based index of the page to return; the first page is 0.
   * @type number
   */
  pageNumber?: number;
  /**
   * The number of detections to return per page.
   * @type number
   */
  pageSize?: number;
}

export interface GovernanceControlsApiUpdateGovernanceControlRequest {
  /**
   * The detection type that identifies the control, for example `unused_api_keys`.
   * @type string
   */
  detectionType: string;
  /**
   * @type GovernanceControlUpdateRequest
   */
  body: GovernanceControlUpdateRequest;
}

export interface GovernanceControlsApiUpdateGovernanceControlDetectionRequest {
  /**
   * The detection type that identifies the control; for example, `unused_api_keys`.
   * @type string
   */
  detectionType: string;
  /**
   * The unique identifier of the detection.
   * @type string
   */
  detectionId: string;
  /**
   * @type GovernanceControlDetectionUpdateRequest
   */
  body: GovernanceControlDetectionUpdateRequest;
}

export interface GovernanceControlsApiUpdateGovernanceControlNotificationSettingsRequest {
  /**
   * The detection type that identifies the control; for example, `unused_api_keys`.
   * @type string
   */
  detectionType: string;
  /**
   * @type ControlNotificationSettingsUpdateRequest
   */
  body: ControlNotificationSettingsUpdateRequest;
}

export class GovernanceControlsApi {
  private requestFactory: GovernanceControlsApiRequestFactory;
  private responseProcessor: GovernanceControlsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: GovernanceControlsApiRequestFactory,
    responseProcessor?: GovernanceControlsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new GovernanceControlsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new GovernanceControlsApiResponseProcessor();
  }

  /**
   * Apply a mitigation to a set of governance detections of a given detection type. When the
   * mitigation type is omitted, the control's configured mitigation is used. The request is
   * accepted for asynchronous processing.
   * @param param The request object
   */
  public createGovernanceMitigation(
    param: GovernanceControlsApiCreateGovernanceMitigationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.createGovernanceMitigation(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGovernanceMitigation(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a single governance control by its detection type, including the organization's current
   * detection, notification, and mitigation configuration and detection counts.
   * @param param The request object
   */
  public getGovernanceControl(
    param: GovernanceControlsApiGetGovernanceControlRequest,
    options?: Configuration,
  ): Promise<GovernanceControlResponse> {
    const requestContextPromise = this.requestFactory.getGovernanceControl(
      param.detectionType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceControl(responseContext);
        });
    });
  }

  /**
   * Retrieve a single detection produced by the governance control with the given detection type.
   * @param param The request object
   */
  public getGovernanceControlDetection(
    param: GovernanceControlsApiGetGovernanceControlDetectionRequest,
    options?: Configuration,
  ): Promise<GovernanceControlDetectionResponse> {
    const requestContextPromise =
      this.requestFactory.getGovernanceControlDetection(
        param.detectionType,
        param.detectionId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceControlDetection(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the notification settings for the governance control with the given detection type,
   * including, for each supported event type, whether notifications are enabled and which
   * destinations receive them.
   * @param param The request object
   */
  public getGovernanceControlNotificationSettings(
    param: GovernanceControlsApiGetGovernanceControlNotificationSettingsRequest,
    options?: Configuration,
  ): Promise<ControlNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getGovernanceControlNotificationSettings(
        param.detectionType,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceControlNotificationSettings(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the detections produced by the governance control with the given detection type.
   * Results can be filtered by state and free-text query, sorted, and paginated.
   * @param param The request object
   */
  public listGovernanceControlDetections(
    param: GovernanceControlsApiListGovernanceControlDetectionsRequest,
    options?: Configuration,
  ): Promise<GovernanceControlDetectionsResponse> {
    const requestContextPromise =
      this.requestFactory.listGovernanceControlDetections(
        param.detectionType,
        param.filterState,
        param.filterQuery,
        param.sort,
        param.pageNumber,
        param.pageSize,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceControlDetections(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the list of governance controls configured for the organization. Each control pairs a
   * detection definition with the organization's current detection, notification, and mitigation
   * configuration, along with counts of active and mitigated detections.
   * @param param The request object
   */
  public listGovernanceControls(
    options?: Configuration,
  ): Promise<GovernanceControlsResponse> {
    const requestContextPromise =
      this.requestFactory.listGovernanceControls(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceControls(responseContext);
        });
    });
  }

  /**
   * Update the detection, notification, and mitigation configuration of a governance control. Only
   * the attributes present in the request are modified. Changing the mitigation type or its
   * parameters may require additional permissions.
   * @param param The request object
   */
  public updateGovernanceControl(
    param: GovernanceControlsApiUpdateGovernanceControlRequest,
    options?: Configuration,
  ): Promise<GovernanceControlResponse> {
    const requestContextPromise = this.requestFactory.updateGovernanceControl(
      param.detectionType,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceControl(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a detection produced by the governance control with the given detection type. Only the
   * attributes present in the request are modified, allowing a detection to be acknowledged as an
   * exception, reopened, reassigned, or deferred for mitigation.
   * @param param The request object
   */
  public updateGovernanceControlDetection(
    param: GovernanceControlsApiUpdateGovernanceControlDetectionRequest,
    options?: Configuration,
  ): Promise<GovernanceControlDetectionResponse> {
    const requestContextPromise =
      this.requestFactory.updateGovernanceControlDetection(
        param.detectionType,
        param.detectionId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceControlDetection(
            responseContext,
          );
        });
    });
  }

  /**
   * Replace the notification settings for the governance control with the given detection type,
   * setting, for each supported event type, whether notifications are enabled and which
   * destinations receive them.
   * @param param The request object
   */
  public updateGovernanceControlNotificationSettings(
    param: GovernanceControlsApiUpdateGovernanceControlNotificationSettingsRequest,
    options?: Configuration,
  ): Promise<ControlNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.updateGovernanceControlNotificationSettings(
        param.detectionType,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceControlNotificationSettings(
            responseContext,
          );
        });
    });
  }
}
