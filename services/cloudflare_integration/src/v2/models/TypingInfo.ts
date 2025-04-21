import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CloudflareAccountType: ["cloudflare-accounts"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
  },
};
