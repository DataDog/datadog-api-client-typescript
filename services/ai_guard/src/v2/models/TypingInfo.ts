import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { AIGuardConfidenceThreshold } from "./AIGuardConfidenceThreshold";
import { AIGuardContentPart } from "./AIGuardContentPart";
import { AIGuardEvaluateAttributesResponse } from "./AIGuardEvaluateAttributesResponse";
import { AIGuardEvaluateDataResponse } from "./AIGuardEvaluateDataResponse";
import { AIGuardEvaluateRequest } from "./AIGuardEvaluateRequest";
import { AIGuardEvaluateRequestData } from "./AIGuardEvaluateRequestData";
import { AIGuardEvaluateRequestDataAttributes } from "./AIGuardEvaluateRequestDataAttributes";
import { AIGuardEvaluateResponse } from "./AIGuardEvaluateResponse";
import { AIGuardImageURL } from "./AIGuardImageURL";
import { AIGuardMessage } from "./AIGuardMessage";
import { AIGuardMeta } from "./AIGuardMeta";
import { AIGuardRedactionReplacement } from "./AIGuardRedactionReplacement";
import { AIGuardScfwFindings } from "./AIGuardScfwFindings";
import { AIGuardScfwMatchedRule } from "./AIGuardScfwMatchedRule";
import { AIGuardScfwPackageFinding } from "./AIGuardScfwPackageFinding";
import { AIGuardSdsFinding } from "./AIGuardSdsFinding";
import { AIGuardSdsFindingLocation } from "./AIGuardSdsFindingLocation";
import { AIGuardToolCall } from "./AIGuardToolCall";
import { AIGuardToolCallFunction } from "./AIGuardToolCallFunction";
import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AIGuardAction: ["ALLOW", "DENY", "ABORT"],
    AIGuardContentPartType: ["text", "image_url"],
    AIGuardEvaluationType: ["evaluations"],
    AIGuardMessageRole: ["user", "assistant", "system", "developer", "tool"],
    AIGuardScfwOutcome: ["ALLOW", "WARN", "BLOCK"],
    AIGuardToolPolicyAction: ["PASS", "BLOCK", "EVALUATE"],
  },
  oneOfMap: {
    AIGuardConfidenceThresholdOverride: [
      "number",
      "AIGuardConfidenceThreshold",
    ],
    AIGuardMessageContent: ["string", "Array<AIGuardContentPart>"],
  },
  typeMap: {
    AIGuardConfidenceThreshold: AIGuardConfidenceThreshold,
    AIGuardContentPart: AIGuardContentPart,
    AIGuardEvaluateAttributesResponse: AIGuardEvaluateAttributesResponse,
    AIGuardEvaluateDataResponse: AIGuardEvaluateDataResponse,
    AIGuardEvaluateRequest: AIGuardEvaluateRequest,
    AIGuardEvaluateRequestData: AIGuardEvaluateRequestData,
    AIGuardEvaluateRequestDataAttributes: AIGuardEvaluateRequestDataAttributes,
    AIGuardEvaluateResponse: AIGuardEvaluateResponse,
    AIGuardImageURL: AIGuardImageURL,
    AIGuardMessage: AIGuardMessage,
    AIGuardMeta: AIGuardMeta,
    AIGuardRedactionReplacement: AIGuardRedactionReplacement,
    AIGuardScfwFindings: AIGuardScfwFindings,
    AIGuardScfwMatchedRule: AIGuardScfwMatchedRule,
    AIGuardScfwPackageFinding: AIGuardScfwPackageFinding,
    AIGuardSdsFinding: AIGuardSdsFinding,
    AIGuardSdsFindingLocation: AIGuardSdsFindingLocation,
    AIGuardToolCall: AIGuardToolCall,
    AIGuardToolCallFunction: AIGuardToolCallFunction,
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
