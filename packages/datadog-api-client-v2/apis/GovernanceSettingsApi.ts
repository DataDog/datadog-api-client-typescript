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
import { GovernanceConfigResponse } from "../models/GovernanceConfigResponse";
import { GovernanceLimitsResponse } from "../models/GovernanceLimitsResponse";
import { GovernanceNotificationSettingsResponse } from "../models/GovernanceNotificationSettingsResponse";
import { GovernanceNotificationSettingsUpdateRequest } from "../models/GovernanceNotificationSettingsUpdateRequest";
import { GovernanceResourceLimitsResponse } from "../models/GovernanceResourceLimitsResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class GovernanceSettingsApiRequestFactory extends BaseAPIRequestFactory {
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
      .getServer("v2.GovernanceSettingsApi.getGovernanceConfig")
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
      .getServer("v2.GovernanceSettingsApi.getGovernanceNotificationSettings")
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

  public async listGovernanceLimits(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGovernanceLimits'");
    if (!_config.unstableOperations["v2.listGovernanceLimits"]) {
      throw new Error("Unstable operation 'listGovernanceLimits' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/limits";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceSettingsApi.listGovernanceLimits")
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

  public async listGovernanceResourceLimits(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGovernanceResourceLimits'");
    if (!_config.unstableOperations["v2.listGovernanceResourceLimits"]) {
      throw new Error(
        "Unstable operation 'listGovernanceResourceLimits' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/resource-limits";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GovernanceSettingsApi.listGovernanceResourceLimits")
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
      .getServer(
        "v2.GovernanceSettingsApi.updateGovernanceNotificationSettings"
      )
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

export class GovernanceSettingsApiResponseProcessor {
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
   * @params response Response returned by the server for a request to listGovernanceLimits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceLimits(
    response: ResponseContext
  ): Promise<GovernanceLimitsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceLimitsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceLimitsResponse"
      ) as GovernanceLimitsResponse;
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
      const body: GovernanceLimitsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GovernanceLimitsResponse",
        ""
      ) as GovernanceLimitsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceResourceLimits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceResourceLimits(
    response: ResponseContext
  ): Promise<GovernanceResourceLimitsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceResourceLimitsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceResourceLimitsResponse"
        ) as GovernanceResourceLimitsResponse;
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
      const body: GovernanceResourceLimitsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GovernanceResourceLimitsResponse",
          ""
        ) as GovernanceResourceLimitsResponse;
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

export interface GovernanceSettingsApiUpdateGovernanceNotificationSettingsRequest {
  /**
   * @type GovernanceNotificationSettingsUpdateRequest
   */
  body: GovernanceNotificationSettingsUpdateRequest;
}

export class GovernanceSettingsApi {
  private requestFactory: GovernanceSettingsApiRequestFactory;
  private responseProcessor: GovernanceSettingsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: GovernanceSettingsApiRequestFactory,
    responseProcessor?: GovernanceSettingsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new GovernanceSettingsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new GovernanceSettingsApiResponseProcessor();
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
   * Retrieve the list of usage limits tracked for the organization in the Governance Console.
   * Each limit reports the query used to compute current usage, the unit and time range it is
   * measured over, and its current usage status.
   * @param param The request object
   */
  public listGovernanceLimits(
    options?: Configuration
  ): Promise<GovernanceLimitsResponse> {
    const requestContextPromise =
      this.requestFactory.listGovernanceLimits(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceLimits(responseContext);
        });
    });
  }

  /**
   * Retrieve the list of resource limits tracked for the organization in the Governance Console.
   * Each resource limit reports its current value and configured limit, the queries used to
   * compute them, and its current usage status.
   * @param param The request object
   */
  public listGovernanceResourceLimits(
    options?: Configuration
  ): Promise<GovernanceResourceLimitsResponse> {
    const requestContextPromise =
      this.requestFactory.listGovernanceResourceLimits(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceResourceLimits(
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
    param: GovernanceSettingsApiUpdateGovernanceNotificationSettingsRequest,
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
