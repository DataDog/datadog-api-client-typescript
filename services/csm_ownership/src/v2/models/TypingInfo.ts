import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OwnershipEvidenceAttributes } from "./OwnershipEvidenceAttributes";
import { OwnershipEvidenceData } from "./OwnershipEvidenceData";
import { OwnershipEvidenceResponse } from "./OwnershipEvidenceResponse";
import { OwnershipFeedbackRequest } from "./OwnershipFeedbackRequest";
import { OwnershipFeedbackRequestAttributes } from "./OwnershipFeedbackRequestAttributes";
import { OwnershipFeedbackRequestData } from "./OwnershipFeedbackRequestData";
import { OwnershipFeedbackResponse } from "./OwnershipFeedbackResponse";
import { OwnershipFeedbackResultAttributes } from "./OwnershipFeedbackResultAttributes";
import { OwnershipFeedbackResultData } from "./OwnershipFeedbackResultData";
import { OwnershipHistoryAttributes } from "./OwnershipHistoryAttributes";
import { OwnershipHistoryData } from "./OwnershipHistoryData";
import { OwnershipHistoryItem } from "./OwnershipHistoryItem";
import { OwnershipHistoryPagination } from "./OwnershipHistoryPagination";
import { OwnershipHistoryResponse } from "./OwnershipHistoryResponse";
import { OwnershipInferenceAttributes } from "./OwnershipInferenceAttributes";
import { OwnershipInferenceData } from "./OwnershipInferenceData";
import { OwnershipInferenceItem } from "./OwnershipInferenceItem";
import { OwnershipInferenceListAttributes } from "./OwnershipInferenceListAttributes";
import { OwnershipInferenceListData } from "./OwnershipInferenceListData";
import { OwnershipInferenceListResponse } from "./OwnershipInferenceListResponse";
import { OwnershipInferenceResponse } from "./OwnershipInferenceResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OwnershipEvidenceType: ["ownership_evidence"],
    OwnershipFeedbackAction: ["confirm", "reject", "correct", "persist"],
    OwnershipFeedbackResultType: ["ownership_feedback_result"],
    OwnershipFeedbackType: ["ownership_feedback"],
    OwnershipHistoryType: ["ownership_history"],
    OwnershipInferenceStatus: [
      "suggested",
      "persisted",
      "overridden",
      "failed",
      "unknown",
    ],
    OwnershipInferenceType: ["ownership_inference"],
    OwnershipInferencesType: ["ownership_inferences"],
    OwnershipOwnerType: ["user", "team", "service", "unknown"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OwnershipEvidenceAttributes: OwnershipEvidenceAttributes,
    OwnershipEvidenceData: OwnershipEvidenceData,
    OwnershipEvidenceResponse: OwnershipEvidenceResponse,
    OwnershipFeedbackRequest: OwnershipFeedbackRequest,
    OwnershipFeedbackRequestAttributes: OwnershipFeedbackRequestAttributes,
    OwnershipFeedbackRequestData: OwnershipFeedbackRequestData,
    OwnershipFeedbackResponse: OwnershipFeedbackResponse,
    OwnershipFeedbackResultAttributes: OwnershipFeedbackResultAttributes,
    OwnershipFeedbackResultData: OwnershipFeedbackResultData,
    OwnershipHistoryAttributes: OwnershipHistoryAttributes,
    OwnershipHistoryData: OwnershipHistoryData,
    OwnershipHistoryItem: OwnershipHistoryItem,
    OwnershipHistoryPagination: OwnershipHistoryPagination,
    OwnershipHistoryResponse: OwnershipHistoryResponse,
    OwnershipInferenceAttributes: OwnershipInferenceAttributes,
    OwnershipInferenceData: OwnershipInferenceData,
    OwnershipInferenceItem: OwnershipInferenceItem,
    OwnershipInferenceListAttributes: OwnershipInferenceListAttributes,
    OwnershipInferenceListData: OwnershipInferenceListData,
    OwnershipInferenceListResponse: OwnershipInferenceListResponse,
    OwnershipInferenceResponse: OwnershipInferenceResponse,
  },
};
