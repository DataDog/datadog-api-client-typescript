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
import { ReportScheduleCreateRequest } from "./models/ReportScheduleCreateRequest";
import { ReportSchedulePatchRequest } from "./models/ReportSchedulePatchRequest";
import { ReportScheduleResponse } from "./models/ReportScheduleResponse";
import { version } from "../version";

export class ReportSchedulesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("report-schedules", version);
    }
  }
  public async createReportSchedule(
    body: ReportScheduleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ReportSchedulesApi.v2.createReportSchedule"]
    ) {
      throw new Error(
        "Unstable operation 'createReportSchedule' is disabled. Enable it by setting `configuration.unstableOperations['ReportSchedulesApi.v2.createReportSchedule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createReportSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/reporting/schedule";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ReportSchedulesApi.v2.createReportSchedule",
      ReportSchedulesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "ReportScheduleCreateRequest", ""),
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

  public async patchReportSchedule(
    scheduleUuid: string,
    body: ReportSchedulePatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ReportSchedulesApi.v2.patchReportSchedule"]
    ) {
      throw new Error(
        "Unstable operation 'patchReportSchedule' is disabled. Enable it by setting `configuration.unstableOperations['ReportSchedulesApi.v2.patchReportSchedule'] = true`",
      );
    }

    // verify required parameter 'scheduleUuid' is not null or undefined
    if (scheduleUuid === null || scheduleUuid === undefined) {
      throw new RequiredError("scheduleUuid", "patchReportSchedule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchReportSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/reporting/schedule/{schedule_uuid}".replace(
      "{schedule_uuid}",
      encodeURIComponent(String(scheduleUuid)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ReportSchedulesApi.v2.patchReportSchedule",
      ReportSchedulesApi.operationServers,
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
      serialize(body, TypingInfo, "ReportSchedulePatchRequest", ""),
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

export class ReportSchedulesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createReportSchedule(
    response: ResponseContext,
  ): Promise<ReportScheduleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ReportScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ReportScheduleResponse",
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: ReportScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ReportScheduleResponse",
        "",
      ) as ReportScheduleResponse;
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
   * @params response Response returned by the server for a request to patchReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchReportSchedule(
    response: ResponseContext,
  ): Promise<ReportScheduleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ReportScheduleResponse",
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: ReportScheduleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ReportScheduleResponse",
        "",
      ) as ReportScheduleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ReportSchedulesApiCreateReportScheduleRequest {
  /**
   * @type ReportScheduleCreateRequest
   */
  body: ReportScheduleCreateRequest;
}

export interface ReportSchedulesApiPatchReportScheduleRequest {
  /**
   * The unique identifier of the report schedule to update.
   * @type string
   */
  scheduleUuid: string;
  /**
   * @type ReportSchedulePatchRequest
   */
  body: ReportSchedulePatchRequest;
}

export class ReportSchedulesApi {
  private requestFactory: ReportSchedulesApiRequestFactory;
  private responseProcessor: ReportSchedulesApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ReportSchedulesApiRequestFactory,
    responseProcessor?: ReportSchedulesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ReportSchedulesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ReportSchedulesApiResponseProcessor();
  }

  /**
   * Create a new scheduled report. A schedule renders a dashboard or integration dashboard
   * on a recurring cadence and delivers it to the configured recipients over email, Slack,
   * or Microsoft Teams.
   * Requires the `generate_dashboard_reports` permission.
   * @param param The request object
   */
  public createReportSchedule(
    param: ReportSchedulesApiCreateReportScheduleRequest,
    options?: Configuration,
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.createReportSchedule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createReportSchedule(responseContext);
        });
    });
  }

  /**
   * Update an existing scheduled report by its identifier. The editable attributes
   * are replaced with the supplied values; the targeted resource (`resource_id` and
   * `resource_type`) cannot be changed after creation.
   * Requires the `generate_dashboard_reports` permission and schedule ownership.
   * @param param The request object
   */
  public patchReportSchedule(
    param: ReportSchedulesApiPatchReportScheduleRequest,
    options?: Configuration,
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.patchReportSchedule(
      param.scheduleUuid,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchReportSchedule(responseContext);
        });
    });
  }
}
