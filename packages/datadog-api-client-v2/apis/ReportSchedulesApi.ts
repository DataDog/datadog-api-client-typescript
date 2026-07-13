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
import { DatasetReportScheduleListResponse } from "../models/DatasetReportScheduleListResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { PrintReportRequest } from "../models/PrintReportRequest";
import { PrintReportResponse } from "../models/PrintReportResponse";
import { ReportScheduleCreateRequest } from "../models/ReportScheduleCreateRequest";
import { ReportScheduleListResponse } from "../models/ReportScheduleListResponse";
import { ReportSchedulePatchRequest } from "../models/ReportSchedulePatchRequest";
import { ReportScheduleResourceType } from "../models/ReportScheduleResourceType";
import { ReportScheduleResponse } from "../models/ReportScheduleResponse";
import { ReportScheduleToggleRequest } from "../models/ReportScheduleToggleRequest";

export class ReportSchedulesApiRequestFactory extends BaseAPIRequestFactory {
  public async createReportSchedule(
    body: ReportScheduleCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createReportSchedule'");
    if (!_config.unstableOperations["v2.createReportSchedule"]) {
      throw new Error("Unstable operation 'createReportSchedule' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createReportSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/reporting/schedule";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.createReportSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReportScheduleCreateRequest", ""),
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

  public async deleteReportSchedule(
    scheduleUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleUuid' is not null or undefined
    if (scheduleUuid === null || scheduleUuid === undefined) {
      throw new RequiredError("scheduleUuid", "deleteReportSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/reporting/schedule/{schedule_uuid}".replace(
      "{schedule_uuid}",
      encodeURIComponent(String(scheduleUuid))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.deleteReportSchedule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getReportSchedule(
    scheduleUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleUuid' is not null or undefined
    if (scheduleUuid === null || scheduleUuid === undefined) {
      throw new RequiredError("scheduleUuid", "getReportSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/reporting/schedule/{schedule_uuid}".replace(
      "{schedule_uuid}",
      encodeURIComponent(String(scheduleUuid))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.getReportSchedule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getReportSchedulesForResource(
    resourceType: ReportScheduleResourceType,
    resourceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError("resourceType", "getReportSchedulesForResource");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "getReportSchedulesForResource");
    }

    // Path Params
    const localVarPath =
      "/api/v2/reporting/schedule/{resource_type}/{resource_id}"
        .replace("{resource_type}", encodeURIComponent(String(resourceType)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.getReportSchedulesForResource")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDatasetReportSchedules(
    datasetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "listDatasetReportSchedules");
    }

    // Path Params
    const localVarPath =
      "/api/v2/reporting/dataset/{dataset_id}/schedules".replace(
        "{dataset_id}",
        encodeURIComponent(String(datasetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.listDatasetReportSchedules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listReportSchedules(
    pageLimit?: number,
    pageOffset?: number,
    filterTitle?: string,
    filterAuthorUuid?: string,
    filterRecipients?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/reporting/schedule/list";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.listReportSchedules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }
    if (filterTitle !== undefined) {
      requestContext.setQueryParam(
        "filter[title]",
        ObjectSerializer.serialize(filterTitle, "string", ""),
        ""
      );
    }
    if (filterAuthorUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[author_uuid]",
        ObjectSerializer.serialize(filterAuthorUuid, "string", "uuid"),
        ""
      );
    }
    if (filterRecipients !== undefined) {
      requestContext.setQueryParam(
        "filter[recipients]",
        ObjectSerializer.serialize(filterRecipients, "string", ""),
        ""
      );
    }

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'patchReportSchedule'");
    if (!_config.unstableOperations["v2.patchReportSchedule"]) {
      throw new Error("Unstable operation 'patchReportSchedule' is disabled");
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
      encodeURIComponent(String(scheduleUuid))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.patchReportSchedule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReportSchedulePatchRequest", ""),
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

  public async printReport(
    body: PrintReportRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "printReport");
    }

    // Path Params
    const localVarPath = "/api/v2/reporting/print";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.printReport")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PrintReportRequest", ""),
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

  public async toggleReportSchedule(
    scheduleUuid: string,
    body: ReportScheduleToggleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleUuid' is not null or undefined
    if (scheduleUuid === null || scheduleUuid === undefined) {
      throw new RequiredError("scheduleUuid", "toggleReportSchedule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "toggleReportSchedule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/reporting/schedule/{schedule_uuid}/toggle".replace(
        "{schedule_uuid}",
        encodeURIComponent(String(scheduleUuid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportSchedulesApi.toggleReportSchedule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReportScheduleToggleRequest", ""),
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

export class ReportSchedulesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createReportSchedule(
    response: ResponseContext
  ): Promise<ReportScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse"
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse",
        ""
      ) as ReportScheduleResponse;
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
   * @params response Response returned by the server for a request to deleteReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteReportSchedule(
    response: ResponseContext
  ): Promise<ReportScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse"
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse",
        ""
      ) as ReportScheduleResponse;
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
   * @params response Response returned by the server for a request to getReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getReportSchedule(
    response: ResponseContext
  ): Promise<ReportScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse"
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse",
        ""
      ) as ReportScheduleResponse;
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
   * @params response Response returned by the server for a request to getReportSchedulesForResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getReportSchedulesForResource(
    response: ResponseContext
  ): Promise<ReportScheduleListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleListResponse"
      ) as ReportScheduleListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleListResponse",
        ""
      ) as ReportScheduleListResponse;
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
   * @params response Response returned by the server for a request to listDatasetReportSchedules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatasetReportSchedules(
    response: ResponseContext
  ): Promise<DatasetReportScheduleListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatasetReportScheduleListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatasetReportScheduleListResponse"
        ) as DatasetReportScheduleListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: DatasetReportScheduleListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DatasetReportScheduleListResponse",
          ""
        ) as DatasetReportScheduleListResponse;
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
   * @params response Response returned by the server for a request to listReportSchedules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listReportSchedules(
    response: ResponseContext
  ): Promise<ReportScheduleListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleListResponse"
      ) as ReportScheduleListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleListResponse",
        ""
      ) as ReportScheduleListResponse;
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
   * @params response Response returned by the server for a request to patchReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchReportSchedule(
    response: ResponseContext
  ): Promise<ReportScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse"
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse",
        ""
      ) as ReportScheduleResponse;
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
   * @params response Response returned by the server for a request to printReport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async printReport(
    response: ResponseContext
  ): Promise<PrintReportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PrintReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PrintReportResponse"
      ) as PrintReportResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: PrintReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PrintReportResponse",
        ""
      ) as PrintReportResponse;
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
   * @params response Response returned by the server for a request to toggleReportSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async toggleReportSchedule(
    response: ResponseContext
  ): Promise<ReportScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse"
      ) as ReportScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: ReportScheduleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReportScheduleResponse",
        ""
      ) as ReportScheduleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ReportSchedulesApiCreateReportScheduleRequest {
  /**
   * @type ReportScheduleCreateRequest
   */
  body: ReportScheduleCreateRequest;
}

export interface ReportSchedulesApiDeleteReportScheduleRequest {
  /**
   * The unique identifier of the report schedule to delete.
   * @type string
   */
  scheduleUuid: string;
}

export interface ReportSchedulesApiGetReportScheduleRequest {
  /**
   * The unique identifier of the report schedule to fetch.
   * @type string
   */
  scheduleUuid: string;
}

export interface ReportSchedulesApiGetReportSchedulesForResourceRequest {
  /**
   * The type of resource to fetch report schedules for.
   * @type ReportScheduleResourceType
   */
  resourceType: ReportScheduleResourceType;
  /**
   * The identifier of the resource to fetch report schedules for.
   * @type string
   */
  resourceId: string;
}

export interface ReportSchedulesApiListDatasetReportSchedulesRequest {
  /**
   * The identifier of the published dataset to retrieve report schedules for.
   * @type string
   */
  datasetId: string;
}

export interface ReportSchedulesApiListReportSchedulesRequest {
  /**
   * The maximum number of schedules to return. The maximum value is 50.
   * @type number
   */
  pageLimit?: number;
  /**
   * The offset from which to start returning schedules.
   * @type number
   */
  pageOffset?: number;
  /**
   * Filter schedules by report title.
   * @type string
   */
  filterTitle?: string;
  /**
   * Filter schedules by author UUID.
   * @type string
   */
  filterAuthorUuid?: string;
  /**
   * Filter schedules by a comma-separated list of recipients.
   * @type string
   */
  filterRecipients?: string;
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

export interface ReportSchedulesApiPrintReportRequest {
  /**
   * @type PrintReportRequest
   */
  body: PrintReportRequest;
}

export interface ReportSchedulesApiToggleReportScheduleRequest {
  /**
   * The unique identifier of the report schedule to toggle.
   * @type string
   */
  scheduleUuid: string;
  /**
   * @type ReportScheduleToggleRequest
   */
  body: ReportScheduleToggleRequest;
}

export class ReportSchedulesApi {
  private requestFactory: ReportSchedulesApiRequestFactory;
  private responseProcessor: ReportSchedulesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ReportSchedulesApiRequestFactory,
    responseProcessor?: ReportSchedulesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ReportSchedulesApiRequestFactory(configuration);
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
    options?: Configuration
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.createReportSchedule(
      param.body,
      options
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
   * Delete a report schedule by its unique identifier. The response returns the deleted schedule.
   * Requires a reporting write permission appropriate to the targeted resource type and schedule ownership.
   * @param param The request object
   */
  public deleteReportSchedule(
    param: ReportSchedulesApiDeleteReportScheduleRequest,
    options?: Configuration
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.deleteReportSchedule(
      param.scheduleUuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteReportSchedule(responseContext);
        });
    });
  }

  /**
   * Get a report schedule by its unique identifier.
   * Requires a reporting read permission appropriate to the targeted resource type.
   * @param param The request object
   */
  public getReportSchedule(
    param: ReportSchedulesApiGetReportScheduleRequest,
    options?: Configuration
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.getReportSchedule(
      param.scheduleUuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getReportSchedule(responseContext);
        });
    });
  }

  /**
   * Get all report schedules that target a dashboard or integration dashboard resource.
   * Requires a reporting read permission appropriate to the targeted resource type.
   * @param param The request object
   */
  public getReportSchedulesForResource(
    param: ReportSchedulesApiGetReportSchedulesForResourceRequest,
    options?: Configuration
  ): Promise<ReportScheduleListResponse> {
    const requestContextPromise =
      this.requestFactory.getReportSchedulesForResource(
        param.resourceType,
        param.resourceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getReportSchedulesForResource(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve all report schedules for a given published dataset.
   * Returns report schedules belonging to the authenticated user's organization that target the specified dataset.
   * Requires the `generate_log_reports` or `manage_log_reports` permission.
   * @param param The request object
   */
  public listDatasetReportSchedules(
    param: ReportSchedulesApiListDatasetReportSchedulesRequest,
    options?: Configuration
  ): Promise<DatasetReportScheduleListResponse> {
    const requestContextPromise =
      this.requestFactory.listDatasetReportSchedules(param.datasetId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDatasetReportSchedules(
            responseContext
          );
        });
    });
  }

  /**
   * List dashboard and integration dashboard report schedules for the organization.
   * The response is paginated and can be filtered by title, author UUID, or recipients.
   * Requires the `generate_dashboard_reports` permission.
   * @param param The request object
   */
  public listReportSchedules(
    param: ReportSchedulesApiListReportSchedulesRequest = {},
    options?: Configuration
  ): Promise<ReportScheduleListResponse> {
    const requestContextPromise = this.requestFactory.listReportSchedules(
      param.pageLimit,
      param.pageOffset,
      param.filterTitle,
      param.filterAuthorUuid,
      param.filterRecipients,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listReportSchedules(responseContext);
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
    options?: Configuration
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.patchReportSchedule(
      param.scheduleUuid,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchReportSchedule(responseContext);
        });
    });
  }

  /**
   * Initiate a one-off, print-only report for a dashboard or integration dashboard.
   * The report is rendered as a PDF and made available for download through the URL returned in the response.
   * Requires a reporting permission appropriate to the targeted resource type.
   * @param param The request object
   */
  public printReport(
    param: ReportSchedulesApiPrintReportRequest,
    options?: Configuration
  ): Promise<PrintReportResponse> {
    const requestContextPromise = this.requestFactory.printReport(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.printReport(responseContext);
        });
    });
  }

  /**
   * Activate or pause a report schedule by setting its status to `active` or `inactive`.
   * Requires a reporting write permission appropriate to the targeted resource type and schedule ownership.
   * @param param The request object
   */
  public toggleReportSchedule(
    param: ReportSchedulesApiToggleReportScheduleRequest,
    options?: Configuration
  ): Promise<ReportScheduleResponse> {
    const requestContextPromise = this.requestFactory.toggleReportSchedule(
      param.scheduleUuid,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.toggleReportSchedule(responseContext);
        });
    });
  }
}
