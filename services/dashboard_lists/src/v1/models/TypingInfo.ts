import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Creator } from "./Creator";
import { DashboardList } from "./DashboardList";
import { DashboardListDeleteResponse } from "./DashboardListDeleteResponse";
import { DashboardListListResponse } from "./DashboardListListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Creator: Creator,
    DashboardList: DashboardList,
    DashboardListDeleteResponse: DashboardListDeleteResponse,
    DashboardListListResponse: DashboardListListResponse,
  },
};
