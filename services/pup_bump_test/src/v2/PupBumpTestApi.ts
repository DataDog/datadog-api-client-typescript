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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { PupBumpTestResponse } from "./models/PupBumpTestResponse";
import { version } from "../version";

export class PupBumpTestApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("pup-bump-test", version);
    }
  }
  public async getPupBumpTest(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["PupBumpTestApi.v2.getPupBumpTest"]) {
      throw new Error(
        "Unstable operation 'getPupBumpTest' is disabled. Enable it by setting `configuration.unstableOperations['PupBumpTestApi.v2.getPupBumpTest'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/pup_bump_test";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "PupBumpTestApi.v2.getPupBumpTest",
      PupBumpTestApi.operationServers,
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

export class PupBumpTestApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getPupBumpTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPupBumpTest(
    response: ResponseContext,
  ): Promise<PupBumpTestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PupBumpTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PupBumpTestResponse",
      ) as PupBumpTestResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: PupBumpTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PupBumpTestResponse",
        "",
      ) as PupBumpTestResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export class PupBumpTestApi {
  private requestFactory: PupBumpTestApiRequestFactory;
  private responseProcessor: PupBumpTestApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: PupBumpTestApiRequestFactory,
    responseProcessor?: PupBumpTestApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new PupBumpTestApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new PupBumpTestApiResponseProcessor();
  }

  /**
   * Temporary test-only endpoint used to exercise the pup dependency-bump
   * generation and merge pipeline. Not a real product feature.
   * @param param The request object
   */
  public getPupBumpTest(options?: Configuration): Promise<PupBumpTestResponse> {
    const requestContextPromise = this.requestFactory.getPupBumpTest(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPupBumpTest(responseContext);
        });
    });
  }
}
