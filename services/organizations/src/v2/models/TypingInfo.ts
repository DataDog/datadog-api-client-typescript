import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { OrgConfigGetResponse } from "./OrgConfigGetResponse";
import { OrgConfigListResponse } from "./OrgConfigListResponse";
import { OrgConfigRead } from "./OrgConfigRead";
import { OrgConfigReadAttributes } from "./OrgConfigReadAttributes";
import { OrgConfigWrite } from "./OrgConfigWrite";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";
import { OrgConfigWriteRequest } from "./OrgConfigWriteRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrgConfigType: ["org_configs"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    OrgConfigGetResponse: OrgConfigGetResponse,
    OrgConfigListResponse: OrgConfigListResponse,
    OrgConfigRead: OrgConfigRead,
    OrgConfigReadAttributes: OrgConfigReadAttributes,
    OrgConfigWrite: OrgConfigWrite,
    OrgConfigWriteAttributes: OrgConfigWriteAttributes,
    OrgConfigWriteRequest: OrgConfigWriteRequest,
  },
};
