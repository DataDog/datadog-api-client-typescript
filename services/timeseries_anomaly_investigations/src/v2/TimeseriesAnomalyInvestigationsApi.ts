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
import { TimeseriesAnomalyInvestigationRequest } from "./models/TimeseriesAnomalyInvestigationRequest";
import { TimeseriesAnomalyInvestigationResponse } from "./models/TimeseriesAnomalyInvestigationResponse";
import { version } from "../version";

export class TimeseriesAnomalyInvestigationsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "timeseries-anomaly-investigations",
        version,
      );
    }
  }
  public async createTimeseriesAnomalyInvestigation(
    body: TimeseriesAnomalyInvestigationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "TimeseriesAnomalyInvestigationsApi.v2.createTimeseriesAnomalyInvestigation"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createTimeseriesAnomalyInvestigation' is disabled. Enable it by setting `configuration.unstableOperations['TimeseriesAnomalyInvestigationsApi.v2.createTimeseriesAnomalyInvestigation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTimeseriesAnomalyInvestigation");
    }

    // Path Params
    const localVarPath = "/api/v2/timeseries-anomaly-investigations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TimeseriesAnomalyInvestigationsApi.v2.createTimeseriesAnomalyInvestigation",
      TimeseriesAnomalyInvestigationsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TimeseriesAnomalyInvestigationRequest", ""),
      contentType,
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

export class TimeseriesAnomalyInvestigationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTimeseriesAnomalyInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTimeseriesAnomalyInvestigation(
    response: ResponseContext,
  ): Promise<TimeseriesAnomalyInvestigationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TimeseriesAnomalyInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimeseriesAnomalyInvestigationResponse",
      ) as TimeseriesAnomalyInvestigationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 422
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
      const body: TimeseriesAnomalyInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimeseriesAnomalyInvestigationResponse",
        "",
      ) as TimeseriesAnomalyInvestigationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface TimeseriesAnomalyInvestigationsApiCreateTimeseriesAnomalyInvestigationRequest {
  /**
   * Metrics timeseries request to investigate.
   * @type TimeseriesAnomalyInvestigationRequest
   */
  body: TimeseriesAnomalyInvestigationRequest;
}

export class TimeseriesAnomalyInvestigationsApi {
  private requestFactory: TimeseriesAnomalyInvestigationsApiRequestFactory;
  private responseProcessor: TimeseriesAnomalyInvestigationsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: TimeseriesAnomalyInvestigationsApiRequestFactory,
    responseProcessor?: TimeseriesAnomalyInvestigationsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new TimeseriesAnomalyInvestigationsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new TimeseriesAnomalyInvestigationsApiResponseProcessor();
  }

  /**
   * Investigates a metrics timeseries request for its most significant anomaly and returns deterministic findings.
   * Metrics queries with or without grouping are supported. This API version accepts exactly one request and returns at most one anomaly.
   * @param param The request object
   */
  public createTimeseriesAnomalyInvestigation(
    param: TimeseriesAnomalyInvestigationsApiCreateTimeseriesAnomalyInvestigationRequest,
    options?: Configuration,
  ): Promise<TimeseriesAnomalyInvestigationResponse> {
    const requestContextPromise =
      this.requestFactory.createTimeseriesAnomalyInvestigation(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTimeseriesAnomalyInvestigation(
            responseContext,
          );
        });
    });
  }
}
