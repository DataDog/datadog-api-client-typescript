import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DashboardUsage } from "./DashboardUsage";
import { DashboardUsageAttributes } from "./DashboardUsageAttributes";
import { DashboardUsageResponse } from "./DashboardUsageResponse";
import { DashboardUsageUser } from "./DashboardUsageUser";
import { DashboardWidgetValidationRequest } from "./DashboardWidgetValidationRequest";
import { DashboardWidgetValidationResponse } from "./DashboardWidgetValidationResponse";
import { DashboardWidgetValidationResult } from "./DashboardWidgetValidationResult";
import { ListDashboardsUsageResponse } from "./ListDashboardsUsageResponse";
import { ListDashboardsUsageResponseLinks } from "./ListDashboardsUsageResponseLinks";
import { ListDashboardsUsageResponseMeta } from "./ListDashboardsUsageResponseMeta";
import { PaginationMetaPage } from "./PaginationMetaPage";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DashboardUsageType: ["dashboards-usages"],
    DashboardWidgetValidationLayoutType: ["ordered", "free"],
    DashboardWidgetValidationReflowType: ["auto", "fixed"],
    PaginationMetaPageType: ["offset_limit"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DashboardUsage: DashboardUsage,
    DashboardUsageAttributes: DashboardUsageAttributes,
    DashboardUsageResponse: DashboardUsageResponse,
    DashboardUsageUser: DashboardUsageUser,
    DashboardWidgetValidationRequest: DashboardWidgetValidationRequest,
    DashboardWidgetValidationResponse: DashboardWidgetValidationResponse,
    DashboardWidgetValidationResult: DashboardWidgetValidationResult,
    ListDashboardsUsageResponse: ListDashboardsUsageResponse,
    ListDashboardsUsageResponseLinks: ListDashboardsUsageResponseLinks,
    ListDashboardsUsageResponseMeta: ListDashboardsUsageResponseMeta,
    PaginationMetaPage: PaginationMetaPage,
  },
};
