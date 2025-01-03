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
import { AppsSortField } from "../models/AppsSortField";
import { CreateAppRequest } from "../models/CreateAppRequest";
import { CreateAppResponse } from "../models/CreateAppResponse";
import { DeleteAppResponse } from "../models/DeleteAppResponse";
import { DeleteAppsRequest } from "../models/DeleteAppsRequest";
import { DeleteAppsResponse } from "../models/DeleteAppsResponse";
import { DeployAppResponse } from "../models/DeployAppResponse";
import { DisableAppResponse } from "../models/DisableAppResponse";
import { GetAppResponse } from "../models/GetAppResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListAppsResponse } from "../models/ListAppsResponse";
import { UpdateAppRequest } from "../models/UpdateAppRequest";
import { UpdateAppResponse } from "../models/UpdateAppResponse";

export class AppsApiRequestFactory extends BaseAPIRequestFactory {
  public async createApp(
    body: CreateAppRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createApp'");
    if (!_config.unstableOperations["v2.createApp"]) {
      throw new Error("Unstable operation 'createApp' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.createApp")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateAppRequest", ""),
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

  public async deleteApp(
    appId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteApp'");
    if (!_config.unstableOperations["v2.deleteApp"]) {
      throw new Error("Unstable operation 'deleteApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.deleteApp")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteApps(
    body: DeleteAppsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteApps'");
    if (!_config.unstableOperations["v2.deleteApps"]) {
      throw new Error("Unstable operation 'deleteApps' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteApps");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.deleteApps")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DeleteAppsRequest", ""),
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

  public async deployApp(
    appId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deployApp'");
    if (!_config.unstableOperations["v2.deployApp"]) {
      throw new Error("Unstable operation 'deployApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deployApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.deployApp")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async disableApp(
    appId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'disableApp'");
    if (!_config.unstableOperations["v2.disableApp"]) {
      throw new Error("Unstable operation 'disableApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "disableApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.disableApp")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getApp(
    appId: string,
    version?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getApp'");
    if (!_config.unstableOperations["v2.getApp"]) {
      throw new Error("Unstable operation 'getApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.getApp")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        ObjectSerializer.serialize(version, "string", ""),
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

  public async listApps(
    limit?: number,
    page?: number,
    filterUserName?: string,
    filterUserUuid?: string,
    filterName?: string,
    filterQuery?: string,
    filterDeployed?: boolean,
    filterTags?: string,
    filterFavorite?: boolean,
    filterSelfService?: boolean,
    sort?: Array<AppsSortField>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listApps'");
    if (!_config.unstableOperations["v2.listApps"]) {
      throw new Error("Unstable operation 'listApps' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.listApps")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        ObjectSerializer.serialize(page, "number", "int64"),
        ""
      );
    }
    if (filterUserName !== undefined) {
      requestContext.setQueryParam(
        "filter[user_name]",
        ObjectSerializer.serialize(filterUserName, "string", ""),
        ""
      );
    }
    if (filterUserUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[user_uuid]",
        ObjectSerializer.serialize(filterUserUuid, "string", "uuid"),
        ""
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterDeployed !== undefined) {
      requestContext.setQueryParam(
        "filter[deployed]",
        ObjectSerializer.serialize(filterDeployed, "boolean", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
        ""
      );
    }
    if (filterFavorite !== undefined) {
      requestContext.setQueryParam(
        "filter[favorite]",
        ObjectSerializer.serialize(filterFavorite, "boolean", ""),
        ""
      );
    }
    if (filterSelfService !== undefined) {
      requestContext.setQueryParam(
        "filter[self_service]",
        ObjectSerializer.serialize(filterSelfService, "boolean", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "Array<AppsSortField>", ""),
        "csv"
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateApp(
    appId: string,
    body: UpdateAppRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateApp'");
    if (!_config.unstableOperations["v2.updateApp"]) {
      throw new Error("Unstable operation 'updateApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateApp");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppsApi.updateApp")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateAppRequest", ""),
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

export class AppsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApp(
    response: ResponseContext
  ): Promise<CreateAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: CreateAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateAppResponse"
      ) as CreateAppResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: CreateAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateAppResponse",
        ""
      ) as CreateAppResponse;
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
   * @params response Response returned by the server for a request to deleteApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApp(
    response: ResponseContext
  ): Promise<DeleteAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeleteAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteAppResponse"
      ) as DeleteAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 410
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
      const body: DeleteAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteAppResponse",
        ""
      ) as DeleteAppResponse;
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
   * @params response Response returned by the server for a request to deleteApps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApps(
    response: ResponseContext
  ): Promise<DeleteAppsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeleteAppsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteAppsResponse"
      ) as DeleteAppsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: DeleteAppsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteAppsResponse",
        ""
      ) as DeleteAppsResponse;
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
   * @params response Response returned by the server for a request to deployApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deployApp(
    response: ResponseContext
  ): Promise<DeployAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: DeployAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeployAppResponse"
      ) as DeployAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: DeployAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeployAppResponse",
        ""
      ) as DeployAppResponse;
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
   * @params response Response returned by the server for a request to disableApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableApp(
    response: ResponseContext
  ): Promise<DisableAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DisableAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DisableAppResponse"
      ) as DisableAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: DisableAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DisableAppResponse",
        ""
      ) as DisableAppResponse;
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
   * @params response Response returned by the server for a request to getApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApp(response: ResponseContext): Promise<GetAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetAppResponse"
      ) as GetAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: GetAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetAppResponse",
        ""
      ) as GetAppResponse;
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
   * @params response Response returned by the server for a request to listApps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApps(response: ResponseContext): Promise<ListAppsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListAppsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAppsResponse"
      ) as ListAppsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ListAppsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAppsResponse",
        ""
      ) as ListAppsResponse;
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
   * @params response Response returned by the server for a request to updateApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApp(
    response: ResponseContext
  ): Promise<UpdateAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateAppResponse"
      ) as UpdateAppResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: UpdateAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateAppResponse",
        ""
      ) as UpdateAppResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AppsApiCreateAppRequest {
  /**
   * @type CreateAppRequest
   */
  body: CreateAppRequest;
}

export interface AppsApiDeleteAppRequest {
  /**
   * @type string
   */
  appId: string;
}

export interface AppsApiDeleteAppsRequest {
  /**
   * @type DeleteAppsRequest
   */
  body: DeleteAppsRequest;
}

export interface AppsApiDeployAppRequest {
  /**
   * @type string
   */
  appId: string;
}

export interface AppsApiDisableAppRequest {
  /**
   * @type string
   */
  appId: string;
}

export interface AppsApiGetAppRequest {
  /**
   * @type string
   */
  appId: string;
  /**
   * @type string
   */
  version?: string;
}

export interface AppsApiListAppsRequest {
  /**
   * The number of apps to return per page.
   * @type number
   */
  limit?: number;
  /**
   * The page number to return.
   * @type number
   */
  page?: number;
  /**
   * Filter apps by the app creator. Usually the user's email.
   * @type string
   */
  filterUserName?: string;
  /**
   * Filter apps by the app creator's UUID.
   * @type string
   */
  filterUserUuid?: string;
  /**
   * Filter by app name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter apps by the app name or the app creator.
   * @type string
   */
  filterQuery?: string;
  /**
   * Filter apps by whether they are published.
   * @type boolean
   */
  filterDeployed?: boolean;
  /**
   * Filter apps by tags.
   * @type string
   */
  filterTags?: string;
  /**
   * Filter apps by whether you have added them to your favorites.
   * @type boolean
   */
  filterFavorite?: boolean;
  /**
   * Filter apps by whether they are enabled for self-service.
   * @type boolean
   */
  filterSelfService?: boolean;
  /**
   * The fields and direction to sort apps by.
   * @type Array<AppsSortField>
   */
  sort?: Array<AppsSortField>;
}

export interface AppsApiUpdateAppRequest {
  /**
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppRequest
   */
  body: UpdateAppRequest;
}

export class AppsApi {
  private requestFactory: AppsApiRequestFactory;
  private responseProcessor: AppsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AppsApiRequestFactory,
    responseProcessor?: AppsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AppsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AppsApiResponseProcessor();
  }

  /**
   * Create a new app, returning the app ID
   * @param param The request object
   */
  public createApp(
    param: AppsApiCreateAppRequest,
    options?: Configuration
  ): Promise<CreateAppResponse> {
    const requestContextPromise = this.requestFactory.createApp(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApp(responseContext);
        });
    });
  }

  /**
   * Delete an app by ID
   * @param param The request object
   */
  public deleteApp(
    param: AppsApiDeleteAppRequest,
    options?: Configuration
  ): Promise<DeleteAppResponse> {
    const requestContextPromise = this.requestFactory.deleteApp(
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApp(responseContext);
        });
    });
  }

  /**
   * Delete multiple apps by ID
   * @param param The request object
   */
  public deleteApps(
    param: AppsApiDeleteAppsRequest,
    options?: Configuration
  ): Promise<DeleteAppsResponse> {
    const requestContextPromise = this.requestFactory.deleteApps(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApps(responseContext);
        });
    });
  }

  /**
   * Deploy (publish) an app by ID
   * @param param The request object
   */
  public deployApp(
    param: AppsApiDeployAppRequest,
    options?: Configuration
  ): Promise<DeployAppResponse> {
    const requestContextPromise = this.requestFactory.deployApp(
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deployApp(responseContext);
        });
    });
  }

  /**
   * Disable an app by ID
   * @param param The request object
   */
  public disableApp(
    param: AppsApiDisableAppRequest,
    options?: Configuration
  ): Promise<DisableAppResponse> {
    const requestContextPromise = this.requestFactory.disableApp(
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableApp(responseContext);
        });
    });
  }

  /**
   * Get the full definition of an app by ID
   * @param param The request object
   */
  public getApp(
    param: AppsApiGetAppRequest,
    options?: Configuration
  ): Promise<GetAppResponse> {
    const requestContextPromise = this.requestFactory.getApp(
      param.appId,
      param.version,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApp(responseContext);
        });
    });
  }

  /**
   * List all apps, with optional filters and sorting
   * @param param The request object
   */
  public listApps(
    param: AppsApiListAppsRequest = {},
    options?: Configuration
  ): Promise<ListAppsResponse> {
    const requestContextPromise = this.requestFactory.listApps(
      param.limit,
      param.page,
      param.filterUserName,
      param.filterUserUuid,
      param.filterName,
      param.filterQuery,
      param.filterDeployed,
      param.filterTags,
      param.filterFavorite,
      param.filterSelfService,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApps(responseContext);
        });
    });
  }

  /**
   * Update an existing app by ID. Creates a new version of the app
   * @param param The request object
   */
  public updateApp(
    param: AppsApiUpdateAppRequest,
    options?: Configuration
  ): Promise<UpdateAppResponse> {
    const requestContextPromise = this.requestFactory.updateApp(
      param.appId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApp(responseContext);
        });
    });
  }
}
