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
import { Attachment } from "./models/Attachment";
import { AttachmentArray } from "./models/AttachmentArray";
import { CreateAttachmentRequest } from "./models/CreateAttachmentRequest";
import { CreateIncidentNotificationRuleRequest } from "./models/CreateIncidentNotificationRuleRequest";
import { CreateIncidentNotificationTemplateRequest } from "./models/CreateIncidentNotificationTemplateRequest";
import { GlobalIncidentSettingsRequest } from "./models/GlobalIncidentSettingsRequest";
import { GlobalIncidentSettingsResponse } from "./models/GlobalIncidentSettingsResponse";
import { IncidentAIPostmortemResponse } from "./models/IncidentAIPostmortemResponse";
import { IncidentConfigurationPatchRequest } from "./models/IncidentConfigurationPatchRequest";
import { IncidentConfigurationRequest } from "./models/IncidentConfigurationRequest";
import { IncidentConfigurationResponse } from "./models/IncidentConfigurationResponse";
import { IncidentCreateOnCallPageRequest } from "./models/IncidentCreateOnCallPageRequest";
import { IncidentCreatePageFromIncidentRequest } from "./models/IncidentCreatePageFromIncidentRequest";
import { IncidentCreateRequest } from "./models/IncidentCreateRequest";
import { IncidentGoogleChatConfigurationPatchRequest } from "./models/IncidentGoogleChatConfigurationPatchRequest";
import { IncidentGoogleChatConfigurationRequest } from "./models/IncidentGoogleChatConfigurationRequest";
import { IncidentGoogleChatConfigurationResponse } from "./models/IncidentGoogleChatConfigurationResponse";
import { IncidentGoogleMeetConfigurationPatchRequest } from "./models/IncidentGoogleMeetConfigurationPatchRequest";
import { IncidentGoogleMeetConfigurationRequest } from "./models/IncidentGoogleMeetConfigurationRequest";
import { IncidentGoogleMeetConfigurationResponse } from "./models/IncidentGoogleMeetConfigurationResponse";
import { IncidentHandleRequest } from "./models/IncidentHandleRequest";
import { IncidentHandleResponse } from "./models/IncidentHandleResponse";
import { IncidentHandlesResponse } from "./models/IncidentHandlesResponse";
import { IncidentImpactCreateRequest } from "./models/IncidentImpactCreateRequest";
import { IncidentImpactFieldRequest } from "./models/IncidentImpactFieldRequest";
import { IncidentImpactFieldResponse } from "./models/IncidentImpactFieldResponse";
import { IncidentImpactFieldsResponse } from "./models/IncidentImpactFieldsResponse";
import { IncidentImpactRelatedObject } from "./models/IncidentImpactRelatedObject";
import { IncidentImpactResponse } from "./models/IncidentImpactResponse";
import { IncidentImpactsResponse } from "./models/IncidentImpactsResponse";
import { IncidentImportRelatedObject } from "./models/IncidentImportRelatedObject";
import { IncidentImportRequest } from "./models/IncidentImportRequest";
import { IncidentImportResponse } from "./models/IncidentImportResponse";
import { IncidentIntegrationMetadataCreateRequest } from "./models/IncidentIntegrationMetadataCreateRequest";
import { IncidentIntegrationMetadataListResponse } from "./models/IncidentIntegrationMetadataListResponse";
import { IncidentIntegrationMetadataPatchRequest } from "./models/IncidentIntegrationMetadataPatchRequest";
import { IncidentIntegrationMetadataResponse } from "./models/IncidentIntegrationMetadataResponse";
import { IncidentNotificationRule } from "./models/IncidentNotificationRule";
import { IncidentNotificationRuleArray } from "./models/IncidentNotificationRuleArray";
import { IncidentNotificationTemplate } from "./models/IncidentNotificationTemplate";
import { IncidentNotificationTemplateArray } from "./models/IncidentNotificationTemplateArray";
import { IncidentOnCallPageLinkRequest } from "./models/IncidentOnCallPageLinkRequest";
import { IncidentOrgSettingsListResponse } from "./models/IncidentOrgSettingsListResponse";
import { IncidentOrgSettingsResponse } from "./models/IncidentOrgSettingsResponse";
import { IncidentPageUUIDResponse } from "./models/IncidentPageUUIDResponse";
import { IncidentRelatedObject } from "./models/IncidentRelatedObject";
import { IncidentResponderRequest } from "./models/IncidentResponderRequest";
import { IncidentResponderResponse } from "./models/IncidentResponderResponse";
import { IncidentRespondersResponse } from "./models/IncidentRespondersResponse";
import { IncidentResponse } from "./models/IncidentResponse";
import { IncidentResponseData } from "./models/IncidentResponseData";
import { IncidentRulePatchRequest } from "./models/IncidentRulePatchRequest";
import { IncidentRuleRequest } from "./models/IncidentRuleRequest";
import { IncidentRuleResponse } from "./models/IncidentRuleResponse";
import { IncidentRulesResponse } from "./models/IncidentRulesResponse";
import { IncidentSearchResponse } from "./models/IncidentSearchResponse";
import { IncidentSearchResponseIncidentsData } from "./models/IncidentSearchResponseIncidentsData";
import { IncidentSearchSortOrder } from "./models/IncidentSearchSortOrder";
import { IncidentServiceNowRecordRequest } from "./models/IncidentServiceNowRecordRequest";
import { IncidentsResponse } from "./models/IncidentsResponse";
import { IncidentTimestampOverridePatchRequest } from "./models/IncidentTimestampOverridePatchRequest";
import { IncidentTimestampOverrideRequest } from "./models/IncidentTimestampOverrideRequest";
import { IncidentTimestampOverrideResponse } from "./models/IncidentTimestampOverrideResponse";
import { IncidentTimestampOverridesResponse } from "./models/IncidentTimestampOverridesResponse";
import { IncidentTodoCreateRequest } from "./models/IncidentTodoCreateRequest";
import { IncidentTodoListResponse } from "./models/IncidentTodoListResponse";
import { IncidentTodoPatchRequest } from "./models/IncidentTodoPatchRequest";
import { IncidentTodoResponse } from "./models/IncidentTodoResponse";
import { IncidentTypeCreateRequest } from "./models/IncidentTypeCreateRequest";
import { IncidentTypeListResponse } from "./models/IncidentTypeListResponse";
import { IncidentTypePatchRequest } from "./models/IncidentTypePatchRequest";
import { IncidentTypeResponse } from "./models/IncidentTypeResponse";
import { IncidentUpdateRequest } from "./models/IncidentUpdateRequest";
import { IncidentUserDefinedFieldCreateRequest } from "./models/IncidentUserDefinedFieldCreateRequest";
import { IncidentUserDefinedFieldListResponse } from "./models/IncidentUserDefinedFieldListResponse";
import { IncidentUserDefinedFieldResponse } from "./models/IncidentUserDefinedFieldResponse";
import { IncidentUserDefinedFieldUpdateRequest } from "./models/IncidentUserDefinedFieldUpdateRequest";
import { IncidentUserDefinedRolePatchRequest } from "./models/IncidentUserDefinedRolePatchRequest";
import { IncidentUserDefinedRoleRequest } from "./models/IncidentUserDefinedRoleRequest";
import { IncidentUserDefinedRoleResponse } from "./models/IncidentUserDefinedRoleResponse";
import { IncidentUserDefinedRolesResponse } from "./models/IncidentUserDefinedRolesResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { PatchAttachmentRequest } from "./models/PatchAttachmentRequest";
import { PatchIncidentNotificationTemplateRequest } from "./models/PatchIncidentNotificationTemplateRequest";
import { PostmortemAttachmentRequest } from "./models/PostmortemAttachmentRequest";
import { PostmortemTemplateRequest } from "./models/PostmortemTemplateRequest";
import { PostmortemTemplateResponse } from "./models/PostmortemTemplateResponse";
import { PostmortemTemplatesResponse } from "./models/PostmortemTemplatesResponse";
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
  public async createGlobalIncidentHandle(
    body: IncidentHandleRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createGlobalIncidentHandle"]
    ) {
      throw new Error(
        "Unstable operation 'createGlobalIncidentHandle' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createGlobalIncidentHandle'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGlobalIncidentHandle");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createGlobalIncidentHandle",
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
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentHandleRequest", ""),
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

  public async createIncidentAttachment(
    incidentId: string,
    body: CreateAttachmentRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createIncidentAttachment"]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentAttachment' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentAttachment'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentAttachment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentAttachment");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/attachments".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentAttachment",
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
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateAttachmentRequest", ""),
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

  public async createIncidentConfiguration(
    incidentId: string,
    body: IncidentConfigurationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createIncidentConfiguration"]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentConfiguration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentConfiguration'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/configurations".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentConfiguration",
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
      serialize(body, TypingInfo, "IncidentConfigurationRequest", ""),
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

  public async createIncidentGoogleChatConfiguration(
    body: IncidentGoogleChatConfigurationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentGoogleChatConfiguration"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentGoogleChatConfiguration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentGoogleChatConfiguration'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentGoogleChatConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/google-chat-configurations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentGoogleChatConfiguration",
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
      serialize(body, TypingInfo, "IncidentGoogleChatConfigurationRequest", ""),
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

  public async createIncidentGoogleMeetConfiguration(
    body: IncidentGoogleMeetConfigurationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentGoogleMeetConfiguration"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentGoogleMeetConfiguration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentGoogleMeetConfiguration'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentGoogleMeetConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/google-meet-configurations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentGoogleMeetConfiguration",
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
      serialize(body, TypingInfo, "IncidentGoogleMeetConfigurationRequest", ""),
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

  public async createIncidentImpactField(
    body: IncidentImpactFieldRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createIncidentImpactField"]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentImpactField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentImpactField'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentImpactField");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/impact-fields";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentImpactField",
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
      serialize(body, TypingInfo, "IncidentImpactFieldRequest", ""),
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

  public async createIncidentPostmortemAttachment(
    incidentId: string,
    body: PostmortemAttachmentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentPostmortemAttachment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentPostmortemAttachment' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentPostmortemAttachment'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError(
        "incidentId",
        "createIncidentPostmortemAttachment",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentPostmortemAttachment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/attachments/postmortems".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentPostmortemAttachment",
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
      serialize(body, TypingInfo, "PostmortemAttachmentRequest", ""),
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

  public async createIncidentPostmortemTemplate(
    body: PostmortemTemplateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentPostmortemTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentPostmortemTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentPostmortemTemplate'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentPostmortemTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/postmortem-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentPostmortemTemplate",
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
      serialize(body, TypingInfo, "PostmortemTemplateRequest", ""),
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

  public async createIncidentResponder(
    incidentId: string,
    body: IncidentResponderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createIncidentResponder"]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentResponder' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentResponder'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentResponder");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentResponder");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/responders".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentResponder",
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
      serialize(body, TypingInfo, "IncidentResponderRequest", ""),
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

  public async createIncidentRule(
    body: IncidentRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.createIncidentRule"]) {
      throw new Error(
        "Unstable operation 'createIncidentRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentRule",
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
      serialize(body, TypingInfo, "IncidentRuleRequest", ""),
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

  public async createIncidentServiceNowRecord(
    incidentId: string,
    body: IncidentServiceNowRecordRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentServiceNowRecord"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentServiceNowRecord' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentServiceNowRecord'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentServiceNowRecord");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentServiceNowRecord");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/servicenow-records".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentServiceNowRecord",
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
      serialize(body, TypingInfo, "IncidentServiceNowRecordRequest", ""),
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

  public async createIncidentUserDefinedField(
    body: IncidentUserDefinedFieldCreateRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentUserDefinedField"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentUserDefinedField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentUserDefinedField'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentUserDefinedField");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/user-defined-fields";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentUserDefinedField",
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
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentUserDefinedFieldCreateRequest", ""),
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

  public async createIncidentUserDefinedRole(
    body: IncidentUserDefinedRoleRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createIncidentUserDefinedRole"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentUserDefinedRole' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createIncidentUserDefinedRole'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentUserDefinedRole");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/user-defined-roles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createIncidentUserDefinedRole",
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
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentUserDefinedRoleRequest", ""),
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

  public async createOnCallPageFromIncident(
    incidentId: string,
    body: IncidentCreateOnCallPageRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.createOnCallPageFromIncident"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createOnCallPageFromIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createOnCallPageFromIncident'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createOnCallPageFromIncident");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallPageFromIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/page".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createOnCallPageFromIncident",
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
      serialize(body, TypingInfo, "IncidentCreateOnCallPageRequest", ""),
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
    const localVarPath = "/api/v2/incidents/{incident_id}/cases/page".replace(
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

  public async createTimestampOverride(
    incidentId: string,
    body: IncidentTimestampOverrideRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.createTimestampOverride"]
    ) {
      throw new Error(
        "Unstable operation 'createTimestampOverride' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.createTimestampOverride'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createTimestampOverride");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTimestampOverride");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timestamp-overrides".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.createTimestampOverride",
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
      serialize(body, TypingInfo, "IncidentTimestampOverrideRequest", ""),
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

  public async deleteGlobalIncidentHandle(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.deleteGlobalIncidentHandle"]
    ) {
      throw new Error(
        "Unstable operation 'deleteGlobalIncidentHandle' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteGlobalIncidentHandle'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteGlobalIncidentHandle",
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

  public async deleteIncidentAttachment(
    incidentId: string,
    attachmentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.deleteIncidentAttachment"]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentAttachment' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentAttachment'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentAttachment");
    }

    // verify required parameter 'attachmentId' is not null or undefined
    if (attachmentId === null || attachmentId === undefined) {
      throw new RequiredError("attachmentId", "deleteIncidentAttachment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/attachments/{attachment_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{attachment_id}", encodeURIComponent(String(attachmentId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentAttachment",
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

  public async deleteIncidentImpactField(
    fieldId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.deleteIncidentImpactField"]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentImpactField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentImpactField'] = true`",
      );
    }

    // verify required parameter 'fieldId' is not null or undefined
    if (fieldId === null || fieldId === undefined) {
      throw new RequiredError("fieldId", "deleteIncidentImpactField");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/impact-fields/{field_id}".replace(
        "{field_id}",
        encodeURIComponent(String(fieldId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentImpactField",
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

  public async deleteIncidentPostmortemTemplate(
    templateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.deleteIncidentPostmortemTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentPostmortemTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentPostmortemTemplate'] = true`",
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "deleteIncidentPostmortemTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/postmortem-templates/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentPostmortemTemplate",
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
    ]);

    return requestContext;
  }

  public async deleteIncidentResponder(
    incidentId: string,
    responderId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.deleteIncidentResponder"]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentResponder' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentResponder'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentResponder");
    }

    // verify required parameter 'responderId' is not null or undefined
    if (responderId === null || responderId === undefined) {
      throw new RequiredError("responderId", "deleteIncidentResponder");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/responders/{responder_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{responder_id}", encodeURIComponent(String(responderId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentResponder",
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

  public async deleteIncidentRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.deleteIncidentRule"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteIncidentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentRule",
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

  public async deleteIncidentUserDefinedField(
    fieldId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.deleteIncidentUserDefinedField"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentUserDefinedField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentUserDefinedField'] = true`",
      );
    }

    // verify required parameter 'fieldId' is not null or undefined
    if (fieldId === null || fieldId === undefined) {
      throw new RequiredError("fieldId", "deleteIncidentUserDefinedField");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/user-defined-fields/{field_id}".replace(
        "{field_id}",
        encodeURIComponent(String(fieldId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentUserDefinedField",
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

  public async deleteIncidentUserDefinedRole(
    roleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.deleteIncidentUserDefinedRole"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentUserDefinedRole' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteIncidentUserDefinedRole'] = true`",
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new RequiredError("roleId", "deleteIncidentUserDefinedRole");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/user-defined-roles/{role_id}".replace(
        "{role_id}",
        encodeURIComponent(String(roleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteIncidentUserDefinedRole",
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

  public async deleteTimestampOverride(
    incidentId: string,
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.deleteTimestampOverride"]
    ) {
      throw new Error(
        "Unstable operation 'deleteTimestampOverride' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.deleteTimestampOverride'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteTimestampOverride");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteTimestampOverride");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timestamp-overrides/{id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.deleteTimestampOverride",
      IncidentsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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

  public async getGlobalIncidentSettings(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.getGlobalIncidentSettings"]
    ) {
      throw new Error(
        "Unstable operation 'getGlobalIncidentSettings' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getGlobalIncidentSettings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getGlobalIncidentSettings",
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

  public async getIncidentAIPostmortem(
    incidentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.getIncidentAIPostmortem"]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentAIPostmortem' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentAIPostmortem'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentAIPostmortem");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/ai/postmortem".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentAIPostmortem",
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

  public async getIncidentPostmortemTemplate(
    templateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.getIncidentPostmortemTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentPostmortemTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentPostmortemTemplate'] = true`",
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "getIncidentPostmortemTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/postmortem-templates/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentPostmortemTemplate",
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
    ]);

    return requestContext;
  }

  public async getIncidentResponder(
    incidentId: string,
    responderId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.getIncidentResponder"]) {
      throw new Error(
        "Unstable operation 'getIncidentResponder' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentResponder'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentResponder");
    }

    // verify required parameter 'responderId' is not null or undefined
    if (responderId === null || responderId === undefined) {
      throw new RequiredError("responderId", "getIncidentResponder");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/responders/{responder_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{responder_id}", encodeURIComponent(String(responderId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentResponder",
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

  public async getIncidentRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.getIncidentRule"]) {
      throw new Error(
        "Unstable operation 'getIncidentRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getIncidentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentRule",
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

  public async getIncidentUserDefinedField(
    fieldId: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.getIncidentUserDefinedField"]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentUserDefinedField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentUserDefinedField'] = true`",
      );
    }

    // verify required parameter 'fieldId' is not null or undefined
    if (fieldId === null || fieldId === undefined) {
      throw new RequiredError("fieldId", "getIncidentUserDefinedField");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/user-defined-fields/{field_id}".replace(
        "{field_id}",
        encodeURIComponent(String(fieldId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentUserDefinedField",
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

  public async getIncidentUserDefinedRole(
    roleId: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.getIncidentUserDefinedRole"]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentUserDefinedRole' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getIncidentUserDefinedRole'] = true`",
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new RequiredError("roleId", "getIncidentUserDefinedRole");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/user-defined-roles/{role_id}".replace(
        "{role_id}",
        encodeURIComponent(String(roleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getIncidentUserDefinedRole",
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

  public async getOrgSettingsByIncidentType(
    incidentTypeId: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.getOrgSettingsByIncidentType"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getOrgSettingsByIncidentType' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.getOrgSettingsByIncidentType'] = true`",
      );
    }

    // verify required parameter 'incidentTypeId' is not null or undefined
    if (incidentTypeId === null || incidentTypeId === undefined) {
      throw new RequiredError("incidentTypeId", "getOrgSettingsByIncidentType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/types/{incident_type_id}/org-settings".replace(
        "{incident_type_id}",
        encodeURIComponent(String(incidentTypeId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.getOrgSettingsByIncidentType",
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

  public async importIncident(
    body: IncidentImportRequest,
    include?: Array<IncidentImportRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.importIncident"]) {
      throw new Error(
        "Unstable operation 'importIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.importIncident'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "importIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/import";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.importIncident",
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
          "Array<IncidentImportRelatedObject>",
          "",
        ),
        "csv",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentImportRequest", ""),
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

  public async linkPageToIncident(
    incidentId: string,
    body: IncidentOnCallPageLinkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.linkPageToIncident"]) {
      throw new Error(
        "Unstable operation 'linkPageToIncident' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.linkPageToIncident'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "linkPageToIncident");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "linkPageToIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/pages/link".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.linkPageToIncident",
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
      serialize(body, TypingInfo, "IncidentOnCallPageLinkRequest", ""),
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

  public async listGlobalIncidentHandles(
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.listGlobalIncidentHandles"]
    ) {
      throw new Error(
        "Unstable operation 'listGlobalIncidentHandles' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listGlobalIncidentHandles'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listGlobalIncidentHandles",
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
    ]);

    return requestContext;
  }

  public async listIncidentAttachments(
    incidentId: string,
    filterAttachmentType?: string,
    include?: string,
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
    if (filterAttachmentType !== undefined) {
      requestContext.setQueryParam(
        "filter[attachment_type]",
        serialize(filterAttachmentType, TypingInfo, "string", ""),
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
    ]);

    return requestContext;
  }

  public async listIncidentImpactFields(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.listIncidentImpactFields"]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentImpactFields' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentImpactFields'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/impact-fields";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentImpactFields",
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

  public async listIncidentImpacts(
    incidentId: string,
    include?: Array<IncidentImpactRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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

  public async listIncidentPostmortemTemplates(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.listIncidentPostmortemTemplates"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentPostmortemTemplates' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentPostmortemTemplates'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/postmortem-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentPostmortemTemplates",
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
    ]);

    return requestContext;
  }

  public async listIncidentResponders(
    incidentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listIncidentResponders"]) {
      throw new Error(
        "Unstable operation 'listIncidentResponders' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentResponders'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentResponders");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/responders".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentResponders",
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

  public async listIncidentRules(
    filterTaskId?: string,
    filterTrigger?: string,
    incidentTypeUuid?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listIncidentRules"]) {
      throw new Error(
        "Unstable operation 'listIncidentRules' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentRules",
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
    if (filterTaskId !== undefined) {
      requestContext.setQueryParam(
        "filter[task_id]",
        serialize(filterTaskId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTrigger !== undefined) {
      requestContext.setQueryParam(
        "filter[trigger]",
        serialize(filterTrigger, TypingInfo, "string", ""),
        "",
      );
    }
    if (incidentTypeUuid !== undefined) {
      requestContext.setQueryParam(
        "incidentTypeUUID",
        serialize(incidentTypeUuid, TypingInfo, "string", "uuid"),
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

  public async listIncidentUserDefinedFields(
    pageSize?: number,
    pageNumber?: number,
    includeDeleted?: boolean,
    filterIncidentType?: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.listIncidentUserDefinedFields"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentUserDefinedFields' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentUserDefinedFields'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/user-defined-fields";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentUserDefinedFields",
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (includeDeleted !== undefined) {
      requestContext.setQueryParam(
        "include-deleted",
        serialize(includeDeleted, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterIncidentType !== undefined) {
      requestContext.setQueryParam(
        "filter[incident-type]",
        serialize(filterIncidentType, TypingInfo, "string", ""),
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

  public async listIncidentUserDefinedRoles(
    filterIncidentType?: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.listIncidentUserDefinedRoles"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentUserDefinedRoles' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listIncidentUserDefinedRoles'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/user-defined-roles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listIncidentUserDefinedRoles",
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

  public async listOrgSettings(
    pageSize?: number,
    pageOffset?: number,
    includeDeleted?: boolean,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listOrgSettings"]) {
      throw new Error(
        "Unstable operation 'listOrgSettings' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listOrgSettings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/types/org-settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listOrgSettings",
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", ""),
        "",
      );
    }
    if (includeDeleted !== undefined) {
      requestContext.setQueryParam(
        "include-deleted",
        serialize(includeDeleted, TypingInfo, "boolean", ""),
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

  public async listTimestampOverrides(
    incidentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.listTimestampOverrides"]) {
      throw new Error(
        "Unstable operation 'listTimestampOverrides' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.listTimestampOverrides'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listTimestampOverrides");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timestamp-overrides".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.listTimestampOverrides",
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

  public async patchIncidentImpact(
    incidentId: string,
    impactId: string,
    body: IncidentImpactCreateRequest,
    include?: Array<IncidentImpactRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.patchIncidentImpact"]) {
      throw new Error(
        "Unstable operation 'patchIncidentImpact' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.patchIncidentImpact'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "patchIncidentImpact");
    }

    // verify required parameter 'impactId' is not null or undefined
    if (impactId === null || impactId === undefined) {
      throw new RequiredError("impactId", "patchIncidentImpact");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchIncidentImpact");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/impacts/{impact_id}"
      .replace("{incident_id}", encodeURIComponent(String(incidentId)))
      .replace("{impact_id}", encodeURIComponent(String(impactId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.patchIncidentImpact",
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

  public async updateGlobalIncidentHandle(
    body: IncidentHandleRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateGlobalIncidentHandle"]
    ) {
      throw new Error(
        "Unstable operation 'updateGlobalIncidentHandle' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateGlobalIncidentHandle'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGlobalIncidentHandle");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateGlobalIncidentHandle",
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
      serialize(body, TypingInfo, "IncidentHandleRequest", ""),
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

  public async updateGlobalIncidentSettings(
    body: GlobalIncidentSettingsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateGlobalIncidentSettings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateGlobalIncidentSettings' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateGlobalIncidentSettings'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGlobalIncidentSettings");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/settings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateGlobalIncidentSettings",
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
      serialize(body, TypingInfo, "GlobalIncidentSettingsRequest", ""),
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

  public async updateIncidentAttachment(
    incidentId: string,
    attachmentId: string,
    body: PatchAttachmentRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateIncidentAttachment"]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentAttachment' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentAttachment'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentAttachment");
    }

    // verify required parameter 'attachmentId' is not null or undefined
    if (attachmentId === null || attachmentId === undefined) {
      throw new RequiredError("attachmentId", "updateIncidentAttachment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentAttachment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/attachments/{attachment_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{attachment_id}", encodeURIComponent(String(attachmentId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentAttachment",
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
      serialize(body, TypingInfo, "PatchAttachmentRequest", ""),
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

  public async updateIncidentConfiguration(
    incidentId: string,
    body: IncidentConfigurationPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateIncidentConfiguration"]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentConfiguration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentConfiguration'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/configurations".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentConfiguration",
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
      serialize(body, TypingInfo, "IncidentConfigurationPatchRequest", ""),
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

  public async updateIncidentGoogleChatConfiguration(
    id: string,
    body: IncidentGoogleChatConfigurationPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentGoogleChatConfiguration"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentGoogleChatConfiguration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentGoogleChatConfiguration'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateIncidentGoogleChatConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentGoogleChatConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/google-chat-configurations/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentGoogleChatConfiguration",
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
        "IncidentGoogleChatConfigurationPatchRequest",
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

  public async updateIncidentGoogleMeetConfiguration(
    id: string,
    body: IncidentGoogleMeetConfigurationPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentGoogleMeetConfiguration"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentGoogleMeetConfiguration' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentGoogleMeetConfiguration'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateIncidentGoogleMeetConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentGoogleMeetConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/google-meet-configurations/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentGoogleMeetConfiguration",
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
        "IncidentGoogleMeetConfigurationPatchRequest",
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

  public async updateIncidentImpact(
    incidentId: string,
    impactId: string,
    body: IncidentImpactCreateRequest,
    include?: Array<IncidentImpactRelatedObject>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.updateIncidentImpact"]) {
      throw new Error(
        "Unstable operation 'updateIncidentImpact' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentImpact'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentImpact");
    }

    // verify required parameter 'impactId' is not null or undefined
    if (impactId === null || impactId === undefined) {
      throw new RequiredError("impactId", "updateIncidentImpact");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentImpact");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/impacts/{impact_id}"
      .replace("{incident_id}", encodeURIComponent(String(incidentId)))
      .replace("{impact_id}", encodeURIComponent(String(impactId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentImpact",
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

  public async updateIncidentImpactField(
    fieldId: string,
    body: IncidentImpactFieldRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateIncidentImpactField"]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentImpactField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentImpactField'] = true`",
      );
    }

    // verify required parameter 'fieldId' is not null or undefined
    if (fieldId === null || fieldId === undefined) {
      throw new RequiredError("fieldId", "updateIncidentImpactField");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentImpactField");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/impact-fields/{field_id}".replace(
        "{field_id}",
        encodeURIComponent(String(fieldId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentImpactField",
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IncidentImpactFieldRequest", ""),
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

  public async updateIncidentPostmortemTemplate(
    templateId: string,
    body: PostmortemTemplateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentPostmortemTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentPostmortemTemplate' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentPostmortemTemplate'] = true`",
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "updateIncidentPostmortemTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentPostmortemTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/postmortem-templates/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentPostmortemTemplate",
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
      serialize(body, TypingInfo, "PostmortemTemplateRequest", ""),
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

  public async updateIncidentRule(
    ruleId: string,
    body: IncidentRulePatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["IncidentsApi.v2.updateIncidentRule"]) {
      throw new Error(
        "Unstable operation 'updateIncidentRule' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateIncidentRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentRule");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentRule",
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
      serialize(body, TypingInfo, "IncidentRulePatchRequest", ""),
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

  public async updateIncidentUserDefinedField(
    fieldId: string,
    body: IncidentUserDefinedFieldUpdateRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentUserDefinedField"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentUserDefinedField' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentUserDefinedField'] = true`",
      );
    }

    // verify required parameter 'fieldId' is not null or undefined
    if (fieldId === null || fieldId === undefined) {
      throw new RequiredError("fieldId", "updateIncidentUserDefinedField");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentUserDefinedField");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/user-defined-fields/{field_id}".replace(
        "{field_id}",
        encodeURIComponent(String(fieldId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentUserDefinedField",
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
      serialize(body, TypingInfo, "IncidentUserDefinedFieldUpdateRequest", ""),
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

  public async updateIncidentUserDefinedRole(
    roleId: string,
    body: IncidentUserDefinedRolePatchRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentsApi.v2.updateIncidentUserDefinedRole"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentUserDefinedRole' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateIncidentUserDefinedRole'] = true`",
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new RequiredError("roleId", "updateIncidentUserDefinedRole");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentUserDefinedRole");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/user-defined-roles/{role_id}".replace(
        "{role_id}",
        encodeURIComponent(String(roleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateIncidentUserDefinedRole",
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
      serialize(body, TypingInfo, "IncidentUserDefinedRolePatchRequest", ""),
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

  public async updateTimestampOverride(
    incidentId: string,
    id: string,
    body: IncidentTimestampOverridePatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentsApi.v2.updateTimestampOverride"]
    ) {
      throw new Error(
        "Unstable operation 'updateTimestampOverride' is disabled. Enable it by setting `configuration.unstableOperations['IncidentsApi.v2.updateTimestampOverride'] = true`",
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateTimestampOverride");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateTimestampOverride");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTimestampOverride");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timestamp-overrides/{id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentsApi.v2.updateTimestampOverride",
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
      serialize(body, TypingInfo, "IncidentTimestampOverridePatchRequest", ""),
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
   * @params response Response returned by the server for a request to createGlobalIncidentHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGlobalIncidentHandle(
    response: ResponseContext,
  ): Promise<IncidentHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentHandleResponse",
      ) as IncidentHandleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentHandleResponse",
        "",
      ) as IncidentHandleResponse;
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
   * @params response Response returned by the server for a request to createIncidentAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentAttachment(
    response: ResponseContext,
  ): Promise<Attachment> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: Attachment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Attachment",
      ) as Attachment;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: Attachment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Attachment",
        "",
      ) as Attachment;
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
   * @params response Response returned by the server for a request to createIncidentConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentConfiguration(
    response: ResponseContext,
  ): Promise<IncidentConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentConfigurationResponse",
      ) as IncidentConfigurationResponse;
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
      const body: IncidentConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentConfigurationResponse",
        "",
      ) as IncidentConfigurationResponse;
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
   * @params response Response returned by the server for a request to createIncidentGoogleChatConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentGoogleChatConfiguration(
    response: ResponseContext,
  ): Promise<IncidentGoogleChatConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentGoogleChatConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleChatConfigurationResponse",
      ) as IncidentGoogleChatConfigurationResponse;
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
      const body: IncidentGoogleChatConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleChatConfigurationResponse",
        "",
      ) as IncidentGoogleChatConfigurationResponse;
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
   * @params response Response returned by the server for a request to createIncidentGoogleMeetConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentGoogleMeetConfiguration(
    response: ResponseContext,
  ): Promise<IncidentGoogleMeetConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentGoogleMeetConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleMeetConfigurationResponse",
      ) as IncidentGoogleMeetConfigurationResponse;
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
      const body: IncidentGoogleMeetConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleMeetConfigurationResponse",
        "",
      ) as IncidentGoogleMeetConfigurationResponse;
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
   * @params response Response returned by the server for a request to createIncidentImpactField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentImpactField(
    response: ResponseContext,
  ): Promise<IncidentImpactFieldResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentImpactFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactFieldResponse",
      ) as IncidentImpactFieldResponse;
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
      const body: IncidentImpactFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactFieldResponse",
        "",
      ) as IncidentImpactFieldResponse;
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
   * @params response Response returned by the server for a request to createIncidentPostmortemAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentPostmortemAttachment(
    response: ResponseContext,
  ): Promise<Attachment> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: Attachment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Attachment",
      ) as Attachment;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: Attachment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Attachment",
        "",
      ) as Attachment;
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
   * @params response Response returned by the server for a request to createIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentPostmortemTemplate(
    response: ResponseContext,
  ): Promise<PostmortemTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: PostmortemTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplateResponse",
      ) as PostmortemTemplateResponse;
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
      const body: PostmortemTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplateResponse",
        "",
      ) as PostmortemTemplateResponse;
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
   * @params response Response returned by the server for a request to createIncidentResponder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentResponder(
    response: ResponseContext,
  ): Promise<IncidentResponderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentResponderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponderResponse",
      ) as IncidentResponderResponse;
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
      const body: IncidentResponderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponderResponse",
        "",
      ) as IncidentResponderResponse;
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
   * @params response Response returned by the server for a request to createIncidentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentRule(
    response: ResponseContext,
  ): Promise<IncidentRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRuleResponse",
      ) as IncidentRuleResponse;
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
      const body: IncidentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRuleResponse",
        "",
      ) as IncidentRuleResponse;
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
   * @params response Response returned by the server for a request to createIncidentServiceNowRecord
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentServiceNowRecord(
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
   * @params response Response returned by the server for a request to createIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentUserDefinedField(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedFieldResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentUserDefinedFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldResponse",
      ) as IncidentUserDefinedFieldResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (
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
      const body: IncidentUserDefinedFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldResponse",
        "",
      ) as IncidentUserDefinedFieldResponse;
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
   * @params response Response returned by the server for a request to createIncidentUserDefinedRole
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentUserDefinedRole(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedRoleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentUserDefinedRoleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRoleResponse",
      ) as IncidentUserDefinedRoleResponse;
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
      const body: IncidentUserDefinedRoleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRoleResponse",
        "",
      ) as IncidentUserDefinedRoleResponse;
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
   * @params response Response returned by the server for a request to createOnCallPageFromIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallPageFromIncident(
    response: ResponseContext,
  ): Promise<IncidentPageUUIDResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentPageUUIDResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentPageUUIDResponse",
      ) as IncidentPageUUIDResponse;
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
      const body: IncidentPageUUIDResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentPageUUIDResponse",
        "",
      ) as IncidentPageUUIDResponse;
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
  ): Promise<IncidentPageUUIDResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentPageUUIDResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentPageUUIDResponse",
      ) as IncidentPageUUIDResponse;
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
      const body: IncidentPageUUIDResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentPageUUIDResponse",
        "",
      ) as IncidentPageUUIDResponse;
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
   * @params response Response returned by the server for a request to createTimestampOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTimestampOverride(
    response: ResponseContext,
  ): Promise<IncidentTimestampOverrideResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentTimestampOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverrideResponse",
      ) as IncidentTimestampOverrideResponse;
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
      const body: IncidentTimestampOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverrideResponse",
        "",
      ) as IncidentTimestampOverrideResponse;
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
   * @params response Response returned by the server for a request to deleteGlobalIncidentHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGlobalIncidentHandle(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400) {
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
   * @params response Response returned by the server for a request to deleteIncidentAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentAttachment(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to deleteIncidentImpactField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentImpactField(
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
   * @params response Response returned by the server for a request to deleteIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentPostmortemTemplate(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to deleteIncidentResponder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentResponder(
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
   * @params response Response returned by the server for a request to deleteIncidentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentRule(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentUserDefinedField(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (
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
   * @params response Response returned by the server for a request to deleteIncidentUserDefinedRole
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentUserDefinedRole(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to deleteTimestampOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTimestampOverride(
    response: ResponseContext,
  ): Promise<IncidentTimestampOverrideResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTimestampOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverrideResponse",
      ) as IncidentTimestampOverrideResponse;
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
      const body: IncidentTimestampOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverrideResponse",
        "",
      ) as IncidentTimestampOverrideResponse;
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
   * @params response Response returned by the server for a request to getGlobalIncidentSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGlobalIncidentSettings(
    response: ResponseContext,
  ): Promise<GlobalIncidentSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GlobalIncidentSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GlobalIncidentSettingsResponse",
      ) as GlobalIncidentSettingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: GlobalIncidentSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GlobalIncidentSettingsResponse",
        "",
      ) as GlobalIncidentSettingsResponse;
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
   * @params response Response returned by the server for a request to getIncidentAIPostmortem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentAIPostmortem(
    response: ResponseContext,
  ): Promise<IncidentAIPostmortemResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentAIPostmortemResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentAIPostmortemResponse",
      ) as IncidentAIPostmortemResponse;
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
      const body: IncidentAIPostmortemResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentAIPostmortemResponse",
        "",
      ) as IncidentAIPostmortemResponse;
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
   * @params response Response returned by the server for a request to getIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentPostmortemTemplate(
    response: ResponseContext,
  ): Promise<PostmortemTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PostmortemTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplateResponse",
      ) as PostmortemTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: PostmortemTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplateResponse",
        "",
      ) as PostmortemTemplateResponse;
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
   * @params response Response returned by the server for a request to getIncidentResponder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentResponder(
    response: ResponseContext,
  ): Promise<IncidentResponderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentResponderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponderResponse",
      ) as IncidentResponderResponse;
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
      const body: IncidentResponderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentResponderResponse",
        "",
      ) as IncidentResponderResponse;
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
   * @params response Response returned by the server for a request to getIncidentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentRule(
    response: ResponseContext,
  ): Promise<IncidentRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRuleResponse",
      ) as IncidentRuleResponse;
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
      const body: IncidentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRuleResponse",
        "",
      ) as IncidentRuleResponse;
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
   * @params response Response returned by the server for a request to getIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentUserDefinedField(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedFieldResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldResponse",
      ) as IncidentUserDefinedFieldResponse;
      return body;
    }
    if (
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
    if (response.httpStatusCode === 404) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentUserDefinedFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldResponse",
        "",
      ) as IncidentUserDefinedFieldResponse;
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
   * @params response Response returned by the server for a request to getIncidentUserDefinedRole
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentUserDefinedRole(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedRoleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedRoleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRoleResponse",
      ) as IncidentUserDefinedRoleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: IncidentUserDefinedRoleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRoleResponse",
        "",
      ) as IncidentUserDefinedRoleResponse;
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
   * @params response Response returned by the server for a request to getOrgSettingsByIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrgSettingsByIncidentType(
    response: ResponseContext,
  ): Promise<IncidentOrgSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentOrgSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentOrgSettingsResponse",
      ) as IncidentOrgSettingsResponse;
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
      const body: IncidentOrgSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentOrgSettingsResponse",
        "",
      ) as IncidentOrgSettingsResponse;
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
   * @params response Response returned by the server for a request to importIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async importIncident(
    response: ResponseContext,
  ): Promise<IncidentImportResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentImportResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImportResponse",
      ) as IncidentImportResponse;
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
      const body: IncidentImportResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImportResponse",
        "",
      ) as IncidentImportResponse;
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
   * @params response Response returned by the server for a request to linkPageToIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkPageToIncident(
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
    if (response.httpStatusCode === 409) {
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
   * @params response Response returned by the server for a request to listGlobalIncidentHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGlobalIncidentHandles(
    response: ResponseContext,
  ): Promise<IncidentHandlesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentHandlesResponse",
      ) as IncidentHandlesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentHandlesResponse",
        "",
      ) as IncidentHandlesResponse;
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
  ): Promise<AttachmentArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AttachmentArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AttachmentArray",
      ) as AttachmentArray;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AttachmentArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AttachmentArray",
        "",
      ) as AttachmentArray;
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
   * @params response Response returned by the server for a request to listIncidentImpactFields
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentImpactFields(
    response: ResponseContext,
  ): Promise<IncidentImpactFieldsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentImpactFieldsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactFieldsResponse",
      ) as IncidentImpactFieldsResponse;
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
      const body: IncidentImpactFieldsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactFieldsResponse",
        "",
      ) as IncidentImpactFieldsResponse;
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
   * @params response Response returned by the server for a request to listIncidentPostmortemTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentPostmortemTemplates(
    response: ResponseContext,
  ): Promise<PostmortemTemplatesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PostmortemTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplatesResponse",
      ) as PostmortemTemplatesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: PostmortemTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplatesResponse",
        "",
      ) as PostmortemTemplatesResponse;
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
   * @params response Response returned by the server for a request to listIncidentResponders
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentResponders(
    response: ResponseContext,
  ): Promise<IncidentRespondersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentRespondersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRespondersResponse",
      ) as IncidentRespondersResponse;
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
      const body: IncidentRespondersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRespondersResponse",
        "",
      ) as IncidentRespondersResponse;
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
   * @params response Response returned by the server for a request to listIncidentRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentRules(
    response: ResponseContext,
  ): Promise<IncidentRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRulesResponse",
      ) as IncidentRulesResponse;
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
      const body: IncidentRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRulesResponse",
        "",
      ) as IncidentRulesResponse;
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
   * @params response Response returned by the server for a request to listIncidentUserDefinedFields
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentUserDefinedFields(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedFieldListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedFieldListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldListResponse",
      ) as IncidentUserDefinedFieldListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
    if (
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
      const body: IncidentUserDefinedFieldListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldListResponse",
        "",
      ) as IncidentUserDefinedFieldListResponse;
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
   * @params response Response returned by the server for a request to listIncidentUserDefinedRoles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentUserDefinedRoles(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedRolesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedRolesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRolesResponse",
      ) as IncidentUserDefinedRolesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentUserDefinedRolesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRolesResponse",
        "",
      ) as IncidentUserDefinedRolesResponse;
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
   * @params response Response returned by the server for a request to listOrgSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgSettings(
    response: ResponseContext,
  ): Promise<IncidentOrgSettingsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentOrgSettingsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentOrgSettingsListResponse",
      ) as IncidentOrgSettingsListResponse;
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
      const body: IncidentOrgSettingsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentOrgSettingsListResponse",
        "",
      ) as IncidentOrgSettingsListResponse;
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
   * @params response Response returned by the server for a request to listTimestampOverrides
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTimestampOverrides(
    response: ResponseContext,
  ): Promise<IncidentTimestampOverridesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTimestampOverridesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverridesResponse",
      ) as IncidentTimestampOverridesResponse;
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
      const body: IncidentTimestampOverridesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverridesResponse",
        "",
      ) as IncidentTimestampOverridesResponse;
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
   * @params response Response returned by the server for a request to patchIncidentImpact
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchIncidentImpact(
    response: ResponseContext,
  ): Promise<IncidentImpactResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to updateGlobalIncidentHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGlobalIncidentHandle(
    response: ResponseContext,
  ): Promise<IncidentHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentHandleResponse",
      ) as IncidentHandleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentHandleResponse",
        "",
      ) as IncidentHandleResponse;
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
   * @params response Response returned by the server for a request to updateGlobalIncidentSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGlobalIncidentSettings(
    response: ResponseContext,
  ): Promise<GlobalIncidentSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GlobalIncidentSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GlobalIncidentSettingsResponse",
      ) as GlobalIncidentSettingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: GlobalIncidentSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GlobalIncidentSettingsResponse",
        "",
      ) as GlobalIncidentSettingsResponse;
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
   * @params response Response returned by the server for a request to updateIncidentAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentAttachment(
    response: ResponseContext,
  ): Promise<Attachment> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Attachment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Attachment",
      ) as Attachment;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: Attachment = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Attachment",
        "",
      ) as Attachment;
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
   * @params response Response returned by the server for a request to updateIncidentConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentConfiguration(
    response: ResponseContext,
  ): Promise<IncidentConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentConfigurationResponse",
      ) as IncidentConfigurationResponse;
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
      const body: IncidentConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentConfigurationResponse",
        "",
      ) as IncidentConfigurationResponse;
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
   * @params response Response returned by the server for a request to updateIncidentGoogleChatConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentGoogleChatConfiguration(
    response: ResponseContext,
  ): Promise<IncidentGoogleChatConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentGoogleChatConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleChatConfigurationResponse",
      ) as IncidentGoogleChatConfigurationResponse;
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
      const body: IncidentGoogleChatConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleChatConfigurationResponse",
        "",
      ) as IncidentGoogleChatConfigurationResponse;
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
   * @params response Response returned by the server for a request to updateIncidentGoogleMeetConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentGoogleMeetConfiguration(
    response: ResponseContext,
  ): Promise<IncidentGoogleMeetConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentGoogleMeetConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleMeetConfigurationResponse",
      ) as IncidentGoogleMeetConfigurationResponse;
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
      const body: IncidentGoogleMeetConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentGoogleMeetConfigurationResponse",
        "",
      ) as IncidentGoogleMeetConfigurationResponse;
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
   * @params response Response returned by the server for a request to updateIncidentImpact
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentImpact(
    response: ResponseContext,
  ): Promise<IncidentImpactResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to updateIncidentImpactField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentImpactField(
    response: ResponseContext,
  ): Promise<IncidentImpactFieldResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentImpactFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactFieldResponse",
      ) as IncidentImpactFieldResponse;
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
      const body: IncidentImpactFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentImpactFieldResponse",
        "",
      ) as IncidentImpactFieldResponse;
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
   * @params response Response returned by the server for a request to updateIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentPostmortemTemplate(
    response: ResponseContext,
  ): Promise<PostmortemTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PostmortemTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplateResponse",
      ) as PostmortemTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: PostmortemTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PostmortemTemplateResponse",
        "",
      ) as PostmortemTemplateResponse;
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
   * @params response Response returned by the server for a request to updateIncidentRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentRule(
    response: ResponseContext,
  ): Promise<IncidentRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRuleResponse",
      ) as IncidentRuleResponse;
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
      const body: IncidentRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentRuleResponse",
        "",
      ) as IncidentRuleResponse;
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentUserDefinedField(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedFieldResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldResponse",
      ) as IncidentUserDefinedFieldResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (
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
      const body: IncidentUserDefinedFieldResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedFieldResponse",
        "",
      ) as IncidentUserDefinedFieldResponse;
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
   * @params response Response returned by the server for a request to updateIncidentUserDefinedRole
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentUserDefinedRole(
    response: ResponseContext,
  ): Promise<IncidentUserDefinedRoleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedRoleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRoleResponse",
      ) as IncidentUserDefinedRoleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: IncidentUserDefinedRoleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentUserDefinedRoleResponse",
        "",
      ) as IncidentUserDefinedRoleResponse;
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
   * @params response Response returned by the server for a request to updateTimestampOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTimestampOverride(
    response: ResponseContext,
  ): Promise<IncidentTimestampOverrideResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentTimestampOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverrideResponse",
      ) as IncidentTimestampOverrideResponse;
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
      const body: IncidentTimestampOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentTimestampOverrideResponse",
        "",
      ) as IncidentTimestampOverrideResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface IncidentsApiCreateGlobalIncidentHandleRequest {
  /**
   * @type IncidentHandleRequest
   */
  body: IncidentHandleRequest;
  /**
   * Comma-separated list of related resources to include in the response
   * @type string
   */
  include?: string;
}

export interface IncidentsApiCreateIncidentRequest {
  /**
   * Incident payload.
   * @type IncidentCreateRequest
   */
  body: IncidentCreateRequest;
}

export interface IncidentsApiCreateIncidentAttachmentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type CreateAttachmentRequest
   */
  body: CreateAttachmentRequest;
  /**
   * Resource to include in the response. Supported value: `last_modified_by_user`.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiCreateIncidentConfigurationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident configuration payload.
   * @type IncidentConfigurationRequest
   */
  body: IncidentConfigurationRequest;
}

export interface IncidentsApiCreateIncidentGoogleChatConfigurationRequest {
  /**
   * Google Chat configuration payload.
   * @type IncidentGoogleChatConfigurationRequest
   */
  body: IncidentGoogleChatConfigurationRequest;
}

export interface IncidentsApiCreateIncidentGoogleMeetConfigurationRequest {
  /**
   * Google Meet configuration payload.
   * @type IncidentGoogleMeetConfigurationRequest
   */
  body: IncidentGoogleMeetConfigurationRequest;
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

export interface IncidentsApiCreateIncidentImpactFieldRequest {
  /**
   * Impact field payload.
   * @type IncidentImpactFieldRequest
   */
  body: IncidentImpactFieldRequest;
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

export interface IncidentsApiCreateIncidentPostmortemAttachmentRequest {
  /**
   * The ID of the incident
   * @type string
   */
  incidentId: string;
  /**
   * @type PostmortemAttachmentRequest
   */
  body: PostmortemAttachmentRequest;
}

export interface IncidentsApiCreateIncidentPostmortemTemplateRequest {
  /**
   * @type PostmortemTemplateRequest
   */
  body: PostmortemTemplateRequest;
}

export interface IncidentsApiCreateIncidentResponderRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident responder payload.
   * @type IncidentResponderRequest
   */
  body: IncidentResponderRequest;
}

export interface IncidentsApiCreateIncidentRuleRequest {
  /**
   * Incident rule payload.
   * @type IncidentRuleRequest
   */
  body: IncidentRuleRequest;
}

export interface IncidentsApiCreateIncidentServiceNowRecordRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * ServiceNow record payload.
   * @type IncidentServiceNowRecordRequest
   */
  body: IncidentServiceNowRecordRequest;
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

export interface IncidentsApiCreateIncidentUserDefinedFieldRequest {
  /**
   * Incident user-defined field payload.
   * @type IncidentUserDefinedFieldCreateRequest
   */
  body: IncidentUserDefinedFieldCreateRequest;
  /**
   * Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".
   * @type string
   */
  include?: string;
}

export interface IncidentsApiCreateIncidentUserDefinedRoleRequest {
  /**
   * @type IncidentUserDefinedRoleRequest
   */
  body: IncidentUserDefinedRoleRequest;
  /**
   * Comma-separated list of related resources to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiCreateOnCallPageFromIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * On-call page creation payload.
   * @type IncidentCreateOnCallPageRequest
   */
  body: IncidentCreateOnCallPageRequest;
}

export interface IncidentsApiCreatePageFromIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Page creation payload.
   * @type IncidentCreatePageFromIncidentRequest
   */
  body: IncidentCreatePageFromIncidentRequest;
}

export interface IncidentsApiCreateTimestampOverrideRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Timestamp override payload.
   * @type IncidentTimestampOverrideRequest
   */
  body: IncidentTimestampOverrideRequest;
}

export interface IncidentsApiDeleteIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiDeleteIncidentAttachmentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the attachment.
   * @type string
   */
  attachmentId: string;
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

export interface IncidentsApiDeleteIncidentImpactFieldRequest {
  /**
   * The UUID of the impact field.
   * @type string
   */
  fieldId: string;
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

export interface IncidentsApiDeleteIncidentPostmortemTemplateRequest {
  /**
   * The ID of the postmortem template
   * @type string
   */
  templateId: string;
}

export interface IncidentsApiDeleteIncidentResponderRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident responder.
   * @type string
   */
  responderId: string;
}

export interface IncidentsApiDeleteIncidentRuleRequest {
  /**
   * The UUID of the incident rule.
   * @type string
   */
  ruleId: string;
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

export interface IncidentsApiDeleteIncidentUserDefinedFieldRequest {
  /**
   * The ID of the incident user-defined field.
   * @type string
   */
  fieldId: string;
}

export interface IncidentsApiDeleteIncidentUserDefinedRoleRequest {
  /**
   * The UUID of the incident user-defined role.
   * @type string
   */
  roleId: string;
}

export interface IncidentsApiDeleteTimestampOverrideRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the timestamp override.
   * @type string
   */
  id: string;
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

export interface IncidentsApiGetIncidentAIPostmortemRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
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

export interface IncidentsApiGetIncidentPostmortemTemplateRequest {
  /**
   * The ID of the postmortem template
   * @type string
   */
  templateId: string;
}

export interface IncidentsApiGetIncidentResponderRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the incident responder.
   * @type string
   */
  responderId: string;
}

export interface IncidentsApiGetIncidentRuleRequest {
  /**
   * The UUID of the incident rule.
   * @type string
   */
  ruleId: string;
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

export interface IncidentsApiGetIncidentUserDefinedFieldRequest {
  /**
   * The ID of the incident user-defined field.
   * @type string
   */
  fieldId: string;
  /**
   * Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".
   * @type string
   */
  include?: string;
}

export interface IncidentsApiGetIncidentUserDefinedRoleRequest {
  /**
   * The UUID of the incident user-defined role.
   * @type string
   */
  roleId: string;
  /**
   * Comma-separated list of related resources to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiGetOrgSettingsByIncidentTypeRequest {
  /**
   * The UUID of the incident type.
   * @type string
   */
  incidentTypeId: string;
  /**
   * Comma-separated list of related resources to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiImportIncidentRequest {
  /**
   * Incident import payload.
   * @type IncidentImportRequest
   */
  body: IncidentImportRequest;
  /**
   * Specifies which related object types to include in the response when importing an incident.
   * @type Array<IncidentImportRelatedObject>
   */
  include?: Array<IncidentImportRelatedObject>;
}

export interface IncidentsApiLinkPageToIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * On-call page link payload.
   * @type IncidentOnCallPageLinkRequest
   */
  body: IncidentOnCallPageLinkRequest;
}

export interface IncidentsApiListGlobalIncidentHandlesRequest {
  /**
   * Comma-separated list of related resources to include in the response
   * @type string
   */
  include?: string;
}

export interface IncidentsApiListIncidentAttachmentsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Filter attachments by type. Supported values are `1` (`postmortem`) and `2` (`link`).
   * @type string
   */
  filterAttachmentType?: string;
  /**
   * Resource to include in the response. Supported value: `last_modified_by_user`.
   * @type string
   */
  include?: string;
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

export interface IncidentsApiListIncidentRespondersRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiListIncidentRulesRequest {
  /**
   * Filter rules by task ID.
   * @type string
   */
  filterTaskId?: string;
  /**
   * Filter rules by trigger.
   * @type string
   */
  filterTrigger?: string;
  /**
   * Filter rules by incident type UUID.
   * @type string
   */
  incidentTypeUuid?: string;
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

export interface IncidentsApiListIncidentUserDefinedFieldsRequest {
  /**
   * The number of results to return per page. Must be between 0 and 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to retrieve, starting at 0.
   * @type number
   */
  pageNumber?: number;
  /**
   * When true, include soft-deleted fields in the response.
   * @type boolean
   */
  includeDeleted?: boolean;
  /**
   * Filter results to fields associated with the given incident type UUID.
   * @type string
   */
  filterIncidentType?: string;
  /**
   * Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".
   * @type string
   */
  include?: string;
}

export interface IncidentsApiListIncidentUserDefinedRolesRequest {
  /**
   * Filter roles by incident type UUID.
   * @type string
   */
  filterIncidentType?: string;
  /**
   * Comma-separated list of related resources to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiListOrgSettingsRequest {
  /**
   * Maximum number of results to return.
   * @type number
   */
  pageSize?: number;
  /**
   * The offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Whether to include deleted records.
   * @type boolean
   */
  includeDeleted?: boolean;
  /**
   * Comma-separated list of related resources to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiListTimestampOverridesRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiPatchIncidentImpactRequest {
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
  /**
   * Incident impact patch payload.
   * @type IncidentImpactCreateRequest
   */
  body: IncidentImpactCreateRequest;
  /**
   * Specifies which related resources should be included in the response.
   * @type Array<IncidentImpactRelatedObject>
   */
  include?: Array<IncidentImpactRelatedObject>;
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

export interface IncidentsApiUpdateGlobalIncidentHandleRequest {
  /**
   * @type IncidentHandleRequest
   */
  body: IncidentHandleRequest;
  /**
   * Comma-separated list of related resources to include in the response
   * @type string
   */
  include?: string;
}

export interface IncidentsApiUpdateGlobalIncidentSettingsRequest {
  /**
   * @type GlobalIncidentSettingsRequest
   */
  body: GlobalIncidentSettingsRequest;
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

export interface IncidentsApiUpdateIncidentAttachmentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the attachment.
   * @type string
   */
  attachmentId: string;
  /**
   * @type PatchAttachmentRequest
   */
  body: PatchAttachmentRequest;
  /**
   * Resource to include in the response. Supported value: `last_modified_by_user`.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiUpdateIncidentConfigurationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Incident configuration patch payload.
   * @type IncidentConfigurationPatchRequest
   */
  body: IncidentConfigurationPatchRequest;
}

export interface IncidentsApiUpdateIncidentGoogleChatConfigurationRequest {
  /**
   * The UUID of the Google Chat configuration.
   * @type string
   */
  id: string;
  /**
   * Google Chat configuration patch payload.
   * @type IncidentGoogleChatConfigurationPatchRequest
   */
  body: IncidentGoogleChatConfigurationPatchRequest;
}

export interface IncidentsApiUpdateIncidentGoogleMeetConfigurationRequest {
  /**
   * The UUID of the Google Meet configuration.
   * @type string
   */
  id: string;
  /**
   * Google Meet configuration patch payload.
   * @type IncidentGoogleMeetConfigurationPatchRequest
   */
  body: IncidentGoogleMeetConfigurationPatchRequest;
}

export interface IncidentsApiUpdateIncidentImpactRequest {
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

export interface IncidentsApiUpdateIncidentImpactFieldRequest {
  /**
   * The UUID of the impact field.
   * @type string
   */
  fieldId: string;
  /**
   * Impact field update payload.
   * @type IncidentImpactFieldRequest
   */
  body: IncidentImpactFieldRequest;
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

export interface IncidentsApiUpdateIncidentPostmortemTemplateRequest {
  /**
   * The ID of the postmortem template
   * @type string
   */
  templateId: string;
  /**
   * @type PostmortemTemplateRequest
   */
  body: PostmortemTemplateRequest;
}

export interface IncidentsApiUpdateIncidentRuleRequest {
  /**
   * The UUID of the incident rule.
   * @type string
   */
  ruleId: string;
  /**
   * Incident rule patch payload.
   * @type IncidentRulePatchRequest
   */
  body: IncidentRulePatchRequest;
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

export interface IncidentsApiUpdateIncidentUserDefinedFieldRequest {
  /**
   * The ID of the incident user-defined field.
   * @type string
   */
  fieldId: string;
  /**
   * Incident user-defined field update payload.
   * @type IncidentUserDefinedFieldUpdateRequest
   */
  body: IncidentUserDefinedFieldUpdateRequest;
  /**
   * Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".
   * @type string
   */
  include?: string;
}

export interface IncidentsApiUpdateIncidentUserDefinedRoleRequest {
  /**
   * The UUID of the incident user-defined role.
   * @type string
   */
  roleId: string;
  /**
   * @type IncidentUserDefinedRolePatchRequest
   */
  body: IncidentUserDefinedRolePatchRequest;
  /**
   * Comma-separated list of related resources to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiUpdateTimestampOverrideRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The UUID of the timestamp override.
   * @type string
   */
  id: string;
  /**
   * Timestamp override patch payload.
   * @type IncidentTimestampOverridePatchRequest
   */
  body: IncidentTimestampOverridePatchRequest;
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
   * Create a new global incident handle.
   * @param param The request object
   */
  public createGlobalIncidentHandle(
    param: IncidentsApiCreateGlobalIncidentHandleRequest,
    options?: Configuration,
  ): Promise<IncidentHandleResponse> {
    const requestContextPromise =
      this.requestFactory.createGlobalIncidentHandle(
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGlobalIncidentHandle(
            responseContext,
          );
        });
    });
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
   * Create an incident attachment.
   * @param param The request object
   */
  public createIncidentAttachment(
    param: IncidentsApiCreateIncidentAttachmentRequest,
    options?: Configuration,
  ): Promise<Attachment> {
    const requestContextPromise = this.requestFactory.createIncidentAttachment(
      param.incidentId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentAttachment(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a configuration for an incident.
   * @param param The request object
   */
  public createIncidentConfiguration(
    param: IncidentsApiCreateIncidentConfigurationRequest,
    options?: Configuration,
  ): Promise<IncidentConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentConfiguration(
        param.incidentId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Google Chat configuration for incidents.
   * @param param The request object
   */
  public createIncidentGoogleChatConfiguration(
    param: IncidentsApiCreateIncidentGoogleChatConfigurationRequest,
    options?: Configuration,
  ): Promise<IncidentGoogleChatConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentGoogleChatConfiguration(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentGoogleChatConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Google Meet configuration for incidents.
   * @param param The request object
   */
  public createIncidentGoogleMeetConfiguration(
    param: IncidentsApiCreateIncidentGoogleMeetConfigurationRequest,
    options?: Configuration,
  ): Promise<IncidentGoogleMeetConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentGoogleMeetConfiguration(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentGoogleMeetConfiguration(
            responseContext,
          );
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
   * Create an impact field for incidents.
   * @param param The request object
   */
  public createIncidentImpactField(
    param: IncidentsApiCreateIncidentImpactFieldRequest,
    options?: Configuration,
  ): Promise<IncidentImpactFieldResponse> {
    const requestContextPromise = this.requestFactory.createIncidentImpactField(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentImpactField(
            responseContext,
          );
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
   * Create a postmortem attachment for an incident.
   *
   * The endpoint accepts markdown for notebooks created in Confluence or Google Docs.
   * Postmortems created from notebooks need to be formatted using frontend notebook cells,
   * in addition to markdown format.
   * @param param The request object
   */
  public createIncidentPostmortemAttachment(
    param: IncidentsApiCreateIncidentPostmortemAttachmentRequest,
    options?: Configuration,
  ): Promise<Attachment> {
    const requestContextPromise =
      this.requestFactory.createIncidentPostmortemAttachment(
        param.incidentId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentPostmortemAttachment(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new postmortem template for incidents.
   * @param param The request object
   */
  public createIncidentPostmortemTemplate(
    param: IncidentsApiCreateIncidentPostmortemTemplateRequest,
    options?: Configuration,
  ): Promise<PostmortemTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentPostmortemTemplate(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentPostmortemTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Add a responder to an incident.
   * @param param The request object
   */
  public createIncidentResponder(
    param: IncidentsApiCreateIncidentResponderRequest,
    options?: Configuration,
  ): Promise<IncidentResponderResponse> {
    const requestContextPromise = this.requestFactory.createIncidentResponder(
      param.incidentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentResponder(
            responseContext,
          );
        });
    });
  }

  /**
   * Create an incident rule.
   * @param param The request object
   */
  public createIncidentRule(
    param: IncidentsApiCreateIncidentRuleRequest,
    options?: Configuration,
  ): Promise<IncidentRuleResponse> {
    const requestContextPromise = this.requestFactory.createIncidentRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentRule(responseContext);
        });
    });
  }

  /**
   * Create a ServiceNow record for an incident.
   * @param param The request object
   */
  public createIncidentServiceNowRecord(
    param: IncidentsApiCreateIncidentServiceNowRecordRequest,
    options?: Configuration,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentServiceNowRecord(
        param.incidentId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentServiceNowRecord(
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
   * Create an incident user-defined field.
   * @param param The request object
   */
  public createIncidentUserDefinedField(
    param: IncidentsApiCreateIncidentUserDefinedFieldRequest,
    options?: Configuration,
  ): Promise<IncidentUserDefinedFieldResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentUserDefinedField(
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentUserDefinedField(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new user-defined role for incidents.
   * @param param The request object
   */
  public createIncidentUserDefinedRole(
    param: IncidentsApiCreateIncidentUserDefinedRoleRequest,
    options?: Configuration,
  ): Promise<IncidentUserDefinedRoleResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentUserDefinedRole(
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentUserDefinedRole(
            responseContext,
          );
        });
    });
  }

  /**
   * Create an on-call page directly from an incident.
   * @param param The request object
   */
  public createOnCallPageFromIncident(
    param: IncidentsApiCreateOnCallPageFromIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentPageUUIDResponse> {
    const requestContextPromise =
      this.requestFactory.createOnCallPageFromIncident(
        param.incidentId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallPageFromIncident(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a page from an incident using the Cases service.
   * @param param The request object
   */
  public createPageFromIncident(
    param: IncidentsApiCreatePageFromIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentPageUUIDResponse> {
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
   * Create a timestamp override for an incident.
   * @param param The request object
   */
  public createTimestampOverride(
    param: IncidentsApiCreateTimestampOverrideRequest,
    options?: Configuration,
  ): Promise<IncidentTimestampOverrideResponse> {
    const requestContextPromise = this.requestFactory.createTimestampOverride(
      param.incidentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTimestampOverride(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a global incident handle.
   * @param param The request object
   */
  public deleteGlobalIncidentHandle(options?: Configuration): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGlobalIncidentHandle(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGlobalIncidentHandle(
            responseContext,
          );
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
   * @param param The request object
   */
  public deleteIncidentAttachment(
    param: IncidentsApiDeleteIncidentAttachmentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentAttachment(
      param.incidentId,
      param.attachmentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentAttachment(
            responseContext,
          );
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
   * Delete an impact field for incidents.
   * @param param The request object
   */
  public deleteIncidentImpactField(
    param: IncidentsApiDeleteIncidentImpactFieldRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentImpactField(
      param.fieldId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentImpactField(
            responseContext,
          );
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
   * Delete a postmortem template.
   * @param param The request object
   */
  public deleteIncidentPostmortemTemplate(
    param: IncidentsApiDeleteIncidentPostmortemTemplateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentPostmortemTemplate(
        param.templateId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentPostmortemTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove a responder from an incident.
   * @param param The request object
   */
  public deleteIncidentResponder(
    param: IncidentsApiDeleteIncidentResponderRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentResponder(
      param.incidentId,
      param.responderId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentResponder(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an incident rule.
   * @param param The request object
   */
  public deleteIncidentRule(
    param: IncidentsApiDeleteIncidentRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentRule(responseContext);
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
   * Delete an incident user-defined field.
   * @param param The request object
   */
  public deleteIncidentUserDefinedField(
    param: IncidentsApiDeleteIncidentUserDefinedFieldRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentUserDefinedField(
        param.fieldId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentUserDefinedField(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an existing user-defined role for incidents.
   * @param param The request object
   */
  public deleteIncidentUserDefinedRole(
    param: IncidentsApiDeleteIncidentUserDefinedRoleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentUserDefinedRole(param.roleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentUserDefinedRole(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a timestamp override for an incident.
   * @param param The request object
   */
  public deleteTimestampOverride(
    param: IncidentsApiDeleteTimestampOverrideRequest,
    options?: Configuration,
  ): Promise<IncidentTimestampOverrideResponse> {
    const requestContextPromise = this.requestFactory.deleteTimestampOverride(
      param.incidentId,
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTimestampOverride(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve global incident settings for the organization.
   * @param param The request object
   */
  public getGlobalIncidentSettings(
    options?: Configuration,
  ): Promise<GlobalIncidentSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getGlobalIncidentSettings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGlobalIncidentSettings(
            responseContext,
          );
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
   * Generate an AI postmortem for an incident.
   * @param param The request object
   */
  public getIncidentAIPostmortem(
    param: IncidentsApiGetIncidentAIPostmortemRequest,
    options?: Configuration,
  ): Promise<IncidentAIPostmortemResponse> {
    const requestContextPromise = this.requestFactory.getIncidentAIPostmortem(
      param.incidentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentAIPostmortem(
            responseContext,
          );
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
   * Retrieve details of a specific postmortem template.
   * @param param The request object
   */
  public getIncidentPostmortemTemplate(
    param: IncidentsApiGetIncidentPostmortemTemplateRequest,
    options?: Configuration,
  ): Promise<PostmortemTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentPostmortemTemplate(
        param.templateId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentPostmortemTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single responder for an incident.
   * @param param The request object
   */
  public getIncidentResponder(
    param: IncidentsApiGetIncidentResponderRequest,
    options?: Configuration,
  ): Promise<IncidentResponderResponse> {
    const requestContextPromise = this.requestFactory.getIncidentResponder(
      param.incidentId,
      param.responderId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentResponder(responseContext);
        });
    });
  }

  /**
   * Get a single incident rule by ID.
   * @param param The request object
   */
  public getIncidentRule(
    param: IncidentsApiGetIncidentRuleRequest,
    options?: Configuration,
  ): Promise<IncidentRuleResponse> {
    const requestContextPromise = this.requestFactory.getIncidentRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentRule(responseContext);
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
   * Get details of an incident user-defined field.
   * @param param The request object
   */
  public getIncidentUserDefinedField(
    param: IncidentsApiGetIncidentUserDefinedFieldRequest,
    options?: Configuration,
  ): Promise<IncidentUserDefinedFieldResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentUserDefinedField(
        param.fieldId,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentUserDefinedField(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a single user-defined role for incidents.
   * @param param The request object
   */
  public getIncidentUserDefinedRole(
    param: IncidentsApiGetIncidentUserDefinedRoleRequest,
    options?: Configuration,
  ): Promise<IncidentUserDefinedRoleResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentUserDefinedRole(
        param.roleId,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentUserDefinedRole(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the org settings for a specific incident type.
   * @param param The request object
   */
  public getOrgSettingsByIncidentType(
    param: IncidentsApiGetOrgSettingsByIncidentTypeRequest,
    options?: Configuration,
  ): Promise<IncidentOrgSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getOrgSettingsByIncidentType(
        param.incidentTypeId,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrgSettingsByIncidentType(
            responseContext,
          );
        });
    });
  }

  /**
   * Import an incident from an external system. This endpoint allows you to create incidents with
   * historical data such as custom timestamps for detection, declaration, and resolution.
   * Imported incidents do not execute integrations or notification rules.
   * @param param The request object
   */
  public importIncident(
    param: IncidentsApiImportIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentImportResponse> {
    const requestContextPromise = this.requestFactory.importIncident(
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.importIncident(responseContext);
        });
    });
  }

  /**
   * Link an existing on-call page to an incident.
   * @param param The request object
   */
  public linkPageToIncident(
    param: IncidentsApiLinkPageToIncidentRequest,
    options?: Configuration,
  ): Promise<IncidentIntegrationMetadataResponse> {
    const requestContextPromise = this.requestFactory.linkPageToIncident(
      param.incidentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.linkPageToIncident(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of global incident handles.
   * @param param The request object
   */
  public listGlobalIncidentHandles(
    param: IncidentsApiListGlobalIncidentHandlesRequest = {},
    options?: Configuration,
  ): Promise<IncidentHandlesResponse> {
    const requestContextPromise = this.requestFactory.listGlobalIncidentHandles(
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGlobalIncidentHandles(
            responseContext,
          );
        });
    });
  }

  /**
   * List incident attachments.
   * @param param The request object
   */
  public listIncidentAttachments(
    param: IncidentsApiListIncidentAttachmentsRequest,
    options?: Configuration,
  ): Promise<AttachmentArray> {
    const requestContextPromise = this.requestFactory.listIncidentAttachments(
      param.incidentId,
      param.filterAttachmentType,
      param.include,
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
   * List all impact fields for incidents.
   * @param param The request object
   */
  public listIncidentImpactFields(
    options?: Configuration,
  ): Promise<IncidentImpactFieldsResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentImpactFields(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentImpactFields(
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
   * Retrieve a list of all postmortem templates for incidents.
   * @param param The request object
   */
  public listIncidentPostmortemTemplates(
    options?: Configuration,
  ): Promise<PostmortemTemplatesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentPostmortemTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentPostmortemTemplates(
            responseContext,
          );
        });
    });
  }

  /**
   * List all responders for an incident.
   * @param param The request object
   */
  public listIncidentResponders(
    param: IncidentsApiListIncidentRespondersRequest,
    options?: Configuration,
  ): Promise<IncidentRespondersResponse> {
    const requestContextPromise = this.requestFactory.listIncidentResponders(
      param.incidentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentResponders(responseContext);
        });
    });
  }

  /**
   * List all incident rules.
   * @param param The request object
   */
  public listIncidentRules(
    param: IncidentsApiListIncidentRulesRequest = {},
    options?: Configuration,
  ): Promise<IncidentRulesResponse> {
    const requestContextPromise = this.requestFactory.listIncidentRules(
      param.filterTaskId,
      param.filterTrigger,
      param.incidentTypeUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentRules(responseContext);
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
   * Get a list of all incident user-defined fields.
   * @param param The request object
   */
  public listIncidentUserDefinedFields(
    param: IncidentsApiListIncidentUserDefinedFieldsRequest = {},
    options?: Configuration,
  ): Promise<IncidentUserDefinedFieldListResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentUserDefinedFields(
        param.pageSize,
        param.pageNumber,
        param.includeDeleted,
        param.filterIncidentType,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentUserDefinedFields(
            responseContext,
          );
        });
    });
  }

  /**
   * List all user-defined roles for incidents.
   * @param param The request object
   */
  public listIncidentUserDefinedRoles(
    param: IncidentsApiListIncidentUserDefinedRolesRequest = {},
    options?: Configuration,
  ): Promise<IncidentUserDefinedRolesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentUserDefinedRoles(
        param.filterIncidentType,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentUserDefinedRoles(
            responseContext,
          );
        });
    });
  }

  /**
   * List org settings for all incident types.
   * @param param The request object
   */
  public listOrgSettings(
    param: IncidentsApiListOrgSettingsRequest = {},
    options?: Configuration,
  ): Promise<IncidentOrgSettingsListResponse> {
    const requestContextPromise = this.requestFactory.listOrgSettings(
      param.pageSize,
      param.pageOffset,
      param.includeDeleted,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgSettings(responseContext);
        });
    });
  }

  /**
   * List all timestamp overrides for an incident.
   * @param param The request object
   */
  public listTimestampOverrides(
    param: IncidentsApiListTimestampOverridesRequest,
    options?: Configuration,
  ): Promise<IncidentTimestampOverridesResponse> {
    const requestContextPromise = this.requestFactory.listTimestampOverrides(
      param.incidentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTimestampOverrides(responseContext);
        });
    });
  }

  /**
   * Partially update an incident impact.
   * @param param The request object
   */
  public patchIncidentImpact(
    param: IncidentsApiPatchIncidentImpactRequest,
    options?: Configuration,
  ): Promise<IncidentImpactResponse> {
    const requestContextPromise = this.requestFactory.patchIncidentImpact(
      param.incidentId,
      param.impactId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchIncidentImpact(responseContext);
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
   * Update an existing global incident handle.
   * @param param The request object
   */
  public updateGlobalIncidentHandle(
    param: IncidentsApiUpdateGlobalIncidentHandleRequest,
    options?: Configuration,
  ): Promise<IncidentHandleResponse> {
    const requestContextPromise =
      this.requestFactory.updateGlobalIncidentHandle(
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGlobalIncidentHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Update global incident settings for the organization.
   * @param param The request object
   */
  public updateGlobalIncidentSettings(
    param: IncidentsApiUpdateGlobalIncidentSettingsRequest,
    options?: Configuration,
  ): Promise<GlobalIncidentSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.updateGlobalIncidentSettings(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGlobalIncidentSettings(
            responseContext,
          );
        });
    });
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
   * @param param The request object
   */
  public updateIncidentAttachment(
    param: IncidentsApiUpdateIncidentAttachmentRequest,
    options?: Configuration,
  ): Promise<Attachment> {
    const requestContextPromise = this.requestFactory.updateIncidentAttachment(
      param.incidentId,
      param.attachmentId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentAttachment(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a configuration for an incident.
   * @param param The request object
   */
  public updateIncidentConfiguration(
    param: IncidentsApiUpdateIncidentConfigurationRequest,
    options?: Configuration,
  ): Promise<IncidentConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentConfiguration(
        param.incidentId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Google Chat configuration for incidents.
   * @param param The request object
   */
  public updateIncidentGoogleChatConfiguration(
    param: IncidentsApiUpdateIncidentGoogleChatConfigurationRequest,
    options?: Configuration,
  ): Promise<IncidentGoogleChatConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentGoogleChatConfiguration(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentGoogleChatConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Google Meet configuration for incidents.
   * @param param The request object
   */
  public updateIncidentGoogleMeetConfiguration(
    param: IncidentsApiUpdateIncidentGoogleMeetConfigurationRequest,
    options?: Configuration,
  ): Promise<IncidentGoogleMeetConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentGoogleMeetConfiguration(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentGoogleMeetConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an incident impact.
   * @param param The request object
   */
  public updateIncidentImpact(
    param: IncidentsApiUpdateIncidentImpactRequest,
    options?: Configuration,
  ): Promise<IncidentImpactResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentImpact(
      param.incidentId,
      param.impactId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentImpact(responseContext);
        });
    });
  }

  /**
   * Update an impact field for incidents.
   * @param param The request object
   */
  public updateIncidentImpactField(
    param: IncidentsApiUpdateIncidentImpactFieldRequest,
    options?: Configuration,
  ): Promise<IncidentImpactFieldResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentImpactField(
      param.fieldId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentImpactField(
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
   * Update an existing postmortem template.
   * @param param The request object
   */
  public updateIncidentPostmortemTemplate(
    param: IncidentsApiUpdateIncidentPostmortemTemplateRequest,
    options?: Configuration,
  ): Promise<PostmortemTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentPostmortemTemplate(
        param.templateId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentPostmortemTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an incident rule.
   * @param param The request object
   */
  public updateIncidentRule(
    param: IncidentsApiUpdateIncidentRuleRequest,
    options?: Configuration,
  ): Promise<IncidentRuleResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentRule(
      param.ruleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentRule(responseContext);
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

  /**
   * Update an incident user-defined field.
   * @param param The request object
   */
  public updateIncidentUserDefinedField(
    param: IncidentsApiUpdateIncidentUserDefinedFieldRequest,
    options?: Configuration,
  ): Promise<IncidentUserDefinedFieldResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentUserDefinedField(
        param.fieldId,
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentUserDefinedField(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an existing user-defined role for incidents.
   * @param param The request object
   */
  public updateIncidentUserDefinedRole(
    param: IncidentsApiUpdateIncidentUserDefinedRoleRequest,
    options?: Configuration,
  ): Promise<IncidentUserDefinedRoleResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentUserDefinedRole(
        param.roleId,
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentUserDefinedRole(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a timestamp override for an incident.
   * @param param The request object
   */
  public updateTimestampOverride(
    param: IncidentsApiUpdateTimestampOverrideRequest,
    options?: Configuration,
  ): Promise<IncidentTimestampOverrideResponse> {
    const requestContextPromise = this.requestFactory.updateTimestampOverride(
      param.incidentId,
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTimestampOverride(
            responseContext,
          );
        });
    });
  }
}
