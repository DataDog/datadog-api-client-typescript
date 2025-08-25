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
import { DowntimeCreateRequest } from "../models/DowntimeCreateRequest";
import { DowntimeResponse } from "../models/DowntimeResponse";
import { DowntimeResponseData } from "../models/DowntimeResponseData";
import { DowntimeUpdateRequest } from "../models/DowntimeUpdateRequest";
import { ListDowntimesResponse } from "../models/ListDowntimesResponse";
import { MonitorDowntimeMatchResponse } from "../models/MonitorDowntimeMatchResponse";
import { MonitorDowntimeMatchResponseData } from "../models/MonitorDowntimeMatchResponseData";

export class DowntimesApiRequestFactory extends BaseAPIRequestFactory {

  public async cancelDowntime(downtimeId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError('downtimeId', 'cancelDowntime');
    }

    // Path Params
    const localVarPath = '/api/v2/downtime/{downtime_id}'
      .replace('{downtime_id}', encodeURIComponent(String(downtimeId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.DowntimesApi.cancelDowntime').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createDowntime(body: DowntimeCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createDowntime');
    }

    // Path Params
    const localVarPath = '/api/v2/downtime';

    // Make Request Context
    const requestContext = _config.getServer('v2.DowntimesApi.createDowntime').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DowntimeCreateRequest", ""),
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

  public async getDowntime(downtimeId: string,include?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError('downtimeId', 'getDowntime');
    }

    // Path Params
    const localVarPath = '/api/v2/downtime/{downtime_id}'
      .replace('{downtime_id}', encodeURIComponent(String(downtimeId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.DowntimesApi.getDowntime').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listDowntimes(currentOnly?: boolean,include?: string,pageOffset?: number,pageLimit?: number,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/downtime';

    // Make Request Context
    const requestContext = _config.getServer('v2.DowntimesApi.listDowntimes').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (currentOnly !== undefined) {
      requestContext.setQueryParam("current_only", ObjectSerializer.serialize(currentOnly, "boolean", ""), "");
    }
    if (include !== undefined) {
      requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""), "");
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam("page[offset]", ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam("page[limit]", ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listMonitorDowntimes(monitorId: number,pageOffset?: number,pageLimit?: number,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError('monitorId', 'listMonitorDowntimes');
    }

    // Path Params
    const localVarPath = '/api/v2/monitor/{monitor_id}/downtime_matches'
      .replace('{monitor_id}', encodeURIComponent(String(monitorId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.DowntimesApi.listMonitorDowntimes').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageOffset !== undefined) {
      requestContext.setQueryParam("page[offset]", ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam("page[limit]", ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateDowntime(downtimeId: string,body: DowntimeUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError('downtimeId', 'updateDowntime');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateDowntime');
    }

    // Path Params
    const localVarPath = '/api/v2/downtime/{downtime_id}'
      .replace('{downtime_id}', encodeURIComponent(String(downtimeId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.DowntimesApi.updateDowntime').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DowntimeUpdateRequest", ""),
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

export class DowntimesApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async cancelDowntime(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to createDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createDowntime(response: ResponseContext): Promise<DowntimeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse"
      ) as DowntimeResponse;
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
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse", ""
      ) as DowntimeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getDowntime(response: ResponseContext): Promise<DowntimeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse"
      ) as DowntimeResponse;
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
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse", ""
      ) as DowntimeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listDowntimes(response: ResponseContext): Promise<ListDowntimesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListDowntimesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListDowntimesResponse"
      ) as ListDowntimesResponse;
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
      const body: ListDowntimesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListDowntimesResponse", ""
      ) as ListDowntimesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listMonitorDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listMonitorDowntimes(response: ResponseContext): Promise<MonitorDowntimeMatchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonitorDowntimeMatchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorDowntimeMatchResponse"
      ) as MonitorDowntimeMatchResponse;
      return body;
    }
    if (response.httpStatusCode === 404||response.httpStatusCode === 429) {
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
      const body: MonitorDowntimeMatchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorDowntimeMatchResponse", ""
      ) as MonitorDowntimeMatchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateDowntime(response: ResponseContext): Promise<DowntimeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse"
      ) as DowntimeResponse;
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
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse", ""
      ) as DowntimeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface DowntimesApiCancelDowntimeRequest {
  /**
   * ID of the downtime to cancel.
   * @type string
   */
  downtimeId: string
}

export interface DowntimesApiCreateDowntimeRequest {
  /**
   * Schedule a downtime request body.
   * @type DowntimeCreateRequest
   */
  body: DowntimeCreateRequest
}

export interface DowntimesApiGetDowntimeRequest {
  /**
   * ID of the downtime to fetch.
   * @type string
   */
  downtimeId: string
  /**
   * Comma-separated list of resource paths for related resources to include in the response. Supported resource
   * paths are `created_by` and `monitor`.
   * @type string
   */
  include?: string
}

export interface DowntimesApiListDowntimesRequest {
  /**
   * Only return downtimes that are active when the request is made.
   * @type boolean
   */
  currentOnly?: boolean
  /**
   * Comma-separated list of resource paths for related resources to include in the response. Supported resource
   * paths are `created_by` and `monitor`.
   * @type string
   */
  include?: string
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number
  /**
   * Maximum number of downtimes in the response.
   * @type number
   */
  pageLimit?: number
}

export interface DowntimesApiListMonitorDowntimesRequest {
  /**
   * The id of the monitor.
   * @type number
   */
  monitorId: number
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number
  /**
   * Maximum number of downtimes in the response.
   * @type number
   */
  pageLimit?: number
}

export interface DowntimesApiUpdateDowntimeRequest {
  /**
   * ID of the downtime to update.
   * @type string
   */
  downtimeId: string
  /**
   * Update a downtime request body.
   * @type DowntimeUpdateRequest
   */
  body: DowntimeUpdateRequest
}

export class DowntimesApi {
  private requestFactory: DowntimesApiRequestFactory;
  private responseProcessor: DowntimesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: DowntimesApiRequestFactory, responseProcessor?: DowntimesApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new DowntimesApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new DowntimesApiResponseProcessor();
  }

  /**
   * Cancel a downtime.
   * 
   * **Note**: Downtimes canceled through the API are no longer active, but are retained for approximately two days before being permanently removed. The downtime may still appear in search results until it is permanently removed.
   * @param param The request object
   */
  public cancelDowntime(param: DowntimesApiCancelDowntimeRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelDowntime(param.downtimeId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.cancelDowntime(responseContext);
        });
    });
  }

  /**
   * Schedule a downtime.
   * @param param The request object
   */
  public createDowntime(param: DowntimesApiCreateDowntimeRequest, options?: Configuration): Promise<DowntimeResponse> {
    const requestContextPromise = this.requestFactory.createDowntime(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createDowntime(responseContext);
        });
    });
  }

  /**
   * Get downtime detail by `downtime_id`.
   * @param param The request object
   */
  public getDowntime(param: DowntimesApiGetDowntimeRequest, options?: Configuration): Promise<DowntimeResponse> {
    const requestContextPromise = this.requestFactory.getDowntime(param.downtimeId,param.include,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getDowntime(responseContext);
        });
    });
  }

  /**
   * Get all scheduled downtimes.
   * @param param The request object
   */
  public listDowntimes(param: DowntimesApiListDowntimesRequest = {}, options?: Configuration): Promise<ListDowntimesResponse> {
    const requestContextPromise = this.requestFactory.listDowntimes(param.currentOnly,param.include,param.pageOffset,param.pageLimit,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listDowntimes(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listDowntimes returning a generator with all the items.
   */
  public async *listDowntimesWithPagination(param: DowntimesApiListDowntimesRequest = {}, options?: Configuration): AsyncGenerator<DowntimeResponseData> {

    let pageSize = 30;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listDowntimes(param.currentOnly,param.include,param.pageOffset,param.pageLimit,options);
      const responseContext = await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listDowntimes(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Get all active downtimes for the specified monitor.
   * @param param The request object
   */
  public listMonitorDowntimes(param: DowntimesApiListMonitorDowntimesRequest, options?: Configuration): Promise<MonitorDowntimeMatchResponse> {
    const requestContextPromise = this.requestFactory.listMonitorDowntimes(param.monitorId,param.pageOffset,param.pageLimit,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listMonitorDowntimes(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listMonitorDowntimes returning a generator with all the items.
   */
  public async *listMonitorDowntimesWithPagination(param: DowntimesApiListMonitorDowntimesRequest, options?: Configuration): AsyncGenerator<MonitorDowntimeMatchResponseData> {

    let pageSize = 30;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listMonitorDowntimes(param.monitorId,param.pageOffset,param.pageLimit,options);
      const responseContext = await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listMonitorDowntimes(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Update a downtime by `downtime_id`.
   * @param param The request object
   */
  public updateDowntime(param: DowntimesApiUpdateDowntimeRequest, options?: Configuration): Promise<DowntimeResponse> {
    const requestContextPromise = this.requestFactory.updateDowntime(param.downtimeId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateDowntime(responseContext);
        });
    });
  }
}