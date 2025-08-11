import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DataScalarColumn } from "./DataScalarColumn";
import { EventsCompute } from "./EventsCompute";
import { EventsGroupBy } from "./EventsGroupBy";
import { EventsGroupBySort } from "./EventsGroupBySort";
import { EventsScalarQuery } from "./EventsScalarQuery";
import { EventsSearch } from "./EventsSearch";
import { EventsTimeseriesQuery } from "./EventsTimeseriesQuery";
import { FormulaLimit } from "./FormulaLimit";
import { GroupScalarColumn } from "./GroupScalarColumn";
import { IntakePayloadAccepted } from "./IntakePayloadAccepted";
import { Metric } from "./Metric";
import { MetricAllTags } from "./MetricAllTags";
import { MetricAllTagsAttributes } from "./MetricAllTagsAttributes";
import { MetricAllTagsResponse } from "./MetricAllTagsResponse";
import { MetricAssetAttributes } from "./MetricAssetAttributes";
import { MetricAssetDashboardRelationship } from "./MetricAssetDashboardRelationship";
import { MetricAssetDashboardRelationships } from "./MetricAssetDashboardRelationships";
import { MetricAssetMonitorRelationship } from "./MetricAssetMonitorRelationship";
import { MetricAssetMonitorRelationships } from "./MetricAssetMonitorRelationships";
import { MetricAssetNotebookRelationship } from "./MetricAssetNotebookRelationship";
import { MetricAssetNotebookRelationships } from "./MetricAssetNotebookRelationships";
import { MetricAssetResponseData } from "./MetricAssetResponseData";
import { MetricAssetResponseRelationships } from "./MetricAssetResponseRelationships";
import { MetricAssetSLORelationship } from "./MetricAssetSLORelationship";
import { MetricAssetSLORelationships } from "./MetricAssetSLORelationships";
import { MetricAssetsResponse } from "./MetricAssetsResponse";
import { MetricBulkTagConfigCreate } from "./MetricBulkTagConfigCreate";
import { MetricBulkTagConfigCreateAttributes } from "./MetricBulkTagConfigCreateAttributes";
import { MetricBulkTagConfigCreateRequest } from "./MetricBulkTagConfigCreateRequest";
import { MetricBulkTagConfigDelete } from "./MetricBulkTagConfigDelete";
import { MetricBulkTagConfigDeleteAttributes } from "./MetricBulkTagConfigDeleteAttributes";
import { MetricBulkTagConfigDeleteRequest } from "./MetricBulkTagConfigDeleteRequest";
import { MetricBulkTagConfigResponse } from "./MetricBulkTagConfigResponse";
import { MetricBulkTagConfigStatus } from "./MetricBulkTagConfigStatus";
import { MetricBulkTagConfigStatusAttributes } from "./MetricBulkTagConfigStatusAttributes";
import { MetricCustomAggregation } from "./MetricCustomAggregation";
import { MetricDashboardAsset } from "./MetricDashboardAsset";
import { MetricDashboardAttributes } from "./MetricDashboardAttributes";
import { MetricDistinctVolume } from "./MetricDistinctVolume";
import { MetricDistinctVolumeAttributes } from "./MetricDistinctVolumeAttributes";
import { MetricEstimate } from "./MetricEstimate";
import { MetricEstimateAttributes } from "./MetricEstimateAttributes";
import { MetricEstimateResponse } from "./MetricEstimateResponse";
import { MetricIngestedIndexedVolume } from "./MetricIngestedIndexedVolume";
import { MetricIngestedIndexedVolumeAttributes } from "./MetricIngestedIndexedVolumeAttributes";
import { MetricMetaPage } from "./MetricMetaPage";
import { MetricMetadata } from "./MetricMetadata";
import { MetricMonitorAsset } from "./MetricMonitorAsset";
import { MetricNotebookAsset } from "./MetricNotebookAsset";
import { MetricOrigin } from "./MetricOrigin";
import { MetricPaginationMeta } from "./MetricPaginationMeta";
import { MetricPayload } from "./MetricPayload";
import { MetricPoint } from "./MetricPoint";
import { MetricResource } from "./MetricResource";
import { MetricSLOAsset } from "./MetricSLOAsset";
import { MetricSeries } from "./MetricSeries";
import { MetricSuggestedTagsAndAggregations } from "./MetricSuggestedTagsAndAggregations";
import { MetricSuggestedTagsAndAggregationsResponse } from "./MetricSuggestedTagsAndAggregationsResponse";
import { MetricSuggestedTagsAttributes } from "./MetricSuggestedTagsAttributes";
import { MetricTagCardinalitiesMeta } from "./MetricTagCardinalitiesMeta";
import { MetricTagCardinalitiesResponse } from "./MetricTagCardinalitiesResponse";
import { MetricTagCardinality } from "./MetricTagCardinality";
import { MetricTagCardinalityAttributes } from "./MetricTagCardinalityAttributes";
import { MetricTagConfiguration } from "./MetricTagConfiguration";
import { MetricTagConfigurationAttributes } from "./MetricTagConfigurationAttributes";
import { MetricTagConfigurationCreateAttributes } from "./MetricTagConfigurationCreateAttributes";
import { MetricTagConfigurationCreateData } from "./MetricTagConfigurationCreateData";
import { MetricTagConfigurationCreateRequest } from "./MetricTagConfigurationCreateRequest";
import { MetricTagConfigurationResponse } from "./MetricTagConfigurationResponse";
import { MetricTagConfigurationUpdateAttributes } from "./MetricTagConfigurationUpdateAttributes";
import { MetricTagConfigurationUpdateData } from "./MetricTagConfigurationUpdateData";
import { MetricTagConfigurationUpdateRequest } from "./MetricTagConfigurationUpdateRequest";
import { MetricVolumesResponse } from "./MetricVolumesResponse";
import { MetricsAndMetricTagConfigurationsResponse } from "./MetricsAndMetricTagConfigurationsResponse";
import { MetricsListResponseLinks } from "./MetricsListResponseLinks";
import { MetricsScalarQuery } from "./MetricsScalarQuery";
import { MetricsTimeseriesQuery } from "./MetricsTimeseriesQuery";
import { QueryFormula } from "./QueryFormula";
import { ScalarFormulaQueryRequest } from "./ScalarFormulaQueryRequest";
import { ScalarFormulaQueryResponse } from "./ScalarFormulaQueryResponse";
import { ScalarFormulaRequest } from "./ScalarFormulaRequest";
import { ScalarFormulaRequestAttributes } from "./ScalarFormulaRequestAttributes";
import { ScalarFormulaResponseAtrributes } from "./ScalarFormulaResponseAtrributes";
import { ScalarMeta } from "./ScalarMeta";
import { ScalarResponse } from "./ScalarResponse";
import { TimeseriesFormulaQueryRequest } from "./TimeseriesFormulaQueryRequest";
import { TimeseriesFormulaQueryResponse } from "./TimeseriesFormulaQueryResponse";
import { TimeseriesFormulaRequest } from "./TimeseriesFormulaRequest";
import { TimeseriesFormulaRequestAttributes } from "./TimeseriesFormulaRequestAttributes";
import { TimeseriesResponse } from "./TimeseriesResponse";
import { TimeseriesResponseAttributes } from "./TimeseriesResponseAttributes";
import { TimeseriesResponseSeries } from "./TimeseriesResponseSeries";
import { Unit } from "./Unit";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    EventsAggregation: [
      "count",
      "cardinality",
      "pc75",
      "pc90",
      "pc95",
      "pc98",
      "pc99",
      "sum",
      "min",
      "max",
      "avg",
    ],
    EventsDataSource: ["logs", "rum", "dora"],
    EventsSortType: ["alphabetical", "measure"],
    MetricActiveConfigurationType: ["actively_queried_configurations"],
    MetricBulkConfigureTagsType: ["metric_bulk_configure_tags"],
    MetricContentEncoding: ["deflate", "zstd1", "gzip"],
    MetricCustomSpaceAggregation: ["avg", "max", "min", "sum"],
    MetricCustomTimeAggregation: ["avg", "count", "max", "min", "sum"],
    MetricDashboardType: ["dashboards"],
    MetricDistinctVolumeType: ["distinct_metric_volumes"],
    MetricEstimateResourceType: ["metric_cardinality_estimate"],
    MetricEstimateType: ["count_or_gauge", "distribution", "percentile"],
    MetricIngestedIndexedVolumeType: ["metric_volumes"],
    MetricIntakeType: [0, 1, 2, 3],
    MetricMetaPageType: ["cursor_limit"],
    MetricMonitorType: ["monitors"],
    MetricNotebookType: ["notebooks"],
    MetricSLOType: ["slos"],
    MetricTagConfigurationMetricTypeCategory: [
      "non_distribution",
      "distribution",
    ],
    MetricTagConfigurationMetricTypes: [
      "gauge",
      "count",
      "rate",
      "distribution",
    ],
    MetricTagConfigurationType: ["manage_tags"],
    MetricType: ["metrics"],
    MetricsAggregator: [
      "avg",
      "min",
      "max",
      "sum",
      "last",
      "percentile",
      "mean",
      "l2norm",
      "area",
    ],
    MetricsDataSource: ["metrics", "cloud_cost"],
    QuerySortOrder: ["asc", "desc"],
    ScalarColumnTypeGroup: ["group"],
    ScalarColumnTypeNumber: ["number"],
    ScalarFormulaRequestType: ["scalar_request"],
    ScalarFormulaResponseType: ["scalar_response"],
    TimeseriesFormulaRequestType: ["timeseries_request"],
    TimeseriesFormulaResponseType: ["timeseries_response"],
  },
  oneOfMap: {
    MetricAssetResponseIncluded: [
      "MetricDashboardAsset",
      "MetricMonitorAsset",
      "MetricNotebookAsset",
      "MetricSLOAsset",
    ],
    MetricVolumes: ["MetricDistinctVolume", "MetricIngestedIndexedVolume"],
    MetricsAndMetricTagConfigurations: ["Metric", "MetricTagConfiguration"],
    ScalarColumn: ["GroupScalarColumn", "DataScalarColumn"],
    ScalarQuery: ["MetricsScalarQuery", "EventsScalarQuery"],
    TimeseriesQuery: ["MetricsTimeseriesQuery", "EventsTimeseriesQuery"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DataScalarColumn: DataScalarColumn,
    EventsCompute: EventsCompute,
    EventsGroupBy: EventsGroupBy,
    EventsGroupBySort: EventsGroupBySort,
    EventsScalarQuery: EventsScalarQuery,
    EventsSearch: EventsSearch,
    EventsTimeseriesQuery: EventsTimeseriesQuery,
    FormulaLimit: FormulaLimit,
    GroupScalarColumn: GroupScalarColumn,
    IntakePayloadAccepted: IntakePayloadAccepted,
    Metric: Metric,
    MetricAllTags: MetricAllTags,
    MetricAllTagsAttributes: MetricAllTagsAttributes,
    MetricAllTagsResponse: MetricAllTagsResponse,
    MetricAssetAttributes: MetricAssetAttributes,
    MetricAssetDashboardRelationship: MetricAssetDashboardRelationship,
    MetricAssetDashboardRelationships: MetricAssetDashboardRelationships,
    MetricAssetMonitorRelationship: MetricAssetMonitorRelationship,
    MetricAssetMonitorRelationships: MetricAssetMonitorRelationships,
    MetricAssetNotebookRelationship: MetricAssetNotebookRelationship,
    MetricAssetNotebookRelationships: MetricAssetNotebookRelationships,
    MetricAssetResponseData: MetricAssetResponseData,
    MetricAssetResponseRelationships: MetricAssetResponseRelationships,
    MetricAssetSLORelationship: MetricAssetSLORelationship,
    MetricAssetSLORelationships: MetricAssetSLORelationships,
    MetricAssetsResponse: MetricAssetsResponse,
    MetricBulkTagConfigCreate: MetricBulkTagConfigCreate,
    MetricBulkTagConfigCreateAttributes: MetricBulkTagConfigCreateAttributes,
    MetricBulkTagConfigCreateRequest: MetricBulkTagConfigCreateRequest,
    MetricBulkTagConfigDelete: MetricBulkTagConfigDelete,
    MetricBulkTagConfigDeleteAttributes: MetricBulkTagConfigDeleteAttributes,
    MetricBulkTagConfigDeleteRequest: MetricBulkTagConfigDeleteRequest,
    MetricBulkTagConfigResponse: MetricBulkTagConfigResponse,
    MetricBulkTagConfigStatus: MetricBulkTagConfigStatus,
    MetricBulkTagConfigStatusAttributes: MetricBulkTagConfigStatusAttributes,
    MetricCustomAggregation: MetricCustomAggregation,
    MetricDashboardAsset: MetricDashboardAsset,
    MetricDashboardAttributes: MetricDashboardAttributes,
    MetricDistinctVolume: MetricDistinctVolume,
    MetricDistinctVolumeAttributes: MetricDistinctVolumeAttributes,
    MetricEstimate: MetricEstimate,
    MetricEstimateAttributes: MetricEstimateAttributes,
    MetricEstimateResponse: MetricEstimateResponse,
    MetricIngestedIndexedVolume: MetricIngestedIndexedVolume,
    MetricIngestedIndexedVolumeAttributes:
      MetricIngestedIndexedVolumeAttributes,
    MetricMetaPage: MetricMetaPage,
    MetricMetadata: MetricMetadata,
    MetricMonitorAsset: MetricMonitorAsset,
    MetricNotebookAsset: MetricNotebookAsset,
    MetricOrigin: MetricOrigin,
    MetricPaginationMeta: MetricPaginationMeta,
    MetricPayload: MetricPayload,
    MetricPoint: MetricPoint,
    MetricResource: MetricResource,
    MetricSLOAsset: MetricSLOAsset,
    MetricSeries: MetricSeries,
    MetricSuggestedTagsAndAggregations: MetricSuggestedTagsAndAggregations,
    MetricSuggestedTagsAndAggregationsResponse:
      MetricSuggestedTagsAndAggregationsResponse,
    MetricSuggestedTagsAttributes: MetricSuggestedTagsAttributes,
    MetricTagCardinalitiesMeta: MetricTagCardinalitiesMeta,
    MetricTagCardinalitiesResponse: MetricTagCardinalitiesResponse,
    MetricTagCardinality: MetricTagCardinality,
    MetricTagCardinalityAttributes: MetricTagCardinalityAttributes,
    MetricTagConfiguration: MetricTagConfiguration,
    MetricTagConfigurationAttributes: MetricTagConfigurationAttributes,
    MetricTagConfigurationCreateAttributes:
      MetricTagConfigurationCreateAttributes,
    MetricTagConfigurationCreateData: MetricTagConfigurationCreateData,
    MetricTagConfigurationCreateRequest: MetricTagConfigurationCreateRequest,
    MetricTagConfigurationResponse: MetricTagConfigurationResponse,
    MetricTagConfigurationUpdateAttributes:
      MetricTagConfigurationUpdateAttributes,
    MetricTagConfigurationUpdateData: MetricTagConfigurationUpdateData,
    MetricTagConfigurationUpdateRequest: MetricTagConfigurationUpdateRequest,
    MetricVolumesResponse: MetricVolumesResponse,
    MetricsAndMetricTagConfigurationsResponse:
      MetricsAndMetricTagConfigurationsResponse,
    MetricsListResponseLinks: MetricsListResponseLinks,
    MetricsScalarQuery: MetricsScalarQuery,
    MetricsTimeseriesQuery: MetricsTimeseriesQuery,
    QueryFormula: QueryFormula,
    ScalarFormulaQueryRequest: ScalarFormulaQueryRequest,
    ScalarFormulaQueryResponse: ScalarFormulaQueryResponse,
    ScalarFormulaRequest: ScalarFormulaRequest,
    ScalarFormulaRequestAttributes: ScalarFormulaRequestAttributes,
    ScalarFormulaResponseAtrributes: ScalarFormulaResponseAtrributes,
    ScalarMeta: ScalarMeta,
    ScalarResponse: ScalarResponse,
    TimeseriesFormulaQueryRequest: TimeseriesFormulaQueryRequest,
    TimeseriesFormulaQueryResponse: TimeseriesFormulaQueryResponse,
    TimeseriesFormulaRequest: TimeseriesFormulaRequest,
    TimeseriesFormulaRequestAttributes: TimeseriesFormulaRequestAttributes,
    TimeseriesResponse: TimeseriesResponse,
    TimeseriesResponseAttributes: TimeseriesResponseAttributes,
    TimeseriesResponseSeries: TimeseriesResponseSeries,
    Unit: Unit,
  },
};
