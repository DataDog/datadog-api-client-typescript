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
import { RumRetentionFilterCreateRequest } from "../models/RumRetentionFilterCreateRequest";
import { RumRetentionFilterResponse } from "../models/RumRetentionFilterResponse";
import { RumRetentionFiltersOrderRequest } from "../models/RumRetentionFiltersOrderRequest";
import { RumRetentionFiltersOrderResponse } from "../models/RumRetentionFiltersOrderResponse";
import { RumRetentionFiltersResponse } from "../models/RumRetentionFiltersResponse";
import { RumRetentionFilterUpdateRequest } from "../models/RumRetentionFilterUpdateRequest";

export class RumRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {

  public async createRetentionFilter(appId: string,body: RumRetentionFilterCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError('appId', 'createRetentionFilter');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createRetentionFilter');
    }

    // Path Params
    const localVarPath = '/api/v2/rum/applications/{app_id}/retention_filters'
      .replace('{app_id}', encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RumRetentionFiltersApi.createRetentionFilter').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumRetentionFilterCreateRequest", ""),
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

  public async deleteRetentionFilter(appId: string,rfId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError('appId', 'deleteRetentionFilter');
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError('rfId', 'deleteRetentionFilter');
    }

    // Path Params
    const localVarPath = '/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}'
      .replace('{app_id}', encodeURIComponent(String(appId)))
      .replace('{rf_id}', encodeURIComponent(String(rfId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RumRetentionFiltersApi.deleteRetentionFilter').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRetentionFilter(appId: string,rfId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError('appId', 'getRetentionFilter');
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError('rfId', 'getRetentionFilter');
    }

    // Path Params
    const localVarPath = '/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}'
      .replace('{app_id}', encodeURIComponent(String(appId)))
      .replace('{rf_id}', encodeURIComponent(String(rfId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RumRetentionFiltersApi.getRetentionFilter').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listRetentionFilters(appId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError('appId', 'listRetentionFilters');
    }

    // Path Params
    const localVarPath = '/api/v2/rum/applications/{app_id}/retention_filters'
      .replace('{app_id}', encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RumRetentionFiltersApi.listRetentionFilters').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async orderRetentionFilters(appId: string,body: RumRetentionFiltersOrderRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError('appId', 'orderRetentionFilters');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'orderRetentionFilters');
    }

    // Path Params
    const localVarPath = '/api/v2/rum/applications/{app_id}/relationships/retention_filters'
      .replace('{app_id}', encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RumRetentionFiltersApi.orderRetentionFilters').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumRetentionFiltersOrderRequest", ""),
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

  public async updateRetentionFilter(appId: string,rfId: string,body: RumRetentionFilterUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError('appId', 'updateRetentionFilter');
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError('rfId', 'updateRetentionFilter');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateRetentionFilter');
    }

    // Path Params
    const localVarPath = '/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}'
      .replace('{app_id}', encodeURIComponent(String(appId)))
      .replace('{rf_id}', encodeURIComponent(String(rfId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.RumRetentionFiltersApi.updateRetentionFilter').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumRetentionFilterUpdateRequest", ""),
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

export class RumRetentionFiltersApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createRetentionFilter(response: ResponseContext): Promise<RumRetentionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumRetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFilterResponse"
      ) as RumRetentionFilterResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 429) {
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
      const body: RumRetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFilterResponse", ""
      ) as RumRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteRetentionFilter(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getRetentionFilter(response: ResponseContext): Promise<RumRetentionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFilterResponse"
      ) as RumRetentionFilterResponse;
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
      const body: RumRetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFilterResponse", ""
      ) as RumRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listRetentionFilters(response: ResponseContext): Promise<RumRetentionFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFiltersResponse"
      ) as RumRetentionFiltersResponse;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRetentionFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFiltersResponse", ""
      ) as RumRetentionFiltersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to orderRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async orderRetentionFilters(response: ResponseContext): Promise<RumRetentionFiltersOrderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFiltersOrderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFiltersOrderResponse"
      ) as RumRetentionFiltersOrderResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 429) {
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
      const body: RumRetentionFiltersOrderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFiltersOrderResponse", ""
      ) as RumRetentionFiltersOrderResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateRetentionFilter(response: ResponseContext): Promise<RumRetentionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFilterResponse"
      ) as RumRetentionFilterResponse;
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
      const body: RumRetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RumRetentionFilterResponse", ""
      ) as RumRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface RumRetentionFiltersApiCreateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string
  /**
   * The definition of the new RUM retention filter.
   * @type RumRetentionFilterCreateRequest
   */
  body: RumRetentionFilterCreateRequest
}

export interface RumRetentionFiltersApiDeleteRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string
}

export interface RumRetentionFiltersApiGetRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string
}

export interface RumRetentionFiltersApiListRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string
}

export interface RumRetentionFiltersApiOrderRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string
  /**
   * New definition of the RUM retention filter.
   * @type RumRetentionFiltersOrderRequest
   */
  body: RumRetentionFiltersOrderRequest
}

export interface RumRetentionFiltersApiUpdateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string
  /**
   * New definition of the RUM retention filter.
   * @type RumRetentionFilterUpdateRequest
   */
  body: RumRetentionFilterUpdateRequest
}

export class RumRetentionFiltersApi {
  private requestFactory: RumRetentionFiltersApiRequestFactory;
  private responseProcessor: RumRetentionFiltersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: RumRetentionFiltersApiRequestFactory, responseProcessor?: RumRetentionFiltersApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RumRetentionFiltersApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RumRetentionFiltersApiResponseProcessor();
  }

  /**
   * Create a RUM retention filter for a RUM application.
   * Returns RUM retention filter objects from the request body when the request is successful.
   * @param param The request object
   */
  public createRetentionFilter(param: RumRetentionFiltersApiCreateRetentionFilterRequest, options?: Configuration): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.createRetentionFilter(param.appId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Delete a RUM retention filter for a RUM application.
   * @param param The request object
   */
  public deleteRetentionFilter(param: RumRetentionFiltersApiDeleteRetentionFilterRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRetentionFilter(param.appId,param.rfId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get a RUM retention filter for a RUM application.
   * @param param The request object
   */
  public getRetentionFilter(param: RumRetentionFiltersApiGetRetentionFilterRequest, options?: Configuration): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.getRetentionFilter(param.appId,param.rfId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get the list of RUM retention filters for a RUM application.
   * @param param The request object
   */
  public listRetentionFilters(param: RumRetentionFiltersApiListRetentionFiltersRequest, options?: Configuration): Promise<RumRetentionFiltersResponse> {
    const requestContextPromise = this.requestFactory.listRetentionFilters(param.appId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listRetentionFilters(responseContext);
        });
    });
  }

  /**
   * Order RUM retention filters for a RUM application.
   * Returns RUM retention filter objects without attributes from the request body when the request is successful.
   * @param param The request object
   */
  public orderRetentionFilters(param: RumRetentionFiltersApiOrderRetentionFiltersRequest, options?: Configuration): Promise<RumRetentionFiltersOrderResponse> {
    const requestContextPromise = this.requestFactory.orderRetentionFilters(param.appId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.orderRetentionFilters(responseContext);
        });
    });
  }

  /**
   * Update a RUM retention filter for a RUM application.
   * Returns RUM retention filter objects from the request body when the request is successful.
   * @param param The request object
   */
  public updateRetentionFilter(param: RumRetentionFiltersApiUpdateRetentionFilterRequest, options?: Configuration): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.updateRetentionFilter(param.appId,param.rfId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateRetentionFilter(responseContext);
        });
    });
  }
}