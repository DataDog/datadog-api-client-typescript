import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GCPMetricNamespaceConfig } from "./GCPMetricNamespaceConfig";
import { GCPSTSDelegateAccount } from "./GCPSTSDelegateAccount";
import { GCPSTSDelegateAccountAttributes } from "./GCPSTSDelegateAccountAttributes";
import { GCPSTSDelegateAccountResponse } from "./GCPSTSDelegateAccountResponse";
import { GCPSTSServiceAccount } from "./GCPSTSServiceAccount";
import { GCPSTSServiceAccountAttributes } from "./GCPSTSServiceAccountAttributes";
import { GCPSTSServiceAccountCreateRequest } from "./GCPSTSServiceAccountCreateRequest";
import { GCPSTSServiceAccountData } from "./GCPSTSServiceAccountData";
import { GCPSTSServiceAccountResponse } from "./GCPSTSServiceAccountResponse";
import { GCPSTSServiceAccountUpdateRequest } from "./GCPSTSServiceAccountUpdateRequest";
import { GCPSTSServiceAccountUpdateRequestData } from "./GCPSTSServiceAccountUpdateRequestData";
import { GCPSTSServiceAccountsResponse } from "./GCPSTSServiceAccountsResponse";
import { GCPServiceAccountMeta } from "./GCPServiceAccountMeta";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GCPSTSDelegateAccountType: ["gcp_sts_delegate"],
    GCPServiceAccountType: ["gcp_service_account"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GCPMetricNamespaceConfig: GCPMetricNamespaceConfig,
    GCPSTSDelegateAccount: GCPSTSDelegateAccount,
    GCPSTSDelegateAccountAttributes: GCPSTSDelegateAccountAttributes,
    GCPSTSDelegateAccountResponse: GCPSTSDelegateAccountResponse,
    GCPSTSServiceAccount: GCPSTSServiceAccount,
    GCPSTSServiceAccountAttributes: GCPSTSServiceAccountAttributes,
    GCPSTSServiceAccountCreateRequest: GCPSTSServiceAccountCreateRequest,
    GCPSTSServiceAccountData: GCPSTSServiceAccountData,
    GCPSTSServiceAccountResponse: GCPSTSServiceAccountResponse,
    GCPSTSServiceAccountUpdateRequest: GCPSTSServiceAccountUpdateRequest,
    GCPSTSServiceAccountUpdateRequestData:
      GCPSTSServiceAccountUpdateRequestData,
    GCPSTSServiceAccountsResponse: GCPSTSServiceAccountsResponse,
    GCPServiceAccountMeta: GCPServiceAccountMeta,
  },
};
