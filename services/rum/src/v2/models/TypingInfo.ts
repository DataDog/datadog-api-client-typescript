import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ELFSourcemapAttributes } from "./ELFSourcemapAttributes";
import { ELFSourcemapData } from "./ELFSourcemapData";
import { FlutterSourcemapAttributes } from "./FlutterSourcemapAttributes";
import { FlutterSourcemapData } from "./FlutterSourcemapData";
import { IL2CPPSourcemapAttributes } from "./IL2CPPSourcemapAttributes";
import { IL2CPPSourcemapData } from "./IL2CPPSourcemapData";
import { IOSSourcemapAttributes } from "./IOSSourcemapAttributes";
import { IOSSourcemapData } from "./IOSSourcemapData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JSSourcemapAttributes } from "./JSSourcemapAttributes";
import { JSSourcemapData } from "./JSSourcemapData";
import { JVMSourcemapAttributes } from "./JVMSourcemapAttributes";
import { JVMSourcemapData } from "./JVMSourcemapData";
import { ListSourcemapsResponse } from "./ListSourcemapsResponse";
import { NDKSourcemapAttributes } from "./NDKSourcemapAttributes";
import { NDKSourcemapData } from "./NDKSourcemapData";
import { RUMAggregateBucketValueTimeseriesPoint } from "./RUMAggregateBucketValueTimeseriesPoint";
import { RUMAggregateRequest } from "./RUMAggregateRequest";
import { RUMAggregateSort } from "./RUMAggregateSort";
import { RUMAggregationBucketsResponse } from "./RUMAggregationBucketsResponse";
import { RUMAnalyticsAggregateResponse } from "./RUMAnalyticsAggregateResponse";
import { RUMApplication } from "./RUMApplication";
import { RUMApplicationAttributes } from "./RUMApplicationAttributes";
import { RUMApplicationCreate } from "./RUMApplicationCreate";
import { RUMApplicationCreateAttributes } from "./RUMApplicationCreateAttributes";
import { RUMApplicationCreateRequest } from "./RUMApplicationCreateRequest";
import { RUMApplicationList } from "./RUMApplicationList";
import { RUMApplicationListAttributes } from "./RUMApplicationListAttributes";
import { RUMApplicationResponse } from "./RUMApplicationResponse";
import { RUMApplicationUpdate } from "./RUMApplicationUpdate";
import { RUMApplicationUpdateAttributes } from "./RUMApplicationUpdateAttributes";
import { RUMApplicationUpdateRequest } from "./RUMApplicationUpdateRequest";
import { RUMApplicationsResponse } from "./RUMApplicationsResponse";
import { RUMBucketResponse } from "./RUMBucketResponse";
import { RUMCompute } from "./RUMCompute";
import { RUMEvent } from "./RUMEvent";
import { RUMEventAttributes } from "./RUMEventAttributes";
import { RUMEventProcessingScale } from "./RUMEventProcessingScale";
import { RUMEventsResponse } from "./RUMEventsResponse";
import { RUMGroupBy } from "./RUMGroupBy";
import { RUMGroupByHistogram } from "./RUMGroupByHistogram";
import { RUMProductAnalyticsRetentionScale } from "./RUMProductAnalyticsRetentionScale";
import { RUMProductScales } from "./RUMProductScales";
import { RUMQueryFilter } from "./RUMQueryFilter";
import { RUMQueryOptions } from "./RUMQueryOptions";
import { RUMQueryPageOptions } from "./RUMQueryPageOptions";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";
import { RUMResponsePage } from "./RUMResponsePage";
import { RUMSearchEventsRequest } from "./RUMSearchEventsRequest";
import { RUMWarning } from "./RUMWarning";
import { ReactNativeSourcemapAttributes } from "./ReactNativeSourcemapAttributes";
import { ReactNativeSourcemapData } from "./ReactNativeSourcemapData";
import { ServiceRepositoryInfoRequest } from "./ServiceRepositoryInfoRequest";
import { ServiceRepositoryInfoRequestAttributes } from "./ServiceRepositoryInfoRequestAttributes";
import { ServiceRepositoryInfoRequestData } from "./ServiceRepositoryInfoRequestData";
import { ServiceRepositoryInfoResponse } from "./ServiceRepositoryInfoResponse";
import { ServiceRepositoryInfoResponseAttributes } from "./ServiceRepositoryInfoResponseAttributes";
import { ServiceRepositoryInfoResponseData } from "./ServiceRepositoryInfoResponseData";
import { SourcemapFileAttributes } from "./SourcemapFileAttributes";
import { SourcemapFileData } from "./SourcemapFileData";
import { SourcemapFileResponse } from "./SourcemapFileResponse";
import { SourcemapsListMeta } from "./SourcemapsListMeta";
import { SourcemapsListMetaPage } from "./SourcemapsListMetaPage";
import { SourcemapsResponse } from "./SourcemapsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMAggregateSortType: ["alphabetical", "measure"],
    RUMAggregationFunction: [
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
      "median",
    ],
    RUMApplicationCreateType: ["rum_application_create"],
    RUMApplicationListType: ["rum_application"],
    RUMApplicationType: ["rum_application"],
    RUMApplicationUpdateType: ["rum_application_update"],
    RUMComputeType: ["timeseries", "total"],
    RUMEventProcessingState: ["ALL", "ERROR_FOCUSED_MODE", "NONE"],
    RUMEventType: ["rum"],
    RUMProductAnalyticsRetentionState: ["MAX", "NONE"],
    RUMResponseStatus: ["done", "timeout"],
    RUMSort: ["timestamp", "-timestamp"],
    RUMSortOrder: ["asc", "desc"],
    ServiceRepositoryInfoDataType: ["service_repository_info"],
    ServiceRepositoryInfoStatus: [
      "success",
      "not_found",
      "no_repository",
      "internal_error",
      "unknown",
    ],
    SourcemapDataType: ["sourcemaps"],
    SourcemapFileDataType: ["sourcemap_files"],
    SourcemapMapKind: [
      "js",
      "jvm",
      "ios",
      "react",
      "flutter",
      "elf",
      "ndk",
      "il2cpp",
    ],
  },
  oneOfMap: {
    RUMAggregateBucketValue: [
      "string",
      "number",
      "Array<RUMAggregateBucketValueTimeseriesPoint>",
    ],
    RUMGroupByMissing: ["string", "number"],
    RUMGroupByTotal: ["boolean", "string", "number"],
    SourcemapItem: [
      "JSSourcemapData",
      "ReactNativeSourcemapData",
      "IOSSourcemapData",
      "JVMSourcemapData",
      "FlutterSourcemapData",
      "ELFSourcemapData",
      "NDKSourcemapData",
      "IL2CPPSourcemapData",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ELFSourcemapAttributes: ELFSourcemapAttributes,
    ELFSourcemapData: ELFSourcemapData,
    FlutterSourcemapAttributes: FlutterSourcemapAttributes,
    FlutterSourcemapData: FlutterSourcemapData,
    IL2CPPSourcemapAttributes: IL2CPPSourcemapAttributes,
    IL2CPPSourcemapData: IL2CPPSourcemapData,
    IOSSourcemapAttributes: IOSSourcemapAttributes,
    IOSSourcemapData: IOSSourcemapData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JSSourcemapAttributes: JSSourcemapAttributes,
    JSSourcemapData: JSSourcemapData,
    JVMSourcemapAttributes: JVMSourcemapAttributes,
    JVMSourcemapData: JVMSourcemapData,
    ListSourcemapsResponse: ListSourcemapsResponse,
    NDKSourcemapAttributes: NDKSourcemapAttributes,
    NDKSourcemapData: NDKSourcemapData,
    RUMAggregateBucketValueTimeseriesPoint:
      RUMAggregateBucketValueTimeseriesPoint,
    RUMAggregateRequest: RUMAggregateRequest,
    RUMAggregateSort: RUMAggregateSort,
    RUMAggregationBucketsResponse: RUMAggregationBucketsResponse,
    RUMAnalyticsAggregateResponse: RUMAnalyticsAggregateResponse,
    RUMApplication: RUMApplication,
    RUMApplicationAttributes: RUMApplicationAttributes,
    RUMApplicationCreate: RUMApplicationCreate,
    RUMApplicationCreateAttributes: RUMApplicationCreateAttributes,
    RUMApplicationCreateRequest: RUMApplicationCreateRequest,
    RUMApplicationList: RUMApplicationList,
    RUMApplicationListAttributes: RUMApplicationListAttributes,
    RUMApplicationResponse: RUMApplicationResponse,
    RUMApplicationUpdate: RUMApplicationUpdate,
    RUMApplicationUpdateAttributes: RUMApplicationUpdateAttributes,
    RUMApplicationUpdateRequest: RUMApplicationUpdateRequest,
    RUMApplicationsResponse: RUMApplicationsResponse,
    RUMBucketResponse: RUMBucketResponse,
    RUMCompute: RUMCompute,
    RUMEvent: RUMEvent,
    RUMEventAttributes: RUMEventAttributes,
    RUMEventProcessingScale: RUMEventProcessingScale,
    RUMEventsResponse: RUMEventsResponse,
    RUMGroupBy: RUMGroupBy,
    RUMGroupByHistogram: RUMGroupByHistogram,
    RUMProductAnalyticsRetentionScale: RUMProductAnalyticsRetentionScale,
    RUMProductScales: RUMProductScales,
    RUMQueryFilter: RUMQueryFilter,
    RUMQueryOptions: RUMQueryOptions,
    RUMQueryPageOptions: RUMQueryPageOptions,
    RUMResponseLinks: RUMResponseLinks,
    RUMResponseMetadata: RUMResponseMetadata,
    RUMResponsePage: RUMResponsePage,
    RUMSearchEventsRequest: RUMSearchEventsRequest,
    RUMWarning: RUMWarning,
    ReactNativeSourcemapAttributes: ReactNativeSourcemapAttributes,
    ReactNativeSourcemapData: ReactNativeSourcemapData,
    ServiceRepositoryInfoRequest: ServiceRepositoryInfoRequest,
    ServiceRepositoryInfoRequestAttributes:
      ServiceRepositoryInfoRequestAttributes,
    ServiceRepositoryInfoRequestData: ServiceRepositoryInfoRequestData,
    ServiceRepositoryInfoResponse: ServiceRepositoryInfoResponse,
    ServiceRepositoryInfoResponseAttributes:
      ServiceRepositoryInfoResponseAttributes,
    ServiceRepositoryInfoResponseData: ServiceRepositoryInfoResponseData,
    SourcemapFileAttributes: SourcemapFileAttributes,
    SourcemapFileData: SourcemapFileData,
    SourcemapFileResponse: SourcemapFileResponse,
    SourcemapsListMeta: SourcemapsListMeta,
    SourcemapsListMetaPage: SourcemapsListMetaPage,
    SourcemapsResponse: SourcemapsResponse,
  },
};
