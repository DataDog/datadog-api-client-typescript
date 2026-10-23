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
import { APIErrorResponse } from "../v1/models/APIErrorResponse";
import { DashboardSummary } from "./models/DashboardSummary";
import { DashboardSummaryDefinition } from "./models/DashboardSummaryDefinition";
import { version } from "../version";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dashboards", version);
    }
  }
  public async listDashboards(
    filterShared?: boolean,
    filterDeleted?: boolean,
    count?: number,
    start?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/dashboard";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DashboardsApi.v1_20270101.listDashboards",
      DashboardsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("DD-API-Version", "2027-01-01");
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

    // Query Params
    if (filterShared !== undefined) {
      requestContext.setQueryParam(
        "filter[shared]",
        serialize(filterShared, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterDeleted !== undefined) {
      requestContext.setQueryParam(
        "filter[deleted]",
        serialize(filterDeleted, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        serialize(count, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
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

export class DashboardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDashboards(
    response: ResponseContext,
  ): Promise<DashboardSummary> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DashboardSummary = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DashboardSummary",
      ) as DashboardSummary;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: DashboardSummary = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DashboardSummary",
        "",
      ) as DashboardSummary;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DashboardsApiListDashboardsRequest {
  /**
   * When `true`, this query only returns shared custom created
   * or cloned dashboards.
   * @type boolean
   */
  filterShared?: boolean;
  /**
   * When `true`, this query returns only deleted custom-created
   * or cloned dashboards. This parameter is incompatible with `filter[shared]`.
   * @type boolean
   */
  filterDeleted?: boolean;
  /**
   * The maximum number of dashboards returned in the list.
   * @type number
   */
  count?: number;
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   */
  start?: number;
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
   * Get all dashboards.
   *
   * **Note**: This query will only return custom created or cloned dashboards.
   * This query will not return preset dashboards.
   * @param param The request object
   */
  public listDashboards(
    param: DashboardsApiListDashboardsRequest = {},
    options?: Configuration,
  ): Promise<DashboardSummary> {
    const requestContextPromise = this.requestFactory.listDashboards(
      param.filterShared,
      param.filterDeleted,
      param.count,
      param.start,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDashboards(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listDashboards returning a generator with all the items.
   */
  public async *listDashboardsWithPagination(
    param: DashboardsApiListDashboardsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<DashboardSummaryDefinition> {
    let pageSize = 100;
    if (param.count !== undefined) {
      pageSize = param.count;
    }
    param.count = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listDashboards(
        param.filterShared,
        param.filterDeleted,
        param.count,
        param.start,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listDashboards(responseContext);
      const responseDashboards = response.dashboards;
      if (responseDashboards === undefined) {
        break;
      }
      const results = responseDashboards;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.start === undefined) {
        param.start = pageSize;
      } else {
        param.start = param.start + pageSize;
      }
    }
  }
}
