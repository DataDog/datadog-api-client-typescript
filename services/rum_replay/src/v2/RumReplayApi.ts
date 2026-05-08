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
import { ReplaySummaryRequest } from "./models/ReplaySummaryRequest";
import { ReplaySummaryResponse } from "./models/ReplaySummaryResponse";
import { version } from "../version";

export class RumReplayApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-replay", version);
    }
  }
  public async generateReplaySummary(
    sessionId: string,
    dataSource: string,
    body: ReplaySummaryRequest,
    ts?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumReplayApi.v2.generateReplaySummary"]) {
      throw new Error(
        "Unstable operation 'generateReplaySummary' is disabled. Enable it by setting `configuration.unstableOperations['RumReplayApi.v2.generateReplaySummary'] = true`",
      );
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
      encodeURIComponent(String(sessionId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumReplayApi.v2.generateReplaySummary",
      RumReplayApi.operationServers,
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

    // Query Params
    if (dataSource !== undefined) {
      requestContext.setQueryParam(
        "data_source",
        serialize(dataSource, TypingInfo, "string", ""),
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ReplaySummaryRequest", ""),
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

export class RumReplayApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to generateReplaySummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async generateReplaySummary(
    response: ResponseContext,
  ): Promise<ReplaySummaryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ReplaySummaryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ReplaySummaryResponse",
      ) as ReplaySummaryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: ReplaySummaryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ReplaySummaryResponse",
        "",
      ) as ReplaySummaryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumReplayApiRequestFactory,
    responseProcessor?: RumReplayApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new RumReplayApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumReplayApiResponseProcessor();
  }

  /**
   * Generate an AI-powered summary for a RUM replay session, including chapter breakdowns and behavioral analysis.
   * @param param The request object
   */
  public generateReplaySummary(
    param: RumReplayApiGenerateReplaySummaryRequest,
    options?: Configuration,
  ): Promise<ReplaySummaryResponse> {
    const requestContextPromise = this.requestFactory.generateReplaySummary(
      param.sessionId,
      param.dataSource,
      param.body,
      param.ts,
      options,
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
