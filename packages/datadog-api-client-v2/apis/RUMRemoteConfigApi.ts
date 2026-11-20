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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { RUMSdkConfigResponse } from "../models/RUMSdkConfigResponse";
import { RUMSdkConfigUpdateRequest } from "../models/RUMSdkConfigUpdateRequest";

export class RUMRemoteConfigApiRequestFactory extends BaseAPIRequestFactory {
  public async getRUMSdkConfig(
    configId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRUMSdkConfig'");
    if (!_config.unstableOperations["v2.getRUMSdkConfig"]) {
      throw new Error("Unstable operation 'getRUMSdkConfig' is disabled");
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "getRUMSdkConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/rum/configs/{config_id}".replace(
        "{config_id}",
        encodeURIComponent(String(configId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRemoteConfigApi.getRUMSdkConfig")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateRUMSdkConfig'");
    if (!_config.unstableOperations["v2.updateRUMSdkConfig"]) {
      throw new Error("Unstable operation 'updateRUMSdkConfig' is disabled");
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
        encodeURIComponent(String(configId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRemoteConfigApi.updateRUMSdkConfig")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RUMSdkConfigUpdateRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRUMSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMSdkConfig(
    response: ResponseContext
  ): Promise<RUMSdkConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RUMSdkConfigResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RUMSdkConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RUMSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RUMSdkConfigResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RUMSdkConfigResponse;
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
   * @params response Response returned by the server for a request to updateRUMSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMSdkConfig(
    response: ResponseContext
  ): Promise<RUMSdkConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RUMSdkConfigResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RUMSdkConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: RUMSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RUMSdkConfigResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RUMSdkConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMRemoteConfigApiRequestFactory,
    responseProcessor?: RUMRemoteConfigApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMRemoteConfigApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new RUMRemoteConfigApiResponseProcessor(configuration);
  }

  /**
   * Retrieve a RUM SDK configuration by its identifier.
   * @param param The request object
   */
  public getRUMSdkConfig(
    param: RUMRemoteConfigApiGetRUMSdkConfigRequest,
    options?: Configuration
  ): Promise<RUMSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.getRUMSdkConfig(
      param.configId,
      options
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
    options?: Configuration
  ): Promise<RUMSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRUMSdkConfig(
      param.configId,
      param.body,
      options
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
