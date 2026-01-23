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
import { SloReportCreateRequest } from "../models/SloReportCreateRequest";
import { SLOReportPostResponse } from "../models/SLOReportPostResponse";
import { SLOReportStatusGetResponse } from "../models/SLOReportStatusGetResponse";
import { SloStatusResponse } from "../models/SloStatusResponse";

export class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
  public async createSLOReportJob(
    body: SloReportCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createSLOReportJob'");
    if (!_config.unstableOperations["v2.createSLOReportJob"]) {
      throw new Error("Unstable operation 'createSLOReportJob' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSLOReportJob");
    }

    // Path Params
    const localVarPath = "/api/v2/slo/report";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceLevelObjectivesApi.createSLOReportJob")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SloReportCreateRequest", ""),
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

  public async getSLOReport(
    reportId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSLOReport'");
    if (!_config.unstableOperations["v2.getSLOReport"]) {
      throw new Error("Unstable operation 'getSLOReport' is disabled");
    }

    // verify required parameter 'reportId' is not null or undefined
    if (reportId === null || reportId === undefined) {
      throw new RequiredError("reportId", "getSLOReport");
    }

    // Path Params
    const localVarPath = "/api/v2/slo/report/{report_id}/download".replace(
      "{report_id}",
      encodeURIComponent(String(reportId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceLevelObjectivesApi.getSLOReport")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "text/csv, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSLOReportJobStatus(
    reportId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSLOReportJobStatus'");
    if (!_config.unstableOperations["v2.getSLOReportJobStatus"]) {
      throw new Error("Unstable operation 'getSLOReportJobStatus' is disabled");
    }

    // verify required parameter 'reportId' is not null or undefined
    if (reportId === null || reportId === undefined) {
      throw new RequiredError("reportId", "getSLOReportJobStatus");
    }

    // Path Params
    const localVarPath = "/api/v2/slo/report/{report_id}/status".replace(
      "{report_id}",
      encodeURIComponent(String(reportId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceLevelObjectivesApi.getSLOReportJobStatus")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSloStatus(
    sloId: string,
    fromTs: number,
    toTs: number,
    disableCorrections?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSloStatus'");
    if (!_config.unstableOperations["v2.getSloStatus"]) {
      throw new Error("Unstable operation 'getSloStatus' is disabled");
    }

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError("sloId", "getSloStatus");
    }

    // verify required parameter 'fromTs' is not null or undefined
    if (fromTs === null || fromTs === undefined) {
      throw new RequiredError("fromTs", "getSloStatus");
    }

    // verify required parameter 'toTs' is not null or undefined
    if (toTs === null || toTs === undefined) {
      throw new RequiredError("toTs", "getSloStatus");
    }

    // Path Params
    const localVarPath = "/api/v2/slo/{slo_id}/status".replace(
      "{slo_id}",
      encodeURIComponent(String(sloId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceLevelObjectivesApi.getSloStatus")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        ObjectSerializer.serialize(fromTs, "number", "int64"),
        ""
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        ObjectSerializer.serialize(toTs, "number", "int64"),
        ""
      );
    }
    if (disableCorrections !== undefined) {
      requestContext.setQueryParam(
        "disable_corrections",
        ObjectSerializer.serialize(disableCorrections, "boolean", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class ServiceLevelObjectivesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSLOReportJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSLOReportJob(
    response: ResponseContext
  ): Promise<SLOReportPostResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SLOReportPostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportPostResponse"
      ) as SLOReportPostResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      const body: SLOReportPostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportPostResponse",
        ""
      ) as SLOReportPostResponse;
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
   * @params response Response returned by the server for a request to getSLOReport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOReport(response: ResponseContext): Promise<string> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string"
      ) as string;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        ""
      ) as string;
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
   * @params response Response returned by the server for a request to getSLOReportJobStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOReportJobStatus(
    response: ResponseContext
  ): Promise<SLOReportStatusGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SLOReportStatusGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportStatusGetResponse"
      ) as SLOReportStatusGetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: SLOReportStatusGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportStatusGetResponse",
        ""
      ) as SLOReportStatusGetResponse;
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
   * @params response Response returned by the server for a request to getSloStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSloStatus(
    response: ResponseContext
  ): Promise<SloStatusResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SloStatusResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SloStatusResponse"
      ) as SloStatusResponse;
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
      const body: SloStatusResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SloStatusResponse",
        ""
      ) as SloStatusResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ServiceLevelObjectivesApiCreateSLOReportJobRequest {
  /**
   * Create SLO report job request body.
   * @type SloReportCreateRequest
   */
  body: SloReportCreateRequest;
}

export interface ServiceLevelObjectivesApiGetSLOReportRequest {
  /**
   * The ID of the report job.
   * @type string
   */
  reportId: string;
}

export interface ServiceLevelObjectivesApiGetSLOReportJobStatusRequest {
  /**
   * The ID of the report job.
   * @type string
   */
  reportId: string;
}

export interface ServiceLevelObjectivesApiGetSloStatusRequest {
  /**
   * The ID of the SLO.
   * @type string
   */
  sloId: string;
  /**
   * The starting timestamp for the SLO status query in epoch seconds.
   * @type number
   */
  fromTs: number;
  /**
   * The ending timestamp for the SLO status query in epoch seconds.
   * @type number
   */
  toTs: number;
  /**
   * Whether to exclude correction windows from the SLO status calculation. Defaults to false.
   * @type boolean
   */
  disableCorrections?: boolean;
}

export class ServiceLevelObjectivesApi {
  private requestFactory: ServiceLevelObjectivesApiRequestFactory;
  private responseProcessor: ServiceLevelObjectivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectivesApiRequestFactory,
    responseProcessor?: ServiceLevelObjectivesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectivesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceLevelObjectivesApiResponseProcessor();
  }

  /**
   * Create a job to generate an SLO report. The report job is processed asynchronously and eventually results in a CSV report being available for download.
   *
   * Check the status of the job and download the CSV report using the returned `report_id`.
   * @param param The request object
   */
  public createSLOReportJob(
    param: ServiceLevelObjectivesApiCreateSLOReportJobRequest,
    options?: Configuration
  ): Promise<SLOReportPostResponse> {
    const requestContextPromise = this.requestFactory.createSLOReportJob(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSLOReportJob(responseContext);
        });
    });
  }

  /**
   * Download an SLO report. This can only be performed after the report job has completed.
   *
   * Reports are not guaranteed to exist indefinitely. Datadog recommends that you download the report as soon as it is available.
   * @param param The request object
   */
  public getSLOReport(
    param: ServiceLevelObjectivesApiGetSLOReportRequest,
    options?: Configuration
  ): Promise<string> {
    const requestContextPromise = this.requestFactory.getSLOReport(
      param.reportId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOReport(responseContext);
        });
    });
  }

  /**
   * Get the status of the SLO report job.
   * @param param The request object
   */
  public getSLOReportJobStatus(
    param: ServiceLevelObjectivesApiGetSLOReportJobStatusRequest,
    options?: Configuration
  ): Promise<SLOReportStatusGetResponse> {
    const requestContextPromise = this.requestFactory.getSLOReportJobStatus(
      param.reportId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOReportJobStatus(responseContext);
        });
    });
  }

  /**
   * Get the status of a Service Level Objective (SLO) for a given time period.
   *
   * This endpoint returns the current SLI value, error budget remaining, and other status information for the specified SLO.
   * @param param The request object
   */
  public getSloStatus(
    param: ServiceLevelObjectivesApiGetSloStatusRequest,
    options?: Configuration
  ): Promise<SloStatusResponse> {
    const requestContextPromise = this.requestFactory.getSloStatus(
      param.sloId,
      param.fromTs,
      param.toTs,
      param.disableCorrections,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSloStatus(responseContext);
        });
    });
  }
}
