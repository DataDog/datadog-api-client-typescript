import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
import { DashboardReportCreateRequest } from "../models/DashboardReportCreateRequest";
import { DashboardReportResponse } from "../models/DashboardReportResponse";
import { DashboardReportsResponse } from "../models/DashboardReportsResponse";
import { DashboardReportUpdateRequest } from "../models/DashboardReportUpdateRequest";

export class DashboardReportsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDashboardReportConfig(
    dashboardId: string,
    body: DashboardReportCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError(
        "Required parameter dashboardId was null or undefined when calling createDashboardReportConfig."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createDashboardReportConfig."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/dashboards/{dashboard_id}/reports".replace(
      "{" + "dashboard_id" + "}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.DashboardReportsApi.createDashboardReportConfig"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardReportCreateRequest", ""),
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

  public async deleteDashboardReportConfig(
    dashboardId: string,
    reportUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError(
        "Required parameter dashboardId was null or undefined when calling deleteDashboardReportConfig."
      );
    }

    // verify required parameter 'reportUuid' is not null or undefined
    if (reportUuid === null || reportUuid === undefined) {
      throw new RequiredError(
        "Required parameter reportUuid was null or undefined when calling deleteDashboardReportConfig."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboards/{dashboard_id}/reports/{report_uuid}"
        .replace(
          "{" + "dashboard_id" + "}",
          encodeURIComponent(String(dashboardId))
        )
        .replace(
          "{" + "report_uuid" + "}",
          encodeURIComponent(String(reportUuid))
        );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.DashboardReportsApi.deleteDashboardReportConfig"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async getDashboardReportConfig(
    dashboardId: string,
    reportUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError(
        "Required parameter dashboardId was null or undefined when calling getDashboardReportConfig."
      );
    }

    // verify required parameter 'reportUuid' is not null or undefined
    if (reportUuid === null || reportUuid === undefined) {
      throw new RequiredError(
        "Required parameter reportUuid was null or undefined when calling getDashboardReportConfig."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboards/{dashboard_id}/reports/{report_uuid}"
        .replace(
          "{" + "dashboard_id" + "}",
          encodeURIComponent(String(dashboardId))
        )
        .replace(
          "{" + "report_uuid" + "}",
          encodeURIComponent(String(reportUuid))
        );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.DashboardReportsApi.getDashboardReportConfig"
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

  public async getDashboardReportConfigsList(
    dashboardId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError(
        "Required parameter dashboardId was null or undefined when calling getDashboardReportConfigsList."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/dashboards/{dashboard_id}/reports".replace(
      "{" + "dashboard_id" + "}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.DashboardReportsApi.getDashboardReportConfigsList"
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

  public async updateDashboardReportConfig(
    dashboardId: string,
    reportUuid: string,
    body: DashboardReportUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError(
        "Required parameter dashboardId was null or undefined when calling updateDashboardReportConfig."
      );
    }

    // verify required parameter 'reportUuid' is not null or undefined
    if (reportUuid === null || reportUuid === undefined) {
      throw new RequiredError(
        "Required parameter reportUuid was null or undefined when calling updateDashboardReportConfig."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateDashboardReportConfig."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboards/{dashboard_id}/reports/{report_uuid}"
        .replace(
          "{" + "dashboard_id" + "}",
          encodeURIComponent(String(dashboardId))
        )
        .replace(
          "{" + "report_uuid" + "}",
          encodeURIComponent(String(reportUuid))
        );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.DashboardReportsApi.updateDashboardReportConfig"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardReportUpdateRequest", ""),
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

export class DashboardReportsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDashboardReportConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboardReportConfig(
    response: ResponseContext
  ): Promise<DashboardReportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: DashboardReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportResponse"
      ) as DashboardReportResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportResponse",
        ""
      ) as DashboardReportResponse;
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
   * @params response Response returned by the server for a request to deleteDashboardReportConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboardReportConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to getDashboardReportConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardReportConfig(
    response: ResponseContext
  ): Promise<DashboardReportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DashboardReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportResponse"
      ) as DashboardReportResponse;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportResponse",
        ""
      ) as DashboardReportResponse;
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
   * @params response Response returned by the server for a request to getDashboardReportConfigsList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardReportConfigsList(
    response: ResponseContext
  ): Promise<DashboardReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DashboardReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportsResponse"
      ) as DashboardReportsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportsResponse",
        ""
      ) as DashboardReportsResponse;
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
   * @params response Response returned by the server for a request to updateDashboardReportConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboardReportConfig(
    response: ResponseContext
  ): Promise<DashboardReportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DashboardReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportResponse"
      ) as DashboardReportResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardReportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardReportResponse",
        ""
      ) as DashboardReportResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DashboardReportsApiCreateDashboardReportConfigRequest {
  /**
   * ID of the dashboard for which to create a dashboard report.
   * @type string
   */
  dashboardId: string;
  /**
   * @type DashboardReportCreateRequest
   */
  body: DashboardReportCreateRequest;
}

export interface DashboardReportsApiDeleteDashboardReportConfigRequest {
  /**
   * ID of the dashboard for which to delete the associated report.
   * @type string
   */
  dashboardId: string;
  /**
   * ID of the dashboard report to delete.
   * @type string
   */
  reportUuid: string;
}

export interface DashboardReportsApiGetDashboardReportConfigRequest {
  /**
   * ID of the dashboard for which to get the associated dashboard report.
   * @type string
   */
  dashboardId: string;
  /**
   * ID of the dashboard report to get.
   * @type string
   */
  reportUuid: string;
}

export interface DashboardReportsApiGetDashboardReportConfigsListRequest {
  /**
   * ID of the Dashboard for which to get all dashboard reports.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardReportsApiUpdateDashboardReportConfigRequest {
  /**
   * ID of the dashboard for which to update the associated report.
   * @type string
   */
  dashboardId: string;
  /**
   * ID of the dashboard report to update.
   * @type string
   */
  reportUuid: string;
  /**
   * @type DashboardReportUpdateRequest
   */
  body: DashboardReportUpdateRequest;
}

export class DashboardReportsApi {
  private requestFactory: DashboardReportsApiRequestFactory;
  private responseProcessor: DashboardReportsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardReportsApiRequestFactory,
    responseProcessor?: DashboardReportsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DashboardReportsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardReportsApiResponseProcessor();
  }

  /**
   * New dashboard report configuration for a given dashboard. This creates a new report email schedule, frequency, timeframe, and more.
   * @param param The request object
   */
  public createDashboardReportConfig(
    param: DashboardReportsApiCreateDashboardReportConfigRequest,
    options?: Configuration
  ): Promise<DashboardReportResponse> {
    const requestContextPromise =
      this.requestFactory.createDashboardReportConfig(
        param.dashboardId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboardReportConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a dashboard report configuration, disabling the sending of scheduled emails for this report in the future. This operation cannot be undone. To pause the sending of emails for this report without deleting it, deactivate the report with a `PATCH` request.
   * @param param The request object
   */
  public deleteDashboardReportConfig(
    param: DashboardReportsApiDeleteDashboardReportConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteDashboardReportConfig(
        param.dashboardId,
        param.reportUuid,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboardReportConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Fetch a single Dashboard Report configuration. This includes the same information provided when fetching a dashboard's list of currently configured reports, but only for singular reports.
   * @param param The request object
   */
  public getDashboardReportConfig(
    param: DashboardReportsApiGetDashboardReportConfigRequest,
    options?: Configuration
  ): Promise<DashboardReportResponse> {
    const requestContextPromise = this.requestFactory.getDashboardReportConfig(
      param.dashboardId,
      param.reportUuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardReportConfig(
            responseContext
          );
        });
    });
  }

  /**
   * List of the dashboard reports configured on a given dashboard. This list includes report configurations that are both enabled and disabled, but does not include reports that have been deleted for the given dashboard.
   * @param param The request object
   */
  public getDashboardReportConfigsList(
    param: DashboardReportsApiGetDashboardReportConfigsListRequest,
    options?: Configuration
  ): Promise<DashboardReportsResponse> {
    const requestContextPromise =
      this.requestFactory.getDashboardReportConfigsList(
        param.dashboardId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardReportConfigsList(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Dashboard Report configuration, including the schedule and email settings.  Changes to the schedule happen immediately, but it may take up to five minutes for your report to be sent if the scheduled time is close to the time of the update request.
   * @param param The request object
   */
  public updateDashboardReportConfig(
    param: DashboardReportsApiUpdateDashboardReportConfigRequest,
    options?: Configuration
  ): Promise<DashboardReportResponse> {
    const requestContextPromise =
      this.requestFactory.updateDashboardReportConfig(
        param.dashboardId,
        param.reportUuid,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboardReportConfig(
            responseContext
          );
        });
    });
  }
}
