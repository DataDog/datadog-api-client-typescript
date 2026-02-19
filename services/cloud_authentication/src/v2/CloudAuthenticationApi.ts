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
import { AWSCloudAuthPersonaMappingsResponse } from "./models/AWSCloudAuthPersonaMappingsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class CloudAuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-authentication", version);
    }
  }
  public async listAWSCloudAuthPersonaMappings(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listAWSCloudAuthPersonaMappings' is disabled. Enable it by setting `configuration.unstableOperations['CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/aws/persona_mapping";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings",
      CloudAuthenticationApi.operationServers,
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

export class CloudAuthenticationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAWSCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSCloudAuthPersonaMappings(
    response: ResponseContext,
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingsResponse",
      ) as AWSCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: AWSCloudAuthPersonaMappingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingsResponse",
        "",
      ) as AWSCloudAuthPersonaMappingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export class CloudAuthenticationApi {
  private requestFactory: CloudAuthenticationApiRequestFactory;
  private responseProcessor: CloudAuthenticationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CloudAuthenticationApiRequestFactory,
    responseProcessor?: CloudAuthenticationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CloudAuthenticationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CloudAuthenticationApiResponseProcessor();
  }

  /**
   * List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.
   * @param param The request object
   */
  public listAWSCloudAuthPersonaMappings(
    options?: Configuration,
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSCloudAuthPersonaMappings(
            responseContext,
          );
        });
    });
  }
}
