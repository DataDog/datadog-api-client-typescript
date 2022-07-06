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

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";
import { isCodeInRange } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CostByOrgResponse } from "../models/CostByOrgResponse";
import { UsageApplicationSecurityMonitoringResponse } from "../models/UsageApplicationSecurityMonitoringResponse";
import { UsageLambdaTracedInvocationsResponse } from "../models/UsageLambdaTracedInvocationsResponse";
import { UsageObservabilityPipelinesResponse } from "../models/UsageObservabilityPipelinesResponse";

export class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
  public async getCostByOrg(
    startMonth: Date,
    endMonth?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError(
        "Required parameter startMonth was null or undefined when calling getCostByOrg."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/usage/cost_by_org";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.UsageMeteringApi.getCostByOrg"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
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

  public async getEstimatedCostByOrg(
    startMonth?: Date,
    endMonth?: Date,
    startDate?: Date,
    endDate?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/estimated_cost_by_org";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.UsageMeteringApi.getEstimatedCostByOrg"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
      );
    }
    if (startDate !== undefined) {
      requestContext.setQueryParam(
        "start_date",
        ObjectSerializer.serialize(startDate, "Date", "date-time")
      );
    }
    if (endDate !== undefined) {
      requestContext.setQueryParam(
        "end_date",
        ObjectSerializer.serialize(endDate, "Date", "date-time")
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

  public async getUsageApplicationSecurityMonitoring(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageApplicationSecurityMonitoring."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/usage/application_security";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.UsageMeteringApi.getUsageApplicationSecurityMonitoring"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
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

  public async getUsageLambdaTracedInvocations(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLambdaTracedInvocations."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/usage/lambda_traced_invocations";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.UsageMeteringApi.getUsageLambdaTracedInvocations"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
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

  public async getUsageObservabilityPipelines(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageObservabilityPipelines."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/usage/observability_pipelines";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.UsageMeteringApi.getUsageObservabilityPipelines"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
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
}

export class UsageMeteringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCostByOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostByOrg(
    response: ResponseContext
  ): Promise<CostByOrgResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CostByOrgResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CostByOrgResponse",
        ""
      ) as CostByOrgResponse;
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
      const body: CostByOrgResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CostByOrgResponse",
        ""
      ) as CostByOrgResponse;
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
   * @params response Response returned by the server for a request to getEstimatedCostByOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEstimatedCostByOrg(
    response: ResponseContext
  ): Promise<CostByOrgResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CostByOrgResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CostByOrgResponse",
        ""
      ) as CostByOrgResponse;
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
      const body: CostByOrgResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CostByOrgResponse",
        ""
      ) as CostByOrgResponse;
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
   * @params response Response returned by the server for a request to getUsageApplicationSecurityMonitoring
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageApplicationSecurityMonitoring(
    response: ResponseContext
  ): Promise<UsageApplicationSecurityMonitoringResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageApplicationSecurityMonitoringResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageApplicationSecurityMonitoringResponse",
          ""
        ) as UsageApplicationSecurityMonitoringResponse;
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
      const body: UsageApplicationSecurityMonitoringResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageApplicationSecurityMonitoringResponse",
          ""
        ) as UsageApplicationSecurityMonitoringResponse;
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
   * @params response Response returned by the server for a request to getUsageLambdaTracedInvocations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLambdaTracedInvocations(
    response: ResponseContext
  ): Promise<UsageLambdaTracedInvocationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLambdaTracedInvocationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageLambdaTracedInvocationsResponse",
          ""
        ) as UsageLambdaTracedInvocationsResponse;
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
      const body: UsageLambdaTracedInvocationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageLambdaTracedInvocationsResponse",
          ""
        ) as UsageLambdaTracedInvocationsResponse;
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
   * @params response Response returned by the server for a request to getUsageObservabilityPipelines
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageObservabilityPipelines(
    response: ResponseContext
  ): Promise<UsageObservabilityPipelinesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageObservabilityPipelinesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageObservabilityPipelinesResponse",
          ""
        ) as UsageObservabilityPipelinesResponse;
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
      const body: UsageObservabilityPipelinesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageObservabilityPipelinesResponse",
          ""
        ) as UsageObservabilityPipelinesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface UsageMeteringApiGetCostByOrgRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.
   * @type Date
   */
  startMonth: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
   * @type Date
   */
  endMonth?: Date;
}

export interface UsageMeteringApiGetEstimatedCostByOrgRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. Either start_month or start_date should be specified, but not both.
   * @type Date
   */
  startMonth?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. Either start_month or start_date should be specified, but not both.
   * @type Date
   */
  startDate?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost ending this day.
   * @type Date
   */
  endDate?: Date;
}

export interface UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
   * **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLambdaTracedInvocationsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
   * **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageObservabilityPipelinesRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
   * **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export class UsageMeteringApi {
  private requestFactory: UsageMeteringApiRequestFactory;
  private responseProcessor: UsageMeteringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsageMeteringApiRequestFactory,
    responseProcessor?: UsageMeteringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new UsageMeteringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UsageMeteringApiResponseProcessor();
  }

  /**
   * Get cost across multi-org account. Cost by org data for a given month becomes available no later than the 16th of the following month.
   * @param param The request object
   */
  public getCostByOrg(
    param: UsageMeteringApiGetCostByOrgRequest,
    options?: Configuration
  ): Promise<CostByOrgResponse> {
    const requestContextPromise = this.requestFactory.getCostByOrg(
      param.startMonth,
      param.endMonth,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostByOrg(responseContext);
        });
    });
  }

  /**
   * Get estimated cost across multi-org account. Estimated data is only available for the current month and previous month. To access historical costs beyond 2 months in the past, use the [/cost_by_org](#get-cost-across-multi-org-account) endpoint.
   * @param param The request object
   */
  public getEstimatedCostByOrg(
    param: UsageMeteringApiGetEstimatedCostByOrgRequest = {},
    options?: Configuration
  ): Promise<CostByOrgResponse> {
    const requestContextPromise = this.requestFactory.getEstimatedCostByOrg(
      param.startMonth,
      param.endMonth,
      param.startDate,
      param.endDate,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEstimatedCostByOrg(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Application Security .
   * @param param The request object
   */
  public getUsageApplicationSecurityMonitoring(
    param: UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest,
    options?: Configuration
  ): Promise<UsageApplicationSecurityMonitoringResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageApplicationSecurityMonitoring(
        param.startHr,
        param.endHr,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageApplicationSecurityMonitoring(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for Lambda Traced Invocations.
   * @param param The request object
   */
  public getUsageLambdaTracedInvocations(
    param: UsageMeteringApiGetUsageLambdaTracedInvocationsRequest,
    options?: Configuration
  ): Promise<UsageLambdaTracedInvocationsResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageLambdaTracedInvocations(
        param.startHr,
        param.endHr,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLambdaTracedInvocations(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for Observability Pipelines.
   * @param param The request object
   */
  public getUsageObservabilityPipelines(
    param: UsageMeteringApiGetUsageObservabilityPipelinesRequest,
    options?: Configuration
  ): Promise<UsageObservabilityPipelinesResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageObservabilityPipelines(
        param.startHr,
        param.endHr,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageObservabilityPipelines(
            responseContext
          );
        });
    });
  }
}
