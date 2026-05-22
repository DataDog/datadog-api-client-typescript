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
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { Attachment } from "../models/Attachment";
import { AttachmentArray } from "../models/AttachmentArray";
import { CreateAttachmentRequest } from "../models/CreateAttachmentRequest";
import { CreateIncidentNotificationRuleRequest } from "../models/CreateIncidentNotificationRuleRequest";
import { CreateIncidentNotificationTemplateRequest } from "../models/CreateIncidentNotificationTemplateRequest";
import { GlobalIncidentSettingsRequest } from "../models/GlobalIncidentSettingsRequest";
import { GlobalIncidentSettingsResponse } from "../models/GlobalIncidentSettingsResponse";
import { IncidentAutomationDataRequest } from "../models/IncidentAutomationDataRequest";
import { IncidentAutomationDataResponse } from "../models/IncidentAutomationDataResponse";
import { IncidentBatchCreateRuleExecutionStatesRequest } from "../models/IncidentBatchCreateRuleExecutionStatesRequest";
import { IncidentBatchUpdateRuleExecutionStatesRequest } from "../models/IncidentBatchUpdateRuleExecutionStatesRequest";
import { IncidentCaseLinkResponse } from "../models/IncidentCaseLinkResponse";
import { IncidentCommunicationRequest } from "../models/IncidentCommunicationRequest";
import { IncidentCommunicationResponse } from "../models/IncidentCommunicationResponse";
import { IncidentCommunicationsResponse } from "../models/IncidentCommunicationsResponse";
import { IncidentCreateRequest } from "../models/IncidentCreateRequest";
import { IncidentCreateZoomMeetingRequest } from "../models/IncidentCreateZoomMeetingRequest";
import { IncidentGoogleMeetIntegrationResponse } from "../models/IncidentGoogleMeetIntegrationResponse";
import { IncidentHandleRequest } from "../models/IncidentHandleRequest";
import { IncidentHandleResponse } from "../models/IncidentHandleResponse";
import { IncidentHandlesResponse } from "../models/IncidentHandlesResponse";
import { IncidentImpactCreateRequest } from "../models/IncidentImpactCreateRequest";
import { IncidentImpactRelatedObject } from "../models/IncidentImpactRelatedObject";
import { IncidentImpactResponse } from "../models/IncidentImpactResponse";
import { IncidentImpactsResponse } from "../models/IncidentImpactsResponse";
import { IncidentImportRelatedObject } from "../models/IncidentImportRelatedObject";
import { IncidentImportRequest } from "../models/IncidentImportRequest";
import { IncidentImportResponse } from "../models/IncidentImportResponse";
import { IncidentIntegrationMetadataCreateRequest } from "../models/IncidentIntegrationMetadataCreateRequest";
import { IncidentIntegrationMetadataListResponse } from "../models/IncidentIntegrationMetadataListResponse";
import { IncidentIntegrationMetadataPatchRequest } from "../models/IncidentIntegrationMetadataPatchRequest";
import { IncidentIntegrationMetadataResponse } from "../models/IncidentIntegrationMetadataResponse";
import { IncidentJiraIssueIntegrationResponse } from "../models/IncidentJiraIssueIntegrationResponse";
import { IncidentJiraIssueRequest } from "../models/IncidentJiraIssueRequest";
import { IncidentJiraTemplateRequest } from "../models/IncidentJiraTemplateRequest";
import { IncidentJiraTemplateResponse } from "../models/IncidentJiraTemplateResponse";
import { IncidentJiraTemplatesResponse } from "../models/IncidentJiraTemplatesResponse";
import { IncidentMicrosoftTeamsConfigurationRequest } from "../models/IncidentMicrosoftTeamsConfigurationRequest";
import { IncidentMicrosoftTeamsConfigurationResponse } from "../models/IncidentMicrosoftTeamsConfigurationResponse";
import { IncidentMSTeamsIntegrationResponse } from "../models/IncidentMSTeamsIntegrationResponse";
import { IncidentNotificationRule } from "../models/IncidentNotificationRule";
import { IncidentNotificationRuleArray } from "../models/IncidentNotificationRuleArray";
import { IncidentNotificationTemplate } from "../models/IncidentNotificationTemplate";
import { IncidentNotificationTemplateArray } from "../models/IncidentNotificationTemplateArray";
import { IncidentPagerdutyRelatedIncidentsResponse } from "../models/IncidentPagerdutyRelatedIncidentsResponse";
import { IncidentPagerdutyServicesResponse } from "../models/IncidentPagerdutyServicesResponse";
import { IncidentRelatedObject } from "../models/IncidentRelatedObject";
import { IncidentRenderedTemplateResponse } from "../models/IncidentRenderedTemplateResponse";
import { IncidentRenderTemplateRequest } from "../models/IncidentRenderTemplateRequest";
import { IncidentReservedRoleResponse } from "../models/IncidentReservedRoleResponse";
import { IncidentReservedRolesResponse } from "../models/IncidentReservedRolesResponse";
import { IncidentResponse } from "../models/IncidentResponse";
import { IncidentResponseData } from "../models/IncidentResponseData";
import { IncidentRoleAssignmentRequest } from "../models/IncidentRoleAssignmentRequest";
import { IncidentRoleAssignmentResponse } from "../models/IncidentRoleAssignmentResponse";
import { IncidentRuleExecutionStatesResponse } from "../models/IncidentRuleExecutionStatesResponse";
import { IncidentSearchIncidentsExportRequest } from "../models/IncidentSearchIncidentsExportRequest";
import { IncidentSearchIncidentsIncludeType } from "../models/IncidentSearchIncidentsIncludeType";
import { IncidentSearchIncidentsSortOrder } from "../models/IncidentSearchIncidentsSortOrder";
import { IncidentSearchResponse } from "../models/IncidentSearchResponse";
import { IncidentSearchResponseIncidentsData } from "../models/IncidentSearchResponseIncidentsData";
import { IncidentSearchSortOrder } from "../models/IncidentSearchSortOrder";
import { IncidentsResponse } from "../models/IncidentsResponse";
import { IncidentStatuspageIncidentRequest } from "../models/IncidentStatuspageIncidentRequest";
import { IncidentStatuspageIncidentResponse } from "../models/IncidentStatuspageIncidentResponse";
import { IncidentStatusPageNoticeCreateRequest } from "../models/IncidentStatusPageNoticeCreateRequest";
import { IncidentStatusPageNoticeIntegrationResponse } from "../models/IncidentStatusPageNoticeIntegrationResponse";
import { IncidentStatusPageNoticeUpdateRequest } from "../models/IncidentStatusPageNoticeUpdateRequest";
import { IncidentStatuspagePreferencesResponse } from "../models/IncidentStatuspagePreferencesResponse";
import { IncidentStatusPagesSuggestionResponse } from "../models/IncidentStatusPagesSuggestionResponse";
import { IncidentStatuspageSubscriptionRequest } from "../models/IncidentStatuspageSubscriptionRequest";
import { IncidentStatuspageSubscriptionResponse } from "../models/IncidentStatuspageSubscriptionResponse";
import { IncidentStatuspageSubscriptionsResponse } from "../models/IncidentStatuspageSubscriptionsResponse";
import { IncidentTemplateVariablesResponse } from "../models/IncidentTemplateVariablesResponse";
import { IncidentTimelineEntriesResponse } from "../models/IncidentTimelineEntriesResponse";
import { IncidentTimelineEntryRequest } from "../models/IncidentTimelineEntryRequest";
import { IncidentTimelineEntryResponse } from "../models/IncidentTimelineEntryResponse";
import { IncidentTimelineThreadResponse } from "../models/IncidentTimelineThreadResponse";
import { IncidentTodoCreateRequest } from "../models/IncidentTodoCreateRequest";
import { IncidentTodoListResponse } from "../models/IncidentTodoListResponse";
import { IncidentTodoPatchRequest } from "../models/IncidentTodoPatchRequest";
import { IncidentTodoResponse } from "../models/IncidentTodoResponse";
import { IncidentTypeCreateRequest } from "../models/IncidentTypeCreateRequest";
import { IncidentTypeListResponse } from "../models/IncidentTypeListResponse";
import { IncidentTypePatchRequest } from "../models/IncidentTypePatchRequest";
import { IncidentTypeResponse } from "../models/IncidentTypeResponse";
import { IncidentUpdateRequest } from "../models/IncidentUpdateRequest";
import { IncidentUserDefinedFieldCreateRequest } from "../models/IncidentUserDefinedFieldCreateRequest";
import { IncidentUserDefinedFieldListResponse } from "../models/IncidentUserDefinedFieldListResponse";
import { IncidentUserDefinedFieldResponse } from "../models/IncidentUserDefinedFieldResponse";
import { IncidentUserDefinedFieldUpdateRequest } from "../models/IncidentUserDefinedFieldUpdateRequest";
import { IncidentZoomConfigurationRequest } from "../models/IncidentZoomConfigurationRequest";
import { IncidentZoomConfigurationResponse } from "../models/IncidentZoomConfigurationResponse";
import { IncidentZoomIntegrationResponse } from "../models/IncidentZoomIntegrationResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { PatchAttachmentRequest } from "../models/PatchAttachmentRequest";
import { PatchIncidentNotificationTemplateRequest } from "../models/PatchIncidentNotificationTemplateRequest";
import { PostmortemAttachmentRequest } from "../models/PostmortemAttachmentRequest";
import { PostmortemTemplateRequest } from "../models/PostmortemTemplateRequest";
import { PostmortemTemplateResponse } from "../models/PostmortemTemplateResponse";
import { PostmortemTemplatesResponse } from "../models/PostmortemTemplatesResponse";
import { PutIncidentNotificationRuleRequest } from "../models/PutIncidentNotificationRuleRequest";

export class IncidentsApiRequestFactory extends BaseAPIRequestFactory {
  public async batchCreateIncidentRuleExecutionStates(
    incidentId: string,
    body: IncidentBatchCreateRuleExecutionStatesRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'batchCreateIncidentRuleExecutionStates'"
    );
    if (
      !_config.unstableOperations["v2.batchCreateIncidentRuleExecutionStates"]
    ) {
      throw new Error(
        "Unstable operation 'batchCreateIncidentRuleExecutionStates' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError(
        "incidentId",
        "batchCreateIncidentRuleExecutionStates"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "batchCreateIncidentRuleExecutionStates");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/rule-execution-states/batch".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.batchCreateIncidentRuleExecutionStates")
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
        "IncidentBatchCreateRuleExecutionStatesRequest",
        ""
      ),
      contentType
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

  public async batchUpdateIncidentRuleExecutionStates(
    incidentId: string,
    body: IncidentBatchUpdateRuleExecutionStatesRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'batchUpdateIncidentRuleExecutionStates'"
    );
    if (
      !_config.unstableOperations["v2.batchUpdateIncidentRuleExecutionStates"]
    ) {
      throw new Error(
        "Unstable operation 'batchUpdateIncidentRuleExecutionStates' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError(
        "incidentId",
        "batchUpdateIncidentRuleExecutionStates"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "batchUpdateIncidentRuleExecutionStates");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/rule-execution-states/batch".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.batchUpdateIncidentRuleExecutionStates")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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
        "IncidentBatchUpdateRuleExecutionStatesRequest",
        ""
      ),
      contentType
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

  public async createGlobalIncidentHandle(
    body: IncidentHandleRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createGlobalIncidentHandle'");
    if (!_config.unstableOperations["v2.createGlobalIncidentHandle"]) {
      throw new Error(
        "Unstable operation 'createGlobalIncidentHandle' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGlobalIncidentHandle");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createGlobalIncidentHandle")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentHandleRequest", ""),
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentAttachment'");
    if (!_config.unstableOperations["v2.createIncidentAttachment"]) {
      throw new Error(
        "Unstable operation 'createIncidentAttachment' is disabled"
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
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentAttachment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateAttachmentRequest", ""),
      contentType
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

  public async createIncidentCommunication(
    incidentId: string,
    body: IncidentCommunicationRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentCommunication'");
    if (!_config.unstableOperations["v2.createIncidentCommunication"]) {
      throw new Error(
        "Unstable operation 'createIncidentCommunication' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentCommunication");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentCommunication");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/communications".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentCommunication")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentCommunicationRequest", ""),
      contentType
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

  public async createIncidentGoogleMeetSpace(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentGoogleMeetSpace'");
    if (!_config.unstableOperations["v2.createIncidentGoogleMeetSpace"]) {
      throw new Error(
        "Unstable operation 'createIncidentGoogleMeetSpace' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentGoogleMeetSpace");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/google-meet/space".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentGoogleMeetSpace")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentImpact")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(
          include,
          "Array<IncidentImpactRelatedObject>",
          ""
        ),
        "csv"
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentImpactCreateRequest", ""),
      contentType
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentJiraIssue(
    incidentId: string,
    body: IncidentJiraIssueRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentJiraIssue'");
    if (!_config.unstableOperations["v2.createIncidentJiraIssue"]) {
      throw new Error(
        "Unstable operation 'createIncidentJiraIssue' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentJiraIssue");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentJiraIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/jira-issues".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentJiraIssue")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentJiraIssueRequest", ""),
      contentType
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

  public async createIncidentJiraTemplate(
    body: IncidentJiraTemplateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentJiraTemplate'");
    if (!_config.unstableOperations["v2.createIncidentJiraTemplate"]) {
      throw new Error(
        "Unstable operation 'createIncidentJiraTemplate' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentJiraTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/jira-templates";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentJiraTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentJiraTemplateRequest", ""),
      contentType
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

  public async createIncidentMicrosoftTeamsConfiguration(
    body: IncidentMicrosoftTeamsConfigurationRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createIncidentMicrosoftTeamsConfiguration'"
    );
    if (
      !_config.unstableOperations[
        "v2.createIncidentMicrosoftTeamsConfiguration"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentMicrosoftTeamsConfiguration' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createIncidentMicrosoftTeamsConfiguration"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/microsoft-teams-configurations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentMicrosoftTeamsConfiguration")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentMicrosoftTeamsConfigurationRequest",
        ""
      ),
      contentType
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

  public async createIncidentMSTeamsOnlineMeeting(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createIncidentMSTeamsOnlineMeeting'"
    );
    if (!_config.unstableOperations["v2.createIncidentMSTeamsOnlineMeeting"]) {
      throw new Error(
        "Unstable operation 'createIncidentMSTeamsOnlineMeeting' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError(
        "incidentId",
        "createIncidentMSTeamsOnlineMeeting"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/microsoft-teams-integration/online-meeting".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentMSTeamsOnlineMeeting")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentNotificationRule'");
    if (!_config.unstableOperations["v2.createIncidentNotificationRule"]) {
      throw new Error(
        "Unstable operation 'createIncidentNotificationRule' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentNotificationRule")
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
        "CreateIncidentNotificationRuleRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createIncidentNotificationTemplate'"
    );
    if (!_config.unstableOperations["v2.createIncidentNotificationTemplate"]) {
      throw new Error(
        "Unstable operation 'createIncidentNotificationTemplate' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentNotificationTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-templates";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentNotificationTemplate")
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
        "CreateIncidentNotificationTemplateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createIncidentPostmortemAttachment'"
    );
    if (!_config.unstableOperations["v2.createIncidentPostmortemAttachment"]) {
      throw new Error(
        "Unstable operation 'createIncidentPostmortemAttachment' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError(
        "incidentId",
        "createIncidentPostmortemAttachment"
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
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentPostmortemAttachment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PostmortemAttachmentRequest", ""),
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

  public async createIncidentPostmortemTemplate(
    body: PostmortemTemplateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentPostmortemTemplate'");
    if (!_config.unstableOperations["v2.createIncidentPostmortemTemplate"]) {
      throw new Error(
        "Unstable operation 'createIncidentPostmortemTemplate' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentPostmortemTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/postmortem-templates";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentPostmortemTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PostmortemTemplateRequest", ""),
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

  public async createIncidentRoleAssignment(
    body: IncidentRoleAssignmentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentRoleAssignment'");
    if (!_config.unstableOperations["v2.createIncidentRoleAssignment"]) {
      throw new Error(
        "Unstable operation 'createIncidentRoleAssignment' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentRoleAssignment");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/role_assignments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentRoleAssignment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentRoleAssignmentRequest", ""),
      contentType
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

  public async createIncidentStatuspageIncident(
    incidentId: string,
    body: IncidentStatuspageIncidentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentStatuspageIncident'");
    if (!_config.unstableOperations["v2.createIncidentStatuspageIncident"]) {
      throw new Error(
        "Unstable operation 'createIncidentStatuspageIncident' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentStatuspageIncident");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentStatuspageIncident");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/statuspage/{incident_id}/statuspage-incidents".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentStatuspageIncident")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentStatuspageIncidentRequest", ""),
      contentType
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

  public async createIncidentStatusPageNotice(
    incidentId: string,
    statuspageId: string,
    body: IncidentStatusPageNoticeCreateRequest,
    notifySubscribers?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentStatusPageNotice'");
    if (!_config.unstableOperations["v2.createIncidentStatusPageNotice"]) {
      throw new Error(
        "Unstable operation 'createIncidentStatusPageNotice' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentStatusPageNotice");
    }

    // verify required parameter 'statuspageId' is not null or undefined
    if (statuspageId === null || statuspageId === undefined) {
      throw new RequiredError("statuspageId", "createIncidentStatusPageNotice");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentStatusPageNotice");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/statuspages/{statuspage_id}/notices"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{statuspage_id}", encodeURIComponent(String(statuspageId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentStatusPageNotice")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentStatusPageNoticeCreateRequest",
        ""
      ),
      contentType
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

  public async createIncidentTimelineEntry(
    incidentId: string,
    body: IncidentTimelineEntryRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentTimelineEntry'");
    if (!_config.unstableOperations["v2.createIncidentTimelineEntry"]) {
      throw new Error(
        "Unstable operation 'createIncidentTimelineEntry' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentTimelineEntry");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentTimelineEntry");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/timeline".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentTimelineEntry")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentTimelineEntryRequest", ""),
      contentType
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createIncidentType(
    body: IncidentTypeCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentType'");
    if (!_config.unstableOperations["v2.createIncidentType"]) {
      throw new Error("Unstable operation 'createIncidentType' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentType");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/types";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentType")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentTypeCreateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentUserDefinedField'");
    if (!_config.unstableOperations["v2.createIncidentUserDefinedField"]) {
      throw new Error(
        "Unstable operation 'createIncidentUserDefinedField' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentUserDefinedField");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/user-defined-fields";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentUserDefinedField")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentUserDefinedFieldCreateRequest",
        ""
      ),
      contentType
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

  public async createIncidentZoomConfiguration(
    body: IncidentZoomConfigurationRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentZoomConfiguration'");
    if (!_config.unstableOperations["v2.createIncidentZoomConfiguration"]) {
      throw new Error(
        "Unstable operation 'createIncidentZoomConfiguration' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentZoomConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/zoom-configurations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentZoomConfiguration")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentZoomConfigurationRequest", ""),
      contentType
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

  public async createIncidentZoomMeeting(
    incidentId: string,
    body: IncidentCreateZoomMeetingRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIncidentZoomMeeting'");
    if (!_config.unstableOperations["v2.createIncidentZoomMeeting"]) {
      throw new Error(
        "Unstable operation 'createIncidentZoomMeeting' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "createIncidentZoomMeeting");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentZoomMeeting");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/zoom/meeting".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createIncidentZoomMeeting")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentCreateZoomMeetingRequest", ""),
      contentType
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

  public async createStatuspageEmailSubscription(
    pageId: string,
    body: IncidentStatuspageSubscriptionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createStatuspageEmailSubscription'");
    if (!_config.unstableOperations["v2.createStatuspageEmailSubscription"]) {
      throw new Error(
        "Unstable operation 'createStatuspageEmailSubscription' is disabled"
      );
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createStatuspageEmailSubscription");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStatuspageEmailSubscription");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/subscriptions/email".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.createStatuspageEmailSubscription")
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
        "IncidentStatuspageSubscriptionRequest",
        ""
      ),
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

  public async deleteGlobalIncidentHandle(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteGlobalIncidentHandle'");
    if (!_config.unstableOperations["v2.deleteGlobalIncidentHandle"]) {
      throw new Error(
        "Unstable operation 'deleteGlobalIncidentHandle' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteGlobalIncidentHandle")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentAttachment(
    incidentId: string,
    attachmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentAttachment'");
    if (!_config.unstableOperations["v2.deleteIncidentAttachment"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentAttachment' is disabled"
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
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentAttachment")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentCommunication(
    incidentId: string,
    communicationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentCommunication'");
    if (!_config.unstableOperations["v2.deleteIncidentCommunication"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentCommunication' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentCommunication");
    }

    // verify required parameter 'communicationId' is not null or undefined
    if (communicationId === null || communicationId === undefined) {
      throw new RequiredError("communicationId", "deleteIncidentCommunication");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/communications/{communication_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{communication_id}",
          encodeURIComponent(String(communicationId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentCommunication")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentImpact")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentJiraTemplate(
    templateId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentJiraTemplate'");
    if (!_config.unstableOperations["v2.deleteIncidentJiraTemplate"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentJiraTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "deleteIncidentJiraTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/jira-templates/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentJiraTemplate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentNotificationRule'");
    if (!_config.unstableOperations["v2.deleteIncidentNotificationRule"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentNotificationRule' is disabled"
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteIncidentNotificationTemplate'"
    );
    if (!_config.unstableOperations["v2.deleteIncidentNotificationTemplate"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentNotificationTemplate' is disabled"
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentNotificationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentPostmortemTemplate'");
    if (!_config.unstableOperations["v2.deleteIncidentPostmortemTemplate"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentPostmortemTemplate' is disabled"
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
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentPostmortemTemplate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteIncidentRoleAssignment(
    roleAssignmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentRoleAssignment'");
    if (!_config.unstableOperations["v2.deleteIncidentRoleAssignment"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentRoleAssignment' is disabled"
      );
    }

    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new RequiredError(
        "roleAssignmentId",
        "deleteIncidentRoleAssignment"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/role_assignments/{role_assignment_id}".replace(
        "{role_assignment_id}",
        encodeURIComponent(String(roleAssignmentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentRoleAssignment")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentTimelineEntry(
    incidentId: string,
    timelineEntryId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentTimelineEntry'");
    if (!_config.unstableOperations["v2.deleteIncidentTimelineEntry"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentTimelineEntry' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "deleteIncidentTimelineEntry");
    }

    // verify required parameter 'timelineEntryId' is not null or undefined
    if (timelineEntryId === null || timelineEntryId === undefined) {
      throw new RequiredError("timelineEntryId", "deleteIncidentTimelineEntry");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timeline/{timeline_entry_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{timeline_entry_id}",
          encodeURIComponent(String(timelineEntryId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentTimelineEntry")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteIncidentType(
    incidentTypeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentType'");
    if (!_config.unstableOperations["v2.deleteIncidentType"]) {
      throw new Error("Unstable operation 'deleteIncidentType' is disabled");
    }

    // verify required parameter 'incidentTypeId' is not null or undefined
    if (incidentTypeId === null || incidentTypeId === undefined) {
      throw new RequiredError("incidentTypeId", "deleteIncidentType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/types/{incident_type_id}".replace(
        "{incident_type_id}",
        encodeURIComponent(String(incidentTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentType")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteIncidentUserDefinedField'");
    if (!_config.unstableOperations["v2.deleteIncidentUserDefinedField"]) {
      throw new Error(
        "Unstable operation 'deleteIncidentUserDefinedField' is disabled"
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
        encodeURIComponent(String(fieldId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.deleteIncidentUserDefinedField")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async exportIncidents(
    body: IncidentSearchIncidentsExportRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'exportIncidents'");
    if (!_config.unstableOperations["v2.exportIncidents"]) {
      throw new Error("Unstable operation 'exportIncidents' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "exportIncidents");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/search-incidents/export";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.exportIncidents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "text/csv, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentSearchIncidentsExportRequest",
        ""
      ),
      contentType
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

  public async getGlobalIncidentSettings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGlobalIncidentSettings'");
    if (!_config.unstableOperations["v2.getGlobalIncidentSettings"]) {
      throw new Error(
        "Unstable operation 'getGlobalIncidentSettings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/settings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getGlobalIncidentSettings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
        ObjectSerializer.serialize(include, "Array<IncidentRelatedObject>", ""),
        "csv"
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

  public async getIncidentAutomationData(
    incidentId: string,
    key: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentAutomationData'");
    if (!_config.unstableOperations["v2.getIncidentAutomationData"]) {
      throw new Error(
        "Unstable operation 'getIncidentAutomationData' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentAutomationData");
    }

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "getIncidentAutomationData");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/automation-data/{key}"
      .replace("{incident_id}", encodeURIComponent(String(incidentId)))
      .replace("{key}", encodeURIComponent(String(key)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentAutomationData")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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

  public async getIncidentCaseSourceLink(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentCaseSourceLink'");
    if (!_config.unstableOperations["v2.getIncidentCaseSourceLink"]) {
      throw new Error(
        "Unstable operation 'getIncidentCaseSourceLink' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentCaseSourceLink");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/cases/source-link".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentCaseSourceLink")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentCommunication(
    incidentId: string,
    communicationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentCommunication'");
    if (!_config.unstableOperations["v2.getIncidentCommunication"]) {
      throw new Error(
        "Unstable operation 'getIncidentCommunication' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentCommunication");
    }

    // verify required parameter 'communicationId' is not null or undefined
    if (communicationId === null || communicationId === undefined) {
      throw new RequiredError("communicationId", "getIncidentCommunication");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/communications/{communication_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{communication_id}",
          encodeURIComponent(String(communicationId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentCommunication")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentJiraTemplate(
    templateId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentJiraTemplate'");
    if (!_config.unstableOperations["v2.getIncidentJiraTemplate"]) {
      throw new Error(
        "Unstable operation 'getIncidentJiraTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "getIncidentJiraTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/jira-templates/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentJiraTemplate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentNotificationRule'");
    if (!_config.unstableOperations["v2.getIncidentNotificationRule"]) {
      throw new Error(
        "Unstable operation 'getIncidentNotificationRule' is disabled"
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentNotificationTemplate'");
    if (!_config.unstableOperations["v2.getIncidentNotificationTemplate"]) {
      throw new Error(
        "Unstable operation 'getIncidentNotificationTemplate' is disabled"
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentNotificationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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

  public async getIncidentPagerdutyRelatedIncidents(
    pagerdutyIncidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getIncidentPagerdutyRelatedIncidents'"
    );
    if (
      !_config.unstableOperations["v2.getIncidentPagerdutyRelatedIncidents"]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentPagerdutyRelatedIncidents' is disabled"
      );
    }

    // verify required parameter 'pagerdutyIncidentId' is not null or undefined
    if (pagerdutyIncidentId === null || pagerdutyIncidentId === undefined) {
      throw new RequiredError(
        "pagerdutyIncidentId",
        "getIncidentPagerdutyRelatedIncidents"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/pagerduty/{pagerduty_incident_id}/relationships/incidents".replace(
        "{pagerduty_incident_id}",
        encodeURIComponent(String(pagerdutyIncidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentPagerdutyRelatedIncidents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentPageSourceLink(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentPageSourceLink'");
    if (!_config.unstableOperations["v2.getIncidentPageSourceLink"]) {
      throw new Error(
        "Unstable operation 'getIncidentPageSourceLink' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentPageSourceLink");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/pages/source-link".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentPageSourceLink")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentPostmortemTemplate'");
    if (!_config.unstableOperations["v2.getIncidentPostmortemTemplate"]) {
      throw new Error(
        "Unstable operation 'getIncidentPostmortemTemplate' is disabled"
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
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentPostmortemTemplate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getIncidentReservedRole(
    roleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentReservedRole'");
    if (!_config.unstableOperations["v2.getIncidentReservedRole"]) {
      throw new Error(
        "Unstable operation 'getIncidentReservedRole' is disabled"
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new RequiredError("roleId", "getIncidentReservedRole");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/reserved-roles/{role_id}".replace(
        "{role_id}",
        encodeURIComponent(String(roleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentReservedRole")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentRoleAssignment(
    roleAssignmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentRoleAssignment'");
    if (!_config.unstableOperations["v2.getIncidentRoleAssignment"]) {
      throw new Error(
        "Unstable operation 'getIncidentRoleAssignment' is disabled"
      );
    }

    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new RequiredError("roleAssignmentId", "getIncidentRoleAssignment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/role_assignments/{role_assignment_id}".replace(
        "{role_assignment_id}",
        encodeURIComponent(String(roleAssignmentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentRoleAssignment")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentStatusPagesSuggestion(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentStatusPagesSuggestion'");
    if (!_config.unstableOperations["v2.getIncidentStatusPagesSuggestion"]) {
      throw new Error(
        "Unstable operation 'getIncidentStatusPagesSuggestion' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentStatusPagesSuggestion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/statuspages-suggestion".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentStatusPagesSuggestion")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentTimelineEntryThread(
    incidentId: string,
    timelineEntryId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentTimelineEntryThread'");
    if (!_config.unstableOperations["v2.getIncidentTimelineEntryThread"]) {
      throw new Error(
        "Unstable operation 'getIncidentTimelineEntryThread' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "getIncidentTimelineEntryThread");
    }

    // verify required parameter 'timelineEntryId' is not null or undefined
    if (timelineEntryId === null || timelineEntryId === undefined) {
      throw new RequiredError(
        "timelineEntryId",
        "getIncidentTimelineEntryThread"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timeline/{timeline_entry_id}/thread"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{timeline_entry_id}",
          encodeURIComponent(String(timelineEntryId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentTimelineEntryThread")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIncidentType(
    incidentTypeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentType'");
    if (!_config.unstableOperations["v2.getIncidentType"]) {
      throw new Error("Unstable operation 'getIncidentType' is disabled");
    }

    // verify required parameter 'incidentTypeId' is not null or undefined
    if (incidentTypeId === null || incidentTypeId === undefined) {
      throw new RequiredError("incidentTypeId", "getIncidentType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/types/{incident_type_id}".replace(
        "{incident_type_id}",
        encodeURIComponent(String(incidentTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentType")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIncidentUserDefinedField'");
    if (!_config.unstableOperations["v2.getIncidentUserDefinedField"]) {
      throw new Error(
        "Unstable operation 'getIncidentUserDefinedField' is disabled"
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
        encodeURIComponent(String(fieldId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getIncidentUserDefinedField")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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

  public async getStatuspageSubscriptionPreferences(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getStatuspageSubscriptionPreferences'"
    );
    if (
      !_config.unstableOperations["v2.getStatuspageSubscriptionPreferences"]
    ) {
      throw new Error(
        "Unstable operation 'getStatuspageSubscriptionPreferences' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/subscription/preferences";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.getStatuspageSubscriptionPreferences")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async importIncident(
    body: IncidentImportRequest,
    include?: Array<IncidentImportRelatedObject>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'importIncident'");
    if (!_config.unstableOperations["v2.importIncident"]) {
      throw new Error("Unstable operation 'importIncident' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "importIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/import";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.importIncident")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(
          include,
          "Array<IncidentImportRelatedObject>",
          ""
        ),
        "csv"
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentImportRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGlobalIncidentHandles'");
    if (!_config.unstableOperations["v2.listGlobalIncidentHandles"]) {
      throw new Error(
        "Unstable operation 'listGlobalIncidentHandles' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listGlobalIncidentHandles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async listIncidentAttachments(
    incidentId: string,
    filterAttachmentType?: string,
    include?: string,
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
    if (filterAttachmentType !== undefined) {
      requestContext.setQueryParam(
        "filter[attachment_type]",
        ObjectSerializer.serialize(filterAttachmentType, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async listIncidentCommunications(
    incidentId: string,
    filterCommunicationType?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentCommunications'");
    if (!_config.unstableOperations["v2.listIncidentCommunications"]) {
      throw new Error(
        "Unstable operation 'listIncidentCommunications' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentCommunications");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/communications".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentCommunications")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterCommunicationType !== undefined) {
      requestContext.setQueryParam(
        "filter[communication_type]",
        ObjectSerializer.serialize(filterCommunicationType, "string", ""),
        ""
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

  public async listIncidentImpacts(
    incidentId: string,
    include?: Array<IncidentImpactRelatedObject>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentImpacts");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/impacts".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentImpacts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(
          include,
          "Array<IncidentImpactRelatedObject>",
          ""
        ),
        "csv"
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentJiraTemplates(
    isDefault?: boolean,
    incidentTypeId?: string,
    templateType?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentJiraTemplates'");
    if (!_config.unstableOperations["v2.listIncidentJiraTemplates"]) {
      throw new Error(
        "Unstable operation 'listIncidentJiraTemplates' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/jira-templates";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentJiraTemplates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (isDefault !== undefined) {
      requestContext.setQueryParam(
        "isDefault",
        ObjectSerializer.serialize(isDefault, "boolean", ""),
        ""
      );
    }
    if (incidentTypeId !== undefined) {
      requestContext.setQueryParam(
        "incidentTypeId",
        ObjectSerializer.serialize(incidentTypeId, "string", "uuid"),
        ""
      );
    }
    if (templateType !== undefined) {
      requestContext.setQueryParam(
        "templateType",
        ObjectSerializer.serialize(templateType, "string", ""),
        ""
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

  public async listIncidentNotificationRules(
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentNotificationRules'");
    if (!_config.unstableOperations["v2.listIncidentNotificationRules"]) {
      throw new Error(
        "Unstable operation 'listIncidentNotificationRules' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentNotificationRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentNotificationTemplates'");
    if (!_config.unstableOperations["v2.listIncidentNotificationTemplates"]) {
      throw new Error(
        "Unstable operation 'listIncidentNotificationTemplates' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/notification-templates";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentNotificationTemplates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterIncidentType !== undefined) {
      requestContext.setQueryParam(
        "filter[incident-type]",
        ObjectSerializer.serialize(filterIncidentType, "string", "uuid"),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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

  public async listIncidentPagerdutyServices(
    includeUnresolved?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentPagerdutyServices'");
    if (!_config.unstableOperations["v2.listIncidentPagerdutyServices"]) {
      throw new Error(
        "Unstable operation 'listIncidentPagerdutyServices' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/pagerduty/services";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentPagerdutyServices")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (includeUnresolved !== undefined) {
      requestContext.setQueryParam(
        "include_unresolved",
        ObjectSerializer.serialize(includeUnresolved, "boolean", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentPostmortemTemplates'");
    if (!_config.unstableOperations["v2.listIncidentPostmortemTemplates"]) {
      throw new Error(
        "Unstable operation 'listIncidentPostmortemTemplates' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/postmortem-templates";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentPostmortemTemplates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listIncidentReservedRoles(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentReservedRoles'");
    if (!_config.unstableOperations["v2.listIncidentReservedRoles"]) {
      throw new Error(
        "Unstable operation 'listIncidentReservedRoles' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/reserved-roles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentReservedRoles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentRuleExecutionStates(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentRuleExecutionStates'");
    if (!_config.unstableOperations["v2.listIncidentRuleExecutionStates"]) {
      throw new Error(
        "Unstable operation 'listIncidentRuleExecutionStates' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentRuleExecutionStates");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/rule-execution-states".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentRuleExecutionStates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
        ObjectSerializer.serialize(include, "Array<IncidentRelatedObject>", ""),
        "csv"
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
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

  public async listIncidentTemplateVariables(
    filterIncidentType?: string,
    includeFollowUps?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentTemplateVariables'");
    if (!_config.unstableOperations["v2.listIncidentTemplateVariables"]) {
      throw new Error(
        "Unstable operation 'listIncidentTemplateVariables' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/template-variables";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentTemplateVariables")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterIncidentType !== undefined) {
      requestContext.setQueryParam(
        "filter[incident-type]",
        ObjectSerializer.serialize(filterIncidentType, "string", "uuid"),
        ""
      );
    }
    if (includeFollowUps !== undefined) {
      requestContext.setQueryParam(
        "includeFollowUps",
        ObjectSerializer.serialize(includeFollowUps, "boolean", ""),
        ""
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

  public async listIncidentTimelineEntries(
    incidentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentTimelineEntries'");
    if (!_config.unstableOperations["v2.listIncidentTimelineEntries"]) {
      throw new Error(
        "Unstable operation 'listIncidentTimelineEntries' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "listIncidentTimelineEntries");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/timeline".replace(
      "{incident_id}",
      encodeURIComponent(String(incidentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentTimelineEntries")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listIncidentTypes(
    includeDeleted?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentTypes'");
    if (!_config.unstableOperations["v2.listIncidentTypes"]) {
      throw new Error("Unstable operation 'listIncidentTypes' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/types";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentTypes")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (includeDeleted !== undefined) {
      requestContext.setQueryParam(
        "include_deleted",
        ObjectSerializer.serialize(includeDeleted, "boolean", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIncidentUserDefinedFields'");
    if (!_config.unstableOperations["v2.listIncidentUserDefinedFields"]) {
      throw new Error(
        "Unstable operation 'listIncidentUserDefinedFields' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/user-defined-fields";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listIncidentUserDefinedFields")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (includeDeleted !== undefined) {
      requestContext.setQueryParam(
        "include-deleted",
        ObjectSerializer.serialize(includeDeleted, "boolean", ""),
        ""
      );
    }
    if (filterIncidentType !== undefined) {
      requestContext.setQueryParam(
        "filter[incident-type]",
        ObjectSerializer.serialize(filterIncidentType, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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

  public async listStatuspageEmailSubscriptions(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listStatuspageEmailSubscriptions'");
    if (!_config.unstableOperations["v2.listStatuspageEmailSubscriptions"]) {
      throw new Error(
        "Unstable operation 'listStatuspageEmailSubscriptions' is disabled"
      );
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "listStatuspageEmailSubscriptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/subscriptions/email".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.listStatuspageEmailSubscriptions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async patchIncidentNotificationRule(
    id: string,
    body: PutIncidentNotificationRuleRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'patchIncidentNotificationRule'");
    if (!_config.unstableOperations["v2.patchIncidentNotificationRule"]) {
      throw new Error(
        "Unstable operation 'patchIncidentNotificationRule' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "patchIncidentNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchIncidentNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/notification-rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.patchIncidentNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "PutIncidentNotificationRuleRequest",
        ""
      ),
      contentType
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

  public async renderIncidentTemplate(
    incidentId: string,
    body: IncidentRenderTemplateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'renderIncidentTemplate'");
    if (!_config.unstableOperations["v2.renderIncidentTemplate"]) {
      throw new Error(
        "Unstable operation 'renderIncidentTemplate' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "renderIncidentTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "renderIncidentTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/render-template".replace(
        "{incident_id}",
        encodeURIComponent(String(incidentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.renderIncidentTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentRenderTemplateRequest", ""),
      contentType
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
        ObjectSerializer.serialize(include, "IncidentRelatedObject", ""),
        ""
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "IncidentSearchSortOrder", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
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

  public async searchIncidentsV2(
    query?: string,
    sort?: IncidentSearchIncidentsSortOrder,
    withFacets?: boolean,
    filterWithDeleted?: boolean,
    semanticQuery?: string,
    timeZone?: string,
    include?: Array<IncidentSearchIncidentsIncludeType>,
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchIncidentsV2'");
    if (!_config.unstableOperations["v2.searchIncidentsV2"]) {
      throw new Error("Unstable operation 'searchIncidentsV2' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/search-incidents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.searchIncidentsV2")
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(
          sort,
          "IncidentSearchIncidentsSortOrder",
          ""
        ),
        ""
      );
    }
    if (withFacets !== undefined) {
      requestContext.setQueryParam(
        "with_facets",
        ObjectSerializer.serialize(withFacets, "boolean", ""),
        ""
      );
    }
    if (filterWithDeleted !== undefined) {
      requestContext.setQueryParam(
        "filter[with_deleted]",
        ObjectSerializer.serialize(filterWithDeleted, "boolean", ""),
        ""
      );
    }
    if (semanticQuery !== undefined) {
      requestContext.setQueryParam(
        "semantic_query",
        ObjectSerializer.serialize(semanticQuery, "string", ""),
        ""
      );
    }
    if (timeZone !== undefined) {
      requestContext.setQueryParam(
        "timeZone",
        ObjectSerializer.serialize(timeZone, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(
          include,
          "Array<IncidentSearchIncidentsIncludeType>",
          ""
        ),
        "multi"
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateGlobalIncidentHandle'");
    if (!_config.unstableOperations["v2.updateGlobalIncidentHandle"]) {
      throw new Error(
        "Unstable operation 'updateGlobalIncidentHandle' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGlobalIncidentHandle");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/incident-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateGlobalIncidentHandle")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentHandleRequest", ""),
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

  public async updateGlobalIncidentSettings(
    body: GlobalIncidentSettingsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateGlobalIncidentSettings'");
    if (!_config.unstableOperations["v2.updateGlobalIncidentSettings"]) {
      throw new Error(
        "Unstable operation 'updateGlobalIncidentSettings' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGlobalIncidentSettings");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/config/global/settings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateGlobalIncidentSettings")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GlobalIncidentSettingsRequest", ""),
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
        ObjectSerializer.serialize(include, "Array<IncidentRelatedObject>", ""),
        "csv"
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentAttachment'");
    if (!_config.unstableOperations["v2.updateIncidentAttachment"]) {
      throw new Error(
        "Unstable operation 'updateIncidentAttachment' is disabled"
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
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentAttachment")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchAttachmentRequest", ""),
      contentType
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

  public async updateIncidentCommunication(
    incidentId: string,
    communicationId: string,
    body: IncidentCommunicationRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentCommunication'");
    if (!_config.unstableOperations["v2.updateIncidentCommunication"]) {
      throw new Error(
        "Unstable operation 'updateIncidentCommunication' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentCommunication");
    }

    // verify required parameter 'communicationId' is not null or undefined
    if (communicationId === null || communicationId === undefined) {
      throw new RequiredError("communicationId", "updateIncidentCommunication");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentCommunication");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/communications/{communication_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{communication_id}",
          encodeURIComponent(String(communicationId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentCommunication")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentCommunicationRequest", ""),
      contentType
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentJiraTemplate(
    templateId: string,
    body: IncidentJiraTemplateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentJiraTemplate'");
    if (!_config.unstableOperations["v2.updateIncidentJiraTemplate"]) {
      throw new Error(
        "Unstable operation 'updateIncidentJiraTemplate' is disabled"
      );
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "updateIncidentJiraTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentJiraTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/jira-templates/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentJiraTemplate")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentJiraTemplateRequest", ""),
      contentType
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

  public async updateIncidentMicrosoftTeamsConfiguration(
    configurationId: string,
    body: IncidentMicrosoftTeamsConfigurationRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateIncidentMicrosoftTeamsConfiguration'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateIncidentMicrosoftTeamsConfiguration"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentMicrosoftTeamsConfiguration' is disabled"
      );
    }

    // verify required parameter 'configurationId' is not null or undefined
    if (configurationId === null || configurationId === undefined) {
      throw new RequiredError(
        "configurationId",
        "updateIncidentMicrosoftTeamsConfiguration"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateIncidentMicrosoftTeamsConfiguration"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/microsoft-teams-configurations/{configuration_id}".replace(
        "{configuration_id}",
        encodeURIComponent(String(configurationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentMicrosoftTeamsConfiguration")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentMicrosoftTeamsConfigurationRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentNotificationRule'");
    if (!_config.unstableOperations["v2.updateIncidentNotificationRule"]) {
      throw new Error(
        "Unstable operation 'updateIncidentNotificationRule' is disabled"
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "PutIncidentNotificationRuleRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateIncidentNotificationTemplate'"
    );
    if (!_config.unstableOperations["v2.updateIncidentNotificationTemplate"]) {
      throw new Error(
        "Unstable operation 'updateIncidentNotificationTemplate' is disabled"
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentNotificationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "PatchIncidentNotificationTemplateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentPostmortemTemplate'");
    if (!_config.unstableOperations["v2.updateIncidentPostmortemTemplate"]) {
      throw new Error(
        "Unstable operation 'updateIncidentPostmortemTemplate' is disabled"
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
        encodeURIComponent(String(templateId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentPostmortemTemplate")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PostmortemTemplateRequest", ""),
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

  public async updateIncidentStatuspageIncident(
    incidentId: string,
    pageId: string,
    statuspageIncidentId: string,
    body: IncidentStatuspageIncidentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentStatuspageIncident'");
    if (!_config.unstableOperations["v2.updateIncidentStatuspageIncident"]) {
      throw new Error(
        "Unstable operation 'updateIncidentStatuspageIncident' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentStatuspageIncident");
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateIncidentStatuspageIncident");
    }

    // verify required parameter 'statuspageIncidentId' is not null or undefined
    if (statuspageIncidentId === null || statuspageIncidentId === undefined) {
      throw new RequiredError(
        "statuspageIncidentId",
        "updateIncidentStatuspageIncident"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentStatuspageIncident");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/statuspage/{incident_id}/statuspage-incidents/pages/{page_id}/incidents/{statuspage_incident_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace(
          "{statuspage_incident_id}",
          encodeURIComponent(String(statuspageIncidentId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentStatuspageIncident")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentStatuspageIncidentRequest", ""),
      contentType
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

  public async updateIncidentStatusPageNotice(
    incidentId: string,
    statuspageId: string,
    noticeId: string,
    body: IncidentStatusPageNoticeUpdateRequest,
    notifySubscribers?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentStatusPageNotice'");
    if (!_config.unstableOperations["v2.updateIncidentStatusPageNotice"]) {
      throw new Error(
        "Unstable operation 'updateIncidentStatusPageNotice' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentStatusPageNotice");
    }

    // verify required parameter 'statuspageId' is not null or undefined
    if (statuspageId === null || statuspageId === undefined) {
      throw new RequiredError("statuspageId", "updateIncidentStatusPageNotice");
    }

    // verify required parameter 'noticeId' is not null or undefined
    if (noticeId === null || noticeId === undefined) {
      throw new RequiredError("noticeId", "updateIncidentStatusPageNotice");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentStatusPageNotice");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/statuspages/{statuspage_id}/notices/{notice_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace("{statuspage_id}", encodeURIComponent(String(statuspageId)))
        .replace("{notice_id}", encodeURIComponent(String(noticeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentStatusPageNotice")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentStatusPageNoticeUpdateRequest",
        ""
      ),
      contentType
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

  public async updateIncidentTimelineEntry(
    incidentId: string,
    timelineEntryId: string,
    body: IncidentTimelineEntryRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentTimelineEntry'");
    if (!_config.unstableOperations["v2.updateIncidentTimelineEntry"]) {
      throw new Error(
        "Unstable operation 'updateIncidentTimelineEntry' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "updateIncidentTimelineEntry");
    }

    // verify required parameter 'timelineEntryId' is not null or undefined
    if (timelineEntryId === null || timelineEntryId === undefined) {
      throw new RequiredError("timelineEntryId", "updateIncidentTimelineEntry");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentTimelineEntry");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/{incident_id}/timeline/{timeline_entry_id}"
        .replace("{incident_id}", encodeURIComponent(String(incidentId)))
        .replace(
          "{timeline_entry_id}",
          encodeURIComponent(String(timelineEntryId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentTimelineEntry")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentTimelineEntryRequest", ""),
      contentType
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateIncidentType(
    incidentTypeId: string,
    body: IncidentTypePatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentType'");
    if (!_config.unstableOperations["v2.updateIncidentType"]) {
      throw new Error("Unstable operation 'updateIncidentType' is disabled");
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
        encodeURIComponent(String(incidentTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentType")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentTypePatchRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentUserDefinedField'");
    if (!_config.unstableOperations["v2.updateIncidentUserDefinedField"]) {
      throw new Error(
        "Unstable operation 'updateIncidentUserDefinedField' is disabled"
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
        encodeURIComponent(String(fieldId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentUserDefinedField")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IncidentUserDefinedFieldUpdateRequest",
        ""
      ),
      contentType
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

  public async updateIncidentZoomConfiguration(
    configurationId: string,
    body: IncidentZoomConfigurationRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateIncidentZoomConfiguration'");
    if (!_config.unstableOperations["v2.updateIncidentZoomConfiguration"]) {
      throw new Error(
        "Unstable operation 'updateIncidentZoomConfiguration' is disabled"
      );
    }

    // verify required parameter 'configurationId' is not null or undefined
    if (configurationId === null || configurationId === undefined) {
      throw new RequiredError(
        "configurationId",
        "updateIncidentZoomConfiguration"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentZoomConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/incidents/config/zoom-configurations/{configuration_id}".replace(
        "{configuration_id}",
        encodeURIComponent(String(configurationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.updateIncidentZoomConfiguration")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentZoomConfigurationRequest", ""),
      contentType
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

  public async upsertIncidentAutomationData(
    incidentId: string,
    key: string,
    body: IncidentAutomationDataRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'upsertIncidentAutomationData'");
    if (!_config.unstableOperations["v2.upsertIncidentAutomationData"]) {
      throw new Error(
        "Unstable operation 'upsertIncidentAutomationData' is disabled"
      );
    }

    // verify required parameter 'incidentId' is not null or undefined
    if (incidentId === null || incidentId === undefined) {
      throw new RequiredError("incidentId", "upsertIncidentAutomationData");
    }

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError("key", "upsertIncidentAutomationData");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertIncidentAutomationData");
    }

    // Path Params
    const localVarPath = "/api/v2/incidents/{incident_id}/automation-data/{key}"
      .replace("{incident_id}", encodeURIComponent(String(incidentId)))
      .replace("{key}", encodeURIComponent(String(key)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IncidentsApi.upsertIncidentAutomationData")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IncidentAutomationDataRequest", ""),
      contentType
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
   * @params response Response returned by the server for a request to batchCreateIncidentRuleExecutionStates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async batchCreateIncidentRuleExecutionStates(
    response: ResponseContext
  ): Promise<IncidentRuleExecutionStatesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentRuleExecutionStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRuleExecutionStatesResponse"
        ) as IncidentRuleExecutionStatesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentRuleExecutionStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRuleExecutionStatesResponse",
          ""
        ) as IncidentRuleExecutionStatesResponse;
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
   * @params response Response returned by the server for a request to batchUpdateIncidentRuleExecutionStates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async batchUpdateIncidentRuleExecutionStates(
    response: ResponseContext
  ): Promise<IncidentRuleExecutionStatesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentRuleExecutionStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRuleExecutionStatesResponse"
        ) as IncidentRuleExecutionStatesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentRuleExecutionStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRuleExecutionStatesResponse",
          ""
        ) as IncidentRuleExecutionStatesResponse;
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
   * @params response Response returned by the server for a request to createGlobalIncidentHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGlobalIncidentHandle(
    response: ResponseContext
  ): Promise<IncidentHandleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentHandleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentHandleResponse"
      ) as IncidentHandleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentHandleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentHandleResponse",
        ""
      ) as IncidentHandleResponse;
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
   * @params response Response returned by the server for a request to createIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncident(
    response: ResponseContext
  ): Promise<IncidentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse"
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
   * @params response Response returned by the server for a request to createIncidentAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentAttachment(
    response: ResponseContext
  ): Promise<Attachment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Attachment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Attachment"
      ) as Attachment;
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
      const body: Attachment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Attachment",
        ""
      ) as Attachment;
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
   * @params response Response returned by the server for a request to createIncidentCommunication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentCommunication(
    response: ResponseContext
  ): Promise<IncidentCommunicationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentCommunicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationResponse"
      ) as IncidentCommunicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentCommunicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationResponse",
        ""
      ) as IncidentCommunicationResponse;
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
   * @params response Response returned by the server for a request to createIncidentGoogleMeetSpace
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentGoogleMeetSpace(
    response: ResponseContext
  ): Promise<IncidentGoogleMeetIntegrationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentGoogleMeetIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentGoogleMeetIntegrationResponse"
        ) as IncidentGoogleMeetIntegrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentGoogleMeetIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentGoogleMeetIntegrationResponse",
          ""
        ) as IncidentGoogleMeetIntegrationResponse;
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
   * @params response Response returned by the server for a request to createIncidentImpact
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentImpact(
    response: ResponseContext
  ): Promise<IncidentImpactResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentImpactResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentImpactResponse"
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
      const body: IncidentImpactResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentImpactResponse",
        ""
      ) as IncidentImpactResponse;
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
    if (response.httpStatusCode === 201) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse"
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
   * @params response Response returned by the server for a request to createIncidentJiraIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentJiraIssue(
    response: ResponseContext
  ): Promise<IncidentJiraIssueIntegrationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentJiraIssueIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentJiraIssueIntegrationResponse"
        ) as IncidentJiraIssueIntegrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentJiraIssueIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentJiraIssueIntegrationResponse",
          ""
        ) as IncidentJiraIssueIntegrationResponse;
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
   * @params response Response returned by the server for a request to createIncidentJiraTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentJiraTemplate(
    response: ResponseContext
  ): Promise<IncidentJiraTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentJiraTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplateResponse"
      ) as IncidentJiraTemplateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: IncidentJiraTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplateResponse",
        ""
      ) as IncidentJiraTemplateResponse;
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
   * @params response Response returned by the server for a request to createIncidentMicrosoftTeamsConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentMicrosoftTeamsConfiguration(
    response: ResponseContext
  ): Promise<IncidentMicrosoftTeamsConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentMicrosoftTeamsConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentMicrosoftTeamsConfigurationResponse"
        ) as IncidentMicrosoftTeamsConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: IncidentMicrosoftTeamsConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentMicrosoftTeamsConfigurationResponse",
          ""
        ) as IncidentMicrosoftTeamsConfigurationResponse;
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
   * @params response Response returned by the server for a request to createIncidentMSTeamsOnlineMeeting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentMSTeamsOnlineMeeting(
    response: ResponseContext
  ): Promise<IncidentMSTeamsIntegrationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentMSTeamsIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentMSTeamsIntegrationResponse"
        ) as IncidentMSTeamsIntegrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentMSTeamsIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentMSTeamsIntegrationResponse",
          ""
        ) as IncidentMSTeamsIntegrationResponse;
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
   * @params response Response returned by the server for a request to createIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentNotificationRule(
    response: ResponseContext
  ): Promise<IncidentNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule"
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
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule",
        ""
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to createIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentNotificationTemplate(
    response: ResponseContext
  ): Promise<IncidentNotificationTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentNotificationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationTemplate"
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
      const body: IncidentNotificationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationTemplate",
        ""
      ) as IncidentNotificationTemplate;
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
   * @params response Response returned by the server for a request to createIncidentPostmortemAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentPostmortemAttachment(
    response: ResponseContext
  ): Promise<Attachment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Attachment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Attachment"
      ) as Attachment;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: Attachment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Attachment",
        ""
      ) as Attachment;
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
   * @params response Response returned by the server for a request to createIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentPostmortemTemplate(
    response: ResponseContext
  ): Promise<PostmortemTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: PostmortemTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplateResponse"
      ) as PostmortemTemplateResponse;
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
      const body: PostmortemTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplateResponse",
        ""
      ) as PostmortemTemplateResponse;
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
   * @params response Response returned by the server for a request to createIncidentRoleAssignment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentRoleAssignment(
    response: ResponseContext
  ): Promise<IncidentRoleAssignmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentRoleAssignmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentRoleAssignmentResponse"
      ) as IncidentRoleAssignmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
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
      const body: IncidentRoleAssignmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentRoleAssignmentResponse",
        ""
      ) as IncidentRoleAssignmentResponse;
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
   * @params response Response returned by the server for a request to createIncidentStatuspageIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentStatuspageIncident(
    response: ResponseContext
  ): Promise<IncidentStatuspageIncidentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatuspageIncidentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageIncidentResponse"
        ) as IncidentStatuspageIncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentStatuspageIncidentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageIncidentResponse",
          ""
        ) as IncidentStatuspageIncidentResponse;
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
   * @params response Response returned by the server for a request to createIncidentStatusPageNotice
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentStatusPageNotice(
    response: ResponseContext
  ): Promise<IncidentStatusPageNoticeIntegrationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatusPageNoticeIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatusPageNoticeIntegrationResponse"
        ) as IncidentStatusPageNoticeIntegrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentStatusPageNoticeIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatusPageNoticeIntegrationResponse",
          ""
        ) as IncidentStatusPageNoticeIntegrationResponse;
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
   * @params response Response returned by the server for a request to createIncidentTimelineEntry
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentTimelineEntry(
    response: ResponseContext
  ): Promise<IncidentTimelineEntryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentTimelineEntryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTimelineEntryResponse"
      ) as IncidentTimelineEntryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTimelineEntryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTimelineEntryResponse",
        ""
      ) as IncidentTimelineEntryResponse;
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
    if (response.httpStatusCode === 201) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse"
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
   * @params response Response returned by the server for a request to createIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentType(
    response: ResponseContext
  ): Promise<IncidentTypeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentTypeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeResponse"
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
      const body: IncidentTypeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeResponse",
        ""
      ) as IncidentTypeResponse;
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
   * @params response Response returned by the server for a request to createIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentUserDefinedField(
    response: ResponseContext
  ): Promise<IncidentUserDefinedFieldResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentUserDefinedFieldResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldResponse"
        ) as IncidentUserDefinedFieldResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentUserDefinedFieldResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldResponse",
          ""
        ) as IncidentUserDefinedFieldResponse;
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
   * @params response Response returned by the server for a request to createIncidentZoomConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentZoomConfiguration(
    response: ResponseContext
  ): Promise<IncidentZoomConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentZoomConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentZoomConfigurationResponse"
        ) as IncidentZoomConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: IncidentZoomConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentZoomConfigurationResponse",
          ""
        ) as IncidentZoomConfigurationResponse;
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
   * @params response Response returned by the server for a request to createIncidentZoomMeeting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentZoomMeeting(
    response: ResponseContext
  ): Promise<IncidentZoomIntegrationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentZoomIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentZoomIntegrationResponse"
        ) as IncidentZoomIntegrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentZoomIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentZoomIntegrationResponse",
          ""
        ) as IncidentZoomIntegrationResponse;
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
   * @params response Response returned by the server for a request to createStatuspageEmailSubscription
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStatuspageEmailSubscription(
    response: ResponseContext
  ): Promise<IncidentStatuspageSubscriptionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentStatuspageSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageSubscriptionResponse"
        ) as IncidentStatuspageSubscriptionResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentStatuspageSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageSubscriptionResponse",
          ""
        ) as IncidentStatuspageSubscriptionResponse;
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
   * @params response Response returned by the server for a request to deleteGlobalIncidentHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGlobalIncidentHandle(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400) {
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
      return;
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentAttachment(
    response: ResponseContext
  ): Promise<void> {
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentCommunication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentCommunication(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentImpact
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentImpact(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
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
      return;
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentJiraTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentJiraTemplate(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentNotificationRule(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentNotificationTemplate(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentPostmortemTemplate(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentRoleAssignment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentRoleAssignment(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentTimelineEntry
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentTimelineEntry(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      return;
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentType(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      return;
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
   * @params response Response returned by the server for a request to deleteIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentUserDefinedField(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (
      response.httpStatusCode === 401 ||
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
      return;
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
   * @params response Response returned by the server for a request to exportIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async exportIncidents(response: ResponseContext): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to getGlobalIncidentSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGlobalIncidentSettings(
    response: ResponseContext
  ): Promise<GlobalIncidentSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GlobalIncidentSettingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalIncidentSettingsResponse"
      ) as GlobalIncidentSettingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: GlobalIncidentSettingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalIncidentSettingsResponse",
        ""
      ) as GlobalIncidentSettingsResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse"
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
   * @params response Response returned by the server for a request to getIncidentAutomationData
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentAutomationData(
    response: ResponseContext
  ): Promise<IncidentAutomationDataResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentAutomationDataResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentAutomationDataResponse"
      ) as IncidentAutomationDataResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentAutomationDataResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentAutomationDataResponse",
        ""
      ) as IncidentAutomationDataResponse;
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
   * @params response Response returned by the server for a request to getIncidentCaseSourceLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentCaseSourceLink(
    response: ResponseContext
  ): Promise<IncidentCaseLinkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentCaseLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCaseLinkResponse"
      ) as IncidentCaseLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentCaseLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCaseLinkResponse",
        ""
      ) as IncidentCaseLinkResponse;
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
   * @params response Response returned by the server for a request to getIncidentCommunication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentCommunication(
    response: ResponseContext
  ): Promise<IncidentCommunicationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentCommunicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationResponse"
      ) as IncidentCommunicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentCommunicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationResponse",
        ""
      ) as IncidentCommunicationResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse"
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
   * @params response Response returned by the server for a request to getIncidentJiraTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentJiraTemplate(
    response: ResponseContext
  ): Promise<IncidentJiraTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentJiraTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplateResponse"
      ) as IncidentJiraTemplateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentJiraTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplateResponse",
        ""
      ) as IncidentJiraTemplateResponse;
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
   * @params response Response returned by the server for a request to getIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentNotificationRule(
    response: ResponseContext
  ): Promise<IncidentNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule"
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
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule",
        ""
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to getIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentNotificationTemplate(
    response: ResponseContext
  ): Promise<IncidentNotificationTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationTemplate"
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
      const body: IncidentNotificationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationTemplate",
        ""
      ) as IncidentNotificationTemplate;
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
   * @params response Response returned by the server for a request to getIncidentPagerdutyRelatedIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentPagerdutyRelatedIncidents(
    response: ResponseContext
  ): Promise<IncidentPagerdutyRelatedIncidentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentPagerdutyRelatedIncidentsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentPagerdutyRelatedIncidentsResponse"
        ) as IncidentPagerdutyRelatedIncidentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentPagerdutyRelatedIncidentsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentPagerdutyRelatedIncidentsResponse",
          ""
        ) as IncidentPagerdutyRelatedIncidentsResponse;
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
   * @params response Response returned by the server for a request to getIncidentPageSourceLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentPageSourceLink(
    response: ResponseContext
  ): Promise<IncidentCaseLinkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentCaseLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCaseLinkResponse"
      ) as IncidentCaseLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentCaseLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCaseLinkResponse",
        ""
      ) as IncidentCaseLinkResponse;
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
   * @params response Response returned by the server for a request to getIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentPostmortemTemplate(
    response: ResponseContext
  ): Promise<PostmortemTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PostmortemTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplateResponse"
      ) as PostmortemTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: PostmortemTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplateResponse",
        ""
      ) as PostmortemTemplateResponse;
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
   * @params response Response returned by the server for a request to getIncidentReservedRole
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentReservedRole(
    response: ResponseContext
  ): Promise<IncidentReservedRoleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentReservedRoleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentReservedRoleResponse"
      ) as IncidentReservedRoleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentReservedRoleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentReservedRoleResponse",
        ""
      ) as IncidentReservedRoleResponse;
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
   * @params response Response returned by the server for a request to getIncidentRoleAssignment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentRoleAssignment(
    response: ResponseContext
  ): Promise<IncidentRoleAssignmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentRoleAssignmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentRoleAssignmentResponse"
      ) as IncidentRoleAssignmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentRoleAssignmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentRoleAssignmentResponse",
        ""
      ) as IncidentRoleAssignmentResponse;
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
   * @params response Response returned by the server for a request to getIncidentStatusPagesSuggestion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentStatusPagesSuggestion(
    response: ResponseContext
  ): Promise<IncidentStatusPagesSuggestionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatusPagesSuggestionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatusPagesSuggestionResponse"
        ) as IncidentStatusPagesSuggestionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentStatusPagesSuggestionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatusPagesSuggestionResponse",
          ""
        ) as IncidentStatusPagesSuggestionResponse;
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
   * @params response Response returned by the server for a request to getIncidentTimelineEntryThread
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentTimelineEntryThread(
    response: ResponseContext
  ): Promise<IncidentTimelineThreadResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTimelineThreadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTimelineThreadResponse"
      ) as IncidentTimelineThreadResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTimelineThreadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTimelineThreadResponse",
        ""
      ) as IncidentTimelineThreadResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse"
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
   * @params response Response returned by the server for a request to getIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentType(
    response: ResponseContext
  ): Promise<IncidentTypeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTypeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeResponse"
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
      const body: IncidentTypeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeResponse",
        ""
      ) as IncidentTypeResponse;
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
   * @params response Response returned by the server for a request to getIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentUserDefinedField(
    response: ResponseContext
  ): Promise<IncidentUserDefinedFieldResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedFieldResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldResponse"
        ) as IncidentUserDefinedFieldResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 404) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncidentUserDefinedFieldResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldResponse",
          ""
        ) as IncidentUserDefinedFieldResponse;
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
   * @params response Response returned by the server for a request to getStatuspageSubscriptionPreferences
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStatuspageSubscriptionPreferences(
    response: ResponseContext
  ): Promise<IncidentStatuspagePreferencesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatuspagePreferencesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspagePreferencesResponse"
        ) as IncidentStatuspagePreferencesResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
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
      const body: IncidentStatuspagePreferencesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspagePreferencesResponse",
          ""
        ) as IncidentStatuspagePreferencesResponse;
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
   * @params response Response returned by the server for a request to importIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async importIncident(
    response: ResponseContext
  ): Promise<IncidentImportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: IncidentImportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentImportResponse"
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
      const body: IncidentImportResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentImportResponse",
        ""
      ) as IncidentImportResponse;
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
   * @params response Response returned by the server for a request to listGlobalIncidentHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGlobalIncidentHandles(
    response: ResponseContext
  ): Promise<IncidentHandlesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentHandlesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentHandlesResponse"
      ) as IncidentHandlesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentHandlesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentHandlesResponse",
        ""
      ) as IncidentHandlesResponse;
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
  ): Promise<AttachmentArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AttachmentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AttachmentArray"
      ) as AttachmentArray;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AttachmentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AttachmentArray",
        ""
      ) as AttachmentArray;
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
   * @params response Response returned by the server for a request to listIncidentCommunications
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentCommunications(
    response: ResponseContext
  ): Promise<IncidentCommunicationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentCommunicationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationsResponse"
      ) as IncidentCommunicationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentCommunicationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationsResponse",
        ""
      ) as IncidentCommunicationsResponse;
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
   * @params response Response returned by the server for a request to listIncidentImpacts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentImpacts(
    response: ResponseContext
  ): Promise<IncidentImpactsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentImpactsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentImpactsResponse"
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
      const body: IncidentImpactsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentImpactsResponse",
        ""
      ) as IncidentImpactsResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentIntegrationMetadataListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataListResponse"
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
   * @params response Response returned by the server for a request to listIncidentJiraTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentJiraTemplates(
    response: ResponseContext
  ): Promise<IncidentJiraTemplatesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentJiraTemplatesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplatesResponse"
      ) as IncidentJiraTemplatesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: IncidentJiraTemplatesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplatesResponse",
        ""
      ) as IncidentJiraTemplatesResponse;
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
   * @params response Response returned by the server for a request to listIncidentNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentNotificationRules(
    response: ResponseContext
  ): Promise<IncidentNotificationRuleArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRuleArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRuleArray"
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
      const body: IncidentNotificationRuleArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRuleArray",
        ""
      ) as IncidentNotificationRuleArray;
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
   * @params response Response returned by the server for a request to listIncidentNotificationTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentNotificationTemplates(
    response: ResponseContext
  ): Promise<IncidentNotificationTemplateArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationTemplateArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentNotificationTemplateArray"
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
      const body: IncidentNotificationTemplateArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentNotificationTemplateArray",
          ""
        ) as IncidentNotificationTemplateArray;
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
   * @params response Response returned by the server for a request to listIncidentPagerdutyServices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentPagerdutyServices(
    response: ResponseContext
  ): Promise<IncidentPagerdutyServicesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentPagerdutyServicesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentPagerdutyServicesResponse"
        ) as IncidentPagerdutyServicesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: IncidentPagerdutyServicesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentPagerdutyServicesResponse",
          ""
        ) as IncidentPagerdutyServicesResponse;
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
   * @params response Response returned by the server for a request to listIncidentPostmortemTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentPostmortemTemplates(
    response: ResponseContext
  ): Promise<PostmortemTemplatesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PostmortemTemplatesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplatesResponse"
      ) as PostmortemTemplatesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: PostmortemTemplatesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplatesResponse",
        ""
      ) as PostmortemTemplatesResponse;
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
   * @params response Response returned by the server for a request to listIncidentReservedRoles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentReservedRoles(
    response: ResponseContext
  ): Promise<IncidentReservedRolesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentReservedRolesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentReservedRolesResponse"
      ) as IncidentReservedRolesResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
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
      const body: IncidentReservedRolesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentReservedRolesResponse",
        ""
      ) as IncidentReservedRolesResponse;
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
   * @params response Response returned by the server for a request to listIncidentRuleExecutionStates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentRuleExecutionStates(
    response: ResponseContext
  ): Promise<IncidentRuleExecutionStatesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentRuleExecutionStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRuleExecutionStatesResponse"
        ) as IncidentRuleExecutionStatesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentRuleExecutionStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRuleExecutionStatesResponse",
          ""
        ) as IncidentRuleExecutionStatesResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentsResponse"
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
   * @params response Response returned by the server for a request to listIncidentTemplateVariables
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTemplateVariables(
    response: ResponseContext
  ): Promise<IncidentTemplateVariablesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTemplateVariablesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentTemplateVariablesResponse"
        ) as IncidentTemplateVariablesResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
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
      const body: IncidentTemplateVariablesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentTemplateVariablesResponse",
          ""
        ) as IncidentTemplateVariablesResponse;
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
   * @params response Response returned by the server for a request to listIncidentTimelineEntries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTimelineEntries(
    response: ResponseContext
  ): Promise<IncidentTimelineEntriesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTimelineEntriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentTimelineEntriesResponse"
        ) as IncidentTimelineEntriesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTimelineEntriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentTimelineEntriesResponse",
          ""
        ) as IncidentTimelineEntriesResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentTodoListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoListResponse"
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
   * @params response Response returned by the server for a request to listIncidentTypes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentTypes(
    response: ResponseContext
  ): Promise<IncidentTypeListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTypeListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeListResponse"
      ) as IncidentTypeListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTypeListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeListResponse",
        ""
      ) as IncidentTypeListResponse;
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
   * @params response Response returned by the server for a request to listIncidentUserDefinedFields
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentUserDefinedFields(
    response: ResponseContext
  ): Promise<IncidentUserDefinedFieldListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedFieldListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldListResponse"
        ) as IncidentUserDefinedFieldListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentUserDefinedFieldListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldListResponse",
          ""
        ) as IncidentUserDefinedFieldListResponse;
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
   * @params response Response returned by the server for a request to listStatuspageEmailSubscriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listStatuspageEmailSubscriptions(
    response: ResponseContext
  ): Promise<IncidentStatuspageSubscriptionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatuspageSubscriptionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageSubscriptionsResponse"
        ) as IncidentStatuspageSubscriptionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentStatuspageSubscriptionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageSubscriptionsResponse",
          ""
        ) as IncidentStatuspageSubscriptionsResponse;
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
   * @params response Response returned by the server for a request to patchIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchIncidentNotificationRule(
    response: ResponseContext
  ): Promise<IncidentNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule"
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
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule",
        ""
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to renderIncidentTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async renderIncidentTemplate(
    response: ResponseContext
  ): Promise<IncidentRenderedTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentRenderedTemplateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRenderedTemplateResponse"
        ) as IncidentRenderedTemplateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentRenderedTemplateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentRenderedTemplateResponse",
          ""
        ) as IncidentRenderedTemplateResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentSearchResponse"
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
   * @params response Response returned by the server for a request to searchIncidentsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchIncidentsV2(
    response: ResponseContext
  ): Promise<IncidentSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentSearchResponse"
      ) as IncidentSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
   * @params response Response returned by the server for a request to updateGlobalIncidentHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGlobalIncidentHandle(
    response: ResponseContext
  ): Promise<IncidentHandleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentHandleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentHandleResponse"
      ) as IncidentHandleResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: IncidentHandleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentHandleResponse",
        ""
      ) as IncidentHandleResponse;
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
   * @params response Response returned by the server for a request to updateGlobalIncidentSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGlobalIncidentSettings(
    response: ResponseContext
  ): Promise<GlobalIncidentSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GlobalIncidentSettingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalIncidentSettingsResponse"
      ) as GlobalIncidentSettingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: GlobalIncidentSettingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalIncidentSettingsResponse",
        ""
      ) as GlobalIncidentSettingsResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentResponse"
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
   * @params response Response returned by the server for a request to updateIncidentAttachment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentAttachment(
    response: ResponseContext
  ): Promise<Attachment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Attachment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Attachment"
      ) as Attachment;
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
      const body: Attachment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Attachment",
        ""
      ) as Attachment;
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
   * @params response Response returned by the server for a request to updateIncidentCommunication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentCommunication(
    response: ResponseContext
  ): Promise<IncidentCommunicationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentCommunicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationResponse"
      ) as IncidentCommunicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentCommunicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentCommunicationResponse",
        ""
      ) as IncidentCommunicationResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentIntegrationMetadataResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentIntegrationMetadataResponse"
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
   * @params response Response returned by the server for a request to updateIncidentJiraTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentJiraTemplate(
    response: ResponseContext
  ): Promise<IncidentJiraTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentJiraTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplateResponse"
      ) as IncidentJiraTemplateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentJiraTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentJiraTemplateResponse",
        ""
      ) as IncidentJiraTemplateResponse;
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
   * @params response Response returned by the server for a request to updateIncidentMicrosoftTeamsConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentMicrosoftTeamsConfiguration(
    response: ResponseContext
  ): Promise<IncidentMicrosoftTeamsConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentMicrosoftTeamsConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentMicrosoftTeamsConfigurationResponse"
        ) as IncidentMicrosoftTeamsConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentMicrosoftTeamsConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentMicrosoftTeamsConfigurationResponse",
          ""
        ) as IncidentMicrosoftTeamsConfigurationResponse;
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
   * @params response Response returned by the server for a request to updateIncidentNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentNotificationRule(
    response: ResponseContext
  ): Promise<IncidentNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule"
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
      const body: IncidentNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationRule",
        ""
      ) as IncidentNotificationRule;
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
   * @params response Response returned by the server for a request to updateIncidentNotificationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentNotificationTemplate(
    response: ResponseContext
  ): Promise<IncidentNotificationTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentNotificationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationTemplate"
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
      const body: IncidentNotificationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentNotificationTemplate",
        ""
      ) as IncidentNotificationTemplate;
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
   * @params response Response returned by the server for a request to updateIncidentPostmortemTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentPostmortemTemplate(
    response: ResponseContext
  ): Promise<PostmortemTemplateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PostmortemTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplateResponse"
      ) as PostmortemTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: PostmortemTemplateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PostmortemTemplateResponse",
        ""
      ) as PostmortemTemplateResponse;
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
   * @params response Response returned by the server for a request to updateIncidentStatuspageIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentStatuspageIncident(
    response: ResponseContext
  ): Promise<IncidentStatuspageIncidentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatuspageIncidentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageIncidentResponse"
        ) as IncidentStatuspageIncidentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentStatuspageIncidentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatuspageIncidentResponse",
          ""
        ) as IncidentStatuspageIncidentResponse;
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
   * @params response Response returned by the server for a request to updateIncidentStatusPageNotice
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentStatusPageNotice(
    response: ResponseContext
  ): Promise<IncidentStatusPageNoticeIntegrationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentStatusPageNoticeIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatusPageNoticeIntegrationResponse"
        ) as IncidentStatusPageNoticeIntegrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentStatusPageNoticeIntegrationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentStatusPageNoticeIntegrationResponse",
          ""
        ) as IncidentStatusPageNoticeIntegrationResponse;
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
   * @params response Response returned by the server for a request to updateIncidentTimelineEntry
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentTimelineEntry(
    response: ResponseContext
  ): Promise<IncidentTimelineEntryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTimelineEntryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTimelineEntryResponse"
      ) as IncidentTimelineEntryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentTimelineEntryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTimelineEntryResponse",
        ""
      ) as IncidentTimelineEntryResponse;
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
    if (response.httpStatusCode === 200) {
      const body: IncidentTodoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTodoResponse"
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
   * @params response Response returned by the server for a request to updateIncidentType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentType(
    response: ResponseContext
  ): Promise<IncidentTypeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentTypeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeResponse"
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
      const body: IncidentTypeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentTypeResponse",
        ""
      ) as IncidentTypeResponse;
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
   * @params response Response returned by the server for a request to updateIncidentUserDefinedField
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentUserDefinedField(
    response: ResponseContext
  ): Promise<IncidentUserDefinedFieldResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentUserDefinedFieldResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldResponse"
        ) as IncidentUserDefinedFieldResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
    if (
      response.httpStatusCode === 401 ||
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
      const body: IncidentUserDefinedFieldResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentUserDefinedFieldResponse",
          ""
        ) as IncidentUserDefinedFieldResponse;
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
   * @params response Response returned by the server for a request to updateIncidentZoomConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentZoomConfiguration(
    response: ResponseContext
  ): Promise<IncidentZoomConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentZoomConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentZoomConfigurationResponse"
        ) as IncidentZoomConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentZoomConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IncidentZoomConfigurationResponse",
          ""
        ) as IncidentZoomConfigurationResponse;
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
   * @params response Response returned by the server for a request to upsertIncidentAutomationData
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertIncidentAutomationData(
    response: ResponseContext
  ): Promise<IncidentAutomationDataResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IncidentAutomationDataResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentAutomationDataResponse"
      ) as IncidentAutomationDataResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IncidentAutomationDataResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncidentAutomationDataResponse",
        ""
      ) as IncidentAutomationDataResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface IncidentsApiBatchCreateIncidentRuleExecutionStatesRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentBatchCreateRuleExecutionStatesRequest
   */
  body: IncidentBatchCreateRuleExecutionStatesRequest;
}

export interface IncidentsApiBatchUpdateIncidentRuleExecutionStatesRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentBatchUpdateRuleExecutionStatesRequest
   */
  body: IncidentBatchUpdateRuleExecutionStatesRequest;
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

export interface IncidentsApiCreateIncidentCommunicationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentCommunicationRequest
   */
  body: IncidentCommunicationRequest;
}

export interface IncidentsApiCreateIncidentGoogleMeetSpaceRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
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

export interface IncidentsApiCreateIncidentJiraIssueRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentJiraIssueRequest
   */
  body: IncidentJiraIssueRequest;
}

export interface IncidentsApiCreateIncidentJiraTemplateRequest {
  /**
   * @type IncidentJiraTemplateRequest
   */
  body: IncidentJiraTemplateRequest;
}

export interface IncidentsApiCreateIncidentMicrosoftTeamsConfigurationRequest {
  /**
   * @type IncidentMicrosoftTeamsConfigurationRequest
   */
  body: IncidentMicrosoftTeamsConfigurationRequest;
  /**
   * Specifies which related objects to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiCreateIncidentMSTeamsOnlineMeetingRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
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

export interface IncidentsApiCreateIncidentRoleAssignmentRequest {
  /**
   * @type IncidentRoleAssignmentRequest
   */
  body: IncidentRoleAssignmentRequest;
}

export interface IncidentsApiCreateIncidentStatuspageIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentStatuspageIncidentRequest
   */
  body: IncidentStatuspageIncidentRequest;
}

export interface IncidentsApiCreateIncidentStatusPageNoticeRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the status page.
   * @type string
   */
  statuspageId: string;
  /**
   * @type IncidentStatusPageNoticeCreateRequest
   */
  body: IncidentStatusPageNoticeCreateRequest;
  /**
   * Whether to notify subscribers about this notice.
   * @type boolean
   */
  notifySubscribers?: boolean;
}

export interface IncidentsApiCreateIncidentTimelineEntryRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentTimelineEntryRequest
   */
  body: IncidentTimelineEntryRequest;
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

export interface IncidentsApiCreateIncidentZoomConfigurationRequest {
  /**
   * @type IncidentZoomConfigurationRequest
   */
  body: IncidentZoomConfigurationRequest;
  /**
   * Specifies which related objects to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiCreateIncidentZoomMeetingRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentCreateZoomMeetingRequest
   */
  body: IncidentCreateZoomMeetingRequest;
}

export interface IncidentsApiCreateStatuspageEmailSubscriptionRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type IncidentStatuspageSubscriptionRequest
   */
  body: IncidentStatuspageSubscriptionRequest;
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

export interface IncidentsApiDeleteIncidentCommunicationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the communication.
   * @type string
   */
  communicationId: string;
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

export interface IncidentsApiDeleteIncidentJiraTemplateRequest {
  /**
   * The ID of the Jira template.
   * @type string
   */
  templateId: string;
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

export interface IncidentsApiDeleteIncidentRoleAssignmentRequest {
  /**
   * The ID of the role assignment.
   * @type string
   */
  roleAssignmentId: string;
}

export interface IncidentsApiDeleteIncidentTimelineEntryRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the timeline entry.
   * @type string
   */
  timelineEntryId: string;
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

export interface IncidentsApiExportIncidentsRequest {
  /**
   * @type IncidentSearchIncidentsExportRequest
   */
  body: IncidentSearchIncidentsExportRequest;
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

export interface IncidentsApiGetIncidentAutomationDataRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The automation data key.
   * @type string
   */
  key: string;
  /**
   * Specifies which related objects to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiGetIncidentCaseSourceLinkRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiGetIncidentCommunicationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the communication.
   * @type string
   */
  communicationId: string;
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

export interface IncidentsApiGetIncidentJiraTemplateRequest {
  /**
   * The ID of the Jira template.
   * @type string
   */
  templateId: string;
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

export interface IncidentsApiGetIncidentPagerdutyRelatedIncidentsRequest {
  /**
   * The PagerDuty incident identifier.
   * @type string
   */
  pagerdutyIncidentId: string;
}

export interface IncidentsApiGetIncidentPageSourceLinkRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiGetIncidentPostmortemTemplateRequest {
  /**
   * The ID of the postmortem template
   * @type string
   */
  templateId: string;
}

export interface IncidentsApiGetIncidentReservedRoleRequest {
  /**
   * The ID of the reserved role.
   * @type string
   */
  roleId: string;
}

export interface IncidentsApiGetIncidentRoleAssignmentRequest {
  /**
   * The ID of the role assignment.
   * @type string
   */
  roleAssignmentId: string;
}

export interface IncidentsApiGetIncidentStatusPagesSuggestionRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
}

export interface IncidentsApiGetIncidentTimelineEntryThreadRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the timeline entry.
   * @type string
   */
  timelineEntryId: string;
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

export interface IncidentsApiListIncidentCommunicationsRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * Filter by communication type.
   * @type string
   */
  filterCommunicationType?: string;
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

export interface IncidentsApiListIncidentJiraTemplatesRequest {
  /**
   * Filter templates by default status.
   * @type boolean
   */
  isDefault?: boolean;
  /**
   * Filter templates by incident type identifier.
   * @type string
   */
  incidentTypeId?: string;
  /**
   * Filter templates by type.
   * @type string
   */
  templateType?: string;
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

export interface IncidentsApiListIncidentPagerdutyServicesRequest {
  /**
   * Whether to include unresolved PagerDuty services.
   * @type boolean
   */
  includeUnresolved?: boolean;
}

export interface IncidentsApiListIncidentRuleExecutionStatesRequest {
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

export interface IncidentsApiListIncidentTemplateVariablesRequest {
  /**
   * Filter template variables by incident type.
   * @type string
   */
  filterIncidentType?: string;
  /**
   * Whether to include follow-up template variables.
   * @type boolean
   */
  includeFollowUps?: boolean;
}

export interface IncidentsApiListIncidentTimelineEntriesRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
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

export interface IncidentsApiListStatuspageEmailSubscriptionsRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
}

export interface IncidentsApiPatchIncidentNotificationRuleRequest {
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

export interface IncidentsApiRenderIncidentTemplateRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * @type IncidentRenderTemplateRequest
   */
  body: IncidentRenderTemplateRequest;
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

export interface IncidentsApiSearchIncidentsV2Request {
  /**
   * Specifies which incidents should be returned by the search.
   * @type string
   */
  query?: string;
  /**
   * Specifies the order of returned incidents.
   * @type IncidentSearchIncidentsSortOrder
   */
  sort?: IncidentSearchIncidentsSortOrder;
  /**
   * Whether to include facet data in the response.
   * @type boolean
   */
  withFacets?: boolean;
  /**
   * Whether to include deleted incidents in the response.
   * @type boolean
   */
  filterWithDeleted?: boolean;
  /**
   * A semantic search query.
   * @type string
   */
  semanticQuery?: string;
  /**
   * The timezone for date-based operations.
   * @type string
   */
  timeZone?: string;
  /**
   * Specifies which types of related objects to include.
   * @type Array<IncidentSearchIncidentsIncludeType>
   */
  include?: Array<IncidentSearchIncidentsIncludeType>;
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

export interface IncidentsApiUpdateIncidentCommunicationRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the communication.
   * @type string
   */
  communicationId: string;
  /**
   * @type IncidentCommunicationRequest
   */
  body: IncidentCommunicationRequest;
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

export interface IncidentsApiUpdateIncidentJiraTemplateRequest {
  /**
   * The ID of the Jira template.
   * @type string
   */
  templateId: string;
  /**
   * @type IncidentJiraTemplateRequest
   */
  body: IncidentJiraTemplateRequest;
}

export interface IncidentsApiUpdateIncidentMicrosoftTeamsConfigurationRequest {
  /**
   * The ID of the Microsoft Teams configuration.
   * @type string
   */
  configurationId: string;
  /**
   * @type IncidentMicrosoftTeamsConfigurationRequest
   */
  body: IncidentMicrosoftTeamsConfigurationRequest;
  /**
   * Specifies which related objects to include in the response.
   * @type string
   */
  include?: string;
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

export interface IncidentsApiUpdateIncidentStatuspageIncidentRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the Statuspage page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the Statuspage incident.
   * @type string
   */
  statuspageIncidentId: string;
  /**
   * @type IncidentStatuspageIncidentRequest
   */
  body: IncidentStatuspageIncidentRequest;
}

export interface IncidentsApiUpdateIncidentStatusPageNoticeRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the status page.
   * @type string
   */
  statuspageId: string;
  /**
   * The ID of the status page notice.
   * @type string
   */
  noticeId: string;
  /**
   * @type IncidentStatusPageNoticeUpdateRequest
   */
  body: IncidentStatusPageNoticeUpdateRequest;
  /**
   * Whether to notify subscribers about this notice.
   * @type boolean
   */
  notifySubscribers?: boolean;
}

export interface IncidentsApiUpdateIncidentTimelineEntryRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The ID of the timeline entry.
   * @type string
   */
  timelineEntryId: string;
  /**
   * @type IncidentTimelineEntryRequest
   */
  body: IncidentTimelineEntryRequest;
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

export interface IncidentsApiUpdateIncidentZoomConfigurationRequest {
  /**
   * The ID of the Zoom configuration.
   * @type string
   */
  configurationId: string;
  /**
   * @type IncidentZoomConfigurationRequest
   */
  body: IncidentZoomConfigurationRequest;
  /**
   * Specifies which related objects to include in the response.
   * @type string
   */
  include?: string;
}

export interface IncidentsApiUpsertIncidentAutomationDataRequest {
  /**
   * The UUID of the incident.
   * @type string
   */
  incidentId: string;
  /**
   * The automation data key.
   * @type string
   */
  key: string;
  /**
   * @type IncidentAutomationDataRequest
   */
  body: IncidentAutomationDataRequest;
  /**
   * Specifies which related objects to include in the response.
   * @type string
   */
  include?: string;
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
   * Batch create rule execution states for a given incident.
   * @param param The request object
   */
  public batchCreateIncidentRuleExecutionStates(
    param: IncidentsApiBatchCreateIncidentRuleExecutionStatesRequest,
    options?: Configuration
  ): Promise<IncidentRuleExecutionStatesResponse> {
    const requestContextPromise =
      this.requestFactory.batchCreateIncidentRuleExecutionStates(
        param.incidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.batchCreateIncidentRuleExecutionStates(
            responseContext
          );
        });
    });
  }

  /**
   * Batch update rule execution states for a given incident.
   * @param param The request object
   */
  public batchUpdateIncidentRuleExecutionStates(
    param: IncidentsApiBatchUpdateIncidentRuleExecutionStatesRequest,
    options?: Configuration
  ): Promise<IncidentRuleExecutionStatesResponse> {
    const requestContextPromise =
      this.requestFactory.batchUpdateIncidentRuleExecutionStates(
        param.incidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.batchUpdateIncidentRuleExecutionStates(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new global incident handle.
   * @param param The request object
   */
  public createGlobalIncidentHandle(
    param: IncidentsApiCreateGlobalIncidentHandleRequest,
    options?: Configuration
  ): Promise<IncidentHandleResponse> {
    const requestContextPromise =
      this.requestFactory.createGlobalIncidentHandle(
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGlobalIncidentHandle(
            responseContext
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
   * Create an incident attachment.
   * @param param The request object
   */
  public createIncidentAttachment(
    param: IncidentsApiCreateIncidentAttachmentRequest,
    options?: Configuration
  ): Promise<Attachment> {
    const requestContextPromise = this.requestFactory.createIncidentAttachment(
      param.incidentId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentAttachment(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new communication for a given incident.
   * @param param The request object
   */
  public createIncidentCommunication(
    param: IncidentsApiCreateIncidentCommunicationRequest,
    options?: Configuration
  ): Promise<IncidentCommunicationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentCommunication(
        param.incidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentCommunication(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Google Meet space for a given incident.
   * @param param The request object
   */
  public createIncidentGoogleMeetSpace(
    param: IncidentsApiCreateIncidentGoogleMeetSpaceRequest,
    options?: Configuration
  ): Promise<IncidentGoogleMeetIntegrationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentGoogleMeetSpace(
        param.incidentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentGoogleMeetSpace(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentImpactResponse> {
    const requestContextPromise = this.requestFactory.createIncidentImpact(
      param.incidentId,
      param.body,
      param.include,
      options
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
   * Create a Jira issue linked to a given incident.
   * @param param The request object
   */
  public createIncidentJiraIssue(
    param: IncidentsApiCreateIncidentJiraIssueRequest,
    options?: Configuration
  ): Promise<IncidentJiraIssueIntegrationResponse> {
    const requestContextPromise = this.requestFactory.createIncidentJiraIssue(
      param.incidentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentJiraIssue(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new incident Jira template for the organization.
   * @param param The request object
   */
  public createIncidentJiraTemplate(
    param: IncidentsApiCreateIncidentJiraTemplateRequest,
    options?: Configuration
  ): Promise<IncidentJiraTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentJiraTemplate(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentJiraTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Microsoft Teams configuration for incidents.
   * @param param The request object
   */
  public createIncidentMicrosoftTeamsConfiguration(
    param: IncidentsApiCreateIncidentMicrosoftTeamsConfigurationRequest,
    options?: Configuration
  ): Promise<IncidentMicrosoftTeamsConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentMicrosoftTeamsConfiguration(
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentMicrosoftTeamsConfiguration(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Microsoft Teams online meeting for a given incident.
   * @param param The request object
   */
  public createIncidentMSTeamsOnlineMeeting(
    param: IncidentsApiCreateIncidentMSTeamsOnlineMeetingRequest,
    options?: Configuration
  ): Promise<IncidentMSTeamsIntegrationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentMSTeamsOnlineMeeting(
        param.incidentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentMSTeamsOnlineMeeting(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.createIncidentNotificationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationTemplate> {
    const requestContextPromise =
      this.requestFactory.createIncidentNotificationTemplate(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentNotificationTemplate(
            responseContext
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
    options?: Configuration
  ): Promise<Attachment> {
    const requestContextPromise =
      this.requestFactory.createIncidentPostmortemAttachment(
        param.incidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentPostmortemAttachment(
            responseContext
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
    options?: Configuration
  ): Promise<PostmortemTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentPostmortemTemplate(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentPostmortemTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new role assignment for an incident.
   * @param param The request object
   */
  public createIncidentRoleAssignment(
    param: IncidentsApiCreateIncidentRoleAssignmentRequest,
    options?: Configuration
  ): Promise<IncidentRoleAssignmentResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentRoleAssignment(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentRoleAssignment(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Statuspage incident linked to a Datadog incident.
   * @param param The request object
   */
  public createIncidentStatuspageIncident(
    param: IncidentsApiCreateIncidentStatuspageIncidentRequest,
    options?: Configuration
  ): Promise<IncidentStatuspageIncidentResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentStatuspageIncident(
        param.incidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentStatuspageIncident(
            responseContext
          );
        });
    });
  }

  /**
   * Publish a status page notice for a given incident.
   * @param param The request object
   */
  public createIncidentStatusPageNotice(
    param: IncidentsApiCreateIncidentStatusPageNoticeRequest,
    options?: Configuration
  ): Promise<IncidentStatusPageNoticeIntegrationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentStatusPageNotice(
        param.incidentId,
        param.statuspageId,
        param.body,
        param.notifySubscribers,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentStatusPageNotice(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new timeline entry for a given incident.
   * @param param The request object
   */
  public createIncidentTimelineEntry(
    param: IncidentsApiCreateIncidentTimelineEntryRequest,
    options?: Configuration
  ): Promise<IncidentTimelineEntryResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentTimelineEntry(
        param.incidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentTimelineEntry(
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
   * Create an incident type.
   * @param param The request object
   */
  public createIncidentType(
    param: IncidentsApiCreateIncidentTypeRequest,
    options?: Configuration
  ): Promise<IncidentTypeResponse> {
    const requestContextPromise = this.requestFactory.createIncidentType(
      param.body,
      options
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
    options?: Configuration
  ): Promise<IncidentUserDefinedFieldResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentUserDefinedField(
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentUserDefinedField(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Zoom configuration for incidents.
   * @param param The request object
   */
  public createIncidentZoomConfiguration(
    param: IncidentsApiCreateIncidentZoomConfigurationRequest,
    options?: Configuration
  ): Promise<IncidentZoomConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.createIncidentZoomConfiguration(
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentZoomConfiguration(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Zoom meeting for a given incident.
   * @param param The request object
   */
  public createIncidentZoomMeeting(
    param: IncidentsApiCreateIncidentZoomMeetingRequest,
    options?: Configuration
  ): Promise<IncidentZoomIntegrationResponse> {
    const requestContextPromise = this.requestFactory.createIncidentZoomMeeting(
      param.incidentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentZoomMeeting(
            responseContext
          );
        });
    });
  }

  /**
   * Create an email subscription for a status page.
   * @param param The request object
   */
  public createStatuspageEmailSubscription(
    param: IncidentsApiCreateStatuspageEmailSubscriptionRequest,
    options?: Configuration
  ): Promise<IncidentStatuspageSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.createStatuspageEmailSubscription(
        param.pageId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStatuspageEmailSubscription(
            responseContext
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
            responseContext
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
   * @param param The request object
   */
  public deleteIncidentAttachment(
    param: IncidentsApiDeleteIncidentAttachmentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentAttachment(
      param.incidentId,
      param.attachmentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentAttachment(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a communication for a given incident.
   * @param param The request object
   */
  public deleteIncidentCommunication(
    param: IncidentsApiDeleteIncidentCommunicationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentCommunication(
        param.incidentId,
        param.communicationId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentCommunication(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentImpact(
      param.incidentId,
      param.impactId,
      options
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
   * Delete an incident Jira template by its identifier.
   * @param param The request object
   */
  public deleteIncidentJiraTemplate(
    param: IncidentsApiDeleteIncidentJiraTemplateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentJiraTemplate(param.templateId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentJiraTemplate(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentNotificationRule(
        param.id,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentNotificationTemplate(
        param.id,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentNotificationTemplate(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentPostmortemTemplate(
        param.templateId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentPostmortemTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a role assignment by its identifier.
   * @param param The request object
   */
  public deleteIncidentRoleAssignment(
    param: IncidentsApiDeleteIncidentRoleAssignmentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentRoleAssignment(
        param.roleAssignmentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentRoleAssignment(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a timeline entry for a given incident.
   * @param param The request object
   */
  public deleteIncidentTimelineEntry(
    param: IncidentsApiDeleteIncidentTimelineEntryRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentTimelineEntry(
        param.incidentId,
        param.timelineEntryId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentTimelineEntry(
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
   * Delete an incident type.
   * @param param The request object
   */
  public deleteIncidentType(
    param: IncidentsApiDeleteIncidentTypeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentType(
      param.incidentTypeId,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIncidentUserDefinedField(
        param.fieldId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentUserDefinedField(
            responseContext
          );
        });
    });
  }

  /**
   * Export incidents matching a search query as a CSV file.
   * @param param The request object
   */
  public exportIncidents(
    param: IncidentsApiExportIncidentsRequest,
    options?: Configuration
  ): Promise<HttpFile> {
    const requestContextPromise = this.requestFactory.exportIncidents(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.exportIncidents(responseContext);
        });
    });
  }

  /**
   * Retrieve global incident settings for the organization.
   * @param param The request object
   */
  public getGlobalIncidentSettings(
    options?: Configuration
  ): Promise<GlobalIncidentSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.getGlobalIncidentSettings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGlobalIncidentSettings(
            responseContext
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
   * Get automation data for a given incident and key.
   * @param param The request object
   */
  public getIncidentAutomationData(
    param: IncidentsApiGetIncidentAutomationDataRequest,
    options?: Configuration
  ): Promise<IncidentAutomationDataResponse> {
    const requestContextPromise = this.requestFactory.getIncidentAutomationData(
      param.incidentId,
      param.key,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentAutomationData(
            responseContext
          );
        });
    });
  }

  /**
   * Get the source link for a case associated with an incident.
   * @param param The request object
   */
  public getIncidentCaseSourceLink(
    param: IncidentsApiGetIncidentCaseSourceLinkRequest,
    options?: Configuration
  ): Promise<IncidentCaseLinkResponse> {
    const requestContextPromise = this.requestFactory.getIncidentCaseSourceLink(
      param.incidentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentCaseSourceLink(
            responseContext
          );
        });
    });
  }

  /**
   * Get the details of a communication for a given incident.
   * @param param The request object
   */
  public getIncidentCommunication(
    param: IncidentsApiGetIncidentCommunicationRequest,
    options?: Configuration
  ): Promise<IncidentCommunicationResponse> {
    const requestContextPromise = this.requestFactory.getIncidentCommunication(
      param.incidentId,
      param.communicationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentCommunication(
            responseContext
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
   * Get the details of an incident Jira template by its identifier.
   * @param param The request object
   */
  public getIncidentJiraTemplate(
    param: IncidentsApiGetIncidentJiraTemplateRequest,
    options?: Configuration
  ): Promise<IncidentJiraTemplateResponse> {
    const requestContextPromise = this.requestFactory.getIncidentJiraTemplate(
      param.templateId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentJiraTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieves a specific notification rule by its ID.
   * @param param The request object
   */
  public getIncidentNotificationRule(
    param: IncidentsApiGetIncidentNotificationRuleRequest,
    options?: Configuration
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.getIncidentNotificationRule(
        param.id,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationTemplate> {
    const requestContextPromise =
      this.requestFactory.getIncidentNotificationTemplate(
        param.id,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentNotificationTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of Datadog incidents attached to a PagerDuty incident.
   * @param param The request object
   */
  public getIncidentPagerdutyRelatedIncidents(
    param: IncidentsApiGetIncidentPagerdutyRelatedIncidentsRequest,
    options?: Configuration
  ): Promise<IncidentPagerdutyRelatedIncidentsResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentPagerdutyRelatedIncidents(
        param.pagerdutyIncidentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentPagerdutyRelatedIncidents(
            responseContext
          );
        });
    });
  }

  /**
   * Get the source link for a page associated with an incident.
   * @param param The request object
   */
  public getIncidentPageSourceLink(
    param: IncidentsApiGetIncidentPageSourceLinkRequest,
    options?: Configuration
  ): Promise<IncidentCaseLinkResponse> {
    const requestContextPromise = this.requestFactory.getIncidentPageSourceLink(
      param.incidentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentPageSourceLink(
            responseContext
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
    options?: Configuration
  ): Promise<PostmortemTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentPostmortemTemplate(
        param.templateId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentPostmortemTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Get the details of a reserved role by its identifier.
   * @param param The request object
   */
  public getIncidentReservedRole(
    param: IncidentsApiGetIncidentReservedRoleRequest,
    options?: Configuration
  ): Promise<IncidentReservedRoleResponse> {
    const requestContextPromise = this.requestFactory.getIncidentReservedRole(
      param.roleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentReservedRole(
            responseContext
          );
        });
    });
  }

  /**
   * Get the details of a role assignment by its identifier.
   * @param param The request object
   */
  public getIncidentRoleAssignment(
    param: IncidentsApiGetIncidentRoleAssignmentRequest,
    options?: Configuration
  ): Promise<IncidentRoleAssignmentResponse> {
    const requestContextPromise = this.requestFactory.getIncidentRoleAssignment(
      param.roleAssignmentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentRoleAssignment(
            responseContext
          );
        });
    });
  }

  /**
   * Get an AI-generated suggestion for a status page notice for a given incident.
   * @param param The request object
   */
  public getIncidentStatusPagesSuggestion(
    param: IncidentsApiGetIncidentStatusPagesSuggestionRequest,
    options?: Configuration
  ): Promise<IncidentStatusPagesSuggestionResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentStatusPagesSuggestion(
        param.incidentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentStatusPagesSuggestion(
            responseContext
          );
        });
    });
  }

  /**
   * Get the thread entries for a given timeline entry.
   * @param param The request object
   */
  public getIncidentTimelineEntryThread(
    param: IncidentsApiGetIncidentTimelineEntryThreadRequest,
    options?: Configuration
  ): Promise<IncidentTimelineThreadResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentTimelineEntryThread(
        param.incidentId,
        param.timelineEntryId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentTimelineEntryThread(
            responseContext
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
   * Get incident type details.
   * @param param The request object
   */
  public getIncidentType(
    param: IncidentsApiGetIncidentTypeRequest,
    options?: Configuration
  ): Promise<IncidentTypeResponse> {
    const requestContextPromise = this.requestFactory.getIncidentType(
      param.incidentTypeId,
      options
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
    options?: Configuration
  ): Promise<IncidentUserDefinedFieldResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentUserDefinedField(
        param.fieldId,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentUserDefinedField(
            responseContext
          );
        });
    });
  }

  /**
   * Get the subscription preferences for the current user.
   * @param param The request object
   */
  public getStatuspageSubscriptionPreferences(
    options?: Configuration
  ): Promise<IncidentStatuspagePreferencesResponse> {
    const requestContextPromise =
      this.requestFactory.getStatuspageSubscriptionPreferences(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStatuspageSubscriptionPreferences(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentImportResponse> {
    const requestContextPromise = this.requestFactory.importIncident(
      param.body,
      param.include,
      options
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
   * Retrieve a list of global incident handles.
   * @param param The request object
   */
  public listGlobalIncidentHandles(
    param: IncidentsApiListGlobalIncidentHandlesRequest = {},
    options?: Configuration
  ): Promise<IncidentHandlesResponse> {
    const requestContextPromise = this.requestFactory.listGlobalIncidentHandles(
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGlobalIncidentHandles(
            responseContext
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
    options?: Configuration
  ): Promise<AttachmentArray> {
    const requestContextPromise = this.requestFactory.listIncidentAttachments(
      param.incidentId,
      param.filterAttachmentType,
      param.include,
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
   * List all communications for a given incident.
   * @param param The request object
   */
  public listIncidentCommunications(
    param: IncidentsApiListIncidentCommunicationsRequest,
    options?: Configuration
  ): Promise<IncidentCommunicationsResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentCommunications(
        param.incidentId,
        param.filterCommunicationType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentCommunications(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentImpactsResponse> {
    const requestContextPromise = this.requestFactory.listIncidentImpacts(
      param.incidentId,
      param.include,
      options
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
   * List all incident Jira templates for the organization.
   * @param param The request object
   */
  public listIncidentJiraTemplates(
    param: IncidentsApiListIncidentJiraTemplatesRequest = {},
    options?: Configuration
  ): Promise<IncidentJiraTemplatesResponse> {
    const requestContextPromise = this.requestFactory.listIncidentJiraTemplates(
      param.isDefault,
      param.incidentTypeId,
      param.templateType,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentJiraTemplates(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationRuleArray> {
    const requestContextPromise =
      this.requestFactory.listIncidentNotificationRules(param.include, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentNotificationRules(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationTemplateArray> {
    const requestContextPromise =
      this.requestFactory.listIncidentNotificationTemplates(
        param.filterIncidentType,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentNotificationTemplates(
            responseContext
          );
        });
    });
  }

  /**
   * List all PagerDuty services configured for the organization.
   * @param param The request object
   */
  public listIncidentPagerdutyServices(
    param: IncidentsApiListIncidentPagerdutyServicesRequest = {},
    options?: Configuration
  ): Promise<IncidentPagerdutyServicesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentPagerdutyServices(
        param.includeUnresolved,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentPagerdutyServices(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a list of all postmortem templates for incidents.
   * @param param The request object
   */
  public listIncidentPostmortemTemplates(
    options?: Configuration
  ): Promise<PostmortemTemplatesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentPostmortemTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentPostmortemTemplates(
            responseContext
          );
        });
    });
  }

  /**
   * List all reserved roles for incidents.
   * @param param The request object
   */
  public listIncidentReservedRoles(
    options?: Configuration
  ): Promise<IncidentReservedRolesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentReservedRoles(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentReservedRoles(
            responseContext
          );
        });
    });
  }

  /**
   * List all rule execution states for a given incident.
   * @param param The request object
   */
  public listIncidentRuleExecutionStates(
    param: IncidentsApiListIncidentRuleExecutionStatesRequest,
    options?: Configuration
  ): Promise<IncidentRuleExecutionStatesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentRuleExecutionStates(
        param.incidentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentRuleExecutionStates(
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
   * List all available template variables for incident templates.
   * @param param The request object
   */
  public listIncidentTemplateVariables(
    param: IncidentsApiListIncidentTemplateVariablesRequest = {},
    options?: Configuration
  ): Promise<IncidentTemplateVariablesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentTemplateVariables(
        param.filterIncidentType,
        param.includeFollowUps,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentTemplateVariables(
            responseContext
          );
        });
    });
  }

  /**
   * Get the timeline for a given incident.
   * @param param The request object
   */
  public listIncidentTimelineEntries(
    param: IncidentsApiListIncidentTimelineEntriesRequest,
    options?: Configuration
  ): Promise<IncidentTimelineEntriesResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentTimelineEntries(
        param.incidentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentTimelineEntries(
            responseContext
          );
        });
    });
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
   * Get all incident types.
   * @param param The request object
   */
  public listIncidentTypes(
    param: IncidentsApiListIncidentTypesRequest = {},
    options?: Configuration
  ): Promise<IncidentTypeListResponse> {
    const requestContextPromise = this.requestFactory.listIncidentTypes(
      param.includeDeleted,
      options
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
    options?: Configuration
  ): Promise<IncidentUserDefinedFieldListResponse> {
    const requestContextPromise =
      this.requestFactory.listIncidentUserDefinedFields(
        param.pageSize,
        param.pageNumber,
        param.includeDeleted,
        param.filterIncidentType,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentUserDefinedFields(
            responseContext
          );
        });
    });
  }

  /**
   * List all email subscriptions for a status page.
   * @param param The request object
   */
  public listStatuspageEmailSubscriptions(
    param: IncidentsApiListStatuspageEmailSubscriptionsRequest,
    options?: Configuration
  ): Promise<IncidentStatuspageSubscriptionsResponse> {
    const requestContextPromise =
      this.requestFactory.listStatuspageEmailSubscriptions(
        param.pageId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listStatuspageEmailSubscriptions(
            responseContext
          );
        });
    });
  }

  /**
   * Partially updates an existing notification rule.
   * @param param The request object
   */
  public patchIncidentNotificationRule(
    param: IncidentsApiPatchIncidentNotificationRuleRequest,
    options?: Configuration
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.patchIncidentNotificationRule(
        param.id,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchIncidentNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Render a template with incident-specific data.
   * @param param The request object
   */
  public renderIncidentTemplate(
    param: IncidentsApiRenderIncidentTemplateRequest,
    options?: Configuration
  ): Promise<IncidentRenderedTemplateResponse> {
    const requestContextPromise = this.requestFactory.renderIncidentTemplate(
      param.incidentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.renderIncidentTemplate(responseContext);
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
   * Search for incidents using advanced filtering and pagination.
   * @param param The request object
   */
  public searchIncidentsV2(
    param: IncidentsApiSearchIncidentsV2Request = {},
    options?: Configuration
  ): Promise<IncidentSearchResponse> {
    const requestContextPromise = this.requestFactory.searchIncidentsV2(
      param.query,
      param.sort,
      param.withFacets,
      param.filterWithDeleted,
      param.semanticQuery,
      param.timeZone,
      param.include,
      param.pageSize,
      param.pageOffset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchIncidentsV2(responseContext);
        });
    });
  }

  /**
   * Update an existing global incident handle.
   * @param param The request object
   */
  public updateGlobalIncidentHandle(
    param: IncidentsApiUpdateGlobalIncidentHandleRequest,
    options?: Configuration
  ): Promise<IncidentHandleResponse> {
    const requestContextPromise =
      this.requestFactory.updateGlobalIncidentHandle(
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGlobalIncidentHandle(
            responseContext
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
    options?: Configuration
  ): Promise<GlobalIncidentSettingsResponse> {
    const requestContextPromise =
      this.requestFactory.updateGlobalIncidentSettings(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGlobalIncidentSettings(
            responseContext
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
   * @param param The request object
   */
  public updateIncidentAttachment(
    param: IncidentsApiUpdateIncidentAttachmentRequest,
    options?: Configuration
  ): Promise<Attachment> {
    const requestContextPromise = this.requestFactory.updateIncidentAttachment(
      param.incidentId,
      param.attachmentId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentAttachment(
            responseContext
          );
        });
    });
  }

  /**
   * Update a communication for a given incident.
   * @param param The request object
   */
  public updateIncidentCommunication(
    param: IncidentsApiUpdateIncidentCommunicationRequest,
    options?: Configuration
  ): Promise<IncidentCommunicationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentCommunication(
        param.incidentId,
        param.communicationId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentCommunication(
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
   * Update an existing incident Jira template.
   * @param param The request object
   */
  public updateIncidentJiraTemplate(
    param: IncidentsApiUpdateIncidentJiraTemplateRequest,
    options?: Configuration
  ): Promise<IncidentJiraTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentJiraTemplate(
        param.templateId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentJiraTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Microsoft Teams configuration for incidents.
   * @param param The request object
   */
  public updateIncidentMicrosoftTeamsConfiguration(
    param: IncidentsApiUpdateIncidentMicrosoftTeamsConfigurationRequest,
    options?: Configuration
  ): Promise<IncidentMicrosoftTeamsConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentMicrosoftTeamsConfiguration(
        param.configurationId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentMicrosoftTeamsConfiguration(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationRule> {
    const requestContextPromise =
      this.requestFactory.updateIncidentNotificationRule(
        param.id,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<IncidentNotificationTemplate> {
    const requestContextPromise =
      this.requestFactory.updateIncidentNotificationTemplate(
        param.id,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentNotificationTemplate(
            responseContext
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
    options?: Configuration
  ): Promise<PostmortemTemplateResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentPostmortemTemplate(
        param.templateId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentPostmortemTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Statuspage incident linked to a Datadog incident.
   * @param param The request object
   */
  public updateIncidentStatuspageIncident(
    param: IncidentsApiUpdateIncidentStatuspageIncidentRequest,
    options?: Configuration
  ): Promise<IncidentStatuspageIncidentResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentStatuspageIncident(
        param.incidentId,
        param.pageId,
        param.statuspageIncidentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentStatuspageIncident(
            responseContext
          );
        });
    });
  }

  /**
   * Update a status page notice for a given incident.
   * @param param The request object
   */
  public updateIncidentStatusPageNotice(
    param: IncidentsApiUpdateIncidentStatusPageNoticeRequest,
    options?: Configuration
  ): Promise<IncidentStatusPageNoticeIntegrationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentStatusPageNotice(
        param.incidentId,
        param.statuspageId,
        param.noticeId,
        param.body,
        param.notifySubscribers,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentStatusPageNotice(
            responseContext
          );
        });
    });
  }

  /**
   * Update a timeline entry for a given incident.
   * @param param The request object
   */
  public updateIncidentTimelineEntry(
    param: IncidentsApiUpdateIncidentTimelineEntryRequest,
    options?: Configuration
  ): Promise<IncidentTimelineEntryResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentTimelineEntry(
        param.incidentId,
        param.timelineEntryId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentTimelineEntry(
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

  /**
   * Update an incident type.
   * @param param The request object
   */
  public updateIncidentType(
    param: IncidentsApiUpdateIncidentTypeRequest,
    options?: Configuration
  ): Promise<IncidentTypeResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentType(
      param.incidentTypeId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<IncidentUserDefinedFieldResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentUserDefinedField(
        param.fieldId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentUserDefinedField(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Zoom configuration for incidents.
   * @param param The request object
   */
  public updateIncidentZoomConfiguration(
    param: IncidentsApiUpdateIncidentZoomConfigurationRequest,
    options?: Configuration
  ): Promise<IncidentZoomConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.updateIncidentZoomConfiguration(
        param.configurationId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentZoomConfiguration(
            responseContext
          );
        });
    });
  }

  /**
   * Create or update automation data for a given incident and key.
   * @param param The request object
   */
  public upsertIncidentAutomationData(
    param: IncidentsApiUpsertIncidentAutomationDataRequest,
    options?: Configuration
  ): Promise<IncidentAutomationDataResponse> {
    const requestContextPromise =
      this.requestFactory.upsertIncidentAutomationData(
        param.incidentId,
        param.key,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertIncidentAutomationData(
            responseContext
          );
        });
    });
  }
}
