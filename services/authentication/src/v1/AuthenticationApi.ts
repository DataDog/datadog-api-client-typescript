import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AuthenticationValidationResponse } from "./models/AuthenticationValidationResponse";
import { version } from "../version";

export class AuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("authentication", version);
    }
  }
  public async validate(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/validate";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.AuthenticationApi.validate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class AuthenticationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to validate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validate(
    response: ResponseContext,
  ): Promise<AuthenticationValidationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AuthenticationValidationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AuthenticationValidationResponse",
      ) as AuthenticationValidationResponse;
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
      const body: AuthenticationValidationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AuthenticationValidationResponse",
        "",
      ) as AuthenticationValidationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export class AuthenticationApi {
  private requestFactory: AuthenticationApiRequestFactory;
  private responseProcessor: AuthenticationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: AuthenticationApiRequestFactory,
    responseProcessor?: AuthenticationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AuthenticationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AuthenticationApiResponseProcessor();
  }

  /**
   * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
   * @param param The request object
   */
  public validate(
    options?: Configuration,
  ): Promise<AuthenticationValidationResponse> {
    const requestContextPromise = this.requestFactory.validate(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validate(responseContext);
        });
    });
  }
}
