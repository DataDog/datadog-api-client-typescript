import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IPAllowlistAttributes } from "./IPAllowlistAttributes";
import { IPAllowlistData } from "./IPAllowlistData";
import { IPAllowlistEntry } from "./IPAllowlistEntry";
import { IPAllowlistEntryAttributes } from "./IPAllowlistEntryAttributes";
import { IPAllowlistEntryData } from "./IPAllowlistEntryData";
import { IPAllowlistResponse } from "./IPAllowlistResponse";
import { IPAllowlistUpdateRequest } from "./IPAllowlistUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IPAllowlistEntryType: ["ip_allowlist_entry"],
    IPAllowlistType: ["ip_allowlist"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IPAllowlistAttributes: IPAllowlistAttributes,
    IPAllowlistData: IPAllowlistData,
    IPAllowlistEntry: IPAllowlistEntry,
    IPAllowlistEntryAttributes: IPAllowlistEntryAttributes,
    IPAllowlistEntryData: IPAllowlistEntryData,
    IPAllowlistResponse: IPAllowlistResponse,
    IPAllowlistUpdateRequest: IPAllowlistUpdateRequest,
  },
};
