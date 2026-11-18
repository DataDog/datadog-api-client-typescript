import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateConnectionRequest } from "./CreateConnectionRequest";
import { CreateConnectionRequestData } from "./CreateConnectionRequestData";
import { CreateConnectionRequestDataAttributes } from "./CreateConnectionRequestDataAttributes";
import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";
import { FacetInfoRequest } from "./FacetInfoRequest";
import { FacetInfoRequestData } from "./FacetInfoRequestData";
import { FacetInfoRequestDataAttributes } from "./FacetInfoRequestDataAttributes";
import { FacetInfoRequestDataAttributesSearch } from "./FacetInfoRequestDataAttributesSearch";
import { FacetInfoRequestDataAttributesTermSearch } from "./FacetInfoRequestDataAttributesTermSearch";
import { FacetInfoResponse } from "./FacetInfoResponse";
import { FacetInfoResponseData } from "./FacetInfoResponseData";
import { FacetInfoResponseDataAttributes } from "./FacetInfoResponseDataAttributes";
import { FacetInfoResponseDataAttributesResult } from "./FacetInfoResponseDataAttributesResult";
import { FacetInfoResponseDataAttributesResultRange } from "./FacetInfoResponseDataAttributesResultRange";
import { FacetInfoResponseDataAttributesResultValuesItems } from "./FacetInfoResponseDataAttributesResultValuesItems";
import { GetMappingResponse } from "./GetMappingResponse";
import { GetMappingResponseData } from "./GetMappingResponseData";
import { GetMappingResponseDataAttributes } from "./GetMappingResponseDataAttributes";
import { GetMappingResponseDataAttributesAttributesItems } from "./GetMappingResponseDataAttributesAttributesItems";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListConnectionsResponse } from "./ListConnectionsResponse";
import { ListConnectionsResponseData } from "./ListConnectionsResponseData";
import { ListConnectionsResponseDataAttributes } from "./ListConnectionsResponseDataAttributes";
import { ListConnectionsResponseDataAttributesConnectionsItems } from "./ListConnectionsResponseDataAttributesConnectionsItems";
import { ListConnectionsResponseDataAttributesConnectionsItemsDetails } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetails";
import { ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable";
import { ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake";
import { ListConnectionsResponseDataAttributesConnectionsItemsJoin } from "./ListConnectionsResponseDataAttributesConnectionsItemsJoin";
import { QueryAccountRequest } from "./QueryAccountRequest";
import { QueryAccountRequestData } from "./QueryAccountRequestData";
import { QueryAccountRequestDataAttributes } from "./QueryAccountRequestDataAttributes";
import { QueryAccountRequestDataAttributesSort } from "./QueryAccountRequestDataAttributesSort";
import { QueryEventFilteredUsersRequest } from "./QueryEventFilteredUsersRequest";
import { QueryEventFilteredUsersRequestData } from "./QueryEventFilteredUsersRequestData";
import { QueryEventFilteredUsersRequestDataAttributes } from "./QueryEventFilteredUsersRequestDataAttributes";
import { QueryEventFilteredUsersRequestDataAttributesEventQuery } from "./QueryEventFilteredUsersRequestDataAttributesEventQuery";
import { QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame } from "./QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame";
import { QueryResponse } from "./QueryResponse";
import { QueryResponseData } from "./QueryResponseData";
import { QueryResponseDataAttributes } from "./QueryResponseDataAttributes";
import { QueryUsersRequest } from "./QueryUsersRequest";
import { QueryUsersRequestData } from "./QueryUsersRequestData";
import { QueryUsersRequestDataAttributes } from "./QueryUsersRequestDataAttributes";
import { QueryUsersRequestDataAttributesSort } from "./QueryUsersRequestDataAttributesSort";
import { SegmentAttributes } from "./SegmentAttributes";
import { SegmentCreateAttributes } from "./SegmentCreateAttributes";
import { SegmentCreateData } from "./SegmentCreateData";
import { SegmentCreateRequest } from "./SegmentCreateRequest";
import { SegmentData } from "./SegmentData";
import { SegmentDataQuery } from "./SegmentDataQuery";
import { SegmentDeleteAttributes } from "./SegmentDeleteAttributes";
import { SegmentDeleteData } from "./SegmentDeleteData";
import { SegmentDeleteResponse } from "./SegmentDeleteResponse";
import { SegmentEventPlatformBlock } from "./SegmentEventPlatformBlock";
import { SegmentJourneyBlock } from "./SegmentJourneyBlock";
import { SegmentPreviewAttributes } from "./SegmentPreviewAttributes";
import { SegmentPreviewData } from "./SegmentPreviewData";
import { SegmentPreviewRequest } from "./SegmentPreviewRequest";
import { SegmentPreviewResponse } from "./SegmentPreviewResponse";
import { SegmentPreviewResponseAttributes } from "./SegmentPreviewResponseAttributes";
import { SegmentPreviewResponseData } from "./SegmentPreviewResponseData";
import { SegmentProfileStoreBlock } from "./SegmentProfileStoreBlock";
import { SegmentReferenceTableBlock } from "./SegmentReferenceTableBlock";
import { SegmentReferenceTableColumn } from "./SegmentReferenceTableColumn";
import { SegmentReferenceTableJoinCondition } from "./SegmentReferenceTableJoinCondition";
import { SegmentResponse } from "./SegmentResponse";
import { SegmentStaticBlock } from "./SegmentStaticBlock";
import { SegmentSummaryAttributes } from "./SegmentSummaryAttributes";
import { SegmentSummaryData } from "./SegmentSummaryData";
import { SegmentTemplateBlock } from "./SegmentTemplateBlock";
import { SegmentUpdateAttributes } from "./SegmentUpdateAttributes";
import { SegmentUpdateData } from "./SegmentUpdateData";
import { SegmentUpdateRequest } from "./SegmentUpdateRequest";
import { SegmentUser } from "./SegmentUser";
import { SegmentsResponse } from "./SegmentsResponse";
import { UpdateConnectionRequest } from "./UpdateConnectionRequest";
import { UpdateConnectionRequestData } from "./UpdateConnectionRequestData";
import { UpdateConnectionRequestDataAttributes } from "./UpdateConnectionRequestDataAttributes";
import { UpdateConnectionRequestDataAttributesFieldsToUpdateItems } from "./UpdateConnectionRequestDataAttributesFieldsToUpdateItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FacetInfoRequestDataType: [
      "users_facet_info_request",
      "accounts_facet_info_request",
    ],
    FacetInfoResponseDataType: ["users_facet_info", "accounts_facet_info"],
    GetMappingResponseDataType: ["get_mappings_response"],
    ListConnectionsResponseDataType: ["list_connections_response"],
    ProductAnalyticsJourneyConversionType: ["conversion", "drop-off"],
    QueryAccountRequestDataType: ["query_account_request"],
    QueryEventFilteredUsersRequestDataType: [
      "query_event_filtered_users_request",
    ],
    QueryResponseDataType: ["query_response"],
    QuerySortOrder: ["asc", "desc"],
    QueryUsersRequestDataType: ["query_users_request"],
    SegmentDeletedType: ["deleted_segment"],
    SegmentEntity: ["user", "account"],
    SegmentPreviewRequestType: ["segment_preview_request"],
    SegmentPreviewResponseType: ["unified_segment_preview_response"],
    SegmentResourceType: ["segment"],
    SegmentSortColumn: [
      "name",
      "description",
      "created_by",
      "created_at",
      "modified_by",
      "modified_at",
      "disabled_by",
      "disabled_at",
      "uuid",
    ],
    UpdateConnectionRequestDataType: ["connection_id"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateConnectionRequest: CreateConnectionRequest,
    CreateConnectionRequestData: CreateConnectionRequestData,
    CreateConnectionRequestDataAttributes:
      CreateConnectionRequestDataAttributes,
    CreateConnectionRequestDataAttributesFieldsItems:
      CreateConnectionRequestDataAttributesFieldsItems,
    FacetInfoRequest: FacetInfoRequest,
    FacetInfoRequestData: FacetInfoRequestData,
    FacetInfoRequestDataAttributes: FacetInfoRequestDataAttributes,
    FacetInfoRequestDataAttributesSearch: FacetInfoRequestDataAttributesSearch,
    FacetInfoRequestDataAttributesTermSearch:
      FacetInfoRequestDataAttributesTermSearch,
    FacetInfoResponse: FacetInfoResponse,
    FacetInfoResponseData: FacetInfoResponseData,
    FacetInfoResponseDataAttributes: FacetInfoResponseDataAttributes,
    FacetInfoResponseDataAttributesResult:
      FacetInfoResponseDataAttributesResult,
    FacetInfoResponseDataAttributesResultRange:
      FacetInfoResponseDataAttributesResultRange,
    FacetInfoResponseDataAttributesResultValuesItems:
      FacetInfoResponseDataAttributesResultValuesItems,
    GetMappingResponse: GetMappingResponse,
    GetMappingResponseData: GetMappingResponseData,
    GetMappingResponseDataAttributes: GetMappingResponseDataAttributes,
    GetMappingResponseDataAttributesAttributesItems:
      GetMappingResponseDataAttributesAttributesItems,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListConnectionsResponse: ListConnectionsResponse,
    ListConnectionsResponseData: ListConnectionsResponseData,
    ListConnectionsResponseDataAttributes:
      ListConnectionsResponseDataAttributes,
    ListConnectionsResponseDataAttributesConnectionsItems:
      ListConnectionsResponseDataAttributesConnectionsItems,
    ListConnectionsResponseDataAttributesConnectionsItemsDetails:
      ListConnectionsResponseDataAttributesConnectionsItemsDetails,
    ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable:
      ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable,
    ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake:
      ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake,
    ListConnectionsResponseDataAttributesConnectionsItemsJoin:
      ListConnectionsResponseDataAttributesConnectionsItemsJoin,
    QueryAccountRequest: QueryAccountRequest,
    QueryAccountRequestData: QueryAccountRequestData,
    QueryAccountRequestDataAttributes: QueryAccountRequestDataAttributes,
    QueryAccountRequestDataAttributesSort:
      QueryAccountRequestDataAttributesSort,
    QueryEventFilteredUsersRequest: QueryEventFilteredUsersRequest,
    QueryEventFilteredUsersRequestData: QueryEventFilteredUsersRequestData,
    QueryEventFilteredUsersRequestDataAttributes:
      QueryEventFilteredUsersRequestDataAttributes,
    QueryEventFilteredUsersRequestDataAttributesEventQuery:
      QueryEventFilteredUsersRequestDataAttributesEventQuery,
    QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame:
      QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame,
    QueryResponse: QueryResponse,
    QueryResponseData: QueryResponseData,
    QueryResponseDataAttributes: QueryResponseDataAttributes,
    QueryUsersRequest: QueryUsersRequest,
    QueryUsersRequestData: QueryUsersRequestData,
    QueryUsersRequestDataAttributes: QueryUsersRequestDataAttributes,
    QueryUsersRequestDataAttributesSort: QueryUsersRequestDataAttributesSort,
    SegmentAttributes: SegmentAttributes,
    SegmentCreateAttributes: SegmentCreateAttributes,
    SegmentCreateData: SegmentCreateData,
    SegmentCreateRequest: SegmentCreateRequest,
    SegmentData: SegmentData,
    SegmentDataQuery: SegmentDataQuery,
    SegmentDeleteAttributes: SegmentDeleteAttributes,
    SegmentDeleteData: SegmentDeleteData,
    SegmentDeleteResponse: SegmentDeleteResponse,
    SegmentEventPlatformBlock: SegmentEventPlatformBlock,
    SegmentJourneyBlock: SegmentJourneyBlock,
    SegmentPreviewAttributes: SegmentPreviewAttributes,
    SegmentPreviewData: SegmentPreviewData,
    SegmentPreviewRequest: SegmentPreviewRequest,
    SegmentPreviewResponse: SegmentPreviewResponse,
    SegmentPreviewResponseAttributes: SegmentPreviewResponseAttributes,
    SegmentPreviewResponseData: SegmentPreviewResponseData,
    SegmentProfileStoreBlock: SegmentProfileStoreBlock,
    SegmentReferenceTableBlock: SegmentReferenceTableBlock,
    SegmentReferenceTableColumn: SegmentReferenceTableColumn,
    SegmentReferenceTableJoinCondition: SegmentReferenceTableJoinCondition,
    SegmentResponse: SegmentResponse,
    SegmentStaticBlock: SegmentStaticBlock,
    SegmentSummaryAttributes: SegmentSummaryAttributes,
    SegmentSummaryData: SegmentSummaryData,
    SegmentTemplateBlock: SegmentTemplateBlock,
    SegmentUpdateAttributes: SegmentUpdateAttributes,
    SegmentUpdateData: SegmentUpdateData,
    SegmentUpdateRequest: SegmentUpdateRequest,
    SegmentUser: SegmentUser,
    SegmentsResponse: SegmentsResponse,
    UpdateConnectionRequest: UpdateConnectionRequest,
    UpdateConnectionRequestData: UpdateConnectionRequestData,
    UpdateConnectionRequestDataAttributes:
      UpdateConnectionRequestDataAttributes,
    UpdateConnectionRequestDataAttributesFieldsToUpdateItems:
      UpdateConnectionRequestDataAttributesFieldsToUpdateItems,
  },
};
