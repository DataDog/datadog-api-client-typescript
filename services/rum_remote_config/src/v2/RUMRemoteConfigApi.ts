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
import { RUMSdkConfigResponse } from "./models/RUMSdkConfigResponse";
import { RUMSdkConfigUpdateRequest } from "./models/RUMSdkConfigUpdateRequest";
import { version } from "../version";

export class RUMRemoteConfigApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-remote-config", version);
    }
  }
  public async getRUMSdkConfig(
    configId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMRemoteConfigApi.v2.getRUMSdkConfig"]) {
      throw new Error(
        "Unstable operation 'getRUMSdkConfig' is disabled. Enable it by setting `configuration.unstableOperations['RUMRemoteConfigApi.v2.getRUMSdkConfig'] = true`",
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "getRUMSdkConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/rum/configs/{config_id}".replace(
        "{config_id}",
        encodeURIComponent(String(configId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRemoteConfigApi.v2.getRUMSdkConfig",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateRUMSdkConfig(
    configId: string,
    body: RUMSdkConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["RUMRemoteConfigApi.v2.updateRUMSdkConfig"]
    ) {
      throw new Error(
        "Unstable operation 'updateRUMSdkConfig' is disabled. Enable it by setting `configuration.unstableOperations['RUMRemoteConfigApi.v2.updateRUMSdkConfig'] = true`",
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "updateRUMSdkConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMSdkConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/rum/configs/{config_id}".replace(
        "{config_id}",
        encodeURIComponent(String(configId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRemoteConfigApi.v2.updateRUMSdkConfig",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMSdkConfigUpdateRequest", ""),
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

export class RUMRemoteConfigApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRUMSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMSdkConfig(
    response: ResponseContext,
  ): Promise<RUMSdkConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMSdkConfigResponse",
      ) as RUMSdkConfigResponse;
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
      const body: RUMSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMSdkConfigResponse",
        "",
      ) as RUMSdkConfigResponse;
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
   * @params response Response returned by the server for a request to updateRUMSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMSdkConfig(
    response: ResponseContext,
  ): Promise<RUMSdkConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMSdkConfigResponse",
      ) as RUMSdkConfigResponse;
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
      const body: RUMSdkConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMSdkConfigResponse",
        "",
      ) as RUMSdkConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMRemoteConfigApiGetRUMSdkConfigRequest {
  /**
   * The ID of the RUM SDK configuration.
   * @type string
   */
  configId: string;
}

export interface RUMRemoteConfigApiUpdateRUMSdkConfigRequest {
  /**
   * The ID of the RUM SDK configuration.
   * @type string
   */
  configId: string;
  /**
   * The RUM SDK configuration update.
   * @type RUMSdkConfigUpdateRequest
   */
  body: RUMSdkConfigUpdateRequest;
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
  public getRUMSdkConfig(
    param: RUMRemoteConfigApiGetRUMSdkConfigRequest,
    options?: Configuration,
  ): Promise<RUMSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.getRUMSdkConfig(
      param.configId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMSdkConfig(responseContext);
        });
    });
  }

  /**
   * Update an existing RUM SDK configuration by its identifier.
   * Returns the updated configuration when successful.
   * @param param The request object
   */
  public updateRUMSdkConfig(
    param: RUMRemoteConfigApiUpdateRUMSdkConfigRequest,
    options?: Configuration,
  ): Promise<RUMSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRUMSdkConfig(
      param.configId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMSdkConfig(responseContext);
        });
    });
  }
}
