import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DashboardUsage } from "./DashboardUsage";
import { DashboardUsageAttributes } from "./DashboardUsageAttributes";
import { DashboardUsageResponse } from "./DashboardUsageResponse";
import { DashboardUsageUser } from "./DashboardUsageUser";
import { ListDashboardsUsageResponse } from "./ListDashboardsUsageResponse";
import { ListDashboardsUsageResponseLinks } from "./ListDashboardsUsageResponseLinks";
import { ListDashboardsUsageResponseMeta } from "./ListDashboardsUsageResponseMeta";
import { PaginationMetaPage } from "./PaginationMetaPage";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DashboardUsageType: ["dashboards-usages"],
    PaginationMetaPageType: ["offset_limit"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DashboardUsage: DashboardUsage,
    DashboardUsageAttributes: DashboardUsageAttributes,
    DashboardUsageResponse: DashboardUsageResponse,
    DashboardUsageUser: DashboardUsageUser,
    ListDashboardsUsageResponse: ListDashboardsUsageResponse,
    ListDashboardsUsageResponseLinks: ListDashboardsUsageResponseLinks,
    ListDashboardsUsageResponseMeta: ListDashboardsUsageResponseMeta,
    PaginationMetaPage: PaginationMetaPage,
  },
};
