import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntakeAPIKeyAttributes } from "./IntakeAPIKeyAttributes";
import { IntakeAPIKeyData } from "./IntakeAPIKeyData";
import { IntakeAPIKeyResponse } from "./IntakeAPIKeyResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntakeAPIKeyType: ["intake_api_key"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntakeAPIKeyAttributes: IntakeAPIKeyAttributes,
    IntakeAPIKeyData: IntakeAPIKeyData,
    IntakeAPIKeyResponse: IntakeAPIKeyResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
