import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration,
  applySecurityAuthentication,} from "../../datadog-api-client-common/configuration";
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
import { RumSdkConfigResponse } from "../models/RumSdkConfigResponse";
import { RumSdkConfigUpdateRequest } from "../models/RumSdkConfigUpdateRequest";

export class RUMRemoteConfigApiRequestFactory extends BaseAPIRequestFactory {


  public async getRumSdkConfig(configId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRumSdkConfig'");
    if (!_config.unstableOperations['v2.getRumSdkConfig']) {
      throw new Error("Unstable operation 'getRumSdkConfig' is disabled");
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError('configId', 'getRumSdkConfig');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/rum/configs/{config_id}'
      .replace('{config_id}', encodeURIComponent(String(configId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RUMRemoteConfigApi.getRumSdkConfig').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }


  public async updateRumSdkConfig(configId: string,body: RumSdkConfigUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateRumSdkConfig'");
    if (!_config.unstableOperations['v2.updateRumSdkConfig']) {
      throw new Error("Unstable operation 'updateRumSdkConfig' is disabled");
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError('configId', 'updateRumSdkConfig');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateRumSdkConfig');
    }

    // Path Params
    const localVarPath = '/api/v2/remote_config/products/rum/configs/{config_id}'
      .replace('{config_id}', encodeURIComponent(String(configId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RUMRemoteConfigApi.updateRumSdkConfig').makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumSdkConfigUpdateRequest", ""),
      contentType
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
   public async getRumSdkConfig(response: ResponseContext): Promise<RumSdkConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumSdkConfigResponse"
      ) as RumSdkConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }

   // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumSdkConfigResponse",
        "",
      ) as RumSdkConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateRumSdkConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateRumSdkConfig(response: ResponseContext): Promise<RumSdkConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumSdkConfigResponse"
      ) as RumSdkConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

   // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumSdkConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumSdkConfigResponse",
        "",
      ) as RumSdkConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface RUMRemoteConfigApiGetRumSdkConfigRequest {
  /**
   * The ID of the RUM SDK configuration.
   * @type string
   */
  configId: string
}

export interface RUMRemoteConfigApiUpdateRumSdkConfigRequest {
  /**
   * The ID of the RUM SDK configuration.
   * @type string
   */
  configId: string
  /**
   * The RUM SDK configuration update.
   * @type RumSdkConfigUpdateRequest
   */
  body: RumSdkConfigUpdateRequest
}

export class RUMRemoteConfigApi {
  private requestFactory: RUMRemoteConfigApiRequestFactory;
  private responseProcessor: RUMRemoteConfigApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: RUMRemoteConfigApiRequestFactory, responseProcessor?: RUMRemoteConfigApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RUMRemoteConfigApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RUMRemoteConfigApiResponseProcessor();
  }

  /**
   * Retrieve a RUM SDK configuration by its identifier.
   * @param param The request object
   */
  public getRumSdkConfig(param: RUMRemoteConfigApiGetRumSdkConfigRequest, options?: Configuration): Promise<RumSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.getRumSdkConfig(param.configId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getRumSdkConfig(responseContext);
        });
    });
  }

  /**
   * Update an existing RUM SDK configuration by its identifier.
   * Returns the updated configuration when successful.
   * @param param The request object
   */
  public updateRumSdkConfig(param: RUMRemoteConfigApiUpdateRumSdkConfigRequest, options?: Configuration): Promise<RumSdkConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRumSdkConfig(param.configId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateRumSdkConfig(responseContext);
        });
    });
  }
}