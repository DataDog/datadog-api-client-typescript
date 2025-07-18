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

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CreatePageRequest } from "../models/CreatePageRequest";
import { CreatePageResponse } from "../models/CreatePageResponse";

export class OnCallPagingApiRequestFactory extends BaseAPIRequestFactory {
  public async acknowledgeOnCallPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "acknowledgeOnCallPage");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/pages/{page_id}/acknowledge".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallPagingApi.acknowledgeOnCallPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createOnCallPage(
    body: CreatePageRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallPage");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/pages";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallPagingApi.createOnCallPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreatePageRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async escalateOnCallPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "escalateOnCallPage");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/pages/{page_id}/escalate".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallPagingApi.escalateOnCallPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async resolveOnCallPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "resolveOnCallPage");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/pages/{page_id}/resolve".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallPagingApi.resolveOnCallPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class OnCallPagingApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to acknowledgeOnCallPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async acknowledgeOnCallPage(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to createOnCallPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallPage(
    response: ResponseContext
  ): Promise<CreatePageResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CreatePageResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreatePageResponse"
      ) as CreatePageResponse;
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
      const body: CreatePageResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreatePageResponse",
        ""
      ) as CreatePageResponse;
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
   * @params response Response returned by the server for a request to escalateOnCallPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async escalateOnCallPage(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to resolveOnCallPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async resolveOnCallPage(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OnCallPagingApiAcknowledgeOnCallPageRequest {
  /**
   * The page ID.
   * @type string
   */
  pageId: string;
}

export interface OnCallPagingApiCreateOnCallPageRequest {
  /**
   * @type CreatePageRequest
   */
  body: CreatePageRequest;
}

export interface OnCallPagingApiEscalateOnCallPageRequest {
  /**
   * The page ID.
   * @type string
   */
  pageId: string;
}

export interface OnCallPagingApiResolveOnCallPageRequest {
  /**
   * The page ID.
   * @type string
   */
  pageId: string;
}

export class OnCallPagingApi {
  private requestFactory: OnCallPagingApiRequestFactory;
  private responseProcessor: OnCallPagingApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OnCallPagingApiRequestFactory,
    responseProcessor?: OnCallPagingApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OnCallPagingApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OnCallPagingApiResponseProcessor();
  }

  /**
   * Acknowledges an On-Call Page.
   * @param param The request object
   */
  public acknowledgeOnCallPage(
    param: OnCallPagingApiAcknowledgeOnCallPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.acknowledgeOnCallPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.acknowledgeOnCallPage(responseContext);
        });
    });
  }

  /**
   * Trigger a new On-Call Page.
   * @param param The request object
   */
  public createOnCallPage(
    param: OnCallPagingApiCreateOnCallPageRequest,
    options?: Configuration
  ): Promise<CreatePageResponse> {
    const requestContextPromise = this.requestFactory.createOnCallPage(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallPage(responseContext);
        });
    });
  }

  /**
   * Escalates an On-Call Page.
   * @param param The request object
   */
  public escalateOnCallPage(
    param: OnCallPagingApiEscalateOnCallPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.escalateOnCallPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.escalateOnCallPage(responseContext);
        });
    });
  }

  /**
   * Resolves an On-Call Page.
   * @param param The request object
   */
  public resolveOnCallPage(
    param: OnCallPagingApiResolveOnCallPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.resolveOnCallPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.resolveOnCallPage(responseContext);
        });
    });
  }
}
