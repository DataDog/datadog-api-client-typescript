import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { HostTags } from "./HostTags";
import { TagToHosts } from "./TagToHosts";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    HostTags: HostTags,
    TagToHosts: TagToHosts,
  },
};
