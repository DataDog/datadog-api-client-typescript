import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CsmCloudAccountsCoverageAnalysisAttributes } from "./CsmCloudAccountsCoverageAnalysisAttributes";
import { CsmCloudAccountsCoverageAnalysisData } from "./CsmCloudAccountsCoverageAnalysisData";
import { CsmCloudAccountsCoverageAnalysisResponse } from "./CsmCloudAccountsCoverageAnalysisResponse";
import { CsmCoverageAnalysis } from "./CsmCoverageAnalysis";
import { CsmHostsAndContainersCoverageAnalysisAttributes } from "./CsmHostsAndContainersCoverageAnalysisAttributes";
import { CsmHostsAndContainersCoverageAnalysisData } from "./CsmHostsAndContainersCoverageAnalysisData";
import { CsmHostsAndContainersCoverageAnalysisResponse } from "./CsmHostsAndContainersCoverageAnalysisResponse";
import { CsmServerlessCoverageAnalysisAttributes } from "./CsmServerlessCoverageAnalysisAttributes";
import { CsmServerlessCoverageAnalysisData } from "./CsmServerlessCoverageAnalysisData";
import { CsmServerlessCoverageAnalysisResponse } from "./CsmServerlessCoverageAnalysisResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CsmCloudAccountsCoverageAnalysisAttributes:
      CsmCloudAccountsCoverageAnalysisAttributes,
    CsmCloudAccountsCoverageAnalysisData: CsmCloudAccountsCoverageAnalysisData,
    CsmCloudAccountsCoverageAnalysisResponse:
      CsmCloudAccountsCoverageAnalysisResponse,
    CsmCoverageAnalysis: CsmCoverageAnalysis,
    CsmHostsAndContainersCoverageAnalysisAttributes:
      CsmHostsAndContainersCoverageAnalysisAttributes,
    CsmHostsAndContainersCoverageAnalysisData:
      CsmHostsAndContainersCoverageAnalysisData,
    CsmHostsAndContainersCoverageAnalysisResponse:
      CsmHostsAndContainersCoverageAnalysisResponse,
    CsmServerlessCoverageAnalysisAttributes:
      CsmServerlessCoverageAnalysisAttributes,
    CsmServerlessCoverageAnalysisData: CsmServerlessCoverageAnalysisData,
    CsmServerlessCoverageAnalysisResponse:
      CsmServerlessCoverageAnalysisResponse,
  },
};
