import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DomainAllowlist } from "./DomainAllowlist";
import { DomainAllowlistAttributes } from "./DomainAllowlistAttributes";
import { DomainAllowlistRequest } from "./DomainAllowlistRequest";
import { DomainAllowlistResponse } from "./DomainAllowlistResponse";
import { DomainAllowlistResponseData } from "./DomainAllowlistResponseData";
import { DomainAllowlistResponseDataAttributes } from "./DomainAllowlistResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DomainAllowlistType: ["domain_allowlist"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DomainAllowlist: DomainAllowlist,
    DomainAllowlistAttributes: DomainAllowlistAttributes,
    DomainAllowlistRequest: DomainAllowlistRequest,
    DomainAllowlistResponse: DomainAllowlistResponse,
    DomainAllowlistResponseData: DomainAllowlistResponseData,
    DomainAllowlistResponseDataAttributes:
      DomainAllowlistResponseDataAttributes,
  },
};
