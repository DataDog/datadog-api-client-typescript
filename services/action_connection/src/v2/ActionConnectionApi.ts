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
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { CreateActionConnectionRequest } from "./models/CreateActionConnectionRequest";
import { CreateActionConnectionResponse } from "./models/CreateActionConnectionResponse";
import { GetActionConnectionResponse } from "./models/GetActionConnectionResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { UpdateActionConnectionRequest } from "./models/UpdateActionConnectionRequest";
import { UpdateActionConnectionResponse } from "./models/UpdateActionConnectionResponse";

export class ActionConnectionApiRequestFactory extends BaseAPIRequestFactory {
  public async createActionConnection(
    body: CreateActionConnectionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionConnectionApi.createActionConnection")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CreateActionConnectionRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteActionConnection(
    connectionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "deleteActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionConnectionApi.deleteActionConnection")
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

  public async getActionConnection(
    connectionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "getActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionConnectionApi.getActionConnection")
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

  public async updateActionConnection(
    connectionId: string,
    body: UpdateActionConnectionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "updateActionConnection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionConnectionApi.updateActionConnection")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "UpdateActionConnectionRequest", ""),
      contentType,
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

export class ActionConnectionApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createActionConnection(
    response: ResponseContext,
  ): Promise<CreateActionConnectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 201) {
      const body: CreateActionConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateActionConnectionResponse",
      ) as CreateActionConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CreateActionConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateActionConnectionResponse",
        "",
      ) as CreateActionConnectionResponse;
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
   * @params response Response returned by the server for a request to deleteActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteActionConnection(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
   * @params response Response returned by the server for a request to getActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getActionConnection(
    response: ResponseContext,
  ): Promise<GetActionConnectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: GetActionConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetActionConnectionResponse",
      ) as GetActionConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetActionConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetActionConnectionResponse",
        "",
      ) as GetActionConnectionResponse;
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
   * @params response Response returned by the server for a request to updateActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateActionConnection(
    response: ResponseContext,
  ): Promise<UpdateActionConnectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateActionConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateActionConnectionResponse",
      ) as UpdateActionConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UpdateActionConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateActionConnectionResponse",
        "",
      ) as UpdateActionConnectionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ActionConnectionApiCreateActionConnectionRequest {
  /**
   * @type CreateActionConnectionRequest
   */
  body: CreateActionConnectionRequest;
}

export interface ActionConnectionApiDeleteActionConnectionRequest {
  /**
   * The ID of the action connection
   * @type string
   */
  connectionId: string;
}

export interface ActionConnectionApiGetActionConnectionRequest {
  /**
   * The ID of the action connection
   * @type string
   */
  connectionId: string;
}

export interface ActionConnectionApiUpdateActionConnectionRequest {
  /**
   * The ID of the action connection
   * @type string
   */
  connectionId: string;
  /**
   * Update an existing Action Connection request body
   * @type UpdateActionConnectionRequest
   */
  body: UpdateActionConnectionRequest;
}

export class ActionConnectionApi {
  private requestFactory: ActionConnectionApiRequestFactory;
  private responseProcessor: ActionConnectionApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ActionConnectionApiRequestFactory,
    responseProcessor?: ActionConnectionApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ActionConnectionApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ActionConnectionApiResponseProcessor();
  }

  /**
   * Create a new Action Connection
   * @param param The request object
   */
  public createActionConnection(
    param: ActionConnectionApiCreateActionConnectionRequest,
    options?: Configuration,
  ): Promise<CreateActionConnectionResponse> {
    const requestContextPromise = this.requestFactory.createActionConnection(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createActionConnection(responseContext);
        });
    });
  }

  /**
   * Delete an existing Action Connection
   * @param param The request object
   */
  public deleteActionConnection(
    param: ActionConnectionApiDeleteActionConnectionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteActionConnection(
      param.connectionId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteActionConnection(responseContext);
        });
    });
  }

  /**
   * Get an existing Action Connection
   * @param param The request object
   */
  public getActionConnection(
    param: ActionConnectionApiGetActionConnectionRequest,
    options?: Configuration,
  ): Promise<GetActionConnectionResponse> {
    const requestContextPromise = this.requestFactory.getActionConnection(
      param.connectionId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getActionConnection(responseContext);
        });
    });
  }

  /**
   * Update an existing Action Connection
   * @param param The request object
   */
  public updateActionConnection(
    param: ActionConnectionApiUpdateActionConnectionRequest,
    options?: Configuration,
  ): Promise<UpdateActionConnectionResponse> {
    const requestContextPromise = this.requestFactory.updateActionConnection(
      param.connectionId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateActionConnection(responseContext);
        });
    });
  }
}
