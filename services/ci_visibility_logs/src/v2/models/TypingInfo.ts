import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { CILogErrors } from "./CILogErrors";
import { CILogIntakeError } from "./CILogIntakeError";
import { CILogIntakeErrors } from "./CILogIntakeErrors";
import { CILogItem } from "./CILogItem";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CILogContentEncoding: ["identity", "gzip"],
  },
  oneOfMap: {
    CILogAttributeValue: ["string", "number", "boolean"],
  },
  typeMap: {
    CILogErrors: CILogErrors,
    CILogIntakeError: CILogIntakeError,
    CILogIntakeErrors: CILogIntakeErrors,
    CILogItem: CILogItem,
  },
};
