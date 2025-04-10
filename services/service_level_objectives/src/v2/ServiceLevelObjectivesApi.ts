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
import { SloReportCreateRequest } from "./models/SloReportCreateRequest";
import { SLOReportPostResponse } from "./models/SLOReportPostResponse";
import { SLOReportStatusGetResponse } from "./models/SLOReportStatusGetResponse";

export class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
  public async createSLOReportJob(
    body: SloReportCreateRequest,
    _options?: Configuration,
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
      ObjectSerializer.serialize("body", "SloReportCreateRequest", ""),
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

  public async getSLOReport(
    reportId: string,
    _options?: Configuration,
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
      encodeURIComponent(String(reportId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceLevelObjectivesApi.getSLOReport")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "text/csv, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSLOReportJobStatus(
    reportId: string,
    _options?: Configuration,
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
      encodeURIComponent(String(reportId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceLevelObjectivesApi.getSLOReportJobStatus")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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
    response: ResponseContext,
  ): Promise<SLOReportPostResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SLOReportPostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportPostResponse",
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
      const body: SLOReportPostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportPostResponse",
        "",
      ) as SLOReportPostResponse;
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
   * @params response Response returned by the server for a request to getSLOReport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOReport(response: ResponseContext): Promise<string> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
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
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
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
   * @params response Response returned by the server for a request to getSLOReportJobStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOReportJobStatus(
    response: ResponseContext,
  ): Promise<SLOReportStatusGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SLOReportStatusGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportStatusGetResponse",
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
      const body: SLOReportStatusGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOReportStatusGetResponse",
        "",
      ) as SLOReportStatusGetResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

export class ServiceLevelObjectivesApi {
  private requestFactory: ServiceLevelObjectivesApiRequestFactory;
  private responseProcessor: ServiceLevelObjectivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ServiceLevelObjectivesApiRequestFactory,
    responseProcessor?: ServiceLevelObjectivesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectivesApiRequestFactory(this.configuration);
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
    options?: Configuration,
  ): Promise<SLOReportPostResponse> {
    const requestContextPromise = this.requestFactory.createSLOReportJob(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<string> {
    const requestContextPromise = this.requestFactory.getSLOReport(
      param.reportId,
      options,
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
    options?: Configuration,
  ): Promise<SLOReportStatusGetResponse> {
    const requestContextPromise = this.requestFactory.getSLOReportJobStatus(
      param.reportId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOReportJobStatus(responseContext);
        });
    });
  }
}
