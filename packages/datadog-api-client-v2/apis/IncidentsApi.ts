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
import { IncidentAttachmentAttachmentType } from "../models/IncidentAttachmentAttachmentType";
import { IncidentAttachmentRelatedObject } from "../models/IncidentAttachmentRelatedObject";
import { IncidentAttachmentsResponse } from "../models/IncidentAttachmentsResponse";
import { IncidentAttachmentUpdateRequest } from "../models/IncidentAttachmentUpdateRequest";
import { IncidentAttachmentUpdateResponse } from "../models/IncidentAttachmentUpdateResponse";
import { IncidentCreateRequest } from "../models/IncidentCreateRequest";
import { IncidentIntegrationMetadataCreateRequest } from "../models/IncidentIntegrationMetadataCreateRequest";
import { IncidentIntegrationMetadataListResponse } from "../models/IncidentIntegrationMetadataListResponse";
import { IncidentIntegrationMetadataPatchRequest } from "../models/IncidentIntegrationMetadataPatchRequest";
import { IncidentIntegrationMetadataResponse } from "../models/IncidentIntegrationMetadataResponse";
import { IncidentRelatedObject } from "../models/IncidentRelatedObject";
import { IncidentResponse } from "../models/IncidentResponse";
import { IncidentResponseData } from "../models/IncidentResponseData";
import { IncidentSearchResponse } from "../models/IncidentSearchResponse";
import { IncidentSearchResponseIncidentsData } from "../models/IncidentSearchResponseIncidentsData";
import { IncidentSearchSortOrder } from "../models/IncidentSearchSortOrder";
import { IncidentsResponse } from "../models/IncidentsResponse";
import { IncidentTodoCreateRequest } from "../models/IncidentTodoCreateRequest";
import { IncidentTodoListResponse } from "../models/IncidentTodoListResponse";
import { IncidentTodoPatchRequest } from "../models/IncidentTodoPatchRequest";
import { IncidentTodoResponse } from "../models/IncidentTodoResponse";
import { IncidentUpdateRequest } from "../models/IncidentUpdateRequest";

export class IncidentsApiRequestFactory extends BaseAPIRequestFactory {
  public async createIncident(
    body: IncidentCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncident'");
    if (!_config.unstableOperations["v2.createIncident"]) {
      throw new Error("Unstable operation 'createIncident' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncident")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentCreateRequest", ""),
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

  public async createIncidentIntegration(
    incidentId: string,
    body: IncidentIntegrationMetadataCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentIntegration'");
    if (!_config.unstableOperations["v2.createIncidentIntegration"]) {
      throw new Error(
        "Unstable operation 'createIncidentIntegration' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentIntegration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentIntegration")
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
        "IncidentIntegrationMetadataCreateRequest",
        ""
      ),
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

  public async createIncidentTodo(
    incidentId: string,
    body: IncidentTodoCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentTodo'");
    if (!_config.unstableOperations["v2.createIncidentTodo"]) {
      throw new Error("Unstable operation 'createIncidentTodo' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentTodo");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentTodo");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/todos".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentTodo")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentTodoCreateRequest", ""),
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

  public async deleteIncident(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncident'");
    if (!_config.unstableOperations["v2.deleteIncident"]) {
      throw new Error("Unstable operation 'deleteIncident' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncident")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteIncidentIntegration(
    incidentId: string,
    integrationMetadataId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentIntegration'");
    if (!_config.unstableOperations["v2.deleteIncidentIntegration"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentIntegration' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentIntegration");
    }

    // verify required parameter 'integrationMetadataId' is not null or undefined
    if (integrationMetadataId === null || integrationMetadataId === undefined) {
      throw new RequiredError(
        "integrationMetadataId",
        "deleteIncidentIntegration"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{integration_metadata_id}",
          encodeURIComponent(String(integrationMetadataId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentIntegration")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteIncidentTodo(
    incidentId: string,
    todoId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentTodo'");
    if (!_config.unstableOperations["v2.deleteIncidentTodo"]) {
      throw new Error("Unstable operation 'deleteIncidentTodo' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentTodo");
    }

    // verify required parameter 'todoId' is not null or undefined
    if (todoId === null || todoId === undefined) {
      throw new RequiredError("todoId", "deleteIncidentTodo");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/todos/{todo_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{todo_id}", encodeURIComponent(String(todoId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentTodo")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getIncident(
    incidentId: string,
    include?: Array<IncidentRelatedObject>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncident'");
    if (!_config.unstableOperations["v2.getIncident"]) {
      throw new Error("Unstable operation 'getIncident' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncident")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<IncidentRelatedObject>", "")
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

  public async getIncidentIntegration(
    incidentId: string,
    integrationMetadataId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentIntegration'");
    if (!_config.unstableOperations["v2.getIncidentIntegration"]) {
      throw new Error(
        "Unstable operation 'getIncidentIntegration' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentIntegration");
    }

    // verify required parameter 'integrationMetadataId' is not null or undefined
    if (integrationMetadataId === null || integrationMetadataId === undefined) {
      throw new RequiredError(
        "integrationMetadataId",
        "getIncidentIntegration"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{integration_metadata_id}",
          encodeURIComponent(String(integrationMetadataId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentIntegration")
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

  public async getIncidentTodo(
    incidentId: string,
    todoId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentTodo'");
    if (!_config.unstableOperations["v2.getIncidentTodo"]) {
      throw new Error("Unstable operation 'getIncidentTodo' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentTodo");
    }

    // verify required parameter 'todoId' is not null or undefined
    if (todoId === null || todoId === undefined) {
      throw new RequiredError("todoId", "getIncidentTodo");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/todos/{todo_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{todo_id}", encodeURIComponent(String(todoId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentTodo")
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

  public async listIncidentAttachments(
    incidentId: string,
    include?: Array<IncidentAttachmentRelatedObject>,
    filterAttachmentType?: Array<IncidentAttachmentAttachmentType>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentAttachments'");
    if (!_config.unstableOperations["v2.listIncidentAttachments"]) {
      throw new Error(
        "Unstable operation 'listIncidentAttachments' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentAttachments");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/attachments".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentAttachments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(
          include,
          "Array<IncidentAttachmentRelatedObject>",
          ""
        )
      );
    }
    if (filterAttachmentType !== undefined) {
      requestContext.setQueryParam(
        "filter[attachment_type]",
        ObjectSerializer.serialize(
          filterAttachmentType,
          "Array<IncidentAttachmentAttachmentType>",
          ""
        )
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

  public async listIncidentIntegrations(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentIntegrations'");
    if (!_config.unstableOperations["v2.listIncidentIntegrations"]) {
      throw new Error(
        "Unstable operation 'listIncidentIntegrations' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentIntegrations");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentIntegrations")
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

  public async listIncidents(
    include?: Array<IncidentRelatedObject>,
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidents'");
    if (!_config.unstableOperations["v2.listIncidents"]) {
      throw new Error("Unstable operation 'listIncidents' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<IncidentRelatedObject>", "")
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64")
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

  public async listIncidentTodos(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentTodos'");
    if (!_config.unstableOperations["v2.listIncidentTodos"]) {
      throw new Error("Unstable operation 'listIncidentTodos' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentTodos");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/todos".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentTodos")
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

  public async searchIncidents(
    query: string,
    include?: IncidentRelatedObject,
    sort?: IncidentSearchSortOrder,
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchIncidents'");
    if (!_config.unstableOperations["v2.searchIncidents"]) {
      throw new Error("Unstable operation 'searchIncidents' is disabled");
    }

    // verify required parameter 'query' is not null or undefined
    if (query === null || query === undefined) {
      throw new RequiredError("query", "searchIncidents");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.searchIncidents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "IncidentRelatedObject", "")
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", "")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "IncidentSearchSortOrder", "")
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64")
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

  public async updateIncident(
    incidentId: string,
    body: IncidentUpdateRequest,
    include?: Array<IncidentRelatedObject>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncident'");
    if (!_config.unstableOperations["v2.updateIncident"]) {
      throw new Error("Unstable operation 'updateIncident' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncident");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncident")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<IncidentRelatedObject>", "")
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentUpdateRequest", ""),
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

  public async updateIncidentAttachments(
    incidentId: string,
    body: IncidentAttachmentUpdateRequest,
    include?: Array<IncidentAttachmentRelatedObject>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentAttachments'");
    if (!_config.unstableOperations["v2.updateIncidentAttachments"]) {
      throw new Error(
        "Unstable operation 'updateIncidentAttachments' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentAttachments");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentAttachments");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/attachments".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentAttachments")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(
          include,
          "Array<IncidentAttachmentRelatedObject>",
          ""
        )
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentAttachmentUpdateRequest", ""),
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

  public async updateIncidentIntegration(
    incidentId: string,
    integrationMetadataId: string,
    body: IncidentIntegrationMetadataPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentIntegration'");
    if (!_config.unstableOperations["v2.updateIncidentIntegration"]) {
      throw new Error(
        "Unstable operation 'updateIncidentIntegration' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentIntegration");
    }

    // verify required parameter 'integrationMetadataId' is not null or undefined
    if (integrationMetadataId === null || integrationMetadataId === undefined) {
      throw new RequiredError(
        "integrationMetadataId",
        "updateIncidentIntegration"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{integration_metadata_id}",
          encodeURIComponent(String(integrationMetadataId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentIntegration")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "IncidentIntegrationMetadataPatchRequest",
        ""
      ),
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

  public async updateIncidentTodo(
    incidentId: string,
    todoId: string,
    body: IncidentTodoPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentTodo'");
    if (!_config.unstableOperations["v2.updateIncidentTodo"]) {
      throw new Error("Unstable operation 'updateIncidentTodo' is disabled");
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentTodo");
    }

    // verify required parameter 'todoId' is not null or undefined
    if (todoId === null || todoId === undefined) {
      throw new RequiredError("todoId", "updateIncidentTodo");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentTodo");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/todos/{todo_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{todo_id}", encodeURIComponent(String(todoId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentTodo")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentTodoPatchRequest", ""),
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

export class IncidentsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncident(
    response: ResponseContext
  ): Promise<IncidentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse"
      ) as IncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse",
        ""
      ) as IncidentResponse;
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
   * @params response Response returned by the server for a request to createIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentIntegration(
    response: ResponseContext
  ): Promise<IncidentIntegrationMetadataResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse"
        ) as IncidentIntegrationMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse",
          ""
        ) as IncidentIntegrationMetadataResponse;
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
   * @params response Response returned by the server for a request to createIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentTodo(
    response: ResponseContext
  ): Promise<IncidentTodoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse"
      ) as IncidentTodoResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse",
        ""
      ) as IncidentTodoResponse;
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
   * @params response Response returned by the server for a request to deleteIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncident(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to deleteIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentIntegration(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to deleteIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentTodo(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to getIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncident(
    response: ResponseContext
  ): Promise<IncidentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse"
      ) as IncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse",
        ""
      ) as IncidentResponse;
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
   * @params response Response returned by the server for a request to getIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentIntegration(
    response: ResponseContext
  ): Promise<IncidentIntegrationMetadataResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse"
        ) as IncidentIntegrationMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse",
          ""
        ) as IncidentIntegrationMetadataResponse;
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
   * @params response Response returned by the server for a request to getIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentTodo(
    response: ResponseContext
  ): Promise<IncidentTodoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse"
      ) as IncidentTodoResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse",
        ""
      ) as IncidentTodoResponse;
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
   * @params response Response returned by the server for a request to listIncidentAttachments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentAttachments(
    response: ResponseContext
  ): Promise<IncidentAttachmentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentAttachmentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentAttachmentsResponse"
      ) as IncidentAttachmentsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentAttachmentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentAttachmentsResponse",
        ""
      ) as IncidentAttachmentsResponse;
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
   * @params response Response returned by the server for a request to listIncidentIntegrations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentIntegrations(
    response: ResponseContext
  ): Promise<IncidentIntegrationMetadataListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentIntegrationMetadataListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataListResponse"
        ) as IncidentIntegrationMetadataListResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentIntegrationMetadataListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataListResponse",
          ""
        ) as IncidentIntegrationMetadataListResponse;
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
   * @params response Response returned by the server for a request to listIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidents(
    response: ResponseContext
  ): Promise<IncidentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentsResponse"
      ) as IncidentsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentsResponse",
        ""
      ) as IncidentsResponse;
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
   * @params response Response returned by the server for a request to listIncidentTodos
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTodos(
    response: ResponseContext
  ): Promise<IncidentTodoListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentTodoListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoListResponse"
      ) as IncidentTodoListResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentTodoListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoListResponse",
        ""
      ) as IncidentTodoListResponse;
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
   * @params response Response returned by the server for a request to searchIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchIncidents(
    response: ResponseContext
  ): Promise<IncidentSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentSearchResponse"
      ) as IncidentSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentSearchResponse",
        ""
      ) as IncidentSearchResponse;
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
   * @params response Response returned by the server for a request to updateIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncident(
    response: ResponseContext
  ): Promise<IncidentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse"
      ) as IncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse",
        ""
      ) as IncidentResponse;
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
   * @params response Response returned by the server for a request to updateIncidentAttachments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentAttachments(
    response: ResponseContext
  ): Promise<IncidentAttachmentUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentAttachmentUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentAttachmentUpdateResponse"
        ) as IncidentAttachmentUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentAttachmentUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentAttachmentUpdateResponse",
          ""
        ) as IncidentAttachmentUpdateResponse;
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
   * @params response Response returned by the server for a request to updateIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentIntegration(
    response: ResponseContext
  ): Promise<IncidentIntegrationMetadataResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse"
        ) as IncidentIntegrationMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse",
          ""
        ) as IncidentIntegrationMetadataResponse;
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
   * @params response Response returned by the server for a request to updateIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentTodo(
    response: ResponseContext
  ): Promise<IncidentTodoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse"
      ) as IncidentTodoResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: any;
      try {
        body = ObjectSerializer.deserialize(bodyText, "any") as any;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<any>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<any>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse",
        ""
      ) as IncidentTodoResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface IncidentsApiCreateIncidentRequest {
  /**
   * Incident payload.
   * @type IncidentCreateRequest
   */
  body: IncidentCreateRequest;
}

export interface IncidentsApiCreateIncidentIntegrationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident integration metadata payload.
   * @type IncidentIntegrationMetadataCreateRequest
   */
  body: IncidentIntegrationMetadataCreateRequest;
}

export interface IncidentsApiCreateIncidentTodoRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident todo payload.
   * @type IncidentTodoCreateRequest
   */
  body: IncidentTodoCreateRequest;
}

export interface IncidentsApiDeleteIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiDeleteIncidentIntegrationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident integration metadata.
   * @type string
   */
  integrationMetadataId: string;
}

export interface IncidentsApiDeleteIncidentTodoRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident todo.
   * @type string
   */
  todoId: string;
}

export interface IncidentsApiGetIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Specifies which types of related objects should be included in the response.
   * @type Array<IncidentRelatedObject>
   */
  include?: Array<IncidentRelatedObject>;
}

export interface IncidentsApiGetIncidentIntegrationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident integration metadata.
   * @type string
   */
  integrationMetadataId: string;
}

export interface IncidentsApiGetIncidentTodoRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident todo.
   * @type string
   */
  todoId: string;
}

export interface IncidentsApiListIncidentAttachmentsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Specifies which types of related objects are included in the response.
   * @type Array<IncidentAttachmentRelatedObject>
   */
  include?: Array<IncidentAttachmentRelatedObject>;
  /**
   * Specifies which types of attachments are included in the response.
   * @type Array<IncidentAttachmentAttachmentType>
   */
  filterAttachmentType?: Array<IncidentAttachmentAttachmentType>;
}

export interface IncidentsApiListIncidentIntegrationsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiListIncidentsRequest {
  /**
   * Specifies which types of related objects should be included in the response.
   * @type Array<IncidentRelatedObject>
   */
  include?: Array<IncidentRelatedObject>;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
}

export interface IncidentsApiListIncidentTodosRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiSearchIncidentsRequest {
  /**
   * Specifies which incidents should be returned. The query can contain any number of incident facets
   * joined by `ANDs`, along with multiple values for each of those facets joined by `OR`s. For
   * example: `state:active AND severity:(SEV-2 OR SEV-1)`.
   * @type string
   */
  query: string;
  /**
   * Specifies which types of related objects should be included in the response.
   * @type IncidentRelatedObject
   */
  include?: IncidentRelatedObject;
  /**
   * Specifies the order of returned incidents.
   * @type IncidentSearchSortOrder
   */
  sort?: IncidentSearchSortOrder;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
}

export interface IncidentsApiUpdateIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident Payload.
   * @type IncidentUpdateRequest
   */
  body: IncidentUpdateRequest;
  /**
   * Specifies which types of related objects should be included in the response.
   * @type Array<IncidentRelatedObject>
   */
  include?: Array<IncidentRelatedObject>;
}

export interface IncidentsApiUpdateIncidentAttachmentsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident Attachment Payload.
   * @type IncidentAttachmentUpdateRequest
   */
  body: IncidentAttachmentUpdateRequest;
  /**
   * Specifies which types of related objects are included in the response.
   * @type Array<IncidentAttachmentRelatedObject>
   */
  include?: Array<IncidentAttachmentRelatedObject>;
}

export interface IncidentsApiUpdateIncidentIntegrationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident integration metadata.
   * @type string
   */
  integrationMetadataId: string;
  /**
   * Incident integration metadata payload.
   * @type IncidentIntegrationMetadataPatchRequest
   */
  body: IncidentIntegrationMetadataPatchRequest;
}

export interface IncidentsApiUpdateIncidentTodoRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident todo.
   * @type string
   */
  todoId: string;
  /**
   * Incident todo payload.
   * @type IncidentTodoPatchRequest
   */
  body: IncidentTodoPatchRequest;
}

export class IncidentsApi {
  private requestFactory: IncidentsApiRequestFactory;
  private responseProcessor: IncidentsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentsApiRequestFactory,
    responseProcessor?: IncidentsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IncidentsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IncidentsApiResponseProcessor();
  }

  /**
   * Create an incident.
   * @param param The request object
   */
  public createIncident(
    param: IncidentsApiCreateIncidentRequest,
    options?: Configuration
  ): Promise<IncidentResponse> {
    const requestContextPromise = this.requestFactory.createIncident(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncident(responseContext);
        });
    });
  }

  /**
   * Create an incident integration metadata.
   * @param param The request object
   */
  public createIncidentIntegration(
    param: IncidentsApiCreateIncidentIntegrationRequest,
    options?: Configuration
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.createIncidentIntegration(
      param.incidentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentIntegration(
            responseContext
          );
        });
    });
  }

  /**
   * Create an incident todo.
   * @param param The request object
   */
  public createIncidentTodo(
    param: IncidentsApiCreateIncidentTodoRequest,
    options?: Configuration
  ): Promise<IncidentTodoResponse> {
    const requestContextPromise = this.requestFactory.createIncidentTodo(
      param.incidentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentTodo(responseContext);
        });
    });
  }

  /**
   * Deletes an existing incident from the users organization.
   * @param param The request object
   */
  public deleteIncident(
    param: IncidentsApiDeleteIncidentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncident(
      param.incidentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncident(responseContext);
        });
    });
  }

  /**
   * Delete an incident integration metadata.
   * @param param The request object
   */
  public deleteIncidentIntegration(
    param: IncidentsApiDeleteIncidentIntegrationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentIntegration(
      param.incidentId,
      param.integrationMetadataId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentIntegration(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an incident todo.
   * @param param The request object
   */
  public deleteIncidentTodo(
    param: IncidentsApiDeleteIncidentTodoRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentTodo(
      param.incidentId,
      param.todoId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentTodo(responseContext);
        });
    });
  }

  /**
   * Get the details of an incident by `incident_id`.
   * @param param The request object
   */
  public getIncident(
    param: IncidentsApiGetIncidentRequest,
    options?: Configuration
  ): Promise<IncidentResponse> {
    const requestContextPromise = this.requestFactory.getIncident(
      param.incidentId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncident(responseContext);
        });
    });
  }

  /**
   * Get incident integration metadata details.
   * @param param The request object
   */
  public getIncidentIntegration(
    param: IncidentsApiGetIncidentIntegrationRequest,
    options?: Configuration
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.getIncidentIntegration(
      param.incidentId,
      param.integrationMetadataId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentIntegration(responseContext);
        });
    });
  }

  /**
   * Get incident todo details.
   * @param param The request object
   */
  public getIncidentTodo(
    param: IncidentsApiGetIncidentTodoRequest,
    options?: Configuration
  ): Promise<IncidentTodoResponse> {
    const requestContextPromise = this.requestFactory.getIncidentTodo(
      param.incidentId,
      param.todoId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentTodo(responseContext);
        });
    });
  }

  /**
   * Get all attachments for a given incident.
   * @param param The request object
   */
  public listIncidentAttachments(
    param: IncidentsApiListIncidentAttachmentsRequest,
    options?: Configuration
  ): Promise<IncidentAttachmentsResponse> {
    const requestContextPromise = this.requestFactory.listIncidentAttachments(
      param.incidentId,
      param.include,
      param.filterAttachmentType,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentAttachments(
            responseContext
          );
        });
    });
  }

  /**
   * Get all integration metadata for an incident.
   * @param param The request object
   */
  public listIncidentIntegrations(
    param: IncidentsApiListIncidentIntegrationsRequest,
    options?: Configuration
  ): Promise<IncidentIntegrationMetadataListResponse> {
    const requestContextPromise = this.requestFactory.listIncidentIntegrations(
      param.incidentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentIntegrations(
            responseContext
          );
        });
    });
  }

  /**
   * Get all incidents for the user's organization.
   * @param param The request object
   */
  public listIncidents(
    param: IncidentsApiListIncidentsRequest = {},
    options?: Configuration
  ): Promise<IncidentsResponse> {
    const requestContextPromise = this.requestFactory.listIncidents(
      param.include,
      param.pageSize,
      param.pageOffset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listIncidents returning a generator with all the items.
   */
  public async *listIncidentsWithPagination(
    param: IncidentsApiListIncidentsRequest = {},
    options?: Configuration
  ): AsyncGenerator<IncidentResponseData> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listIncidents(
        param.include,
        param.pageSize,
        param.pageOffset,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listIncidents(
        responseContext
      );
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Get all todos for an incident.
   * @param param The request object
   */
  public listIncidentTodos(
    param: IncidentsApiListIncidentTodosRequest,
    options?: Configuration
  ): Promise<IncidentTodoListResponse> {
    const requestContextPromise = this.requestFactory.listIncidentTodos(
      param.incidentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentTodos(responseContext);
        });
    });
  }

  /**
   * Search for incidents matching a certain query.
   * @param param The request object
   */
  public searchIncidents(
    param: IncidentsApiSearchIncidentsRequest,
    options?: Configuration
  ): Promise<IncidentSearchResponse> {
    const requestContextPromise = this.requestFactory.searchIncidents(
      param.query,
      param.include,
      param.sort,
      param.pageSize,
      param.pageOffset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchIncidents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchIncidents returning a generator with all the items.
   */
  public async *searchIncidentsWithPagination(
    param: IncidentsApiSearchIncidentsRequest,
    options?: Configuration
  ): AsyncGenerator<IncidentSearchResponseIncidentsData> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchIncidents(
        param.query,
        param.include,
        param.sort,
        param.pageSize,
        param.pageOffset,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.searchIncidents(
        responseContext
      );
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const responseDataAttributes = responseData.attributes;
      if (responseDataAttributes === undefined) {
        break;
      }
      const responseDataAttributesIncidents = responseDataAttributes.incidents;
      if (responseDataAttributesIncidents === undefined) {
        break;
      }
      const results = responseDataAttributesIncidents;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
   * @param param The request object
   */
  public updateIncident(
    param: IncidentsApiUpdateIncidentRequest,
    options?: Configuration
  ): Promise<IncidentResponse> {
    const requestContextPromise = this.requestFactory.updateIncident(
      param.incidentId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncident(responseContext);
        });
    });
  }

  /**
   * The bulk update endpoint for creating, updating, and deleting attachments for a given incident.
   * @param param The request object
   */
  public updateIncidentAttachments(
    param: IncidentsApiUpdateIncidentAttachmentsRequest,
    options?: Configuration
  ): Promise<IncidentAttachmentUpdateResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentAttachments(
      param.incidentId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentAttachments(
            responseContext
          );
        });
    });
  }

  /**
   * Update an existing incident integration metadata.
   * @param param The request object
   */
  public updateIncidentIntegration(
    param: IncidentsApiUpdateIncidentIntegrationRequest,
    options?: Configuration
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentIntegration(
      param.incidentId,
      param.integrationMetadataId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentIntegration(
            responseContext
          );
        });
    });
  }

  /**
   * Update an incident todo.
   * @param param The request object
   */
  public updateIncidentTodo(
    param: IncidentsApiUpdateIncidentTodoRequest,
    options?: Configuration
  ): Promise<IncidentTodoResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentTodo(
      param.incidentId,
      param.todoId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentTodo(responseContext);
        });
    });
  }
}
