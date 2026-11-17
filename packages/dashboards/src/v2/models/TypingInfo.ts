import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { AnnotationAttributes } from "./AnnotationAttributes";
import { AnnotationCreateAttributes } from "./AnnotationCreateAttributes";
import { AnnotationCreateRequest } from "./AnnotationCreateRequest";
import { AnnotationData } from "./AnnotationData";
import { AnnotationInPage } from "./AnnotationInPage";
import { AnnotationRequestData } from "./AnnotationRequestData";
import { AnnotationResponse } from "./AnnotationResponse";
import { AnnotationUpdateRequest } from "./AnnotationUpdateRequest";
import { AnnotationsResponse } from "./AnnotationsResponse";
import { CreateSnapshotAdditionalConfig } from "./CreateSnapshotAdditionalConfig";
import { CreateSnapshotDataAttributesRequest } from "./CreateSnapshotDataAttributesRequest";
import { CreateSnapshotDataAttributesResponse } from "./CreateSnapshotDataAttributesResponse";
import { CreateSnapshotDataRequest } from "./CreateSnapshotDataRequest";
import { CreateSnapshotDataResponse } from "./CreateSnapshotDataResponse";
import { CreateSnapshotRequest } from "./CreateSnapshotRequest";
import { CreateSnapshotResponse } from "./CreateSnapshotResponse";
import { CreateSnapshotTemplateVariable } from "./CreateSnapshotTemplateVariable";
import { Creator } from "./Creator";
import { DashboardListAddItemsRequest } from "./DashboardListAddItemsRequest";
import { DashboardListAddItemsResponse } from "./DashboardListAddItemsResponse";
import { DashboardListDeleteItemsRequest } from "./DashboardListDeleteItemsRequest";
import { DashboardListDeleteItemsResponse } from "./DashboardListDeleteItemsResponse";
import { DashboardListItem } from "./DashboardListItem";
import { DashboardListItemRequest } from "./DashboardListItemRequest";
import { DashboardListItemResponse } from "./DashboardListItemResponse";
import { DashboardListItems } from "./DashboardListItems";
import { DashboardListUpdateItemsRequest } from "./DashboardListUpdateItemsRequest";
import { DashboardListUpdateItemsResponse } from "./DashboardListUpdateItemsResponse";
import { DashboardUsage } from "./DashboardUsage";
import { DashboardUsageAttributes } from "./DashboardUsageAttributes";
import { DashboardUsageResponse } from "./DashboardUsageResponse";
import { DashboardUsageUser } from "./DashboardUsageUser";
import { DatasetReportScheduleListResponse } from "./DatasetReportScheduleListResponse";
import { DatasetReportScheduleResponseAttributes } from "./DatasetReportScheduleResponseAttributes";
import { DatasetReportScheduleResponseData } from "./DatasetReportScheduleResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListDashboardsUsageResponse } from "./ListDashboardsUsageResponse";
import { ListDashboardsUsageResponseLinks } from "./ListDashboardsUsageResponseLinks";
import { ListDashboardsUsageResponseMeta } from "./ListDashboardsUsageResponseMeta";
import { ListPowerpacksResponse } from "./ListPowerpacksResponse";
import { ListSharedDashboardsResponse } from "./ListSharedDashboardsResponse";
import { PageAnnotationsAttributes } from "./PageAnnotationsAttributes";
import { PageAnnotationsData } from "./PageAnnotationsData";
import { PageAnnotationsResponse } from "./PageAnnotationsResponse";
import { PaginationMetaPage } from "./PaginationMetaPage";
import { Powerpack } from "./Powerpack";
import { PowerpackAttributes } from "./PowerpackAttributes";
import { PowerpackData } from "./PowerpackData";
import { PowerpackGroupWidget } from "./PowerpackGroupWidget";
import { PowerpackGroupWidgetDefinition } from "./PowerpackGroupWidgetDefinition";
import { PowerpackGroupWidgetLayout } from "./PowerpackGroupWidgetLayout";
import { PowerpackInnerWidgetLayout } from "./PowerpackInnerWidgetLayout";
import { PowerpackInnerWidgets } from "./PowerpackInnerWidgets";
import { PowerpackRelationships } from "./PowerpackRelationships";
import { PowerpackResponse } from "./PowerpackResponse";
import { PowerpackResponseLinks } from "./PowerpackResponseLinks";
import { PowerpackTemplateVariable } from "./PowerpackTemplateVariable";
import { PowerpacksResponseMeta } from "./PowerpacksResponseMeta";
import { PowerpacksResponseMetaPagination } from "./PowerpacksResponseMetaPagination";
import { PrintReportRequest } from "./PrintReportRequest";
import { PrintReportRequestAttributes } from "./PrintReportRequestAttributes";
import { PrintReportRequestData } from "./PrintReportRequestData";
import { PrintReportResponse } from "./PrintReportResponse";
import { PrintReportResponseAttributes } from "./PrintReportResponseAttributes";
import { PrintReportResponseData } from "./PrintReportResponseData";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { ReportScheduleAuthor } from "./ReportScheduleAuthor";
import { ReportScheduleAuthorAttributes } from "./ReportScheduleAuthorAttributes";
import { ReportScheduleAuthorRelationship } from "./ReportScheduleAuthorRelationship";
import { ReportScheduleAuthorRelationshipData } from "./ReportScheduleAuthorRelationshipData";
import { ReportScheduleCreateRequest } from "./ReportScheduleCreateRequest";
import { ReportScheduleCreateRequestAttributes } from "./ReportScheduleCreateRequestAttributes";
import { ReportScheduleCreateRequestData } from "./ReportScheduleCreateRequestData";
import { ReportScheduleIndexTemplateVariable } from "./ReportScheduleIndexTemplateVariable";
import { ReportScheduleListResourceRelationship } from "./ReportScheduleListResourceRelationship";
import { ReportScheduleListResourceRelationshipData } from "./ReportScheduleListResourceRelationshipData";
import { ReportScheduleListResponse } from "./ReportScheduleListResponse";
import { ReportScheduleListResponseAttributes } from "./ReportScheduleListResponseAttributes";
import { ReportScheduleListResponseData } from "./ReportScheduleListResponseData";
import { ReportScheduleListResponseLinks } from "./ReportScheduleListResponseLinks";
import { ReportScheduleListResponseMeta } from "./ReportScheduleListResponseMeta";
import { ReportScheduleListResponsePagination } from "./ReportScheduleListResponsePagination";
import { ReportScheduleListResponseRelationships } from "./ReportScheduleListResponseRelationships";
import { ReportSchedulePatchRequest } from "./ReportSchedulePatchRequest";
import { ReportSchedulePatchRequestAttributes } from "./ReportSchedulePatchRequestAttributes";
import { ReportSchedulePatchRequestData } from "./ReportSchedulePatchRequestData";
import { ReportScheduleResource } from "./ReportScheduleResource";
import { ReportScheduleResourceAttributes } from "./ReportScheduleResourceAttributes";
import { ReportScheduleResponse } from "./ReportScheduleResponse";
import { ReportScheduleResponseAttributes } from "./ReportScheduleResponseAttributes";
import { ReportScheduleResponseData } from "./ReportScheduleResponseData";
import { ReportScheduleResponseRelationships } from "./ReportScheduleResponseRelationships";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";
import { ReportScheduleToggleRequest } from "./ReportScheduleToggleRequest";
import { ReportScheduleToggleRequestAttributes } from "./ReportScheduleToggleRequestAttributes";
import { ReportScheduleToggleRequestData } from "./ReportScheduleToggleRequestData";
import { SecureEmbedCreateRequest } from "./SecureEmbedCreateRequest";
import { SecureEmbedCreateRequestAttributes } from "./SecureEmbedCreateRequestAttributes";
import { SecureEmbedCreateRequestData } from "./SecureEmbedCreateRequestData";
import { SecureEmbedCreateResponse } from "./SecureEmbedCreateResponse";
import { SecureEmbedCreateResponseAttributes } from "./SecureEmbedCreateResponseAttributes";
import { SecureEmbedCreateResponseData } from "./SecureEmbedCreateResponseData";
import { SecureEmbedGetResponse } from "./SecureEmbedGetResponse";
import { SecureEmbedGetResponseAttributes } from "./SecureEmbedGetResponseAttributes";
import { SecureEmbedGetResponseData } from "./SecureEmbedGetResponseData";
import { SecureEmbedGlobalTime } from "./SecureEmbedGlobalTime";
import { SecureEmbedSelectableTemplateVariable } from "./SecureEmbedSelectableTemplateVariable";
import { SecureEmbedUpdateRequest } from "./SecureEmbedUpdateRequest";
import { SecureEmbedUpdateRequestAttributes } from "./SecureEmbedUpdateRequestAttributes";
import { SecureEmbedUpdateRequestData } from "./SecureEmbedUpdateRequestData";
import { SecureEmbedUpdateResponse } from "./SecureEmbedUpdateResponse";
import { SecureEmbedUpdateResponseAttributes } from "./SecureEmbedUpdateResponseAttributes";
import { SecureEmbedUpdateResponseData } from "./SecureEmbedUpdateResponseData";
import { SecureEmbedViewingPreferences } from "./SecureEmbedViewingPreferences";
import { SharedDashboardIncludedDashboard } from "./SharedDashboardIncludedDashboard";
import { SharedDashboardIncludedDashboardAttributes } from "./SharedDashboardIncludedDashboardAttributes";
import { SharedDashboardIncludedUser } from "./SharedDashboardIncludedUser";
import { SharedDashboardIncludedUserAttributes } from "./SharedDashboardIncludedUserAttributes";
import { SharedDashboardInvitee } from "./SharedDashboardInvitee";
import { SharedDashboardRelationshipDashboard } from "./SharedDashboardRelationshipDashboard";
import { SharedDashboardRelationshipDashboardData } from "./SharedDashboardRelationshipDashboardData";
import { SharedDashboardRelationshipSharer } from "./SharedDashboardRelationshipSharer";
import { SharedDashboardRelationships } from "./SharedDashboardRelationships";
import { SharedDashboardResponse } from "./SharedDashboardResponse";
import { SharedDashboardResponseAttributes } from "./SharedDashboardResponseAttributes";
import { SharedDashboardSelectableTemplateVariable } from "./SharedDashboardSelectableTemplateVariable";
import { SharedDashboardViewingPreferences } from "./SharedDashboardViewingPreferences";
import { StegadographyGetWidgetsResponse } from "./StegadographyGetWidgetsResponse";
import { StegadographyWidget } from "./StegadographyWidget";
import { StegadographyWidgetAttributes } from "./StegadographyWidgetAttributes";
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
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserRelationshipData } from "./UserRelationshipData";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AnnotationColor: ["gray", "blue", "purple", "green", "yellow", "red"],
    AnnotationKind: ["pointInTime", "timeRegion"],
    AnnotationType: ["annotation"],
    CreateSnapshotTTL: ["30d", "60d", "90d", "1y", "2y", "inf"],
    CreateSnapshotTimeseriesLegendType: ["compact", "expanded", "none"],
    CreateSnapshotType: ["create_snapshot"],
    DashboardType: [
      "custom_timeboard",
      "custom_screenboard",
      "integration_screenboard",
      "integration_timeboard",
      "host_timeboard",
    ],
    DashboardUsageType: ["dashboards-usages"],
    DatasetReportScheduleResourceType: ["widget_dataset_list"],
    OrganizationsType: ["orgs"],
    PageAnnotationsType: ["page_annotations"],
    PaginationMetaPageType: ["offset_limit"],
    PrintReportType: ["report"],
    ReportScheduleAuthorType: ["users"],
    ReportScheduleDeliveryFormat: ["pdf", "png", "pdf_and_png"],
    ReportScheduleIncludedResourceType: ["resource"],
    ReportScheduleListResponsePaginationType: ["offset_limit"],
    ReportScheduleResourceType: ["dashboard", "integration_dashboard"],
    ReportScheduleResponseAttributesDeliveryFormat: [
      "pdf",
      "png",
      "pdf_and_png",
    ],
    ReportScheduleStatus: ["active", "inactive"],
    ReportScheduleType: ["schedule"],
    RolesType: ["roles"],
    SecureEmbedCreateResponseType: ["secure_embed_create_response"],
    SecureEmbedGetResponseType: ["secure_embed_get_response"],
    SecureEmbedGlobalTimeLiveSpan: [
      "15m",
      "1h",
      "4h",
      "1d",
      "2d",
      "1w",
      "1mo",
      "3mo",
    ],
    SecureEmbedRequestType: ["secure_embed_request"],
    SecureEmbedShareType: ["secure_embed"],
    SecureEmbedStatus: ["active", "paused"],
    SecureEmbedUpdateRequestType: ["secure_embed_update_request"],
    SecureEmbedUpdateResponseType: ["secure_embed_update_response"],
    SecureEmbedViewingPreferencesTheme: ["system", "light", "dark"],
    SharedDashboardIncludedDashboardType: ["dashboard"],
    SharedDashboardShareType: ["open", "invite", "embed", "secure-embed"],
    SharedDashboardStatus: ["active", "paused"],
    SharedDashboardType: ["shared_dashboard"],
    SharedDashboardViewingPreferencesTheme: ["system", "light", "dark"],
    StegadographyWidgetType: ["widget"],
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
    UserResourceType: ["user"],
    UsersType: ["users"],
    WidgetLiveSpan: [
      "1m",
      "5m",
      "10m",
      "15m",
      "30m",
      "1h",
      "4h",
      "1d",
      "2d",
      "1w",
      "1mo",
      "3mo",
      "6mo",
      "1y",
      "alert",
    ],
  },
  oneOfMap: {
    ReportScheduleIncludedResource: [
      "ReportScheduleAuthor",
      "ReportScheduleResource",
    ],
    SharedDashboardIncluded: [
      "SharedDashboardIncludedDashboard",
      "SharedDashboardIncludedUser",
    ],
    TimeseriesAnomalyInvestigationFinding: [
      "TimeseriesAnomalyInvestigationInfluentialTagFinding",
      "TimeseriesAnomalyInvestigationAnomalyFinding",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AnnotationAttributes: AnnotationAttributes,
    AnnotationCreateAttributes: AnnotationCreateAttributes,
    AnnotationCreateRequest: AnnotationCreateRequest,
    AnnotationData: AnnotationData,
    AnnotationInPage: AnnotationInPage,
    AnnotationRequestData: AnnotationRequestData,
    AnnotationResponse: AnnotationResponse,
    AnnotationUpdateRequest: AnnotationUpdateRequest,
    AnnotationsResponse: AnnotationsResponse,
    CreateSnapshotAdditionalConfig: CreateSnapshotAdditionalConfig,
    CreateSnapshotDataAttributesRequest: CreateSnapshotDataAttributesRequest,
    CreateSnapshotDataAttributesResponse: CreateSnapshotDataAttributesResponse,
    CreateSnapshotDataRequest: CreateSnapshotDataRequest,
    CreateSnapshotDataResponse: CreateSnapshotDataResponse,
    CreateSnapshotRequest: CreateSnapshotRequest,
    CreateSnapshotResponse: CreateSnapshotResponse,
    CreateSnapshotTemplateVariable: CreateSnapshotTemplateVariable,
    Creator: Creator,
    DashboardListAddItemsRequest: DashboardListAddItemsRequest,
    DashboardListAddItemsResponse: DashboardListAddItemsResponse,
    DashboardListDeleteItemsRequest: DashboardListDeleteItemsRequest,
    DashboardListDeleteItemsResponse: DashboardListDeleteItemsResponse,
    DashboardListItem: DashboardListItem,
    DashboardListItemRequest: DashboardListItemRequest,
    DashboardListItemResponse: DashboardListItemResponse,
    DashboardListItems: DashboardListItems,
    DashboardListUpdateItemsRequest: DashboardListUpdateItemsRequest,
    DashboardListUpdateItemsResponse: DashboardListUpdateItemsResponse,
    DashboardUsage: DashboardUsage,
    DashboardUsageAttributes: DashboardUsageAttributes,
    DashboardUsageResponse: DashboardUsageResponse,
    DashboardUsageUser: DashboardUsageUser,
    DatasetReportScheduleListResponse: DatasetReportScheduleListResponse,
    DatasetReportScheduleResponseAttributes:
      DatasetReportScheduleResponseAttributes,
    DatasetReportScheduleResponseData: DatasetReportScheduleResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListDashboardsUsageResponse: ListDashboardsUsageResponse,
    ListDashboardsUsageResponseLinks: ListDashboardsUsageResponseLinks,
    ListDashboardsUsageResponseMeta: ListDashboardsUsageResponseMeta,
    ListPowerpacksResponse: ListPowerpacksResponse,
    ListSharedDashboardsResponse: ListSharedDashboardsResponse,
    PageAnnotationsAttributes: PageAnnotationsAttributes,
    PageAnnotationsData: PageAnnotationsData,
    PageAnnotationsResponse: PageAnnotationsResponse,
    PaginationMetaPage: PaginationMetaPage,
    Powerpack: Powerpack,
    PowerpackAttributes: PowerpackAttributes,
    PowerpackData: PowerpackData,
    PowerpackGroupWidget: PowerpackGroupWidget,
    PowerpackGroupWidgetDefinition: PowerpackGroupWidgetDefinition,
    PowerpackGroupWidgetLayout: PowerpackGroupWidgetLayout,
    PowerpackInnerWidgetLayout: PowerpackInnerWidgetLayout,
    PowerpackInnerWidgets: PowerpackInnerWidgets,
    PowerpackRelationships: PowerpackRelationships,
    PowerpackResponse: PowerpackResponse,
    PowerpackResponseLinks: PowerpackResponseLinks,
    PowerpackTemplateVariable: PowerpackTemplateVariable,
    PowerpacksResponseMeta: PowerpacksResponseMeta,
    PowerpacksResponseMetaPagination: PowerpacksResponseMetaPagination,
    PrintReportRequest: PrintReportRequest,
    PrintReportRequestAttributes: PrintReportRequestAttributes,
    PrintReportRequestData: PrintReportRequestData,
    PrintReportResponse: PrintReportResponse,
    PrintReportResponseAttributes: PrintReportResponseAttributes,
    PrintReportResponseData: PrintReportResponseData,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    ReportScheduleAuthor: ReportScheduleAuthor,
    ReportScheduleAuthorAttributes: ReportScheduleAuthorAttributes,
    ReportScheduleAuthorRelationship: ReportScheduleAuthorRelationship,
    ReportScheduleAuthorRelationshipData: ReportScheduleAuthorRelationshipData,
    ReportScheduleCreateRequest: ReportScheduleCreateRequest,
    ReportScheduleCreateRequestAttributes:
      ReportScheduleCreateRequestAttributes,
    ReportScheduleCreateRequestData: ReportScheduleCreateRequestData,
    ReportScheduleIndexTemplateVariable: ReportScheduleIndexTemplateVariable,
    ReportScheduleListResourceRelationship:
      ReportScheduleListResourceRelationship,
    ReportScheduleListResourceRelationshipData:
      ReportScheduleListResourceRelationshipData,
    ReportScheduleListResponse: ReportScheduleListResponse,
    ReportScheduleListResponseAttributes: ReportScheduleListResponseAttributes,
    ReportScheduleListResponseData: ReportScheduleListResponseData,
    ReportScheduleListResponseLinks: ReportScheduleListResponseLinks,
    ReportScheduleListResponseMeta: ReportScheduleListResponseMeta,
    ReportScheduleListResponsePagination: ReportScheduleListResponsePagination,
    ReportScheduleListResponseRelationships:
      ReportScheduleListResponseRelationships,
    ReportSchedulePatchRequest: ReportSchedulePatchRequest,
    ReportSchedulePatchRequestAttributes: ReportSchedulePatchRequestAttributes,
    ReportSchedulePatchRequestData: ReportSchedulePatchRequestData,
    ReportScheduleResource: ReportScheduleResource,
    ReportScheduleResourceAttributes: ReportScheduleResourceAttributes,
    ReportScheduleResponse: ReportScheduleResponse,
    ReportScheduleResponseAttributes: ReportScheduleResponseAttributes,
    ReportScheduleResponseData: ReportScheduleResponseData,
    ReportScheduleResponseRelationships: ReportScheduleResponseRelationships,
    ReportScheduleTemplateVariable: ReportScheduleTemplateVariable,
    ReportScheduleToggleRequest: ReportScheduleToggleRequest,
    ReportScheduleToggleRequestAttributes:
      ReportScheduleToggleRequestAttributes,
    ReportScheduleToggleRequestData: ReportScheduleToggleRequestData,
    SecureEmbedCreateRequest: SecureEmbedCreateRequest,
    SecureEmbedCreateRequestAttributes: SecureEmbedCreateRequestAttributes,
    SecureEmbedCreateRequestData: SecureEmbedCreateRequestData,
    SecureEmbedCreateResponse: SecureEmbedCreateResponse,
    SecureEmbedCreateResponseAttributes: SecureEmbedCreateResponseAttributes,
    SecureEmbedCreateResponseData: SecureEmbedCreateResponseData,
    SecureEmbedGetResponse: SecureEmbedGetResponse,
    SecureEmbedGetResponseAttributes: SecureEmbedGetResponseAttributes,
    SecureEmbedGetResponseData: SecureEmbedGetResponseData,
    SecureEmbedGlobalTime: SecureEmbedGlobalTime,
    SecureEmbedSelectableTemplateVariable:
      SecureEmbedSelectableTemplateVariable,
    SecureEmbedUpdateRequest: SecureEmbedUpdateRequest,
    SecureEmbedUpdateRequestAttributes: SecureEmbedUpdateRequestAttributes,
    SecureEmbedUpdateRequestData: SecureEmbedUpdateRequestData,
    SecureEmbedUpdateResponse: SecureEmbedUpdateResponse,
    SecureEmbedUpdateResponseAttributes: SecureEmbedUpdateResponseAttributes,
    SecureEmbedUpdateResponseData: SecureEmbedUpdateResponseData,
    SecureEmbedViewingPreferences: SecureEmbedViewingPreferences,
    SharedDashboardIncludedDashboard: SharedDashboardIncludedDashboard,
    SharedDashboardIncludedDashboardAttributes:
      SharedDashboardIncludedDashboardAttributes,
    SharedDashboardIncludedUser: SharedDashboardIncludedUser,
    SharedDashboardIncludedUserAttributes:
      SharedDashboardIncludedUserAttributes,
    SharedDashboardInvitee: SharedDashboardInvitee,
    SharedDashboardRelationshipDashboard: SharedDashboardRelationshipDashboard,
    SharedDashboardRelationshipDashboardData:
      SharedDashboardRelationshipDashboardData,
    SharedDashboardRelationshipSharer: SharedDashboardRelationshipSharer,
    SharedDashboardRelationships: SharedDashboardRelationships,
    SharedDashboardResponse: SharedDashboardResponse,
    SharedDashboardResponseAttributes: SharedDashboardResponseAttributes,
    SharedDashboardSelectableTemplateVariable:
      SharedDashboardSelectableTemplateVariable,
    SharedDashboardViewingPreferences: SharedDashboardViewingPreferences,
    StegadographyGetWidgetsResponse: StegadographyGetWidgetsResponse,
    StegadographyWidget: StegadographyWidget,
    StegadographyWidgetAttributes: StegadographyWidgetAttributes,
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
    User: User,
    UserAttributes: UserAttributes,
    UserRelationshipData: UserRelationshipData,
    UserResponseRelationships: UserResponseRelationships,
  },
};
