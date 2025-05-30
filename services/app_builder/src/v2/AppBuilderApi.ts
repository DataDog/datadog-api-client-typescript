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
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AppsSortField } from "./models/AppsSortField";
import { CreateAppRequest } from "./models/CreateAppRequest";
import { CreateAppResponse } from "./models/CreateAppResponse";
import { DeleteAppResponse } from "./models/DeleteAppResponse";
import { DeleteAppsRequest } from "./models/DeleteAppsRequest";
import { DeleteAppsResponse } from "./models/DeleteAppsResponse";
import { GetAppResponse } from "./models/GetAppResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListAppsResponse } from "./models/ListAppsResponse";
import { PublishAppResponse } from "./models/PublishAppResponse";
import { UnpublishAppResponse } from "./models/UnpublishAppResponse";
import { UpdateAppRequest } from "./models/UpdateAppRequest";
import { UpdateAppResponse } from "./models/UpdateAppResponse";
import { version } from "../version";

export class AppBuilderApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("app-builder", version);
    }
  }
  public async createApp(
    body: CreateAppRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.createApp")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateAppRequest", ""),
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

  public async deleteApp(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.deleteApp")
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteApps");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.deleteApps")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DeleteAppsRequest", ""),
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

  public async getApp(
    appId: string,
    version?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.getApp")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        serialize(version, TypingInfo, "string", ""),
        "",
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.listApps")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterUserName !== undefined) {
      requestContext.setQueryParam(
        "filter[user_name]",
        serialize(filterUserName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterUserUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[user_uuid]",
        serialize(filterUserUuid, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDeployed !== undefined) {
      requestContext.setQueryParam(
        "filter[deployed]",
        serialize(filterDeployed, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFavorite !== undefined) {
      requestContext.setQueryParam(
        "filter[favorite]",
        serialize(filterFavorite, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterSelfService !== undefined) {
      requestContext.setQueryParam(
        "filter[self_service]",
        serialize(filterSelfService, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "Array<AppsSortField>", ""),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async publishApp(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "publishApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.publishApp")
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

  public async unpublishApp(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "unpublishApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.unpublishApp")
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

  public async updateApp(
    appId: string,
    body: UpdateAppRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppBuilderApi.updateApp")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateAppRequest", ""),
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

export class AppBuilderApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApp(
    response: ResponseContext,
  ): Promise<CreateAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CreateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateAppResponse",
      ) as CreateAppResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: CreateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateAppResponse",
        "",
      ) as CreateAppResponse;
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
   * @params response Response returned by the server for a request to deleteApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApp(
    response: ResponseContext,
  ): Promise<DeleteAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppResponse",
      ) as DeleteAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 410
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
      const body: DeleteAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppResponse",
        "",
      ) as DeleteAppResponse;
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
   * @params response Response returned by the server for a request to deleteApps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApps(
    response: ResponseContext,
  ): Promise<DeleteAppsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsResponse",
      ) as DeleteAppsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: DeleteAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsResponse",
        "",
      ) as DeleteAppsResponse;
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
   * @params response Response returned by the server for a request to getApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApp(response: ResponseContext): Promise<GetAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetAppResponse",
      ) as GetAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 410
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
      const body: GetAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetAppResponse",
        "",
      ) as GetAppResponse;
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
   * @params response Response returned by the server for a request to listApps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApps(response: ResponseContext): Promise<ListAppsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppsResponse",
      ) as ListAppsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ListAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppsResponse",
        "",
      ) as ListAppsResponse;
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
   * @params response Response returned by the server for a request to publishApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async publishApp(
    response: ResponseContext,
  ): Promise<PublishAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: PublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PublishAppResponse",
      ) as PublishAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: PublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PublishAppResponse",
        "",
      ) as PublishAppResponse;
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
   * @params response Response returned by the server for a request to unpublishApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unpublishApp(
    response: ResponseContext,
  ): Promise<UnpublishAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UnpublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UnpublishAppResponse",
      ) as UnpublishAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: UnpublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UnpublishAppResponse",
        "",
      ) as UnpublishAppResponse;
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
   * @params response Response returned by the server for a request to updateApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApp(
    response: ResponseContext,
  ): Promise<UpdateAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
      ) as UpdateAppResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
        "",
      ) as UpdateAppResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AppBuilderApiCreateAppRequest {
  /**
   * @type CreateAppRequest
   */
  body: CreateAppRequest;
}

export interface AppBuilderApiDeleteAppRequest {
  /**
   * The ID of the app to delete.
   * @type string
   */
  appId: string;
}

export interface AppBuilderApiDeleteAppsRequest {
  /**
   * @type DeleteAppsRequest
   */
  body: DeleteAppsRequest;
}

export interface AppBuilderApiGetAppRequest {
  /**
   * The ID of the app to retrieve.
   * @type string
   */
  appId: string;
  /**
   * The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively.
   * @type string
   */
  version?: string;
}

export interface AppBuilderApiListAppsRequest {
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

export interface AppBuilderApiPublishAppRequest {
  /**
   * The ID of the app to publish.
   * @type string
   */
  appId: string;
}

export interface AppBuilderApiUnpublishAppRequest {
  /**
   * The ID of the app to unpublish.
   * @type string
   */
  appId: string;
}

export interface AppBuilderApiUpdateAppRequest {
  /**
   * The ID of the app to update.
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppRequest
   */
  body: UpdateAppRequest;
}

export class AppBuilderApi {
  private requestFactory: AppBuilderApiRequestFactory;
  private responseProcessor: AppBuilderApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: AppBuilderApiRequestFactory,
    responseProcessor?: AppBuilderApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AppBuilderApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AppBuilderApiResponseProcessor();
  }

  /**
   * Create a new app, returning the app ID.
   * @param param The request object
   */
  public createApp(
    param: AppBuilderApiCreateAppRequest,
    options?: Configuration,
  ): Promise<CreateAppResponse> {
    const requestContextPromise = this.requestFactory.createApp(
      param.body,
      options,
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
   * Delete a single app.
   * @param param The request object
   */
  public deleteApp(
    param: AppBuilderApiDeleteAppRequest,
    options?: Configuration,
  ): Promise<DeleteAppResponse> {
    const requestContextPromise = this.requestFactory.deleteApp(
      param.appId,
      options,
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
   * Delete multiple apps in a single request from a list of app IDs.
   * @param param The request object
   */
  public deleteApps(
    param: AppBuilderApiDeleteAppsRequest,
    options?: Configuration,
  ): Promise<DeleteAppsResponse> {
    const requestContextPromise = this.requestFactory.deleteApps(
      param.body,
      options,
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
   * Get the full definition of an app.
   * @param param The request object
   */
  public getApp(
    param: AppBuilderApiGetAppRequest,
    options?: Configuration,
  ): Promise<GetAppResponse> {
    const requestContextPromise = this.requestFactory.getApp(
      param.appId,
      param.version,
      options,
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
   * List all apps, with optional filters and sorting. This endpoint is paginated. Only basic app information such as the app ID, name, and description is returned by this endpoint.
   * @param param The request object
   */
  public listApps(
    param: AppBuilderApiListAppsRequest = {},
    options?: Configuration,
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
      options,
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
   * Publish an app for use by other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist.
   * @param param The request object
   */
  public publishApp(
    param: AppBuilderApiPublishAppRequest,
    options?: Configuration,
  ): Promise<PublishAppResponse> {
    const requestContextPromise = this.requestFactory.publishApp(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.publishApp(responseContext);
        });
    });
  }

  /**
   * Unpublish an app, removing the live version of the app. Unpublishing creates a new instance of a `deployment` object on the app, with a nil `app_version_id` (`00000000-0000-0000-0000-000000000000`). The app can still be updated and published again in the future.
   * @param param The request object
   */
  public unpublishApp(
    param: AppBuilderApiUnpublishAppRequest,
    options?: Configuration,
  ): Promise<UnpublishAppResponse> {
    const requestContextPromise = this.requestFactory.unpublishApp(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unpublishApp(responseContext);
        });
    });
  }

  /**
   * Update an existing app. This creates a new version of the app.
   * @param param The request object
   */
  public updateApp(
    param: AppBuilderApiUpdateAppRequest,
    options?: Configuration,
  ): Promise<UpdateAppResponse> {
    const requestContextPromise = this.requestFactory.updateApp(
      param.appId,
      param.body,
      options,
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
