import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration, applySecurityAuthentication} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile
  } from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";


import { APIErrorResponse } from "../models/APIErrorResponse";
import { IPAllowlistResponse } from "../models/IPAllowlistResponse";
import { IPAllowlistUpdateRequest } from "../models/IPAllowlistUpdateRequest";

export class IPAllowlistApiRequestFactory extends BaseAPIRequestFactory {

  public async getIPAllowlist(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/ip_allowlist';

    // Make Request Context
    const requestContext = _config.getServer('v2.IPAllowlistApi.getIPAllowlist').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateIPAllowlist(body: IPAllowlistUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateIPAllowlist');
    }

    // Path Params
    const localVarPath = '/api/v2/ip_allowlist';

    // Make Request Context
    const requestContext = _config.getServer('v2.IPAllowlistApi.updateIPAllowlist').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IPAllowlistUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }
}

export class IPAllowlistApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIPAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getIPAllowlist(response: ResponseContext): Promise<IPAllowlistResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IPAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IPAllowlistResponse"
      ) as IPAllowlistResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
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
      const body: IPAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IPAllowlistResponse", ""
      ) as IPAllowlistResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateIPAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateIPAllowlist(response: ResponseContext): Promise<IPAllowlistResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IPAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IPAllowlistResponse"
      ) as IPAllowlistResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
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
      const body: IPAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IPAllowlistResponse", ""
      ) as IPAllowlistResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface IPAllowlistApiUpdateIPAllowlistRequest {
  /**
   * @type IPAllowlistUpdateRequest
   */
  body: IPAllowlistUpdateRequest
}

export class IPAllowlistApi {
  private requestFactory: IPAllowlistApiRequestFactory;
  private responseProcessor: IPAllowlistApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: IPAllowlistApiRequestFactory, responseProcessor?: IPAllowlistApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new IPAllowlistApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new IPAllowlistApiResponseProcessor();
  }

  /**
   * Returns the IP allowlist and its enabled or disabled state.
   * @param param The request object
   */
  public getIPAllowlist( options?: Configuration): Promise<IPAllowlistResponse> {
    const requestContextPromise = this.requestFactory.getIPAllowlist(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getIPAllowlist(responseContext);
        });
    });
  }

  /**
   * Edit the entries in the IP allowlist, and enable or disable it.
   * @param param The request object
   */
  public updateIPAllowlist(param: IPAllowlistApiUpdateIPAllowlistRequest, options?: Configuration): Promise<IPAllowlistResponse> {
    const requestContextPromise = this.requestFactory.updateIPAllowlist(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateIPAllowlist(responseContext);
        });
    });
  }
}