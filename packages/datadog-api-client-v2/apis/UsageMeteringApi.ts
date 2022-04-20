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
import { UsageObservabilityPipelinesResponse } from "../models/UsageObservabilityPipelinesResponse";

export class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
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
      "UsageMeteringApi.getUsageObservabilityPipelines"
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

export interface UsageMeteringApiGetUsageObservabilityPipelinesRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
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
