import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CIAppGitHubAccountAttributes } from "./CIAppGitHubAccountAttributes";
import { CIAppGitHubAccountData } from "./CIAppGitHubAccountData";
import { CIAppGitHubAccountRepository } from "./CIAppGitHubAccountRepository";
import { CIAppGitHubAccountResponse } from "./CIAppGitHubAccountResponse";
import { CIAppGitHubAccountUpdateRequest } from "./CIAppGitHubAccountUpdateRequest";
import { CIAppGitHubAccountUpdateRequestAttributes } from "./CIAppGitHubAccountUpdateRequestAttributes";
import { CIAppGitHubAccountUpdateRequestData } from "./CIAppGitHubAccountUpdateRequestData";
import { CIAppGitHubAccountUpdateRequestRepository } from "./CIAppGitHubAccountUpdateRequestRepository";
import { CIAppGitHubAccountsResponse } from "./CIAppGitHubAccountsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CIAppGitHubAccountType: ["ci_github_account"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CIAppGitHubAccountAttributes: CIAppGitHubAccountAttributes,
    CIAppGitHubAccountData: CIAppGitHubAccountData,
    CIAppGitHubAccountRepository: CIAppGitHubAccountRepository,
    CIAppGitHubAccountResponse: CIAppGitHubAccountResponse,
    CIAppGitHubAccountUpdateRequest: CIAppGitHubAccountUpdateRequest,
    CIAppGitHubAccountUpdateRequestAttributes:
      CIAppGitHubAccountUpdateRequestAttributes,
    CIAppGitHubAccountUpdateRequestData: CIAppGitHubAccountUpdateRequestData,
    CIAppGitHubAccountUpdateRequestRepository:
      CIAppGitHubAccountUpdateRequestRepository,
    CIAppGitHubAccountsResponse: CIAppGitHubAccountsResponse,
  },
};
