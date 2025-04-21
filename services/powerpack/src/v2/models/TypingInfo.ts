import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ListPowerpacksResponse } from "./ListPowerpacksResponse";
import { Powerpack } from "./Powerpack";
import { PowerpackAttributes } from "./PowerpackAttributes";
import { PowerpackData } from "./PowerpackData";
import { PowerpackGroupWidget } from "./PowerpackGroupWidget";
import { PowerpackGroupWidgetDefinition } from "./PowerpackGroupWidgetDefinition";
import { PowerpackGroupWidgetLayout } from "./PowerpackGroupWidgetLayout";
import { PowerpackInnerWidgetLayout } from "./PowerpackInnerWidgetLayout";
import { PowerpackInnerWidgets } from "./PowerpackInnerWidgets";
import { PowerpackRelationships } from "./PowerpackRelationships";
import { PowerpackResponse } from "./PowerpackResponse";
import { PowerpackResponseLinks } from "./PowerpackResponseLinks";
import { PowerpackTemplateVariable } from "./PowerpackTemplateVariable";
import { PowerpacksResponseMeta } from "./PowerpacksResponseMeta";
import { PowerpacksResponseMetaPagination } from "./PowerpacksResponseMetaPagination";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    UsersType: ["users"],
    WidgetLiveSpan: [
      "1m",
      "5m",
      "10m",
      "15m",
      "30m",
      "1h",
      "4h",
      "1d",
      "2d",
      "1w",
      "1mo",
      "3mo",
      "6mo",
      "1y",
      "alert",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ListPowerpacksResponse: ListPowerpacksResponse,
    Powerpack: Powerpack,
    PowerpackAttributes: PowerpackAttributes,
    PowerpackData: PowerpackData,
    PowerpackGroupWidget: PowerpackGroupWidget,
    PowerpackGroupWidgetDefinition: PowerpackGroupWidgetDefinition,
    PowerpackGroupWidgetLayout: PowerpackGroupWidgetLayout,
    PowerpackInnerWidgetLayout: PowerpackInnerWidgetLayout,
    PowerpackInnerWidgets: PowerpackInnerWidgets,
    PowerpackRelationships: PowerpackRelationships,
    PowerpackResponse: PowerpackResponse,
    PowerpackResponseLinks: PowerpackResponseLinks,
    PowerpackTemplateVariable: PowerpackTemplateVariable,
    PowerpacksResponseMeta: PowerpacksResponseMeta,
    PowerpacksResponseMetaPagination: PowerpacksResponseMetaPagination,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
  },
};
