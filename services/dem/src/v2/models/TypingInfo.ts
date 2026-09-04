import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DemBatchGetJourneysAttributes } from "./DemBatchGetJourneysAttributes";
import { DemBatchGetJourneysData } from "./DemBatchGetJourneysData";
import { DemBatchGetJourneysRequest } from "./DemBatchGetJourneysRequest";
import { DemCreateJourneyTestSuiteAttributes } from "./DemCreateJourneyTestSuiteAttributes";
import { DemCreateJourneyTestSuiteData } from "./DemCreateJourneyTestSuiteData";
import { DemCreateJourneyTestSuiteRequest } from "./DemCreateJourneyTestSuiteRequest";
import { DemInferredJourneyCandidateAttributes } from "./DemInferredJourneyCandidateAttributes";
import { DemInferredJourneyCandidateData } from "./DemInferredJourneyCandidateData";
import { DemInferredJourneyIgnoredAttributes } from "./DemInferredJourneyIgnoredAttributes";
import { DemInferredJourneyIgnoredData } from "./DemInferredJourneyIgnoredData";
import { DemJourneyCreateAttributes } from "./DemJourneyCreateAttributes";
import { DemJourneyCreateData } from "./DemJourneyCreateData";
import { DemJourneyCreateRequest } from "./DemJourneyCreateRequest";
import { DemJourneyResponse } from "./DemJourneyResponse";
import { DemJourneyResponseAttributes } from "./DemJourneyResponseAttributes";
import { DemJourneyResponseData } from "./DemJourneyResponseData";
import { DemJourneyRum } from "./DemJourneyRum";
import { DemJourneyTestSuiteResponse } from "./DemJourneyTestSuiteResponse";
import { DemJourneyTestSuiteResponseAttributes } from "./DemJourneyTestSuiteResponseAttributes";
import { DemJourneyTestSuiteResponseData } from "./DemJourneyTestSuiteResponseData";
import { DemJourneysListResponse } from "./DemJourneysListResponse";
import { DemRecommendedTestAttributes } from "./DemRecommendedTestAttributes";
import { DemRecommendedTestData } from "./DemRecommendedTestData";
import { DemRecommendedTestsResponse } from "./DemRecommendedTestsResponse";
import { DemRumNode } from "./DemRumNode";
import { DemRumStep } from "./DemRumStep";
import { DemSearchInferredJourneysResponse } from "./DemSearchInferredJourneysResponse";
import { DemTestSuiteNested } from "./DemTestSuiteNested";
import { DemUser } from "./DemUser";
import { DemVariant } from "./DemVariant";
import { DemVariantAttributes } from "./DemVariantAttributes";
import { DemVariantRequest } from "./DemVariantRequest";
import { DemVariantRequestData } from "./DemVariantRequestData";
import { DemVariantResponse } from "./DemVariantResponse";
import { DemVariantResponseData } from "./DemVariantResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DemBatchGetJourneysRequestType: [
      "batch_get_journeys_by_test_suite_ids_request",
    ],
    DemCreateJourneyTestSuiteRequestType: [
      "create_test_suite_for_journey_request",
    ],
    DemInferredJourneyStatus: ["candidate", "ignored"],
    DemJourneyTestSuiteType: ["journey_test_suite"],
    DemJourneyType: ["journeys"],
    DemRecommendedTestType: ["recommended_tests"],
    DemRumStepType: ["start", "stop", "step"],
    DemVariantType: ["variants"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DemBatchGetJourneysAttributes: DemBatchGetJourneysAttributes,
    DemBatchGetJourneysData: DemBatchGetJourneysData,
    DemBatchGetJourneysRequest: DemBatchGetJourneysRequest,
    DemCreateJourneyTestSuiteAttributes: DemCreateJourneyTestSuiteAttributes,
    DemCreateJourneyTestSuiteData: DemCreateJourneyTestSuiteData,
    DemCreateJourneyTestSuiteRequest: DemCreateJourneyTestSuiteRequest,
    DemInferredJourneyCandidateAttributes:
      DemInferredJourneyCandidateAttributes,
    DemInferredJourneyCandidateData: DemInferredJourneyCandidateData,
    DemInferredJourneyIgnoredAttributes: DemInferredJourneyIgnoredAttributes,
    DemInferredJourneyIgnoredData: DemInferredJourneyIgnoredData,
    DemJourneyCreateAttributes: DemJourneyCreateAttributes,
    DemJourneyCreateData: DemJourneyCreateData,
    DemJourneyCreateRequest: DemJourneyCreateRequest,
    DemJourneyResponse: DemJourneyResponse,
    DemJourneyResponseAttributes: DemJourneyResponseAttributes,
    DemJourneyResponseData: DemJourneyResponseData,
    DemJourneyRum: DemJourneyRum,
    DemJourneyTestSuiteResponse: DemJourneyTestSuiteResponse,
    DemJourneyTestSuiteResponseAttributes:
      DemJourneyTestSuiteResponseAttributes,
    DemJourneyTestSuiteResponseData: DemJourneyTestSuiteResponseData,
    DemJourneysListResponse: DemJourneysListResponse,
    DemRecommendedTestAttributes: DemRecommendedTestAttributes,
    DemRecommendedTestData: DemRecommendedTestData,
    DemRecommendedTestsResponse: DemRecommendedTestsResponse,
    DemRumNode: DemRumNode,
    DemRumStep: DemRumStep,
    DemSearchInferredJourneysResponse: DemSearchInferredJourneysResponse,
    DemTestSuiteNested: DemTestSuiteNested,
    DemUser: DemUser,
    DemVariant: DemVariant,
    DemVariantAttributes: DemVariantAttributes,
    DemVariantRequest: DemVariantRequest,
    DemVariantRequestData: DemVariantRequestData,
    DemVariantResponse: DemVariantResponse,
    DemVariantResponseData: DemVariantResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
