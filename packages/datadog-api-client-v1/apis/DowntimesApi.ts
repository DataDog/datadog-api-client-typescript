import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CancelDowntimesByScopeRequest } from "../models/CancelDowntimesByScopeRequest";
import { CanceledDowntimesIds } from "../models/CanceledDowntimesIds";
import { Downtime } from "../models/Downtime";

export class DowntimesApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelDowntime(
    downtimeId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError(
        "Required parameter downtimeId was null or undefined when calling cancelDowntime."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/downtime/{downtime_id}".replace(
      "{" + "downtime_id" + "}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.cancelDowntime"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async cancelDowntimesByScope(
    body: CancelDowntimesByScopeRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling cancelDowntimesByScope."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/downtime/cancel/by_scope";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.cancelDowntimesByScope"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CancelDowntimesByScopeRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createDowntime(
    body: Downtime,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createDowntime."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/downtime";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.createDowntime"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Downtime", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getDowntime(
    downtimeId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError(
        "Required parameter downtimeId was null or undefined when calling getDowntime."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/downtime/{downtime_id}".replace(
      "{" + "downtime_id" + "}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.getDowntime"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDowntimes(
    currentOnly?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/downtime";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.listDowntimes"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (currentOnly !== undefined) {
      requestContext.setQueryParam(
        "current_only",
        ObjectSerializer.serialize(currentOnly, "boolean", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listMonitorDowntimes(
    monitorId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError(
        "Required parameter monitorId was null or undefined when calling listMonitorDowntimes."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/{monitor_id}/downtimes".replace(
      "{" + "monitor_id" + "}",
      encodeURIComponent(String(monitorId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.listMonitorDowntimes"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateDowntime(
    downtimeId: number,
    body: Downtime,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError(
        "Required parameter downtimeId was null or undefined when calling updateDowntime."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateDowntime."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/downtime/{downtime_id}".replace(
      "{" + "downtime_id" + "}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DowntimesApi.updateDowntime"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Downtime", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to cancelDowntimesByScope
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelDowntimesByScope(
    response: ResponseContext
  ): Promise<CanceledDowntimesIds> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CanceledDowntimesIds = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CanceledDowntimesIds",
        ""
      ) as CanceledDowntimesIds;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CanceledDowntimesIds = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CanceledDowntimesIds",
        ""
      ) as CanceledDowntimesIds;
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
   * @params response Response returned by the server for a request to createDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDowntime(response: ResponseContext): Promise<Downtime> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Downtime = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Downtime",
        ""
      ) as Downtime;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Downtime = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Downtime",
        ""
      ) as Downtime;
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
   * @params response Response returned by the server for a request to getDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDowntime(response: ResponseContext): Promise<Downtime> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Downtime = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Downtime",
        ""
      ) as Downtime;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Downtime = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Downtime",
        ""
      ) as Downtime;
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
   * @params response Response returned by the server for a request to listDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDowntimes(
    response: ResponseContext
  ): Promise<Array<Downtime>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<Downtime> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Downtime>",
        ""
      ) as Array<Downtime>;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<Downtime> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Downtime>",
        ""
      ) as Array<Downtime>;
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
   * @params response Response returned by the server for a request to listMonitorDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitorDowntimes(
    response: ResponseContext
  ): Promise<Array<Downtime>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<Downtime> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Downtime>",
        ""
      ) as Array<Downtime>;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<Downtime> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Downtime>",
        ""
      ) as Array<Downtime>;
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
   * @params response Response returned by the server for a request to updateDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDowntime(response: ResponseContext): Promise<Downtime> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Downtime = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Downtime",
        ""
      ) as Downtime;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Downtime = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Downtime",
        ""
      ) as Downtime;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DowntimesApiCancelDowntimeRequest {
  /**
   * ID of the downtime to cancel.
   * @type number
   */
  downtimeId: number;
}

export interface DowntimesApiCancelDowntimesByScopeRequest {
  /**
   * Scope to cancel downtimes for.
   * @type CancelDowntimesByScopeRequest
   */
  body: CancelDowntimesByScopeRequest;
}

export interface DowntimesApiCreateDowntimeRequest {
  /**
   * Schedule a downtime request body.
   * @type Downtime
   */
  body: Downtime;
}

export interface DowntimesApiGetDowntimeRequest {
  /**
   * ID of the downtime to fetch.
   * @type number
   */
  downtimeId: number;
}

export interface DowntimesApiListDowntimesRequest {
  /**
   * Only return downtimes that are active when the request is made.
   * @type boolean
   */
  currentOnly?: boolean;
}

export interface DowntimesApiListMonitorDowntimesRequest {
  /**
   * The id of the monitor
   * @type number
   */
  monitorId: number;
}

export interface DowntimesApiUpdateDowntimeRequest {
  /**
   * ID of the downtime to update.
   * @type number
   */
  downtimeId: number;
  /**
   * Update a downtime request body.
   * @type Downtime
   */
  body: Downtime;
}

export class DowntimesApi {
  private requestFactory: DowntimesApiRequestFactory;
  private responseProcessor: DowntimesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DowntimesApiRequestFactory,
    responseProcessor?: DowntimesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DowntimesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DowntimesApiResponseProcessor();
  }

  /**
   * Cancel a downtime.
   * @param param The request object
   */
  public cancelDowntime(
    param: DowntimesApiCancelDowntimeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelDowntime(responseContext);
        });
    });
  }

  /**
   * Delete all downtimes that match the scope of `X`.
   * @param param The request object
   */
  public cancelDowntimesByScope(
    param: DowntimesApiCancelDowntimesByScopeRequest,
    options?: Configuration
  ): Promise<CanceledDowntimesIds> {
    const requestContextPromise = this.requestFactory.cancelDowntimesByScope(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelDowntimesByScope(responseContext);
        });
    });
  }

  /**
   * Schedule a downtime.
   * @param param The request object
   */
  public createDowntime(
    param: DowntimesApiCreateDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    const requestContextPromise = this.requestFactory.createDowntime(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDowntime(responseContext);
        });
    });
  }

  /**
   * Get downtime detail by `downtime_id`.
   * @param param The request object
   */
  public getDowntime(
    param: DowntimesApiGetDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    const requestContextPromise = this.requestFactory.getDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDowntime(responseContext);
        });
    });
  }

  /**
   * Get all scheduled downtimes.
   * @param param The request object
   */
  public listDowntimes(
    param: DowntimesApiListDowntimesRequest = {},
    options?: Configuration
  ): Promise<Array<Downtime>> {
    const requestContextPromise = this.requestFactory.listDowntimes(
      param.currentOnly,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDowntimes(responseContext);
        });
    });
  }

  /**
   * Get all active downtimes for the specified monitor.
   * @param param The request object
   */
  public listMonitorDowntimes(
    param: DowntimesApiListMonitorDowntimesRequest,
    options?: Configuration
  ): Promise<Array<Downtime>> {
    const requestContextPromise = this.requestFactory.listMonitorDowntimes(
      param.monitorId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorDowntimes(responseContext);
        });
    });
  }

  /**
   * Update a single downtime by `downtime_id`.
   * @param param The request object
   */
  public updateDowntime(
    param: DowntimesApiUpdateDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    const requestContextPromise = this.requestFactory.updateDowntime(
      param.downtimeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDowntime(responseContext);
        });
    });
  }
}
