import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { AnnotationCreateRequest } from "../models/AnnotationCreateRequest";
import { AnnotationResponse } from "../models/AnnotationResponse";
import { AnnotationsResponse } from "../models/AnnotationsResponse";
import { AnnotationUpdateRequest } from "../models/AnnotationUpdateRequest";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { PageAnnotationsResponse } from "../models/PageAnnotationsResponse";

export class AnnotationsApiRequestFactory extends BaseAPIRequestFactory {
  public async createAnnotation(
    body: AnnotationCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAnnotation'");
    if (!_config.unstableOperations["v2.createAnnotation"]) {
      throw new Error("Unstable operation 'createAnnotation' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAnnotation");
    }

    // Path Params
    const localVarPath = "/api/v2/annotation";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AnnotationsApi.createAnnotation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AnnotationCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteAnnotation(
    annotationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAnnotation'");
    if (!_config.unstableOperations["v2.deleteAnnotation"]) {
      throw new Error("Unstable operation 'deleteAnnotation' is disabled");
    }

    // verify required parameter 'annotationId' is not null or undefined
    if (annotationId === null || annotationId === undefined) {
      throw new RequiredError("annotationId", "deleteAnnotation");
    }

    // Path Params
    const localVarPath = "/api/v2/annotation/{annotation_id}".replace(
      "{annotation_id}",
      encodeURIComponent(String(annotationId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AnnotationsApi.deleteAnnotation")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getPageAnnotations(
    pageId: string,
    startTime: number,
    endTime: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getPageAnnotations'");
    if (!_config.unstableOperations["v2.getPageAnnotations"]) {
      throw new Error("Unstable operation 'getPageAnnotations' is disabled");
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getPageAnnotations");
    }

    // verify required parameter 'startTime' is not null or undefined
    if (startTime === null || startTime === undefined) {
      throw new RequiredError("startTime", "getPageAnnotations");
    }

    // verify required parameter 'endTime' is not null or undefined
    if (endTime === null || endTime === undefined) {
      throw new RequiredError("endTime", "getPageAnnotations");
    }

    // Path Params
    const localVarPath = "/api/v2/annotation/page/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AnnotationsApi.getPageAnnotations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startTime !== undefined) {
      requestContext.setQueryParam(
        "start_time",
        ObjectSerializer.serialize(startTime, "number", "int64"),
        ""
      );
    }
    if (endTime !== undefined) {
      requestContext.setQueryParam(
        "end_time",
        ObjectSerializer.serialize(endTime, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAnnotations(
    pageId: string,
    startTime: number,
    endTime: number,
    widgetId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAnnotations'");
    if (!_config.unstableOperations["v2.listAnnotations"]) {
      throw new Error("Unstable operation 'listAnnotations' is disabled");
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "listAnnotations");
    }

    // verify required parameter 'startTime' is not null or undefined
    if (startTime === null || startTime === undefined) {
      throw new RequiredError("startTime", "listAnnotations");
    }

    // verify required parameter 'endTime' is not null or undefined
    if (endTime === null || endTime === undefined) {
      throw new RequiredError("endTime", "listAnnotations");
    }

    // Path Params
    const localVarPath = "/api/v2/annotation";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AnnotationsApi.listAnnotations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageId !== undefined) {
      requestContext.setQueryParam(
        "page_id",
        ObjectSerializer.serialize(pageId, "string", ""),
        ""
      );
    }
    if (startTime !== undefined) {
      requestContext.setQueryParam(
        "start_time",
        ObjectSerializer.serialize(startTime, "number", "int64"),
        ""
      );
    }
    if (endTime !== undefined) {
      requestContext.setQueryParam(
        "end_time",
        ObjectSerializer.serialize(endTime, "number", "int64"),
        ""
      );
    }
    if (widgetId !== undefined) {
      requestContext.setQueryParam(
        "widget_id",
        ObjectSerializer.serialize(widgetId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateAnnotation(
    annotationId: string,
    body: AnnotationUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAnnotation'");
    if (!_config.unstableOperations["v2.updateAnnotation"]) {
      throw new Error("Unstable operation 'updateAnnotation' is disabled");
    }

    // verify required parameter 'annotationId' is not null or undefined
    if (annotationId === null || annotationId === undefined) {
      throw new RequiredError("annotationId", "updateAnnotation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAnnotation");
    }

    // Path Params
    const localVarPath = "/api/v2/annotation/{annotation_id}".replace(
      "{annotation_id}",
      encodeURIComponent(String(annotationId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AnnotationsApi.updateAnnotation")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AnnotationUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class AnnotationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAnnotation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAnnotation(
    response: ResponseContext
  ): Promise<AnnotationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnnotationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnnotationResponse"
      ) as AnnotationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AnnotationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnnotationResponse",
        ""
      ) as AnnotationResponse;
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
   * @params response Response returned by the server for a request to deleteAnnotation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAnnotation(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to getPageAnnotations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPageAnnotations(
    response: ResponseContext
  ): Promise<PageAnnotationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PageAnnotationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PageAnnotationsResponse"
      ) as PageAnnotationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: PageAnnotationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PageAnnotationsResponse",
        ""
      ) as PageAnnotationsResponse;
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
   * @params response Response returned by the server for a request to listAnnotations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAnnotations(
    response: ResponseContext
  ): Promise<AnnotationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnnotationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnnotationsResponse"
      ) as AnnotationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AnnotationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnnotationsResponse",
        ""
      ) as AnnotationsResponse;
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
   * @params response Response returned by the server for a request to updateAnnotation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAnnotation(
    response: ResponseContext
  ): Promise<AnnotationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnnotationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnnotationResponse"
      ) as AnnotationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AnnotationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnnotationResponse",
        ""
      ) as AnnotationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AnnotationsApiCreateAnnotationRequest {
  /**
   * Annotation to create.
   * @type AnnotationCreateRequest
   */
  body: AnnotationCreateRequest;
}

export interface AnnotationsApiDeleteAnnotationRequest {
  /**
   * The ID of the annotation.
   * @type string
   */
  annotationId: string;
}

export interface AnnotationsApiGetPageAnnotationsRequest {
  /**
   * The ID of the page, prefixed with the page type and joined by a colon
   * (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`).
   * @type string
   */
  pageId: string;
  /**
   * Start of the time window in milliseconds since the Unix epoch.
   * @type number
   */
  startTime: number;
  /**
   * End of the time window in milliseconds since the Unix epoch.
   * @type number
   */
  endTime: number;
}

export interface AnnotationsApiListAnnotationsRequest {
  /**
   * ID of the page to list annotations for, prefixed with the page type and joined by a colon
   * (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`).
   * @type string
   */
  pageId: string;
  /**
   * Start of the time window in milliseconds since the Unix epoch.
   * @type number
   */
  startTime: number;
  /**
   * End of the time window in milliseconds since the Unix epoch.
   * @type number
   */
  endTime: number;
  /**
   * Optional widget ID to restrict results to annotations on a specific widget.
   * @type string
   */
  widgetId?: string;
}

export interface AnnotationsApiUpdateAnnotationRequest {
  /**
   * The ID of the annotation.
   * @type string
   */
  annotationId: string;
  /**
   * Updated annotation payload.
   * @type AnnotationUpdateRequest
   */
  body: AnnotationUpdateRequest;
}

export class AnnotationsApi {
  private requestFactory: AnnotationsApiRequestFactory;
  private responseProcessor: AnnotationsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AnnotationsApiRequestFactory,
    responseProcessor?: AnnotationsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AnnotationsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AnnotationsApiResponseProcessor();
  }

  /**
   * Creates a new annotation on a dashboard or notebook page.
   * Valid `color` values: `gray`, `blue`, `purple`, `green`, `yellow`, `red`.
   * Valid `type` values: `pointInTime` (marks a single moment) or `timeRegion` (spans a range and requires `end_time`).
   * @param param The request object
   */
  public createAnnotation(
    param: AnnotationsApiCreateAnnotationRequest,
    options?: Configuration
  ): Promise<AnnotationResponse> {
    const requestContextPromise = this.requestFactory.createAnnotation(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAnnotation(responseContext);
        });
    });
  }

  /**
   * Deletes an existing annotation by ID.
   * Returns `204 No Content` if the annotation does not exist (idempotent).
   * @param param The request object
   */
  public deleteAnnotation(
    param: AnnotationsApiDeleteAnnotationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAnnotation(
      param.annotationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAnnotation(responseContext);
        });
    });
  }

  /**
   * Returns all annotations on a specific page for a given time window, grouped by widget.
   * Unlike `ListAnnotations`, this endpoint returns a single structured object with annotations
   * indexed by their ID and a widget-to-annotation mapping for easy UI rendering.
   * @param param The request object
   */
  public getPageAnnotations(
    param: AnnotationsApiGetPageAnnotationsRequest,
    options?: Configuration
  ): Promise<PageAnnotationsResponse> {
    const requestContextPromise = this.requestFactory.getPageAnnotations(
      param.pageId,
      param.startTime,
      param.endTime,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPageAnnotations(responseContext);
        });
    });
  }

  /**
   * Returns a flat list of annotations matching the given page, time window, and optional widget filter.
   * @param param The request object
   */
  public listAnnotations(
    param: AnnotationsApiListAnnotationsRequest,
    options?: Configuration
  ): Promise<AnnotationsResponse> {
    const requestContextPromise = this.requestFactory.listAnnotations(
      param.pageId,
      param.startTime,
      param.endTime,
      param.widgetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAnnotations(responseContext);
        });
    });
  }

  /**
   * Updates an existing annotation.
   * Valid `color` values: `gray`, `blue`, `purple`, `green`, `yellow`, `red`.
   * Valid `type` values: `pointInTime` (marks a single moment) or `timeRegion` (spans a range and requires `end_time`).
   * @param param The request object
   */
  public updateAnnotation(
    param: AnnotationsApiUpdateAnnotationRequest,
    options?: Configuration
  ): Promise<AnnotationResponse> {
    const requestContextPromise = this.requestFactory.updateAnnotation(
      param.annotationId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAnnotation(responseContext);
        });
    });
  }
}
