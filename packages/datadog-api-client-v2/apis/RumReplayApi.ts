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
import { ReplaySummaryRequest } from "../models/ReplaySummaryRequest";
import { ReplaySummaryResponse } from "../models/ReplaySummaryResponse";

export class RumReplayApiRequestFactory extends BaseAPIRequestFactory {
  public async generateReplaySummary(
    sessionId: string,
    dataSource: string,
    body: ReplaySummaryRequest,
    ts?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'generateReplaySummary'");
    if (!_config.unstableOperations["v2.generateReplaySummary"]) {
      throw new Error("Unstable operation 'generateReplaySummary' is disabled");
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "generateReplaySummary");
    }

    // verify required parameter 'dataSource' is not null or undefined
    if (dataSource === null || dataSource === undefined) {
      throw new RequiredError("dataSource", "generateReplaySummary");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "generateReplaySummary");
    }

    // Path Params
    const localVarPath = "/api/v2/replay/summary/{session_id}".replace(
      "{session_id}",
      encodeURIComponent(String(sessionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayApi.generateReplaySummary")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (dataSource !== undefined) {
      requestContext.setQueryParam(
        "data_source",
        ObjectSerializer.serialize(dataSource, "string", ""),
        ""
      );
    }
    if (ts !== undefined) {
      requestContext.setQueryParam(
        "ts",
        ObjectSerializer.serialize(ts, "number", "int64"),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReplaySummaryRequest", ""),
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
}

export class RumReplayApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to generateReplaySummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async generateReplaySummary(
    response: ResponseContext
  ): Promise<ReplaySummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReplaySummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReplaySummaryResponse"
      ) as ReplaySummaryResponse;
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
      const body: ReplaySummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReplaySummaryResponse",
        ""
      ) as ReplaySummaryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumReplayApiGenerateReplaySummaryRequest {
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
  /**
   * Data source for the session. Valid values are `rum`, `product_analytics`, and `replay`.
   * @type string
   */
  dataSource: string;
  /**
   * @type ReplaySummaryRequest
   */
  body: ReplaySummaryRequest;
  /**
   * Server-side timestamp in milliseconds.
   * @type number
   */
  ts?: number;
}

export class RumReplayApi {
  private requestFactory: RumReplayApiRequestFactory;
  private responseProcessor: RumReplayApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumReplayApiRequestFactory,
    responseProcessor?: RumReplayApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RumReplayApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumReplayApiResponseProcessor();
  }

  /**
   * Generate an AI-powered summary for a RUM replay session, including chapter breakdowns and behavioral analysis.
   * @param param The request object
   */
  public generateReplaySummary(
    param: RumReplayApiGenerateReplaySummaryRequest,
    options?: Configuration
  ): Promise<ReplaySummaryResponse> {
    const requestContextPromise = this.requestFactory.generateReplaySummary(
      param.sessionId,
      param.dataSource,
      param.body,
      param.ts,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.generateReplaySummary(responseContext);
        });
    });
  }
}
