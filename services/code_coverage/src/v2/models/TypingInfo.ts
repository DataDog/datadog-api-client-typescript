import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { BranchCoverageSummaryRequest } from "./BranchCoverageSummaryRequest";
import { BranchCoverageSummaryRequestAttributes } from "./BranchCoverageSummaryRequestAttributes";
import { BranchCoverageSummaryRequestData } from "./BranchCoverageSummaryRequestData";
import { CommitCoverageSummaryRequest } from "./CommitCoverageSummaryRequest";
import { CommitCoverageSummaryRequestAttributes } from "./CommitCoverageSummaryRequestAttributes";
import { CommitCoverageSummaryRequestData } from "./CommitCoverageSummaryRequestData";
import { CoverageSummaryAttributes } from "./CoverageSummaryAttributes";
import { CoverageSummaryCodeownerStats } from "./CoverageSummaryCodeownerStats";
import { CoverageSummaryData } from "./CoverageSummaryData";
import { CoverageSummaryResponse } from "./CoverageSummaryResponse";
import { CoverageSummaryServiceStats } from "./CoverageSummaryServiceStats";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    BranchCoverageSummaryRequestType: [
      "ci_app_coverage_branch_summary_request",
    ],
    CommitCoverageSummaryRequestType: [
      "ci_app_coverage_commit_summary_request",
    ],
    CoverageSummaryType: ["ci_app_coverage_summary"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    BranchCoverageSummaryRequest: BranchCoverageSummaryRequest,
    BranchCoverageSummaryRequestAttributes:
      BranchCoverageSummaryRequestAttributes,
    BranchCoverageSummaryRequestData: BranchCoverageSummaryRequestData,
    CommitCoverageSummaryRequest: CommitCoverageSummaryRequest,
    CommitCoverageSummaryRequestAttributes:
      CommitCoverageSummaryRequestAttributes,
    CommitCoverageSummaryRequestData: CommitCoverageSummaryRequestData,
    CoverageSummaryAttributes: CoverageSummaryAttributes,
    CoverageSummaryCodeownerStats: CoverageSummaryCodeownerStats,
    CoverageSummaryData: CoverageSummaryData,
    CoverageSummaryResponse: CoverageSummaryResponse,
    CoverageSummaryServiceStats: CoverageSummaryServiceStats,
  },
};
