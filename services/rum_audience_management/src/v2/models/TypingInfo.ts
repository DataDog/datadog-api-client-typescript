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
import { ListConnectionsResponse } from "./ListConnectionsResponse";
import { ListConnectionsResponseData } from "./ListConnectionsResponseData";
import { ListConnectionsResponseDataAttributes } from "./ListConnectionsResponseDataAttributes";
import { ListConnectionsResponseDataAttributesConnectionsItems } from "./ListConnectionsResponseDataAttributesConnectionsItems";
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
import { UpdateConnectionRequest } from "./UpdateConnectionRequest";
import { UpdateConnectionRequestData } from "./UpdateConnectionRequestData";
import { UpdateConnectionRequestDataAttributes } from "./UpdateConnectionRequestDataAttributes";
import { UpdateConnectionRequestDataAttributesFieldsToUpdateItems } from "./UpdateConnectionRequestDataAttributesFieldsToUpdateItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FacetInfoRequestDataType: ["users_facet_info_request"],
    FacetInfoResponseDataType: ["users_facet_info"],
    GetMappingResponseDataType: ["get_mappings_response"],
    ListConnectionsResponseDataType: ["list_connections_response"],
    QueryAccountRequestDataType: ["query_account_request"],
    QueryEventFilteredUsersRequestDataType: [
      "query_event_filtered_users_request",
    ],
    QueryResponseDataType: ["query_response"],
    QueryUsersRequestDataType: ["query_users_request"],
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
    ListConnectionsResponse: ListConnectionsResponse,
    ListConnectionsResponseData: ListConnectionsResponseData,
    ListConnectionsResponseDataAttributes:
      ListConnectionsResponseDataAttributes,
    ListConnectionsResponseDataAttributesConnectionsItems:
      ListConnectionsResponseDataAttributesConnectionsItems,
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
    UpdateConnectionRequest: UpdateConnectionRequest,
    UpdateConnectionRequestData: UpdateConnectionRequestData,
    UpdateConnectionRequestDataAttributes:
      UpdateConnectionRequestDataAttributes,
    UpdateConnectionRequestDataAttributesFieldsToUpdateItems:
      UpdateConnectionRequestDataAttributesFieldsToUpdateItems,
  },
};
