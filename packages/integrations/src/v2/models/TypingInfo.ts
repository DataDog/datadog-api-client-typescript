import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest";
import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse";
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest";
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse";
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate";
import { ChatGPTEnterpriseIntegrationAccountCreateAttributes } from "./ChatGPTEnterpriseIntegrationAccountCreateAttributes";
import { ChatGPTEnterpriseIntegrationAccountCreateData } from "./ChatGPTEnterpriseIntegrationAccountCreateData";
import { ChatGPTEnterpriseIntegrationAccountCreateRequest } from "./ChatGPTEnterpriseIntegrationAccountCreateRequest";
import { ChatGPTEnterpriseIntegrationAccountResponse } from "./ChatGPTEnterpriseIntegrationAccountResponse";
import { ChatGPTEnterpriseIntegrationAccountResponseAttributes } from "./ChatGPTEnterpriseIntegrationAccountResponseAttributes";
import { ChatGPTEnterpriseIntegrationAccountResponseData } from "./ChatGPTEnterpriseIntegrationAccountResponseData";
import { ChatGPTEnterpriseIntegrationAccountSettingsRequest } from "./ChatGPTEnterpriseIntegrationAccountSettingsRequest";
import { ChatGPTEnterpriseIntegrationAccountSettingsResponse } from "./ChatGPTEnterpriseIntegrationAccountSettingsResponse";
import { ChatGPTEnterpriseIntegrationAccountSettingsUpdate } from "./ChatGPTEnterpriseIntegrationAccountSettingsUpdate";
import { ChatGPTEnterpriseIntegrationAccountUpdateAttributes } from "./ChatGPTEnterpriseIntegrationAccountUpdateAttributes";
import { ChatGPTEnterpriseIntegrationAccountUpdateData } from "./ChatGPTEnterpriseIntegrationAccountUpdateData";
import { ChatGPTEnterpriseIntegrationAccountUpdateRequest } from "./ChatGPTEnterpriseIntegrationAccountUpdateRequest";
import { ChatGPTEnterpriseIntegrationAccountsResponse } from "./ChatGPTEnterpriseIntegrationAccountsResponse";
import { ChatGPTEnterpriseIntegrationDataflowsRequest } from "./ChatGPTEnterpriseIntegrationDataflowsRequest";
import { ChatGPTEnterpriseIntegrationDataflowsResponse } from "./ChatGPTEnterpriseIntegrationDataflowsResponse";
import { CloudflareAccountCreateRequest } from "./CloudflareAccountCreateRequest";
import { CloudflareAccountCreateRequestAttributes } from "./CloudflareAccountCreateRequestAttributes";
import { CloudflareAccountCreateRequestData } from "./CloudflareAccountCreateRequestData";
import { CloudflareAccountResponse } from "./CloudflareAccountResponse";
import { CloudflareAccountResponseAttributes } from "./CloudflareAccountResponseAttributes";
import { CloudflareAccountResponseData } from "./CloudflareAccountResponseData";
import { CloudflareAccountUpdateRequest } from "./CloudflareAccountUpdateRequest";
import { CloudflareAccountUpdateRequestAttributes } from "./CloudflareAccountUpdateRequestAttributes";
import { CloudflareAccountUpdateRequestData } from "./CloudflareAccountUpdateRequestData";
import { CloudflareAccountsResponse } from "./CloudflareAccountsResponse";
import { ConfluentAccountCreateRequest } from "./ConfluentAccountCreateRequest";
import { ConfluentAccountCreateRequestAttributes } from "./ConfluentAccountCreateRequestAttributes";
import { ConfluentAccountCreateRequestData } from "./ConfluentAccountCreateRequestData";
import { ConfluentAccountResourceAttributes } from "./ConfluentAccountResourceAttributes";
import { ConfluentAccountResponse } from "./ConfluentAccountResponse";
import { ConfluentAccountResponseAttributes } from "./ConfluentAccountResponseAttributes";
import { ConfluentAccountResponseData } from "./ConfluentAccountResponseData";
import { ConfluentAccountUpdateRequest } from "./ConfluentAccountUpdateRequest";
import { ConfluentAccountUpdateRequestAttributes } from "./ConfluentAccountUpdateRequestAttributes";
import { ConfluentAccountUpdateRequestData } from "./ConfluentAccountUpdateRequestData";
import { ConfluentAccountsResponse } from "./ConfluentAccountsResponse";
import { ConfluentResourceRequest } from "./ConfluentResourceRequest";
import { ConfluentResourceRequestAttributes } from "./ConfluentResourceRequestAttributes";
import { ConfluentResourceRequestData } from "./ConfluentResourceRequestData";
import { ConfluentResourceResponse } from "./ConfluentResourceResponse";
import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";
import { ConfluentResourceResponseData } from "./ConfluentResourceResponseData";
import { ConfluentResourcesResponse } from "./ConfluentResourcesResponse";
import { CoreWeaveCloudIntegrationAccountAPITokenAuthRequest } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthRequest";
import { CoreWeaveCloudIntegrationAccountAPITokenAuthResponse } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthResponse";
import { CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate";
import { CoreWeaveCloudIntegrationAccountCreateAttributes } from "./CoreWeaveCloudIntegrationAccountCreateAttributes";
import { CoreWeaveCloudIntegrationAccountCreateData } from "./CoreWeaveCloudIntegrationAccountCreateData";
import { CoreWeaveCloudIntegrationAccountCreateRequest } from "./CoreWeaveCloudIntegrationAccountCreateRequest";
import { CoreWeaveCloudIntegrationAccountResponse } from "./CoreWeaveCloudIntegrationAccountResponse";
import { CoreWeaveCloudIntegrationAccountResponseAttributes } from "./CoreWeaveCloudIntegrationAccountResponseAttributes";
import { CoreWeaveCloudIntegrationAccountResponseData } from "./CoreWeaveCloudIntegrationAccountResponseData";
import { CoreWeaveCloudIntegrationAccountSettingsRequest } from "./CoreWeaveCloudIntegrationAccountSettingsRequest";
import { CoreWeaveCloudIntegrationAccountSettingsResponse } from "./CoreWeaveCloudIntegrationAccountSettingsResponse";
import { CoreWeaveCloudIntegrationAccountSettingsUpdate } from "./CoreWeaveCloudIntegrationAccountSettingsUpdate";
import { CoreWeaveCloudIntegrationAccountUpdateAttributes } from "./CoreWeaveCloudIntegrationAccountUpdateAttributes";
import { CoreWeaveCloudIntegrationAccountUpdateData } from "./CoreWeaveCloudIntegrationAccountUpdateData";
import { CoreWeaveCloudIntegrationAccountUpdateRequest } from "./CoreWeaveCloudIntegrationAccountUpdateRequest";
import { CoreWeaveCloudIntegrationAccountsResponse } from "./CoreWeaveCloudIntegrationAccountsResponse";
import { CoreWeaveCloudIntegrationDataflowsRequest } from "./CoreWeaveCloudIntegrationDataflowsRequest";
import { CoreWeaveCloudIntegrationDataflowsResponse } from "./CoreWeaveCloudIntegrationDataflowsResponse";
import { CoreWeaveCloudLogsIntegrationDataflowRequest } from "./CoreWeaveCloudLogsIntegrationDataflowRequest";
import { CoreWeaveCloudLogsIntegrationDataflowResponse } from "./CoreWeaveCloudLogsIntegrationDataflowResponse";
import { CoreWeaveCloudMetricsIntegrationDataflowRequest } from "./CoreWeaveCloudMetricsIntegrationDataflowRequest";
import { CoreWeaveCloudMetricsIntegrationDataflowResponse } from "./CoreWeaveCloudMetricsIntegrationDataflowResponse";
import { DatabricksCloudCostMetricsIntegrationDataflowRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowRequest";
import { DatabricksCloudCostMetricsIntegrationDataflowResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowResponse";
import { DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest";
import { DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse";
import { DatabricksIntegrationAccountBearerTokenAuthResponse } from "./DatabricksIntegrationAccountBearerTokenAuthResponse";
import { DatabricksIntegrationAccountBearerTokenAuthUpdate } from "./DatabricksIntegrationAccountBearerTokenAuthUpdate";
import { DatabricksIntegrationAccountCreateAttributes } from "./DatabricksIntegrationAccountCreateAttributes";
import { DatabricksIntegrationAccountCreateData } from "./DatabricksIntegrationAccountCreateData";
import { DatabricksIntegrationAccountCreateRequest } from "./DatabricksIntegrationAccountCreateRequest";
import { DatabricksIntegrationAccountOAuthAuthRequest } from "./DatabricksIntegrationAccountOAuthAuthRequest";
import { DatabricksIntegrationAccountOAuthAuthResponse } from "./DatabricksIntegrationAccountOAuthAuthResponse";
import { DatabricksIntegrationAccountOAuthAuthUpdate } from "./DatabricksIntegrationAccountOAuthAuthUpdate";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthRequest } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthRequest";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthResponse } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthResponse";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate";
import { DatabricksIntegrationAccountResponse } from "./DatabricksIntegrationAccountResponse";
import { DatabricksIntegrationAccountResponseAttributes } from "./DatabricksIntegrationAccountResponseAttributes";
import { DatabricksIntegrationAccountResponseData } from "./DatabricksIntegrationAccountResponseData";
import { DatabricksIntegrationAccountSettingsRequest } from "./DatabricksIntegrationAccountSettingsRequest";
import { DatabricksIntegrationAccountSettingsResponse } from "./DatabricksIntegrationAccountSettingsResponse";
import { DatabricksIntegrationAccountSettingsUpdate } from "./DatabricksIntegrationAccountSettingsUpdate";
import { DatabricksIntegrationAccountUpdateAttributes } from "./DatabricksIntegrationAccountUpdateAttributes";
import { DatabricksIntegrationAccountUpdateData } from "./DatabricksIntegrationAccountUpdateData";
import { DatabricksIntegrationAccountUpdateRequest } from "./DatabricksIntegrationAccountUpdateRequest";
import { DatabricksIntegrationAccountsResponse } from "./DatabricksIntegrationAccountsResponse";
import { DatabricksIntegrationDataflowsRequest } from "./DatabricksIntegrationDataflowsRequest";
import { DatabricksIntegrationDataflowsResponse } from "./DatabricksIntegrationDataflowsResponse";
import { DatabricksModelServingMetricsIntegrationDataflowRequest } from "./DatabricksModelServingMetricsIntegrationDataflowRequest";
import { DatabricksModelServingMetricsIntegrationDataflowResponse } from "./DatabricksModelServingMetricsIntegrationDataflowResponse";
import { ElasticCloudDetailedIndexStatsIntegrationDataflowRequest } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowRequest";
import { ElasticCloudDetailedIndexStatsIntegrationDataflowResponse } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowResponse";
import { ElasticCloudIndexStatsIntegrationDataflowRequest } from "./ElasticCloudIndexStatsIntegrationDataflowRequest";
import { ElasticCloudIndexStatsIntegrationDataflowResponse } from "./ElasticCloudIndexStatsIntegrationDataflowResponse";
import { ElasticCloudIntegrationAccountBasicAuthRequest } from "./ElasticCloudIntegrationAccountBasicAuthRequest";
import { ElasticCloudIntegrationAccountBasicAuthResponse } from "./ElasticCloudIntegrationAccountBasicAuthResponse";
import { ElasticCloudIntegrationAccountBasicAuthUpdate } from "./ElasticCloudIntegrationAccountBasicAuthUpdate";
import { ElasticCloudIntegrationAccountCreateAttributes } from "./ElasticCloudIntegrationAccountCreateAttributes";
import { ElasticCloudIntegrationAccountCreateData } from "./ElasticCloudIntegrationAccountCreateData";
import { ElasticCloudIntegrationAccountCreateRequest } from "./ElasticCloudIntegrationAccountCreateRequest";
import { ElasticCloudIntegrationAccountResponse } from "./ElasticCloudIntegrationAccountResponse";
import { ElasticCloudIntegrationAccountResponseAttributes } from "./ElasticCloudIntegrationAccountResponseAttributes";
import { ElasticCloudIntegrationAccountResponseData } from "./ElasticCloudIntegrationAccountResponseData";
import { ElasticCloudIntegrationAccountSettingsRequest } from "./ElasticCloudIntegrationAccountSettingsRequest";
import { ElasticCloudIntegrationAccountSettingsResponse } from "./ElasticCloudIntegrationAccountSettingsResponse";
import { ElasticCloudIntegrationAccountSettingsUpdate } from "./ElasticCloudIntegrationAccountSettingsUpdate";
import { ElasticCloudIntegrationAccountUpdateAttributes } from "./ElasticCloudIntegrationAccountUpdateAttributes";
import { ElasticCloudIntegrationAccountUpdateData } from "./ElasticCloudIntegrationAccountUpdateData";
import { ElasticCloudIntegrationAccountUpdateRequest } from "./ElasticCloudIntegrationAccountUpdateRequest";
import { ElasticCloudIntegrationAccountsResponse } from "./ElasticCloudIntegrationAccountsResponse";
import { ElasticCloudIntegrationDataflowsRequest } from "./ElasticCloudIntegrationDataflowsRequest";
import { ElasticCloudIntegrationDataflowsResponse } from "./ElasticCloudIntegrationDataflowsResponse";
import { ElasticCloudMetricsIntegrationDataflowResponse } from "./ElasticCloudMetricsIntegrationDataflowResponse";
import { ElasticCloudPendingTaskStatsIntegrationDataflowRequest } from "./ElasticCloudPendingTaskStatsIntegrationDataflowRequest";
import { ElasticCloudPendingTaskStatsIntegrationDataflowResponse } from "./ElasticCloudPendingTaskStatsIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowResponse";
import { ElasticCloudShardAllocationStatsIntegrationDataflowRequest } from "./ElasticCloudShardAllocationStatsIntegrationDataflowRequest";
import { ElasticCloudShardAllocationStatsIntegrationDataflowResponse } from "./ElasticCloudShardAllocationStatsIntegrationDataflowResponse";
import { ElasticCloudSlmStatsIntegrationDataflowRequest } from "./ElasticCloudSlmStatsIntegrationDataflowRequest";
import { ElasticCloudSlmStatsIntegrationDataflowResponse } from "./ElasticCloudSlmStatsIntegrationDataflowResponse";
import { FastlyAccounResponseAttributes } from "./FastlyAccounResponseAttributes";
import { FastlyAccountCreateRequest } from "./FastlyAccountCreateRequest";
import { FastlyAccountCreateRequestAttributes } from "./FastlyAccountCreateRequestAttributes";
import { FastlyAccountCreateRequestData } from "./FastlyAccountCreateRequestData";
import { FastlyAccountResponse } from "./FastlyAccountResponse";
import { FastlyAccountResponseData } from "./FastlyAccountResponseData";
import { FastlyAccountUpdateRequest } from "./FastlyAccountUpdateRequest";
import { FastlyAccountUpdateRequestAttributes } from "./FastlyAccountUpdateRequestAttributes";
import { FastlyAccountUpdateRequestData } from "./FastlyAccountUpdateRequestData";
import { FastlyAccountsResponse } from "./FastlyAccountsResponse";
import { FastlyService } from "./FastlyService";
import { FastlyServiceAttributes } from "./FastlyServiceAttributes";
import { FastlyServiceData } from "./FastlyServiceData";
import { FastlyServiceRequest } from "./FastlyServiceRequest";
import { FastlyServiceResponse } from "./FastlyServiceResponse";
import { FastlyServicesResponse } from "./FastlyServicesResponse";
import { GoogleChatAppNamedSpaceResponse } from "./GoogleChatAppNamedSpaceResponse";
import { GoogleChatAppNamedSpaceResponseAttributes } from "./GoogleChatAppNamedSpaceResponseAttributes";
import { GoogleChatAppNamedSpaceResponseData } from "./GoogleChatAppNamedSpaceResponseData";
import { GoogleChatCreateOrganizationHandleRequest } from "./GoogleChatCreateOrganizationHandleRequest";
import { GoogleChatCreateOrganizationHandleRequestAttributes } from "./GoogleChatCreateOrganizationHandleRequestAttributes";
import { GoogleChatCreateOrganizationHandleRequestData } from "./GoogleChatCreateOrganizationHandleRequestData";
import { GoogleChatDelegatedUserAttributes } from "./GoogleChatDelegatedUserAttributes";
import { GoogleChatDelegatedUserData } from "./GoogleChatDelegatedUserData";
import { GoogleChatDelegatedUserResponse } from "./GoogleChatDelegatedUserResponse";
import { GoogleChatOrganizationAttributes } from "./GoogleChatOrganizationAttributes";
import { GoogleChatOrganizationData } from "./GoogleChatOrganizationData";
import { GoogleChatOrganizationHandleResponse } from "./GoogleChatOrganizationHandleResponse";
import { GoogleChatOrganizationHandleResponseAttributes } from "./GoogleChatOrganizationHandleResponseAttributes";
import { GoogleChatOrganizationHandleResponseData } from "./GoogleChatOrganizationHandleResponseData";
import { GoogleChatOrganizationHandlesResponse } from "./GoogleChatOrganizationHandlesResponse";
import { GoogleChatOrganizationRelationships } from "./GoogleChatOrganizationRelationships";
import { GoogleChatOrganizationRelationshipsDelegatedUser } from "./GoogleChatOrganizationRelationshipsDelegatedUser";
import { GoogleChatOrganizationRelationshipsDelegatedUserData } from "./GoogleChatOrganizationRelationshipsDelegatedUserData";
import { GoogleChatOrganizationResponse } from "./GoogleChatOrganizationResponse";
import { GoogleChatOrganizationsResponse } from "./GoogleChatOrganizationsResponse";
import { GoogleChatTargetAudienceAttributes } from "./GoogleChatTargetAudienceAttributes";
import { GoogleChatTargetAudienceCreateRequest } from "./GoogleChatTargetAudienceCreateRequest";
import { GoogleChatTargetAudienceCreateRequestAttributes } from "./GoogleChatTargetAudienceCreateRequestAttributes";
import { GoogleChatTargetAudienceCreateRequestData } from "./GoogleChatTargetAudienceCreateRequestData";
import { GoogleChatTargetAudienceData } from "./GoogleChatTargetAudienceData";
import { GoogleChatTargetAudienceResponse } from "./GoogleChatTargetAudienceResponse";
import { GoogleChatTargetAudienceUpdateRequest } from "./GoogleChatTargetAudienceUpdateRequest";
import { GoogleChatTargetAudienceUpdateRequestAttributes } from "./GoogleChatTargetAudienceUpdateRequestAttributes";
import { GoogleChatTargetAudienceUpdateRequestData } from "./GoogleChatTargetAudienceUpdateRequestData";
import { GoogleChatTargetAudiencesResponse } from "./GoogleChatTargetAudiencesResponse";
import { GoogleChatUpdateOrganizationHandleRequest } from "./GoogleChatUpdateOrganizationHandleRequest";
import { GoogleChatUpdateOrganizationHandleRequestAttributes } from "./GoogleChatUpdateOrganizationHandleRequestAttributes";
import { GoogleChatUpdateOrganizationHandleRequestData } from "./GoogleChatUpdateOrganizationHandleRequestData";
import { Integration } from "./Integration";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAttributes } from "./IntegrationAttributes";
import { IntegrationLinks } from "./IntegrationLinks";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JiraAccountAttributes } from "./JiraAccountAttributes";
import { JiraAccountData } from "./JiraAccountData";
import { JiraAccountRelationship } from "./JiraAccountRelationship";
import { JiraAccountsMeta } from "./JiraAccountsMeta";
import { JiraAccountsResponse } from "./JiraAccountsResponse";
import { JiraIssueTemplateCreateRequest } from "./JiraIssueTemplateCreateRequest";
import { JiraIssueTemplateCreateRequestAttributes } from "./JiraIssueTemplateCreateRequestAttributes";
import { JiraIssueTemplateCreateRequestAttributesJiraAccount } from "./JiraIssueTemplateCreateRequestAttributesJiraAccount";
import { JiraIssueTemplateCreateRequestData } from "./JiraIssueTemplateCreateRequestData";
import { JiraIssueTemplateData } from "./JiraIssueTemplateData";
import { JiraIssueTemplateDataAttributes } from "./JiraIssueTemplateDataAttributes";
import { JiraIssueTemplateDataRelationships } from "./JiraIssueTemplateDataRelationships";
import { JiraIssueTemplateResponse } from "./JiraIssueTemplateResponse";
import { JiraIssueTemplateUpdateRequest } from "./JiraIssueTemplateUpdateRequest";
import { JiraIssueTemplateUpdateRequestAttributes } from "./JiraIssueTemplateUpdateRequestAttributes";
import { JiraIssueTemplateUpdateRequestData } from "./JiraIssueTemplateUpdateRequestData";
import { JiraIssueTemplatesResponse } from "./JiraIssueTemplatesResponse";
import { ListIntegrationsResponse } from "./ListIntegrationsResponse";
import { MicrosoftTeamsChannelInfoResponseAttributes } from "./MicrosoftTeamsChannelInfoResponseAttributes";
import { MicrosoftTeamsChannelInfoResponseData } from "./MicrosoftTeamsChannelInfoResponseData";
import { MicrosoftTeamsCreateTenantBasedHandleRequest } from "./MicrosoftTeamsCreateTenantBasedHandleRequest";
import { MicrosoftTeamsCreateWorkflowsWebhookHandleRequest } from "./MicrosoftTeamsCreateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsGetChannelByNameResponse } from "./MicrosoftTeamsGetChannelByNameResponse";
import { MicrosoftTeamsTenantBasedHandleAttributes } from "./MicrosoftTeamsTenantBasedHandleAttributes";
import { MicrosoftTeamsTenantBasedHandleInfoResponseAttributes } from "./MicrosoftTeamsTenantBasedHandleInfoResponseAttributes";
import { MicrosoftTeamsTenantBasedHandleInfoResponseData } from "./MicrosoftTeamsTenantBasedHandleInfoResponseData";
import { MicrosoftTeamsTenantBasedHandleRequestAttributes } from "./MicrosoftTeamsTenantBasedHandleRequestAttributes";
import { MicrosoftTeamsTenantBasedHandleRequestData } from "./MicrosoftTeamsTenantBasedHandleRequestData";
import { MicrosoftTeamsTenantBasedHandleResponse } from "./MicrosoftTeamsTenantBasedHandleResponse";
import { MicrosoftTeamsTenantBasedHandleResponseData } from "./MicrosoftTeamsTenantBasedHandleResponseData";
import { MicrosoftTeamsTenantBasedHandlesResponse } from "./MicrosoftTeamsTenantBasedHandlesResponse";
import { MicrosoftTeamsUpdateTenantBasedHandleRequest } from "./MicrosoftTeamsUpdateTenantBasedHandleRequest";
import { MicrosoftTeamsUpdateTenantBasedHandleRequestData } from "./MicrosoftTeamsUpdateTenantBasedHandleRequestData";
import { MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest } from "./MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData } from "./MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData";
import { MicrosoftTeamsWorkflowsWebhookHandleAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleRequestData } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestData";
import { MicrosoftTeamsWorkflowsWebhookHandleResponse } from "./MicrosoftTeamsWorkflowsWebhookHandleResponse";
import { MicrosoftTeamsWorkflowsWebhookHandleResponseData } from "./MicrosoftTeamsWorkflowsWebhookHandleResponseData";
import { MicrosoftTeamsWorkflowsWebhookHandlesResponse } from "./MicrosoftTeamsWorkflowsWebhookHandlesResponse";
import { MicrosoftTeamsWorkflowsWebhookResponseAttributes } from "./MicrosoftTeamsWorkflowsWebhookResponseAttributes";
import { OktaAccount } from "./OktaAccount";
import { OktaAccountAttributes } from "./OktaAccountAttributes";
import { OktaAccountRequest } from "./OktaAccountRequest";
import { OktaAccountResponse } from "./OktaAccountResponse";
import { OktaAccountResponseData } from "./OktaAccountResponseData";
import { OktaAccountUpdateRequest } from "./OktaAccountUpdateRequest";
import { OktaAccountUpdateRequestAttributes } from "./OktaAccountUpdateRequestAttributes";
import { OktaAccountUpdateRequestData } from "./OktaAccountUpdateRequestData";
import { OktaAccountsResponse } from "./OktaAccountsResponse";
import { OpsgenieAccountCreateAttributes } from "./OpsgenieAccountCreateAttributes";
import { OpsgenieAccountCreateData } from "./OpsgenieAccountCreateData";
import { OpsgenieAccountCreateRequest } from "./OpsgenieAccountCreateRequest";
import { OpsgenieAccountResponse } from "./OpsgenieAccountResponse";
import { OpsgenieAccountResponseAttributes } from "./OpsgenieAccountResponseAttributes";
import { OpsgenieAccountResponseData } from "./OpsgenieAccountResponseData";
import { OpsgenieAccountUpdateAttributes } from "./OpsgenieAccountUpdateAttributes";
import { OpsgenieAccountUpdateData } from "./OpsgenieAccountUpdateData";
import { OpsgenieAccountUpdateRequest } from "./OpsgenieAccountUpdateRequest";
import { OpsgenieAccountsResponse } from "./OpsgenieAccountsResponse";
import { OpsgenieServiceCreateAttributes } from "./OpsgenieServiceCreateAttributes";
import { OpsgenieServiceCreateData } from "./OpsgenieServiceCreateData";
import { OpsgenieServiceCreateRequest } from "./OpsgenieServiceCreateRequest";
import { OpsgenieServiceResponse } from "./OpsgenieServiceResponse";
import { OpsgenieServiceResponseAttributes } from "./OpsgenieServiceResponseAttributes";
import { OpsgenieServiceResponseData } from "./OpsgenieServiceResponseData";
import { OpsgenieServiceUpdateAttributes } from "./OpsgenieServiceUpdateAttributes";
import { OpsgenieServiceUpdateData } from "./OpsgenieServiceUpdateData";
import { OpsgenieServiceUpdateRequest } from "./OpsgenieServiceUpdateRequest";
import { OpsgenieServicesResponse } from "./OpsgenieServicesResponse";
import { ServiceNowAssignmentGroupAttributes } from "./ServiceNowAssignmentGroupAttributes";
import { ServiceNowAssignmentGroupData } from "./ServiceNowAssignmentGroupData";
import { ServiceNowAssignmentGroupsResponse } from "./ServiceNowAssignmentGroupsResponse";
import { ServiceNowBusinessServiceAttributes } from "./ServiceNowBusinessServiceAttributes";
import { ServiceNowBusinessServiceData } from "./ServiceNowBusinessServiceData";
import { ServiceNowBusinessServicesResponse } from "./ServiceNowBusinessServicesResponse";
import { ServiceNowInstanceAttributes } from "./ServiceNowInstanceAttributes";
import { ServiceNowInstanceData } from "./ServiceNowInstanceData";
import { ServiceNowInstancesResponse } from "./ServiceNowInstancesResponse";
import { ServiceNowTemplateAttributes } from "./ServiceNowTemplateAttributes";
import { ServiceNowTemplateCreateRequest } from "./ServiceNowTemplateCreateRequest";
import { ServiceNowTemplateCreateRequestAttributes } from "./ServiceNowTemplateCreateRequestAttributes";
import { ServiceNowTemplateCreateRequestData } from "./ServiceNowTemplateCreateRequestData";
import { ServiceNowTemplateData } from "./ServiceNowTemplateData";
import { ServiceNowTemplateResponse } from "./ServiceNowTemplateResponse";
import { ServiceNowTemplateUpdateRequest } from "./ServiceNowTemplateUpdateRequest";
import { ServiceNowTemplateUpdateRequestAttributes } from "./ServiceNowTemplateUpdateRequestAttributes";
import { ServiceNowTemplateUpdateRequestData } from "./ServiceNowTemplateUpdateRequestData";
import { ServiceNowTemplatesResponse } from "./ServiceNowTemplatesResponse";
import { ServiceNowUserAttributes } from "./ServiceNowUserAttributes";
import { ServiceNowUserData } from "./ServiceNowUserData";
import { ServiceNowUsersResponse } from "./ServiceNowUsersResponse";
import { SlackUserBindingData } from "./SlackUserBindingData";
import { SlackUserBindingsResponse } from "./SlackUserBindingsResponse";
import { SnowflakeAccountUsageMetricsIntegrationDataflowRequest } from "./SnowflakeAccountUsageMetricsIntegrationDataflowRequest";
import { SnowflakeAccountUsageMetricsIntegrationDataflowResponse } from "./SnowflakeAccountUsageMetricsIntegrationDataflowResponse";
import { SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest";
import { SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse";
import { SnowflakeCloudCostMetricsIntegrationDataflowRequest } from "./SnowflakeCloudCostMetricsIntegrationDataflowRequest";
import { SnowflakeCloudCostMetricsIntegrationDataflowResponse } from "./SnowflakeCloudCostMetricsIntegrationDataflowResponse";
import { SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest";
import { SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse";
import { SnowflakeEventTableLogsIntegrationDataflowRequest } from "./SnowflakeEventTableLogsIntegrationDataflowRequest";
import { SnowflakeEventTableLogsIntegrationDataflowResponse } from "./SnowflakeEventTableLogsIntegrationDataflowResponse";
import { SnowflakeEventTableLogsIntegrationDataflowSettingsRequest } from "./SnowflakeEventTableLogsIntegrationDataflowSettingsRequest";
import { SnowflakeEventTableLogsIntegrationDataflowSettingsResponse } from "./SnowflakeEventTableLogsIntegrationDataflowSettingsResponse";
import { SnowflakeIntegrationAccountCreateAttributes } from "./SnowflakeIntegrationAccountCreateAttributes";
import { SnowflakeIntegrationAccountCreateData } from "./SnowflakeIntegrationAccountCreateData";
import { SnowflakeIntegrationAccountCreateRequest } from "./SnowflakeIntegrationAccountCreateRequest";
import { SnowflakeIntegrationAccountPrivateKeyAuthRequest } from "./SnowflakeIntegrationAccountPrivateKeyAuthRequest";
import { SnowflakeIntegrationAccountPrivateKeyAuthResponse } from "./SnowflakeIntegrationAccountPrivateKeyAuthResponse";
import { SnowflakeIntegrationAccountPrivateKeyAuthUpdate } from "./SnowflakeIntegrationAccountPrivateKeyAuthUpdate";
import { SnowflakeIntegrationAccountResponse } from "./SnowflakeIntegrationAccountResponse";
import { SnowflakeIntegrationAccountResponseAttributes } from "./SnowflakeIntegrationAccountResponseAttributes";
import { SnowflakeIntegrationAccountResponseData } from "./SnowflakeIntegrationAccountResponseData";
import { SnowflakeIntegrationAccountSettingsRequest } from "./SnowflakeIntegrationAccountSettingsRequest";
import { SnowflakeIntegrationAccountSettingsResponse } from "./SnowflakeIntegrationAccountSettingsResponse";
import { SnowflakeIntegrationAccountSettingsUpdate } from "./SnowflakeIntegrationAccountSettingsUpdate";
import { SnowflakeIntegrationAccountUpdateAttributes } from "./SnowflakeIntegrationAccountUpdateAttributes";
import { SnowflakeIntegrationAccountUpdateData } from "./SnowflakeIntegrationAccountUpdateData";
import { SnowflakeIntegrationAccountUpdateRequest } from "./SnowflakeIntegrationAccountUpdateRequest";
import { SnowflakeIntegrationAccountsResponse } from "./SnowflakeIntegrationAccountsResponse";
import { SnowflakeIntegrationDataflowsRequest } from "./SnowflakeIntegrationDataflowsRequest";
import { SnowflakeIntegrationDataflowsResponse } from "./SnowflakeIntegrationDataflowsResponse";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse";
import { SnowflakeQueryHistoryLogsIntegrationDataflowRequest } from "./SnowflakeQueryHistoryLogsIntegrationDataflowRequest";
import { SnowflakeQueryHistoryLogsIntegrationDataflowResponse } from "./SnowflakeQueryHistoryLogsIntegrationDataflowResponse";
import { SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest } from "./SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest";
import { SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse } from "./SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse";
import { SnowflakeSecurityLogsIntegrationDataflowRequest } from "./SnowflakeSecurityLogsIntegrationDataflowRequest";
import { SnowflakeSecurityLogsIntegrationDataflowResponse } from "./SnowflakeSecurityLogsIntegrationDataflowResponse";
import { SnowflakeSecurityLogsIntegrationDataflowSettingsRequest } from "./SnowflakeSecurityLogsIntegrationDataflowSettingsRequest";
import { SnowflakeSecurityLogsIntegrationDataflowSettingsResponse } from "./SnowflakeSecurityLogsIntegrationDataflowSettingsResponse";
import { SnowflakeTaskHistoryLogsIntegrationDataflowRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowRequest";
import { SnowflakeTaskHistoryLogsIntegrationDataflowResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowResponse";
import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest";
import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse";
import { StatuspageAccountCreateAttributes } from "./StatuspageAccountCreateAttributes";
import { StatuspageAccountCreateData } from "./StatuspageAccountCreateData";
import { StatuspageAccountCreateRequest } from "./StatuspageAccountCreateRequest";
import { StatuspageAccountResponse } from "./StatuspageAccountResponse";
import { StatuspageAccountResponseAttributes } from "./StatuspageAccountResponseAttributes";
import { StatuspageAccountResponseData } from "./StatuspageAccountResponseData";
import { StatuspageAccountUpdateAttributes } from "./StatuspageAccountUpdateAttributes";
import { StatuspageAccountUpdateData } from "./StatuspageAccountUpdateData";
import { StatuspageAccountUpdateRequest } from "./StatuspageAccountUpdateRequest";
import { StatuspageUrlSettingCreateAttributes } from "./StatuspageUrlSettingCreateAttributes";
import { StatuspageUrlSettingCreateData } from "./StatuspageUrlSettingCreateData";
import { StatuspageUrlSettingCreateRequest } from "./StatuspageUrlSettingCreateRequest";
import { StatuspageUrlSettingResponse } from "./StatuspageUrlSettingResponse";
import { StatuspageUrlSettingResponseAttributes } from "./StatuspageUrlSettingResponseAttributes";
import { StatuspageUrlSettingResponseData } from "./StatuspageUrlSettingResponseData";
import { StatuspageUrlSettingUpdateAttributes } from "./StatuspageUrlSettingUpdateAttributes";
import { StatuspageUrlSettingUpdateData } from "./StatuspageUrlSettingUpdateData";
import { StatuspageUrlSettingUpdateRequest } from "./StatuspageUrlSettingUpdateRequest";
import { StatuspageUrlSettingsResponse } from "./StatuspageUrlSettingsResponse";
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest";
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse";
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate";
import { TemporalCloudOpenMetricsIntegrationAccountCreateAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountCreateAttributes";
import { TemporalCloudOpenMetricsIntegrationAccountCreateData } from "./TemporalCloudOpenMetricsIntegrationAccountCreateData";
import { TemporalCloudOpenMetricsIntegrationAccountCreateRequest } from "./TemporalCloudOpenMetricsIntegrationAccountCreateRequest";
import { TemporalCloudOpenMetricsIntegrationAccountResponse } from "./TemporalCloudOpenMetricsIntegrationAccountResponse";
import { TemporalCloudOpenMetricsIntegrationAccountResponseAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountResponseAttributes";
import { TemporalCloudOpenMetricsIntegrationAccountResponseData } from "./TemporalCloudOpenMetricsIntegrationAccountResponseData";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsRequest } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsRequest";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsResponse } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsResponse";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateData } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateData";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateRequest } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateRequest";
import { TemporalCloudOpenMetricsIntegrationAccountsResponse } from "./TemporalCloudOpenMetricsIntegrationAccountsResponse";
import { TemporalCloudOpenMetricsIntegrationDataflowsResponse } from "./TemporalCloudOpenMetricsIntegrationDataflowsResponse";
import { TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse } from "./TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse";
import { TwilioAlertsLogsIntegrationDataflowRequest } from "./TwilioAlertsLogsIntegrationDataflowRequest";
import { TwilioAlertsLogsIntegrationDataflowResponse } from "./TwilioAlertsLogsIntegrationDataflowResponse";
import { TwilioCallSummariesLogsIntegrationDataflowRequest } from "./TwilioCallSummariesLogsIntegrationDataflowRequest";
import { TwilioCallSummariesLogsIntegrationDataflowResponse } from "./TwilioCallSummariesLogsIntegrationDataflowResponse";
import { TwilioCloudCostMetricsIntegrationDataflowRequest } from "./TwilioCloudCostMetricsIntegrationDataflowRequest";
import { TwilioCloudCostMetricsIntegrationDataflowResponse } from "./TwilioCloudCostMetricsIntegrationDataflowResponse";
import { TwilioEventsLogsIntegrationDataflowRequest } from "./TwilioEventsLogsIntegrationDataflowRequest";
import { TwilioEventsLogsIntegrationDataflowResponse } from "./TwilioEventsLogsIntegrationDataflowResponse";
import { TwilioIntegrationAccountBasicAuthRequest } from "./TwilioIntegrationAccountBasicAuthRequest";
import { TwilioIntegrationAccountBasicAuthResponse } from "./TwilioIntegrationAccountBasicAuthResponse";
import { TwilioIntegrationAccountBasicAuthUpdate } from "./TwilioIntegrationAccountBasicAuthUpdate";
import { TwilioIntegrationAccountCreateAttributes } from "./TwilioIntegrationAccountCreateAttributes";
import { TwilioIntegrationAccountCreateData } from "./TwilioIntegrationAccountCreateData";
import { TwilioIntegrationAccountCreateRequest } from "./TwilioIntegrationAccountCreateRequest";
import { TwilioIntegrationAccountResponse } from "./TwilioIntegrationAccountResponse";
import { TwilioIntegrationAccountResponseAttributes } from "./TwilioIntegrationAccountResponseAttributes";
import { TwilioIntegrationAccountResponseData } from "./TwilioIntegrationAccountResponseData";
import { TwilioIntegrationAccountSettingsRequest } from "./TwilioIntegrationAccountSettingsRequest";
import { TwilioIntegrationAccountSettingsResponse } from "./TwilioIntegrationAccountSettingsResponse";
import { TwilioIntegrationAccountSettingsUpdate } from "./TwilioIntegrationAccountSettingsUpdate";
import { TwilioIntegrationAccountUpdateAttributes } from "./TwilioIntegrationAccountUpdateAttributes";
import { TwilioIntegrationAccountUpdateData } from "./TwilioIntegrationAccountUpdateData";
import { TwilioIntegrationAccountUpdateRequest } from "./TwilioIntegrationAccountUpdateRequest";
import { TwilioIntegrationAccountsResponse } from "./TwilioIntegrationAccountsResponse";
import { TwilioIntegrationDataflowsRequest } from "./TwilioIntegrationDataflowsRequest";
import { TwilioIntegrationDataflowsResponse } from "./TwilioIntegrationDataflowsResponse";
import { TwilioMessagesLogsIntegrationDataflowRequest } from "./TwilioMessagesLogsIntegrationDataflowRequest";
import { TwilioMessagesLogsIntegrationDataflowResponse } from "./TwilioMessagesLogsIntegrationDataflowResponse";
import { WebIntegrationAccountCreateRequest } from "./WebIntegrationAccountCreateRequest";
import { WebIntegrationAccountCreateRequestAttributes } from "./WebIntegrationAccountCreateRequestAttributes";
import { WebIntegrationAccountCreateRequestData } from "./WebIntegrationAccountCreateRequestData";
import { WebIntegrationAccountResponse } from "./WebIntegrationAccountResponse";
import { WebIntegrationAccountResponseAttributes } from "./WebIntegrationAccountResponseAttributes";
import { WebIntegrationAccountResponseData } from "./WebIntegrationAccountResponseData";
import { WebIntegrationAccountUpdateRequest } from "./WebIntegrationAccountUpdateRequest";
import { WebIntegrationAccountUpdateRequestAttributes } from "./WebIntegrationAccountUpdateRequestAttributes";
import { WebIntegrationAccountUpdateRequestData } from "./WebIntegrationAccountUpdateRequestData";
import { WebIntegrationAccountsResponse } from "./WebIntegrationAccountsResponse";
import { WebhooksAuthMethodAttributes } from "./WebhooksAuthMethodAttributes";
import { WebhooksAuthMethodRelationships } from "./WebhooksAuthMethodRelationships";
import { WebhooksAuthMethodResponseData } from "./WebhooksAuthMethodResponseData";
import { WebhooksAuthMethodsResponse } from "./WebhooksAuthMethodsResponse";
import { WebhooksOAuth2ClientCredentialsCreateAttributes } from "./WebhooksOAuth2ClientCredentialsCreateAttributes";
import { WebhooksOAuth2ClientCredentialsCreateData } from "./WebhooksOAuth2ClientCredentialsCreateData";
import { WebhooksOAuth2ClientCredentialsCreateRequest } from "./WebhooksOAuth2ClientCredentialsCreateRequest";
import { WebhooksOAuth2ClientCredentialsRelationship } from "./WebhooksOAuth2ClientCredentialsRelationship";
import { WebhooksOAuth2ClientCredentialsRelationshipData } from "./WebhooksOAuth2ClientCredentialsRelationshipData";
import { WebhooksOAuth2ClientCredentialsResponse } from "./WebhooksOAuth2ClientCredentialsResponse";
import { WebhooksOAuth2ClientCredentialsResponseAttributes } from "./WebhooksOAuth2ClientCredentialsResponseAttributes";
import { WebhooksOAuth2ClientCredentialsResponseData } from "./WebhooksOAuth2ClientCredentialsResponseData";
import { WebhooksOAuth2ClientCredentialsUpdateAttributes } from "./WebhooksOAuth2ClientCredentialsUpdateAttributes";
import { WebhooksOAuth2ClientCredentialsUpdateData } from "./WebhooksOAuth2ClientCredentialsUpdateData";
import { WebhooksOAuth2ClientCredentialsUpdateRequest } from "./WebhooksOAuth2ClientCredentialsUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType: ["bearer_token"],
    CloudflareAccountType: ["cloudflare-accounts"],
    ConfluentAccountType: ["confluent-cloud-accounts"],
    ConfluentResourceType: ["confluent-cloud-resources"],
    CoreWeaveCloudIntegrationAccountAPITokenAuthType: ["coreweave_api_token"],
    DatabricksIntegrationAccountBearerTokenAuthType: ["bearer_token"],
    DatabricksIntegrationAccountOAuthAuthType: ["databricks_oauth"],
    DatabricksIntegrationAccountPrivateActionRunnerAuthType: [
      "private_action_runner",
    ],
    ElasticCloudIntegrationAccountBasicAuthType: ["basic"],
    FastlyAccountType: ["fastly-accounts"],
    FastlyServiceType: ["fastly-services"],
    GoogleChatAppNamedSpaceType: ["google-chat-app-named-space"],
    GoogleChatDelegatedUserType: ["google-chat-delegated-user"],
    GoogleChatOrganizationHandleType: ["google-chat-organization-handle"],
    GoogleChatOrganizationType: ["google-chat-organization"],
    GoogleChatTargetAudienceType: ["google-chat-target-audience"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
    IntegrationType: ["integration"],
    JiraAccountType: ["jira-account"],
    JiraIssueTemplateType: ["jira-issue-template"],
    MicrosoftTeamsChannelInfoType: ["ms-teams-channel-info"],
    MicrosoftTeamsTenantBasedHandleInfoType: [
      "ms-teams-tenant-based-handle-info",
    ],
    MicrosoftTeamsTenantBasedHandleType: ["tenant-based-handle"],
    MicrosoftTeamsWorkflowsWebhookHandleType: ["workflows-webhook-handle"],
    OktaAccountType: ["okta-accounts"],
    OpsgenieAccountType: ["opsgenie-account"],
    OpsgenieServiceRegionType: ["us", "eu", "custom"],
    OpsgenieServiceType: ["opsgenie-service"],
    ServiceNowAssignmentGroupType: ["assignment_groups"],
    ServiceNowBusinessServiceType: ["business_services"],
    ServiceNowInstanceType: ["instance"],
    ServiceNowTemplateType: ["servicenow_templates"],
    ServiceNowUserType: ["users"],
    SlackUserBindingType: ["team_id"],
    SnowflakeIntegrationAccountPrivateKeyAuthType: ["snowflake_private_key"],
    StatuspageAccountType: ["statuspage-account"],
    StatuspageUrlSettingType: ["statuspage-url-setting"],
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType: [
      "bearer_token",
    ],
    TwilioIntegrationAccountBasicAuthType: ["basic"],
    WebIntegrationAccountType: ["Account"],
    WebhooksAuthMethodProtocol: ["oauth2-client-credentials"],
    WebhooksAuthMethodType: ["webhooks-auth-method"],
    WebhooksOAuth2ClientCredentialsType: [
      "webhooks-auth-method-oauth2-client-credentials",
    ],
  },
  oneOfMap: {
    ChatGPTEnterpriseIntegrationAccountAuthenticationRequest: [
      "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest",
    ],
    ChatGPTEnterpriseIntegrationAccountAuthenticationResponse: [
      "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse",
    ],
    ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate: [
      "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate",
    ],
    CoreWeaveCloudIntegrationAccountAuthenticationRequest: [
      "CoreWeaveCloudIntegrationAccountAPITokenAuthRequest",
    ],
    CoreWeaveCloudIntegrationAccountAuthenticationResponse: [
      "CoreWeaveCloudIntegrationAccountAPITokenAuthResponse",
    ],
    CoreWeaveCloudIntegrationAccountAuthenticationUpdate: [
      "CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate",
    ],
    DatabricksIntegrationAccountAuthenticationRequest: [
      "DatabricksIntegrationAccountOAuthAuthRequest",
      "DatabricksIntegrationAccountPrivateActionRunnerAuthRequest",
    ],
    DatabricksIntegrationAccountAuthenticationResponse: [
      "DatabricksIntegrationAccountOAuthAuthResponse",
      "DatabricksIntegrationAccountPrivateActionRunnerAuthResponse",
      "DatabricksIntegrationAccountBearerTokenAuthResponse",
    ],
    DatabricksIntegrationAccountAuthenticationUpdate: [
      "DatabricksIntegrationAccountOAuthAuthUpdate",
      "DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate",
      "DatabricksIntegrationAccountBearerTokenAuthUpdate",
    ],
    ElasticCloudIntegrationAccountAuthenticationRequest: [
      "ElasticCloudIntegrationAccountBasicAuthRequest",
    ],
    ElasticCloudIntegrationAccountAuthenticationResponse: [
      "ElasticCloudIntegrationAccountBasicAuthResponse",
    ],
    ElasticCloudIntegrationAccountAuthenticationUpdate: [
      "ElasticCloudIntegrationAccountBasicAuthUpdate",
    ],
    SnowflakeIntegrationAccountAuthenticationRequest: [
      "SnowflakeIntegrationAccountPrivateKeyAuthRequest",
    ],
    SnowflakeIntegrationAccountAuthenticationResponse: [
      "SnowflakeIntegrationAccountPrivateKeyAuthResponse",
    ],
    SnowflakeIntegrationAccountAuthenticationUpdate: [
      "SnowflakeIntegrationAccountPrivateKeyAuthUpdate",
    ],
    TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest: [
      "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest",
    ],
    TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse: [
      "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse",
    ],
    TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate: [
      "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate",
    ],
    TwilioIntegrationAccountAuthenticationRequest: [
      "TwilioIntegrationAccountBasicAuthRequest",
    ],
    TwilioIntegrationAccountAuthenticationResponse: [
      "TwilioIntegrationAccountBasicAuthResponse",
    ],
    TwilioIntegrationAccountAuthenticationUpdate: [
      "TwilioIntegrationAccountBasicAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest:
      ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest,
    ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse:
      ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse,
    ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest:
      ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest,
    ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse:
      ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse,
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest:
      ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest,
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse:
      ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse,
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate:
      ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate,
    ChatGPTEnterpriseIntegrationAccountCreateAttributes:
      ChatGPTEnterpriseIntegrationAccountCreateAttributes,
    ChatGPTEnterpriseIntegrationAccountCreateData:
      ChatGPTEnterpriseIntegrationAccountCreateData,
    ChatGPTEnterpriseIntegrationAccountCreateRequest:
      ChatGPTEnterpriseIntegrationAccountCreateRequest,
    ChatGPTEnterpriseIntegrationAccountResponse:
      ChatGPTEnterpriseIntegrationAccountResponse,
    ChatGPTEnterpriseIntegrationAccountResponseAttributes:
      ChatGPTEnterpriseIntegrationAccountResponseAttributes,
    ChatGPTEnterpriseIntegrationAccountResponseData:
      ChatGPTEnterpriseIntegrationAccountResponseData,
    ChatGPTEnterpriseIntegrationAccountSettingsRequest:
      ChatGPTEnterpriseIntegrationAccountSettingsRequest,
    ChatGPTEnterpriseIntegrationAccountSettingsResponse:
      ChatGPTEnterpriseIntegrationAccountSettingsResponse,
    ChatGPTEnterpriseIntegrationAccountSettingsUpdate:
      ChatGPTEnterpriseIntegrationAccountSettingsUpdate,
    ChatGPTEnterpriseIntegrationAccountUpdateAttributes:
      ChatGPTEnterpriseIntegrationAccountUpdateAttributes,
    ChatGPTEnterpriseIntegrationAccountUpdateData:
      ChatGPTEnterpriseIntegrationAccountUpdateData,
    ChatGPTEnterpriseIntegrationAccountUpdateRequest:
      ChatGPTEnterpriseIntegrationAccountUpdateRequest,
    ChatGPTEnterpriseIntegrationAccountsResponse:
      ChatGPTEnterpriseIntegrationAccountsResponse,
    ChatGPTEnterpriseIntegrationDataflowsRequest:
      ChatGPTEnterpriseIntegrationDataflowsRequest,
    ChatGPTEnterpriseIntegrationDataflowsResponse:
      ChatGPTEnterpriseIntegrationDataflowsResponse,
    CloudflareAccountCreateRequest: CloudflareAccountCreateRequest,
    CloudflareAccountCreateRequestAttributes:
      CloudflareAccountCreateRequestAttributes,
    CloudflareAccountCreateRequestData: CloudflareAccountCreateRequestData,
    CloudflareAccountResponse: CloudflareAccountResponse,
    CloudflareAccountResponseAttributes: CloudflareAccountResponseAttributes,
    CloudflareAccountResponseData: CloudflareAccountResponseData,
    CloudflareAccountUpdateRequest: CloudflareAccountUpdateRequest,
    CloudflareAccountUpdateRequestAttributes:
      CloudflareAccountUpdateRequestAttributes,
    CloudflareAccountUpdateRequestData: CloudflareAccountUpdateRequestData,
    CloudflareAccountsResponse: CloudflareAccountsResponse,
    ConfluentAccountCreateRequest: ConfluentAccountCreateRequest,
    ConfluentAccountCreateRequestAttributes:
      ConfluentAccountCreateRequestAttributes,
    ConfluentAccountCreateRequestData: ConfluentAccountCreateRequestData,
    ConfluentAccountResourceAttributes: ConfluentAccountResourceAttributes,
    ConfluentAccountResponse: ConfluentAccountResponse,
    ConfluentAccountResponseAttributes: ConfluentAccountResponseAttributes,
    ConfluentAccountResponseData: ConfluentAccountResponseData,
    ConfluentAccountUpdateRequest: ConfluentAccountUpdateRequest,
    ConfluentAccountUpdateRequestAttributes:
      ConfluentAccountUpdateRequestAttributes,
    ConfluentAccountUpdateRequestData: ConfluentAccountUpdateRequestData,
    ConfluentAccountsResponse: ConfluentAccountsResponse,
    ConfluentResourceRequest: ConfluentResourceRequest,
    ConfluentResourceRequestAttributes: ConfluentResourceRequestAttributes,
    ConfluentResourceRequestData: ConfluentResourceRequestData,
    ConfluentResourceResponse: ConfluentResourceResponse,
    ConfluentResourceResponseAttributes: ConfluentResourceResponseAttributes,
    ConfluentResourceResponseData: ConfluentResourceResponseData,
    ConfluentResourcesResponse: ConfluentResourcesResponse,
    CoreWeaveCloudIntegrationAccountAPITokenAuthRequest:
      CoreWeaveCloudIntegrationAccountAPITokenAuthRequest,
    CoreWeaveCloudIntegrationAccountAPITokenAuthResponse:
      CoreWeaveCloudIntegrationAccountAPITokenAuthResponse,
    CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate:
      CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate,
    CoreWeaveCloudIntegrationAccountCreateAttributes:
      CoreWeaveCloudIntegrationAccountCreateAttributes,
    CoreWeaveCloudIntegrationAccountCreateData:
      CoreWeaveCloudIntegrationAccountCreateData,
    CoreWeaveCloudIntegrationAccountCreateRequest:
      CoreWeaveCloudIntegrationAccountCreateRequest,
    CoreWeaveCloudIntegrationAccountResponse:
      CoreWeaveCloudIntegrationAccountResponse,
    CoreWeaveCloudIntegrationAccountResponseAttributes:
      CoreWeaveCloudIntegrationAccountResponseAttributes,
    CoreWeaveCloudIntegrationAccountResponseData:
      CoreWeaveCloudIntegrationAccountResponseData,
    CoreWeaveCloudIntegrationAccountSettingsRequest:
      CoreWeaveCloudIntegrationAccountSettingsRequest,
    CoreWeaveCloudIntegrationAccountSettingsResponse:
      CoreWeaveCloudIntegrationAccountSettingsResponse,
    CoreWeaveCloudIntegrationAccountSettingsUpdate:
      CoreWeaveCloudIntegrationAccountSettingsUpdate,
    CoreWeaveCloudIntegrationAccountUpdateAttributes:
      CoreWeaveCloudIntegrationAccountUpdateAttributes,
    CoreWeaveCloudIntegrationAccountUpdateData:
      CoreWeaveCloudIntegrationAccountUpdateData,
    CoreWeaveCloudIntegrationAccountUpdateRequest:
      CoreWeaveCloudIntegrationAccountUpdateRequest,
    CoreWeaveCloudIntegrationAccountsResponse:
      CoreWeaveCloudIntegrationAccountsResponse,
    CoreWeaveCloudIntegrationDataflowsRequest:
      CoreWeaveCloudIntegrationDataflowsRequest,
    CoreWeaveCloudIntegrationDataflowsResponse:
      CoreWeaveCloudIntegrationDataflowsResponse,
    CoreWeaveCloudLogsIntegrationDataflowRequest:
      CoreWeaveCloudLogsIntegrationDataflowRequest,
    CoreWeaveCloudLogsIntegrationDataflowResponse:
      CoreWeaveCloudLogsIntegrationDataflowResponse,
    CoreWeaveCloudMetricsIntegrationDataflowRequest:
      CoreWeaveCloudMetricsIntegrationDataflowRequest,
    CoreWeaveCloudMetricsIntegrationDataflowResponse:
      CoreWeaveCloudMetricsIntegrationDataflowResponse,
    DatabricksCloudCostMetricsIntegrationDataflowRequest:
      DatabricksCloudCostMetricsIntegrationDataflowRequest,
    DatabricksCloudCostMetricsIntegrationDataflowResponse:
      DatabricksCloudCostMetricsIntegrationDataflowResponse,
    DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest:
      DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest,
    DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse:
      DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse,
    DatabricksIntegrationAccountBearerTokenAuthResponse:
      DatabricksIntegrationAccountBearerTokenAuthResponse,
    DatabricksIntegrationAccountBearerTokenAuthUpdate:
      DatabricksIntegrationAccountBearerTokenAuthUpdate,
    DatabricksIntegrationAccountCreateAttributes:
      DatabricksIntegrationAccountCreateAttributes,
    DatabricksIntegrationAccountCreateData:
      DatabricksIntegrationAccountCreateData,
    DatabricksIntegrationAccountCreateRequest:
      DatabricksIntegrationAccountCreateRequest,
    DatabricksIntegrationAccountOAuthAuthRequest:
      DatabricksIntegrationAccountOAuthAuthRequest,
    DatabricksIntegrationAccountOAuthAuthResponse:
      DatabricksIntegrationAccountOAuthAuthResponse,
    DatabricksIntegrationAccountOAuthAuthUpdate:
      DatabricksIntegrationAccountOAuthAuthUpdate,
    DatabricksIntegrationAccountPrivateActionRunnerAuthRequest:
      DatabricksIntegrationAccountPrivateActionRunnerAuthRequest,
    DatabricksIntegrationAccountPrivateActionRunnerAuthResponse:
      DatabricksIntegrationAccountPrivateActionRunnerAuthResponse,
    DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate:
      DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate,
    DatabricksIntegrationAccountResponse: DatabricksIntegrationAccountResponse,
    DatabricksIntegrationAccountResponseAttributes:
      DatabricksIntegrationAccountResponseAttributes,
    DatabricksIntegrationAccountResponseData:
      DatabricksIntegrationAccountResponseData,
    DatabricksIntegrationAccountSettingsRequest:
      DatabricksIntegrationAccountSettingsRequest,
    DatabricksIntegrationAccountSettingsResponse:
      DatabricksIntegrationAccountSettingsResponse,
    DatabricksIntegrationAccountSettingsUpdate:
      DatabricksIntegrationAccountSettingsUpdate,
    DatabricksIntegrationAccountUpdateAttributes:
      DatabricksIntegrationAccountUpdateAttributes,
    DatabricksIntegrationAccountUpdateData:
      DatabricksIntegrationAccountUpdateData,
    DatabricksIntegrationAccountUpdateRequest:
      DatabricksIntegrationAccountUpdateRequest,
    DatabricksIntegrationAccountsResponse:
      DatabricksIntegrationAccountsResponse,
    DatabricksIntegrationDataflowsRequest:
      DatabricksIntegrationDataflowsRequest,
    DatabricksIntegrationDataflowsResponse:
      DatabricksIntegrationDataflowsResponse,
    DatabricksModelServingMetricsIntegrationDataflowRequest:
      DatabricksModelServingMetricsIntegrationDataflowRequest,
    DatabricksModelServingMetricsIntegrationDataflowResponse:
      DatabricksModelServingMetricsIntegrationDataflowResponse,
    ElasticCloudDetailedIndexStatsIntegrationDataflowRequest:
      ElasticCloudDetailedIndexStatsIntegrationDataflowRequest,
    ElasticCloudDetailedIndexStatsIntegrationDataflowResponse:
      ElasticCloudDetailedIndexStatsIntegrationDataflowResponse,
    ElasticCloudIndexStatsIntegrationDataflowRequest:
      ElasticCloudIndexStatsIntegrationDataflowRequest,
    ElasticCloudIndexStatsIntegrationDataflowResponse:
      ElasticCloudIndexStatsIntegrationDataflowResponse,
    ElasticCloudIntegrationAccountBasicAuthRequest:
      ElasticCloudIntegrationAccountBasicAuthRequest,
    ElasticCloudIntegrationAccountBasicAuthResponse:
      ElasticCloudIntegrationAccountBasicAuthResponse,
    ElasticCloudIntegrationAccountBasicAuthUpdate:
      ElasticCloudIntegrationAccountBasicAuthUpdate,
    ElasticCloudIntegrationAccountCreateAttributes:
      ElasticCloudIntegrationAccountCreateAttributes,
    ElasticCloudIntegrationAccountCreateData:
      ElasticCloudIntegrationAccountCreateData,
    ElasticCloudIntegrationAccountCreateRequest:
      ElasticCloudIntegrationAccountCreateRequest,
    ElasticCloudIntegrationAccountResponse:
      ElasticCloudIntegrationAccountResponse,
    ElasticCloudIntegrationAccountResponseAttributes:
      ElasticCloudIntegrationAccountResponseAttributes,
    ElasticCloudIntegrationAccountResponseData:
      ElasticCloudIntegrationAccountResponseData,
    ElasticCloudIntegrationAccountSettingsRequest:
      ElasticCloudIntegrationAccountSettingsRequest,
    ElasticCloudIntegrationAccountSettingsResponse:
      ElasticCloudIntegrationAccountSettingsResponse,
    ElasticCloudIntegrationAccountSettingsUpdate:
      ElasticCloudIntegrationAccountSettingsUpdate,
    ElasticCloudIntegrationAccountUpdateAttributes:
      ElasticCloudIntegrationAccountUpdateAttributes,
    ElasticCloudIntegrationAccountUpdateData:
      ElasticCloudIntegrationAccountUpdateData,
    ElasticCloudIntegrationAccountUpdateRequest:
      ElasticCloudIntegrationAccountUpdateRequest,
    ElasticCloudIntegrationAccountsResponse:
      ElasticCloudIntegrationAccountsResponse,
    ElasticCloudIntegrationDataflowsRequest:
      ElasticCloudIntegrationDataflowsRequest,
    ElasticCloudIntegrationDataflowsResponse:
      ElasticCloudIntegrationDataflowsResponse,
    ElasticCloudMetricsIntegrationDataflowResponse:
      ElasticCloudMetricsIntegrationDataflowResponse,
    ElasticCloudPendingTaskStatsIntegrationDataflowRequest:
      ElasticCloudPendingTaskStatsIntegrationDataflowRequest,
    ElasticCloudPendingTaskStatsIntegrationDataflowResponse:
      ElasticCloudPendingTaskStatsIntegrationDataflowResponse,
    ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest:
      ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest,
    ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse:
      ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse,
    ElasticCloudPrimaryShardStatsIntegrationDataflowRequest:
      ElasticCloudPrimaryShardStatsIntegrationDataflowRequest,
    ElasticCloudPrimaryShardStatsIntegrationDataflowResponse:
      ElasticCloudPrimaryShardStatsIntegrationDataflowResponse,
    ElasticCloudShardAllocationStatsIntegrationDataflowRequest:
      ElasticCloudShardAllocationStatsIntegrationDataflowRequest,
    ElasticCloudShardAllocationStatsIntegrationDataflowResponse:
      ElasticCloudShardAllocationStatsIntegrationDataflowResponse,
    ElasticCloudSlmStatsIntegrationDataflowRequest:
      ElasticCloudSlmStatsIntegrationDataflowRequest,
    ElasticCloudSlmStatsIntegrationDataflowResponse:
      ElasticCloudSlmStatsIntegrationDataflowResponse,
    FastlyAccounResponseAttributes: FastlyAccounResponseAttributes,
    FastlyAccountCreateRequest: FastlyAccountCreateRequest,
    FastlyAccountCreateRequestAttributes: FastlyAccountCreateRequestAttributes,
    FastlyAccountCreateRequestData: FastlyAccountCreateRequestData,
    FastlyAccountResponse: FastlyAccountResponse,
    FastlyAccountResponseData: FastlyAccountResponseData,
    FastlyAccountUpdateRequest: FastlyAccountUpdateRequest,
    FastlyAccountUpdateRequestAttributes: FastlyAccountUpdateRequestAttributes,
    FastlyAccountUpdateRequestData: FastlyAccountUpdateRequestData,
    FastlyAccountsResponse: FastlyAccountsResponse,
    FastlyService: FastlyService,
    FastlyServiceAttributes: FastlyServiceAttributes,
    FastlyServiceData: FastlyServiceData,
    FastlyServiceRequest: FastlyServiceRequest,
    FastlyServiceResponse: FastlyServiceResponse,
    FastlyServicesResponse: FastlyServicesResponse,
    GoogleChatAppNamedSpaceResponse: GoogleChatAppNamedSpaceResponse,
    GoogleChatAppNamedSpaceResponseAttributes:
      GoogleChatAppNamedSpaceResponseAttributes,
    GoogleChatAppNamedSpaceResponseData: GoogleChatAppNamedSpaceResponseData,
    GoogleChatCreateOrganizationHandleRequest:
      GoogleChatCreateOrganizationHandleRequest,
    GoogleChatCreateOrganizationHandleRequestAttributes:
      GoogleChatCreateOrganizationHandleRequestAttributes,
    GoogleChatCreateOrganizationHandleRequestData:
      GoogleChatCreateOrganizationHandleRequestData,
    GoogleChatDelegatedUserAttributes: GoogleChatDelegatedUserAttributes,
    GoogleChatDelegatedUserData: GoogleChatDelegatedUserData,
    GoogleChatDelegatedUserResponse: GoogleChatDelegatedUserResponse,
    GoogleChatOrganizationAttributes: GoogleChatOrganizationAttributes,
    GoogleChatOrganizationData: GoogleChatOrganizationData,
    GoogleChatOrganizationHandleResponse: GoogleChatOrganizationHandleResponse,
    GoogleChatOrganizationHandleResponseAttributes:
      GoogleChatOrganizationHandleResponseAttributes,
    GoogleChatOrganizationHandleResponseData:
      GoogleChatOrganizationHandleResponseData,
    GoogleChatOrganizationHandlesResponse:
      GoogleChatOrganizationHandlesResponse,
    GoogleChatOrganizationRelationships: GoogleChatOrganizationRelationships,
    GoogleChatOrganizationRelationshipsDelegatedUser:
      GoogleChatOrganizationRelationshipsDelegatedUser,
    GoogleChatOrganizationRelationshipsDelegatedUserData:
      GoogleChatOrganizationRelationshipsDelegatedUserData,
    GoogleChatOrganizationResponse: GoogleChatOrganizationResponse,
    GoogleChatOrganizationsResponse: GoogleChatOrganizationsResponse,
    GoogleChatTargetAudienceAttributes: GoogleChatTargetAudienceAttributes,
    GoogleChatTargetAudienceCreateRequest:
      GoogleChatTargetAudienceCreateRequest,
    GoogleChatTargetAudienceCreateRequestAttributes:
      GoogleChatTargetAudienceCreateRequestAttributes,
    GoogleChatTargetAudienceCreateRequestData:
      GoogleChatTargetAudienceCreateRequestData,
    GoogleChatTargetAudienceData: GoogleChatTargetAudienceData,
    GoogleChatTargetAudienceResponse: GoogleChatTargetAudienceResponse,
    GoogleChatTargetAudienceUpdateRequest:
      GoogleChatTargetAudienceUpdateRequest,
    GoogleChatTargetAudienceUpdateRequestAttributes:
      GoogleChatTargetAudienceUpdateRequestAttributes,
    GoogleChatTargetAudienceUpdateRequestData:
      GoogleChatTargetAudienceUpdateRequestData,
    GoogleChatTargetAudiencesResponse: GoogleChatTargetAudiencesResponse,
    GoogleChatUpdateOrganizationHandleRequest:
      GoogleChatUpdateOrganizationHandleRequest,
    GoogleChatUpdateOrganizationHandleRequestAttributes:
      GoogleChatUpdateOrganizationHandleRequestAttributes,
    GoogleChatUpdateOrganizationHandleRequestData:
      GoogleChatUpdateOrganizationHandleRequestData,
    Integration: Integration,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAttributes: IntegrationAttributes,
    IntegrationLinks: IntegrationLinks,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JiraAccountAttributes: JiraAccountAttributes,
    JiraAccountData: JiraAccountData,
    JiraAccountRelationship: JiraAccountRelationship,
    JiraAccountsMeta: JiraAccountsMeta,
    JiraAccountsResponse: JiraAccountsResponse,
    JiraIssueTemplateCreateRequest: JiraIssueTemplateCreateRequest,
    JiraIssueTemplateCreateRequestAttributes:
      JiraIssueTemplateCreateRequestAttributes,
    JiraIssueTemplateCreateRequestAttributesJiraAccount:
      JiraIssueTemplateCreateRequestAttributesJiraAccount,
    JiraIssueTemplateCreateRequestData: JiraIssueTemplateCreateRequestData,
    JiraIssueTemplateData: JiraIssueTemplateData,
    JiraIssueTemplateDataAttributes: JiraIssueTemplateDataAttributes,
    JiraIssueTemplateDataRelationships: JiraIssueTemplateDataRelationships,
    JiraIssueTemplateResponse: JiraIssueTemplateResponse,
    JiraIssueTemplateUpdateRequest: JiraIssueTemplateUpdateRequest,
    JiraIssueTemplateUpdateRequestAttributes:
      JiraIssueTemplateUpdateRequestAttributes,
    JiraIssueTemplateUpdateRequestData: JiraIssueTemplateUpdateRequestData,
    JiraIssueTemplatesResponse: JiraIssueTemplatesResponse,
    ListIntegrationsResponse: ListIntegrationsResponse,
    MicrosoftTeamsChannelInfoResponseAttributes:
      MicrosoftTeamsChannelInfoResponseAttributes,
    MicrosoftTeamsChannelInfoResponseData:
      MicrosoftTeamsChannelInfoResponseData,
    MicrosoftTeamsCreateTenantBasedHandleRequest:
      MicrosoftTeamsCreateTenantBasedHandleRequest,
    MicrosoftTeamsCreateWorkflowsWebhookHandleRequest:
      MicrosoftTeamsCreateWorkflowsWebhookHandleRequest,
    MicrosoftTeamsGetChannelByNameResponse:
      MicrosoftTeamsGetChannelByNameResponse,
    MicrosoftTeamsTenantBasedHandleAttributes:
      MicrosoftTeamsTenantBasedHandleAttributes,
    MicrosoftTeamsTenantBasedHandleInfoResponseAttributes:
      MicrosoftTeamsTenantBasedHandleInfoResponseAttributes,
    MicrosoftTeamsTenantBasedHandleInfoResponseData:
      MicrosoftTeamsTenantBasedHandleInfoResponseData,
    MicrosoftTeamsTenantBasedHandleRequestAttributes:
      MicrosoftTeamsTenantBasedHandleRequestAttributes,
    MicrosoftTeamsTenantBasedHandleRequestData:
      MicrosoftTeamsTenantBasedHandleRequestData,
    MicrosoftTeamsTenantBasedHandleResponse:
      MicrosoftTeamsTenantBasedHandleResponse,
    MicrosoftTeamsTenantBasedHandleResponseData:
      MicrosoftTeamsTenantBasedHandleResponseData,
    MicrosoftTeamsTenantBasedHandlesResponse:
      MicrosoftTeamsTenantBasedHandlesResponse,
    MicrosoftTeamsUpdateTenantBasedHandleRequest:
      MicrosoftTeamsUpdateTenantBasedHandleRequest,
    MicrosoftTeamsUpdateTenantBasedHandleRequestData:
      MicrosoftTeamsUpdateTenantBasedHandleRequestData,
    MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest:
      MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest,
    MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData:
      MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData,
    MicrosoftTeamsWorkflowsWebhookHandleAttributes:
      MicrosoftTeamsWorkflowsWebhookHandleAttributes,
    MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes:
      MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes,
    MicrosoftTeamsWorkflowsWebhookHandleRequestData:
      MicrosoftTeamsWorkflowsWebhookHandleRequestData,
    MicrosoftTeamsWorkflowsWebhookHandleResponse:
      MicrosoftTeamsWorkflowsWebhookHandleResponse,
    MicrosoftTeamsWorkflowsWebhookHandleResponseData:
      MicrosoftTeamsWorkflowsWebhookHandleResponseData,
    MicrosoftTeamsWorkflowsWebhookHandlesResponse:
      MicrosoftTeamsWorkflowsWebhookHandlesResponse,
    MicrosoftTeamsWorkflowsWebhookResponseAttributes:
      MicrosoftTeamsWorkflowsWebhookResponseAttributes,
    OktaAccount: OktaAccount,
    OktaAccountAttributes: OktaAccountAttributes,
    OktaAccountRequest: OktaAccountRequest,
    OktaAccountResponse: OktaAccountResponse,
    OktaAccountResponseData: OktaAccountResponseData,
    OktaAccountUpdateRequest: OktaAccountUpdateRequest,
    OktaAccountUpdateRequestAttributes: OktaAccountUpdateRequestAttributes,
    OktaAccountUpdateRequestData: OktaAccountUpdateRequestData,
    OktaAccountsResponse: OktaAccountsResponse,
    OpsgenieAccountCreateAttributes: OpsgenieAccountCreateAttributes,
    OpsgenieAccountCreateData: OpsgenieAccountCreateData,
    OpsgenieAccountCreateRequest: OpsgenieAccountCreateRequest,
    OpsgenieAccountResponse: OpsgenieAccountResponse,
    OpsgenieAccountResponseAttributes: OpsgenieAccountResponseAttributes,
    OpsgenieAccountResponseData: OpsgenieAccountResponseData,
    OpsgenieAccountUpdateAttributes: OpsgenieAccountUpdateAttributes,
    OpsgenieAccountUpdateData: OpsgenieAccountUpdateData,
    OpsgenieAccountUpdateRequest: OpsgenieAccountUpdateRequest,
    OpsgenieAccountsResponse: OpsgenieAccountsResponse,
    OpsgenieServiceCreateAttributes: OpsgenieServiceCreateAttributes,
    OpsgenieServiceCreateData: OpsgenieServiceCreateData,
    OpsgenieServiceCreateRequest: OpsgenieServiceCreateRequest,
    OpsgenieServiceResponse: OpsgenieServiceResponse,
    OpsgenieServiceResponseAttributes: OpsgenieServiceResponseAttributes,
    OpsgenieServiceResponseData: OpsgenieServiceResponseData,
    OpsgenieServiceUpdateAttributes: OpsgenieServiceUpdateAttributes,
    OpsgenieServiceUpdateData: OpsgenieServiceUpdateData,
    OpsgenieServiceUpdateRequest: OpsgenieServiceUpdateRequest,
    OpsgenieServicesResponse: OpsgenieServicesResponse,
    ServiceNowAssignmentGroupAttributes: ServiceNowAssignmentGroupAttributes,
    ServiceNowAssignmentGroupData: ServiceNowAssignmentGroupData,
    ServiceNowAssignmentGroupsResponse: ServiceNowAssignmentGroupsResponse,
    ServiceNowBusinessServiceAttributes: ServiceNowBusinessServiceAttributes,
    ServiceNowBusinessServiceData: ServiceNowBusinessServiceData,
    ServiceNowBusinessServicesResponse: ServiceNowBusinessServicesResponse,
    ServiceNowInstanceAttributes: ServiceNowInstanceAttributes,
    ServiceNowInstanceData: ServiceNowInstanceData,
    ServiceNowInstancesResponse: ServiceNowInstancesResponse,
    ServiceNowTemplateAttributes: ServiceNowTemplateAttributes,
    ServiceNowTemplateCreateRequest: ServiceNowTemplateCreateRequest,
    ServiceNowTemplateCreateRequestAttributes:
      ServiceNowTemplateCreateRequestAttributes,
    ServiceNowTemplateCreateRequestData: ServiceNowTemplateCreateRequestData,
    ServiceNowTemplateData: ServiceNowTemplateData,
    ServiceNowTemplateResponse: ServiceNowTemplateResponse,
    ServiceNowTemplateUpdateRequest: ServiceNowTemplateUpdateRequest,
    ServiceNowTemplateUpdateRequestAttributes:
      ServiceNowTemplateUpdateRequestAttributes,
    ServiceNowTemplateUpdateRequestData: ServiceNowTemplateUpdateRequestData,
    ServiceNowTemplatesResponse: ServiceNowTemplatesResponse,
    ServiceNowUserAttributes: ServiceNowUserAttributes,
    ServiceNowUserData: ServiceNowUserData,
    ServiceNowUsersResponse: ServiceNowUsersResponse,
    SlackUserBindingData: SlackUserBindingData,
    SlackUserBindingsResponse: SlackUserBindingsResponse,
    SnowflakeAccountUsageMetricsIntegrationDataflowRequest:
      SnowflakeAccountUsageMetricsIntegrationDataflowRequest,
    SnowflakeAccountUsageMetricsIntegrationDataflowResponse:
      SnowflakeAccountUsageMetricsIntegrationDataflowResponse,
    SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest:
      SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest,
    SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse:
      SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse,
    SnowflakeCloudCostMetricsIntegrationDataflowRequest:
      SnowflakeCloudCostMetricsIntegrationDataflowRequest,
    SnowflakeCloudCostMetricsIntegrationDataflowResponse:
      SnowflakeCloudCostMetricsIntegrationDataflowResponse,
    SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest:
      SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest,
    SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse:
      SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse,
    SnowflakeEventTableLogsIntegrationDataflowRequest:
      SnowflakeEventTableLogsIntegrationDataflowRequest,
    SnowflakeEventTableLogsIntegrationDataflowResponse:
      SnowflakeEventTableLogsIntegrationDataflowResponse,
    SnowflakeEventTableLogsIntegrationDataflowSettingsRequest:
      SnowflakeEventTableLogsIntegrationDataflowSettingsRequest,
    SnowflakeEventTableLogsIntegrationDataflowSettingsResponse:
      SnowflakeEventTableLogsIntegrationDataflowSettingsResponse,
    SnowflakeIntegrationAccountCreateAttributes:
      SnowflakeIntegrationAccountCreateAttributes,
    SnowflakeIntegrationAccountCreateData:
      SnowflakeIntegrationAccountCreateData,
    SnowflakeIntegrationAccountCreateRequest:
      SnowflakeIntegrationAccountCreateRequest,
    SnowflakeIntegrationAccountPrivateKeyAuthRequest:
      SnowflakeIntegrationAccountPrivateKeyAuthRequest,
    SnowflakeIntegrationAccountPrivateKeyAuthResponse:
      SnowflakeIntegrationAccountPrivateKeyAuthResponse,
    SnowflakeIntegrationAccountPrivateKeyAuthUpdate:
      SnowflakeIntegrationAccountPrivateKeyAuthUpdate,
    SnowflakeIntegrationAccountResponse: SnowflakeIntegrationAccountResponse,
    SnowflakeIntegrationAccountResponseAttributes:
      SnowflakeIntegrationAccountResponseAttributes,
    SnowflakeIntegrationAccountResponseData:
      SnowflakeIntegrationAccountResponseData,
    SnowflakeIntegrationAccountSettingsRequest:
      SnowflakeIntegrationAccountSettingsRequest,
    SnowflakeIntegrationAccountSettingsResponse:
      SnowflakeIntegrationAccountSettingsResponse,
    SnowflakeIntegrationAccountSettingsUpdate:
      SnowflakeIntegrationAccountSettingsUpdate,
    SnowflakeIntegrationAccountUpdateAttributes:
      SnowflakeIntegrationAccountUpdateAttributes,
    SnowflakeIntegrationAccountUpdateData:
      SnowflakeIntegrationAccountUpdateData,
    SnowflakeIntegrationAccountUpdateRequest:
      SnowflakeIntegrationAccountUpdateRequest,
    SnowflakeIntegrationAccountsResponse: SnowflakeIntegrationAccountsResponse,
    SnowflakeIntegrationDataflowsRequest: SnowflakeIntegrationDataflowsRequest,
    SnowflakeIntegrationDataflowsResponse:
      SnowflakeIntegrationDataflowsResponse,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse,
    SnowflakeQueryHistoryLogsIntegrationDataflowRequest:
      SnowflakeQueryHistoryLogsIntegrationDataflowRequest,
    SnowflakeQueryHistoryLogsIntegrationDataflowResponse:
      SnowflakeQueryHistoryLogsIntegrationDataflowResponse,
    SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest:
      SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest,
    SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse:
      SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse,
    SnowflakeSecurityLogsIntegrationDataflowRequest:
      SnowflakeSecurityLogsIntegrationDataflowRequest,
    SnowflakeSecurityLogsIntegrationDataflowResponse:
      SnowflakeSecurityLogsIntegrationDataflowResponse,
    SnowflakeSecurityLogsIntegrationDataflowSettingsRequest:
      SnowflakeSecurityLogsIntegrationDataflowSettingsRequest,
    SnowflakeSecurityLogsIntegrationDataflowSettingsResponse:
      SnowflakeSecurityLogsIntegrationDataflowSettingsResponse,
    SnowflakeTaskHistoryLogsIntegrationDataflowRequest:
      SnowflakeTaskHistoryLogsIntegrationDataflowRequest,
    SnowflakeTaskHistoryLogsIntegrationDataflowResponse:
      SnowflakeTaskHistoryLogsIntegrationDataflowResponse,
    SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest:
      SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest,
    SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse:
      SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse,
    StatuspageAccountCreateAttributes: StatuspageAccountCreateAttributes,
    StatuspageAccountCreateData: StatuspageAccountCreateData,
    StatuspageAccountCreateRequest: StatuspageAccountCreateRequest,
    StatuspageAccountResponse: StatuspageAccountResponse,
    StatuspageAccountResponseAttributes: StatuspageAccountResponseAttributes,
    StatuspageAccountResponseData: StatuspageAccountResponseData,
    StatuspageAccountUpdateAttributes: StatuspageAccountUpdateAttributes,
    StatuspageAccountUpdateData: StatuspageAccountUpdateData,
    StatuspageAccountUpdateRequest: StatuspageAccountUpdateRequest,
    StatuspageUrlSettingCreateAttributes: StatuspageUrlSettingCreateAttributes,
    StatuspageUrlSettingCreateData: StatuspageUrlSettingCreateData,
    StatuspageUrlSettingCreateRequest: StatuspageUrlSettingCreateRequest,
    StatuspageUrlSettingResponse: StatuspageUrlSettingResponse,
    StatuspageUrlSettingResponseAttributes:
      StatuspageUrlSettingResponseAttributes,
    StatuspageUrlSettingResponseData: StatuspageUrlSettingResponseData,
    StatuspageUrlSettingUpdateAttributes: StatuspageUrlSettingUpdateAttributes,
    StatuspageUrlSettingUpdateData: StatuspageUrlSettingUpdateData,
    StatuspageUrlSettingUpdateRequest: StatuspageUrlSettingUpdateRequest,
    StatuspageUrlSettingsResponse: StatuspageUrlSettingsResponse,
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest:
      TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest,
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse:
      TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse,
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate:
      TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate,
    TemporalCloudOpenMetricsIntegrationAccountCreateAttributes:
      TemporalCloudOpenMetricsIntegrationAccountCreateAttributes,
    TemporalCloudOpenMetricsIntegrationAccountCreateData:
      TemporalCloudOpenMetricsIntegrationAccountCreateData,
    TemporalCloudOpenMetricsIntegrationAccountCreateRequest:
      TemporalCloudOpenMetricsIntegrationAccountCreateRequest,
    TemporalCloudOpenMetricsIntegrationAccountResponse:
      TemporalCloudOpenMetricsIntegrationAccountResponse,
    TemporalCloudOpenMetricsIntegrationAccountResponseAttributes:
      TemporalCloudOpenMetricsIntegrationAccountResponseAttributes,
    TemporalCloudOpenMetricsIntegrationAccountResponseData:
      TemporalCloudOpenMetricsIntegrationAccountResponseData,
    TemporalCloudOpenMetricsIntegrationAccountSettingsRequest:
      TemporalCloudOpenMetricsIntegrationAccountSettingsRequest,
    TemporalCloudOpenMetricsIntegrationAccountSettingsResponse:
      TemporalCloudOpenMetricsIntegrationAccountSettingsResponse,
    TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate:
      TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate,
    TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes:
      TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes,
    TemporalCloudOpenMetricsIntegrationAccountUpdateData:
      TemporalCloudOpenMetricsIntegrationAccountUpdateData,
    TemporalCloudOpenMetricsIntegrationAccountUpdateRequest:
      TemporalCloudOpenMetricsIntegrationAccountUpdateRequest,
    TemporalCloudOpenMetricsIntegrationAccountsResponse:
      TemporalCloudOpenMetricsIntegrationAccountsResponse,
    TemporalCloudOpenMetricsIntegrationDataflowsResponse:
      TemporalCloudOpenMetricsIntegrationDataflowsResponse,
    TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse:
      TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse,
    TwilioAlertsLogsIntegrationDataflowRequest:
      TwilioAlertsLogsIntegrationDataflowRequest,
    TwilioAlertsLogsIntegrationDataflowResponse:
      TwilioAlertsLogsIntegrationDataflowResponse,
    TwilioCallSummariesLogsIntegrationDataflowRequest:
      TwilioCallSummariesLogsIntegrationDataflowRequest,
    TwilioCallSummariesLogsIntegrationDataflowResponse:
      TwilioCallSummariesLogsIntegrationDataflowResponse,
    TwilioCloudCostMetricsIntegrationDataflowRequest:
      TwilioCloudCostMetricsIntegrationDataflowRequest,
    TwilioCloudCostMetricsIntegrationDataflowResponse:
      TwilioCloudCostMetricsIntegrationDataflowResponse,
    TwilioEventsLogsIntegrationDataflowRequest:
      TwilioEventsLogsIntegrationDataflowRequest,
    TwilioEventsLogsIntegrationDataflowResponse:
      TwilioEventsLogsIntegrationDataflowResponse,
    TwilioIntegrationAccountBasicAuthRequest:
      TwilioIntegrationAccountBasicAuthRequest,
    TwilioIntegrationAccountBasicAuthResponse:
      TwilioIntegrationAccountBasicAuthResponse,
    TwilioIntegrationAccountBasicAuthUpdate:
      TwilioIntegrationAccountBasicAuthUpdate,
    TwilioIntegrationAccountCreateAttributes:
      TwilioIntegrationAccountCreateAttributes,
    TwilioIntegrationAccountCreateData: TwilioIntegrationAccountCreateData,
    TwilioIntegrationAccountCreateRequest:
      TwilioIntegrationAccountCreateRequest,
    TwilioIntegrationAccountResponse: TwilioIntegrationAccountResponse,
    TwilioIntegrationAccountResponseAttributes:
      TwilioIntegrationAccountResponseAttributes,
    TwilioIntegrationAccountResponseData: TwilioIntegrationAccountResponseData,
    TwilioIntegrationAccountSettingsRequest:
      TwilioIntegrationAccountSettingsRequest,
    TwilioIntegrationAccountSettingsResponse:
      TwilioIntegrationAccountSettingsResponse,
    TwilioIntegrationAccountSettingsUpdate:
      TwilioIntegrationAccountSettingsUpdate,
    TwilioIntegrationAccountUpdateAttributes:
      TwilioIntegrationAccountUpdateAttributes,
    TwilioIntegrationAccountUpdateData: TwilioIntegrationAccountUpdateData,
    TwilioIntegrationAccountUpdateRequest:
      TwilioIntegrationAccountUpdateRequest,
    TwilioIntegrationAccountsResponse: TwilioIntegrationAccountsResponse,
    TwilioIntegrationDataflowsRequest: TwilioIntegrationDataflowsRequest,
    TwilioIntegrationDataflowsResponse: TwilioIntegrationDataflowsResponse,
    TwilioMessagesLogsIntegrationDataflowRequest:
      TwilioMessagesLogsIntegrationDataflowRequest,
    TwilioMessagesLogsIntegrationDataflowResponse:
      TwilioMessagesLogsIntegrationDataflowResponse,
    WebIntegrationAccountCreateRequest: WebIntegrationAccountCreateRequest,
    WebIntegrationAccountCreateRequestAttributes:
      WebIntegrationAccountCreateRequestAttributes,
    WebIntegrationAccountCreateRequestData:
      WebIntegrationAccountCreateRequestData,
    WebIntegrationAccountResponse: WebIntegrationAccountResponse,
    WebIntegrationAccountResponseAttributes:
      WebIntegrationAccountResponseAttributes,
    WebIntegrationAccountResponseData: WebIntegrationAccountResponseData,
    WebIntegrationAccountUpdateRequest: WebIntegrationAccountUpdateRequest,
    WebIntegrationAccountUpdateRequestAttributes:
      WebIntegrationAccountUpdateRequestAttributes,
    WebIntegrationAccountUpdateRequestData:
      WebIntegrationAccountUpdateRequestData,
    WebIntegrationAccountsResponse: WebIntegrationAccountsResponse,
    WebhooksAuthMethodAttributes: WebhooksAuthMethodAttributes,
    WebhooksAuthMethodRelationships: WebhooksAuthMethodRelationships,
    WebhooksAuthMethodResponseData: WebhooksAuthMethodResponseData,
    WebhooksAuthMethodsResponse: WebhooksAuthMethodsResponse,
    WebhooksOAuth2ClientCredentialsCreateAttributes:
      WebhooksOAuth2ClientCredentialsCreateAttributes,
    WebhooksOAuth2ClientCredentialsCreateData:
      WebhooksOAuth2ClientCredentialsCreateData,
    WebhooksOAuth2ClientCredentialsCreateRequest:
      WebhooksOAuth2ClientCredentialsCreateRequest,
    WebhooksOAuth2ClientCredentialsRelationship:
      WebhooksOAuth2ClientCredentialsRelationship,
    WebhooksOAuth2ClientCredentialsRelationshipData:
      WebhooksOAuth2ClientCredentialsRelationshipData,
    WebhooksOAuth2ClientCredentialsResponse:
      WebhooksOAuth2ClientCredentialsResponse,
    WebhooksOAuth2ClientCredentialsResponseAttributes:
      WebhooksOAuth2ClientCredentialsResponseAttributes,
    WebhooksOAuth2ClientCredentialsResponseData:
      WebhooksOAuth2ClientCredentialsResponseData,
    WebhooksOAuth2ClientCredentialsUpdateAttributes:
      WebhooksOAuth2ClientCredentialsUpdateAttributes,
    WebhooksOAuth2ClientCredentialsUpdateData:
      WebhooksOAuth2ClientCredentialsUpdateData,
    WebhooksOAuth2ClientCredentialsUpdateRequest:
      WebhooksOAuth2ClientCredentialsUpdateRequest,
  },
};
