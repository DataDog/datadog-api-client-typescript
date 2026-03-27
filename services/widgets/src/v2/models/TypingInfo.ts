import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateOrUpdateWidgetRequest } from "./CreateOrUpdateWidgetRequest";
import { CreateOrUpdateWidgetRequestAttributes } from "./CreateOrUpdateWidgetRequestAttributes";
import { CreateOrUpdateWidgetRequestData } from "./CreateOrUpdateWidgetRequestData";
import { WidgetAttributes } from "./WidgetAttributes";
import { WidgetData } from "./WidgetData";
import { WidgetDefinition } from "./WidgetDefinition";
import { WidgetIncludedUser } from "./WidgetIncludedUser";
import { WidgetIncludedUserAttributes } from "./WidgetIncludedUserAttributes";
import { WidgetListResponse } from "./WidgetListResponse";
import { WidgetRelationshipData } from "./WidgetRelationshipData";
import { WidgetRelationshipItem } from "./WidgetRelationshipItem";
import { WidgetRelationships } from "./WidgetRelationships";
import { WidgetResponse } from "./WidgetResponse";
import { WidgetSearchMeta } from "./WidgetSearchMeta";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    WidgetExperienceType: [
      "ccm_reports",
      "logs_reports",
      "csv_reports",
      "product_analytics",
    ],
    WidgetType: [
      "bar_chart",
      "change",
      "cloud_cost_summary",
      "cohort",
      "funnel",
      "geomap",
      "list_stream",
      "query_table",
      "query_value",
      "retention_curve",
      "sankey",
      "sunburst",
      "timeseries",
      "toplist",
      "treemap",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateOrUpdateWidgetRequest: CreateOrUpdateWidgetRequest,
    CreateOrUpdateWidgetRequestAttributes:
      CreateOrUpdateWidgetRequestAttributes,
    CreateOrUpdateWidgetRequestData: CreateOrUpdateWidgetRequestData,
    WidgetAttributes: WidgetAttributes,
    WidgetData: WidgetData,
    WidgetDefinition: WidgetDefinition,
    WidgetIncludedUser: WidgetIncludedUser,
    WidgetIncludedUserAttributes: WidgetIncludedUserAttributes,
    WidgetListResponse: WidgetListResponse,
    WidgetRelationshipData: WidgetRelationshipData,
    WidgetRelationshipItem: WidgetRelationshipItem,
    WidgetRelationships: WidgetRelationships,
    WidgetResponse: WidgetResponse,
    WidgetSearchMeta: WidgetSearchMeta,
  },
};
