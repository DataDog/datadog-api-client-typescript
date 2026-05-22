import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { TestExample } from "./TestExample";
import { TestExamplesResponse } from "./TestExamplesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    TestExample: TestExample,
    TestExamplesResponse: TestExamplesResponse,
  },
};
