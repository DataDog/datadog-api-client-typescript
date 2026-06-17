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
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { IntakeAPIKeyResponse } from "./models/IntakeAPIKeyResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class IntakeKeyApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("intake-key", version);
    }
  }
  public async getIntakeKey(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/intake-key";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IntakeKeyApi.v2.getIntakeKey",
      IntakeKeyApi.operationServers,
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

    return requestContext;
  }
}

export class IntakeKeyApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIntakeKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIntakeKey(
    response: ResponseContext,
  ): Promise<IntakeAPIKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IntakeAPIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntakeAPIKeyResponse",
      ) as IntakeAPIKeyResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
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
      const body: IntakeAPIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntakeAPIKeyResponse",
        "",
      ) as IntakeAPIKeyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export class IntakeKeyApi {
  private requestFactory: IntakeKeyApiRequestFactory;
  private responseProcessor: IntakeKeyApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: IntakeKeyApiRequestFactory,
    responseProcessor?: IntakeKeyApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new IntakeKeyApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new IntakeKeyApiResponseProcessor();
  }

  /**
   * Exchanges a Workload Identity Federation (WIF) identity proof for a Datadog API key associated with the matching WIF intake mapping.
   *
   * Pass a cloud-provider token in the `Authorization` header using the `Bearer` or `Delegated` scheme.
   * The token is validated against the WIF intake mappings configured for the caller's organization. On success,
   * a managed-rotation API key is returned that the workload can use to send telemetry to Datadog.
   *
   * Unlike the delegated-token endpoint (`POST /api/v2/delegated-token`), this endpoint authenticates
   * the cloud workload at the organization level rather than mapping it to a specific Datadog user.
   *
   * Standard Datadog API and application key authentication is not accepted. Authenticate using a
   * cloud-provider token in the `Authorization: Bearer` header.
   * @param param The request object
   */
  public getIntakeKey(options?: Configuration): Promise<IntakeAPIKeyResponse> {
    const requestContextPromise = this.requestFactory.getIntakeKey(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIntakeKey(responseContext);
        });
    });
  }
}
