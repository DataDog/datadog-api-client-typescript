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
import { Dashboard } from "../models/Dashboard";
import { DashboardBulkDeleteRequest } from "../models/DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "../models/DashboardDeleteResponse";
import { DashboardRestoreRequest } from "../models/DashboardRestoreRequest";
import { DashboardSummary } from "../models/DashboardSummary";
import { DashboardSummaryDefinition } from "../models/DashboardSummaryDefinition";
import { DeleteSharedDashboardResponse } from "../models/DeleteSharedDashboardResponse";
import { SharedDashboard } from "../models/SharedDashboard";
import { SharedDashboardInvites } from "../models/SharedDashboardInvites";
import { SharedDashboardUpdateRequest } from "../models/SharedDashboardUpdateRequest";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDashboard(
    body: Dashboard,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.createDashboard")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Dashboard", ""),
      contentType
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

  public async createPublicDashboard(
    body: SharedDashboard,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPublicDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.createPublicDashboard")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SharedDashboard", ""),
      contentType
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

  public async deleteDashboard(
    dashboardId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "deleteDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/{dashboard_id}".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.deleteDashboard")
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

  public async deleteDashboards(
    body: DashboardBulkDeleteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteDashboards");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.deleteDashboards")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardBulkDeleteRequest", ""),
      contentType
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

  public async deletePublicDashboard(
    token: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "deletePublicDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public/{token}".replace(
      "{token}",
      encodeURIComponent(String(token))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.deletePublicDashboard")
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

  public async deletePublicDashboardInvitation(
    token: string,
    body: SharedDashboardInvites,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "deletePublicDashboardInvitation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deletePublicDashboardInvitation");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public/{token}/invitation".replace(
      "{token}",
      encodeURIComponent(String(token))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.deletePublicDashboardInvitation")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SharedDashboardInvites", ""),
      contentType
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

  public async getDashboard(
    dashboardId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "getDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/{dashboard_id}".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.getDashboard")
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

  public async getPublicDashboard(
    token: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "getPublicDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public/{token}".replace(
      "{token}",
      encodeURIComponent(String(token))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.getPublicDashboard")
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

  public async getPublicDashboardInvitations(
    token: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "getPublicDashboardInvitations");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public/{token}/invitation".replace(
      "{token}",
      encodeURIComponent(String(token))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.getPublicDashboardInvitations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page_number",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDashboards(
    filterShared?: boolean,
    filterDeleted?: boolean,
    count?: number,
    start?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/dashboard";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.listDashboards")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterShared !== undefined) {
      requestContext.setQueryParam(
        "filter[shared]",
        ObjectSerializer.serialize(filterShared, "boolean", ""),
        ""
      );
    }
    if (filterDeleted !== undefined) {
      requestContext.setQueryParam(
        "filter[deleted]",
        ObjectSerializer.serialize(filterDeleted, "boolean", ""),
        ""
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        ObjectSerializer.serialize(count, "number", "int64"),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async restoreDashboards(
    body: DashboardRestoreRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "restoreDashboards");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.restoreDashboards")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardRestoreRequest", ""),
      contentType
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

  public async sendPublicDashboardInvitation(
    token: string,
    body: SharedDashboardInvites,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "sendPublicDashboardInvitation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "sendPublicDashboardInvitation");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public/{token}/invitation".replace(
      "{token}",
      encodeURIComponent(String(token))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.sendPublicDashboardInvitation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SharedDashboardInvites", ""),
      contentType
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

  public async updateDashboard(
    dashboardId: string,
    body: Dashboard,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "updateDashboard");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/{dashboard_id}".replace(
      "{dashboard_id}",
      encodeURIComponent(String(dashboardId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.updateDashboard")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Dashboard", ""),
      contentType
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

  public async updatePublicDashboard(
    token: string,
    body: SharedDashboardUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "updatePublicDashboard");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePublicDashboard");
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/public/{token}".replace(
      "{token}",
      encodeURIComponent(String(token))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.DashboardsApi.updatePublicDashboard")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SharedDashboardUpdateRequest", ""),
      contentType
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

export class DashboardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard"
      ) as Dashboard;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard",
        ""
      ) as Dashboard;
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
   * @params response Response returned by the server for a request to createPublicDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPublicDashboard(
    response: ResponseContext
  ): Promise<SharedDashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SharedDashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboard"
      ) as SharedDashboard;
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
      const body: SharedDashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboard",
        ""
      ) as SharedDashboard;
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
   * @params response Response returned by the server for a request to deleteDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboard(
    response: ResponseContext
  ): Promise<DashboardDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardDeleteResponse"
      ) as DashboardDeleteResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: DashboardDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardDeleteResponse",
        ""
      ) as DashboardDeleteResponse;
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
   * @params response Response returned by the server for a request to deleteDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboards(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deletePublicDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePublicDashboard(
    response: ResponseContext
  ): Promise<DeleteSharedDashboardResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeleteSharedDashboardResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteSharedDashboardResponse"
      ) as DeleteSharedDashboardResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: DeleteSharedDashboardResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteSharedDashboardResponse",
        ""
      ) as DeleteSharedDashboardResponse;
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
   * @params response Response returned by the server for a request to deletePublicDashboardInvitation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePublicDashboardInvitation(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
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
   * @params response Response returned by the server for a request to getDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard"
      ) as Dashboard;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard",
        ""
      ) as Dashboard;
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
   * @params response Response returned by the server for a request to getPublicDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPublicDashboard(
    response: ResponseContext
  ): Promise<SharedDashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SharedDashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboard"
      ) as SharedDashboard;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: SharedDashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboard",
        ""
      ) as SharedDashboard;
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
   * @params response Response returned by the server for a request to getPublicDashboardInvitations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPublicDashboardInvitations(
    response: ResponseContext
  ): Promise<SharedDashboardInvites> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SharedDashboardInvites = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboardInvites"
      ) as SharedDashboardInvites;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: SharedDashboardInvites = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboardInvites",
        ""
      ) as SharedDashboardInvites;
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
   * @params response Response returned by the server for a request to listDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDashboards(
    response: ResponseContext
  ): Promise<DashboardSummary> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DashboardSummary = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardSummary"
      ) as DashboardSummary;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: DashboardSummary = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardSummary",
        ""
      ) as DashboardSummary;
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
   * @params response Response returned by the server for a request to restoreDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async restoreDashboards(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to sendPublicDashboardInvitation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sendPublicDashboardInvitation(
    response: ResponseContext
  ): Promise<SharedDashboardInvites> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: SharedDashboardInvites = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboardInvites"
      ) as SharedDashboardInvites;
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
      const body: SharedDashboardInvites = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboardInvites",
        ""
      ) as SharedDashboardInvites;
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
   * @params response Response returned by the server for a request to updateDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard"
      ) as Dashboard;
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
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard",
        ""
      ) as Dashboard;
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
   * @params response Response returned by the server for a request to updatePublicDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePublicDashboard(
    response: ResponseContext
  ): Promise<SharedDashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SharedDashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboard"
      ) as SharedDashboard;
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
      const body: SharedDashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SharedDashboard",
        ""
      ) as SharedDashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DashboardsApiCreateDashboardRequest {
  /**
   * Create a dashboard request body.
   * @type Dashboard
   */
  body: Dashboard;
}

export interface DashboardsApiCreatePublicDashboardRequest {
  /**
   * Create a shared dashboard request body.
   * @type SharedDashboard
   */
  body: SharedDashboard;
}

export interface DashboardsApiDeleteDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardsApiDeleteDashboardsRequest {
  /**
   * Delete dashboards request body.
   * @type DashboardBulkDeleteRequest
   */
  body: DashboardBulkDeleteRequest;
}

export interface DashboardsApiDeletePublicDashboardRequest {
  /**
   * The token of the shared dashboard.
   * @type string
   */
  token: string;
}

export interface DashboardsApiDeletePublicDashboardInvitationRequest {
  /**
   * The token of the shared dashboard.
   * @type string
   */
  token: string;
  /**
   * Shared Dashboard Invitation deletion request body.
   * @type SharedDashboardInvites
   */
  body: SharedDashboardInvites;
}

export interface DashboardsApiGetDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardsApiGetPublicDashboardRequest {
  /**
   * The token of the shared dashboard. Generated when a dashboard is shared.
   * @type string
   */
  token: string;
}

export interface DashboardsApiGetPublicDashboardInvitationsRequest {
  /**
   * Token of the shared dashboard for which to fetch invitations.
   * @type string
   */
  token: string;
  /**
   * The number of records to return in a single request.
   * @type number
   */
  pageSize?: number;
  /**
   * The page to access (base 0).
   * @type number
   */
  pageNumber?: number;
}

export interface DashboardsApiListDashboardsRequest {
  /**
   * When `true`, this query only returns shared custom created
   * or cloned dashboards.
   * @type boolean
   */
  filterShared?: boolean;
  /**
   * When `true`, this query returns only deleted custom-created
   * or cloned dashboards. This parameter is incompatible with `filter[shared]`.
   * @type boolean
   */
  filterDeleted?: boolean;
  /**
   * The maximum number of dashboards returned in the list.
   * @type number
   */
  count?: number;
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   */
  start?: number;
}

export interface DashboardsApiRestoreDashboardsRequest {
  /**
   * Restore dashboards request body.
   * @type DashboardRestoreRequest
   */
  body: DashboardRestoreRequest;
}

export interface DashboardsApiSendPublicDashboardInvitationRequest {
  /**
   * The token of the shared dashboard.
   * @type string
   */
  token: string;
  /**
   * Shared Dashboard Invitation request body.
   * @type SharedDashboardInvites
   */
  body: SharedDashboardInvites;
}

export interface DashboardsApiUpdateDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * Update Dashboard request body.
   * @type Dashboard
   */
  body: Dashboard;
}

export interface DashboardsApiUpdatePublicDashboardRequest {
  /**
   * The token of the shared dashboard.
   * @type string
   */
  token: string;
  /**
   * Update Dashboard request body.
   * @type SharedDashboardUpdateRequest
   */
  body: SharedDashboardUpdateRequest;
}

export class DashboardsApi {
  private requestFactory: DashboardsApiRequestFactory;
  private responseProcessor: DashboardsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardsApiRequestFactory,
    responseProcessor?: DashboardsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DashboardsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardsApiResponseProcessor();
  }

  /**
   * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended.
   * Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
   * @param param The request object
   */
  public createDashboard(
    param: DashboardsApiCreateDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.createDashboard(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboard(responseContext);
        });
    });
  }

  /**
   * Share a specified private dashboard, generating a URL at which it can be publicly viewed.
   * @param param The request object
   */
  public createPublicDashboard(
    param: DashboardsApiCreatePublicDashboardRequest,
    options?: Configuration
  ): Promise<SharedDashboard> {
    const requestContextPromise = this.requestFactory.createPublicDashboard(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPublicDashboard(responseContext);
        });
    });
  }

  /**
   * Delete a dashboard using the specified ID.
   * @param param The request object
   */
  public deleteDashboard(
    param: DashboardsApiDeleteDashboardRequest,
    options?: Configuration
  ): Promise<DashboardDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboard(
      param.dashboardId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboard(responseContext);
        });
    });
  }

  /**
   * Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).
   * @param param The request object
   */
  public deleteDashboards(
    param: DashboardsApiDeleteDashboardsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDashboards(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboards(responseContext);
        });
    });
  }

  /**
   * Revoke the public URL for a dashboard (rendering it private) associated with the specified token.
   * @param param The request object
   */
  public deletePublicDashboard(
    param: DashboardsApiDeletePublicDashboardRequest,
    options?: Configuration
  ): Promise<DeleteSharedDashboardResponse> {
    const requestContextPromise = this.requestFactory.deletePublicDashboard(
      param.token,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePublicDashboard(responseContext);
        });
    });
  }

  /**
   * Revoke previously sent invitation emails and active sessions used to access a given shared dashboard for specific email addresses.
   * @param param The request object
   */
  public deletePublicDashboardInvitation(
    param: DashboardsApiDeletePublicDashboardInvitationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deletePublicDashboardInvitation(
        param.token,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePublicDashboardInvitation(
            responseContext
          );
        });
    });
  }

  /**
   * Get a dashboard using the specified ID.
   * @param param The request object
   */
  public getDashboard(
    param: DashboardsApiGetDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.getDashboard(
      param.dashboardId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboard(responseContext);
        });
    });
  }

  /**
   * Fetch an existing shared dashboard's sharing metadata associated with the specified token.
   * @param param The request object
   */
  public getPublicDashboard(
    param: DashboardsApiGetPublicDashboardRequest,
    options?: Configuration
  ): Promise<SharedDashboard> {
    const requestContextPromise = this.requestFactory.getPublicDashboard(
      param.token,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPublicDashboard(responseContext);
        });
    });
  }

  /**
   * Describe the invitations that exist for the given shared dashboard (paginated).
   * @param param The request object
   */
  public getPublicDashboardInvitations(
    param: DashboardsApiGetPublicDashboardInvitationsRequest,
    options?: Configuration
  ): Promise<SharedDashboardInvites> {
    const requestContextPromise =
      this.requestFactory.getPublicDashboardInvitations(
        param.token,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPublicDashboardInvitations(
            responseContext
          );
        });
    });
  }

  /**
   * Get all dashboards.
   *
   * **Note**: This query will only return custom created or cloned dashboards.
   * This query will not return preset dashboards.
   * @param param The request object
   */
  public listDashboards(
    param: DashboardsApiListDashboardsRequest = {},
    options?: Configuration
  ): Promise<DashboardSummary> {
    const requestContextPromise = this.requestFactory.listDashboards(
      param.filterShared,
      param.filterDeleted,
      param.count,
      param.start,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDashboards(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listDashboards returning a generator with all the items.
   */
  public async *listDashboardsWithPagination(
    param: DashboardsApiListDashboardsRequest = {},
    options?: Configuration
  ): AsyncGenerator<DashboardSummaryDefinition> {
    let pageSize = 100;
    if (param.count !== undefined) {
      pageSize = param.count;
    }
    param.count = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listDashboards(
        param.filterShared,
        param.filterDeleted,
        param.count,
        param.start,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listDashboards(
        responseContext
      );
      const responseDashboards = response.dashboards;
      if (responseDashboards === undefined) {
        break;
      }
      const results = responseDashboards;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.start === undefined) {
        param.start = pageSize;
      } else {
        param.start = param.start + pageSize;
      }
    }
  }

  /**
   * Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).
   * @param param The request object
   */
  public restoreDashboards(
    param: DashboardsApiRestoreDashboardsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.restoreDashboards(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.restoreDashboards(responseContext);
        });
    });
  }

  /**
   * Send emails to specified email addresses containing links to access a given authenticated shared dashboard. Email addresses must already belong to the authenticated shared dashboard's share_list.
   * @param param The request object
   */
  public sendPublicDashboardInvitation(
    param: DashboardsApiSendPublicDashboardInvitationRequest,
    options?: Configuration
  ): Promise<SharedDashboardInvites> {
    const requestContextPromise =
      this.requestFactory.sendPublicDashboardInvitation(
        param.token,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.sendPublicDashboardInvitation(
            responseContext
          );
        });
    });
  }

  /**
   * Update a dashboard using the specified ID.
   * @param param The request object
   */
  public updateDashboard(
    param: DashboardsApiUpdateDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.updateDashboard(
      param.dashboardId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboard(responseContext);
        });
    });
  }

  /**
   * Update a shared dashboard associated with the specified token.
   * @param param The request object
   */
  public updatePublicDashboard(
    param: DashboardsApiUpdatePublicDashboardRequest,
    options?: Configuration
  ): Promise<SharedDashboard> {
    const requestContextPromise = this.requestFactory.updatePublicDashboard(
      param.token,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePublicDashboard(responseContext);
        });
    });
  }
}
