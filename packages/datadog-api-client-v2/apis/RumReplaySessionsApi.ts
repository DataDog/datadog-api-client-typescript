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

export class RumReplaySessionsApiRequestFactory extends BaseAPIRequestFactory {
  public async getSegments(
    viewId: string,
    sessionId: string,
    source?: string,
    ts?: number,
    maxListSize?: number,
    paging?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'viewId' is not null or undefined
    if (viewId === null || viewId === undefined) {
      throw new RequiredError("viewId", "getSegments");
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "getSegments");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/sessions/{session_id}/views/{view_id}/segments"
        .replace("{view_id}", encodeURIComponent(String(viewId)))
        .replace("{session_id}", encodeURIComponent(String(sessionId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplaySessionsApi.getSegments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", ""),
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
    if (maxListSize !== undefined) {
      requestContext.setQueryParam(
        "max_list_size",
        ObjectSerializer.serialize(maxListSize, "number", ""),
        ""
      );
    }
    if (paging !== undefined) {
      requestContext.setQueryParam(
        "paging",
        ObjectSerializer.serialize(paging, "string", ""),
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

export class RumReplaySessionsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSegments(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumReplaySessionsApiGetSegmentsRequest {
  /**
   * Unique identifier of the view.
   * @type string
   */
  viewId: string;
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
  /**
   * Storage source: 'event_platform' or 'blob'.
   * @type string
   */
  source?: string;
  /**
   * Server-side timestamp in milliseconds.
   * @type number
   */
  ts?: number;
  /**
   * Maximum size in bytes for the segment list.
   * @type number
   */
  maxListSize?: number;
  /**
   * Paging token for pagination.
   * @type string
   */
  paging?: string;
}

export class RumReplaySessionsApi {
  private requestFactory: RumReplaySessionsApiRequestFactory;
  private responseProcessor: RumReplaySessionsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumReplaySessionsApiRequestFactory,
    responseProcessor?: RumReplaySessionsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RumReplaySessionsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumReplaySessionsApiResponseProcessor();
  }

  /**
   * Get segments for a view.
   * @param param The request object
   */
  public getSegments(
    param: RumReplaySessionsApiGetSegmentsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.getSegments(
      param.viewId,
      param.sessionId,
      param.source,
      param.ts,
      param.maxListSize,
      param.paging,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSegments(responseContext);
        });
    });
  }
}
