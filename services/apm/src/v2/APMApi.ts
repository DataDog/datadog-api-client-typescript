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
import { ServiceList } from "./models/ServiceList";
import { version } from "../version";

export class APMApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("apm", version);
    }
  }
  public async getServiceList(
    filterEnv: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterEnv' is not null or undefined
    if (filterEnv === null || filterEnv === undefined) {
      throw new RequiredError("filterEnv", "getServiceList");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/services";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "APMApi.v2.getServiceList",
      APMApi.operationServers,
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
    if (filterEnv !== undefined) {
      requestContext.setQueryParam(
        "filter[env]",
        serialize(filterEnv, TypingInfo, "string", ""),
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

export class APMApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getServiceList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceList(response: ResponseContext): Promise<ServiceList> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceList = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceList",
      ) as ServiceList;
      return body;
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
      const body: ServiceList = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceList",
        "",
      ) as ServiceList;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface APMApiGetServiceListRequest {
  /**
   * Filter services by environment. Can be set to `*` to return all services across all environments.
   * @type string
   */
  filterEnv: string;
}

export class APMApi {
  private requestFactory: APMApiRequestFactory;
  private responseProcessor: APMApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: APMApiRequestFactory,
    responseProcessor?: APMApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new APMApiRequestFactory(this.configuration);
    this.responseProcessor = responseProcessor || new APMApiResponseProcessor();
  }

  /**
   * @param param The request object
   */
  public getServiceList(
    param: APMApiGetServiceListRequest,
    options?: Configuration,
  ): Promise<ServiceList> {
    const requestContextPromise = this.requestFactory.getServiceList(
      param.filterEnv,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getServiceList(responseContext);
        });
    });
  }
}
