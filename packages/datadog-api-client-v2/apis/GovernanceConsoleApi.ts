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
import { ControlNotificationSettingsResponse } from "../models/ControlNotificationSettingsResponse";
import { ControlNotificationSettingsUpdateRequest } from "../models/ControlNotificationSettingsUpdateRequest";
import { GovernanceConfigResponse } from "../models/GovernanceConfigResponse";
import { GovernanceControlDetectionResponse } from "../models/GovernanceControlDetectionResponse";
import { GovernanceControlDetectionsResponse } from "../models/GovernanceControlDetectionsResponse";
import { GovernanceControlDetectionUpdateRequest } from "../models/GovernanceControlDetectionUpdateRequest";
import { GovernanceControlResponse } from "../models/GovernanceControlResponse";
import { GovernanceControlsResponse } from "../models/GovernanceControlsResponse";
import { GovernanceControlUpdateRequest } from "../models/GovernanceControlUpdateRequest";
import { GovernanceInsightsResponse } from "../models/GovernanceInsightsResponse";
import { GovernanceMitigationRequest } from "../models/GovernanceMitigationRequest";
import { GovernanceNotificationSettingsResponse } from "../models/GovernanceNotificationSettingsResponse";
import { GovernanceNotificationSettingsUpdateRequest } from "../models/GovernanceNotificationSettingsUpdateRequest";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class GovernanceConsoleApiRequestFactory extends BaseAPIRequestFactory {
  public async getGovernanceConfig(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGovernanceConfig'");
    if (!_config.unstableOperations["v2.getGovernanceConfig"]) {
      throw new Error("Unstable operation 'getGovernanceConfig' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.getGovernanceConfig")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGovernanceControl'");
    if (!_config.unstableOperations["v2.getGovernanceControl"]) {
      throw new Error("Unstable operation 'getGovernanceControl' is disabled");
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError("detectionType", "getGovernanceControl");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control/{detection_type}".replace(
      "{detection_type}",
      encodeURIComponent(String(detectionType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.getGovernanceControl")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getGovernanceControlNotificationSettings'"
    );
    if (
      !_config.unstableOperations["v2.getGovernanceControlNotificationSettings"]
    ) {
      throw new Error(
        "Unstable operation 'getGovernanceControlNotificationSettings' is disabled"
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "getGovernanceControlNotificationSettings"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/notification_settings".replace(
        "{detection_type}",
        encodeURIComponent(String(detectionType))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GovernanceConsoleApi.getGovernanceControlNotificationSettings"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGovernanceDetection(
    detectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGovernanceDetection'");
    if (!_config.unstableOperations["v2.getGovernanceDetection"]) {
      throw new Error(
        "Unstable operation 'getGovernanceDetection' is disabled"
      );
    }

    // verify required parameter 'detectionId' is not null or undefined
    if (detectionId === null || detectionId === undefined) {
      throw new RequiredError("detectionId", "getGovernanceDetection");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/detections/{detection_id}".replace(
      "{detection_id}",
      encodeURIComponent(String(detectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.getGovernanceDetection")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGovernanceNotificationSettings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGovernanceNotificationSettings'");
    if (!_config.unstableOperations["v2.getGovernanceNotificationSettings"]) {
      throw new Error(
        "Unstable operation 'getGovernanceNotificationSettings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/notification_settings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.getGovernanceNotificationSettings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGovernanceControlDetections'");
    if (!_config.unstableOperations["v2.listGovernanceControlDetections"]) {
      throw new Error(
        "Unstable operation 'listGovernanceControlDetections' is disabled"
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "listGovernanceControlDetections"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/detections".replace(
        "{detection_type}",
        encodeURIComponent(String(detectionType))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.listGovernanceControlDetections")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterState !== undefined) {
      requestContext.setQueryParam(
        "filter[state]",
        ObjectSerializer.serialize(filterState, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGovernanceControls'");
    if (!_config.unstableOperations["v2.listGovernanceControls"]) {
      throw new Error(
        "Unstable operation 'listGovernanceControls' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.listGovernanceControls")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGovernanceInsights(
    filterProduct?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGovernanceInsights'");
    if (!_config.unstableOperations["v2.listGovernanceInsights"]) {
      throw new Error(
        "Unstable operation 'listGovernanceInsights' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/insights";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.listGovernanceInsights")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterProduct !== undefined) {
      requestContext.setQueryParam(
        "filter[product]",
        ObjectSerializer.serialize(filterProduct, "Array<string>", ""),
        "multi"
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

  public async mitigateGovernanceDetections(
    body: GovernanceMitigationRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'mitigateGovernanceDetections'");
    if (!_config.unstableOperations["v2.mitigateGovernanceDetections"]) {
      throw new Error(
        "Unstable operation 'mitigateGovernanceDetections' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "mitigateGovernanceDetections");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/detections/mitigate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.mitigateGovernanceDetections")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GovernanceMitigationRequest", ""),
      contentType
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

  public async updateGovernanceControl(
    detectionType: string,
    body: GovernanceControlUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateGovernanceControl'");
    if (!_config.unstableOperations["v2.updateGovernanceControl"]) {
      throw new Error(
        "Unstable operation 'updateGovernanceControl' is disabled"
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
      encodeURIComponent(String(detectionType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.updateGovernanceControl")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GovernanceControlUpdateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateGovernanceControlNotificationSettings'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateGovernanceControlNotificationSettings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGovernanceControlNotificationSettings' is disabled"
      );
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError(
        "detectionType",
        "updateGovernanceControlNotificationSettings"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateGovernanceControlNotificationSettings"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/governance/control/{detection_type}/notification_settings".replace(
        "{detection_type}",
        encodeURIComponent(String(detectionType))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.GovernanceConsoleApi.updateGovernanceControlNotificationSettings"
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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
        "ControlNotificationSettingsUpdateRequest",
        ""
      ),
      contentType
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

  public async updateGovernanceDetection(
    detectionId: string,
    body: GovernanceControlDetectionUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateGovernanceDetection'");
    if (!_config.unstableOperations["v2.updateGovernanceDetection"]) {
      throw new Error(
        "Unstable operation 'updateGovernanceDetection' is disabled"
      );
    }

    // verify required parameter 'detectionId' is not null or undefined
    if (detectionId === null || detectionId === undefined) {
      throw new RequiredError("detectionId", "updateGovernanceDetection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGovernanceDetection");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/detections/{detection_id}".replace(
      "{detection_id}",
      encodeURIComponent(String(detectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.updateGovernanceDetection")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "GovernanceControlDetectionUpdateRequest",
        ""
      ),
      contentType
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

  public async updateGovernanceNotificationSettings(
    body: GovernanceNotificationSettingsUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateGovernanceNotificationSettings'"
    );
    if (
      !_config.unstableOperations["v2.updateGovernanceNotificationSettings"]
    ) {
      throw new Error(
        "Unstable operation 'updateGovernanceNotificationSettings' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGovernanceNotificationSettings");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/notification_settings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceConsoleApi.updateGovernanceNotificationSettings")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "GovernanceNotificationSettingsUpdateRequest",
        ""
      ),
      contentType
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

export class GovernanceConsoleApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGovernanceConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceConfig(
    response: ResponseContext
  ): Promise<GovernanceConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceConfigResponse"
      ) as GovernanceConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceConfigResponse",
        ""
      ) as GovernanceConfigResponse;
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
   * @params response Response returned by the server for a request to getGovernanceControl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceControl(
    response: ResponseContext
  ): Promise<GovernanceControlResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceControlResponse"
      ) as GovernanceControlResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceControlResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceControlResponse",
        ""
      ) as GovernanceControlResponse;
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
   * @params response Response returned by the server for a request to getGovernanceControlNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceControlNotificationSettings(
    response: ResponseContext
  ): Promise<ControlNotificationSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ControlNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ControlNotificationSettingsResponse"
        ) as ControlNotificationSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ControlNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ControlNotificationSettingsResponse",
          ""
        ) as ControlNotificationSettingsResponse;
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
   * @params response Response returned by the server for a request to getGovernanceDetection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceDetection(
    response: ResponseContext
  ): Promise<GovernanceControlDetectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlDetectionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceControlDetectionResponse"
        ) as GovernanceControlDetectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceControlDetectionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceControlDetectionResponse",
          ""
        ) as GovernanceControlDetectionResponse;
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
   * @params response Response returned by the server for a request to getGovernanceNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceNotificationSettings(
    response: ResponseContext
  ): Promise<GovernanceNotificationSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceNotificationSettingsResponse"
        ) as GovernanceNotificationSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceNotificationSettingsResponse",
          ""
        ) as GovernanceNotificationSettingsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceControlDetections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceControlDetections(
    response: ResponseContext
  ): Promise<GovernanceControlDetectionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlDetectionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceControlDetectionsResponse"
        ) as GovernanceControlDetectionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceControlDetectionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceControlDetectionsResponse",
          ""
        ) as GovernanceControlDetectionsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceControls
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceControls(
    response: ResponseContext
  ): Promise<GovernanceControlsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceControlsResponse"
      ) as GovernanceControlsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceControlsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceControlsResponse",
        ""
      ) as GovernanceControlsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceInsights
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceInsights(
    response: ResponseContext
  ): Promise<GovernanceInsightsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceInsightsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceInsightsResponse"
      ) as GovernanceInsightsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceInsightsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceInsightsResponse",
        ""
      ) as GovernanceInsightsResponse;
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
   * @params response Response returned by the server for a request to mitigateGovernanceDetections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async mitigateGovernanceDetections(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to updateGovernanceControl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceControl(
    response: ResponseContext
  ): Promise<GovernanceControlResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceControlResponse"
      ) as GovernanceControlResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceControlResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceControlResponse",
        ""
      ) as GovernanceControlResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceControlNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceControlNotificationSettings(
    response: ResponseContext
  ): Promise<ControlNotificationSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ControlNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ControlNotificationSettingsResponse"
        ) as ControlNotificationSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ControlNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ControlNotificationSettingsResponse",
          ""
        ) as ControlNotificationSettingsResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceDetection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceDetection(
    response: ResponseContext
  ): Promise<GovernanceControlDetectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlDetectionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceControlDetectionResponse"
        ) as GovernanceControlDetectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceControlDetectionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceControlDetectionResponse",
          ""
        ) as GovernanceControlDetectionResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceNotificationSettings(
    response: ResponseContext
  ): Promise<GovernanceNotificationSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceNotificationSettingsResponse"
        ) as GovernanceNotificationSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: GovernanceNotificationSettingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceNotificationSettingsResponse",
          ""
        ) as GovernanceNotificationSettingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface GovernanceConsoleApiGetGovernanceControlRequest {
  /**
   * The detection type that identifies the control, for example `unused_api_keys`.
   * @type string
   */
  detectionType: string;
}

export interface GovernanceConsoleApiGetGovernanceControlNotificationSettingsRequest {
  /**
   * The detection type that identifies the control; for example, `unused_api_keys`.
   * @type string
   */
  detectionType: string;
}

export interface GovernanceConsoleApiGetGovernanceDetectionRequest {
  /**
   * The unique identifier of the detection.
   * @type string
   */
  detectionId: string;
}

export interface GovernanceConsoleApiListGovernanceControlDetectionsRequest {
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
   * A comma-separated list of attributes to sort detections by. Prefix an attribute with
   * `-` for descending order.
   *
   * The attributes available for sorting are `id`, `created_at`, `assigned_to`,
   * `detection_type`, `display_name`, `exception_at`, `mitigate_after`, `mitigated_at`,
   * `priority`, `resource_id`, and `state`. Defaults to `created_at,-id`.
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

export interface GovernanceConsoleApiListGovernanceInsightsRequest {
  /**
   * Restrict the results to insights belonging to the given products. May be repeated to
   * filter by multiple products. Matching is case-insensitive.
   * @type Array<string>
   */
  filterProduct?: Array<string>;
}

export interface GovernanceConsoleApiMitigateGovernanceDetectionsRequest {
  /**
   * @type GovernanceMitigationRequest
   */
  body: GovernanceMitigationRequest;
}

export interface GovernanceConsoleApiUpdateGovernanceControlRequest {
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

export interface GovernanceConsoleApiUpdateGovernanceControlNotificationSettingsRequest {
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

export interface GovernanceConsoleApiUpdateGovernanceDetectionRequest {
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

export interface GovernanceConsoleApiUpdateGovernanceNotificationSettingsRequest {
  /**
   * @type GovernanceNotificationSettingsUpdateRequest
   */
  body: GovernanceNotificationSettingsUpdateRequest;
}

export class GovernanceConsoleApi {
  private requestFactory: GovernanceConsoleApiRequestFactory;
  private responseProcessor: GovernanceConsoleApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: GovernanceConsoleApiRequestFactory,
    responseProcessor?: GovernanceConsoleApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new GovernanceConsoleApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new GovernanceConsoleApiResponseProcessor();
  }

  /**
   * Retrieve the Governance Console configuration for the organization, including whether the
   * Console is enabled, whether assignment notifications are enabled, and whether usage
   * attribution is configured.
   * @param param The request object
   */
  public getGovernanceConfig(
    options?: Configuration
  ): Promise<GovernanceConfigResponse> {
    const requestContextPromise =
      this.requestFactory.getGovernanceConfig(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceConfig(responseContext);
        });
    });
  }

  /**
   * Retrieve a single governance control by its detection type, including the organization's current
   * detection, notification, and mitigation configuration and detection counts.
   * @param param The request object
   */
  public getGovernanceControl(
    param: GovernanceConsoleApiGetGovernanceControlRequest,
    options?: Configuration
  ): Promise<GovernanceControlResponse> {
    const requestContextPromise = this.requestFactory.getGovernanceControl(
      param.detectionType,
      options
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
   * Retrieve the notification settings for the governance control with the given detection type,
   * including, for each supported event type, whether notifications are enabled and which
   * destinations receive them.
   * @param param The request object
   */
  public getGovernanceControlNotificationSettings(
    param: GovernanceConsoleApiGetGovernanceControlNotificationSettingsRequest,
    options?: Configuration
  ): Promise<ControlNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getGovernanceControlNotificationSettings(
        param.detectionType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceControlNotificationSettings(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a single governance detection by its unique identifier.
   * @param param The request object
   */
  public getGovernanceDetection(
    param: GovernanceConsoleApiGetGovernanceDetectionRequest,
    options?: Configuration
  ): Promise<GovernanceControlDetectionResponse> {
    const requestContextPromise = this.requestFactory.getGovernanceDetection(
      param.detectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceDetection(responseContext);
        });
    });
  }

  /**
   * Retrieve the organization-wide governance notification settings, including whether users are
   * notified when detections are assigned to them.
   * @param param The request object
   */
  public getGovernanceNotificationSettings(
    options?: Configuration
  ): Promise<GovernanceNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getGovernanceNotificationSettings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceNotificationSettings(
            responseContext
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
    param: GovernanceConsoleApiListGovernanceControlDetectionsRequest,
    options?: Configuration
  ): Promise<GovernanceControlDetectionsResponse> {
    const requestContextPromise =
      this.requestFactory.listGovernanceControlDetections(
        param.detectionType,
        param.filterState,
        param.filterQuery,
        param.sort,
        param.pageNumber,
        param.pageSize,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceControlDetections(
            responseContext
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
    options?: Configuration
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
   * Retrieve the list of governance insights available to the organization. Each insight
   * reports the query used to compute it, so that the value can be computed client-side.
   * Insights can be filtered by product.
   * @param param The request object
   */
  public listGovernanceInsights(
    param: GovernanceConsoleApiListGovernanceInsightsRequest = {},
    options?: Configuration
  ): Promise<GovernanceInsightsResponse> {
    const requestContextPromise = this.requestFactory.listGovernanceInsights(
      param.filterProduct,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceInsights(responseContext);
        });
    });
  }

  /**
   * Apply a mitigation to a set of governance detections of a given detection type. When the
   * mitigation type is omitted, the control's configured mitigation is used. The request is
   * accepted for asynchronous processing.
   * @param param The request object
   */
  public mitigateGovernanceDetections(
    param: GovernanceConsoleApiMitigateGovernanceDetectionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.mitigateGovernanceDetections(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.mitigateGovernanceDetections(
            responseContext
          );
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
    param: GovernanceConsoleApiUpdateGovernanceControlRequest,
    options?: Configuration
  ): Promise<GovernanceControlResponse> {
    const requestContextPromise = this.requestFactory.updateGovernanceControl(
      param.detectionType,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceControl(
            responseContext
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
    param: GovernanceConsoleApiUpdateGovernanceControlNotificationSettingsRequest,
    options?: Configuration
  ): Promise<ControlNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.updateGovernanceControlNotificationSettings(
        param.detectionType,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceControlNotificationSettings(
            responseContext
          );
        });
    });
  }

  /**
   * Update a governance detection by its unique identifier. Only the attributes present in the
   * request are modified, allowing a detection to be acknowledged as an exception, reopened,
   * reassigned, or deferred for mitigation.
   * @param param The request object
   */
  public updateGovernanceDetection(
    param: GovernanceConsoleApiUpdateGovernanceDetectionRequest,
    options?: Configuration
  ): Promise<GovernanceControlDetectionResponse> {
    const requestContextPromise = this.requestFactory.updateGovernanceDetection(
      param.detectionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceDetection(
            responseContext
          );
        });
    });
  }

  /**
   * Update the organization-wide governance notification settings. Only the attributes present in
   * the request are modified.
   * @param param The request object
   */
  public updateGovernanceNotificationSettings(
    param: GovernanceConsoleApiUpdateGovernanceNotificationSettingsRequest,
    options?: Configuration
  ): Promise<GovernanceNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.updateGovernanceNotificationSettings(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceNotificationSettings(
            responseContext
          );
        });
    });
  }
}
