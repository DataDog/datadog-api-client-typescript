export {
  RumAudienceManagementApiCreateConnectionRequest,
  RumAudienceManagementApiCreateProductAnalyticsSegmentRequest,
  RumAudienceManagementApiDeleteConnectionRequest,
  RumAudienceManagementApiDeleteProductAnalyticsSegmentRequest,
  RumAudienceManagementApiDeleteUserProfileRequest,
  RumAudienceManagementApiGetAccountFacetInfoRequest,
  RumAudienceManagementApiGetMappingRequest,
  RumAudienceManagementApiGetProductAnalyticsSegmentRequest,
  RumAudienceManagementApiGetUserFacetInfoRequest,
  RumAudienceManagementApiListConnectionsRequest,
  RumAudienceManagementApiListProductAnalyticsSegmentsRequest,
  RumAudienceManagementApiPreviewProductAnalyticsSegmentRequest,
  RumAudienceManagementApiQueryAccountsRequest,
  RumAudienceManagementApiQueryEventFilteredUsersRequest,
  RumAudienceManagementApiQueryUsersRequest,
  RumAudienceManagementApiUpdateConnectionRequest,
  RumAudienceManagementApiUpdateProductAnalyticsSegmentRequest,
  RumAudienceManagementApi,
} from "./RumAudienceManagementApi";

export { APIErrorResponse } from "./models/APIErrorResponse";
export { CreateConnectionRequest } from "./models/CreateConnectionRequest";
export { CreateConnectionRequestData } from "./models/CreateConnectionRequestData";
export { CreateConnectionRequestDataAttributes } from "./models/CreateConnectionRequestDataAttributes";
export { CreateConnectionRequestDataAttributesFieldsItems } from "./models/CreateConnectionRequestDataAttributesFieldsItems";
export { FacetInfoRequest } from "./models/FacetInfoRequest";
export { FacetInfoRequestData } from "./models/FacetInfoRequestData";
export { FacetInfoRequestDataAttributes } from "./models/FacetInfoRequestDataAttributes";
export { FacetInfoRequestDataAttributesSearch } from "./models/FacetInfoRequestDataAttributesSearch";
export { FacetInfoRequestDataAttributesTermSearch } from "./models/FacetInfoRequestDataAttributesTermSearch";
export { FacetInfoRequestDataType } from "./models/FacetInfoRequestDataType";
export { FacetInfoResponse } from "./models/FacetInfoResponse";
export { FacetInfoResponseData } from "./models/FacetInfoResponseData";
export { FacetInfoResponseDataAttributes } from "./models/FacetInfoResponseDataAttributes";
export { FacetInfoResponseDataAttributesResult } from "./models/FacetInfoResponseDataAttributesResult";
export { FacetInfoResponseDataAttributesResultRange } from "./models/FacetInfoResponseDataAttributesResultRange";
export { FacetInfoResponseDataAttributesResultValuesItems } from "./models/FacetInfoResponseDataAttributesResultValuesItems";
export { FacetInfoResponseDataType } from "./models/FacetInfoResponseDataType";
export { GetMappingResponse } from "./models/GetMappingResponse";
export { GetMappingResponseData } from "./models/GetMappingResponseData";
export { GetMappingResponseDataAttributes } from "./models/GetMappingResponseDataAttributes";
export { GetMappingResponseDataAttributesAttributesItems } from "./models/GetMappingResponseDataAttributesAttributesItems";
export { GetMappingResponseDataType } from "./models/GetMappingResponseDataType";
export { JSONAPIErrorItem } from "./models/JSONAPIErrorItem";
export { JSONAPIErrorItemSource } from "./models/JSONAPIErrorItemSource";
export { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
export { ListConnectionsResponse } from "./models/ListConnectionsResponse";
export { ListConnectionsResponseData } from "./models/ListConnectionsResponseData";
export { ListConnectionsResponseDataAttributes } from "./models/ListConnectionsResponseDataAttributes";
export { ListConnectionsResponseDataAttributesConnectionsItems } from "./models/ListConnectionsResponseDataAttributesConnectionsItems";
export { ListConnectionsResponseDataAttributesConnectionsItemsDetails } from "./models/ListConnectionsResponseDataAttributesConnectionsItemsDetails";
export { ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable } from "./models/ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable";
export { ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake } from "./models/ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake";
export { ListConnectionsResponseDataAttributesConnectionsItemsJoin } from "./models/ListConnectionsResponseDataAttributesConnectionsItemsJoin";
export { ListConnectionsResponseDataType } from "./models/ListConnectionsResponseDataType";
export { ProductAnalyticsJourneyConversionType } from "./models/ProductAnalyticsJourneyConversionType";
export { QueryAccountRequest } from "./models/QueryAccountRequest";
export { QueryAccountRequestData } from "./models/QueryAccountRequestData";
export { QueryAccountRequestDataAttributes } from "./models/QueryAccountRequestDataAttributes";
export { QueryAccountRequestDataAttributesSort } from "./models/QueryAccountRequestDataAttributesSort";
export { QueryAccountRequestDataType } from "./models/QueryAccountRequestDataType";
export { QueryEventFilteredUsersRequest } from "./models/QueryEventFilteredUsersRequest";
export { QueryEventFilteredUsersRequestData } from "./models/QueryEventFilteredUsersRequestData";
export { QueryEventFilteredUsersRequestDataAttributes } from "./models/QueryEventFilteredUsersRequestDataAttributes";
export { QueryEventFilteredUsersRequestDataAttributesEventQuery } from "./models/QueryEventFilteredUsersRequestDataAttributesEventQuery";
export { QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame } from "./models/QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame";
export { QueryEventFilteredUsersRequestDataType } from "./models/QueryEventFilteredUsersRequestDataType";
export { QueryResponse } from "./models/QueryResponse";
export { QueryResponseData } from "./models/QueryResponseData";
export { QueryResponseDataAttributes } from "./models/QueryResponseDataAttributes";
export { QueryResponseDataType } from "./models/QueryResponseDataType";
export { QuerySortOrder } from "./models/QuerySortOrder";
export { QueryUsersRequest } from "./models/QueryUsersRequest";
export { QueryUsersRequestData } from "./models/QueryUsersRequestData";
export { QueryUsersRequestDataAttributes } from "./models/QueryUsersRequestDataAttributes";
export { QueryUsersRequestDataAttributesSort } from "./models/QueryUsersRequestDataAttributesSort";
export { QueryUsersRequestDataType } from "./models/QueryUsersRequestDataType";
export { SegmentAttributes } from "./models/SegmentAttributes";
export { SegmentCreateAttributes } from "./models/SegmentCreateAttributes";
export { SegmentCreateData } from "./models/SegmentCreateData";
export { SegmentCreateRequest } from "./models/SegmentCreateRequest";
export { SegmentData } from "./models/SegmentData";
export { SegmentDataQuery } from "./models/SegmentDataQuery";
export { SegmentDeleteAttributes } from "./models/SegmentDeleteAttributes";
export { SegmentDeleteData } from "./models/SegmentDeleteData";
export { SegmentDeletedType } from "./models/SegmentDeletedType";
export { SegmentDeleteResponse } from "./models/SegmentDeleteResponse";
export { SegmentEntity } from "./models/SegmentEntity";
export { SegmentEventPlatformBlock } from "./models/SegmentEventPlatformBlock";
export { SegmentJourneyBlock } from "./models/SegmentJourneyBlock";
export { SegmentPreviewAttributes } from "./models/SegmentPreviewAttributes";
export { SegmentPreviewData } from "./models/SegmentPreviewData";
export { SegmentPreviewRequest } from "./models/SegmentPreviewRequest";
export { SegmentPreviewRequestType } from "./models/SegmentPreviewRequestType";
export { SegmentPreviewResponse } from "./models/SegmentPreviewResponse";
export { SegmentPreviewResponseAttributes } from "./models/SegmentPreviewResponseAttributes";
export { SegmentPreviewResponseData } from "./models/SegmentPreviewResponseData";
export { SegmentPreviewResponseType } from "./models/SegmentPreviewResponseType";
export { SegmentProfileStoreBlock } from "./models/SegmentProfileStoreBlock";
export { SegmentReferenceTableBlock } from "./models/SegmentReferenceTableBlock";
export { SegmentReferenceTableColumn } from "./models/SegmentReferenceTableColumn";
export { SegmentReferenceTableJoinCondition } from "./models/SegmentReferenceTableJoinCondition";
export { SegmentResourceType } from "./models/SegmentResourceType";
export { SegmentResponse } from "./models/SegmentResponse";
export { SegmentSortColumn } from "./models/SegmentSortColumn";
export { SegmentsResponse } from "./models/SegmentsResponse";
export { SegmentStaticBlock } from "./models/SegmentStaticBlock";
export { SegmentSummaryAttributes } from "./models/SegmentSummaryAttributes";
export { SegmentSummaryData } from "./models/SegmentSummaryData";
export { SegmentTemplateBlock } from "./models/SegmentTemplateBlock";
export { SegmentUpdateAttributes } from "./models/SegmentUpdateAttributes";
export { SegmentUpdateData } from "./models/SegmentUpdateData";
export { SegmentUpdateRequest } from "./models/SegmentUpdateRequest";
export { SegmentUser } from "./models/SegmentUser";
export { UpdateConnectionRequest } from "./models/UpdateConnectionRequest";
export { UpdateConnectionRequestData } from "./models/UpdateConnectionRequestData";
export { UpdateConnectionRequestDataAttributes } from "./models/UpdateConnectionRequestDataAttributes";
export { UpdateConnectionRequestDataAttributesFieldsToUpdateItems } from "./models/UpdateConnectionRequestDataAttributesFieldsToUpdateItems";
export { UpdateConnectionRequestDataType } from "./models/UpdateConnectionRequestDataType";
