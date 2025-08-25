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
import { RecommendationDocument } from "./models/RecommendationDocument";
import { version } from "../version";

export class SpaApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("spa", version);
    }
  }
  public async getSPARecommendations(
    shard: string,
    service: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SpaApi.v2.getSPARecommendations"]) {
      throw new Error(
        "Unstable operation 'getSPARecommendations' is disabled. Enable it by setting `configuration.unstableOperations['SpaApi.v2.getSPARecommendations'] = true`",
      );
    }

    // verify required parameter 'shard' is not null or undefined
    if (shard === null || shard === undefined) {
      throw new RequiredError("shard", "getSPARecommendations");
    }

    // verify required parameter 'service' is not null or undefined
    if (service === null || service === undefined) {
      throw new RequiredError("service", "getSPARecommendations");
    }

    // Path Params
    const localVarPath = "/api/v2/spa/recommendations/{service}/{shard}"
      .replace("{shard}", encodeURIComponent(String(shard)))
      .replace("{service}", encodeURIComponent(String(service)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SpaApi.v2.getSPARecommendations",
      SpaApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SpaApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSPARecommendations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSPARecommendations(
    response: ResponseContext,
  ): Promise<RecommendationDocument> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RecommendationDocument = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RecommendationDocument",
      ) as RecommendationDocument;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: RecommendationDocument = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RecommendationDocument",
        "",
      ) as RecommendationDocument;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SpaApiGetSPARecommendationsRequest {
  /**
   * The shard tag for a spark job, which differentiates jobs within the same service that have different resource needs
   * @type string
   */
  shard: string;
  /**
   * The service name for a spark job
   * @type string
   */
  service: string;
}

export class SpaApi {
  private requestFactory: SpaApiRequestFactory;
  private responseProcessor: SpaApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SpaApiRequestFactory,
    responseProcessor?: SpaApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new SpaApiRequestFactory(this.configuration);
    this.responseProcessor = responseProcessor || new SpaApiResponseProcessor();
  }

  /**
   * Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and shard identifier, and SPA returns structured recommendations for driver and executor resources.
   * @param param The request object
   */
  public getSPARecommendations(
    param: SpaApiGetSPARecommendationsRequest,
    options?: Configuration,
  ): Promise<RecommendationDocument> {
    const requestContextPromise = this.requestFactory.getSPARecommendations(
      param.shard,
      param.service,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSPARecommendations(responseContext);
        });
    });
  }
}
