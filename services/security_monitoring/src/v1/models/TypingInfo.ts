import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AddSignalToIncidentRequest } from "./AddSignalToIncidentRequest";
import { SignalAssigneeUpdateRequest } from "./SignalAssigneeUpdateRequest";
import { SignalStateUpdateRequest } from "./SignalStateUpdateRequest";
import { SuccessfulSignalUpdateResponse } from "./SuccessfulSignalUpdateResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SignalArchiveReason: [
      "none",
      "false_positive",
      "testing_or_maintenance",
      "investigated_case_opened",
      "true_positive_benign",
      "true_positive_malicious",
      "other",
    ],
    SignalTriageState: ["open", "archived", "under_review"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AddSignalToIncidentRequest: AddSignalToIncidentRequest,
    SignalAssigneeUpdateRequest: SignalAssigneeUpdateRequest,
    SignalStateUpdateRequest: SignalStateUpdateRequest,
    SuccessfulSignalUpdateResponse: SuccessfulSignalUpdateResponse,
  },
};
