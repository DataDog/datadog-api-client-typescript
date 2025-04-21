import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApplicationSecurityWafCustomRuleAction } from "./ApplicationSecurityWafCustomRuleAction";
import { ApplicationSecurityWafCustomRuleActionParameters } from "./ApplicationSecurityWafCustomRuleActionParameters";
import { ApplicationSecurityWafCustomRuleAttributes } from "./ApplicationSecurityWafCustomRuleAttributes";
import { ApplicationSecurityWafCustomRuleCondition } from "./ApplicationSecurityWafCustomRuleCondition";
import { ApplicationSecurityWafCustomRuleConditionInput } from "./ApplicationSecurityWafCustomRuleConditionInput";
import { ApplicationSecurityWafCustomRuleConditionOptions } from "./ApplicationSecurityWafCustomRuleConditionOptions";
import { ApplicationSecurityWafCustomRuleConditionParameters } from "./ApplicationSecurityWafCustomRuleConditionParameters";
import { ApplicationSecurityWafCustomRuleCreateAttributes } from "./ApplicationSecurityWafCustomRuleCreateAttributes";
import { ApplicationSecurityWafCustomRuleCreateData } from "./ApplicationSecurityWafCustomRuleCreateData";
import { ApplicationSecurityWafCustomRuleCreateRequest } from "./ApplicationSecurityWafCustomRuleCreateRequest";
import { ApplicationSecurityWafCustomRuleData } from "./ApplicationSecurityWafCustomRuleData";
import { ApplicationSecurityWafCustomRuleListResponse } from "./ApplicationSecurityWafCustomRuleListResponse";
import { ApplicationSecurityWafCustomRuleMetadata } from "./ApplicationSecurityWafCustomRuleMetadata";
import { ApplicationSecurityWafCustomRuleResponse } from "./ApplicationSecurityWafCustomRuleResponse";
import { ApplicationSecurityWafCustomRuleScope } from "./ApplicationSecurityWafCustomRuleScope";
import { ApplicationSecurityWafCustomRuleTags } from "./ApplicationSecurityWafCustomRuleTags";
import { ApplicationSecurityWafCustomRuleUpdateAttributes } from "./ApplicationSecurityWafCustomRuleUpdateAttributes";
import { ApplicationSecurityWafCustomRuleUpdateData } from "./ApplicationSecurityWafCustomRuleUpdateData";
import { ApplicationSecurityWafCustomRuleUpdateRequest } from "./ApplicationSecurityWafCustomRuleUpdateRequest";
import { ApplicationSecurityWafExclusionFilterAttributes } from "./ApplicationSecurityWafExclusionFilterAttributes";
import { ApplicationSecurityWafExclusionFilterCreateAttributes } from "./ApplicationSecurityWafExclusionFilterCreateAttributes";
import { ApplicationSecurityWafExclusionFilterCreateData } from "./ApplicationSecurityWafExclusionFilterCreateData";
import { ApplicationSecurityWafExclusionFilterCreateRequest } from "./ApplicationSecurityWafExclusionFilterCreateRequest";
import { ApplicationSecurityWafExclusionFilterMetadata } from "./ApplicationSecurityWafExclusionFilterMetadata";
import { ApplicationSecurityWafExclusionFilterResource } from "./ApplicationSecurityWafExclusionFilterResource";
import { ApplicationSecurityWafExclusionFilterResponse } from "./ApplicationSecurityWafExclusionFilterResponse";
import { ApplicationSecurityWafExclusionFilterRulesTarget } from "./ApplicationSecurityWafExclusionFilterRulesTarget";
import { ApplicationSecurityWafExclusionFilterRulesTargetTags } from "./ApplicationSecurityWafExclusionFilterRulesTargetTags";
import { ApplicationSecurityWafExclusionFilterScope } from "./ApplicationSecurityWafExclusionFilterScope";
import { ApplicationSecurityWafExclusionFilterUpdateAttributes } from "./ApplicationSecurityWafExclusionFilterUpdateAttributes";
import { ApplicationSecurityWafExclusionFilterUpdateData } from "./ApplicationSecurityWafExclusionFilterUpdateData";
import { ApplicationSecurityWafExclusionFilterUpdateRequest } from "./ApplicationSecurityWafExclusionFilterUpdateRequest";
import { ApplicationSecurityWafExclusionFiltersResponse } from "./ApplicationSecurityWafExclusionFiltersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ApplicationSecurityWafCustomRuleActionAction: [
      "redirect_request",
      "block_request",
    ],
    ApplicationSecurityWafCustomRuleConditionInputAddress: [
      "server.db.statement",
      "server.io.fs.file",
      "server.io.net.url",
      "server.sys.shell.cmd",
      "server.request.method",
      "server.request.uri.raw",
      "server.request.path_params",
      "server.request.query",
      "server.request.headers.no_cookies",
      "server.request.cookies",
      "server.request.trailers",
      "server.request.body",
      "server.response.status",
      "server.response.headers.no_cookies",
      "server.response.trailers",
      "grpc.server.request.metadata",
      "grpc.server.request.message",
      "grpc.server.method",
      "graphql.server.all_resolvers",
      "usr.id",
      "http.client_ip",
    ],
    ApplicationSecurityWafCustomRuleConditionOperator: [
      "match_regex",
      "!match_regex",
      "phrase_match",
      "!phrase_match",
      "is_xss",
      "is_sqli",
      "exact_match",
      "!exact_match",
      "ip_match",
      "!ip_match",
      "capture_data",
    ],
    ApplicationSecurityWafCustomRuleTagsCategory: [
      "attack_attempt",
      "business_logic",
      "security_response",
    ],
    ApplicationSecurityWafCustomRuleType: ["custom_rule"],
    ApplicationSecurityWafExclusionFilterOnMatch: ["monitor"],
    ApplicationSecurityWafExclusionFilterType: ["exclusion_filter"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ApplicationSecurityWafCustomRuleAction:
      ApplicationSecurityWafCustomRuleAction,
    ApplicationSecurityWafCustomRuleActionParameters:
      ApplicationSecurityWafCustomRuleActionParameters,
    ApplicationSecurityWafCustomRuleAttributes:
      ApplicationSecurityWafCustomRuleAttributes,
    ApplicationSecurityWafCustomRuleCondition:
      ApplicationSecurityWafCustomRuleCondition,
    ApplicationSecurityWafCustomRuleConditionInput:
      ApplicationSecurityWafCustomRuleConditionInput,
    ApplicationSecurityWafCustomRuleConditionOptions:
      ApplicationSecurityWafCustomRuleConditionOptions,
    ApplicationSecurityWafCustomRuleConditionParameters:
      ApplicationSecurityWafCustomRuleConditionParameters,
    ApplicationSecurityWafCustomRuleCreateAttributes:
      ApplicationSecurityWafCustomRuleCreateAttributes,
    ApplicationSecurityWafCustomRuleCreateData:
      ApplicationSecurityWafCustomRuleCreateData,
    ApplicationSecurityWafCustomRuleCreateRequest:
      ApplicationSecurityWafCustomRuleCreateRequest,
    ApplicationSecurityWafCustomRuleData: ApplicationSecurityWafCustomRuleData,
    ApplicationSecurityWafCustomRuleListResponse:
      ApplicationSecurityWafCustomRuleListResponse,
    ApplicationSecurityWafCustomRuleMetadata:
      ApplicationSecurityWafCustomRuleMetadata,
    ApplicationSecurityWafCustomRuleResponse:
      ApplicationSecurityWafCustomRuleResponse,
    ApplicationSecurityWafCustomRuleScope:
      ApplicationSecurityWafCustomRuleScope,
    ApplicationSecurityWafCustomRuleTags: ApplicationSecurityWafCustomRuleTags,
    ApplicationSecurityWafCustomRuleUpdateAttributes:
      ApplicationSecurityWafCustomRuleUpdateAttributes,
    ApplicationSecurityWafCustomRuleUpdateData:
      ApplicationSecurityWafCustomRuleUpdateData,
    ApplicationSecurityWafCustomRuleUpdateRequest:
      ApplicationSecurityWafCustomRuleUpdateRequest,
    ApplicationSecurityWafExclusionFilterAttributes:
      ApplicationSecurityWafExclusionFilterAttributes,
    ApplicationSecurityWafExclusionFilterCreateAttributes:
      ApplicationSecurityWafExclusionFilterCreateAttributes,
    ApplicationSecurityWafExclusionFilterCreateData:
      ApplicationSecurityWafExclusionFilterCreateData,
    ApplicationSecurityWafExclusionFilterCreateRequest:
      ApplicationSecurityWafExclusionFilterCreateRequest,
    ApplicationSecurityWafExclusionFilterMetadata:
      ApplicationSecurityWafExclusionFilterMetadata,
    ApplicationSecurityWafExclusionFilterResource:
      ApplicationSecurityWafExclusionFilterResource,
    ApplicationSecurityWafExclusionFilterResponse:
      ApplicationSecurityWafExclusionFilterResponse,
    ApplicationSecurityWafExclusionFilterRulesTarget:
      ApplicationSecurityWafExclusionFilterRulesTarget,
    ApplicationSecurityWafExclusionFilterRulesTargetTags:
      ApplicationSecurityWafExclusionFilterRulesTargetTags,
    ApplicationSecurityWafExclusionFilterScope:
      ApplicationSecurityWafExclusionFilterScope,
    ApplicationSecurityWafExclusionFilterUpdateAttributes:
      ApplicationSecurityWafExclusionFilterUpdateAttributes,
    ApplicationSecurityWafExclusionFilterUpdateData:
      ApplicationSecurityWafExclusionFilterUpdateData,
    ApplicationSecurityWafExclusionFilterUpdateRequest:
      ApplicationSecurityWafExclusionFilterUpdateRequest,
    ApplicationSecurityWafExclusionFiltersResponse:
      ApplicationSecurityWafExclusionFiltersResponse,
  },
};
