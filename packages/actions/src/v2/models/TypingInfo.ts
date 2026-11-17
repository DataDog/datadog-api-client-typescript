import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { APITrigger } from "./APITrigger";
import { APITriggerWrapper } from "./APITriggerWrapper";
import { AWSAssumeRole } from "./AWSAssumeRole";
import { AWSAssumeRoleUpdate } from "./AWSAssumeRoleUpdate";
import { AWSIntegration } from "./AWSIntegration";
import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { ActionConnectionAWSSecretsManager } from "./ActionConnectionAWSSecretsManager";
import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";
import { ActionConnectionAttributes } from "./ActionConnectionAttributes";
import { ActionConnectionAttributesUpdate } from "./ActionConnectionAttributesUpdate";
import { ActionConnectionData } from "./ActionConnectionData";
import { ActionConnectionDataUpdate } from "./ActionConnectionDataUpdate";
import { ActionQuery } from "./ActionQuery";
import { ActionQueryMockedOutputsObject } from "./ActionQueryMockedOutputsObject";
import { ActionQueryProperties } from "./ActionQueryProperties";
import { ActionQuerySpecConnectionGroup } from "./ActionQuerySpecConnectionGroup";
import { ActionQuerySpecObject } from "./ActionQuerySpecObject";
import { AgentTrigger } from "./AgentTrigger";
import { AgentTriggerWrapper } from "./AgentTriggerWrapper";
import { Annotation } from "./Annotation";
import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationDisplayBounds } from "./AnnotationDisplayBounds";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";
import { AnthropicAPIKey } from "./AnthropicAPIKey";
import { AnthropicAPIKeyUpdate } from "./AnthropicAPIKeyUpdate";
import { AnthropicIntegration } from "./AnthropicIntegration";
import { AnthropicIntegrationUpdate } from "./AnthropicIntegrationUpdate";
import { AppBuilderEvent } from "./AppBuilderEvent";
import { AppBuilderListTagsResponse } from "./AppBuilderListTagsResponse";
import { AppKeyRegistrationData } from "./AppKeyRegistrationData";
import { AppMeta } from "./AppMeta";
import { AppRelationship } from "./AppRelationship";
import { AppTriggerWrapper } from "./AppTriggerWrapper";
import { AppVersion } from "./AppVersion";
import { AppVersionAttributes } from "./AppVersionAttributes";
import { AsanaAccessToken } from "./AsanaAccessToken";
import { AsanaAccessTokenUpdate } from "./AsanaAccessTokenUpdate";
import { AsanaIntegration } from "./AsanaIntegration";
import { AsanaIntegrationUpdate } from "./AsanaIntegrationUpdate";
import { AzureIntegration } from "./AzureIntegration";
import { AzureIntegrationUpdate } from "./AzureIntegrationUpdate";
import { AzureTenant } from "./AzureTenant";
import { AzureTenantUpdate } from "./AzureTenantUpdate";
import { BlueprintAttributes } from "./BlueprintAttributes";
import { BlueprintData } from "./BlueprintData";
import { BlueprintMetadataAttributes } from "./BlueprintMetadataAttributes";
import { BlueprintMetadataData } from "./BlueprintMetadataData";
import { BulkDeleteAppsDatastoreItemsRequest } from "./BulkDeleteAppsDatastoreItemsRequest";
import { BulkDeleteAppsDatastoreItemsRequestData } from "./BulkDeleteAppsDatastoreItemsRequestData";
import { BulkDeleteAppsDatastoreItemsRequestDataAttributes } from "./BulkDeleteAppsDatastoreItemsRequestDataAttributes";
import { BulkPutAppsDatastoreItemsRequest } from "./BulkPutAppsDatastoreItemsRequest";
import { BulkPutAppsDatastoreItemsRequestData } from "./BulkPutAppsDatastoreItemsRequestData";
import { BulkPutAppsDatastoreItemsRequestDataAttributes } from "./BulkPutAppsDatastoreItemsRequestDataAttributes";
import { CaseTrigger } from "./CaseTrigger";
import { CaseTriggerWrapper } from "./CaseTriggerWrapper";
import { ChangeEventTriggerWrapper } from "./ChangeEventTriggerWrapper";
import { CircleCIAPIKey } from "./CircleCIAPIKey";
import { CircleCIAPIKeyUpdate } from "./CircleCIAPIKeyUpdate";
import { CircleCIIntegration } from "./CircleCIIntegration";
import { CircleCIIntegrationUpdate } from "./CircleCIIntegrationUpdate";
import { ClickupAPIKey } from "./ClickupAPIKey";
import { ClickupAPIKeyUpdate } from "./ClickupAPIKeyUpdate";
import { ClickupIntegration } from "./ClickupIntegration";
import { ClickupIntegrationUpdate } from "./ClickupIntegrationUpdate";
import { CloneFormData } from "./CloneFormData";
import { CloneFormDataAttributes } from "./CloneFormDataAttributes";
import { CloneFormRequest } from "./CloneFormRequest";
import { CloudflareAPIToken } from "./CloudflareAPIToken";
import { CloudflareAPITokenUpdate } from "./CloudflareAPITokenUpdate";
import { CloudflareGlobalAPIToken } from "./CloudflareGlobalAPIToken";
import { CloudflareGlobalAPITokenUpdate } from "./CloudflareGlobalAPITokenUpdate";
import { CloudflareIntegration } from "./CloudflareIntegration";
import { CloudflareIntegrationUpdate } from "./CloudflareIntegrationUpdate";
import { CompletionCondition } from "./CompletionCondition";
import { CompletionGate } from "./CompletionGate";
import { Component } from "./Component";
import { ComponentGrid } from "./ComponentGrid";
import { ComponentGridProperties } from "./ComponentGridProperties";
import { ComponentProperties } from "./ComponentProperties";
import { ConfigCatIntegration } from "./ConfigCatIntegration";
import { ConfigCatIntegrationUpdate } from "./ConfigCatIntegrationUpdate";
import { ConfigCatSDKKey } from "./ConfigCatSDKKey";
import { ConfigCatSDKKeyUpdate } from "./ConfigCatSDKKeyUpdate";
import { Connection } from "./Connection";
import { ConnectionEnv } from "./ConnectionEnv";
import { ConnectionGroup } from "./ConnectionGroup";
import { CreateActionConnectionRequest } from "./CreateActionConnectionRequest";
import { CreateActionConnectionResponse } from "./CreateActionConnectionResponse";
import { CreateAppRequest } from "./CreateAppRequest";
import { CreateAppRequestData } from "./CreateAppRequestData";
import { CreateAppRequestDataAttributes } from "./CreateAppRequestDataAttributes";
import { CreateAppResponse } from "./CreateAppResponse";
import { CreateAppResponseData } from "./CreateAppResponseData";
import { CreateAppsDatastoreRequest } from "./CreateAppsDatastoreRequest";
import { CreateAppsDatastoreRequestData } from "./CreateAppsDatastoreRequestData";
import { CreateAppsDatastoreRequestDataAttributes } from "./CreateAppsDatastoreRequestDataAttributes";
import { CreateAppsDatastoreResponse } from "./CreateAppsDatastoreResponse";
import { CreateAppsDatastoreResponseData } from "./CreateAppsDatastoreResponseData";
import { CreateFormData } from "./CreateFormData";
import { CreateFormDataAttributes } from "./CreateFormDataAttributes";
import { CreateFormRequest } from "./CreateFormRequest";
import { CreatePublishRequestRequest } from "./CreatePublishRequestRequest";
import { CreatePublishRequestRequestData } from "./CreatePublishRequestRequestData";
import { CreatePublishRequestRequestDataAttributes } from "./CreatePublishRequestRequestDataAttributes";
import { CreateWorkflowRequest } from "./CreateWorkflowRequest";
import { CreateWorkflowResponse } from "./CreateWorkflowResponse";
import { CustomConnection } from "./CustomConnection";
import { CustomConnectionAttributes } from "./CustomConnectionAttributes";
import { CustomConnectionAttributesOnPremRunner } from "./CustomConnectionAttributesOnPremRunner";
import { DashboardTriggerWrapper } from "./DashboardTriggerWrapper";
import { DataTransform } from "./DataTransform";
import { DataTransformProperties } from "./DataTransformProperties";
import { DatabaseMonitoringTriggerWrapper } from "./DatabaseMonitoringTriggerWrapper";
import { DatadogAPIKey } from "./DatadogAPIKey";
import { DatadogAPIKeyUpdate } from "./DatadogAPIKeyUpdate";
import { DatadogIntegration } from "./DatadogIntegration";
import { DatadogIntegrationUpdate } from "./DatadogIntegrationUpdate";
import { Datastore } from "./Datastore";
import { DatastoreArray } from "./DatastoreArray";
import { DatastoreData } from "./DatastoreData";
import { DatastoreDataAttributes } from "./DatastoreDataAttributes";
import { DatastoreTrigger } from "./DatastoreTrigger";
import { DatastoreTriggerWrapper } from "./DatastoreTriggerWrapper";
import { DeleteAppResponse } from "./DeleteAppResponse";
import { DeleteAppResponseData } from "./DeleteAppResponseData";
import { DeleteAppsDatastoreItemRequest } from "./DeleteAppsDatastoreItemRequest";
import { DeleteAppsDatastoreItemRequestData } from "./DeleteAppsDatastoreItemRequestData";
import { DeleteAppsDatastoreItemRequestDataAttributes } from "./DeleteAppsDatastoreItemRequestDataAttributes";
import { DeleteAppsDatastoreItemResponse } from "./DeleteAppsDatastoreItemResponse";
import { DeleteAppsDatastoreItemResponseArray } from "./DeleteAppsDatastoreItemResponseArray";
import { DeleteAppsDatastoreItemResponseData } from "./DeleteAppsDatastoreItemResponseData";
import { DeleteAppsRequest } from "./DeleteAppsRequest";
import { DeleteAppsRequestDataItems } from "./DeleteAppsRequestDataItems";
import { DeleteAppsResponse } from "./DeleteAppsResponse";
import { DeleteAppsResponseDataItems } from "./DeleteAppsResponseDataItems";
import { DeleteFormData } from "./DeleteFormData";
import { DeleteFormResponse } from "./DeleteFormResponse";
import { Deployment } from "./Deployment";
import { DeploymentAttributes } from "./DeploymentAttributes";
import { DeploymentMetadata } from "./DeploymentMetadata";
import { DeploymentRelationship } from "./DeploymentRelationship";
import { DeploymentRelationshipData } from "./DeploymentRelationshipData";
import { ErrorHandler } from "./ErrorHandler";
import { ExecutionLimit } from "./ExecutionLimit";
import { ExecutionPolicyActionPattern } from "./ExecutionPolicyActionPattern";
import { ExecutionPolicyAttributes } from "./ExecutionPolicyAttributes";
import { ExecutionPolicyCreateRequest } from "./ExecutionPolicyCreateRequest";
import { ExecutionPolicyCreateRequestData } from "./ExecutionPolicyCreateRequestData";
import { ExecutionPolicyKubernetesScope } from "./ExecutionPolicyKubernetesScope";
import { ExecutionPolicyKubernetesScopeRule } from "./ExecutionPolicyKubernetesScopeRule";
import { ExecutionPolicyListResponse } from "./ExecutionPolicyListResponse";
import { ExecutionPolicyListResponseMeta } from "./ExecutionPolicyListResponseMeta";
import { ExecutionPolicyListResponsePage } from "./ExecutionPolicyListResponsePage";
import { ExecutionPolicyRemoteActionRshellScope } from "./ExecutionPolicyRemoteActionRshellScope";
import { ExecutionPolicyRemoteActionRshellScopeRule } from "./ExecutionPolicyRemoteActionRshellScopeRule";
import { ExecutionPolicyResponse } from "./ExecutionPolicyResponse";
import { ExecutionPolicyResponseData } from "./ExecutionPolicyResponseData";
import { ExecutionPolicyScope } from "./ExecutionPolicyScope";
import { ExecutionPolicyScriptScope } from "./ExecutionPolicyScriptScope";
import { ExecutionPolicyScriptScopeRule } from "./ExecutionPolicyScriptScopeRule";
import { ExecutionPolicySlackScope } from "./ExecutionPolicySlackScope";
import { ExecutionPolicySlackScopeRule } from "./ExecutionPolicySlackScopeRule";
import { ExecutionPolicyTarget } from "./ExecutionPolicyTarget";
import { ExecutionPolicyUpdateRequest } from "./ExecutionPolicyUpdateRequest";
import { ExecutionPolicyUpdateRequestData } from "./ExecutionPolicyUpdateRequestData";
import { ExecutionPolicyWriteAttributes } from "./ExecutionPolicyWriteAttributes";
import { FastlyAPIKey } from "./FastlyAPIKey";
import { FastlyAPIKeyUpdate } from "./FastlyAPIKeyUpdate";
import { FastlyIntegration } from "./FastlyIntegration";
import { FastlyIntegrationUpdate } from "./FastlyIntegrationUpdate";
import { FormData } from "./FormData";
import { FormDataAttributes } from "./FormDataAttributes";
import { FormDataDefinition } from "./FormDataDefinition";
import { FormDatastoreConfigAttributes } from "./FormDatastoreConfigAttributes";
import { FormPublicationAttributes } from "./FormPublicationAttributes";
import { FormPublicationData } from "./FormPublicationData";
import { FormPublicationResponse } from "./FormPublicationResponse";
import { FormResponse } from "./FormResponse";
import { FormTrigger } from "./FormTrigger";
import { FormTriggerWrapper } from "./FormTriggerWrapper";
import { FormUiDefinition } from "./FormUiDefinition";
import { FormUiDefinitionUiTheme } from "./FormUiDefinitionUiTheme";
import { FormUpdateAttributes } from "./FormUpdateAttributes";
import { FormVersionAttributes } from "./FormVersionAttributes";
import { FormVersionData } from "./FormVersionData";
import { FormVersionResponse } from "./FormVersionResponse";
import { FormsResponse } from "./FormsResponse";
import { FreshserviceAPIKey } from "./FreshserviceAPIKey";
import { FreshserviceAPIKeyUpdate } from "./FreshserviceAPIKeyUpdate";
import { FreshserviceIntegration } from "./FreshserviceIntegration";
import { FreshserviceIntegrationUpdate } from "./FreshserviceIntegrationUpdate";
import { GCPIntegration } from "./GCPIntegration";
import { GCPIntegrationUpdate } from "./GCPIntegrationUpdate";
import { GCPServiceAccount } from "./GCPServiceAccount";
import { GCPServiceAccountUpdate } from "./GCPServiceAccountUpdate";
import { GeminiAPIKey } from "./GeminiAPIKey";
import { GeminiAPIKeyUpdate } from "./GeminiAPIKeyUpdate";
import { GeminiIntegration } from "./GeminiIntegration";
import { GeminiIntegrationUpdate } from "./GeminiIntegrationUpdate";
import { GetActionConnectionResponse } from "./GetActionConnectionResponse";
import { GetAppKeyRegistrationResponse } from "./GetAppKeyRegistrationResponse";
import { GetAppResponse } from "./GetAppResponse";
import { GetAppResponseData } from "./GetAppResponseData";
import { GetAppResponseDataAttributes } from "./GetAppResponseDataAttributes";
import { GetBlueprintResponse } from "./GetBlueprintResponse";
import { GetBlueprintsResponse } from "./GetBlueprintsResponse";
import { GetWorkflowResponse } from "./GetWorkflowResponse";
import { GithubApp } from "./GithubApp";
import { GithubAppUpdate } from "./GithubAppUpdate";
import { GithubIntegration } from "./GithubIntegration";
import { GithubIntegrationUpdate } from "./GithubIntegrationUpdate";
import { GithubPersonalAccessToken } from "./GithubPersonalAccessToken";
import { GithubPersonalAccessTokenUpdate } from "./GithubPersonalAccessTokenUpdate";
import { GithubWebhookTrigger } from "./GithubWebhookTrigger";
import { GithubWebhookTriggerWrapper } from "./GithubWebhookTriggerWrapper";
import { GitlabAPIKey } from "./GitlabAPIKey";
import { GitlabAPIKeyUpdate } from "./GitlabAPIKeyUpdate";
import { GitlabIntegration } from "./GitlabIntegration";
import { GitlabIntegrationUpdate } from "./GitlabIntegrationUpdate";
import { GreyNoiseAPIKey } from "./GreyNoiseAPIKey";
import { GreyNoiseAPIKeyUpdate } from "./GreyNoiseAPIKeyUpdate";
import { GreyNoiseIntegration } from "./GreyNoiseIntegration";
import { GreyNoiseIntegrationUpdate } from "./GreyNoiseIntegrationUpdate";
import { HTTPBody } from "./HTTPBody";
import { HTTPHeader } from "./HTTPHeader";
import { HTTPHeaderUpdate } from "./HTTPHeaderUpdate";
import { HTTPIntegration } from "./HTTPIntegration";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";
import { HTTPToken } from "./HTTPToken";
import { HTTPTokenAuth } from "./HTTPTokenAuth";
import { HTTPTokenAuthUpdate } from "./HTTPTokenAuthUpdate";
import { HTTPTokenResponse } from "./HTTPTokenResponse";
import { HTTPTokenUpdate } from "./HTTPTokenUpdate";
import { IncidentCondition } from "./IncidentCondition";
import { IncidentCreatedTrigger } from "./IncidentCreatedTrigger";
import { IncidentCreatedTriggerWrapper } from "./IncidentCreatedTriggerWrapper";
import { IncidentImpactCreatedTrigger } from "./IncidentImpactCreatedTrigger";
import { IncidentImpactCreatedTriggerWrapper } from "./IncidentImpactCreatedTriggerWrapper";
import { IncidentImpactUpdatedTrigger } from "./IncidentImpactUpdatedTrigger";
import { IncidentImpactUpdatedTriggerWrapper } from "./IncidentImpactUpdatedTriggerWrapper";
import { IncidentPostmortemUpdatedTrigger } from "./IncidentPostmortemUpdatedTrigger";
import { IncidentPostmortemUpdatedTriggerWrapper } from "./IncidentPostmortemUpdatedTriggerWrapper";
import { IncidentResponderCreatedTrigger } from "./IncidentResponderCreatedTrigger";
import { IncidentResponderCreatedTriggerWrapper } from "./IncidentResponderCreatedTriggerWrapper";
import { IncidentSavedTrigger } from "./IncidentSavedTrigger";
import { IncidentSavedTriggerWrapper } from "./IncidentSavedTriggerWrapper";
import { IncidentScheduleTrigger } from "./IncidentScheduleTrigger";
import { IncidentScheduleTriggerWrapper } from "./IncidentScheduleTriggerWrapper";
import { IncidentTagValue } from "./IncidentTagValue";
import { IncidentTrigger } from "./IncidentTrigger";
import { IncidentTriggerWrapper } from "./IncidentTriggerWrapper";
import { InputSchema } from "./InputSchema";
import { InputSchemaParameters } from "./InputSchemaParameters";
import { ItemApiPayload } from "./ItemApiPayload";
import { ItemApiPayloadArray } from "./ItemApiPayloadArray";
import { ItemApiPayloadData } from "./ItemApiPayloadData";
import { ItemApiPayloadDataAttributes } from "./ItemApiPayloadDataAttributes";
import { ItemApiPayloadMeta } from "./ItemApiPayloadMeta";
import { ItemApiPayloadMetaPage } from "./ItemApiPayloadMetaPage";
import { ItemApiPayloadMetaSchema } from "./ItemApiPayloadMetaSchema";
import { ItemApiPayloadMetaSchemaField } from "./ItemApiPayloadMetaSchemaField";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LaunchDarklyAPIKey } from "./LaunchDarklyAPIKey";
import { LaunchDarklyAPIKeyUpdate } from "./LaunchDarklyAPIKeyUpdate";
import { LaunchDarklyIntegration } from "./LaunchDarklyIntegration";
import { LaunchDarklyIntegrationUpdate } from "./LaunchDarklyIntegrationUpdate";
import { ListAppKeyRegistrationsResponse } from "./ListAppKeyRegistrationsResponse";
import { ListAppKeyRegistrationsResponseMeta } from "./ListAppKeyRegistrationsResponseMeta";
import { ListAppVersionsResponse } from "./ListAppVersionsResponse";
import { ListAppsResponse } from "./ListAppsResponse";
import { ListAppsResponseDataItems } from "./ListAppsResponseDataItems";
import { ListAppsResponseDataItemsAttributes } from "./ListAppsResponseDataItemsAttributes";
import { ListAppsResponseDataItemsRelationships } from "./ListAppsResponseDataItemsRelationships";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";
import { ListAppsResponseMetaPage } from "./ListAppsResponseMetaPage";
import { ListBlueprintsResponse } from "./ListBlueprintsResponse";
import { ListWorkflowsResponse } from "./ListWorkflowsResponse";
import { ListWorkflowsResponseMeta } from "./ListWorkflowsResponseMeta";
import { ListWorkflowsResponseMetaPage } from "./ListWorkflowsResponseMetaPage";
import { MonitorTrigger } from "./MonitorTrigger";
import { MonitorTriggerWrapper } from "./MonitorTriggerWrapper";
import { NotebookTriggerWrapper } from "./NotebookTriggerWrapper";
import { NotionAPIKey } from "./NotionAPIKey";
import { NotionAPIKeyUpdate } from "./NotionAPIKeyUpdate";
import { NotionIntegration } from "./NotionIntegration";
import { NotionIntegrationUpdate } from "./NotionIntegrationUpdate";
import { OktaAPIToken } from "./OktaAPIToken";
import { OktaAPITokenUpdate } from "./OktaAPITokenUpdate";
import { OktaIntegration } from "./OktaIntegration";
import { OktaIntegrationUpdate } from "./OktaIntegrationUpdate";
import { OnCallShiftChangeTrigger } from "./OnCallShiftChangeTrigger";
import { OnCallShiftChangeTriggerWrapper } from "./OnCallShiftChangeTriggerWrapper";
import { OnCallTrigger } from "./OnCallTrigger";
import { OnCallTriggerWrapper } from "./OnCallTriggerWrapper";
import { OpenAIAPIKey } from "./OpenAIAPIKey";
import { OpenAIAPIKeyUpdate } from "./OpenAIAPIKeyUpdate";
import { OpenAIIntegration } from "./OpenAIIntegration";
import { OpenAIIntegrationUpdate } from "./OpenAIIntegrationUpdate";
import { OutboundEdge } from "./OutboundEdge";
import { OutputSchema } from "./OutputSchema";
import { OutputSchemaParameters } from "./OutputSchemaParameters";
import { Parameter } from "./Parameter";
import { PublishAppResponse } from "./PublishAppResponse";
import { PublishFormData } from "./PublishFormData";
import { PublishFormDataAttributes } from "./PublishFormDataAttributes";
import { PublishFormRequest } from "./PublishFormRequest";
import { PutAppsDatastoreItemResponseArray } from "./PutAppsDatastoreItemResponseArray";
import { PutAppsDatastoreItemResponseData } from "./PutAppsDatastoreItemResponseData";
import { ReadinessGate } from "./ReadinessGate";
import { RegisterAppKeyResponse } from "./RegisterAppKeyResponse";
import { RetryStrategy } from "./RetryStrategy";
import { RetryStrategyLinear } from "./RetryStrategyLinear";
import { ScheduleTrigger } from "./ScheduleTrigger";
import { ScheduleTriggerWrapper } from "./ScheduleTriggerWrapper";
import { SecurityTrigger } from "./SecurityTrigger";
import { SecurityTriggerWrapper } from "./SecurityTriggerWrapper";
import { SelfServiceTriggerWrapper } from "./SelfServiceTriggerWrapper";
import { SerialExecution } from "./SerialExecution";
import { ServiceNowBasicAuth } from "./ServiceNowBasicAuth";
import { ServiceNowBasicAuthUpdate } from "./ServiceNowBasicAuthUpdate";
import { ServiceNowIntegration } from "./ServiceNowIntegration";
import { ServiceNowIntegrationUpdate } from "./ServiceNowIntegrationUpdate";
import { SlackReactionConfig } from "./SlackReactionConfig";
import { SlackTrigger } from "./SlackTrigger";
import { SlackTriggerWrapper } from "./SlackTriggerWrapper";
import { SoftwareCatalogTriggerWrapper } from "./SoftwareCatalogTriggerWrapper";
import { Spec } from "./Spec";
import { SplitAPIKey } from "./SplitAPIKey";
import { SplitAPIKeyUpdate } from "./SplitAPIKeyUpdate";
import { SplitIntegration } from "./SplitIntegration";
import { SplitIntegrationUpdate } from "./SplitIntegrationUpdate";
import { StateVariable } from "./StateVariable";
import { StateVariableProperties } from "./StateVariableProperties";
import { StatsigAPIKey } from "./StatsigAPIKey";
import { StatsigAPIKeyUpdate } from "./StatsigAPIKeyUpdate";
import { StatsigIntegration } from "./StatsigIntegration";
import { StatsigIntegrationUpdate } from "./StatsigIntegrationUpdate";
import { Step } from "./Step";
import { StepDisplay } from "./StepDisplay";
import { StepDisplayBounds } from "./StepDisplayBounds";
import { TagData } from "./TagData";
import { TriggerRateLimit } from "./TriggerRateLimit";
import { UnpublishAppResponse } from "./UnpublishAppResponse";
import { UpdateActionConnectionRequest } from "./UpdateActionConnectionRequest";
import { UpdateActionConnectionResponse } from "./UpdateActionConnectionResponse";
import { UpdateAppFavoriteRequest } from "./UpdateAppFavoriteRequest";
import { UpdateAppFavoriteRequestData } from "./UpdateAppFavoriteRequestData";
import { UpdateAppFavoriteRequestDataAttributes } from "./UpdateAppFavoriteRequestDataAttributes";
import { UpdateAppProtectionLevelRequest } from "./UpdateAppProtectionLevelRequest";
import { UpdateAppProtectionLevelRequestData } from "./UpdateAppProtectionLevelRequestData";
import { UpdateAppProtectionLevelRequestDataAttributes } from "./UpdateAppProtectionLevelRequestDataAttributes";
import { UpdateAppRequest } from "./UpdateAppRequest";
import { UpdateAppRequestData } from "./UpdateAppRequestData";
import { UpdateAppRequestDataAttributes } from "./UpdateAppRequestDataAttributes";
import { UpdateAppResponse } from "./UpdateAppResponse";
import { UpdateAppResponseData } from "./UpdateAppResponseData";
import { UpdateAppResponseDataAttributes } from "./UpdateAppResponseDataAttributes";
import { UpdateAppSelfServiceRequest } from "./UpdateAppSelfServiceRequest";
import { UpdateAppSelfServiceRequestData } from "./UpdateAppSelfServiceRequestData";
import { UpdateAppSelfServiceRequestDataAttributes } from "./UpdateAppSelfServiceRequestDataAttributes";
import { UpdateAppTagsRequest } from "./UpdateAppTagsRequest";
import { UpdateAppTagsRequestData } from "./UpdateAppTagsRequestData";
import { UpdateAppTagsRequestDataAttributes } from "./UpdateAppTagsRequestDataAttributes";
import { UpdateAppVersionNameRequest } from "./UpdateAppVersionNameRequest";
import { UpdateAppVersionNameRequestData } from "./UpdateAppVersionNameRequestData";
import { UpdateAppVersionNameRequestDataAttributes } from "./UpdateAppVersionNameRequestDataAttributes";
import { UpdateAppsDatastoreItemRequest } from "./UpdateAppsDatastoreItemRequest";
import { UpdateAppsDatastoreItemRequestData } from "./UpdateAppsDatastoreItemRequestData";
import { UpdateAppsDatastoreItemRequestDataAttributes } from "./UpdateAppsDatastoreItemRequestDataAttributes";
import { UpdateAppsDatastoreItemRequestDataAttributesItemChanges } from "./UpdateAppsDatastoreItemRequestDataAttributesItemChanges";
import { UpdateAppsDatastoreRequest } from "./UpdateAppsDatastoreRequest";
import { UpdateAppsDatastoreRequestData } from "./UpdateAppsDatastoreRequestData";
import { UpdateAppsDatastoreRequestDataAttributes } from "./UpdateAppsDatastoreRequestDataAttributes";
import { UpdateFormData } from "./UpdateFormData";
import { UpdateFormDataAttributes } from "./UpdateFormDataAttributes";
import { UpdateFormRequest } from "./UpdateFormRequest";
import { UpdateWorkflowRequest } from "./UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "./UpdateWorkflowResponse";
import { UpsertAndPublishFormVersionData } from "./UpsertAndPublishFormVersionData";
import { UpsertAndPublishFormVersionDataAttributes } from "./UpsertAndPublishFormVersionDataAttributes";
import { UpsertAndPublishFormVersionRequest } from "./UpsertAndPublishFormVersionRequest";
import { UpsertAndPublishFormVersionUpsertParams } from "./UpsertAndPublishFormVersionUpsertParams";
import { UpsertFormVersionData } from "./UpsertFormVersionData";
import { UpsertFormVersionDataAttributes } from "./UpsertFormVersionDataAttributes";
import { UpsertFormVersionRequest } from "./UpsertFormVersionRequest";
import { UpsertFormVersionUpsertParams } from "./UpsertFormVersionUpsertParams";
import { UrlParam } from "./UrlParam";
import { UrlParamUpdate } from "./UrlParamUpdate";
import { VirusTotalAPIKey } from "./VirusTotalAPIKey";
import { VirusTotalAPIKeyUpdate } from "./VirusTotalAPIKeyUpdate";
import { VirusTotalIntegration } from "./VirusTotalIntegration";
import { VirusTotalIntegrationUpdate } from "./VirusTotalIntegrationUpdate";
import { WorkflowData } from "./WorkflowData";
import { WorkflowDataAttributes } from "./WorkflowDataAttributes";
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataUpdate } from "./WorkflowDataUpdate";
import { WorkflowDataUpdateAttributes } from "./WorkflowDataUpdateAttributes";
import { WorkflowInstanceCreateMeta } from "./WorkflowInstanceCreateMeta";
import { WorkflowInstanceCreateRequest } from "./WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "./WorkflowInstanceCreateResponse";
import { WorkflowInstanceCreateResponseData } from "./WorkflowInstanceCreateResponseData";
import { WorkflowInstanceListItem } from "./WorkflowInstanceListItem";
import { WorkflowListInstancesResponse } from "./WorkflowListInstancesResponse";
import { WorkflowListInstancesResponseMeta } from "./WorkflowListInstancesResponseMeta";
import { WorkflowListInstancesResponseMetaPage } from "./WorkflowListInstancesResponseMetaPage";
import { WorkflowListItem } from "./WorkflowListItem";
import { WorkflowListItemAttributes } from "./WorkflowListItemAttributes";
import { WorkflowRunAsInitiator } from "./WorkflowRunAsInitiator";
import { WorkflowRunAsOwner } from "./WorkflowRunAsOwner";
import { WorkflowRunAsServiceAccount } from "./WorkflowRunAsServiceAccount";
import { WorkflowTriggerWrapper } from "./WorkflowTriggerWrapper";
import { WorkflowUserRelationship } from "./WorkflowUserRelationship";
import { WorkflowUserRelationshipData } from "./WorkflowUserRelationshipData";
import { WorklflowCancelInstanceResponse } from "./WorklflowCancelInstanceResponse";
import { WorklflowCancelInstanceResponseData } from "./WorklflowCancelInstanceResponseData";
import { WorklflowGetInstanceResponse } from "./WorklflowGetInstanceResponse";
import { WorklflowGetInstanceResponseData } from "./WorklflowGetInstanceResponseData";
import { WorklflowGetInstanceResponseDataAttributes } from "./WorklflowGetInstanceResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSAssumeRoleType: ["AWSAssumeRole"],
    AWSIntegrationType: ["AWS"],
    ActionConnectionAWSSecretsManagerType: ["aws_secrets_manager"],
    ActionConnectionDataType: ["action_connection"],
    ActionQueryType: ["action"],
    AnthropicAPIKeyType: ["AnthropicAPIKey"],
    AnthropicIntegrationType: ["Anthropic"],
    AppBuilderEventName: [
      "pageChange",
      "tableRowClick",
      "_tableRowButtonClick",
      "change",
      "submit",
      "click",
      "toggleOpen",
      "close",
      "open",
      "executionFinished",
    ],
    AppBuilderEventType: [
      "custom",
      "setComponentState",
      "triggerQuery",
      "openModal",
      "closeModal",
      "openUrl",
      "downloadFile",
      "setStateVariableValue",
    ],
    AppDefinitionType: ["appDefinitions"],
    AppDeploymentType: ["deployment"],
    AppFavoriteType: ["favorites"],
    AppKeyRegistrationDataType: ["app_key_registration"],
    AppProtectionLevel: ["direct_publish", "approval_required"],
    AppProtectionLevelType: ["protectionLevel"],
    AppSelfServiceType: ["selfService"],
    AppTagsType: ["tags"],
    AppVersionNameType: ["versionNames"],
    AppVersionType: ["appVersions"],
    AppsSortField: [
      "name",
      "created_at",
      "updated_at",
      "user_name",
      "-name",
      "-created_at",
      "-updated_at",
      "-user_name",
    ],
    AsanaAccessTokenType: ["AsanaAccessToken"],
    AsanaIntegrationType: ["Asana"],
    AzureIntegrationType: ["Azure"],
    AzureTenantType: ["AzureTenant"],
    BlueprintDataType: ["blueprint"],
    BulkDeleteAppsDatastoreItemsRequestDataType: ["items"],
    CircleCIAPIKeyType: ["CircleCIAPIKey"],
    CircleCIIntegrationType: ["CircleCI"],
    ClickupAPIKeyType: ["ClickupAPIKey"],
    ClickupIntegrationType: ["Clickup"],
    CloudflareAPITokenType: ["CloudflareAPIToken"],
    CloudflareGlobalAPITokenType: ["CloudflareGlobalAPIToken"],
    CloudflareIntegrationType: ["Cloudflare"],
    CompletionConditionOperator: [
      "OPERATOR_EQUAL",
      "OPERATOR_NOT_EQUAL",
      "OPERATOR_GREATER_THAN",
      "OPERATOR_LESS_THAN",
      "OPERATOR_GREATER_THAN_OR_EQUAL_TO",
      "OPERATOR_LESS_THAN_OR_EQUAL_TO",
      "OPERATOR_CONTAINS",
      "OPERATOR_DOES_NOT_CONTAIN",
      "OPERATOR_IS_NULL",
      "OPERATOR_IS_NOT_NULL",
      "OPERATOR_IS_EMPTY",
      "OPERATOR_IS_NOT_EMPTY",
    ],
    ComponentGridType: ["grid"],
    ComponentType: [
      "table",
      "textInput",
      "textArea",
      "button",
      "text",
      "select",
      "modal",
      "schemaForm",
      "checkbox",
      "tabs",
      "vegaChart",
      "radioButtons",
      "numberInput",
      "fileInput",
      "jsonInput",
      "gridCell",
      "dateRangePicker",
      "search",
      "container",
      "calloutValue",
    ],
    ConfigCatIntegrationType: ["ConfigCat"],
    ConfigCatSDKKeyType: ["ConfigCatSDKKey"],
    ConnectionEnvEnv: ["default"],
    CreateAppsDatastoreRequestDataAttributesOrgAccess: [
      "contributor",
      "viewer",
      "manager",
    ],
    CustomConnectionType: ["custom_connections"],
    DataTransformType: ["dataTransform"],
    DatadogAPIKeyType: ["DatadogAPIKey"],
    DatadogIntegrationType: ["Datadog"],
    DatastoreDataType: ["datastores"],
    DatastoreItemConflictMode: ["fail_on_conflict", "overwrite_on_conflict"],
    DatastoreItemsDataType: ["items"],
    DatastorePrimaryKeyGenerationStrategy: ["none", "uuid"],
    ExecutionPolicyEffect: ["allow", "deny"],
    ExecutionPolicyIntegration: [
      "INTEGRATION_KUBERNETES",
      "INTEGRATION_SCRIPT",
      "INTEGRATION_REMOTE_ACTION",
      "INTEGRATION_SLACK",
    ],
    ExecutionPolicyRemoteActionRshellAccess: ["read_only", "read_write"],
    ExecutionPolicyType: ["execution_policy"],
    FastlyAPIKeyType: ["FastlyAPIKey"],
    FastlyIntegrationType: ["Fastly"],
    FormDataDefinitionType: ["object"],
    FormPublicationType: ["form_publications"],
    FormType: ["forms"],
    FormUiDefinitionUiThemePrimaryColor: [
      "gray",
      "red",
      "orange",
      "yellow",
      "green",
      "light-blue",
      "dark-blue",
      "magenta",
      "indigo",
    ],
    FormVersionState: ["draft", "frozen"],
    FormVersionType: ["form_versions"],
    FreshserviceAPIKeyType: ["FreshserviceAPIKey"],
    FreshserviceIntegrationType: ["Freshservice"],
    GCPIntegrationType: ["GCP"],
    GCPServiceAccountCredentialType: ["GCPServiceAccount"],
    GeminiAPIKeyType: ["GeminiAPIKey"],
    GeminiIntegrationType: ["Gemini"],
    GithubAppType: ["GithubApp"],
    GithubIntegrationType: ["Github"],
    GithubPersonalAccessTokenType: ["GithubPersonalAccessToken"],
    GitlabAPIKeyType: ["GitlabAPIKey"],
    GitlabIntegrationType: ["Gitlab"],
    GreyNoiseAPIKeyType: ["GreyNoiseAPIKey"],
    GreyNoiseIntegrationType: ["GreyNoise"],
    HTTPIntegrationType: ["HTTP"],
    HTTPTokenAuthType: ["HTTPTokenAuth"],
    InputSchemaParametersType: [
      "STRING",
      "NUMBER",
      "BOOLEAN",
      "OBJECT",
      "ARRAY_STRING",
      "ARRAY_NUMBER",
      "ARRAY_BOOLEAN",
      "ARRAY_OBJECT",
    ],
    LatestVersionMatchPolicy: ["none", "if_etag_match"],
    LaunchDarklyAPIKeyType: ["LaunchDarklyAPIKey"],
    LaunchDarklyIntegrationType: ["LaunchDarkly"],
    NotionAPIKeyType: ["NotionAPIKey"],
    NotionIntegrationType: ["Notion"],
    OktaAPITokenType: ["OktaAPIToken"],
    OktaIntegrationType: ["Okta"],
    OpenAIAPIKeyType: ["OpenAIAPIKey"],
    OpenAIIntegrationType: ["OpenAI"],
    OutputSchemaParametersType: [
      "STRING",
      "NUMBER",
      "BOOLEAN",
      "OBJECT",
      "ARRAY_STRING",
      "ARRAY_NUMBER",
      "ARRAY_BOOLEAN",
      "ARRAY_OBJECT",
    ],
    PublishRequestType: ["publishRequest"],
    ReadinessGateThresholdType: ["ANY", "ALL"],
    RetryStrategyKind: ["RETRY_STRATEGY_LINEAR"],
    ScheduleTriggerOverlapBehavior: ["EXCLUSIVE_RUN", "OVERLAP_ALLOWED"],
    ServiceNowBasicAuthType: ["ServiceNowBasicAuth"],
    ServiceNowIntegrationType: ["ServiceNow"],
    SplitAPIKeyType: ["SplitAPIKey"],
    SplitIntegrationType: ["Split"],
    StateVariableType: ["stateVariable"],
    StatsigAPIKeyType: ["StatsigAPIKey"],
    StatsigIntegrationType: ["Statsig"],
    TagDataType: ["tag"],
    TokenType: ["SECRET"],
    UpdateAppsDatastoreItemRequestDataType: ["items"],
    VirusTotalAPIKeyType: ["VirusTotalAPIKey"],
    VirusTotalIntegrationType: ["VirusTotal"],
    WorkflowDataType: ["workflows"],
    WorkflowRunAsInitiatorType: ["initiator"],
    WorkflowRunAsOwnerType: ["owner"],
    WorkflowRunAsServiceAccountType: ["service_account"],
    WorkflowRunAsUserMode: ["owner", "service_account", "initiator"],
    WorkflowUserRelationshipType: ["users"],
  },
  oneOfMap: {
    AWSCredentials: ["AWSAssumeRole"],
    AWSCredentialsUpdate: ["AWSAssumeRoleUpdate"],
    ActionConnectionIntegration: [
      "AWSIntegration",
      "AnthropicIntegration",
      "AsanaIntegration",
      "AzureIntegration",
      "CircleCIIntegration",
      "ClickupIntegration",
      "CloudflareIntegration",
      "ConfigCatIntegration",
      "DatadogIntegration",
      "FastlyIntegration",
      "FreshserviceIntegration",
      "GCPIntegration",
      "GeminiIntegration",
      "GithubIntegration",
      "GitlabIntegration",
      "GreyNoiseIntegration",
      "HTTPIntegration",
      "LaunchDarklyIntegration",
      "NotionIntegration",
      "OktaIntegration",
      "OpenAIIntegration",
      "ServiceNowIntegration",
      "SplitIntegration",
      "StatsigIntegration",
      "VirusTotalIntegration",
    ],
    ActionConnectionIntegrationUpdate: [
      "AWSIntegrationUpdate",
      "AnthropicIntegrationUpdate",
      "AsanaIntegrationUpdate",
      "AzureIntegrationUpdate",
      "CircleCIIntegrationUpdate",
      "ClickupIntegrationUpdate",
      "CloudflareIntegrationUpdate",
      "ConfigCatIntegrationUpdate",
      "DatadogIntegrationUpdate",
      "FastlyIntegrationUpdate",
      "FreshserviceIntegrationUpdate",
      "GCPIntegrationUpdate",
      "GeminiIntegrationUpdate",
      "GithubIntegrationUpdate",
      "GitlabIntegrationUpdate",
      "GreyNoiseIntegrationUpdate",
      "HTTPIntegrationUpdate",
      "LaunchDarklyIntegrationUpdate",
      "NotionIntegrationUpdate",
      "OktaIntegrationUpdate",
      "OpenAIIntegrationUpdate",
      "ServiceNowIntegrationUpdate",
      "SplitIntegrationUpdate",
      "StatsigIntegrationUpdate",
      "VirusTotalIntegrationUpdate",
    ],
    ActionQueryCondition: ["boolean", "string"],
    ActionQueryDebounceInMs: ["number", "string"],
    ActionQueryMockedOutputs: ["string", "ActionQueryMockedOutputsObject"],
    ActionQueryMockedOutputsEnabled: ["boolean", "string"],
    ActionQueryOnlyTriggerManually: ["boolean", "string"],
    ActionQueryPollingIntervalInMs: ["number", "string"],
    ActionQueryRequiresConfirmation: ["boolean", "string"],
    ActionQueryShowToastOnError: ["boolean", "string"],
    ActionQuerySpec: ["string", "ActionQuerySpecObject"],
    ActionQuerySpecInputs: ["string", "{ [key: string]: any; }"],
    AnthropicAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    AnthropicAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    AnthropicCredentials: ["AnthropicAPIKey"],
    AnthropicCredentialsUpdate: ["AnthropicAPIKeyUpdate"],
    AsanaAccessTokenAccessToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    AsanaAccessTokenUpdateAccessToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    AsanaCredentials: ["AsanaAccessToken"],
    AsanaCredentialsUpdate: ["AsanaAccessTokenUpdate"],
    AzureCredentials: ["AzureTenant"],
    AzureCredentialsUpdate: ["AzureTenantUpdate"],
    CircleCIAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CircleCIAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CircleCICredentials: ["CircleCIAPIKey"],
    CircleCICredentialsUpdate: ["CircleCIAPIKeyUpdate"],
    ClickupAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ClickupAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ClickupCredentials: ["ClickupAPIKey"],
    ClickupCredentialsUpdate: ["ClickupAPIKeyUpdate"],
    CloudflareAPITokenApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CloudflareAPITokenUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CloudflareCredentials: ["CloudflareAPIToken", "CloudflareGlobalAPIToken"],
    CloudflareCredentialsUpdate: [
      "CloudflareAPITokenUpdate",
      "CloudflareGlobalAPITokenUpdate",
    ],
    CloudflareGlobalAPITokenAuthEmail: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CloudflareGlobalAPITokenGlobalApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CloudflareGlobalAPITokenUpdateAuthEmail: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    CloudflareGlobalAPITokenUpdateGlobalApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ComponentGridPropertiesIsVisible: ["string", "boolean"],
    ComponentPropertiesIsVisible: ["boolean", "string"],
    ConfigCatCredentials: ["ConfigCatSDKKey"],
    ConfigCatCredentialsUpdate: ["ConfigCatSDKKeyUpdate"],
    ConfigCatSDKKeyApiPassword: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ConfigCatSDKKeyApiUsername: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ConfigCatSDKKeySdkKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ConfigCatSDKKeyUpdateApiPassword: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ConfigCatSDKKeyUpdateApiUsername: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ConfigCatSDKKeyUpdateSdkKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeyAppKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeyDatacenter: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeySubdomain: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeyUpdateAppKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogAPIKeyUpdateDatacenter: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    DatadogCredentials: ["DatadogAPIKey"],
    DatadogCredentialsUpdate: ["DatadogAPIKeyUpdate"],
    FastlyAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    FastlyAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    FastlyCredentials: ["FastlyAPIKey"],
    FastlyCredentialsUpdate: ["FastlyAPIKeyUpdate"],
    FreshserviceAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    FreshserviceAPIKeyDomain: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    FreshserviceAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    FreshserviceAPIKeyUpdateDomain: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    FreshserviceCredentials: ["FreshserviceAPIKey"],
    FreshserviceCredentialsUpdate: ["FreshserviceAPIKeyUpdate"],
    GCPCredentials: ["GCPServiceAccount"],
    GCPCredentialsUpdate: ["GCPServiceAccountUpdate"],
    GCPServiceAccountPrivateKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GCPServiceAccountServiceAccountEmail: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GCPServiceAccountUpdatePrivateKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GCPServiceAccountUpdateServiceAccountEmail: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GeminiAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GeminiAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GeminiCredentials: ["GeminiAPIKey"],
    GeminiCredentialsUpdate: ["GeminiAPIKeyUpdate"],
    GithubAppGithubAppId: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubAppGithubInstallationId: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubAppHostname: ["string", "ActionConnectionAWSSecretsManagerReference"],
    GithubAppPrivateKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubAppUpdateGithubAppId: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubAppUpdateGithubInstallationId: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubAppUpdateHostname: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubAppUpdatePrivateKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubCredentials: ["GithubApp", "GithubPersonalAccessToken"],
    GithubCredentialsUpdate: [
      "GithubAppUpdate",
      "GithubPersonalAccessTokenUpdate",
    ],
    GithubPersonalAccessTokenAccessToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubPersonalAccessTokenHostname: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubPersonalAccessTokenUpdateAccessToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GithubPersonalAccessTokenUpdateHostname: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GitlabAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GitlabAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GitlabCredentials: ["GitlabAPIKey"],
    GitlabCredentialsUpdate: ["GitlabAPIKeyUpdate"],
    GreyNoiseAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GreyNoiseAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    GreyNoiseCredentials: ["GreyNoiseAPIKey"],
    GreyNoiseCredentialsUpdate: ["GreyNoiseAPIKeyUpdate"],
    HTTPCredentials: ["HTTPTokenAuth"],
    HTTPCredentialsUpdate: ["HTTPTokenAuthUpdate"],
    HTTPTokenResponseValue: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    HTTPTokenValue: ["string", "ActionConnectionAWSSecretsManagerReference"],
    LaunchDarklyAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    LaunchDarklyAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    LaunchDarklyCredentials: ["LaunchDarklyAPIKey"],
    LaunchDarklyCredentialsUpdate: ["LaunchDarklyAPIKeyUpdate"],
    NotionAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    NotionAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    NotionCredentials: ["NotionAPIKey"],
    NotionCredentialsUpdate: ["NotionAPIKeyUpdate"],
    OktaAPITokenApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    OktaAPITokenDomain: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    OktaAPITokenUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    OktaAPITokenUpdateDomain: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    OktaCredentials: ["OktaAPIToken"],
    OktaCredentialsUpdate: ["OktaAPITokenUpdate"],
    OpenAIAPIKeyApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    OpenAIAPIKeyUpdateApiToken: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    OpenAICredentials: ["OpenAIAPIKey"],
    OpenAICredentialsUpdate: ["OpenAIAPIKeyUpdate"],
    Query: ["ActionQuery", "DataTransform", "StateVariable"],
    ServiceNowBasicAuthInstance: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ServiceNowBasicAuthPassword: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ServiceNowBasicAuthUpdateInstance: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ServiceNowBasicAuthUpdatePassword: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ServiceNowBasicAuthUpdateUsername: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ServiceNowBasicAuthUsername: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    ServiceNowCredentials: ["ServiceNowBasicAuth"],
    ServiceNowCredentialsUpdate: ["ServiceNowBasicAuthUpdate"],
    SplitAPIKeyApiKey: ["string", "ActionConnectionAWSSecretsManagerReference"],
    SplitAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    SplitCredentials: ["SplitAPIKey"],
    SplitCredentialsUpdate: ["SplitAPIKeyUpdate"],
    StatsigAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    StatsigAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    StatsigCredentials: ["StatsigAPIKey"],
    StatsigCredentialsUpdate: ["StatsigAPIKeyUpdate"],
    Trigger: [
      "AgentTriggerWrapper",
      "APITriggerWrapper",
      "AppTriggerWrapper",
      "CaseTriggerWrapper",
      "ChangeEventTriggerWrapper",
      "DatabaseMonitoringTriggerWrapper",
      "DatastoreTriggerWrapper",
      "DashboardTriggerWrapper",
      "FormTriggerWrapper",
      "GithubWebhookTriggerWrapper",
      "IncidentCreatedTriggerWrapper",
      "IncidentImpactCreatedTriggerWrapper",
      "IncidentImpactUpdatedTriggerWrapper",
      "IncidentPostmortemUpdatedTriggerWrapper",
      "IncidentResponderCreatedTriggerWrapper",
      "IncidentSavedTriggerWrapper",
      "IncidentScheduleTriggerWrapper",
      "IncidentTriggerWrapper",
      "MonitorTriggerWrapper",
      "NotebookTriggerWrapper",
      "OnCallShiftChangeTriggerWrapper",
      "OnCallTriggerWrapper",
      "ScheduleTriggerWrapper",
      "SecurityTriggerWrapper",
      "SelfServiceTriggerWrapper",
      "SlackTriggerWrapper",
      "SoftwareCatalogTriggerWrapper",
      "WorkflowTriggerWrapper",
    ],
    VirusTotalAPIKeyApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    VirusTotalAPIKeyUpdateApiKey: [
      "string",
      "ActionConnectionAWSSecretsManagerReference",
    ],
    VirusTotalCredentials: ["VirusTotalAPIKey"],
    VirusTotalCredentialsUpdate: ["VirusTotalAPIKeyUpdate"],
    WorkflowRunAs: [
      "WorkflowRunAsOwner",
      "WorkflowRunAsServiceAccount",
      "WorkflowRunAsInitiator",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    APITrigger: APITrigger,
    APITriggerWrapper: APITriggerWrapper,
    AWSAssumeRole: AWSAssumeRole,
    AWSAssumeRoleUpdate: AWSAssumeRoleUpdate,
    AWSIntegration: AWSIntegration,
    AWSIntegrationUpdate: AWSIntegrationUpdate,
    ActionConnectionAWSSecretsManager: ActionConnectionAWSSecretsManager,
    ActionConnectionAWSSecretsManagerReference:
      ActionConnectionAWSSecretsManagerReference,
    ActionConnectionAttributes: ActionConnectionAttributes,
    ActionConnectionAttributesUpdate: ActionConnectionAttributesUpdate,
    ActionConnectionData: ActionConnectionData,
    ActionConnectionDataUpdate: ActionConnectionDataUpdate,
    ActionQuery: ActionQuery,
    ActionQueryMockedOutputsObject: ActionQueryMockedOutputsObject,
    ActionQueryProperties: ActionQueryProperties,
    ActionQuerySpecConnectionGroup: ActionQuerySpecConnectionGroup,
    ActionQuerySpecObject: ActionQuerySpecObject,
    AgentTrigger: AgentTrigger,
    AgentTriggerWrapper: AgentTriggerWrapper,
    Annotation: Annotation,
    AnnotationDisplay: AnnotationDisplay,
    AnnotationDisplayBounds: AnnotationDisplayBounds,
    AnnotationMarkdownTextAnnotation: AnnotationMarkdownTextAnnotation,
    AnthropicAPIKey: AnthropicAPIKey,
    AnthropicAPIKeyUpdate: AnthropicAPIKeyUpdate,
    AnthropicIntegration: AnthropicIntegration,
    AnthropicIntegrationUpdate: AnthropicIntegrationUpdate,
    AppBuilderEvent: AppBuilderEvent,
    AppBuilderListTagsResponse: AppBuilderListTagsResponse,
    AppKeyRegistrationData: AppKeyRegistrationData,
    AppMeta: AppMeta,
    AppRelationship: AppRelationship,
    AppTriggerWrapper: AppTriggerWrapper,
    AppVersion: AppVersion,
    AppVersionAttributes: AppVersionAttributes,
    AsanaAccessToken: AsanaAccessToken,
    AsanaAccessTokenUpdate: AsanaAccessTokenUpdate,
    AsanaIntegration: AsanaIntegration,
    AsanaIntegrationUpdate: AsanaIntegrationUpdate,
    AzureIntegration: AzureIntegration,
    AzureIntegrationUpdate: AzureIntegrationUpdate,
    AzureTenant: AzureTenant,
    AzureTenantUpdate: AzureTenantUpdate,
    BlueprintAttributes: BlueprintAttributes,
    BlueprintData: BlueprintData,
    BlueprintMetadataAttributes: BlueprintMetadataAttributes,
    BlueprintMetadataData: BlueprintMetadataData,
    BulkDeleteAppsDatastoreItemsRequest: BulkDeleteAppsDatastoreItemsRequest,
    BulkDeleteAppsDatastoreItemsRequestData:
      BulkDeleteAppsDatastoreItemsRequestData,
    BulkDeleteAppsDatastoreItemsRequestDataAttributes:
      BulkDeleteAppsDatastoreItemsRequestDataAttributes,
    BulkPutAppsDatastoreItemsRequest: BulkPutAppsDatastoreItemsRequest,
    BulkPutAppsDatastoreItemsRequestData: BulkPutAppsDatastoreItemsRequestData,
    BulkPutAppsDatastoreItemsRequestDataAttributes:
      BulkPutAppsDatastoreItemsRequestDataAttributes,
    CaseTrigger: CaseTrigger,
    CaseTriggerWrapper: CaseTriggerWrapper,
    ChangeEventTriggerWrapper: ChangeEventTriggerWrapper,
    CircleCIAPIKey: CircleCIAPIKey,
    CircleCIAPIKeyUpdate: CircleCIAPIKeyUpdate,
    CircleCIIntegration: CircleCIIntegration,
    CircleCIIntegrationUpdate: CircleCIIntegrationUpdate,
    ClickupAPIKey: ClickupAPIKey,
    ClickupAPIKeyUpdate: ClickupAPIKeyUpdate,
    ClickupIntegration: ClickupIntegration,
    ClickupIntegrationUpdate: ClickupIntegrationUpdate,
    CloneFormData: CloneFormData,
    CloneFormDataAttributes: CloneFormDataAttributes,
    CloneFormRequest: CloneFormRequest,
    CloudflareAPIToken: CloudflareAPIToken,
    CloudflareAPITokenUpdate: CloudflareAPITokenUpdate,
    CloudflareGlobalAPIToken: CloudflareGlobalAPIToken,
    CloudflareGlobalAPITokenUpdate: CloudflareGlobalAPITokenUpdate,
    CloudflareIntegration: CloudflareIntegration,
    CloudflareIntegrationUpdate: CloudflareIntegrationUpdate,
    CompletionCondition: CompletionCondition,
    CompletionGate: CompletionGate,
    Component: Component,
    ComponentGrid: ComponentGrid,
    ComponentGridProperties: ComponentGridProperties,
    ComponentProperties: ComponentProperties,
    ConfigCatIntegration: ConfigCatIntegration,
    ConfigCatIntegrationUpdate: ConfigCatIntegrationUpdate,
    ConfigCatSDKKey: ConfigCatSDKKey,
    ConfigCatSDKKeyUpdate: ConfigCatSDKKeyUpdate,
    Connection: Connection,
    ConnectionEnv: ConnectionEnv,
    ConnectionGroup: ConnectionGroup,
    CreateActionConnectionRequest: CreateActionConnectionRequest,
    CreateActionConnectionResponse: CreateActionConnectionResponse,
    CreateAppRequest: CreateAppRequest,
    CreateAppRequestData: CreateAppRequestData,
    CreateAppRequestDataAttributes: CreateAppRequestDataAttributes,
    CreateAppResponse: CreateAppResponse,
    CreateAppResponseData: CreateAppResponseData,
    CreateAppsDatastoreRequest: CreateAppsDatastoreRequest,
    CreateAppsDatastoreRequestData: CreateAppsDatastoreRequestData,
    CreateAppsDatastoreRequestDataAttributes:
      CreateAppsDatastoreRequestDataAttributes,
    CreateAppsDatastoreResponse: CreateAppsDatastoreResponse,
    CreateAppsDatastoreResponseData: CreateAppsDatastoreResponseData,
    CreateFormData: CreateFormData,
    CreateFormDataAttributes: CreateFormDataAttributes,
    CreateFormRequest: CreateFormRequest,
    CreatePublishRequestRequest: CreatePublishRequestRequest,
    CreatePublishRequestRequestData: CreatePublishRequestRequestData,
    CreatePublishRequestRequestDataAttributes:
      CreatePublishRequestRequestDataAttributes,
    CreateWorkflowRequest: CreateWorkflowRequest,
    CreateWorkflowResponse: CreateWorkflowResponse,
    CustomConnection: CustomConnection,
    CustomConnectionAttributes: CustomConnectionAttributes,
    CustomConnectionAttributesOnPremRunner:
      CustomConnectionAttributesOnPremRunner,
    DashboardTriggerWrapper: DashboardTriggerWrapper,
    DataTransform: DataTransform,
    DataTransformProperties: DataTransformProperties,
    DatabaseMonitoringTriggerWrapper: DatabaseMonitoringTriggerWrapper,
    DatadogAPIKey: DatadogAPIKey,
    DatadogAPIKeyUpdate: DatadogAPIKeyUpdate,
    DatadogIntegration: DatadogIntegration,
    DatadogIntegrationUpdate: DatadogIntegrationUpdate,
    Datastore: Datastore,
    DatastoreArray: DatastoreArray,
    DatastoreData: DatastoreData,
    DatastoreDataAttributes: DatastoreDataAttributes,
    DatastoreTrigger: DatastoreTrigger,
    DatastoreTriggerWrapper: DatastoreTriggerWrapper,
    DeleteAppResponse: DeleteAppResponse,
    DeleteAppResponseData: DeleteAppResponseData,
    DeleteAppsDatastoreItemRequest: DeleteAppsDatastoreItemRequest,
    DeleteAppsDatastoreItemRequestData: DeleteAppsDatastoreItemRequestData,
    DeleteAppsDatastoreItemRequestDataAttributes:
      DeleteAppsDatastoreItemRequestDataAttributes,
    DeleteAppsDatastoreItemResponse: DeleteAppsDatastoreItemResponse,
    DeleteAppsDatastoreItemResponseArray: DeleteAppsDatastoreItemResponseArray,
    DeleteAppsDatastoreItemResponseData: DeleteAppsDatastoreItemResponseData,
    DeleteAppsRequest: DeleteAppsRequest,
    DeleteAppsRequestDataItems: DeleteAppsRequestDataItems,
    DeleteAppsResponse: DeleteAppsResponse,
    DeleteAppsResponseDataItems: DeleteAppsResponseDataItems,
    DeleteFormData: DeleteFormData,
    DeleteFormResponse: DeleteFormResponse,
    Deployment: Deployment,
    DeploymentAttributes: DeploymentAttributes,
    DeploymentMetadata: DeploymentMetadata,
    DeploymentRelationship: DeploymentRelationship,
    DeploymentRelationshipData: DeploymentRelationshipData,
    ErrorHandler: ErrorHandler,
    ExecutionLimit: ExecutionLimit,
    ExecutionPolicyActionPattern: ExecutionPolicyActionPattern,
    ExecutionPolicyAttributes: ExecutionPolicyAttributes,
    ExecutionPolicyCreateRequest: ExecutionPolicyCreateRequest,
    ExecutionPolicyCreateRequestData: ExecutionPolicyCreateRequestData,
    ExecutionPolicyKubernetesScope: ExecutionPolicyKubernetesScope,
    ExecutionPolicyKubernetesScopeRule: ExecutionPolicyKubernetesScopeRule,
    ExecutionPolicyListResponse: ExecutionPolicyListResponse,
    ExecutionPolicyListResponseMeta: ExecutionPolicyListResponseMeta,
    ExecutionPolicyListResponsePage: ExecutionPolicyListResponsePage,
    ExecutionPolicyRemoteActionRshellScope:
      ExecutionPolicyRemoteActionRshellScope,
    ExecutionPolicyRemoteActionRshellScopeRule:
      ExecutionPolicyRemoteActionRshellScopeRule,
    ExecutionPolicyResponse: ExecutionPolicyResponse,
    ExecutionPolicyResponseData: ExecutionPolicyResponseData,
    ExecutionPolicyScope: ExecutionPolicyScope,
    ExecutionPolicyScriptScope: ExecutionPolicyScriptScope,
    ExecutionPolicyScriptScopeRule: ExecutionPolicyScriptScopeRule,
    ExecutionPolicySlackScope: ExecutionPolicySlackScope,
    ExecutionPolicySlackScopeRule: ExecutionPolicySlackScopeRule,
    ExecutionPolicyTarget: ExecutionPolicyTarget,
    ExecutionPolicyUpdateRequest: ExecutionPolicyUpdateRequest,
    ExecutionPolicyUpdateRequestData: ExecutionPolicyUpdateRequestData,
    ExecutionPolicyWriteAttributes: ExecutionPolicyWriteAttributes,
    FastlyAPIKey: FastlyAPIKey,
    FastlyAPIKeyUpdate: FastlyAPIKeyUpdate,
    FastlyIntegration: FastlyIntegration,
    FastlyIntegrationUpdate: FastlyIntegrationUpdate,
    FormData: FormData,
    FormDataAttributes: FormDataAttributes,
    FormDataDefinition: FormDataDefinition,
    FormDatastoreConfigAttributes: FormDatastoreConfigAttributes,
    FormPublicationAttributes: FormPublicationAttributes,
    FormPublicationData: FormPublicationData,
    FormPublicationResponse: FormPublicationResponse,
    FormResponse: FormResponse,
    FormTrigger: FormTrigger,
    FormTriggerWrapper: FormTriggerWrapper,
    FormUiDefinition: FormUiDefinition,
    FormUiDefinitionUiTheme: FormUiDefinitionUiTheme,
    FormUpdateAttributes: FormUpdateAttributes,
    FormVersionAttributes: FormVersionAttributes,
    FormVersionData: FormVersionData,
    FormVersionResponse: FormVersionResponse,
    FormsResponse: FormsResponse,
    FreshserviceAPIKey: FreshserviceAPIKey,
    FreshserviceAPIKeyUpdate: FreshserviceAPIKeyUpdate,
    FreshserviceIntegration: FreshserviceIntegration,
    FreshserviceIntegrationUpdate: FreshserviceIntegrationUpdate,
    GCPIntegration: GCPIntegration,
    GCPIntegrationUpdate: GCPIntegrationUpdate,
    GCPServiceAccount: GCPServiceAccount,
    GCPServiceAccountUpdate: GCPServiceAccountUpdate,
    GeminiAPIKey: GeminiAPIKey,
    GeminiAPIKeyUpdate: GeminiAPIKeyUpdate,
    GeminiIntegration: GeminiIntegration,
    GeminiIntegrationUpdate: GeminiIntegrationUpdate,
    GetActionConnectionResponse: GetActionConnectionResponse,
    GetAppKeyRegistrationResponse: GetAppKeyRegistrationResponse,
    GetAppResponse: GetAppResponse,
    GetAppResponseData: GetAppResponseData,
    GetAppResponseDataAttributes: GetAppResponseDataAttributes,
    GetBlueprintResponse: GetBlueprintResponse,
    GetBlueprintsResponse: GetBlueprintsResponse,
    GetWorkflowResponse: GetWorkflowResponse,
    GithubApp: GithubApp,
    GithubAppUpdate: GithubAppUpdate,
    GithubIntegration: GithubIntegration,
    GithubIntegrationUpdate: GithubIntegrationUpdate,
    GithubPersonalAccessToken: GithubPersonalAccessToken,
    GithubPersonalAccessTokenUpdate: GithubPersonalAccessTokenUpdate,
    GithubWebhookTrigger: GithubWebhookTrigger,
    GithubWebhookTriggerWrapper: GithubWebhookTriggerWrapper,
    GitlabAPIKey: GitlabAPIKey,
    GitlabAPIKeyUpdate: GitlabAPIKeyUpdate,
    GitlabIntegration: GitlabIntegration,
    GitlabIntegrationUpdate: GitlabIntegrationUpdate,
    GreyNoiseAPIKey: GreyNoiseAPIKey,
    GreyNoiseAPIKeyUpdate: GreyNoiseAPIKeyUpdate,
    GreyNoiseIntegration: GreyNoiseIntegration,
    GreyNoiseIntegrationUpdate: GreyNoiseIntegrationUpdate,
    HTTPBody: HTTPBody,
    HTTPHeader: HTTPHeader,
    HTTPHeaderUpdate: HTTPHeaderUpdate,
    HTTPIntegration: HTTPIntegration,
    HTTPIntegrationUpdate: HTTPIntegrationUpdate,
    HTTPToken: HTTPToken,
    HTTPTokenAuth: HTTPTokenAuth,
    HTTPTokenAuthUpdate: HTTPTokenAuthUpdate,
    HTTPTokenResponse: HTTPTokenResponse,
    HTTPTokenUpdate: HTTPTokenUpdate,
    IncidentCondition: IncidentCondition,
    IncidentCreatedTrigger: IncidentCreatedTrigger,
    IncidentCreatedTriggerWrapper: IncidentCreatedTriggerWrapper,
    IncidentImpactCreatedTrigger: IncidentImpactCreatedTrigger,
    IncidentImpactCreatedTriggerWrapper: IncidentImpactCreatedTriggerWrapper,
    IncidentImpactUpdatedTrigger: IncidentImpactUpdatedTrigger,
    IncidentImpactUpdatedTriggerWrapper: IncidentImpactUpdatedTriggerWrapper,
    IncidentPostmortemUpdatedTrigger: IncidentPostmortemUpdatedTrigger,
    IncidentPostmortemUpdatedTriggerWrapper:
      IncidentPostmortemUpdatedTriggerWrapper,
    IncidentResponderCreatedTrigger: IncidentResponderCreatedTrigger,
    IncidentResponderCreatedTriggerWrapper:
      IncidentResponderCreatedTriggerWrapper,
    IncidentSavedTrigger: IncidentSavedTrigger,
    IncidentSavedTriggerWrapper: IncidentSavedTriggerWrapper,
    IncidentScheduleTrigger: IncidentScheduleTrigger,
    IncidentScheduleTriggerWrapper: IncidentScheduleTriggerWrapper,
    IncidentTagValue: IncidentTagValue,
    IncidentTrigger: IncidentTrigger,
    IncidentTriggerWrapper: IncidentTriggerWrapper,
    InputSchema: InputSchema,
    InputSchemaParameters: InputSchemaParameters,
    ItemApiPayload: ItemApiPayload,
    ItemApiPayloadArray: ItemApiPayloadArray,
    ItemApiPayloadData: ItemApiPayloadData,
    ItemApiPayloadDataAttributes: ItemApiPayloadDataAttributes,
    ItemApiPayloadMeta: ItemApiPayloadMeta,
    ItemApiPayloadMetaPage: ItemApiPayloadMetaPage,
    ItemApiPayloadMetaSchema: ItemApiPayloadMetaSchema,
    ItemApiPayloadMetaSchemaField: ItemApiPayloadMetaSchemaField,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LaunchDarklyAPIKey: LaunchDarklyAPIKey,
    LaunchDarklyAPIKeyUpdate: LaunchDarklyAPIKeyUpdate,
    LaunchDarklyIntegration: LaunchDarklyIntegration,
    LaunchDarklyIntegrationUpdate: LaunchDarklyIntegrationUpdate,
    ListAppKeyRegistrationsResponse: ListAppKeyRegistrationsResponse,
    ListAppKeyRegistrationsResponseMeta: ListAppKeyRegistrationsResponseMeta,
    ListAppVersionsResponse: ListAppVersionsResponse,
    ListAppsResponse: ListAppsResponse,
    ListAppsResponseDataItems: ListAppsResponseDataItems,
    ListAppsResponseDataItemsAttributes: ListAppsResponseDataItemsAttributes,
    ListAppsResponseDataItemsRelationships:
      ListAppsResponseDataItemsRelationships,
    ListAppsResponseMeta: ListAppsResponseMeta,
    ListAppsResponseMetaPage: ListAppsResponseMetaPage,
    ListBlueprintsResponse: ListBlueprintsResponse,
    ListWorkflowsResponse: ListWorkflowsResponse,
    ListWorkflowsResponseMeta: ListWorkflowsResponseMeta,
    ListWorkflowsResponseMetaPage: ListWorkflowsResponseMetaPage,
    MonitorTrigger: MonitorTrigger,
    MonitorTriggerWrapper: MonitorTriggerWrapper,
    NotebookTriggerWrapper: NotebookTriggerWrapper,
    NotionAPIKey: NotionAPIKey,
    NotionAPIKeyUpdate: NotionAPIKeyUpdate,
    NotionIntegration: NotionIntegration,
    NotionIntegrationUpdate: NotionIntegrationUpdate,
    OktaAPIToken: OktaAPIToken,
    OktaAPITokenUpdate: OktaAPITokenUpdate,
    OktaIntegration: OktaIntegration,
    OktaIntegrationUpdate: OktaIntegrationUpdate,
    OnCallShiftChangeTrigger: OnCallShiftChangeTrigger,
    OnCallShiftChangeTriggerWrapper: OnCallShiftChangeTriggerWrapper,
    OnCallTrigger: OnCallTrigger,
    OnCallTriggerWrapper: OnCallTriggerWrapper,
    OpenAIAPIKey: OpenAIAPIKey,
    OpenAIAPIKeyUpdate: OpenAIAPIKeyUpdate,
    OpenAIIntegration: OpenAIIntegration,
    OpenAIIntegrationUpdate: OpenAIIntegrationUpdate,
    OutboundEdge: OutboundEdge,
    OutputSchema: OutputSchema,
    OutputSchemaParameters: OutputSchemaParameters,
    Parameter: Parameter,
    PublishAppResponse: PublishAppResponse,
    PublishFormData: PublishFormData,
    PublishFormDataAttributes: PublishFormDataAttributes,
    PublishFormRequest: PublishFormRequest,
    PutAppsDatastoreItemResponseArray: PutAppsDatastoreItemResponseArray,
    PutAppsDatastoreItemResponseData: PutAppsDatastoreItemResponseData,
    ReadinessGate: ReadinessGate,
    RegisterAppKeyResponse: RegisterAppKeyResponse,
    RetryStrategy: RetryStrategy,
    RetryStrategyLinear: RetryStrategyLinear,
    ScheduleTrigger: ScheduleTrigger,
    ScheduleTriggerWrapper: ScheduleTriggerWrapper,
    SecurityTrigger: SecurityTrigger,
    SecurityTriggerWrapper: SecurityTriggerWrapper,
    SelfServiceTriggerWrapper: SelfServiceTriggerWrapper,
    SerialExecution: SerialExecution,
    ServiceNowBasicAuth: ServiceNowBasicAuth,
    ServiceNowBasicAuthUpdate: ServiceNowBasicAuthUpdate,
    ServiceNowIntegration: ServiceNowIntegration,
    ServiceNowIntegrationUpdate: ServiceNowIntegrationUpdate,
    SlackReactionConfig: SlackReactionConfig,
    SlackTrigger: SlackTrigger,
    SlackTriggerWrapper: SlackTriggerWrapper,
    SoftwareCatalogTriggerWrapper: SoftwareCatalogTriggerWrapper,
    Spec: Spec,
    SplitAPIKey: SplitAPIKey,
    SplitAPIKeyUpdate: SplitAPIKeyUpdate,
    SplitIntegration: SplitIntegration,
    SplitIntegrationUpdate: SplitIntegrationUpdate,
    StateVariable: StateVariable,
    StateVariableProperties: StateVariableProperties,
    StatsigAPIKey: StatsigAPIKey,
    StatsigAPIKeyUpdate: StatsigAPIKeyUpdate,
    StatsigIntegration: StatsigIntegration,
    StatsigIntegrationUpdate: StatsigIntegrationUpdate,
    Step: Step,
    StepDisplay: StepDisplay,
    StepDisplayBounds: StepDisplayBounds,
    TagData: TagData,
    TriggerRateLimit: TriggerRateLimit,
    UnpublishAppResponse: UnpublishAppResponse,
    UpdateActionConnectionRequest: UpdateActionConnectionRequest,
    UpdateActionConnectionResponse: UpdateActionConnectionResponse,
    UpdateAppFavoriteRequest: UpdateAppFavoriteRequest,
    UpdateAppFavoriteRequestData: UpdateAppFavoriteRequestData,
    UpdateAppFavoriteRequestDataAttributes:
      UpdateAppFavoriteRequestDataAttributes,
    UpdateAppProtectionLevelRequest: UpdateAppProtectionLevelRequest,
    UpdateAppProtectionLevelRequestData: UpdateAppProtectionLevelRequestData,
    UpdateAppProtectionLevelRequestDataAttributes:
      UpdateAppProtectionLevelRequestDataAttributes,
    UpdateAppRequest: UpdateAppRequest,
    UpdateAppRequestData: UpdateAppRequestData,
    UpdateAppRequestDataAttributes: UpdateAppRequestDataAttributes,
    UpdateAppResponse: UpdateAppResponse,
    UpdateAppResponseData: UpdateAppResponseData,
    UpdateAppResponseDataAttributes: UpdateAppResponseDataAttributes,
    UpdateAppSelfServiceRequest: UpdateAppSelfServiceRequest,
    UpdateAppSelfServiceRequestData: UpdateAppSelfServiceRequestData,
    UpdateAppSelfServiceRequestDataAttributes:
      UpdateAppSelfServiceRequestDataAttributes,
    UpdateAppTagsRequest: UpdateAppTagsRequest,
    UpdateAppTagsRequestData: UpdateAppTagsRequestData,
    UpdateAppTagsRequestDataAttributes: UpdateAppTagsRequestDataAttributes,
    UpdateAppVersionNameRequest: UpdateAppVersionNameRequest,
    UpdateAppVersionNameRequestData: UpdateAppVersionNameRequestData,
    UpdateAppVersionNameRequestDataAttributes:
      UpdateAppVersionNameRequestDataAttributes,
    UpdateAppsDatastoreItemRequest: UpdateAppsDatastoreItemRequest,
    UpdateAppsDatastoreItemRequestData: UpdateAppsDatastoreItemRequestData,
    UpdateAppsDatastoreItemRequestDataAttributes:
      UpdateAppsDatastoreItemRequestDataAttributes,
    UpdateAppsDatastoreItemRequestDataAttributesItemChanges:
      UpdateAppsDatastoreItemRequestDataAttributesItemChanges,
    UpdateAppsDatastoreRequest: UpdateAppsDatastoreRequest,
    UpdateAppsDatastoreRequestData: UpdateAppsDatastoreRequestData,
    UpdateAppsDatastoreRequestDataAttributes:
      UpdateAppsDatastoreRequestDataAttributes,
    UpdateFormData: UpdateFormData,
    UpdateFormDataAttributes: UpdateFormDataAttributes,
    UpdateFormRequest: UpdateFormRequest,
    UpdateWorkflowRequest: UpdateWorkflowRequest,
    UpdateWorkflowResponse: UpdateWorkflowResponse,
    UpsertAndPublishFormVersionData: UpsertAndPublishFormVersionData,
    UpsertAndPublishFormVersionDataAttributes:
      UpsertAndPublishFormVersionDataAttributes,
    UpsertAndPublishFormVersionRequest: UpsertAndPublishFormVersionRequest,
    UpsertAndPublishFormVersionUpsertParams:
      UpsertAndPublishFormVersionUpsertParams,
    UpsertFormVersionData: UpsertFormVersionData,
    UpsertFormVersionDataAttributes: UpsertFormVersionDataAttributes,
    UpsertFormVersionRequest: UpsertFormVersionRequest,
    UpsertFormVersionUpsertParams: UpsertFormVersionUpsertParams,
    UrlParam: UrlParam,
    UrlParamUpdate: UrlParamUpdate,
    VirusTotalAPIKey: VirusTotalAPIKey,
    VirusTotalAPIKeyUpdate: VirusTotalAPIKeyUpdate,
    VirusTotalIntegration: VirusTotalIntegration,
    VirusTotalIntegrationUpdate: VirusTotalIntegrationUpdate,
    WorkflowData: WorkflowData,
    WorkflowDataAttributes: WorkflowDataAttributes,
    WorkflowDataRelationships: WorkflowDataRelationships,
    WorkflowDataUpdate: WorkflowDataUpdate,
    WorkflowDataUpdateAttributes: WorkflowDataUpdateAttributes,
    WorkflowInstanceCreateMeta: WorkflowInstanceCreateMeta,
    WorkflowInstanceCreateRequest: WorkflowInstanceCreateRequest,
    WorkflowInstanceCreateResponse: WorkflowInstanceCreateResponse,
    WorkflowInstanceCreateResponseData: WorkflowInstanceCreateResponseData,
    WorkflowInstanceListItem: WorkflowInstanceListItem,
    WorkflowListInstancesResponse: WorkflowListInstancesResponse,
    WorkflowListInstancesResponseMeta: WorkflowListInstancesResponseMeta,
    WorkflowListInstancesResponseMetaPage:
      WorkflowListInstancesResponseMetaPage,
    WorkflowListItem: WorkflowListItem,
    WorkflowListItemAttributes: WorkflowListItemAttributes,
    WorkflowRunAsInitiator: WorkflowRunAsInitiator,
    WorkflowRunAsOwner: WorkflowRunAsOwner,
    WorkflowRunAsServiceAccount: WorkflowRunAsServiceAccount,
    WorkflowTriggerWrapper: WorkflowTriggerWrapper,
    WorkflowUserRelationship: WorkflowUserRelationship,
    WorkflowUserRelationshipData: WorkflowUserRelationshipData,
    WorklflowCancelInstanceResponse: WorklflowCancelInstanceResponse,
    WorklflowCancelInstanceResponseData: WorklflowCancelInstanceResponseData,
    WorklflowGetInstanceResponse: WorklflowGetInstanceResponse,
    WorklflowGetInstanceResponseData: WorklflowGetInstanceResponseData,
    WorklflowGetInstanceResponseDataAttributes:
      WorklflowGetInstanceResponseDataAttributes,
  },
};
