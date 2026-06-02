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
import { StegadographyGetWidgetsResponse } from "./models/StegadographyGetWidgetsResponse";
import { version } from "../version";

export class StegadographyApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("stegadography", version);
    }
  }
  public async getStegadographyWidgets(
    image: HttpFile,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'image' is not null or undefined
    if (image === null || image === undefined) {
      throw new RequiredError("image", "getStegadographyWidgets");
    }

    // Path Params
    const localVarPath = "/api/v2/stegadography/get-widgets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StegadographyApi.v2.getStegadographyWidgets",
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
   * @params response Response returned by the server for a request to getStegadographyWidgets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStegadographyWidgets(
    response: ResponseContext,
  ): Promise<StegadographyGetWidgetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: StegadographyGetWidgetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StegadographyGetWidgetsResponse",
      ) as StegadographyGetWidgetsResponse;
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
      const body: StegadographyGetWidgetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "StegadographyGetWidgetsResponse",
        "",
      ) as StegadographyGetWidgetsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface StegadographyApiGetStegadographyWidgetsRequest {
  /**
   * PNG image to extract watermarks from.
   * @type HttpFile
   */
  image: HttpFile;
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
   * Extracts watermarks from a PNG image and returns the cached widget data
   * associated with each watermark found. The image must be uploaded as a
   * `multipart/form-data` request with the file in the `image` field.
   * Only widgets belonging to the authenticated organization are returned.
   * @param param The request object
   */
  public getStegadographyWidgets(
    param: StegadographyApiGetStegadographyWidgetsRequest,
    options?: Configuration,
  ): Promise<StegadographyGetWidgetsResponse> {
    const requestContextPromise = this.requestFactory.getStegadographyWidgets(
      param.image,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStegadographyWidgets(
            responseContext,
          );
        });
    });
  }
}
