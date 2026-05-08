import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ReplayAnalysisAffectedSession } from "./ReplayAnalysisAffectedSession";
import { ReplayAnalysisIssueData } from "./ReplayAnalysisIssueData";
import { ReplayAnalysisIssueDataAttributes } from "./ReplayAnalysisIssueDataAttributes";
import { ReplayAnalysisIssueMeta } from "./ReplayAnalysisIssueMeta";
import { ReplayAnalysisIssueResponse } from "./ReplayAnalysisIssueResponse";
import { ReplayAnalysisIssueSessionData } from "./ReplayAnalysisIssueSessionData";
import { ReplayAnalysisIssueSessionDataAttributes } from "./ReplayAnalysisIssueSessionDataAttributes";
import { ReplayAnalysisIssueSessionsResponse } from "./ReplayAnalysisIssueSessionsResponse";
import { ReplayAnalysisIssuesResponse } from "./ReplayAnalysisIssuesResponse";
import { ReplayAnalysisLLMDetails } from "./ReplayAnalysisLLMDetails";
import { ReplayAnalysisPageMeta } from "./ReplayAnalysisPageMeta";
import { ReplayAnalysisRepresentativeSession } from "./ReplayAnalysisRepresentativeSession";
import { ReplayAnalysisScreenshot } from "./ReplayAnalysisScreenshot";
import { ReplayAnalysisSignal } from "./ReplayAnalysisSignal";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ReplayAnalysisIssueDataType: ["issues"],
    ReplayAnalysisIssueSessionDataType: ["sessions"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ReplayAnalysisAffectedSession: ReplayAnalysisAffectedSession,
    ReplayAnalysisIssueData: ReplayAnalysisIssueData,
    ReplayAnalysisIssueDataAttributes: ReplayAnalysisIssueDataAttributes,
    ReplayAnalysisIssueMeta: ReplayAnalysisIssueMeta,
    ReplayAnalysisIssueResponse: ReplayAnalysisIssueResponse,
    ReplayAnalysisIssueSessionData: ReplayAnalysisIssueSessionData,
    ReplayAnalysisIssueSessionDataAttributes:
      ReplayAnalysisIssueSessionDataAttributes,
    ReplayAnalysisIssueSessionsResponse: ReplayAnalysisIssueSessionsResponse,
    ReplayAnalysisIssuesResponse: ReplayAnalysisIssuesResponse,
    ReplayAnalysisLLMDetails: ReplayAnalysisLLMDetails,
    ReplayAnalysisPageMeta: ReplayAnalysisPageMeta,
    ReplayAnalysisRepresentativeSession: ReplayAnalysisRepresentativeSession,
    ReplayAnalysisScreenshot: ReplayAnalysisScreenshot,
    ReplayAnalysisSignal: ReplayAnalysisSignal,
  },
};
