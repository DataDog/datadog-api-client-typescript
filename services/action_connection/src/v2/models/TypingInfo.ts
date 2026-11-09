import { ModelTypingInfo } from "@datadog/datadog-api-client";

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
import { GithubApp } from "./GithubApp";
import { GithubAppUpdate } from "./GithubAppUpdate";
import { GithubIntegration } from "./GithubIntegration";
import { GithubIntegrationUpdate } from "./GithubIntegrationUpdate";
import { GithubPersonalAccessToken } from "./GithubPersonalAccessToken";
import { GithubPersonalAccessTokenUpdate } from "./GithubPersonalAccessTokenUpdate";
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
    ActionConnectionAWSSecretsManagerType: ["aws_secrets_manager"],
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
    GithubAppType: ["GithubApp"],
    GithubIntegrationType: ["Github"],
    GithubPersonalAccessTokenType: ["GithubPersonalAccessToken"],
    GitlabAPIKeyType: ["GitlabAPIKey"],
    GitlabIntegrationType: ["Gitlab"],
    GreyNoiseAPIKeyType: ["GreyNoiseAPIKey"],
    GreyNoiseIntegrationType: ["GreyNoise"],
    HTTPIntegrationType: ["HTTP"],
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
  },
  typeMap: {
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
    GithubApp: GithubApp,
    GithubAppUpdate: GithubAppUpdate,
    GithubIntegration: GithubIntegration,
    GithubIntegrationUpdate: GithubIntegrationUpdate,
    GithubPersonalAccessToken: GithubPersonalAccessToken,
    GithubPersonalAccessTokenUpdate: GithubPersonalAccessTokenUpdate,
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
