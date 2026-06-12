import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListSharedDashboardsResponse } from "./ListSharedDashboardsResponse";
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
import { UserRelationshipData } from "./UserRelationshipData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SharedDashboardIncludedDashboardType: ["dashboard"],
    SharedDashboardShareType: ["open", "invite", "embed", "secure-embed"],
    SharedDashboardStatus: ["active", "paused"],
    SharedDashboardType: ["shared_dashboard"],
    SharedDashboardViewingPreferencesTheme: ["system", "light", "dark"],
    UserResourceType: ["user"],
  },
  oneOfMap: {
    SharedDashboardIncluded: [
      "SharedDashboardIncludedDashboard",
      "SharedDashboardIncludedUser",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListSharedDashboardsResponse: ListSharedDashboardsResponse,
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
    UserRelationshipData: UserRelationshipData,
  },
};
