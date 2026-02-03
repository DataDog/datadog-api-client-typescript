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
import { version } from "../version";

export class RumReplaySessionsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-replay-sessions", version);
    }
  }
  public async getSegments(
    viewId: string,
    sessionId: string,
    source?: string,
    ts?: number,
    maxListSize?: number,
    paging?: string,
    _options?: Configuration,
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
    const { server, overrides } = _config.getServerAndOverrides(
      "RumReplaySessionsApi.v2.getSegments",
      RumReplaySessionsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        serialize(source, TypingInfo, "string", ""),
        "",
      );
    }
    if (ts !== undefined) {
      requestContext.setQueryParam(
        "ts",
        serialize(ts, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (maxListSize !== undefined) {
      requestContext.setQueryParam(
        "max_list_size",
        serialize(maxListSize, TypingInfo, "number", ""),
        "",
      );
    }
    if (paging !== undefined) {
      requestContext.setQueryParam(
        "paging",
        serialize(paging, TypingInfo, "string", ""),
        "",
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
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumReplaySessionsApiRequestFactory,
    responseProcessor?: RumReplaySessionsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RumReplaySessionsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumReplaySessionsApiResponseProcessor();
  }

  /**
   * Get segments for a view.
   * @param param The request object
   */
  public getSegments(
    param: RumReplaySessionsApiGetSegmentsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.getSegments(
      param.viewId,
      param.sessionId,
      param.source,
      param.ts,
      param.maxListSize,
      param.paging,
      options,
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
