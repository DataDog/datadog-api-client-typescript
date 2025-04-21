import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RestrictionPolicy } from "./RestrictionPolicy";
import { RestrictionPolicyAttributes } from "./RestrictionPolicyAttributes";
import { RestrictionPolicyBinding } from "./RestrictionPolicyBinding";
import { RestrictionPolicyResponse } from "./RestrictionPolicyResponse";
import { RestrictionPolicyUpdateRequest } from "./RestrictionPolicyUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RestrictionPolicyType: ["restriction_policy"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RestrictionPolicy: RestrictionPolicy,
    RestrictionPolicyAttributes: RestrictionPolicyAttributes,
    RestrictionPolicyBinding: RestrictionPolicyBinding,
    RestrictionPolicyResponse: RestrictionPolicyResponse,
    RestrictionPolicyUpdateRequest: RestrictionPolicyUpdateRequest,
  },
};
