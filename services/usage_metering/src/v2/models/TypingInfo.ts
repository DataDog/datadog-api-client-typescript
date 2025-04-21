import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ActiveBillingDimensionsAttributes } from "./ActiveBillingDimensionsAttributes";
import { ActiveBillingDimensionsBody } from "./ActiveBillingDimensionsBody";
import { ActiveBillingDimensionsResponse } from "./ActiveBillingDimensionsResponse";
import { BillingDimensionsMappingBodyItem } from "./BillingDimensionsMappingBodyItem";
import { BillingDimensionsMappingBodyItemAttributes } from "./BillingDimensionsMappingBodyItemAttributes";
import { BillingDimensionsMappingBodyItemAttributesEndpointsItems } from "./BillingDimensionsMappingBodyItemAttributesEndpointsItems";
import { BillingDimensionsMappingResponse } from "./BillingDimensionsMappingResponse";
import { ChargebackBreakdown } from "./ChargebackBreakdown";
import { CostAttributionAggregatesBody } from "./CostAttributionAggregatesBody";
import { CostByOrg } from "./CostByOrg";
import { CostByOrgAttributes } from "./CostByOrgAttributes";
import { CostByOrgResponse } from "./CostByOrgResponse";
import { HourlyUsage } from "./HourlyUsage";
import { HourlyUsageAttributes } from "./HourlyUsageAttributes";
import { HourlyUsageMeasurement } from "./HourlyUsageMeasurement";
import { HourlyUsageMetadata } from "./HourlyUsageMetadata";
import { HourlyUsagePagination } from "./HourlyUsagePagination";
import { HourlyUsageResponse } from "./HourlyUsageResponse";
import { MonthlyCostAttributionAttributes } from "./MonthlyCostAttributionAttributes";
import { MonthlyCostAttributionBody } from "./MonthlyCostAttributionBody";
import { MonthlyCostAttributionMeta } from "./MonthlyCostAttributionMeta";
import { MonthlyCostAttributionPagination } from "./MonthlyCostAttributionPagination";
import { MonthlyCostAttributionResponse } from "./MonthlyCostAttributionResponse";
import { ProjectedCost } from "./ProjectedCost";
import { ProjectedCostAttributes } from "./ProjectedCostAttributes";
import { ProjectedCostResponse } from "./ProjectedCostResponse";
import { UsageApplicationSecurityMonitoringResponse } from "./UsageApplicationSecurityMonitoringResponse";
import { UsageAttributesObject } from "./UsageAttributesObject";
import { UsageDataObject } from "./UsageDataObject";
import { UsageLambdaTracedInvocationsResponse } from "./UsageLambdaTracedInvocationsResponse";
import { UsageObservabilityPipelinesResponse } from "./UsageObservabilityPipelinesResponse";
import { UsageTimeSeriesObject } from "./UsageTimeSeriesObject";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ActiveBillingDimensionsType: ["billing_dimensions"],
    BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus: [
      "OK",
      "NOT_FOUND",
    ],
    CostAttributionType: ["cost_by_tag"],
    CostByOrgType: ["cost_by_org"],
    HourlyUsageType: [
      "app_sec_host_count",
      "observability_pipelines_bytes_processed",
      "lambda_traced_invocations_count",
    ],
    ProjectedCostType: ["projected_cost"],
    SortDirection: ["desc", "asc"],
    UsageTimeSeriesType: ["usage_timeseries"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ActiveBillingDimensionsAttributes: ActiveBillingDimensionsAttributes,
    ActiveBillingDimensionsBody: ActiveBillingDimensionsBody,
    ActiveBillingDimensionsResponse: ActiveBillingDimensionsResponse,
    BillingDimensionsMappingBodyItem: BillingDimensionsMappingBodyItem,
    BillingDimensionsMappingBodyItemAttributes:
      BillingDimensionsMappingBodyItemAttributes,
    BillingDimensionsMappingBodyItemAttributesEndpointsItems:
      BillingDimensionsMappingBodyItemAttributesEndpointsItems,
    BillingDimensionsMappingResponse: BillingDimensionsMappingResponse,
    ChargebackBreakdown: ChargebackBreakdown,
    CostAttributionAggregatesBody: CostAttributionAggregatesBody,
    CostByOrg: CostByOrg,
    CostByOrgAttributes: CostByOrgAttributes,
    CostByOrgResponse: CostByOrgResponse,
    HourlyUsage: HourlyUsage,
    HourlyUsageAttributes: HourlyUsageAttributes,
    HourlyUsageMeasurement: HourlyUsageMeasurement,
    HourlyUsageMetadata: HourlyUsageMetadata,
    HourlyUsagePagination: HourlyUsagePagination,
    HourlyUsageResponse: HourlyUsageResponse,
    MonthlyCostAttributionAttributes: MonthlyCostAttributionAttributes,
    MonthlyCostAttributionBody: MonthlyCostAttributionBody,
    MonthlyCostAttributionMeta: MonthlyCostAttributionMeta,
    MonthlyCostAttributionPagination: MonthlyCostAttributionPagination,
    MonthlyCostAttributionResponse: MonthlyCostAttributionResponse,
    ProjectedCost: ProjectedCost,
    ProjectedCostAttributes: ProjectedCostAttributes,
    ProjectedCostResponse: ProjectedCostResponse,
    UsageApplicationSecurityMonitoringResponse:
      UsageApplicationSecurityMonitoringResponse,
    UsageAttributesObject: UsageAttributesObject,
    UsageDataObject: UsageDataObject,
    UsageLambdaTracedInvocationsResponse: UsageLambdaTracedInvocationsResponse,
    UsageObservabilityPipelinesResponse: UsageObservabilityPipelinesResponse,
    UsageTimeSeriesObject: UsageTimeSeriesObject,
  },
};
