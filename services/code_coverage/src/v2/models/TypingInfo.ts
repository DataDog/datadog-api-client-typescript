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
import { FileCoverageLines } from "./FileCoverageLines";
import { FilesCoverageAttributes } from "./FilesCoverageAttributes";
import { FilesCoverageData } from "./FilesCoverageData";
import { FilesCoverageRequest } from "./FilesCoverageRequest";
import { FilesCoverageRequestAttributes } from "./FilesCoverageRequestAttributes";
import { FilesCoverageRequestData } from "./FilesCoverageRequestData";
import { FilesCoverageResponse } from "./FilesCoverageResponse";
import { PRCoverageSummaryRequest } from "./PRCoverageSummaryRequest";
import { PRCoverageSummaryRequestAttributes } from "./PRCoverageSummaryRequestAttributes";
import { PRCoverageSummaryRequestData } from "./PRCoverageSummaryRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    BranchCoverageSummaryRequestType: [
      "ci_app_coverage_branch_summary_request",
    ],
    CommitCoverageSummaryRequestType: [
      "ci_app_coverage_commit_summary_request",
    ],
    CoverageSummaryType: ["ci_app_coverage_summary"],
    FilesCoverageRequestType: ["ci_app_coverage_files_request"],
    FilesCoverageResponseType: ["ci_app_coverage_files"],
    PRCoverageSummaryRequestType: ["ci_app_coverage_pr_summary_request"],
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
    FileCoverageLines: FileCoverageLines,
    FilesCoverageAttributes: FilesCoverageAttributes,
    FilesCoverageData: FilesCoverageData,
    FilesCoverageRequest: FilesCoverageRequest,
    FilesCoverageRequestAttributes: FilesCoverageRequestAttributes,
    FilesCoverageRequestData: FilesCoverageRequestData,
    FilesCoverageResponse: FilesCoverageResponse,
    PRCoverageSummaryRequest: PRCoverageSummaryRequest,
    PRCoverageSummaryRequestAttributes: PRCoverageSummaryRequestAttributes,
    PRCoverageSummaryRequestData: PRCoverageSummaryRequestData,
  },
};
