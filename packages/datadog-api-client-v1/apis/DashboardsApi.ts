schema { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer, applySecurityAuthentication} from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile
  } from "../http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";


import { APIErrorResponse } from "../models/APIErrorResponse";
import { Dashboard } from "../models/Dashboard";
import { DashboardBulkDeleteRequest } from "../models/DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "../models/DashboardDeleteResponse";
import { DashboardRestoreRequest } from "../models/DashboardRestoreRequest";
import { DashboardSummary } from "../models/DashboardSummary";

export class DashboardsApiRequestFactory extends BaseAPIRequestFactory {

  public async createDashboard(body: Dashboard,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('Required parameter body was null or undefined when calling createDashboard.');
    }

    // Path Params
    const localVarPath = '/api/v1/dashboard';

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.createDashboard').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Dashboard", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteDashboard(dashboardId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError('Required parameter dashboardId was null or undefined when calling deleteDashboard.');
    }

    // Path Params
    const localVarPath = '/api/v1/dashboard/{dashboard_id}'
      .replace('{' + 'dashboard_id' + '}', encodeURIComponent(String(dashboardId)));

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.deleteDashboard').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteDashboards(body: DashboardBulkDeleteRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('Required parameter body was null or undefined when calling deleteDashboards.');
    }

    // Path Params
    const localVarPath = '/api/v1/dashboard';

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.deleteDashboards').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardBulkDeleteRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async getDashboard(dashboardId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError('Required parameter dashboardId was null or undefined when calling getDashboard.');
    }

    // Path Params
    const localVarPath = '/api/v1/dashboard/{dashboard_id}'
      .replace('{' + 'dashboard_id' + '}', encodeURIComponent(String(dashboardId)));

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.getDashboard').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async listDashboards(filterShared?: boolean,filterDeleted?: boolean,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v1/dashboard';

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.listDashboards').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterShared !== undefined) {
      requestContext.setQueryParam("filter[shared]", ObjectSerializer.serialize(filterShared, "boolean", ""));
    }
    if (filterDeleted !== undefined) {
      requestContext.setQueryParam("filter[deleted]", ObjectSerializer.serialize(filterDeleted, "boolean", ""));
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async restoreDashboards(body: DashboardRestoreRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('Required parameter body was null or undefined when calling restoreDashboards.');
    }

    // Path Params
    const localVarPath = '/api/v1/dashboard';

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.restoreDashboards').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardRestoreRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateDashboard(dashboardId: string,body: Dashboard,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError('Required parameter dashboardId was null or undefined when calling updateDashboard.');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('Required parameter body was null or undefined when calling updateDashboard.');
    }

    // Path Params
    const localVarPath = '/api/v1/dashboard/{dashboard_id}'
      .replace('{' + 'dashboard_id' + '}', encodeURIComponent(String(dashboardId)));

    // Make Request Context
    const requestContext = getServer(_config, 'DashboardsApi.updateDashboard').makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Dashboard", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["AuthZ", "apiKeyAuth", "appKeyAuth"]);

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
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard", ""
      ) as Dashboard;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard", ""
      ) as Dashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteDashboard(response: ResponseContext): Promise<DashboardDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardDeleteResponse", ""
      ) as DashboardDeleteResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardDeleteResponse", ""
      ) as DashboardDeleteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteDashboards(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard", ""
      ) as Dashboard;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard", ""
      ) as Dashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listDashboards(response: ResponseContext): Promise<DashboardSummary> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardSummary = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardSummary", ""
      ) as DashboardSummary;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardSummary = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardSummary", ""
      ) as DashboardSummary;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to restoreDashboards
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async restoreDashboards(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateDashboard
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateDashboard(response: ResponseContext): Promise<Dashboard> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard", ""
      ) as Dashboard;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse", ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Dashboard = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Dashboard", ""
      ) as Dashboard;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface DashboardsApiCreateDashboardRequest {
  /**
   * Create a dashboard request body.
   * @type Dashboard
   */
  body: Dashboard
}

export interface DashboardsApiDeleteDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string
}

export interface DashboardsApiDeleteDashboardsRequest {
  /**
   * Delete dashboards request body.
   * @type DashboardBulkDeleteRequest
   */
  body: DashboardBulkDeleteRequest
}

export interface DashboardsApiGetDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string
}

export interface DashboardsApiListDashboardsRequest {
  /**
   * When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
   * @type boolean
   */
  filterShared?: boolean
  /**
   * When &#x60;true&#x60;, this query returns only deleted custom-created or cloned dashboards. This parameter is incompatible with &#x60;filter[shared]&#x60;.
   * @type boolean
   */
  filterDeleted?: boolean
}

export interface DashboardsApiRestoreDashboardsRequest {
  /**
   * Restore dashboards request body.
   * @type DashboardRestoreRequest
   */
  body: DashboardRestoreRequest
}

export interface DashboardsApiUpdateDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string
  /**
   * Update Dashboard request body.
   * @type Dashboard
   */
  body: Dashboard
}

export class DashboardsApi {
  private requestFactory: DashboardsApiRequestFactory;
  private responseProcessor: DashboardsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: DashboardsApiRequestFactory, responseProcessor?: DashboardsApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new DashboardsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new DashboardsApiResponseProcessor();
  }

  /**
   * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
   * @param param The request object
   */
  public createDashboard(param: DashboardsApiCreateDashboardRequest, options?: Configuration): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.createDashboard(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createDashboard(responseContext);
        });
    });
  }

  /**
   * Delete a dashboard using the specified ID.
   * @param param The request object
   */
  public deleteDashboard(param: DashboardsApiDeleteDashboardRequest, options?: Configuration): Promise<DashboardDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboard(param.dashboardId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteDashboard(responseContext);
        });
    });
  }

  /**
   * Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).
   * @param param The request object
   */
  public deleteDashboards(param: DashboardsApiDeleteDashboardsRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDashboards(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteDashboards(responseContext);
        });
    });
  }

  /**
   * Get a dashboard using the specified ID.
   * @param param The request object
   */
  public getDashboard(param: DashboardsApiGetDashboardRequest, options?: Configuration): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.getDashboard(param.dashboardId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getDashboard(responseContext);
        });
    });
  }

  /**
   * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
   * @param param The request object
   */
  public listDashboards(param: DashboardsApiListDashboardsRequest = {}, options?: Configuration): Promise<DashboardSummary> {
    const requestContextPromise = this.requestFactory.listDashboards(param.filterShared,param.filterDeleted,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listDashboards(responseContext);
        });
    });
  }

  /**
   * Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).
   * @param param The request object
   */
  public restoreDashboards(param: DashboardsApiRestoreDashboardsRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.restoreDashboards(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.restoreDashboards(responseContext);
        });
    });
  }

  /**
   * Update a dashboard using the specified ID.
   * @param param The request object
   */
  public updateDashboard(param: DashboardsApiUpdateDashboardRequest, options?: Configuration): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.updateDashboard(param.dashboardId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateDashboard(responseContext);
        });
    });
  }
}