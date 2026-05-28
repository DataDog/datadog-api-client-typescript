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
import { PrunedTraceResponse } from "./models/PrunedTraceResponse";
import { TraceResponse } from "./models/TraceResponse";
import { version } from "../version";

export class APMTraceApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("apm-trace", version);
    }
  }
  public async getPrunedTraceByID(
    traceId: string,
    expandSpanId?: number,
    timeHint?: number,
    forceSource?: string,
    includePath?: Array<string>,
    tagInclude?: Array<string>,
    tagExclude?: Array<string>,
    onlyServiceEntrySpans?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["APMTraceApi.v2.getPrunedTraceByID"]) {
      throw new Error(
        "Unstable operation 'getPrunedTraceByID' is disabled. Enable it by setting `configuration.unstableOperations['APMTraceApi.v2.getPrunedTraceByID'] = true`",
      );
    }

    // verify required parameter 'traceId' is not null or undefined
    if (traceId === null || traceId === undefined) {
      throw new RequiredError("traceId", "getPrunedTraceByID");
    }

    // Path Params
    const localVarPath = "/api/v2/pruned_trace/{trace_id}".replace(
      "{trace_id}",
      encodeURIComponent(String(traceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "APMTraceApi.v2.getPrunedTraceByID",
      APMTraceApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (expandSpanId !== undefined) {
      requestContext.setQueryParam(
        "expand_span_id",
        serialize(expandSpanId, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (timeHint !== undefined) {
      requestContext.setQueryParam(
        "time_hint",
        serialize(timeHint, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (forceSource !== undefined) {
      requestContext.setQueryParam(
        "force_source",
        serialize(forceSource, TypingInfo, "string", ""),
        "",
      );
    }
    if (includePath !== undefined) {
      requestContext.setQueryParam(
        "include_path",
        serialize(includePath, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (tagInclude !== undefined) {
      requestContext.setQueryParam(
        "tag_include",
        serialize(tagInclude, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (tagExclude !== undefined) {
      requestContext.setQueryParam(
        "tag_exclude",
        serialize(tagExclude, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (onlyServiceEntrySpans !== undefined) {
      requestContext.setQueryParam(
        "only_service_entry_spans",
        serialize(onlyServiceEntrySpans, TypingInfo, "boolean", ""),
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

  public async getTraceByID(
    traceId: string,
    includeFields?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["APMTraceApi.v2.getTraceByID"]) {
      throw new Error(
        "Unstable operation 'getTraceByID' is disabled. Enable it by setting `configuration.unstableOperations['APMTraceApi.v2.getTraceByID'] = true`",
      );
    }

    // verify required parameter 'traceId' is not null or undefined
    if (traceId === null || traceId === undefined) {
      throw new RequiredError("traceId", "getTraceByID");
    }

    // Path Params
    const localVarPath = "/api/v2/trace/{trace_id}".replace(
      "{trace_id}",
      encodeURIComponent(String(traceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "APMTraceApi.v2.getTraceByID",
      APMTraceApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (includeFields !== undefined) {
      requestContext.setQueryParam(
        "include_fields",
        serialize(includeFields, TypingInfo, "Array<string>", ""),
        "multi",
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

export class APMTraceApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getPrunedTraceByID
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPrunedTraceByID(
    response: ResponseContext,
  ): Promise<PrunedTraceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PrunedTraceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PrunedTraceResponse",
      ) as PrunedTraceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 504
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
      const body: PrunedTraceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PrunedTraceResponse",
        "",
      ) as PrunedTraceResponse;
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
   * @params response Response returned by the server for a request to getTraceByID
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTraceByID(response: ResponseContext): Promise<TraceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TraceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TraceResponse",
      ) as TraceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 413
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
      const body: TraceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TraceResponse",
        "",
      ) as TraceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface APMTraceApiGetPrunedTraceByIDRequest {
  /**
   * The trace ID. Accepts either a 32-character hexadecimal string (128-bit trace ID)
   * or a decimal string of up to 39 digits.
   * @type string
   */
  traceId: string;
  /**
   * Span ID to expand and preserve in the pruned tree even when its branch would
   * normally be summarized.
   * @type number
   */
  expandSpanId?: number;
  /**
   * Optional Unix time hint, in seconds, used to optimize the lookup of the trace
   * in long-term storage.
   * @type number
   */
  timeHint?: number;
  /**
   * Force the trace to be loaded from a specific source. When unset, the API picks
   * the source automatically.
   * @type string
   */
  forceSource?: string;
  /**
   * Restrict the pruned tree to spans matching the given `key:value` pairs.
   * Values may be passed as repeated query parameters.
   * @type Array<string>
   */
  includePath?: Array<string>;
  /**
   * Regex patterns of tag keys whose values must be included in the pruned spans.
   * Values may be passed as repeated query parameters.
   * @type Array<string>
   */
  tagInclude?: Array<string>;
  /**
   * Regex patterns of tag keys whose values must be excluded from the pruned spans.
   * Values may be passed as repeated query parameters.
   * @type Array<string>
   */
  tagExclude?: Array<string>;
  /**
   * When set to `true`, only service entry spans are included in the pruned tree.
   * @type boolean
   */
  onlyServiceEntrySpans?: boolean;
}

export interface APMTraceApiGetTraceByIDRequest {
  /**
   * The trace ID. Accepts either a 32-character hexadecimal string (128-bit trace ID)
   * or a decimal string of up to 39 digits.
   * @type string
   */
  traceId: string;
  /**
   * List of span fields to include in the response. When omitted, every available field is returned.
   * Values may be passed as repeated query parameters or as a single comma-separated value.
   * @type Array<string>
   */
  includeFields?: Array<string>;
}

export class APMTraceApi {
  private requestFactory: APMTraceApiRequestFactory;
  private responseProcessor: APMTraceApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: APMTraceApiRequestFactory,
    responseProcessor?: APMTraceApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new APMTraceApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new APMTraceApiResponseProcessor();
  }

  /**
   * Retrieve a pruned, hierarchical view of an APM trace by its trace ID.
   * The trace is summarized as a tree of spans rooted at the trace root and reduced in size
   * to keep rendering large traces in the UI practical.
   * This endpoint is rate limited to `60` requests per minute per organization.
   * @param param The request object
   */
  public getPrunedTraceByID(
    param: APMTraceApiGetPrunedTraceByIDRequest,
    options?: Configuration,
  ): Promise<PrunedTraceResponse> {
    const requestContextPromise = this.requestFactory.getPrunedTraceByID(
      param.traceId,
      param.expandSpanId,
      param.timeHint,
      param.forceSource,
      param.includePath,
      param.tagInclude,
      param.tagExclude,
      param.onlyServiceEntrySpans,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPrunedTraceByID(responseContext);
        });
    });
  }

  /**
   * Retrieve a full APM trace by its trace ID, including every span in the trace.
   * Traces are returned from live storage when available and fall back to longer-term storage.
   * This endpoint is rate limited to `60` requests per minute per organization.
   * @param param The request object
   */
  public getTraceByID(
    param: APMTraceApiGetTraceByIDRequest,
    options?: Configuration,
  ): Promise<TraceResponse> {
    const requestContextPromise = this.requestFactory.getTraceByID(
      param.traceId,
      param.includeFields,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTraceByID(responseContext);
        });
    });
  }
}
