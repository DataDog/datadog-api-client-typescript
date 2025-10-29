import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { Segment } from "../models/Segment";
import { SegmentArray } from "../models/SegmentArray";

export class SegmentsApiRequestFactory extends BaseAPIRequestFactory {
  public async createRumSegment(
    body: Segment,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createRumSegment'");
    if (!_config.unstableOperations["v2.createRumSegment"]) {
      throw new Error("Unstable operation 'createRumSegment' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SegmentsApi.createRumSegment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Segment", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }

  public async initializeRumSegments(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'initializeRumSegments'");
    if (!_config.unstableOperations["v2.initializeRumSegments"]) {
      throw new Error("Unstable operation 'initializeRumSegments' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment/initialize";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SegmentsApi.initializeRumSegments")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    return requestContext;
  }

  public async listRumSegments(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listRumSegments'");
    if (!_config.unstableOperations["v2.listRumSegments"]) {
      throw new Error("Unstable operation 'listRumSegments' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/segment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SegmentsApi.listRumSegments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Segment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Segment"
      ) as Segment;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Segment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Segment",
        ""
      ) as Segment;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
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
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<SegmentArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SegmentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SegmentArray"
      ) as SegmentArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SegmentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SegmentArray",
        ""
      ) as SegmentArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: SegmentsApiRequestFactory,
    responseProcessor?: SegmentsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SegmentsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SegmentsApiResponseProcessor();
  }

  /**
   * Create a new user segment for audience targeting
   * @param param The request object
   */
  public createRumSegment(
    param: SegmentsApiCreateRumSegmentRequest,
    options?: Configuration
  ): Promise<Segment> {
    const requestContextPromise = this.requestFactory.createRumSegment(
      param.body,
      options
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
