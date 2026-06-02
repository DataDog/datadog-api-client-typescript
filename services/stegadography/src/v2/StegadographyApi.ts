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
  HttpFile,
} from "@datadog/datadog-api-client";

import FormData from "form-data";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { StegadographyWidgetsResponse } from "./models/StegadographyWidgetsResponse";
import { version } from "../version";

export class StegadographyApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("stegadography", version);
    }
  }
  public async getWidgetsFromImage(
    image?: HttpFile,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StegadographyApi.v2.getWidgetsFromImage"]
    ) {
      throw new Error(
        "Unstable operation 'getWidgetsFromImage' is disabled. Enable it by setting `configuration.unstableOperations['StegadographyApi.v2.getWidgetsFromImage'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/stegadography/get-widgets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StegadographyApi.v2.getWidgetsFromImage",
      StegadographyApi.operationServers,
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

    // Form Params
    const localVarFormParams = new FormData();
    if (image !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append("image", image as any);
    }
    requestContext.setBody(localVarFormParams);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class StegadographyApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getWidgetsFromImage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWidgetsFromImage(
    response: ResponseContext,
  ): Promise<StegadographyWidgetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: StegadographyWidgetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StegadographyWidgetsResponse",
      ) as StegadographyWidgetsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 415 ||
      response.httpStatusCode === 500
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
      const body: StegadographyWidgetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StegadographyWidgetsResponse",
        "",
      ) as StegadographyWidgetsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface StegadographyApiGetWidgetsFromImageRequest {
  /**
   * The image to extract widget watermarks from.
   * @type HttpFile
   */
  image?: HttpFile;
}

export class StegadographyApi {
  private requestFactory: StegadographyApiRequestFactory;
  private responseProcessor: StegadographyApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: StegadographyApiRequestFactory,
    responseProcessor?: StegadographyApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new StegadographyApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new StegadographyApiResponseProcessor();
  }

  /**
   * Extracts embedded watermarks from an uploaded PNG image (for example, a dashboard screenshot)
   * and returns the cached widget state matching each watermark found.
   * @param param The request object
   */
  public getWidgetsFromImage(
    param: StegadographyApiGetWidgetsFromImageRequest = {},
    options?: Configuration,
  ): Promise<StegadographyWidgetsResponse> {
    const requestContextPromise = this.requestFactory.getWidgetsFromImage(
      param.image,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWidgetsFromImage(responseContext);
        });
    });
  }
}
