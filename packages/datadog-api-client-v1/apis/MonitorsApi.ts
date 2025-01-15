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
import { CheckCanDeleteMonitorResponse } from "../models/CheckCanDeleteMonitorResponse";
import { DeletedMonitor } from "../models/DeletedMonitor";
import { Monitor } from "../models/Monitor";
import { MonitorGroupSearchResponse } from "../models/MonitorGroupSearchResponse";
import { MonitorSearchResponse } from "../models/MonitorSearchResponse";
import { MonitorUpdateRequest } from "../models/MonitorUpdateRequest";

export class MonitorsApiRequestFactory extends BaseAPIRequestFactory {
  public async checkCanDeleteMonitor(
    monitorIds: Array<number>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorIds' is not null or undefined
    if (monitorIds === null || monitorIds === undefined) {
      throw new RequiredError("monitorIds", "checkCanDeleteMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/can_delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.checkCanDeleteMonitor")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (monitorIds !== undefined) {
      requestContext.setQueryParam(
        "monitor_ids",
        ObjectSerializer.serialize(monitorIds, "Array<number>", "int64"),
        "csv"
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

  public async createMonitor(
    body: Monitor,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.createMonitor")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Monitor", ""),
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

  public async deleteMonitor(
    monitorId: number,
    force?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "deleteMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/{monitor_id}".replace(
      "{monitor_id}",
      encodeURIComponent(String(monitorId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.deleteMonitor")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "string", ""),
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

  public async getMonitor(
    monitorId: number,
    groupStates?: string,
    withDowntimes?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "getMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/{monitor_id}".replace(
      "{monitor_id}",
      encodeURIComponent(String(monitorId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.getMonitor")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (groupStates !== undefined) {
      requestContext.setQueryParam(
        "group_states",
        ObjectSerializer.serialize(groupStates, "string", ""),
        ""
      );
    }
    if (withDowntimes !== undefined) {
      requestContext.setQueryParam(
        "with_downtimes",
        ObjectSerializer.serialize(withDowntimes, "boolean", ""),
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

  public async listMonitors(
    groupStates?: string,
    name?: string,
    tags?: string,
    monitorTags?: string,
    withDowntimes?: boolean,
    idOffset?: number,
    page?: number,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/monitor";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.listMonitors")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (groupStates !== undefined) {
      requestContext.setQueryParam(
        "group_states",
        ObjectSerializer.serialize(groupStates, "string", ""),
        ""
      );
    }
    if (name !== undefined) {
      requestContext.setQueryParam(
        "name",
        ObjectSerializer.serialize(name, "string", ""),
        ""
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "string", ""),
        ""
      );
    }
    if (monitorTags !== undefined) {
      requestContext.setQueryParam(
        "monitor_tags",
        ObjectSerializer.serialize(monitorTags, "string", ""),
        ""
      );
    }
    if (withDowntimes !== undefined) {
      requestContext.setQueryParam(
        "with_downtimes",
        ObjectSerializer.serialize(withDowntimes, "boolean", ""),
        ""
      );
    }
    if (idOffset !== undefined) {
      requestContext.setQueryParam(
        "id_offset",
        ObjectSerializer.serialize(idOffset, "number", "int64"),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int32"),
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

  public async searchMonitorGroups(
    query?: string,
    page?: number,
    perPage?: number,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/monitor/groups/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.searchMonitorGroups")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
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
    if (perPage !== undefined) {
      requestContext.setQueryParam(
        "per_page",
        ObjectSerializer.serialize(perPage, "number", "int64"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
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

  public async searchMonitors(
    query?: string,
    page?: number,
    perPage?: number,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/monitor/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.searchMonitors")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
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
    if (perPage !== undefined) {
      requestContext.setQueryParam(
        "per_page",
        ObjectSerializer.serialize(perPage, "number", "int64"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
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

  public async updateMonitor(
    monitorId: number,
    body: MonitorUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "updateMonitor");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/{monitor_id}".replace(
      "{monitor_id}",
      encodeURIComponent(String(monitorId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.updateMonitor")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MonitorUpdateRequest", ""),
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

  public async validateExistingMonitor(
    monitorId: number,
    body: Monitor,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "validateExistingMonitor");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateExistingMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/{monitor_id}/validate".replace(
      "{monitor_id}",
      encodeURIComponent(String(monitorId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.validateExistingMonitor")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Monitor", ""),
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

  public async validateMonitor(
    body: Monitor,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateMonitor");
    }

    // Path Params
    const localVarPath = "/api/v1/monitor/validate";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.MonitorsApi.validateMonitor")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Monitor", ""),
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

export class MonitorsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to checkCanDeleteMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async checkCanDeleteMonitor(
    response: ResponseContext
  ): Promise<CheckCanDeleteMonitorResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 409) {
      const body: CheckCanDeleteMonitorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CheckCanDeleteMonitorResponse"
      ) as CheckCanDeleteMonitorResponse;
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
      const body: CheckCanDeleteMonitorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CheckCanDeleteMonitorResponse",
        ""
      ) as CheckCanDeleteMonitorResponse;
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
   * @params response Response returned by the server for a request to createMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMonitor(response: ResponseContext): Promise<Monitor> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Monitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Monitor"
      ) as Monitor;
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
      const body: Monitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Monitor",
        ""
      ) as Monitor;
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
   * @params response Response returned by the server for a request to deleteMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitor(
    response: ResponseContext
  ): Promise<DeletedMonitor> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeletedMonitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeletedMonitor"
      ) as DeletedMonitor;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: DeletedMonitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeletedMonitor",
        ""
      ) as DeletedMonitor;
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
   * @params response Response returned by the server for a request to getMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitor(response: ResponseContext): Promise<Monitor> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Monitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Monitor"
      ) as Monitor;
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
      const body: Monitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Monitor",
        ""
      ) as Monitor;
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
   * @params response Response returned by the server for a request to listMonitors
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitors(
    response: ResponseContext
  ): Promise<Array<Monitor>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Array<Monitor> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Monitor>"
      ) as Array<Monitor>;
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
      const body: Array<Monitor> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Monitor>",
        ""
      ) as Array<Monitor>;
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
   * @params response Response returned by the server for a request to searchMonitorGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchMonitorGroups(
    response: ResponseContext
  ): Promise<MonitorGroupSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorGroupSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorGroupSearchResponse"
      ) as MonitorGroupSearchResponse;
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
      const body: MonitorGroupSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorGroupSearchResponse",
        ""
      ) as MonitorGroupSearchResponse;
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
   * @params response Response returned by the server for a request to searchMonitors
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchMonitors(
    response: ResponseContext
  ): Promise<MonitorSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorSearchResponse"
      ) as MonitorSearchResponse;
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
      const body: MonitorSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorSearchResponse",
        ""
      ) as MonitorSearchResponse;
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
   * @params response Response returned by the server for a request to updateMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitor(response: ResponseContext): Promise<Monitor> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Monitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Monitor"
      ) as Monitor;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: Monitor = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Monitor",
        ""
      ) as Monitor;
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
   * @params response Response returned by the server for a request to validateExistingMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateExistingMonitor(
    response: ResponseContext
  ): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
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
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
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
   * @params response Response returned by the server for a request to validateMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateMonitor(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
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
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface MonitorsApiCheckCanDeleteMonitorRequest {
  /**
   * The IDs of the monitor to check.
   * @type Array<number>
   */
  monitorIds: Array<number>;
}

export interface MonitorsApiCreateMonitorRequest {
  /**
   * Create a monitor request body.
   * @type Monitor
   */
  body: Monitor;
}

export interface MonitorsApiDeleteMonitorRequest {
  /**
   * The ID of the monitor.
   * @type number
   */
  monitorId: number;
  /**
   * Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor).
   * @type string
   */
  force?: string;
}

export interface MonitorsApiGetMonitorRequest {
  /**
   * The ID of the monitor
   * @type number
   */
  monitorId: number;
  /**
   * When specified, shows additional information about the group states. Choose one or more from `all`, `alert`, `warn`, and `no data`.
   * @type string
   */
  groupStates?: string;
  /**
   * If this argument is set to true, then the returned data includes all current active downtimes for the monitor.
   * @type boolean
   */
  withDowntimes?: boolean;
}

export interface MonitorsApiListMonitorsRequest {
  /**
   * When specified, shows additional information about the group states.
   * Choose one or more from `all`, `alert`, `warn`, and `no data`.
   * @type string
   */
  groupStates?: string;
  /**
   * A string to filter monitors by name.
   * @type string
   */
  name?: string;
  /**
   * A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
   * For example, `host:host0`.
   * @type string
   */
  tags?: string;
  /**
   * A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors.
   * Tags created in the Datadog UI automatically have the service key prepended. For example, `service:my-app`.
   * @type string
   */
  monitorTags?: string;
  /**
   * If this argument is set to true, then the returned data includes all current active downtimes for each monitor.
   * @type boolean
   */
  withDowntimes?: boolean;
  /**
   * Use this parameter for paginating through large sets of monitors. Start with a value of zero, make a request, set the value to the last ID of result set, and then repeat until the response is empty.
   * @type number
   */
  idOffset?: number;
  /**
   * The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
   * @type number
   */
  page?: number;
  /**
   * The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a `page_size` limit. However, if page is specified and `page_size` is not, the argument defaults to 100.
   * @type number
   */
  pageSize?: number;
}

export interface MonitorsApiSearchMonitorGroupsRequest {
  /**
   * After entering a search query on the [Triggered Monitors page][1], use the query parameter value in the
   * URL of the page as a value for this parameter. For more information, see the [Manage Monitors documentation][2].
   *
   * The query can contain any number of space-separated monitor attributes, for instance: `query="type:metric group_status:alert"`.
   *
   * [1]: https://app.datadoghq.com/monitors/triggered
   * [2]: /monitors/manage/#triggered-monitors
   * @type string
   */
  query?: string;
  /**
   * Page to start paginating from.
   * @type number
   */
  page?: number;
  /**
   * Number of monitors to return per page.
   * @type number
   */
  perPage?: number;
  /**
   * String for sort order, composed of field and sort order separate by a comma, for example `name,asc`. Supported sort directions: `asc`, `desc`. Supported fields:
   *
   * * `name`
   * * `status`
   * * `tags`
   * @type string
   */
  sort?: string;
}

export interface MonitorsApiSearchMonitorsRequest {
  /**
   * After entering a search query in your [Manage Monitor page][1] use the query parameter value in the
   * URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2]
   * page to learn more.
   *
   * The query can contain any number of space-separated monitor attributes, for instance `query="type:metric status:alert"`.
   *
   * [1]: https://app.datadoghq.com/monitors/manage
   * [2]: /monitors/manage/#find-the-monitors
   * @type string
   */
  query?: string;
  /**
   * Page to start paginating from.
   * @type number
   */
  page?: number;
  /**
   * Number of monitors to return per page.
   * @type number
   */
  perPage?: number;
  /**
   * String for sort order, composed of field and sort order separate by a comma, for example `name,asc`. Supported sort directions: `asc`, `desc`. Supported fields:
   *
   * * `name`
   * * `status`
   * * `tags`
   * @type string
   */
  sort?: string;
}

export interface MonitorsApiUpdateMonitorRequest {
  /**
   * The ID of the monitor.
   * @type number
   */
  monitorId: number;
  /**
   * Edit a monitor request body.
   * @type MonitorUpdateRequest
   */
  body: MonitorUpdateRequest;
}

export interface MonitorsApiValidateExistingMonitorRequest {
  /**
   * The ID of the monitor
   * @type number
   */
  monitorId: number;
  /**
   * Monitor request object
   * @type Monitor
   */
  body: Monitor;
}

export interface MonitorsApiValidateMonitorRequest {
  /**
   * Monitor request object
   * @type Monitor
   */
  body: Monitor;
}

export class MonitorsApi {
  private requestFactory: MonitorsApiRequestFactory;
  private responseProcessor: MonitorsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MonitorsApiRequestFactory,
    responseProcessor?: MonitorsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new MonitorsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MonitorsApiResponseProcessor();
  }

  /**
   * Check if the given monitors can be deleted.
   * @param param The request object
   */
  public checkCanDeleteMonitor(
    param: MonitorsApiCheckCanDeleteMonitorRequest,
    options?: Configuration
  ): Promise<CheckCanDeleteMonitorResponse> {
    const requestContextPromise = this.requestFactory.checkCanDeleteMonitor(
      param.monitorIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkCanDeleteMonitor(responseContext);
        });
    });
  }

  /**
   * Create a monitor using the specified options.
   *
   * #### Monitor Types
   *
   * The type of monitor chosen from:
   *
   * - anomaly: `query alert`
   * - APM: `query alert` or `trace-analytics alert`
   * - composite: `composite`
   * - custom: `service check`
   * - forecast: `query alert`
   * - host: `service check`
   * - integration: `query alert` or `service check`
   * - live process: `process alert`
   * - logs: `log alert`
   * - metric: `query alert`
   * - network: `service check`
   * - outlier: `query alert`
   * - process: `service check`
   * - rum: `rum alert`
   * - SLO: `slo alert`
   * - watchdog: `event-v2 alert`
   * - event-v2: `event-v2 alert`
   * - audit: `audit alert`
   * - error-tracking: `error-tracking alert`
   * - database-monitoring: `database-monitoring alert`
   * - network-performance: `network-performance alert`
   * - cloud cost: `cost alert`
   *
   * **Notes**:
   * - Synthetic monitors are created through the Synthetics API. See the [Synthetics API](https://docs.datadoghq.com/api/latest/synthetics/) documentation for more information.
   * - Log monitors require an unscoped App Key.
   *
   * #### Query Types
   *
   * ##### Metric Alert Query
   *
   * Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`
   *
   * - `time_aggr`: avg, sum, max, min, change, or pct_change
   * - `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w`
   * - `space_aggr`: avg, sum, min, or max
   * - `tags`: one or more tags (comma-separated), or *
   * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert)
   * - `operator`: <, <=, >, >=, ==, or !=
   * - `#`: an integer or decimal number used to set the threshold
   *
   * If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window),
   * timeshift):space_aggr:metric{tags} [by {key}] operator #` with:
   *
   * - `change_aggr` change, pct_change
   * - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/create/types/#define-the-conditions)
   * - `time_window` last\_#m (between 1 and 2880 depending on the monitor type), last\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2)
   * - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago
   *
   * Use this to create an outlier monitor using the following query:
   * `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`
   *
   * ##### Service Check Query
   *
   * Example: `"check".over(tags).last(count).by(group).count_by_status()`
   *
   * - `check` name of the check, for example `datadog.agent.up`
   * - `tags` one or more quoted tags (comma-separated), or "*". for example: `.over("env:prod", "role:db")`; `over` cannot be blank.
   * - `count` must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100.
   * For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3.
   * - `group` must be specified for check monitors. Per-check grouping is already explicitly known for some service checks.
   * For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See [Service Checks](https://docs.datadoghq.com/api/latest/service-checks/) documentation for more information.
   *
   * ##### Event Alert Query
   *
   * **Note:** The Event Alert Query has been replaced by the Event V2 Alert Query. For more information, see the [Event Migration guide](https://docs.datadoghq.com/service_management/events/guides/migrating_to_new_events_features/).
   *
   * ##### Event V2 Alert Query
   *
   * Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * ##### Process Alert Query
   *
   * Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`
   *
   * - `search` free text search string for querying processes.
   * Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page.
   * - `tags` one or more tags (comma-separated)
   * - `timeframe` the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d
   * - `operator` <, <=, >, >=, ==, or !=
   * - `#` an integer or decimal number used to set the threshold
   *
   * ##### Logs Alert Query
   *
   * Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `index_name` For multi-index organizations, the log index in which the request is performed.
   * - `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * ##### Composite Query
   *
   * Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors
   *
   * * `name` [*required*, *default* = **dynamic, based on query**]: The name of the alert.
   * * `message` [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor.
   * Email notifications can be sent to specific users by using the same '@username' notation as events.
   * * `tags` [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor.
   * When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags.
   * It is only available via the API and isn't visible or editable in the Datadog UI.
   *
   * ##### SLO Alert Query
   *
   * Example: `error_budget("slo_id").over("time_window") operator #`
   *
   * - `slo_id`: The alphanumeric SLO ID of the SLO you are configuring the alert for.
   * - `time_window`: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`.
   * - `operator`: `>=` or `>`
   *
   * ##### Audit Alert Query
   *
   * Example: `audits(query).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * ##### CI Pipelines Alert Query
   *
   * Example: `ci-pipelines(query).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * ##### CI Tests Alert Query
   *
   * Example: `ci-tests(query).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * ##### Error Tracking Alert Query
   *
   * "New issue" example: `error-tracking(query).source(issue_source).new().rollup(rollup_method[, measure]).by(group_by).last(time_window) operator #`
   * "High impact issue" example: `error-tracking(query).source(issue_source).impact().rollup(rollup_method[, measure]).by(group_by).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `issue_source` The issue source - supports `all`, `browser`, `mobile` and `backend` and defaults to `all` if omitted.
   * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality` and defaults to `count` if omitted.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `group by` Comma-separated list of attributes to group by - should contain at least `issue.id`.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * **Database Monitoring Alert Query**
   *
   * Example: `database-monitoring(query).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * **Network Performance Alert Query**
   *
   * Example: `network-performance(query).rollup(rollup_method[, measure]).last(time_window) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
   * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
   * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
   * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
   * - `#` an integer or decimal number used to set the threshold.
   *
   * **Cost Alert Query**
   *
   * Example: `formula(query).last(time_window).function(parameter) operator #`
   *
   * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
   * - `time_window` - supports daily roll-up e.g. `7d`
   * - `function` - [optional, defaults to `threshold` monitor if omitted] supports `change`, `anomaly`, `forecast`
   * - `parameter` Specify the parameter of the type
   *     - for `change`:
   *         - supports `relative`, `absolute`
   *         - [optional] supports `#`, where `#` is an integer or decimal number used to set the threshold
   *     - for `anomaly`:
   *         - supports `direction=both`, `direction=above`, `direction=below`
   *         - [optional] supports `threshold=#`, where `#` is an integer or decimal number used to set the threshold
   * - `operator`
   *     - for `threshold` supports `<`, `<=`, `>`, `>=`, `==`, or `!=`
   *     - for `change` supports `>`, `<`
   *     - for `anomaly` supports `>=`
   *     - for `forecast` supports `>`
   * - `#` an integer or decimal number used to set the threshold.
   * @param param The request object
   */
  public createMonitor(
    param: MonitorsApiCreateMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const requestContextPromise = this.requestFactory.createMonitor(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitor(responseContext);
        });
    });
  }

  /**
   * Delete the specified monitor
   * @param param The request object
   */
  public deleteMonitor(
    param: MonitorsApiDeleteMonitorRequest,
    options?: Configuration
  ): Promise<DeletedMonitor> {
    const requestContextPromise = this.requestFactory.deleteMonitor(
      param.monitorId,
      param.force,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitor(responseContext);
        });
    });
  }

  /**
   * Get details about the specified monitor from your organization.
   * @param param The request object
   */
  public getMonitor(
    param: MonitorsApiGetMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const requestContextPromise = this.requestFactory.getMonitor(
      param.monitorId,
      param.groupStates,
      param.withDowntimes,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitor(responseContext);
        });
    });
  }

  /**
   * Get all monitors from your organization.
   * @param param The request object
   */
  public listMonitors(
    param: MonitorsApiListMonitorsRequest = {},
    options?: Configuration
  ): Promise<Array<Monitor>> {
    const requestContextPromise = this.requestFactory.listMonitors(
      param.groupStates,
      param.name,
      param.tags,
      param.monitorTags,
      param.withDowntimes,
      param.idOffset,
      param.page,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitors(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listMonitors returning a generator with all the items.
   */
  public async *listMonitorsWithPagination(
    param: MonitorsApiListMonitorsRequest = {},
    options?: Configuration
  ): AsyncGenerator<Monitor> {
    let pageSize = 100;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.page = 0;
    while (true) {
      const requestContext = await this.requestFactory.listMonitors(
        param.groupStates,
        param.name,
        param.tags,
        param.monitorTags,
        param.withDowntimes,
        param.idOffset,
        param.page,
        param.pageSize,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listMonitors(
        responseContext
      );
      const results = response;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.page = param.page + 1;
    }
  }

  /**
   * Search and filter your monitor groups details.
   * @param param The request object
   */
  public searchMonitorGroups(
    param: MonitorsApiSearchMonitorGroupsRequest = {},
    options?: Configuration
  ): Promise<MonitorGroupSearchResponse> {
    const requestContextPromise = this.requestFactory.searchMonitorGroups(
      param.query,
      param.page,
      param.perPage,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchMonitorGroups(responseContext);
        });
    });
  }

  /**
   * Search and filter your monitors details.
   * @param param The request object
   */
  public searchMonitors(
    param: MonitorsApiSearchMonitorsRequest = {},
    options?: Configuration
  ): Promise<MonitorSearchResponse> {
    const requestContextPromise = this.requestFactory.searchMonitors(
      param.query,
      param.page,
      param.perPage,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchMonitors(responseContext);
        });
    });
  }

  /**
   * Edit the specified monitor.
   * @param param The request object
   */
  public updateMonitor(
    param: MonitorsApiUpdateMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const requestContextPromise = this.requestFactory.updateMonitor(
      param.monitorId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitor(responseContext);
        });
    });
  }

  /**
   * Validate the monitor provided in the request.
   * @param param The request object
   */
  public validateExistingMonitor(
    param: MonitorsApiValidateExistingMonitorRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.validateExistingMonitor(
      param.monitorId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateExistingMonitor(
            responseContext
          );
        });
    });
  }

  /**
   * Validate the monitor provided in the request.
   *
   * **Note**: Log monitors require an unscoped App Key.
   * @param param The request object
   */
  public validateMonitor(
    param: MonitorsApiValidateMonitorRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.validateMonitor(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateMonitor(responseContext);
        });
    });
  }
}
