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
import { GovernanceInsightsResponse } from "./models/GovernanceInsightsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class GovernanceInsightsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("governance-insights", version);
    }
  }
  public async listGovernanceInsights(
    withValues?: boolean,
    orgUuid?: string,
    filterProduct?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "GovernanceInsightsApi.v2.listGovernanceInsights"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listGovernanceInsights' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceInsightsApi.v2.listGovernanceInsights'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance/insights";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GovernanceInsightsApi.v2.listGovernanceInsights",
      GovernanceInsightsApi.operationServers,
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
    if (withValues !== undefined) {
      requestContext.setQueryParam(
        "withValues",
        serialize(withValues, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (orgUuid !== undefined) {
      requestContext.setQueryParam(
        "orgUuid",
        serialize(orgUuid, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterProduct !== undefined) {
      requestContext.setQueryParam(
        "filter[product]",
        serialize(filterProduct, TypingInfo, "Array<string>", ""),
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

export class GovernanceInsightsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listGovernanceInsights
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceInsights(
    response: ResponseContext,
  ): Promise<GovernanceInsightsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GovernanceInsightsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceInsightsResponse",
      ) as GovernanceInsightsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: GovernanceInsightsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceInsightsResponse",
        "",
      ) as GovernanceInsightsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface GovernanceInsightsApiListGovernanceInsightsRequest {
  /**
   * Whether to compute and include the current and previous value of each insight.
   * Defaults to `false`, in which case only insight metadata is returned.
   * @type boolean
   */
  withValues?: boolean;
  /**
   * The UUID of the organization to compute insights for. Defaults to the organization of
   * the authenticated user. Used to retrieve insights for a child organization from a
   * parent organization.
   * @type string
   */
  orgUuid?: string;
  /**
   * Restrict the results to insights belonging to the given products. May be repeated to
   * filter by multiple products. Matching is case-insensitive.
   * @type Array<string>
   */
  filterProduct?: Array<string>;
}

export class GovernanceInsightsApi {
  private requestFactory: GovernanceInsightsApiRequestFactory;
  private responseProcessor: GovernanceInsightsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: GovernanceInsightsApiRequestFactory,
    responseProcessor?: GovernanceInsightsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new GovernanceInsightsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new GovernanceInsightsApiResponseProcessor();
  }

  /**
   * Retrieve the list of governance insights available to the organization. By default, only
   * insight metadata is returned; pass `withValues=true` to also compute and include each
   * insight's current and previous values. Insights can be filtered by product.
   * @param param The request object
   */
  public listGovernanceInsights(
    param: GovernanceInsightsApiListGovernanceInsightsRequest = {},
    options?: Configuration,
  ): Promise<GovernanceInsightsResponse> {
    const requestContextPromise = this.requestFactory.listGovernanceInsights(
      param.withValues,
      param.orgUuid,
      param.filterProduct,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceInsights(responseContext);
        });
    });
  }
}
