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
import { Segment } from "./models/Segment";
import { SegmentArray } from "./models/SegmentArray";
import { version } from "../version";

export class SegmentsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("segments", version);
    }
  }
  public async createRumSegment(
    body: Segment,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SegmentsApi.v2.createRumSegment"]) {
      throw new Error(
        "Unstable operation 'createRumSegment' is disabled. Enable it by setting `configuration.unstableOperations['SegmentsApi.v2.createRumSegment'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SegmentsApi.v2.createRumSegment",
      SegmentsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Segment", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }

  public async initializeRumSegments(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SegmentsApi.v2.initializeRumSegments"]) {
      throw new Error(
        "Unstable operation 'initializeRumSegments' is disabled. Enable it by setting `configuration.unstableOperations['SegmentsApi.v2.initializeRumSegments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/initialize";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SegmentsApi.v2.initializeRumSegments",
      SegmentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    return requestContext;
  }

  public async listRumSegments(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SegmentsApi.v2.listRumSegments"]) {
      throw new Error(
        "Unstable operation 'listRumSegments' is disabled. Enable it by setting `configuration.unstableOperations['SegmentsApi.v2.listRumSegments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SegmentsApi.v2.listRumSegments",
      SegmentsApi.operationServers,
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

    return requestContext;
  }
}

export class SegmentsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRumSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumSegment(response: ResponseContext): Promise<Segment> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: Segment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Segment",
      ) as Segment;
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
      const body: Segment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Segment",
        "",
      ) as Segment;
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
   * @params response Response returned by the server for a request to initializeRumSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async initializeRumSegments(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to listRumSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumSegments(
    response: ResponseContext,
  ): Promise<SegmentArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SegmentArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentArray",
      ) as SegmentArray;
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
      const body: SegmentArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentArray",
        "",
      ) as SegmentArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SegmentsApiCreateRumSegmentRequest {
  /**
   * @type Segment
   */
  body: Segment;
}

export class SegmentsApi {
  private requestFactory: SegmentsApiRequestFactory;
  private responseProcessor: SegmentsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SegmentsApiRequestFactory,
    responseProcessor?: SegmentsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new SegmentsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SegmentsApiResponseProcessor();
  }

  /**
   * Create a new user segment for audience targeting
   * @param param The request object
   */
  public createRumSegment(
    param: SegmentsApiCreateRumSegmentRequest,
    options?: Configuration,
  ): Promise<Segment> {
    const requestContextPromise = this.requestFactory.createRumSegment(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumSegment(responseContext);
        });
    });
  }

  /**
   * Initialize default segments for a new organization
   * @param param The request object
   */
  public initializeRumSegments(options?: Configuration): Promise<void> {
    const requestContextPromise =
      this.requestFactory.initializeRumSegments(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.initializeRumSegments(responseContext);
        });
    });
  }

  /**
   * List all available user segments for audience targeting
   * @param param The request object
   */
  public listRumSegments(options?: Configuration): Promise<SegmentArray> {
    const requestContextPromise = this.requestFactory.listRumSegments(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumSegments(responseContext);
        });
    });
  }
}
