import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { AIGuardContentPart } from "./AIGuardContentPart";
import { AIGuardEvaluateRequest } from "./AIGuardEvaluateRequest";
import { AIGuardEvaluateResponse } from "./AIGuardEvaluateResponse";
import { AIGuardImageURL } from "./AIGuardImageURL";
import { AIGuardMessage } from "./AIGuardMessage";
import { AIGuardMeta } from "./AIGuardMeta";
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
    AIGuardMessageRole: ["user", "assistant", "system", "tool", "developer"],
  },
  oneOfMap: {
    AIGuardMessageContent: ["string", "Array<AIGuardContentPart>"],
  },
  typeMap: {
    AIGuardContentPart: AIGuardContentPart,
    AIGuardEvaluateRequest: AIGuardEvaluateRequest,
    AIGuardEvaluateResponse: AIGuardEvaluateResponse,
    AIGuardImageURL: AIGuardImageURL,
    AIGuardMessage: AIGuardMessage,
    AIGuardMeta: AIGuardMeta,
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
