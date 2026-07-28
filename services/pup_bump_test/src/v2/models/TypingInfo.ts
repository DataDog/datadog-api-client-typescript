import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PupBumpTestData } from "./PupBumpTestData";
import { PupBumpTestDataAttributes } from "./PupBumpTestDataAttributes";
import { PupBumpTestResponse } from "./PupBumpTestResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    PupBumpTestType: ["pup_bump_test"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PupBumpTestData: PupBumpTestData,
    PupBumpTestDataAttributes: PupBumpTestDataAttributes,
    PupBumpTestResponse: PupBumpTestResponse,
  },
};
