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
import { CsmCloudAccountsCoverageAnalysisResponse } from "./models/CsmCloudAccountsCoverageAnalysisResponse";
import { CsmHostsAndContainersCoverageAnalysisResponse } from "./models/CsmHostsAndContainersCoverageAnalysisResponse";
import { CsmServerlessCoverageAnalysisResponse } from "./models/CsmServerlessCoverageAnalysisResponse";
import { version } from "../version";

export class CSMCoverageAnalysisApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("csm-coverage-analysis", version);
    }
  }
  public async getCSMCloudAccountsCoverageAnalysis(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/csm/onboarding/coverage_analysis/cloud_accounts";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "CSMCoverageAnalysisApi.v2.getCSMCloudAccountsCoverageAnalysis",
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async getCSMHostsAndContainersCoverageAnalysis(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/csm/onboarding/coverage_analysis/hosts_and_containers";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "CSMCoverageAnalysisApi.v2.getCSMHostsAndContainersCoverageAnalysis",
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async getCSMServerlessCoverageAnalysis(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/csm/onboarding/coverage_analysis/serverless";

    // Make Request Context
    const requestContext = _config
      .getServer("CSMCoverageAnalysisApi.v2.getCSMServerlessCoverageAnalysis")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

export class CSMCoverageAnalysisApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCSMCloudAccountsCoverageAnalysis
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCSMCloudAccountsCoverageAnalysis(
    response: ResponseContext,
  ): Promise<CsmCloudAccountsCoverageAnalysisResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmCloudAccountsCoverageAnalysisResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmCloudAccountsCoverageAnalysisResponse",
      ) as CsmCloudAccountsCoverageAnalysisResponse;
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
      const body: CsmCloudAccountsCoverageAnalysisResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmCloudAccountsCoverageAnalysisResponse",
        "",
      ) as CsmCloudAccountsCoverageAnalysisResponse;
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
   * @params response Response returned by the server for a request to getCSMHostsAndContainersCoverageAnalysis
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCSMHostsAndContainersCoverageAnalysis(
    response: ResponseContext,
  ): Promise<CsmHostsAndContainersCoverageAnalysisResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmHostsAndContainersCoverageAnalysisResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmHostsAndContainersCoverageAnalysisResponse",
      ) as CsmHostsAndContainersCoverageAnalysisResponse;
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
      const body: CsmHostsAndContainersCoverageAnalysisResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmHostsAndContainersCoverageAnalysisResponse",
        "",
      ) as CsmHostsAndContainersCoverageAnalysisResponse;
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
   * @params response Response returned by the server for a request to getCSMServerlessCoverageAnalysis
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCSMServerlessCoverageAnalysis(
    response: ResponseContext,
  ): Promise<CsmServerlessCoverageAnalysisResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmServerlessCoverageAnalysisResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmServerlessCoverageAnalysisResponse",
      ) as CsmServerlessCoverageAnalysisResponse;
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
      const body: CsmServerlessCoverageAnalysisResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmServerlessCoverageAnalysisResponse",
        "",
      ) as CsmServerlessCoverageAnalysisResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export class CSMCoverageAnalysisApi {
  private requestFactory: CSMCoverageAnalysisApiRequestFactory;
  private responseProcessor: CSMCoverageAnalysisApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CSMCoverageAnalysisApiRequestFactory,
    responseProcessor?: CSMCoverageAnalysisApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CSMCoverageAnalysisApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CSMCoverageAnalysisApiResponseProcessor();
  }

  /**
   * Get the CSM Coverage Analysis of your Cloud Accounts.
   * This is calculated based on the number of your Cloud Accounts that are
   * scanned for security issues.
   * @param param The request object
   */
  public getCSMCloudAccountsCoverageAnalysis(
    options?: Configuration,
  ): Promise<CsmCloudAccountsCoverageAnalysisResponse> {
    const requestContextPromise =
      this.requestFactory.getCSMCloudAccountsCoverageAnalysis(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCSMCloudAccountsCoverageAnalysis(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the CSM Coverage Analysis of your Hosts and Containers.
   * This is calculated based on the number of agents running on your Hosts
   * and Containers with CSM feature(s) enabled.
   * @param param The request object
   */
  public getCSMHostsAndContainersCoverageAnalysis(
    options?: Configuration,
  ): Promise<CsmHostsAndContainersCoverageAnalysisResponse> {
    const requestContextPromise =
      this.requestFactory.getCSMHostsAndContainersCoverageAnalysis(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCSMHostsAndContainersCoverageAnalysis(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the CSM Coverage Analysis of your Serverless Resources.
   * This is calculated based on the number of agents running on your Serverless
   * Resources with CSM feature(s) enabled.
   * @param param The request object
   */
  public getCSMServerlessCoverageAnalysis(
    options?: Configuration,
  ): Promise<CsmServerlessCoverageAnalysisResponse> {
    const requestContextPromise =
      this.requestFactory.getCSMServerlessCoverageAnalysis(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCSMServerlessCoverageAnalysis(
            responseContext,
          );
        });
    });
  }
}
