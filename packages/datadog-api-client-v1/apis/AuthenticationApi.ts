import { BaseAPIRequestFactory } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { AuthenticationValidationResponse } from "../models/AuthenticationValidationResponse";

export class AuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  public async validate(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/validate";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuthenticationApi.validate"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
    ]);

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
    response: ResponseContext
  ): Promise<AuthenticationValidationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuthenticationValidationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AuthenticationValidationResponse",
          ""
        ) as AuthenticationValidationResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthenticationValidationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AuthenticationValidationResponse",
          ""
        ) as AuthenticationValidationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export class AuthenticationApi {
  private requestFactory: AuthenticationApiRequestFactory;
  private responseProcessor: AuthenticationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthenticationApiRequestFactory,
    responseProcessor?: AuthenticationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AuthenticationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AuthenticationApiResponseProcessor();
  }

  /**
   * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
   * @param param The request object
   */
  public validate(
    options?: Configuration
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
