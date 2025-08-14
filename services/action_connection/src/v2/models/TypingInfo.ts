import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { AWSAssumeRole } from "./AWSAssumeRole";
import { AWSAssumeRoleUpdate } from "./AWSAssumeRoleUpdate";
import { AWSIntegration } from "./AWSIntegration";
import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { ActionConnectionAttributes } from "./ActionConnectionAttributes";
import { ActionConnectionAttributesUpdate } from "./ActionConnectionAttributesUpdate";
import { ActionConnectionData } from "./ActionConnectionData";
import { ActionConnectionDataUpdate } from "./ActionConnectionDataUpdate";
import { AnthropicAPIKey } from "./AnthropicAPIKey";
import { AnthropicAPIKeyUpdate } from "./AnthropicAPIKeyUpdate";
import { AnthropicIntegration } from "./AnthropicIntegration";
import { AnthropicIntegrationUpdate } from "./AnthropicIntegrationUpdate";
import { AppKeyRegistrationData } from "./AppKeyRegistrationData";
import { AsanaAccessToken } from "./AsanaAccessToken";
import { AsanaAccessTokenUpdate } from "./AsanaAccessTokenUpdate";
import { AsanaIntegration } from "./AsanaIntegration";
import { AsanaIntegrationUpdate } from "./AsanaIntegrationUpdate";
import { AzureIntegration } from "./AzureIntegration";
import { AzureIntegrationUpdate } from "./AzureIntegrationUpdate";
import { AzureTenant } from "./AzureTenant";
import { AzureTenantUpdate } from "./AzureTenantUpdate";
import { CircleCIAPIKey } from "./CircleCIAPIKey";
import { CircleCIAPIKeyUpdate } from "./CircleCIAPIKeyUpdate";
import { CircleCIIntegration } from "./CircleCIIntegration";
import { CircleCIIntegrationUpdate } from "./CircleCIIntegrationUpdate";
import { ClickupAPIKey } from "./ClickupAPIKey";
import { ClickupAPIKeyUpdate } from "./ClickupAPIKeyUpdate";
import { ClickupIntegration } from "./ClickupIntegration";
import { ClickupIntegrationUpdate } from "./ClickupIntegrationUpdate";
import { CloudflareAPIToken } from "./CloudflareAPIToken";
import { CloudflareAPITokenUpdate } from "./CloudflareAPITokenUpdate";
import { CloudflareGlobalAPIToken } from "./CloudflareGlobalAPIToken";
import { CloudflareGlobalAPITokenUpdate } from "./CloudflareGlobalAPITokenUpdate";
import { CloudflareIntegration } from "./CloudflareIntegration";
import { CloudflareIntegrationUpdate } from "./CloudflareIntegrationUpdate";
import { ConfigCatIntegration } from "./ConfigCatIntegration";
import { ConfigCatIntegrationUpdate } from "./ConfigCatIntegrationUpdate";
import { ConfigCatSDKKey } from "./ConfigCatSDKKey";
import { ConfigCatSDKKeyUpdate } from "./ConfigCatSDKKeyUpdate";
import { CreateActionConnectionRequest } from "./CreateActionConnectionRequest";
import { CreateActionConnectionResponse } from "./CreateActionConnectionResponse";
import { DatadogAPIKey } from "./DatadogAPIKey";
import { DatadogAPIKeyUpdate } from "./DatadogAPIKeyUpdate";
import { DatadogIntegration } from "./DatadogIntegration";
import { DatadogIntegrationUpdate } from "./DatadogIntegrationUpdate";
import { FastlyAPIKey } from "./FastlyAPIKey";
import { FastlyAPIKeyUpdate } from "./FastlyAPIKeyUpdate";
import { FastlyIntegration } from "./FastlyIntegration";
import { FastlyIntegrationUpdate } from "./FastlyIntegrationUpdate";
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
import { GitlabAPIKey } from "./GitlabAPIKey";
import { GitlabAPIKeyUpdate } from "./GitlabAPIKeyUpdate";
import { GitlabIntegration } from "./GitlabIntegration";
import { GitlabIntegrationUpdate } from "./GitlabIntegrationUpdate";
import { GreyNoiseAPIKey } from "./GreyNoiseAPIKey";
import { GreyNoiseAPIKeyUpdate } from "./GreyNoiseAPIKeyUpdate";
import { GreyNoiseIntegration } from "./GreyNoiseIntegration";
import { GreyNoiseIntegrationUpdate } from "./GreyNoiseIntegrationUpdate";
import { HTTPBasicAuth } from "./HTTPBasicAuth";
import { HTTPBasicAuthUpdate } from "./HTTPBasicAuthUpdate";
import { HTTPBody } from "./HTTPBody";
import { HTTPHeader } from "./HTTPHeader";
import { HTTPHeaderUpdate } from "./HTTPHeaderUpdate";
import { HTTPIntegration } from "./HTTPIntegration";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";
import { HTTPMtlsAuth } from "./HTTPMtlsAuth";
import { HTTPMtlsAuthUpdate } from "./HTTPMtlsAuthUpdate";
import { HTTPToken } from "./HTTPToken";
import { HTTPTokenAuth } from "./HTTPTokenAuth";
import { HTTPTokenAuthUpdate } from "./HTTPTokenAuthUpdate";
import { HTTPTokenUpdate } from "./HTTPTokenUpdate";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LaunchDarklyAPIKey } from "./LaunchDarklyAPIKey";
import { LaunchDarklyAPIKeyUpdate } from "./LaunchDarklyAPIKeyUpdate";
import { LaunchDarklyIntegration } from "./LaunchDarklyIntegration";
import { LaunchDarklyIntegrationUpdate } from "./LaunchDarklyIntegrationUpdate";
import { ListAppKeyRegistrationsResponse } from "./ListAppKeyRegistrationsResponse";
import { ListAppKeyRegistrationsResponseMeta } from "./ListAppKeyRegistrationsResponseMeta";
import { NotionAPIKey } from "./NotionAPIKey";
import { NotionAPIKeyUpdate } from "./NotionAPIKeyUpdate";
import { NotionIntegration } from "./NotionIntegration";
import { NotionIntegrationUpdate } from "./NotionIntegrationUpdate";
import { OktaAPIToken } from "./OktaAPIToken";
import { OktaAPITokenUpdate } from "./OktaAPITokenUpdate";
import { OktaIntegration } from "./OktaIntegration";
import { OktaIntegrationUpdate } from "./OktaIntegrationUpdate";
import { OpenAIAPIKey } from "./OpenAIAPIKey";
import { OpenAIAPIKeyUpdate } from "./OpenAIAPIKeyUpdate";
import { OpenAIIntegration } from "./OpenAIIntegration";
import { OpenAIIntegrationUpdate } from "./OpenAIIntegrationUpdate";
import { RegisterAppKeyResponse } from "./RegisterAppKeyResponse";
import { ServiceNowBasicAuth } from "./ServiceNowBasicAuth";
import { ServiceNowBasicAuthUpdate } from "./ServiceNowBasicAuthUpdate";
import { ServiceNowIntegration } from "./ServiceNowIntegration";
import { ServiceNowIntegrationUpdate } from "./ServiceNowIntegrationUpdate";
import { SplitAPIKey } from "./SplitAPIKey";
import { SplitAPIKeyUpdate } from "./SplitAPIKeyUpdate";
import { SplitIntegration } from "./SplitIntegration";
import { SplitIntegrationUpdate } from "./SplitIntegrationUpdate";
import { StatsigAPIKey } from "./StatsigAPIKey";
import { StatsigAPIKeyUpdate } from "./StatsigAPIKeyUpdate";
import { StatsigIntegration } from "./StatsigIntegration";
import { StatsigIntegrationUpdate } from "./StatsigIntegrationUpdate";
import { UpdateActionConnectionRequest } from "./UpdateActionConnectionRequest";
import { UpdateActionConnectionResponse } from "./UpdateActionConnectionResponse";
import { UrlParam } from "./UrlParam";
import { UrlParamUpdate } from "./UrlParamUpdate";
import { VirusTotalAPIKey } from "./VirusTotalAPIKey";
import { VirusTotalAPIKeyUpdate } from "./VirusTotalAPIKeyUpdate";
import { VirusTotalIntegration } from "./VirusTotalIntegration";
import { VirusTotalIntegrationUpdate } from "./VirusTotalIntegrationUpdate";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSAssumeRoleType: ["AWSAssumeRole"],
    AWSIntegrationType: ["AWS"],
    ActionConnectionDataType: ["action_connection"],
    AnthropicAPIKeyType: ["AnthropicAPIKey"],
    AnthropicIntegrationType: ["Anthropic"],
    AppKeyRegistrationDataType: ["app_key_registration"],
    AsanaAccessTokenType: ["AsanaAccessToken"],
    AsanaIntegrationType: ["Asana"],
    AzureIntegrationType: ["Azure"],
    AzureTenantType: ["AzureTenant"],
    CircleCIAPIKeyType: ["CircleCIAPIKey"],
    CircleCIIntegrationType: ["CircleCI"],
    ClickupAPIKeyType: ["ClickupAPIKey"],
    ClickupIntegrationType: ["Clickup"],
    CloudflareAPITokenType: ["CloudflareAPIToken"],
    CloudflareGlobalAPITokenType: ["CloudflareGlobalAPIToken"],
    CloudflareIntegrationType: ["Cloudflare"],
    ConfigCatIntegrationType: ["ConfigCat"],
    ConfigCatSDKKeyType: ["ConfigCatSDKKey"],
    DatadogAPIKeyType: ["DatadogAPIKey"],
    DatadogIntegrationType: ["Datadog"],
    FastlyAPIKeyType: ["FastlyAPIKey"],
    FastlyIntegrationType: ["Fastly"],
    FreshserviceAPIKeyType: ["FreshserviceAPIKey"],
    FreshserviceIntegrationType: ["Freshservice"],
    GCPIntegrationType: ["GCP"],
    GCPServiceAccountCredentialType: ["GCPServiceAccount"],
    GeminiAPIKeyType: ["GeminiAPIKey"],
    GeminiIntegrationType: ["Gemini"],
    GitlabAPIKeyType: ["GitlabAPIKey"],
    GitlabIntegrationType: ["Gitlab"],
    GreyNoiseAPIKeyType: ["GreyNoiseAPIKey"],
    GreyNoiseIntegrationType: ["GreyNoise"],
    HTTPBasicAuthType: ["HTTPBasicAuth"],
    HTTPIntegrationType: ["HTTP"],
    HTTPMtlsAuthType: ["HTTPMtlsAuth"],
    HTTPTokenAuthType: ["HTTPTokenAuth"],
    LaunchDarklyAPIKeyType: ["LaunchDarklyAPIKey"],
    LaunchDarklyIntegrationType: ["LaunchDarkly"],
    NotionAPIKeyType: ["NotionAPIKey"],
    NotionIntegrationType: ["Notion"],
    OktaAPITokenType: ["OktaAPIToken"],
    OktaIntegrationType: ["Okta"],
    OpenAIAPIKeyType: ["OpenAIAPIKey"],
    OpenAIIntegrationType: ["OpenAI"],
    ServiceNowBasicAuthType: ["ServiceNowBasicAuth"],
    ServiceNowIntegrationType: ["ServiceNow"],
    SplitAPIKeyType: ["SplitAPIKey"],
    SplitIntegrationType: ["Split"],
    StatsigAPIKeyType: ["StatsigAPIKey"],
    StatsigIntegrationType: ["Statsig"],
    TokenType: ["SECRET"],
    VirusTotalAPIKeyType: ["VirusTotalAPIKey"],
    VirusTotalIntegrationType: ["VirusTotal"],
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
    AnthropicCredentials: ["AnthropicAPIKey"],
    AnthropicCredentialsUpdate: ["AnthropicAPIKeyUpdate"],
    AsanaCredentials: ["AsanaAccessToken"],
    AsanaCredentialsUpdate: ["AsanaAccessTokenUpdate"],
    AzureCredentials: ["AzureTenant"],
    AzureCredentialsUpdate: ["AzureTenantUpdate"],
    CircleCICredentials: ["CircleCIAPIKey"],
    CircleCICredentialsUpdate: ["CircleCIAPIKeyUpdate"],
    ClickupCredentials: ["ClickupAPIKey"],
    ClickupCredentialsUpdate: ["ClickupAPIKeyUpdate"],
    CloudflareCredentials: ["CloudflareAPIToken", "CloudflareGlobalAPIToken"],
    CloudflareCredentialsUpdate: [
      "CloudflareAPITokenUpdate",
      "CloudflareGlobalAPITokenUpdate",
    ],
    ConfigCatCredentials: ["ConfigCatSDKKey"],
    ConfigCatCredentialsUpdate: ["ConfigCatSDKKeyUpdate"],
    DatadogCredentials: ["DatadogAPIKey"],
    DatadogCredentialsUpdate: ["DatadogAPIKeyUpdate"],
    FastlyCredentials: ["FastlyAPIKey"],
    FastlyCredentialsUpdate: ["FastlyAPIKeyUpdate"],
    FreshserviceCredentials: ["FreshserviceAPIKey"],
    FreshserviceCredentialsUpdate: ["FreshserviceAPIKeyUpdate"],
    GCPCredentials: ["GCPServiceAccount"],
    GCPCredentialsUpdate: ["GCPServiceAccountUpdate"],
    GeminiCredentials: ["GeminiAPIKey"],
    GeminiCredentialsUpdate: ["GeminiAPIKeyUpdate"],
    GitlabCredentials: ["GitlabAPIKey"],
    GitlabCredentialsUpdate: ["GitlabAPIKeyUpdate"],
    GreyNoiseCredentials: ["GreyNoiseAPIKey"],
    GreyNoiseCredentialsUpdate: ["GreyNoiseAPIKeyUpdate"],
    HTTPCredentials: ["HTTPTokenAuth", "HTTPBasicAuth", "HTTPMtlsAuth"],
    HTTPCredentialsUpdate: [
      "HTTPTokenAuthUpdate",
      "HTTPBasicAuthUpdate",
      "HTTPMtlsAuthUpdate",
    ],
    LaunchDarklyCredentials: ["LaunchDarklyAPIKey"],
    LaunchDarklyCredentialsUpdate: ["LaunchDarklyAPIKeyUpdate"],
    NotionCredentials: ["NotionAPIKey"],
    NotionCredentialsUpdate: ["NotionAPIKeyUpdate"],
    OktaCredentials: ["OktaAPIToken"],
    OktaCredentialsUpdate: ["OktaAPITokenUpdate"],
    OpenAICredentials: ["OpenAIAPIKey"],
    OpenAICredentialsUpdate: ["OpenAIAPIKeyUpdate"],
    ServiceNowCredentials: ["ServiceNowBasicAuth"],
    ServiceNowCredentialsUpdate: ["ServiceNowBasicAuthUpdate"],
    SplitCredentials: ["SplitAPIKey"],
    SplitCredentialsUpdate: ["SplitAPIKeyUpdate"],
    StatsigCredentials: ["StatsigAPIKey"],
    StatsigCredentialsUpdate: ["StatsigAPIKeyUpdate"],
    VirusTotalCredentials: ["VirusTotalAPIKey"],
    VirusTotalCredentialsUpdate: ["VirusTotalAPIKeyUpdate"],
  },
  typeMap: {
    AWSAssumeRole: AWSAssumeRole,
    AWSAssumeRoleUpdate: AWSAssumeRoleUpdate,
    AWSIntegration: AWSIntegration,
    AWSIntegrationUpdate: AWSIntegrationUpdate,
    ActionConnectionAttributes: ActionConnectionAttributes,
    ActionConnectionAttributesUpdate: ActionConnectionAttributesUpdate,
    ActionConnectionData: ActionConnectionData,
    ActionConnectionDataUpdate: ActionConnectionDataUpdate,
    AnthropicAPIKey: AnthropicAPIKey,
    AnthropicAPIKeyUpdate: AnthropicAPIKeyUpdate,
    AnthropicIntegration: AnthropicIntegration,
    AnthropicIntegrationUpdate: AnthropicIntegrationUpdate,
    AppKeyRegistrationData: AppKeyRegistrationData,
    AsanaAccessToken: AsanaAccessToken,
    AsanaAccessTokenUpdate: AsanaAccessTokenUpdate,
    AsanaIntegration: AsanaIntegration,
    AsanaIntegrationUpdate: AsanaIntegrationUpdate,
    AzureIntegration: AzureIntegration,
    AzureIntegrationUpdate: AzureIntegrationUpdate,
    AzureTenant: AzureTenant,
    AzureTenantUpdate: AzureTenantUpdate,
    CircleCIAPIKey: CircleCIAPIKey,
    CircleCIAPIKeyUpdate: CircleCIAPIKeyUpdate,
    CircleCIIntegration: CircleCIIntegration,
    CircleCIIntegrationUpdate: CircleCIIntegrationUpdate,
    ClickupAPIKey: ClickupAPIKey,
    ClickupAPIKeyUpdate: ClickupAPIKeyUpdate,
    ClickupIntegration: ClickupIntegration,
    ClickupIntegrationUpdate: ClickupIntegrationUpdate,
    CloudflareAPIToken: CloudflareAPIToken,
    CloudflareAPITokenUpdate: CloudflareAPITokenUpdate,
    CloudflareGlobalAPIToken: CloudflareGlobalAPIToken,
    CloudflareGlobalAPITokenUpdate: CloudflareGlobalAPITokenUpdate,
    CloudflareIntegration: CloudflareIntegration,
    CloudflareIntegrationUpdate: CloudflareIntegrationUpdate,
    ConfigCatIntegration: ConfigCatIntegration,
    ConfigCatIntegrationUpdate: ConfigCatIntegrationUpdate,
    ConfigCatSDKKey: ConfigCatSDKKey,
    ConfigCatSDKKeyUpdate: ConfigCatSDKKeyUpdate,
    CreateActionConnectionRequest: CreateActionConnectionRequest,
    CreateActionConnectionResponse: CreateActionConnectionResponse,
    DatadogAPIKey: DatadogAPIKey,
    DatadogAPIKeyUpdate: DatadogAPIKeyUpdate,
    DatadogIntegration: DatadogIntegration,
    DatadogIntegrationUpdate: DatadogIntegrationUpdate,
    FastlyAPIKey: FastlyAPIKey,
    FastlyAPIKeyUpdate: FastlyAPIKeyUpdate,
    FastlyIntegration: FastlyIntegration,
    FastlyIntegrationUpdate: FastlyIntegrationUpdate,
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
    GitlabAPIKey: GitlabAPIKey,
    GitlabAPIKeyUpdate: GitlabAPIKeyUpdate,
    GitlabIntegration: GitlabIntegration,
    GitlabIntegrationUpdate: GitlabIntegrationUpdate,
    GreyNoiseAPIKey: GreyNoiseAPIKey,
    GreyNoiseAPIKeyUpdate: GreyNoiseAPIKeyUpdate,
    GreyNoiseIntegration: GreyNoiseIntegration,
    GreyNoiseIntegrationUpdate: GreyNoiseIntegrationUpdate,
    HTTPBasicAuth: HTTPBasicAuth,
    HTTPBasicAuthUpdate: HTTPBasicAuthUpdate,
    HTTPBody: HTTPBody,
    HTTPHeader: HTTPHeader,
    HTTPHeaderUpdate: HTTPHeaderUpdate,
    HTTPIntegration: HTTPIntegration,
    HTTPIntegrationUpdate: HTTPIntegrationUpdate,
    HTTPMtlsAuth: HTTPMtlsAuth,
    HTTPMtlsAuthUpdate: HTTPMtlsAuthUpdate,
    HTTPToken: HTTPToken,
    HTTPTokenAuth: HTTPTokenAuth,
    HTTPTokenAuthUpdate: HTTPTokenAuthUpdate,
    HTTPTokenUpdate: HTTPTokenUpdate,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LaunchDarklyAPIKey: LaunchDarklyAPIKey,
    LaunchDarklyAPIKeyUpdate: LaunchDarklyAPIKeyUpdate,
    LaunchDarklyIntegration: LaunchDarklyIntegration,
    LaunchDarklyIntegrationUpdate: LaunchDarklyIntegrationUpdate,
    ListAppKeyRegistrationsResponse: ListAppKeyRegistrationsResponse,
    ListAppKeyRegistrationsResponseMeta: ListAppKeyRegistrationsResponseMeta,
    NotionAPIKey: NotionAPIKey,
    NotionAPIKeyUpdate: NotionAPIKeyUpdate,
    NotionIntegration: NotionIntegration,
    NotionIntegrationUpdate: NotionIntegrationUpdate,
    OktaAPIToken: OktaAPIToken,
    OktaAPITokenUpdate: OktaAPITokenUpdate,
    OktaIntegration: OktaIntegration,
    OktaIntegrationUpdate: OktaIntegrationUpdate,
    OpenAIAPIKey: OpenAIAPIKey,
    OpenAIAPIKeyUpdate: OpenAIAPIKeyUpdate,
    OpenAIIntegration: OpenAIIntegration,
    OpenAIIntegrationUpdate: OpenAIIntegrationUpdate,
    RegisterAppKeyResponse: RegisterAppKeyResponse,
    ServiceNowBasicAuth: ServiceNowBasicAuth,
    ServiceNowBasicAuthUpdate: ServiceNowBasicAuthUpdate,
    ServiceNowIntegration: ServiceNowIntegration,
    ServiceNowIntegrationUpdate: ServiceNowIntegrationUpdate,
    SplitAPIKey: SplitAPIKey,
    SplitAPIKeyUpdate: SplitAPIKeyUpdate,
    SplitIntegration: SplitIntegration,
    SplitIntegrationUpdate: SplitIntegrationUpdate,
    StatsigAPIKey: StatsigAPIKey,
    StatsigAPIKeyUpdate: StatsigAPIKeyUpdate,
    StatsigIntegration: StatsigIntegration,
    StatsigIntegrationUpdate: StatsigIntegrationUpdate,
    UpdateActionConnectionRequest: UpdateActionConnectionRequest,
    UpdateActionConnectionResponse: UpdateActionConnectionResponse,
    UrlParam: UrlParam,
    UrlParamUpdate: UrlParamUpdate,
    VirusTotalAPIKey: VirusTotalAPIKey,
    VirusTotalAPIKeyUpdate: VirusTotalAPIKeyUpdate,
    VirusTotalIntegration: VirusTotalIntegration,
    VirusTotalIntegrationUpdate: VirusTotalIntegrationUpdate,
  },
};
