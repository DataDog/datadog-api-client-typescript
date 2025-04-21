import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
  },
};
