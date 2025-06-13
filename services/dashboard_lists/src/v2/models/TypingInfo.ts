import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Creator } from "./Creator";
import { DashboardList } from "./DashboardList";
import { DashboardListAddItemsRequest } from "./DashboardListAddItemsRequest";
import { DashboardListAddItemsResponse } from "./DashboardListAddItemsResponse";
import { DashboardListDeleteItemsRequest } from "./DashboardListDeleteItemsRequest";
import { DashboardListDeleteItemsResponse } from "./DashboardListDeleteItemsResponse";
import { DashboardListDeleteResponse } from "./DashboardListDeleteResponse";
import { DashboardListItem } from "./DashboardListItem";
import { DashboardListItemRequest } from "./DashboardListItemRequest";
import { DashboardListItemResponse } from "./DashboardListItemResponse";
import { DashboardListItems } from "./DashboardListItems";
import { DashboardListListResponse } from "./DashboardListListResponse";
import { DashboardListUpdateItemsRequest } from "./DashboardListUpdateItemsRequest";
import { DashboardListUpdateItemsResponse } from "./DashboardListUpdateItemsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DashboardType: [
      "custom_timeboard",
      "custom_screenboard",
      "integration_screenboard",
      "integration_timeboard",
      "host_timeboard",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Creator: Creator,
    DashboardList: DashboardList,
    DashboardListAddItemsRequest: DashboardListAddItemsRequest,
    DashboardListAddItemsResponse: DashboardListAddItemsResponse,
    DashboardListDeleteItemsRequest: DashboardListDeleteItemsRequest,
    DashboardListDeleteItemsResponse: DashboardListDeleteItemsResponse,
    DashboardListDeleteResponse: DashboardListDeleteResponse,
    DashboardListItem: DashboardListItem,
    DashboardListItemRequest: DashboardListItemRequest,
    DashboardListItemResponse: DashboardListItemResponse,
    DashboardListItems: DashboardListItems,
    DashboardListListResponse: DashboardListListResponse,
    DashboardListUpdateItemsRequest: DashboardListUpdateItemsRequest,
    DashboardListUpdateItemsResponse: DashboardListUpdateItemsResponse,
  },
};
