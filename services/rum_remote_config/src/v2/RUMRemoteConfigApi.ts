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
import { RumSdkConfigResponse } from "./models/RumSdkConfigResponse";
import { RumSdkConfigUpdateRequest } from "./models/RumSdkConfigUpdateRequest";
import { version } from "../version";

export class RUMRemoteConfigApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-remote-config", version);
    }
  }
  public async getRumSdkConfig(
    configId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMRemoteConfigApi.v2.getRumSdkConfig"]) {
      throw new Error(
        "Unstable operation 'getRumSdkConfig' is disabled. Enable it by setting `configuration.unstableOperations['RUMRemoteConfigApi.v2.getRumSdkConfig'] = true`",
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "getRumSdkConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/rum/configs/{config_id}".replace(
        "{config_id}",
        encodeURIComponent(String(configId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRemoteConfigApi.v2.getRumSdkConfig",
      RUMRemoteConfigApi.operationServers,
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

  public async updateRumSdkConfig(
    configId: string,
    body: RumSdkConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["RUMRemoteConfigApi.v2.updateRumSdkConfig"]
    ) {
      throw new Error(
        "Unstable operation 'updateRumSdkConfig' is disabled. Enable it by setting `configuration.unstableOperations['RUMRemoteConfigApi.v2.updateRumSdkConfig'] = true`",
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "updateRumSdkConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRumSdkConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/rum/configs/{config_id}".replace(
        "{config_id}",
        encodeURIComponent(String(configId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRemoteConfigApi.v2.updateRumSdkConfig",
      RUMRemoteConfigApi.operationServers,
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
      serialize(body, TypingInfo, "RumSdkConfigUpdateRequest", ""),
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

export class RUMRemoteConfigApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRumSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumSdkConfig(
    response: ResponseContext,
  ): Promise<RumSdkConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSdkConfigResponse",
      ) as RumSdkConfigResponse;
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
    if (response.httpStatusCode === 404) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSdkConfigResponse",
        "",
      ) as RumSdkConfigResponse;
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
   * @params response Response returned by the server for a request to updateRumSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRumSdkConfig(
    response: ResponseContext,
  ): Promise<RumSdkConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSdkConfigResponse",
      ) as RumSdkConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: RumSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumSdkConfigResponse",
        "",
      ) as RumSdkConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMRemoteConfigApiGetRumSdkConfigRequest {
  /**
   * The ID of the RUM SDK configuration.
   * @type string
   */
  configId: string;
}

export interface RUMRemoteConfigApiUpdateRumSdkConfigRequest {
  /**
   * The ID of the RUM SDK configuration.
   * @type string
   */
  configId: string;
  /**
   * The RUM SDK configuration update.
   * @type RumSdkConfigUpdateRequest
   */
  body: RumSdkConfigUpdateRequest;
}

export class RUMRemoteConfigApi {
  private requestFactory: RUMRemoteConfigApiRequestFactory;
  private responseProcessor: RUMRemoteConfigApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMRemoteConfigApiRequestFactory,
    responseProcessor?: RUMRemoteConfigApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMRemoteConfigApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMRemoteConfigApiResponseProcessor();
  }

  /**
   * Retrieve a RUM SDK configuration by its identifier.
   * @param param The request object
   */
  public getRumSdkConfig(
    param: RUMRemoteConfigApiGetRumSdkConfigRequest,
    options?: Configuration,
  ): Promise<RumSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.getRumSdkConfig(
      param.configId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumSdkConfig(responseContext);
        });
    });
  }

  /**
   * Update an existing RUM SDK configuration by its identifier.
   * Returns the updated configuration when successful.
   * @param param The request object
   */
  public updateRumSdkConfig(
    param: RUMRemoteConfigApiUpdateRumSdkConfigRequest,
    options?: Configuration,
  ): Promise<RumSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRumSdkConfig(
      param.configId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRumSdkConfig(responseContext);
        });
    });
  }
}
