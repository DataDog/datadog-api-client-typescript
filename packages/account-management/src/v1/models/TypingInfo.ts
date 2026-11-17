import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApiKey } from "./ApiKey";
import { ApiKeyListResponse } from "./ApiKeyListResponse";
import { ApiKeyResponse } from "./ApiKeyResponse";
import { ApplicationKey } from "./ApplicationKey";
import { ApplicationKeyListResponse } from "./ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "./ApplicationKeyResponse";
import { AuthenticationValidationResponse } from "./AuthenticationValidationResponse";
import { IPPrefixesAPI } from "./IPPrefixesAPI";
import { IPPrefixesAPM } from "./IPPrefixesAPM";
import { IPPrefixesAgents } from "./IPPrefixesAgents";
import { IPPrefixesGlobal } from "./IPPrefixesGlobal";
import { IPPrefixesLogs } from "./IPPrefixesLogs";
import { IPPrefixesOrchestrator } from "./IPPrefixesOrchestrator";
import { IPPrefixesProcess } from "./IPPrefixesProcess";
import { IPPrefixesRemoteConfiguration } from "./IPPrefixesRemoteConfiguration";
import { IPPrefixesSynthetics } from "./IPPrefixesSynthetics";
import { IPPrefixesSyntheticsPrivateLocations } from "./IPPrefixesSyntheticsPrivateLocations";
import { IPPrefixesWebhooks } from "./IPPrefixesWebhooks";
import { IPRanges } from "./IPRanges";
import { IdpResponse } from "./IdpResponse";
import { OrgDowngradedResponse } from "./OrgDowngradedResponse";
import { Organization } from "./Organization";
import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationCreateBody } from "./OrganizationCreateBody";
import { OrganizationCreateResponse } from "./OrganizationCreateResponse";
import { OrganizationListResponse } from "./OrganizationListResponse";
import { OrganizationResponse } from "./OrganizationResponse";
import { OrganizationSettings } from "./OrganizationSettings";
import { OrganizationSettingsSaml } from "./OrganizationSettingsSaml";
import { OrganizationSettingsSamlAutocreateUsersDomains } from "./OrganizationSettingsSamlAutocreateUsersDomains";
import { OrganizationSettingsSamlIdpInitiatedLogin } from "./OrganizationSettingsSamlIdpInitiatedLogin";
import { OrganizationSettingsSamlStrictMode } from "./OrganizationSettingsSamlStrictMode";
import { OrganizationSubscription } from "./OrganizationSubscription";
import { User } from "./User";
import { UserDisableResponse } from "./UserDisableResponse";
import { UserListResponse } from "./UserListResponse";
import { UserResponse } from "./UserResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AccessRole: ["st", "adm", "ro", "ERROR"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ApiKey: ApiKey,
    ApiKeyListResponse: ApiKeyListResponse,
    ApiKeyResponse: ApiKeyResponse,
    ApplicationKey: ApplicationKey,
    ApplicationKeyListResponse: ApplicationKeyListResponse,
    ApplicationKeyResponse: ApplicationKeyResponse,
    AuthenticationValidationResponse: AuthenticationValidationResponse,
    IPPrefixesAPI: IPPrefixesAPI,
    IPPrefixesAPM: IPPrefixesAPM,
    IPPrefixesAgents: IPPrefixesAgents,
    IPPrefixesGlobal: IPPrefixesGlobal,
    IPPrefixesLogs: IPPrefixesLogs,
    IPPrefixesOrchestrator: IPPrefixesOrchestrator,
    IPPrefixesProcess: IPPrefixesProcess,
    IPPrefixesRemoteConfiguration: IPPrefixesRemoteConfiguration,
    IPPrefixesSynthetics: IPPrefixesSynthetics,
    IPPrefixesSyntheticsPrivateLocations: IPPrefixesSyntheticsPrivateLocations,
    IPPrefixesWebhooks: IPPrefixesWebhooks,
    IPRanges: IPRanges,
    IdpResponse: IdpResponse,
    OrgDowngradedResponse: OrgDowngradedResponse,
    Organization: Organization,
    OrganizationBilling: OrganizationBilling,
    OrganizationCreateBody: OrganizationCreateBody,
    OrganizationCreateResponse: OrganizationCreateResponse,
    OrganizationListResponse: OrganizationListResponse,
    OrganizationResponse: OrganizationResponse,
    OrganizationSettings: OrganizationSettings,
    OrganizationSettingsSaml: OrganizationSettingsSaml,
    OrganizationSettingsSamlAutocreateUsersDomains:
      OrganizationSettingsSamlAutocreateUsersDomains,
    OrganizationSettingsSamlIdpInitiatedLogin:
      OrganizationSettingsSamlIdpInitiatedLogin,
    OrganizationSettingsSamlStrictMode: OrganizationSettingsSamlStrictMode,
    OrganizationSubscription: OrganizationSubscription,
    User: User,
    UserDisableResponse: UserDisableResponse,
    UserListResponse: UserListResponse,
    UserResponse: UserResponse,
  },
};
