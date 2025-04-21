import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { OktaAccount } from "./OktaAccount";
import { OktaAccountAttributes } from "./OktaAccountAttributes";
import { OktaAccountRequest } from "./OktaAccountRequest";
import { OktaAccountResponse } from "./OktaAccountResponse";
import { OktaAccountResponseData } from "./OktaAccountResponseData";
import { OktaAccountUpdateRequest } from "./OktaAccountUpdateRequest";
import { OktaAccountUpdateRequestAttributes } from "./OktaAccountUpdateRequestAttributes";
import { OktaAccountUpdateRequestData } from "./OktaAccountUpdateRequestData";
import { OktaAccountsResponse } from "./OktaAccountsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OktaAccountType: ["okta-accounts"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    OktaAccount: OktaAccount,
    OktaAccountAttributes: OktaAccountAttributes,
    OktaAccountRequest: OktaAccountRequest,
    OktaAccountResponse: OktaAccountResponse,
    OktaAccountResponseData: OktaAccountResponseData,
    OktaAccountUpdateRequest: OktaAccountUpdateRequest,
    OktaAccountUpdateRequestAttributes: OktaAccountUpdateRequestAttributes,
    OktaAccountUpdateRequestData: OktaAccountUpdateRequestData,
    OktaAccountsResponse: OktaAccountsResponse,
  },
};
