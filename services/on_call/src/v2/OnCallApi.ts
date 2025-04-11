import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { Schedule } from "./models/Schedule";
import { ScheduleCreateRequest } from "./models/ScheduleCreateRequest";
import { ScheduleUpdateRequest } from "./models/ScheduleUpdateRequest";

export class OnCallApiRequestFactory extends BaseAPIRequestFactory {
  public async createOnCallSchedule(
    body: ScheduleCreateRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.createOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "ScheduleCreateRequest", ""),
      contentType,
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

  public async deleteOnCallSchedule(
    scheduleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "deleteOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.deleteOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getOnCallSchedule(
    scheduleId: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "getOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        "",
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

  public async updateOnCallSchedule(
    scheduleId: string,
    body: ScheduleUpdateRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "updateOnCallSchedule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.updateOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "ScheduleUpdateRequest", ""),
      contentType,
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

export class OnCallApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallSchedule(
    response: ResponseContext,
  ): Promise<Schedule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 201) {
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
        "",
      ) as Schedule;
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
   * @params response Response returned by the server for a request to deleteOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallSchedule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      return;
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
   * @params response Response returned by the server for a request to getOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallSchedule(response: ResponseContext): Promise<Schedule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
        "",
      ) as Schedule;
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
   * @params response Response returned by the server for a request to updateOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOnCallSchedule(
    response: ResponseContext,
  ): Promise<Schedule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
        "",
      ) as Schedule;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OnCallApiCreateOnCallScheduleRequest {
  /**
   * @type ScheduleCreateRequest
   */
  body: ScheduleCreateRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiDeleteOnCallScheduleRequest {
  /**
   * The ID of the schedule
   * @type string
   */
  scheduleId: string;
}

export interface OnCallApiGetOnCallScheduleRequest {
  /**
   * The ID of the schedule
   * @type string
   */
  scheduleId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiUpdateOnCallScheduleRequest {
  /**
   * The ID of the schedule
   * @type string
   */
  scheduleId: string;
  /**
   * @type ScheduleUpdateRequest
   */
  body: ScheduleUpdateRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
   * @type string
   */
  include?: string;
}

export class OnCallApi {
  private requestFactory: OnCallApiRequestFactory;
  private responseProcessor: OnCallApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: OnCallApiRequestFactory,
    responseProcessor?: OnCallApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new OnCallApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OnCallApiResponseProcessor();
  }

  /**
   * Create a new on-call schedule
   * @param param The request object
   */
  public createOnCallSchedule(
    param: OnCallApiCreateOnCallScheduleRequest,
    options?: Configuration,
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.createOnCallSchedule(
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Delete an on-call schedule
   * @param param The request object
   */
  public deleteOnCallSchedule(
    param: OnCallApiDeleteOnCallScheduleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOnCallSchedule(
      param.scheduleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Get an on-call schedule
   * @param param The request object
   */
  public getOnCallSchedule(
    param: OnCallApiGetOnCallScheduleRequest,
    options?: Configuration,
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.getOnCallSchedule(
      param.scheduleId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Update a new on-call schedule
   * @param param The request object
   */
  public updateOnCallSchedule(
    param: OnCallApiUpdateOnCallScheduleRequest,
    options?: Configuration,
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.updateOnCallSchedule(
      param.scheduleId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOnCallSchedule(responseContext);
        });
    });
  }
}
