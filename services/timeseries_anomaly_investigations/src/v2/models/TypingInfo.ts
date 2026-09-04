import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TimeseriesAnomalyInvestigationAnomaly } from "./TimeseriesAnomalyInvestigationAnomaly";
import { TimeseriesAnomalyInvestigationAnomalyFinding } from "./TimeseriesAnomalyInvestigationAnomalyFinding";
import { TimeseriesAnomalyInvestigationDetection } from "./TimeseriesAnomalyInvestigationDetection";
import { TimeseriesAnomalyInvestigationFindingSynonym } from "./TimeseriesAnomalyInvestigationFindingSynonym";
import { TimeseriesAnomalyInvestigationFindingTag } from "./TimeseriesAnomalyInvestigationFindingTag";
import { TimeseriesAnomalyInvestigationFormula } from "./TimeseriesAnomalyInvestigationFormula";
import { TimeseriesAnomalyInvestigationFormulaLimit } from "./TimeseriesAnomalyInvestigationFormulaLimit";
import { TimeseriesAnomalyInvestigationInfluentialTagFinding } from "./TimeseriesAnomalyInvestigationInfluentialTagFinding";
import { TimeseriesAnomalyInvestigationInterval } from "./TimeseriesAnomalyInvestigationInterval";
import { TimeseriesAnomalyInvestigationMaximumDeviation } from "./TimeseriesAnomalyInvestigationMaximumDeviation";
import { TimeseriesAnomalyInvestigationMetricQuery } from "./TimeseriesAnomalyInvestigationMetricQuery";
import { TimeseriesAnomalyInvestigationQueryStatus } from "./TimeseriesAnomalyInvestigationQueryStatus";
import { TimeseriesAnomalyInvestigationRequest } from "./TimeseriesAnomalyInvestigationRequest";
import { TimeseriesAnomalyInvestigationRequestAttributes } from "./TimeseriesAnomalyInvestigationRequestAttributes";
import { TimeseriesAnomalyInvestigationRequestData } from "./TimeseriesAnomalyInvestigationRequestData";
import { TimeseriesAnomalyInvestigationResponse } from "./TimeseriesAnomalyInvestigationResponse";
import { TimeseriesAnomalyInvestigationResponseAttributes } from "./TimeseriesAnomalyInvestigationResponseAttributes";
import { TimeseriesAnomalyInvestigationResponseData } from "./TimeseriesAnomalyInvestigationResponseData";
import { TimeseriesAnomalyInvestigationResponseMeta } from "./TimeseriesAnomalyInvestigationResponseMeta";
import { TimeseriesAnomalyInvestigationResult } from "./TimeseriesAnomalyInvestigationResult";
import { TimeseriesAnomalyInvestigationResultsWarning } from "./TimeseriesAnomalyInvestigationResultsWarning";
import { TimeseriesAnomalyInvestigationSeries } from "./TimeseriesAnomalyInvestigationSeries";
import { TimeseriesAnomalyInvestigationTagAnalysis } from "./TimeseriesAnomalyInvestigationTagAnalysis";
import { TimeseriesAnomalyInvestigationTimeseriesRequest } from "./TimeseriesAnomalyInvestigationTimeseriesRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TimeseriesAnomalyInvestigationAnomalyFindingType: ["anomaly"],
    TimeseriesAnomalyInvestigationAnomalyType: ["spike", "dip"],
    TimeseriesAnomalyInvestigationCompleteStatus: ["complete"],
    TimeseriesAnomalyInvestigationConfigurationSource: [
      "request_formula",
      "watchdog_explains_default",
    ],
    TimeseriesAnomalyInvestigationDataSource: ["metrics"],
    TimeseriesAnomalyInvestigationFormulaLimitOrder: ["asc", "desc"],
    TimeseriesAnomalyInvestigationInfluenceType: ["shape", "value"],
    TimeseriesAnomalyInvestigationInfluentialTagFindingType: [
      "influential_tag",
    ],
    TimeseriesAnomalyInvestigationMetaType: [
      "timeseries_anomaly_investigation",
    ],
    TimeseriesAnomalyInvestigationQueryExecutionStatus: ["running", "done"],
    TimeseriesAnomalyInvestigationResponseID: ["0"],
    TimeseriesAnomalyInvestigationTagAnalysisStatus: [
      "complete",
      "unsupported",
      "failed",
    ],
    TimeseriesAnomalyInvestigationType: ["timeseries_anomaly_investigation"],
  },
  oneOfMap: {
    TimeseriesAnomalyInvestigationFinding: [
      "TimeseriesAnomalyInvestigationInfluentialTagFinding",
      "TimeseriesAnomalyInvestigationAnomalyFinding",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TimeseriesAnomalyInvestigationAnomaly:
      TimeseriesAnomalyInvestigationAnomaly,
    TimeseriesAnomalyInvestigationAnomalyFinding:
      TimeseriesAnomalyInvestigationAnomalyFinding,
    TimeseriesAnomalyInvestigationDetection:
      TimeseriesAnomalyInvestigationDetection,
    TimeseriesAnomalyInvestigationFindingSynonym:
      TimeseriesAnomalyInvestigationFindingSynonym,
    TimeseriesAnomalyInvestigationFindingTag:
      TimeseriesAnomalyInvestigationFindingTag,
    TimeseriesAnomalyInvestigationFormula:
      TimeseriesAnomalyInvestigationFormula,
    TimeseriesAnomalyInvestigationFormulaLimit:
      TimeseriesAnomalyInvestigationFormulaLimit,
    TimeseriesAnomalyInvestigationInfluentialTagFinding:
      TimeseriesAnomalyInvestigationInfluentialTagFinding,
    TimeseriesAnomalyInvestigationInterval:
      TimeseriesAnomalyInvestigationInterval,
    TimeseriesAnomalyInvestigationMaximumDeviation:
      TimeseriesAnomalyInvestigationMaximumDeviation,
    TimeseriesAnomalyInvestigationMetricQuery:
      TimeseriesAnomalyInvestigationMetricQuery,
    TimeseriesAnomalyInvestigationQueryStatus:
      TimeseriesAnomalyInvestigationQueryStatus,
    TimeseriesAnomalyInvestigationRequest:
      TimeseriesAnomalyInvestigationRequest,
    TimeseriesAnomalyInvestigationRequestAttributes:
      TimeseriesAnomalyInvestigationRequestAttributes,
    TimeseriesAnomalyInvestigationRequestData:
      TimeseriesAnomalyInvestigationRequestData,
    TimeseriesAnomalyInvestigationResponse:
      TimeseriesAnomalyInvestigationResponse,
    TimeseriesAnomalyInvestigationResponseAttributes:
      TimeseriesAnomalyInvestigationResponseAttributes,
    TimeseriesAnomalyInvestigationResponseData:
      TimeseriesAnomalyInvestigationResponseData,
    TimeseriesAnomalyInvestigationResponseMeta:
      TimeseriesAnomalyInvestigationResponseMeta,
    TimeseriesAnomalyInvestigationResult: TimeseriesAnomalyInvestigationResult,
    TimeseriesAnomalyInvestigationResultsWarning:
      TimeseriesAnomalyInvestigationResultsWarning,
    TimeseriesAnomalyInvestigationSeries: TimeseriesAnomalyInvestigationSeries,
    TimeseriesAnomalyInvestigationTagAnalysis:
      TimeseriesAnomalyInvestigationTagAnalysis,
    TimeseriesAnomalyInvestigationTimeseriesRequest:
      TimeseriesAnomalyInvestigationTimeseriesRequest,
  },
};
