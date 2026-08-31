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
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
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
import { UsageAttributionTypesAttributes } from "./UsageAttributionTypesAttributes";
import { UsageAttributionTypesBody } from "./UsageAttributionTypesBody";
import { UsageAttributionTypesResponse } from "./UsageAttributionTypesResponse";
import { UsageDataObject } from "./UsageDataObject";
import { UsageLambdaTracedInvocationsResponse } from "./UsageLambdaTracedInvocationsResponse";
import { UsageObservabilityPipelinesResponse } from "./UsageObservabilityPipelinesResponse";
import { UsageQuotaBulkResultAttributes } from "./UsageQuotaBulkResultAttributes";
import { UsageQuotaBulkResultData } from "./UsageQuotaBulkResultData";
import { UsageQuotaCreateAttributes } from "./UsageQuotaCreateAttributes";
import { UsageQuotaCreateData } from "./UsageQuotaCreateData";
import { UsageQuotaResponse } from "./UsageQuotaResponse";
import { UsageQuotaResponseAttributes } from "./UsageQuotaResponseAttributes";
import { UsageQuotaResponseData } from "./UsageQuotaResponseData";
import { UsageQuotaUpdateAttributes } from "./UsageQuotaUpdateAttributes";
import { UsageQuotaUpdateData } from "./UsageQuotaUpdateData";
import { UsageQuotaUpdateRequest } from "./UsageQuotaUpdateRequest";
import { UsageQuotasBulkResponse } from "./UsageQuotasBulkResponse";
import { UsageQuotasCreateRequest } from "./UsageQuotasCreateRequest";
import { UsageQuotasListResponse } from "./UsageQuotasListResponse";
import { UsageQuotasResponseMeta } from "./UsageQuotasResponseMeta";
import { UsageQuotasResponseMetaPage } from "./UsageQuotasResponseMetaPage";
import { UsageSummaryAvailableFieldsAttributes } from "./UsageSummaryAvailableFieldsAttributes";
import { UsageSummaryAvailableFieldsBody } from "./UsageSummaryAvailableFieldsBody";
import { UsageSummaryAvailableFieldsResponse } from "./UsageSummaryAvailableFieldsResponse";
import { UsageTimeSeriesObject } from "./UsageTimeSeriesObject";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ActiveBillingDimensionsType: ["billing_dimensions"],
    BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus: [
      "OK",
      "NOT_FOUND",
    ],
    CostAggregationType: ["cumulative"],
    CostAttributionType: ["cost_by_tag"],
    CostByOrgType: ["cost_by_org"],
    HourlyUsageType: [
      "app_sec_host_count",
      "observability_pipelines_bytes_processed",
      "lambda_traced_invocations_count",
    ],
    ProjectedCostType: ["projected_cost"],
    SortDirection: ["desc", "asc"],
    UsageAttributionTypesType: ["usage_attribution_types"],
    UsageQuotaType: ["quotas"],
    UsageSummaryAvailableFieldsType: ["usage_summary_available_fields"],
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
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
    UsageAttributionTypesAttributes: UsageAttributionTypesAttributes,
    UsageAttributionTypesBody: UsageAttributionTypesBody,
    UsageAttributionTypesResponse: UsageAttributionTypesResponse,
    UsageDataObject: UsageDataObject,
    UsageLambdaTracedInvocationsResponse: UsageLambdaTracedInvocationsResponse,
    UsageObservabilityPipelinesResponse: UsageObservabilityPipelinesResponse,
    UsageQuotaBulkResultAttributes: UsageQuotaBulkResultAttributes,
    UsageQuotaBulkResultData: UsageQuotaBulkResultData,
    UsageQuotaCreateAttributes: UsageQuotaCreateAttributes,
    UsageQuotaCreateData: UsageQuotaCreateData,
    UsageQuotaResponse: UsageQuotaResponse,
    UsageQuotaResponseAttributes: UsageQuotaResponseAttributes,
    UsageQuotaResponseData: UsageQuotaResponseData,
    UsageQuotaUpdateAttributes: UsageQuotaUpdateAttributes,
    UsageQuotaUpdateData: UsageQuotaUpdateData,
    UsageQuotaUpdateRequest: UsageQuotaUpdateRequest,
    UsageQuotasBulkResponse: UsageQuotasBulkResponse,
    UsageQuotasCreateRequest: UsageQuotasCreateRequest,
    UsageQuotasListResponse: UsageQuotasListResponse,
    UsageQuotasResponseMeta: UsageQuotasResponseMeta,
    UsageQuotasResponseMetaPage: UsageQuotasResponseMetaPage,
    UsageSummaryAvailableFieldsAttributes:
      UsageSummaryAvailableFieldsAttributes,
    UsageSummaryAvailableFieldsBody: UsageSummaryAvailableFieldsBody,
    UsageSummaryAvailableFieldsResponse: UsageSummaryAvailableFieldsResponse,
    UsageTimeSeriesObject: UsageTimeSeriesObject,
  },
};
