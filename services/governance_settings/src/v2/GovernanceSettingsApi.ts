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
import { GovernanceConfigResponse } from "./models/GovernanceConfigResponse";
import { GovernanceLimitsResponse } from "./models/GovernanceLimitsResponse";
import { GovernanceNotificationSettingsResponse } from "./models/GovernanceNotificationSettingsResponse";
import { GovernanceNotificationSettingsUpdateRequest } from "./models/GovernanceNotificationSettingsUpdateRequest";
import { GovernanceResourceLimitsResponse } from "./models/GovernanceResourceLimitsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class GovernanceSettingsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("governance-settings", version);
    }
  }
  public async getGovernanceConfig(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceSettingsApi.v2.getGovernanceConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getGovernanceConfig' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceSettingsApi.v2.getGovernanceConfig'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceSettingsApi.v2.getGovernanceConfig",
      GovernanceSettingsApi.operationServers,
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

  public async getGovernanceNotificationSettings(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceSettingsApi.v2.getGovernanceNotificationSettings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getGovernanceNotificationSettings' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceSettingsApi.v2.getGovernanceNotificationSettings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/notification_settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceSettingsApi.v2.getGovernanceNotificationSettings",
      GovernanceSettingsApi.operationServers,
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

  public async listGovernanceLimits(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceSettingsApi.v2.listGovernanceLimits"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listGovernanceLimits' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceSettingsApi.v2.listGovernanceLimits'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/limits";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceSettingsApi.v2.listGovernanceLimits",
      GovernanceSettingsApi.operationServers,
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

  public async listGovernanceResourceLimits(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceSettingsApi.v2.listGovernanceResourceLimits"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listGovernanceResourceLimits' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceSettingsApi.v2.listGovernanceResourceLimits'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/resource-limits";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceSettingsApi.v2.listGovernanceResourceLimits",
      GovernanceSettingsApi.operationServers,
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

  public async updateGovernanceNotificationSettings(
    body: GovernanceNotificationSettingsUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceSettingsApi.v2.updateGovernanceNotificationSettings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGovernanceNotificationSettings' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceSettingsApi.v2.updateGovernanceNotificationSettings'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGovernanceNotificationSettings");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/notification_settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceSettingsApi.v2.updateGovernanceNotificationSettings",
      GovernanceSettingsApi.operationServers,
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
        "GovernanceNotificationSettingsUpdateRequest",
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

export class GovernanceSettingsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGovernanceConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceConfig(
    response: ResponseContext,
  ): Promise<GovernanceConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceConfigResponse",
      ) as GovernanceConfigResponse;
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
      const body: GovernanceConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceConfigResponse",
        "",
      ) as GovernanceConfigResponse;
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
   * @params response Response returned by the server for a request to getGovernanceNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceNotificationSettings(
    response: ResponseContext,
  ): Promise<GovernanceNotificationSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceNotificationSettingsResponse",
      ) as GovernanceNotificationSettingsResponse;
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
      const body: GovernanceNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceNotificationSettingsResponse",
        "",
      ) as GovernanceNotificationSettingsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceLimits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceLimits(
    response: ResponseContext,
  ): Promise<GovernanceLimitsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceLimitsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceLimitsResponse",
      ) as GovernanceLimitsResponse;
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
      const body: GovernanceLimitsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceLimitsResponse",
        "",
      ) as GovernanceLimitsResponse;
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
   * @params response Response returned by the server for a request to listGovernanceResourceLimits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceResourceLimits(
    response: ResponseContext,
  ): Promise<GovernanceResourceLimitsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceResourceLimitsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceResourceLimitsResponse",
      ) as GovernanceResourceLimitsResponse;
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
      const body: GovernanceResourceLimitsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceResourceLimitsResponse",
        "",
      ) as GovernanceResourceLimitsResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceNotificationSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceNotificationSettings(
    response: ResponseContext,
  ): Promise<GovernanceNotificationSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceNotificationSettingsResponse",
      ) as GovernanceNotificationSettingsResponse;
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
      const body: GovernanceNotificationSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceNotificationSettingsResponse",
        "",
      ) as GovernanceNotificationSettingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: GovernanceSettingsApiRequestFactory,
    responseProcessor?: GovernanceSettingsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new GovernanceSettingsApiRequestFactory(this.configuration);
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
    options?: Configuration,
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
    options?: Configuration,
  ): Promise<GovernanceNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getGovernanceNotificationSettings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceNotificationSettings(
            responseContext,
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
    options?: Configuration,
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
    options?: Configuration,
  ): Promise<GovernanceResourceLimitsResponse> {
    const requestContextPromise =
      this.requestFactory.listGovernanceResourceLimits(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceResourceLimits(
            responseContext,
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
    options?: Configuration,
  ): Promise<GovernanceNotificationSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.updateGovernanceNotificationSettings(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceNotificationSettings(
            responseContext,
          );
        });
    });
  }
}
