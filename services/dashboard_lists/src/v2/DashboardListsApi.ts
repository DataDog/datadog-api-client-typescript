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
import { DashboardListAddItemsRequest } from "./models/DashboardListAddItemsRequest";
import { DashboardListAddItemsResponse } from "./models/DashboardListAddItemsResponse";
import { DashboardListDeleteItemsRequest } from "./models/DashboardListDeleteItemsRequest";
import { DashboardListDeleteItemsResponse } from "./models/DashboardListDeleteItemsResponse";
import { DashboardListItems } from "./models/DashboardListItems";
import { DashboardListUpdateItemsRequest } from "./models/DashboardListUpdateItemsRequest";
import { DashboardListUpdateItemsResponse } from "./models/DashboardListUpdateItemsResponse";

export class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDashboardListItems(
    dashboardListId: number,
    body: DashboardListAddItemsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardListId' is not null or undefined
    if (dashboardListId === null || dashboardListId === undefined) {
      throw new RequiredError("dashboardListId", "createDashboardListItems");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDashboardListItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards".replace(
        "{dashboard_list_id}",
        encodeURIComponent(String(dashboardListId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardListsApi.createDashboardListItems")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardListAddItemsRequest", ""),
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

  public async deleteDashboardListItems(
    dashboardListId: number,
    body: DashboardListDeleteItemsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardListId' is not null or undefined
    if (dashboardListId === null || dashboardListId === undefined) {
      throw new RequiredError("dashboardListId", "deleteDashboardListItems");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteDashboardListItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards".replace(
        "{dashboard_list_id}",
        encodeURIComponent(String(dashboardListId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardListsApi.deleteDashboardListItems")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardListDeleteItemsRequest", ""),
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

  public async getDashboardListItems(
    dashboardListId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardListId' is not null or undefined
    if (dashboardListId === null || dashboardListId === undefined) {
      throw new RequiredError("dashboardListId", "getDashboardListItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards".replace(
        "{dashboard_list_id}",
        encodeURIComponent(String(dashboardListId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardListsApi.getDashboardListItems")
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

  public async updateDashboardListItems(
    dashboardListId: number,
    body: DashboardListUpdateItemsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardListId' is not null or undefined
    if (dashboardListId === null || dashboardListId === undefined) {
      throw new RequiredError("dashboardListId", "updateDashboardListItems");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDashboardListItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards".replace(
        "{dashboard_list_id}",
        encodeURIComponent(String(dashboardListId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardListsApi.updateDashboardListItems")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardListUpdateItemsRequest", ""),
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

export class DashboardListsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDashboardListItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboardListItems(
    response: ResponseContext,
  ): Promise<DashboardListAddItemsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardListAddItemsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListAddItemsResponse",
      ) as DashboardListAddItemsResponse;
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
      const body: DashboardListAddItemsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListAddItemsResponse",
        "",
      ) as DashboardListAddItemsResponse;
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
   * @params response Response returned by the server for a request to deleteDashboardListItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboardListItems(
    response: ResponseContext,
  ): Promise<DashboardListDeleteItemsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardListDeleteItemsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DashboardListDeleteItemsResponse",
        ) as DashboardListDeleteItemsResponse;
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
      const body: DashboardListDeleteItemsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DashboardListDeleteItemsResponse",
          "",
        ) as DashboardListDeleteItemsResponse;
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
   * @params response Response returned by the server for a request to getDashboardListItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardListItems(
    response: ResponseContext,
  ): Promise<DashboardListItems> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardListItems = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListItems",
      ) as DashboardListItems;
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
      const body: DashboardListItems = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListItems",
        "",
      ) as DashboardListItems;
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
   * @params response Response returned by the server for a request to updateDashboardListItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboardListItems(
    response: ResponseContext,
  ): Promise<DashboardListUpdateItemsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardListUpdateItemsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DashboardListUpdateItemsResponse",
        ) as DashboardListUpdateItemsResponse;
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
      const body: DashboardListUpdateItemsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DashboardListUpdateItemsResponse",
          "",
        ) as DashboardListUpdateItemsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DashboardListsApiCreateDashboardListItemsRequest {
  /**
   * ID of the dashboard list to add items to.
   * @type number
   */
  dashboardListId: number;
  /**
   * Dashboards to add to the dashboard list.
   * @type DashboardListAddItemsRequest
   */
  body: DashboardListAddItemsRequest;
}

export interface DashboardListsApiDeleteDashboardListItemsRequest {
  /**
   * ID of the dashboard list to delete items from.
   * @type number
   */
  dashboardListId: number;
  /**
   * Dashboards to delete from the dashboard list.
   * @type DashboardListDeleteItemsRequest
   */
  body: DashboardListDeleteItemsRequest;
}

export interface DashboardListsApiGetDashboardListItemsRequest {
  /**
   * ID of the dashboard list to get items from.
   * @type number
   */
  dashboardListId: number;
}

export interface DashboardListsApiUpdateDashboardListItemsRequest {
  /**
   * ID of the dashboard list to update items from.
   * @type number
   */
  dashboardListId: number;
  /**
   * New dashboards of the dashboard list.
   * @type DashboardListUpdateItemsRequest
   */
  body: DashboardListUpdateItemsRequest;
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
   * Add dashboards to an existing dashboard list.
   * @param param The request object
   */
  public createDashboardListItems(
    param: DashboardListsApiCreateDashboardListItemsRequest,
    options?: Configuration,
  ): Promise<DashboardListAddItemsResponse> {
    const requestContextPromise = this.requestFactory.createDashboardListItems(
      param.dashboardListId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboardListItems(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete dashboards from an existing dashboard list.
   * @param param The request object
   */
  public deleteDashboardListItems(
    param: DashboardListsApiDeleteDashboardListItemsRequest,
    options?: Configuration,
  ): Promise<DashboardListDeleteItemsResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboardListItems(
      param.dashboardListId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboardListItems(
            responseContext,
          );
        });
    });
  }

  /**
   * Fetch the dashboard list’s dashboard definitions.
   * @param param The request object
   */
  public getDashboardListItems(
    param: DashboardListsApiGetDashboardListItemsRequest,
    options?: Configuration,
  ): Promise<DashboardListItems> {
    const requestContextPromise = this.requestFactory.getDashboardListItems(
      param.dashboardListId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardListItems(responseContext);
        });
    });
  }

  /**
   * Update dashboards of an existing dashboard list.
   * @param param The request object
   */
  public updateDashboardListItems(
    param: DashboardListsApiUpdateDashboardListItemsRequest,
    options?: Configuration,
  ): Promise<DashboardListUpdateItemsResponse> {
    const requestContextPromise = this.requestFactory.updateDashboardListItems(
      param.dashboardListId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboardListItems(
            responseContext,
          );
        });
    });
  }
}
