import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApiKey } from "./ApiKey";
import { ApplicationKey } from "./ApplicationKey";
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

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AccessRole: ["st", "adm", "ro", "ERROR"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ApiKey: ApiKey,
    ApplicationKey: ApplicationKey,
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
  },
};
