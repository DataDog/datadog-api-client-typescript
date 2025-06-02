import {
  ApiException,
  BaseAPIRequestFactory,
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
import { SingleAggregatedConnectionResponseArray } from "./models/SingleAggregatedConnectionResponseArray";
import { version } from "../version";

export class CloudNetworkMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-network-monitoring", version);
    }
  }
  public async getAggregatedConnections(
    from?: number,
    to?: number,
    groupBy?: string,
    tags?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudNetworkMonitoringApi.v2.getAggregatedConnections"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getAggregatedConnections' is disabled. Enable it by setting `configuration.unstableOperations['CloudNetworkMonitoringApi.v2.getAggregatedConnections'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/network/connections/aggregate";

    // Make Request Context
    const requestContext = _config
      .getServer("CloudNetworkMonitoringApi.v2.getAggregatedConnections")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (groupBy !== undefined) {
      requestContext.setQueryParam(
        "group_by",
        serialize(groupBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        serialize(tags, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int32"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class CloudNetworkMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAggregatedConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAggregatedConnections(
    response: ResponseContext,
  ): Promise<SingleAggregatedConnectionResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SingleAggregatedConnectionResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SingleAggregatedConnectionResponseArray",
      ) as SingleAggregatedConnectionResponseArray;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: SingleAggregatedConnectionResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SingleAggregatedConnectionResponseArray",
        "",
      ) as SingleAggregatedConnectionResponseArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CloudNetworkMonitoringApiGetAggregatedConnectionsRequest {
  /**
   * Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.
   * @type number
   */
  from?: number;
  /**
   * Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.
   * @type number
   */
  to?: number;
  /**
   * Comma-separated list of fields to group connections by.
   * @type string
   */
  groupBy?: string;
  /**
   * Comma-separated list of tags to filter connections by.
   * @type string
   */
  tags?: string;
  /**
   * The number of connections to be returned. The maximum value is 5000.
   * @type number
   */
  limit?: number;
}

export class CloudNetworkMonitoringApi {
  private requestFactory: CloudNetworkMonitoringApiRequestFactory;
  private responseProcessor: CloudNetworkMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CloudNetworkMonitoringApiRequestFactory,
    responseProcessor?: CloudNetworkMonitoringApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CloudNetworkMonitoringApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CloudNetworkMonitoringApiResponseProcessor();
  }

  /**
   * Get all aggregated connections.
   * @param param The request object
   */
  public getAggregatedConnections(
    param: CloudNetworkMonitoringApiGetAggregatedConnectionsRequest = {},
    options?: Configuration,
  ): Promise<SingleAggregatedConnectionResponseArray> {
    const requestContextPromise = this.requestFactory.getAggregatedConnections(
      param.from,
      param.to,
      param.groupBy,
      param.tags,
      param.limit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAggregatedConnections(
            responseContext,
          );
        });
    });
  }
}
