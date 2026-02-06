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
import { DashboardSearchResponse } from "./models/DashboardSearchResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dashboards", version);
    }
  }
  public async searchDashboards(
    query?: string,
    sort?: string,
    include?: string,
    page?: number,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["DashboardsApi.v2.searchDashboards"]) {
      throw new Error(
        "Unstable operation 'searchDashboards' is disabled. Enable it by setting `configuration.unstableOperations['DashboardsApi.v2.searchDashboards'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/dashboards/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DashboardsApi.v2.searchDashboards",
      DashboardsApi.operationServers,
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
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", ""),
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

export class DashboardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to searchDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchDashboards(
    response: ResponseContext,
  ): Promise<DashboardSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DashboardSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DashboardSearchResponse",
      ) as DashboardSearchResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 503) {
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
      const body: DashboardSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DashboardSearchResponse",
        "",
      ) as DashboardSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DashboardsApiSearchDashboardsRequest {
  /**
   * Search query string.
   * @type string
   */
  query?: string;
  /**
   * Sort field for results.
   * @type string
   */
  sort?: string;
  /**
   * Additional data to include in the response.
   * @type string
   */
  include?: string;
  /**
   * Page number for pagination.
   * @type number
   */
  page?: number;
  /**
   * Maximum number of results to return.
   * @type number
   */
  limit?: number;
}

export class DashboardsApi {
  private requestFactory: DashboardsApiRequestFactory;
  private responseProcessor: DashboardsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DashboardsApiRequestFactory,
    responseProcessor?: DashboardsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DashboardsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DashboardsApiResponseProcessor();
  }

  /**
   * Search for dashboards using a query string.
   * @param param The request object
   */
  public searchDashboards(
    param: DashboardsApiSearchDashboardsRequest = {},
    options?: Configuration,
  ): Promise<DashboardSearchResponse> {
    const requestContextPromise = this.requestFactory.searchDashboards(
      param.query,
      param.sort,
      param.include,
      param.page,
      param.limit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchDashboards(responseContext);
        });
    });
  }
}
