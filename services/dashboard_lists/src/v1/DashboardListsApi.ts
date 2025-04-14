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
import { APIErrorResponse } from "./models/APIErrorResponse";
import { DashboardList } from "./models/DashboardList";
import { DashboardListDeleteResponse } from "./models/DashboardListDeleteResponse";
import { DashboardListListResponse } from "./models/DashboardListListResponse";

export class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDashboardList(
    body: DashboardList,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDashboardList");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardListsApi.createDashboardList")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardList", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteDashboardList(
    listId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'listId' is not null or undefined
    if (listId === null || listId === undefined) {
      throw new RequiredError("listId", "deleteDashboardList");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual/{list_id}".replace(
      "{list_id}",
      encodeURIComponent(String(listId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardListsApi.deleteDashboardList")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getDashboardList(
    listId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'listId' is not null or undefined
    if (listId === null || listId === undefined) {
      throw new RequiredError("listId", "getDashboardList");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual/{list_id}".replace(
      "{list_id}",
      encodeURIComponent(String(listId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardListsApi.getDashboardList")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDashboardLists(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardListsApi.listDashboardLists")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateDashboardList(
    listId: number,
    body: DashboardList,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'listId' is not null or undefined
    if (listId === null || listId === undefined) {
      throw new RequiredError("listId", "updateDashboardList");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDashboardList");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual/{list_id}".replace(
      "{list_id}",
      encodeURIComponent(String(listId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardListsApi.updateDashboardList")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardList", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class DashboardListsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboardList(
    response: ResponseContext,
  ): Promise<DashboardList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
      ) as DashboardList;
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
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        "",
      ) as DashboardList;
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
   * @params response Response returned by the server for a request to deleteDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboardList(
    response: ResponseContext,
  ): Promise<DashboardListDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardListDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListDeleteResponse",
      ) as DashboardListDeleteResponse;
      return body;
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
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: DashboardListDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListDeleteResponse",
        "",
      ) as DashboardListDeleteResponse;
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
   * @params response Response returned by the server for a request to getDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardList(
    response: ResponseContext,
  ): Promise<DashboardList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
      ) as DashboardList;
      return body;
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
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        "",
      ) as DashboardList;
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
   * @params response Response returned by the server for a request to listDashboardLists
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDashboardLists(
    response: ResponseContext,
  ): Promise<DashboardListListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardListListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListListResponse",
      ) as DashboardListListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: DashboardListListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListListResponse",
        "",
      ) as DashboardListListResponse;
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
   * @params response Response returned by the server for a request to updateDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboardList(
    response: ResponseContext,
  ): Promise<DashboardList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
      ) as DashboardList;
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
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        "",
      ) as DashboardList;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DashboardListsApiCreateDashboardListRequest {
  /**
   * Create a dashboard list request body.
   * @type DashboardList
   */
  body: DashboardList;
}

export interface DashboardListsApiDeleteDashboardListRequest {
  /**
   * ID of the dashboard list to delete.
   * @type number
   */
  listId: number;
}

export interface DashboardListsApiGetDashboardListRequest {
  /**
   * ID of the dashboard list to fetch.
   * @type number
   */
  listId: number;
}

export interface DashboardListsApiUpdateDashboardListRequest {
  /**
   * ID of the dashboard list to update.
   * @type number
   */
  listId: number;
  /**
   * Update a dashboard list request body.
   * @type DashboardList
   */
  body: DashboardList;
}

export class DashboardListsApi {
  private requestFactory: DashboardListsApiRequestFactory;
  private responseProcessor: DashboardListsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: DashboardListsApiRequestFactory,
    responseProcessor?: DashboardListsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DashboardListsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DashboardListsApiResponseProcessor();
  }

  /**
   * Create an empty dashboard list.
   * @param param The request object
   */
  public createDashboardList(
    param: DashboardListsApiCreateDashboardListRequest,
    options?: Configuration,
  ): Promise<DashboardList> {
    const requestContextPromise = this.requestFactory.createDashboardList(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboardList(responseContext);
        });
    });
  }

  /**
   * Delete a dashboard list.
   * @param param The request object
   */
  public deleteDashboardList(
    param: DashboardListsApiDeleteDashboardListRequest,
    options?: Configuration,
  ): Promise<DashboardListDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboardList(
      param.listId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboardList(responseContext);
        });
    });
  }

  /**
   * Fetch an existing dashboard list's definition.
   * @param param The request object
   */
  public getDashboardList(
    param: DashboardListsApiGetDashboardListRequest,
    options?: Configuration,
  ): Promise<DashboardList> {
    const requestContextPromise = this.requestFactory.getDashboardList(
      param.listId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardList(responseContext);
        });
    });
  }

  /**
   * Fetch all of your existing dashboard list definitions.
   * @param param The request object
   */
  public listDashboardLists(
    options?: Configuration,
  ): Promise<DashboardListListResponse> {
    const requestContextPromise =
      this.requestFactory.listDashboardLists(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDashboardLists(responseContext);
        });
    });
  }

  /**
   * Update the name of a dashboard list.
   * @param param The request object
   */
  public updateDashboardList(
    param: DashboardListsApiUpdateDashboardListRequest,
    options?: Configuration,
  ): Promise<DashboardList> {
    const requestContextPromise = this.requestFactory.updateDashboardList(
      param.listId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboardList(responseContext);
        });
    });
  }
}
