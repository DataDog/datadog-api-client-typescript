import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CreateIncidentNotificationRuleRequest } from "./models/CreateIncidentNotificationRuleRequest";
import { CreateIncidentNotificationTemplateRequest } from "./models/CreateIncidentNotificationTemplateRequest";
import { IncidentAttachmentAttachmentType } from "./models/IncidentAttachmentAttachmentType";
import { IncidentAttachmentRelatedObject } from "./models/IncidentAttachmentRelatedObject";
import { IncidentAttachmentsResponse } from "./models/IncidentAttachmentsResponse";
import { IncidentAttachmentUpdateRequest } from "./models/IncidentAttachmentUpdateRequest";
import { IncidentAttachmentUpdateResponse } from "./models/IncidentAttachmentUpdateResponse";
import { IncidentCreatePageFromIncidentRequest } from "./models/IncidentCreatePageFromIncidentRequest";
import { IncidentCreatePageResponse } from "./models/IncidentCreatePageResponse";
import { IncidentCreateRequest } from "./models/IncidentCreateRequest";
import { IncidentImpactCreateRequest } from "./models/IncidentImpactCreateRequest";
import { IncidentImpactRelatedObject } from "./models/IncidentImpactRelatedObject";
import { IncidentImpactResponse } from "./models/IncidentImpactResponse";
import { IncidentImpactsResponse } from "./models/IncidentImpactsResponse";
import { IncidentIntegrationMetadataCreateRequest } from "./models/IncidentIntegrationMetadataCreateRequest";
import { IncidentIntegrationMetadataListResponse } from "./models/IncidentIntegrationMetadataListResponse";
import { IncidentIntegrationMetadataPatchRequest } from "./models/IncidentIntegrationMetadataPatchRequest";
import { IncidentIntegrationMetadataResponse } from "./models/IncidentIntegrationMetadataResponse";
import { IncidentNotificationRule } from "./models/IncidentNotificationRule";
import { IncidentNotificationRuleArray } from "./models/IncidentNotificationRuleArray";
import { IncidentNotificationTemplate } from "./models/IncidentNotificationTemplate";
import { IncidentNotificationTemplateArray } from "./models/IncidentNotificationTemplateArray";
import { IncidentRelatedObject } from "./models/IncidentRelatedObject";
import { IncidentResponse } from "./models/IncidentResponse";
import { IncidentResponseData } from "./models/IncidentResponseData";
import { IncidentSearchResponse } from "./models/IncidentSearchResponse";
import { IncidentSearchResponseIncidentsData } from "./models/IncidentSearchResponseIncidentsData";
import { IncidentSearchSortOrder } from "./models/IncidentSearchSortOrder";
import { IncidentsResponse } from "./models/IncidentsResponse";
import { IncidentTodoCreateRequest } from "./models/IncidentTodoCreateRequest";
import { IncidentTodoListResponse } from "./models/IncidentTodoListResponse";
import { IncidentTodoPatchRequest } from "./models/IncidentTodoPatchRequest";
import { IncidentTodoResponse } from "./models/IncidentTodoResponse";
import { IncidentTypeCreateRequest } from "./models/IncidentTypeCreateRequest";
import { IncidentTypeListResponse } from "./models/IncidentTypeListResponse";
import { IncidentTypePatchRequest } from "./models/IncidentTypePatchRequest";
import { IncidentTypeResponse } from "./models/IncidentTypeResponse";
import { IncidentUpdateRequest } from "./models/IncidentUpdateRequest";
import { PatchIncidentNotificationTemplateRequest } from "./models/PatchIncidentNotificationTemplateRequest";
import { PutIncidentNotificationRuleRequest } from "./models/PutIncidentNotificationRuleRequest";
import { version } from "../version";

export class IncidentsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("incidents", version);
    }
  }
  public async createIncident(
    body: IncidentCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.createIncident"]) {
      throw new Error(
        "Unstable operation 'createIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncident'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncident",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentImpact(
    incidentId: string,
    body: IncidentImpactCreateRequest,
    include?: Array<IncidentImpactRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.createIncidentImpact"]) {
      throw new Error(
        "Unstable operation 'createIncidentImpact' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentImpact'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentImpact");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentImpact");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/impacts".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentImpact",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(
          include,
          TypingInfo,
          "Array<IncidentImpactRelatedObject>",
          "",
        ),
        "csv",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentImpactCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentIntegration(
    incidentId: string,
    body: IncidentIntegrationMetadataCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createIncidentIntegration"]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentIntegration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentIntegration'] = true`",
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
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentIntegration",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "IncidentIntegrationMetadataCreateRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentNotificationRule(
    body: CreateIncidentNotificationRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentNotificationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentNotificationRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentNotificationRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentNotificationRule",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateIncidentNotificationRuleRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentNotificationTemplate(
    body: CreateIncidentNotificationTemplateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentNotificationTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentNotificationTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentNotificationTemplate'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentNotificationTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentNotificationTemplate",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "CreateIncidentNotificationTemplateRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentTodo(
    incidentId: string,
    body: IncidentTodoCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.createIncidentTodo"]) {
      throw new Error(
        "Unstable operation 'createIncidentTodo' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentTodo'] = true`",
      );
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
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentTodo",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentTodoCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentType(
    body: IncidentTypeCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.createIncidentType"]) {
      throw new Error(
        "Unstable operation 'createIncidentType' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentType'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentType");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/types";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentType",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentTypeCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createPageFromIncident(
    incidentId: string,
    body: IncidentCreatePageFromIncidentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.createPageFromIncident"]) {
      throw new Error(
        "Unstable operation 'createPageFromIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createPageFromIncident'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createPageFromIncident");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPageFromIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/page".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createPageFromIncident",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentCreatePageFromIncidentRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncident(
    incidentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.deleteIncident"]) {
      throw new Error(
        "Unstable operation 'deleteIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncident'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncident",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentImpact(
    incidentId: string,
    impactId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.deleteIncidentImpact"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentImpact' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentImpact'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentImpact");
    }

    // verify required parameter 'impactId' is not null or undefined
    if (impactId === null || impactId === undefined) {
      throw new RequiredError("impactId", "deleteIncidentImpact");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/impacts/{impact_id}"
      .replace("{incident_id}", encodeURIComponent(String(incidentId)))
      .replace("{impact_id}", encodeURIComponent(String(impactId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentImpact",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentIntegration(
    incidentId: string,
    integrationMetadataId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.deleteIncidentIntegration"]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentIntegration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentIntegration'] = true`",
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
        "deleteIncidentIntegration",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{integration_metadata_id}",
          encodeURIComponent(String(integrationMetadataId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentIntegration",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentNotificationRule(
    id: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.deleteIncidentNotificationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentNotificationRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentNotificationRule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteIncidentNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentNotificationRule",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentNotificationTemplate(
    id: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.deleteIncidentNotificationTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentNotificationTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentNotificationTemplate'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteIncidentNotificationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-templates/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentNotificationTemplate",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentTodo(
    incidentId: string,
    todoId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.deleteIncidentTodo"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentTodo' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentTodo'] = true`",
      );
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
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentTodo",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentType(
    incidentTypeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.deleteIncidentType"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentType' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentType'] = true`",
      );
    }

    // verify required parameter 'incidentTypeId' is not null or undefined
    if (incidentTypeId === null || incidentTypeId === undefined) {
      throw new RequiredError("incidentTypeId", "deleteIncidentType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/types/{incident_type_id}".replace(
        "{incident_type_id}",
        encodeURIComponent(String(incidentTypeId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentType",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncident(
    incidentId: string,
    include?: Array<IncidentRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.getIncident"]) {
      throw new Error(
        "Unstable operation 'getIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncident'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncident",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "Array<IncidentRelatedObject>", ""),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentIntegration(
    incidentId: string,
    integrationMetadataId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.getIncidentIntegration"]) {
      throw new Error(
        "Unstable operation 'getIncidentIntegration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentIntegration'] = true`",
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
        "getIncidentIntegration",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{integration_metadata_id}",
          encodeURIComponent(String(integrationMetadataId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentIntegration",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentNotificationRule(
    id: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.getIncidentNotificationRule"]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentNotificationRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentNotificationRule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getIncidentNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentNotificationRule",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentNotificationTemplate(
    id: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.getIncidentNotificationTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentNotificationTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentNotificationTemplate'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getIncidentNotificationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-templates/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentNotificationTemplate",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentTodo(
    incidentId: string,
    todoId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.getIncidentTodo"]) {
      throw new Error(
        "Unstable operation 'getIncidentTodo' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentTodo'] = true`",
      );
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
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentTodo",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentType(
    incidentTypeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.getIncidentType"]) {
      throw new Error(
        "Unstable operation 'getIncidentType' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentType'] = true`",
      );
    }

    // verify required parameter 'incidentTypeId' is not null or undefined
    if (incidentTypeId === null || incidentTypeId === undefined) {
      throw new RequiredError("incidentTypeId", "getIncidentType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/types/{incident_type_id}".replace(
        "{incident_type_id}",
        encodeURIComponent(String(incidentTypeId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentType",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentAttachments(
    incidentId: string,
    include?: Array<IncidentAttachmentRelatedObject>,
    filterAttachmentType?: Array<IncidentAttachmentAttachmentType>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.listIncidentAttachments"]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentAttachments' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentAttachments'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentAttachments");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/attachments".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentAttachments",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(
          include,
          TypingInfo,
          "Array<IncidentAttachmentRelatedObject>",
          "",
        ),
        "csv",
      );
    }
    if (filterAttachmentType !== undefined) {
      requestContext.setQueryParam(
        "filter[attachment_type]",
        serialize(
          filterAttachmentType,
          TypingInfo,
          "Array<IncidentAttachmentAttachmentType>",
          "",
        ),
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

  public async listIncidentImpacts(
    incidentId: string,
    include?: Array<IncidentImpactRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listIncidentImpacts"]) {
      throw new Error(
        "Unstable operation 'listIncidentImpacts' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentImpacts'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentImpacts");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/impacts".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentImpacts",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(
          include,
          TypingInfo,
          "Array<IncidentImpactRelatedObject>",
          "",
        ),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentIntegrations(
    incidentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.listIncidentIntegrations"]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentIntegrations' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentIntegrations'] = true`",
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
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentIntegrations",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentNotificationRules(
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.listIncidentNotificationRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentNotificationRules' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentNotificationRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentNotificationRules",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentNotificationTemplates(
    filterIncidentType?: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.listIncidentNotificationTemplates"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentNotificationTemplates' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentNotificationTemplates'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentNotificationTemplates",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (filterIncidentType !== undefined) {
      requestContext.setQueryParam(
        "filter[incident-type]",
        serialize(filterIncidentType, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidents(
    include?: Array<IncidentRelatedObject>,
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listIncidents"]) {
      throw new Error(
        "Unstable operation 'listIncidents' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidents'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidents",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "Array<IncidentRelatedObject>", ""),
        "csv",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentTodos(
    incidentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listIncidentTodos"]) {
      throw new Error(
        "Unstable operation 'listIncidentTodos' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentTodos'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentTodos");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/relationships/todos".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentTodos",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentTypes(
    includeDeleted?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listIncidentTypes"]) {
      throw new Error(
        "Unstable operation 'listIncidentTypes' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentTypes'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/types";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentTypes",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (includeDeleted !== undefined) {
      requestContext.setQueryParam(
        "include_deleted",
        serialize(includeDeleted, TypingInfo, "boolean", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async searchIncidents(
    query: string,
    include?: IncidentRelatedObject,
    sort?: IncidentSearchSortOrder,
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.searchIncidents"]) {
      throw new Error(
        "Unstable operation 'searchIncidents' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.searchIncidents'] = true`",
      );
    }

    // verify required parameter 'query' is not null or undefined
    if (query === null || query === undefined) {
      throw new RequiredError("query", "searchIncidents");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.searchIncidents",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "IncidentRelatedObject", ""),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "IncidentSearchSortOrder", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncident(
    incidentId: string,
    body: IncidentUpdateRequest,
    include?: Array<IncidentRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.updateIncident"]) {
      throw new Error(
        "Unstable operation 'updateIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncident'] = true`",
      );
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
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncident",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "Array<IncidentRelatedObject>", ""),
        "csv",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentUpdateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentAttachments(
    incidentId: string,
    body: IncidentAttachmentUpdateRequest,
    include?: Array<IncidentAttachmentRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateIncidentAttachments"]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentAttachments' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentAttachments'] = true`",
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
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentAttachments",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(
          include,
          TypingInfo,
          "Array<IncidentAttachmentRelatedObject>",
          "",
        ),
        "csv",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentAttachmentUpdateRequest", ""),
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

  public async updateIncidentIntegration(
    incidentId: string,
    integrationMetadataId: string,
    body: IncidentIntegrationMetadataPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateIncidentIntegration"]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentIntegration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentIntegration'] = true`",
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
        "updateIncidentIntegration",
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
          encodeURIComponent(String(integrationMetadataId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentIntegration",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "IncidentIntegrationMetadataPatchRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentNotificationRule(
    id: string,
    body: PutIncidentNotificationRuleRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentNotificationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentNotificationRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentNotificationRule'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateIncidentNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentNotificationRule",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "PutIncidentNotificationRuleRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentNotificationTemplate(
    id: string,
    body: PatchIncidentNotificationTemplateRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentNotificationTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentNotificationTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentNotificationTemplate'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateIncidentNotificationTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentNotificationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-templates/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentNotificationTemplate",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "PatchIncidentNotificationTemplateRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentTodo(
    incidentId: string,
    todoId: string,
    body: IncidentTodoPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.updateIncidentTodo"]) {
      throw new Error(
        "Unstable operation 'updateIncidentTodo' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentTodo'] = true`",
      );
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
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentTodo",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentTodoPatchRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentType(
    incidentTypeId: string,
    body: IncidentTypePatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.updateIncidentType"]) {
      throw new Error(
        "Unstable operation 'updateIncidentType' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentType'] = true`",
      );
    }

    // verify required parameter 'incidentTypeId' is not null or undefined
    if (incidentTypeId === null || incidentTypeId === undefined) {
      throw new RequiredError("incidentTypeId", "updateIncidentType");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/types/{incident_type_id}".replace(
        "{incident_type_id}",
        encodeURIComponent(String(incidentTypeId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentType",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentTypePatchRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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
    response: ResponseContext,
  ): Promise<IncidentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponse",
      ) as IncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponse",
        "",
      ) as IncidentResponse;
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
   * @params response Response returned by the server for a request to createIncidentImpact
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentImpact(
    response: ResponseContext,
  ): Promise<IncidentImpactResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentImpactResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactResponse",
      ) as IncidentImpactResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentImpactResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactResponse",
        "",
      ) as IncidentImpactResponse;
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
   * @params response Response returned by the server for a request to createIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentIntegration(
    response: ResponseContext,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentIntegrationMetadataResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataResponse",
      ) as IncidentIntegrationMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentIntegrationMetadataResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataResponse",
        "",
      ) as IncidentIntegrationMetadataResponse;
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
   * @params response Response returned by the server for a request to createIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentNotificationRule(
    response: ResponseContext,
  ): Promise<IncidentNotificationRule> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentNotificationRule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRule",
      ) as IncidentNotificationRule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationRule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRule",
        "",
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to createIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentNotificationTemplate(
    response: ResponseContext,
  ): Promise<IncidentNotificationTemplate> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentNotificationTemplate = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplate",
      ) as IncidentNotificationTemplate;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationTemplate = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplate",
        "",
      ) as IncidentNotificationTemplate;
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
   * @params response Response returned by the server for a request to createIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentTodo(
    response: ResponseContext,
  ): Promise<IncidentTodoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentTodoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoResponse",
      ) as IncidentTodoResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTodoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoResponse",
        "",
      ) as IncidentTodoResponse;
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
   * @params response Response returned by the server for a request to createIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentType(
    response: ResponseContext,
  ): Promise<IncidentTypeResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeResponse",
      ) as IncidentTypeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeResponse",
        "",
      ) as IncidentTypeResponse;
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
   * @params response Response returned by the server for a request to createPageFromIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPageFromIncident(
    response: ResponseContext,
  ): Promise<IncidentCreatePageResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentCreatePageResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentCreatePageResponse",
      ) as IncidentCreatePageResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentCreatePageResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentCreatePageResponse",
        "",
      ) as IncidentCreatePageResponse;
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
   * @params response Response returned by the server for a request to deleteIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncident(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deleteIncidentImpact
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentImpact(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deleteIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentIntegration(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deleteIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentNotificationRule(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deleteIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentNotificationTemplate(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deleteIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentTodo(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to deleteIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentType(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to getIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncident(
    response: ResponseContext,
  ): Promise<IncidentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponse",
      ) as IncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponse",
        "",
      ) as IncidentResponse;
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
   * @params response Response returned by the server for a request to getIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentIntegration(
    response: ResponseContext,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentIntegrationMetadataResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataResponse",
      ) as IncidentIntegrationMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentIntegrationMetadataResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataResponse",
        "",
      ) as IncidentIntegrationMetadataResponse;
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
   * @params response Response returned by the server for a request to getIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentNotificationRule(
    response: ResponseContext,
  ): Promise<IncidentNotificationRule> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRule",
      ) as IncidentNotificationRule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationRule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRule",
        "",
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to getIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentNotificationTemplate(
    response: ResponseContext,
  ): Promise<IncidentNotificationTemplate> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationTemplate = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplate",
      ) as IncidentNotificationTemplate;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationTemplate = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplate",
        "",
      ) as IncidentNotificationTemplate;
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
   * @params response Response returned by the server for a request to getIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentTodo(
    response: ResponseContext,
  ): Promise<IncidentTodoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTodoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoResponse",
      ) as IncidentTodoResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTodoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoResponse",
        "",
      ) as IncidentTodoResponse;
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
   * @params response Response returned by the server for a request to getIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentType(
    response: ResponseContext,
  ): Promise<IncidentTypeResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeResponse",
      ) as IncidentTypeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeResponse",
        "",
      ) as IncidentTypeResponse;
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
   * @params response Response returned by the server for a request to listIncidentAttachments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentAttachments(
    response: ResponseContext,
  ): Promise<IncidentAttachmentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentAttachmentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentAttachmentsResponse",
      ) as IncidentAttachmentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentAttachmentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentAttachmentsResponse",
        "",
      ) as IncidentAttachmentsResponse;
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
   * @params response Response returned by the server for a request to listIncidentImpacts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentImpacts(
    response: ResponseContext,
  ): Promise<IncidentImpactsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentImpactsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactsResponse",
      ) as IncidentImpactsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentImpactsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactsResponse",
        "",
      ) as IncidentImpactsResponse;
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
   * @params response Response returned by the server for a request to listIncidentIntegrations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentIntegrations(
    response: ResponseContext,
  ): Promise<IncidentIntegrationMetadataListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentIntegrationMetadataListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataListResponse",
      ) as IncidentIntegrationMetadataListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentIntegrationMetadataListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataListResponse",
        "",
      ) as IncidentIntegrationMetadataListResponse;
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
   * @params response Response returned by the server for a request to listIncidentNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentNotificationRules(
    response: ResponseContext,
  ): Promise<IncidentNotificationRuleArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRuleArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRuleArray",
      ) as IncidentNotificationRuleArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationRuleArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRuleArray",
        "",
      ) as IncidentNotificationRuleArray;
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
   * @params response Response returned by the server for a request to listIncidentNotificationTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentNotificationTemplates(
    response: ResponseContext,
  ): Promise<IncidentNotificationTemplateArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationTemplateArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplateArray",
      ) as IncidentNotificationTemplateArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationTemplateArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplateArray",
        "",
      ) as IncidentNotificationTemplateArray;
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
   * @params response Response returned by the server for a request to listIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidents(
    response: ResponseContext,
  ): Promise<IncidentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentsResponse",
      ) as IncidentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentsResponse",
        "",
      ) as IncidentsResponse;
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
   * @params response Response returned by the server for a request to listIncidentTodos
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTodos(
    response: ResponseContext,
  ): Promise<IncidentTodoListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTodoListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoListResponse",
      ) as IncidentTodoListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTodoListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoListResponse",
        "",
      ) as IncidentTodoListResponse;
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
   * @params response Response returned by the server for a request to listIncidentTypes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTypes(
    response: ResponseContext,
  ): Promise<IncidentTypeListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTypeListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeListResponse",
      ) as IncidentTypeListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTypeListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeListResponse",
        "",
      ) as IncidentTypeListResponse;
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
   * @params response Response returned by the server for a request to searchIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchIncidents(
    response: ResponseContext,
  ): Promise<IncidentSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentSearchResponse",
      ) as IncidentSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentSearchResponse",
        "",
      ) as IncidentSearchResponse;
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
   * @params response Response returned by the server for a request to updateIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncident(
    response: ResponseContext,
  ): Promise<IncidentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponse",
      ) as IncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponse",
        "",
      ) as IncidentResponse;
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
   * @params response Response returned by the server for a request to updateIncidentAttachments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentAttachments(
    response: ResponseContext,
  ): Promise<IncidentAttachmentUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentAttachmentUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentAttachmentUpdateResponse",
      ) as IncidentAttachmentUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentAttachmentUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentAttachmentUpdateResponse",
        "",
      ) as IncidentAttachmentUpdateResponse;
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
   * @params response Response returned by the server for a request to updateIncidentIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentIntegration(
    response: ResponseContext,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentIntegrationMetadataResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataResponse",
      ) as IncidentIntegrationMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentIntegrationMetadataResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentIntegrationMetadataResponse",
        "",
      ) as IncidentIntegrationMetadataResponse;
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
   * @params response Response returned by the server for a request to updateIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentNotificationRule(
    response: ResponseContext,
  ): Promise<IncidentNotificationRule> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRule",
      ) as IncidentNotificationRule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationRule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationRule",
        "",
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to updateIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentNotificationTemplate(
    response: ResponseContext,
  ): Promise<IncidentNotificationTemplate> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationTemplate = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplate",
      ) as IncidentNotificationTemplate;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentNotificationTemplate = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentNotificationTemplate",
        "",
      ) as IncidentNotificationTemplate;
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
   * @params response Response returned by the server for a request to updateIncidentTodo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentTodo(
    response: ResponseContext,
  ): Promise<IncidentTodoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTodoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoResponse",
      ) as IncidentTodoResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTodoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTodoResponse",
        "",
      ) as IncidentTodoResponse;
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
   * @params response Response returned by the server for a request to updateIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentType(
    response: ResponseContext,
  ): Promise<IncidentTypeResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeResponse",
      ) as IncidentTypeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: IncidentTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTypeResponse",
        "",
      ) as IncidentTypeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

export interface IncidentsApiCreateIncidentImpactRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident impact payload.
   * @type IncidentImpactCreateRequest
   */
  body: IncidentImpactCreateRequest;
  /**
   * Specifies which related resources should be included in the response.
   * @type Array<IncidentImpactRelatedObject>
   */
  include?: Array<IncidentImpactRelatedObject>;
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

export interface IncidentsApiCreateIncidentNotificationRuleRequest {
  /**
   * @type CreateIncidentNotificationRuleRequest
   */
  body: CreateIncidentNotificationRuleRequest;
}

export interface IncidentsApiCreateIncidentNotificationTemplateRequest {
  /**
   * @type CreateIncidentNotificationTemplateRequest
   */
  body: CreateIncidentNotificationTemplateRequest;
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

export interface IncidentsApiCreateIncidentTypeRequest {
  /**
   * Incident type payload.
   * @type IncidentTypeCreateRequest
   */
  body: IncidentTypeCreateRequest;
}

export interface IncidentsApiCreatePageFromIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Page creation request payload.
   * @type IncidentCreatePageFromIncidentRequest
   */
  body: IncidentCreatePageFromIncidentRequest;
}

export interface IncidentsApiDeleteIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiDeleteIncidentImpactRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident impact.
   * @type string
   */
  impactId: string;
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

export interface IncidentsApiDeleteIncidentNotificationRuleRequest {
  /**
   * The ID of the notification rule.
   * @type string
   */
  id: string;
  /**
   * Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`
   * @type string
   */
  include?: string;
}

export interface IncidentsApiDeleteIncidentNotificationTemplateRequest {
  /**
   * The ID of the notification template.
   * @type string
   */
  id: string;
  /**
   * Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`
   * @type string
   */
  include?: string;
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

export interface IncidentsApiDeleteIncidentTypeRequest {
  /**
   * The UUID of the incident type.
   * @type string
   */
  incidentTypeId: string;
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

export interface IncidentsApiGetIncidentNotificationRuleRequest {
  /**
   * The ID of the notification rule.
   * @type string
   */
  id: string;
  /**
   * Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`
   * @type string
   */
  include?: string;
}

export interface IncidentsApiGetIncidentNotificationTemplateRequest {
  /**
   * The ID of the notification template.
   * @type string
   */
  id: string;
  /**
   * Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`
   * @type string
   */
  include?: string;
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

export interface IncidentsApiGetIncidentTypeRequest {
  /**
   * The UUID of the incident type.
   * @type string
   */
  incidentTypeId: string;
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

export interface IncidentsApiListIncidentImpactsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Specifies which related resources should be included in the response.
   * @type Array<IncidentImpactRelatedObject>
   */
  include?: Array<IncidentImpactRelatedObject>;
}

export interface IncidentsApiListIncidentIntegrationsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiListIncidentNotificationRulesRequest {
  /**
   * Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`
   * @type string
   */
  include?: string;
}

export interface IncidentsApiListIncidentNotificationTemplatesRequest {
  /**
   * Optional incident type ID filter.
   * @type string
   */
  filterIncidentType?: string;
  /**
   * Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`
   * @type string
   */
  include?: string;
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

export interface IncidentsApiListIncidentTypesRequest {
  /**
   * Include deleted incident types in the response.
   * @type boolean
   */
  includeDeleted?: boolean;
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

export interface IncidentsApiUpdateIncidentNotificationRuleRequest {
  /**
   * The ID of the notification rule.
   * @type string
   */
  id: string;
  /**
   * @type PutIncidentNotificationRuleRequest
   */
  body: PutIncidentNotificationRuleRequest;
  /**
   * Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`
   * @type string
   */
  include?: string;
}

export interface IncidentsApiUpdateIncidentNotificationTemplateRequest {
  /**
   * The ID of the notification template.
   * @type string
   */
  id: string;
  /**
   * @type PatchIncidentNotificationTemplateRequest
   */
  body: PatchIncidentNotificationTemplateRequest;
  /**
   * Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`
   * @type string
   */
  include?: string;
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

export interface IncidentsApiUpdateIncidentTypeRequest {
  /**
   * The UUID of the incident type.
   * @type string
   */
  incidentTypeId: string;
  /**
   * Incident type payload.
   * @type IncidentTypePatchRequest
   */
  body: IncidentTypePatchRequest;
}

export class IncidentsApi {
  private requestFactory: IncidentsApiRequestFactory;
  private responseProcessor: IncidentsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: IncidentsApiRequestFactory,
    responseProcessor?: IncidentsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new IncidentsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new IncidentsApiResponseProcessor();
  }

  /**
   * Create an incident.
   * @param param The request object
   */
  public createIncident(
    param: IncidentsApiCreateIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentResponse> {
    const requestContextPromise = this.requestFactory.createIncident(
      param.body,
      options,
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
   * Create an impact for an incident.
   * @param param The request object
   */
  public createIncidentImpact(
    param: IncidentsApiCreateIncidentImpactRequest,
    options?: Configuration,
  ): Promise<IncidentImpactResponse> {
    const requestContextPromise = this.requestFactory.createIncidentImpact(
      param.incidentId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentImpact(responseContext);
        });
    });
  }

  /**
   * Create an incident integration metadata.
   * @param param The request object
   */
  public createIncidentIntegration(
    param: IncidentsApiCreateIncidentIntegrationRequest,
    options?: Configuration,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.createIncidentIntegration(
      param.incidentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentIntegration(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates a new notification rule.
   * @param param The request object
   */
  public createIncidentNotificationRule(
    param: IncidentsApiCreateIncidentNotificationRuleRequest,
    options?: Configuration,
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.createIncidentNotificationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates a new notification template.
   * @param param The request object
   */
  public createIncidentNotificationTemplate(
    param: IncidentsApiCreateIncidentNotificationTemplateRequest,
    options?: Configuration,
  ): Promise<IncidentNotificationTemplate> {
    const requestContextPromise =
      this.requestFactory.createIncidentNotificationTemplate(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentNotificationTemplate(
            responseContext,
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
    options?: Configuration,
  ): Promise<IncidentTodoResponse> {
    const requestContextPromise = this.requestFactory.createIncidentTodo(
      param.incidentId,
      param.body,
      options,
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
   * Create an incident type.
   * @param param The request object
   */
  public createIncidentType(
    param: IncidentsApiCreateIncidentTypeRequest,
    options?: Configuration,
  ): Promise<IncidentTypeResponse> {
    const requestContextPromise = this.requestFactory.createIncidentType(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentType(responseContext);
        });
    });
  }

  /**
   * Create a page from an incident.
   * @param param The request object
   */
  public createPageFromIncident(
    param: IncidentsApiCreatePageFromIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentCreatePageResponse> {
    const requestContextPromise = this.requestFactory.createPageFromIncident(
      param.incidentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPageFromIncident(responseContext);
        });
    });
  }

  /**
   * Deletes an existing incident from the users organization.
   * @param param The request object
   */
  public deleteIncident(
    param: IncidentsApiDeleteIncidentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncident(
      param.incidentId,
      options,
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
   * Delete an incident impact.
   * @param param The request object
   */
  public deleteIncidentImpact(
    param: IncidentsApiDeleteIncidentImpactRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentImpact(
      param.incidentId,
      param.impactId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentImpact(responseContext);
        });
    });
  }

  /**
   * Delete an incident integration metadata.
   * @param param The request object
   */
  public deleteIncidentIntegration(
    param: IncidentsApiDeleteIncidentIntegrationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentIntegration(
      param.incidentId,
      param.integrationMetadataId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentIntegration(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes a notification rule by its ID.
   * @param param The request object
   */
  public deleteIncidentNotificationRule(
    param: IncidentsApiDeleteIncidentNotificationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentNotificationRule(
        param.id,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes a notification template by its ID.
   * @param param The request object
   */
  public deleteIncidentNotificationTemplate(
    param: IncidentsApiDeleteIncidentNotificationTemplateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentNotificationTemplate(
        param.id,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentNotificationTemplate(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentTodo(
      param.incidentId,
      param.todoId,
      options,
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
   * Delete an incident type.
   * @param param The request object
   */
  public deleteIncidentType(
    param: IncidentsApiDeleteIncidentTypeRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentType(
      param.incidentTypeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentType(responseContext);
        });
    });
  }

  /**
   * Get the details of an incident by `incident_id`.
   * @param param The request object
   */
  public getIncident(
    param: IncidentsApiGetIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentResponse> {
    const requestContextPromise = this.requestFactory.getIncident(
      param.incidentId,
      param.include,
      options,
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
    options?: Configuration,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.getIncidentIntegration(
      param.incidentId,
      param.integrationMetadataId,
      options,
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
   * Retrieves a specific notification rule by its ID.
   * @param param The request object
   */
  public getIncidentNotificationRule(
    param: IncidentsApiGetIncidentNotificationRuleRequest,
    options?: Configuration,
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.getIncidentNotificationRule(
        param.id,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieves a specific notification template by its ID.
   * @param param The request object
   */
  public getIncidentNotificationTemplate(
    param: IncidentsApiGetIncidentNotificationTemplateRequest,
    options?: Configuration,
  ): Promise<IncidentNotificationTemplate> {
    const requestContextPromise =
      this.requestFactory.getIncidentNotificationTemplate(
        param.id,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentNotificationTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Get incident todo details.
   * @param param The request object
   */
  public getIncidentTodo(
    param: IncidentsApiGetIncidentTodoRequest,
    options?: Configuration,
  ): Promise<IncidentTodoResponse> {
    const requestContextPromise = this.requestFactory.getIncidentTodo(
      param.incidentId,
      param.todoId,
      options,
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
   * Get incident type details.
   * @param param The request object
   */
  public getIncidentType(
    param: IncidentsApiGetIncidentTypeRequest,
    options?: Configuration,
  ): Promise<IncidentTypeResponse> {
    const requestContextPromise = this.requestFactory.getIncidentType(
      param.incidentTypeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentType(responseContext);
        });
    });
  }

  /**
   * Get all attachments for a given incident.
   * @param param The request object
   */
  public listIncidentAttachments(
    param: IncidentsApiListIncidentAttachmentsRequest,
    options?: Configuration,
  ): Promise<IncidentAttachmentsResponse> {
    const requestContextPromise = this.requestFactory.listIncidentAttachments(
      param.incidentId,
      param.include,
      param.filterAttachmentType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentAttachments(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all impacts for an incident.
   * @param param The request object
   */
  public listIncidentImpacts(
    param: IncidentsApiListIncidentImpactsRequest,
    options?: Configuration,
  ): Promise<IncidentImpactsResponse> {
    const requestContextPromise = this.requestFactory.listIncidentImpacts(
      param.incidentId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentImpacts(responseContext);
        });
    });
  }

  /**
   * Get all integration metadata for an incident.
   * @param param The request object
   */
  public listIncidentIntegrations(
    param: IncidentsApiListIncidentIntegrationsRequest,
    options?: Configuration,
  ): Promise<IncidentIntegrationMetadataListResponse> {
    const requestContextPromise = this.requestFactory.listIncidentIntegrations(
      param.incidentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentIntegrations(
            responseContext,
          );
        });
    });
  }

  /**
   * Lists all notification rules for the organization. Optionally filter by incident type.
   * @param param The request object
   */
  public listIncidentNotificationRules(
    param: IncidentsApiListIncidentNotificationRulesRequest = {},
    options?: Configuration,
  ): Promise<IncidentNotificationRuleArray> {
    const requestContextPromise =
      this.requestFactory.listIncidentNotificationRules(param.include, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentNotificationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Lists all notification templates. Optionally filter by incident type.
   * @param param The request object
   */
  public listIncidentNotificationTemplates(
    param: IncidentsApiListIncidentNotificationTemplatesRequest = {},
    options?: Configuration,
  ): Promise<IncidentNotificationTemplateArray> {
    const requestContextPromise =
      this.requestFactory.listIncidentNotificationTemplates(
        param.filterIncidentType,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentNotificationTemplates(
            responseContext,
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
    options?: Configuration,
  ): Promise<IncidentsResponse> {
    const requestContextPromise = this.requestFactory.listIncidents(
      param.include,
      param.pageSize,
      param.pageOffset,
      options,
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
    options?: Configuration,
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
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listIncidents(responseContext);
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
    options?: Configuration,
  ): Promise<IncidentTodoListResponse> {
    const requestContextPromise = this.requestFactory.listIncidentTodos(
      param.incidentId,
      options,
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
   * Get all incident types.
   * @param param The request object
   */
  public listIncidentTypes(
    param: IncidentsApiListIncidentTypesRequest = {},
    options?: Configuration,
  ): Promise<IncidentTypeListResponse> {
    const requestContextPromise = this.requestFactory.listIncidentTypes(
      param.includeDeleted,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentTypes(responseContext);
        });
    });
  }

  /**
   * Search for incidents matching a certain query.
   * @param param The request object
   */
  public searchIncidents(
    param: IncidentsApiSearchIncidentsRequest,
    options?: Configuration,
  ): Promise<IncidentSearchResponse> {
    const requestContextPromise = this.requestFactory.searchIncidents(
      param.query,
      param.include,
      param.sort,
      param.pageSize,
      param.pageOffset,
      options,
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
    options?: Configuration,
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
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchIncidents(responseContext);
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
    options?: Configuration,
  ): Promise<IncidentResponse> {
    const requestContextPromise = this.requestFactory.updateIncident(
      param.incidentId,
      param.body,
      param.include,
      options,
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
    options?: Configuration,
  ): Promise<IncidentAttachmentUpdateResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentAttachments(
      param.incidentId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentAttachments(
            responseContext,
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
    options?: Configuration,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentIntegration(
      param.incidentId,
      param.integrationMetadataId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentIntegration(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates an existing notification rule with a complete replacement.
   * @param param The request object
   */
  public updateIncidentNotificationRule(
    param: IncidentsApiUpdateIncidentNotificationRuleRequest,
    options?: Configuration,
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.updateIncidentNotificationRule(
        param.id,
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates an existing notification template's attributes.
   * @param param The request object
   */
  public updateIncidentNotificationTemplate(
    param: IncidentsApiUpdateIncidentNotificationTemplateRequest,
    options?: Configuration,
  ): Promise<IncidentNotificationTemplate> {
    const requestContextPromise =
      this.requestFactory.updateIncidentNotificationTemplate(
        param.id,
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentNotificationTemplate(
            responseContext,
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
    options?: Configuration,
  ): Promise<IncidentTodoResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentTodo(
      param.incidentId,
      param.todoId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentTodo(responseContext);
        });
    });
  }

  /**
   * Update an incident type.
   * @param param The request object
   */
  public updateIncidentType(
    param: IncidentsApiUpdateIncidentTypeRequest,
    options?: Configuration,
  ): Promise<IncidentTypeResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentType(
      param.incidentTypeId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentType(responseContext);
        });
    });
  }
}
