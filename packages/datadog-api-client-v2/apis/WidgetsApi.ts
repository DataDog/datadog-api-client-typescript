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
import { CreateOrUpdateWidgetRequestJSONAPIRequestDocument } from "../models/CreateOrUpdateWidgetRequestJSONAPIRequestDocument";
import { WidgetExperienceType } from "../models/WidgetExperienceType";
import { WidgetSchemaJSONAPIDocument } from "../models/WidgetSchemaJSONAPIDocument";
import { WidgetSchemaJSONAPIListDocument } from "../models/WidgetSchemaJSONAPIListDocument";

export class WidgetsApiRequestFactory extends BaseAPIRequestFactory {
  public async createWidgetApiV2WidgetsExperienceTypePost(
    experienceType: WidgetExperienceType,
    body: CreateOrUpdateWidgetRequestJSONAPIRequestDocument,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError(
        "experienceType",
        "createWidgetApiV2WidgetsExperienceTypePost"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createWidgetApiV2WidgetsExperienceTypePost"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}".replace(
      "{experience_type}",
      encodeURIComponent(String(experienceType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.createWidgetApiV2WidgetsExperienceTypePost")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "CreateOrUpdateWidgetRequestJSONAPIRequestDocument",
        ""
      ),
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

  public async deleteWidgetApiV2WidgetsExperienceTypeUuidDelete(
    uuid: string,
    experienceType: WidgetExperienceType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'uuid' is not null or undefined
    if (uuid === null || uuid === undefined) {
      throw new RequiredError(
        "uuid",
        "deleteWidgetApiV2WidgetsExperienceTypeUuidDelete"
      );
    }

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError(
        "experienceType",
        "deleteWidgetApiV2WidgetsExperienceTypeUuidDelete"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}/{uuid}"
      .replace("{uuid}", encodeURIComponent(String(uuid)))
      .replace("{experience_type}", encodeURIComponent(String(experienceType)));

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.WidgetsApi.deleteWidgetApiV2WidgetsExperienceTypeUuidDelete"
      )
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

  public async getWidgetApiV2WidgetsExperienceTypeUuidGet(
    uuid: string,
    experienceType: WidgetExperienceType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'uuid' is not null or undefined
    if (uuid === null || uuid === undefined) {
      throw new RequiredError(
        "uuid",
        "getWidgetApiV2WidgetsExperienceTypeUuidGet"
      );
    }

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError(
        "experienceType",
        "getWidgetApiV2WidgetsExperienceTypeUuidGet"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}/{uuid}"
      .replace("{uuid}", encodeURIComponent(String(uuid)))
      .replace("{experience_type}", encodeURIComponent(String(experienceType)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.getWidgetApiV2WidgetsExperienceTypeUuidGet")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchWidgetsApiV2WidgetsExperienceTypeGet(
    experienceType: WidgetExperienceType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError(
        "experienceType",
        "searchWidgetsApiV2WidgetsExperienceTypeGet"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}".replace(
      "{experience_type}",
      encodeURIComponent(String(experienceType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.searchWidgetsApiV2WidgetsExperienceTypeGet")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateWidgetApiV2WidgetsExperienceTypeUuidPut(
    uuid: string,
    experienceType: WidgetExperienceType,
    body: CreateOrUpdateWidgetRequestJSONAPIRequestDocument,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'uuid' is not null or undefined
    if (uuid === null || uuid === undefined) {
      throw new RequiredError(
        "uuid",
        "updateWidgetApiV2WidgetsExperienceTypeUuidPut"
      );
    }

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError(
        "experienceType",
        "updateWidgetApiV2WidgetsExperienceTypeUuidPut"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateWidgetApiV2WidgetsExperienceTypeUuidPut"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}/{uuid}"
      .replace("{uuid}", encodeURIComponent(String(uuid)))
      .replace("{experience_type}", encodeURIComponent(String(experienceType)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.updateWidgetApiV2WidgetsExperienceTypeUuidPut")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "CreateOrUpdateWidgetRequestJSONAPIRequestDocument",
        ""
      ),
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

export class WidgetsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createWidgetApiV2WidgetsExperienceTypePost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWidgetApiV2WidgetsExperienceTypePost(
    response: ResponseContext
  ): Promise<WidgetSchemaJSONAPIDocument> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetSchemaJSONAPIDocument = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetSchemaJSONAPIDocument"
      ) as WidgetSchemaJSONAPIDocument;
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
      const body: WidgetSchemaJSONAPIDocument = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetSchemaJSONAPIDocument",
        ""
      ) as WidgetSchemaJSONAPIDocument;
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
   * @params response Response returned by the server for a request to deleteWidgetApiV2WidgetsExperienceTypeUuidDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWidgetApiV2WidgetsExperienceTypeUuidDelete(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
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
   * @params response Response returned by the server for a request to getWidgetApiV2WidgetsExperienceTypeUuidGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWidgetApiV2WidgetsExperienceTypeUuidGet(
    response: ResponseContext
  ): Promise<WidgetSchemaJSONAPIDocument> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetSchemaJSONAPIDocument = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetSchemaJSONAPIDocument"
      ) as WidgetSchemaJSONAPIDocument;
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
      const body: WidgetSchemaJSONAPIDocument = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetSchemaJSONAPIDocument",
        ""
      ) as WidgetSchemaJSONAPIDocument;
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
   * @params response Response returned by the server for a request to searchWidgetsApiV2WidgetsExperienceTypeGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchWidgetsApiV2WidgetsExperienceTypeGet(
    response: ResponseContext
  ): Promise<WidgetSchemaJSONAPIListDocument> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetSchemaJSONAPIListDocument =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WidgetSchemaJSONAPIListDocument"
        ) as WidgetSchemaJSONAPIListDocument;
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
      const body: WidgetSchemaJSONAPIListDocument =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "WidgetSchemaJSONAPIListDocument",
          ""
        ) as WidgetSchemaJSONAPIListDocument;
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
   * @params response Response returned by the server for a request to updateWidgetApiV2WidgetsExperienceTypeUuidPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWidgetApiV2WidgetsExperienceTypeUuidPut(
    response: ResponseContext
  ): Promise<WidgetSchemaJSONAPIDocument> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetSchemaJSONAPIDocument = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetSchemaJSONAPIDocument"
      ) as WidgetSchemaJSONAPIDocument;
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
      const body: WidgetSchemaJSONAPIDocument = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetSchemaJSONAPIDocument",
        ""
      ) as WidgetSchemaJSONAPIDocument;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface WidgetsApiCreateWidgetApiV2WidgetsExperienceTypePostRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * @type CreateOrUpdateWidgetRequestJSONAPIRequestDocument
   */
  body: CreateOrUpdateWidgetRequestJSONAPIRequestDocument;
}

export interface WidgetsApiDeleteWidgetApiV2WidgetsExperienceTypeUuidDeleteRequest {
  /**
   * The UUID of the widget.
   * @type string
   */
  uuid: string;
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
}

export interface WidgetsApiGetWidgetApiV2WidgetsExperienceTypeUuidGetRequest {
  /**
   * The UUID of the widget.
   * @type string
   */
  uuid: string;
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
}

export interface WidgetsApiSearchWidgetsApiV2WidgetsExperienceTypeGetRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
}

export interface WidgetsApiUpdateWidgetApiV2WidgetsExperienceTypeUuidPutRequest {
  /**
   * The UUID of the widget.
   * @type string
   */
  uuid: string;
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * @type CreateOrUpdateWidgetRequestJSONAPIRequestDocument
   */
  body: CreateOrUpdateWidgetRequestJSONAPIRequestDocument;
}

export class WidgetsApi {
  private requestFactory: WidgetsApiRequestFactory;
  private responseProcessor: WidgetsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WidgetsApiRequestFactory,
    responseProcessor?: WidgetsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WidgetsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WidgetsApiResponseProcessor();
  }

  /**
   * Create a new widget for a given experience type.
   * @param param The request object
   */
  public createWidgetApiV2WidgetsExperienceTypePost(
    param: WidgetsApiCreateWidgetApiV2WidgetsExperienceTypePostRequest,
    options?: Configuration
  ): Promise<WidgetSchemaJSONAPIDocument> {
    const requestContextPromise =
      this.requestFactory.createWidgetApiV2WidgetsExperienceTypePost(
        param.experienceType,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWidgetApiV2WidgetsExperienceTypePost(
            responseContext
          );
        });
    });
  }

  /**
   * Soft-delete a widget by its UUID for a given experience type.
   * @param param The request object
   */
  public deleteWidgetApiV2WidgetsExperienceTypeUuidDelete(
    param: WidgetsApiDeleteWidgetApiV2WidgetsExperienceTypeUuidDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWidgetApiV2WidgetsExperienceTypeUuidDelete(
        param.uuid,
        param.experienceType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWidgetApiV2WidgetsExperienceTypeUuidDelete(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a widget by its UUID for a given experience type.
   * @param param The request object
   */
  public getWidgetApiV2WidgetsExperienceTypeUuidGet(
    param: WidgetsApiGetWidgetApiV2WidgetsExperienceTypeUuidGetRequest,
    options?: Configuration
  ): Promise<WidgetSchemaJSONAPIDocument> {
    const requestContextPromise =
      this.requestFactory.getWidgetApiV2WidgetsExperienceTypeUuidGet(
        param.uuid,
        param.experienceType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWidgetApiV2WidgetsExperienceTypeUuidGet(
            responseContext
          );
        });
    });
  }

  /**
   * Search and list widgets for a given experience type. Supports filtering by widget type, creator, title, and tags, as well as sorting and pagination.
   * @param param The request object
   */
  public searchWidgetsApiV2WidgetsExperienceTypeGet(
    param: WidgetsApiSearchWidgetsApiV2WidgetsExperienceTypeGetRequest,
    options?: Configuration
  ): Promise<WidgetSchemaJSONAPIListDocument> {
    const requestContextPromise =
      this.requestFactory.searchWidgetsApiV2WidgetsExperienceTypeGet(
        param.experienceType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchWidgetsApiV2WidgetsExperienceTypeGet(
            responseContext
          );
        });
    });
  }

  /**
   * Update a widget by its UUID for a given experience type. This performs a full replacement of the widget definition.
   * @param param The request object
   */
  public updateWidgetApiV2WidgetsExperienceTypeUuidPut(
    param: WidgetsApiUpdateWidgetApiV2WidgetsExperienceTypeUuidPutRequest,
    options?: Configuration
  ): Promise<WidgetSchemaJSONAPIDocument> {
    const requestContextPromise =
      this.requestFactory.updateWidgetApiV2WidgetsExperienceTypeUuidPut(
        param.uuid,
        param.experienceType,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWidgetApiV2WidgetsExperienceTypeUuidPut(
            responseContext
          );
        });
    });
  }
}
