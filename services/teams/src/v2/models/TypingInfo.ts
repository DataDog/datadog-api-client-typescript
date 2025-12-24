import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AddMemberTeamRequest } from "./AddMemberTeamRequest";
import { ConnectedTeamRef } from "./ConnectedTeamRef";
import { ConnectedTeamRefData } from "./ConnectedTeamRefData";
import { ConnectionsPagePagination } from "./ConnectionsPagePagination";
import { ConnectionsResponseMeta } from "./ConnectionsResponseMeta";
import { MemberTeam } from "./MemberTeam";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToTeamLinkData } from "./RelationshipToTeamLinkData";
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUserTeamPermission } from "./RelationshipToUserTeamPermission";
import { RelationshipToUserTeamPermissionData } from "./RelationshipToUserTeamPermissionData";
import { RelationshipToUserTeamTeam } from "./RelationshipToUserTeamTeam";
import { RelationshipToUserTeamTeamData } from "./RelationshipToUserTeamTeamData";
import { RelationshipToUserTeamUser } from "./RelationshipToUserTeamUser";
import { RelationshipToUserTeamUserData } from "./RelationshipToUserTeamUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { Team } from "./Team";
import { TeamAttributes } from "./TeamAttributes";
import { TeamConnection } from "./TeamConnection";
import { TeamConnectionAttributes } from "./TeamConnectionAttributes";
import { TeamConnectionCreateData } from "./TeamConnectionCreateData";
import { TeamConnectionCreateRequest } from "./TeamConnectionCreateRequest";
import { TeamConnectionDeleteRequest } from "./TeamConnectionDeleteRequest";
import { TeamConnectionDeleteRequestDataItem } from "./TeamConnectionDeleteRequestDataItem";
import { TeamConnectionRelationships } from "./TeamConnectionRelationships";
import { TeamConnectionsResponse } from "./TeamConnectionsResponse";
import { TeamCreate } from "./TeamCreate";
import { TeamCreateAttributes } from "./TeamCreateAttributes";
import { TeamCreateRelationships } from "./TeamCreateRelationships";
import { TeamCreateRequest } from "./TeamCreateRequest";
import { TeamHierarchyLink } from "./TeamHierarchyLink";
import { TeamHierarchyLinkAttributes } from "./TeamHierarchyLinkAttributes";
import { TeamHierarchyLinkCreate } from "./TeamHierarchyLinkCreate";
import { TeamHierarchyLinkCreateRelationships } from "./TeamHierarchyLinkCreateRelationships";
import { TeamHierarchyLinkCreateRequest } from "./TeamHierarchyLinkCreateRequest";
import { TeamHierarchyLinkCreateTeam } from "./TeamHierarchyLinkCreateTeam";
import { TeamHierarchyLinkCreateTeamRelationship } from "./TeamHierarchyLinkCreateTeamRelationship";
import { TeamHierarchyLinkRelationships } from "./TeamHierarchyLinkRelationships";
import { TeamHierarchyLinkResponse } from "./TeamHierarchyLinkResponse";
import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";
import { TeamHierarchyLinkTeamAttributes } from "./TeamHierarchyLinkTeamAttributes";
import { TeamHierarchyLinkTeamRelationship } from "./TeamHierarchyLinkTeamRelationship";
import { TeamHierarchyLinksResponse } from "./TeamHierarchyLinksResponse";
import { TeamLink } from "./TeamLink";
import { TeamLinkAttributes } from "./TeamLinkAttributes";
import { TeamLinkCreate } from "./TeamLinkCreate";
import { TeamLinkCreateRequest } from "./TeamLinkCreateRequest";
import { TeamLinkResponse } from "./TeamLinkResponse";
import { TeamLinksResponse } from "./TeamLinksResponse";
import { TeamNotificationRule } from "./TeamNotificationRule";
import { TeamNotificationRuleAttributes } from "./TeamNotificationRuleAttributes";
import { TeamNotificationRuleAttributesEmail } from "./TeamNotificationRuleAttributesEmail";
import { TeamNotificationRuleAttributesMsTeams } from "./TeamNotificationRuleAttributesMsTeams";
import { TeamNotificationRuleAttributesPagerduty } from "./TeamNotificationRuleAttributesPagerduty";
import { TeamNotificationRuleAttributesSlack } from "./TeamNotificationRuleAttributesSlack";
import { TeamNotificationRuleRequest } from "./TeamNotificationRuleRequest";
import { TeamNotificationRuleResponse } from "./TeamNotificationRuleResponse";
import { TeamNotificationRulesResponse } from "./TeamNotificationRulesResponse";
import { TeamNotificationRulesResponseMeta } from "./TeamNotificationRulesResponseMeta";
import { TeamNotificationRulesResponseMetaPage } from "./TeamNotificationRulesResponseMetaPage";
import { TeamPermissionSetting } from "./TeamPermissionSetting";
import { TeamPermissionSettingAttributes } from "./TeamPermissionSettingAttributes";
import { TeamPermissionSettingResponse } from "./TeamPermissionSettingResponse";
import { TeamPermissionSettingUpdate } from "./TeamPermissionSettingUpdate";
import { TeamPermissionSettingUpdateAttributes } from "./TeamPermissionSettingUpdateAttributes";
import { TeamPermissionSettingUpdateRequest } from "./TeamPermissionSettingUpdateRequest";
import { TeamPermissionSettingsResponse } from "./TeamPermissionSettingsResponse";
import { TeamRef } from "./TeamRef";
import { TeamRefData } from "./TeamRefData";
import { TeamRelationships } from "./TeamRelationships";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";
import { TeamResponse } from "./TeamResponse";
import { TeamSyncAttributes } from "./TeamSyncAttributes";
import { TeamSyncData } from "./TeamSyncData";
import { TeamSyncRequest } from "./TeamSyncRequest";
import { TeamSyncResponse } from "./TeamSyncResponse";
import { TeamUpdate } from "./TeamUpdate";
import { TeamUpdateAttributes } from "./TeamUpdateAttributes";
import { TeamUpdateRelationships } from "./TeamUpdateRelationships";
import { TeamUpdateRequest } from "./TeamUpdateRequest";
import { TeamsHierarchyLinksResponseLinks } from "./TeamsHierarchyLinksResponseLinks";
import { TeamsHierarchyLinksResponseMeta } from "./TeamsHierarchyLinksResponseMeta";
import { TeamsHierarchyLinksResponseMetaPage } from "./TeamsHierarchyLinksResponseMetaPage";
import { TeamsResponse } from "./TeamsResponse";
import { TeamsResponseLinks } from "./TeamsResponseLinks";
import { TeamsResponseMeta } from "./TeamsResponseMeta";
import { TeamsResponseMetaPagination } from "./TeamsResponseMetaPagination";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UserTeam } from "./UserTeam";
import { UserTeamAttributes } from "./UserTeamAttributes";
import { UserTeamCreate } from "./UserTeamCreate";
import { UserTeamPermission } from "./UserTeamPermission";
import { UserTeamPermissionAttributes } from "./UserTeamPermissionAttributes";
import { UserTeamRelationships } from "./UserTeamRelationships";
import { UserTeamRequest } from "./UserTeamRequest";
import { UserTeamResponse } from "./UserTeamResponse";
import { UserTeamUpdate } from "./UserTeamUpdate";
import { UserTeamUpdateRequest } from "./UserTeamUpdateRequest";
import { UserTeamsResponse } from "./UserTeamsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ConnectedTeamRefDataType: ["github_team"],
    GetTeamMembershipsSort: [
      "manager_name",
      "-manager_name",
      "name",
      "-name",
      "handle",
      "-handle",
      "email",
      "-email",
    ],
    ListTeamsInclude: ["team_links", "user_team_permissions"],
    ListTeamsSort: ["name", "-name", "user_count", "-user_count"],
    MemberTeamType: ["member_teams"],
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    TeamConnectionType: ["team_connection"],
    TeamHierarchyLinkType: ["team_hierarchy_links"],
    TeamLinkType: ["team_links"],
    TeamNotificationRuleType: ["team_notification_rules"],
    TeamPermissionSettingSerializerAction: ["manage_membership", "edit"],
    TeamPermissionSettingType: ["team_permission_settings"],
    TeamPermissionSettingValue: [
      "admins",
      "members",
      "organization",
      "user_access_manage",
      "teams_manage",
    ],
    TeamRefDataType: ["team"],
    TeamSyncAttributesFrequency: ["once", "continuously", "paused"],
    TeamSyncAttributesSource: ["github"],
    TeamSyncAttributesType: ["link", "provision"],
    TeamSyncBulkType: ["team_sync_bulk"],
    TeamType: ["team"],
    TeamsField: [
      "id",
      "name",
      "handle",
      "summary",
      "description",
      "avatar",
      "banner",
      "visible_modules",
      "hidden_modules",
      "created_at",
      "modified_at",
      "user_count",
      "link_count",
      "team_links",
      "user_team_permissions",
    ],
    UserTeamPermissionType: ["user_team_permissions"],
    UserTeamRole: ["admin"],
    UserTeamTeamType: ["team"],
    UserTeamType: ["team_memberships"],
    UserTeamUserType: ["users"],
    UsersType: ["users"],
  },
  oneOfMap: {
    TeamIncluded: ["User", "TeamLink", "UserTeamPermission"],
    UserTeamIncluded: ["User", "Team"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AddMemberTeamRequest: AddMemberTeamRequest,
    ConnectedTeamRef: ConnectedTeamRef,
    ConnectedTeamRefData: ConnectedTeamRefData,
    ConnectionsPagePagination: ConnectionsPagePagination,
    ConnectionsResponseMeta: ConnectionsResponseMeta,
    MemberTeam: MemberTeam,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToTeamLinkData: RelationshipToTeamLinkData,
    RelationshipToTeamLinks: RelationshipToTeamLinks,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUserTeamPermission: RelationshipToUserTeamPermission,
    RelationshipToUserTeamPermissionData: RelationshipToUserTeamPermissionData,
    RelationshipToUserTeamTeam: RelationshipToUserTeamTeam,
    RelationshipToUserTeamTeamData: RelationshipToUserTeamTeamData,
    RelationshipToUserTeamUser: RelationshipToUserTeamUser,
    RelationshipToUserTeamUserData: RelationshipToUserTeamUserData,
    RelationshipToUsers: RelationshipToUsers,
    Team: Team,
    TeamAttributes: TeamAttributes,
    TeamConnection: TeamConnection,
    TeamConnectionAttributes: TeamConnectionAttributes,
    TeamConnectionCreateData: TeamConnectionCreateData,
    TeamConnectionCreateRequest: TeamConnectionCreateRequest,
    TeamConnectionDeleteRequest: TeamConnectionDeleteRequest,
    TeamConnectionDeleteRequestDataItem: TeamConnectionDeleteRequestDataItem,
    TeamConnectionRelationships: TeamConnectionRelationships,
    TeamConnectionsResponse: TeamConnectionsResponse,
    TeamCreate: TeamCreate,
    TeamCreateAttributes: TeamCreateAttributes,
    TeamCreateRelationships: TeamCreateRelationships,
    TeamCreateRequest: TeamCreateRequest,
    TeamHierarchyLink: TeamHierarchyLink,
    TeamHierarchyLinkAttributes: TeamHierarchyLinkAttributes,
    TeamHierarchyLinkCreate: TeamHierarchyLinkCreate,
    TeamHierarchyLinkCreateRelationships: TeamHierarchyLinkCreateRelationships,
    TeamHierarchyLinkCreateRequest: TeamHierarchyLinkCreateRequest,
    TeamHierarchyLinkCreateTeam: TeamHierarchyLinkCreateTeam,
    TeamHierarchyLinkCreateTeamRelationship:
      TeamHierarchyLinkCreateTeamRelationship,
    TeamHierarchyLinkRelationships: TeamHierarchyLinkRelationships,
    TeamHierarchyLinkResponse: TeamHierarchyLinkResponse,
    TeamHierarchyLinkTeam: TeamHierarchyLinkTeam,
    TeamHierarchyLinkTeamAttributes: TeamHierarchyLinkTeamAttributes,
    TeamHierarchyLinkTeamRelationship: TeamHierarchyLinkTeamRelationship,
    TeamHierarchyLinksResponse: TeamHierarchyLinksResponse,
    TeamLink: TeamLink,
    TeamLinkAttributes: TeamLinkAttributes,
    TeamLinkCreate: TeamLinkCreate,
    TeamLinkCreateRequest: TeamLinkCreateRequest,
    TeamLinkResponse: TeamLinkResponse,
    TeamLinksResponse: TeamLinksResponse,
    TeamNotificationRule: TeamNotificationRule,
    TeamNotificationRuleAttributes: TeamNotificationRuleAttributes,
    TeamNotificationRuleAttributesEmail: TeamNotificationRuleAttributesEmail,
    TeamNotificationRuleAttributesMsTeams:
      TeamNotificationRuleAttributesMsTeams,
    TeamNotificationRuleAttributesPagerduty:
      TeamNotificationRuleAttributesPagerduty,
    TeamNotificationRuleAttributesSlack: TeamNotificationRuleAttributesSlack,
    TeamNotificationRuleRequest: TeamNotificationRuleRequest,
    TeamNotificationRuleResponse: TeamNotificationRuleResponse,
    TeamNotificationRulesResponse: TeamNotificationRulesResponse,
    TeamNotificationRulesResponseMeta: TeamNotificationRulesResponseMeta,
    TeamNotificationRulesResponseMetaPage:
      TeamNotificationRulesResponseMetaPage,
    TeamPermissionSetting: TeamPermissionSetting,
    TeamPermissionSettingAttributes: TeamPermissionSettingAttributes,
    TeamPermissionSettingResponse: TeamPermissionSettingResponse,
    TeamPermissionSettingUpdate: TeamPermissionSettingUpdate,
    TeamPermissionSettingUpdateAttributes:
      TeamPermissionSettingUpdateAttributes,
    TeamPermissionSettingUpdateRequest: TeamPermissionSettingUpdateRequest,
    TeamPermissionSettingsResponse: TeamPermissionSettingsResponse,
    TeamRef: TeamRef,
    TeamRefData: TeamRefData,
    TeamRelationships: TeamRelationships,
    TeamRelationshipsLinks: TeamRelationshipsLinks,
    TeamResponse: TeamResponse,
    TeamSyncAttributes: TeamSyncAttributes,
    TeamSyncData: TeamSyncData,
    TeamSyncRequest: TeamSyncRequest,
    TeamSyncResponse: TeamSyncResponse,
    TeamUpdate: TeamUpdate,
    TeamUpdateAttributes: TeamUpdateAttributes,
    TeamUpdateRelationships: TeamUpdateRelationships,
    TeamUpdateRequest: TeamUpdateRequest,
    TeamsHierarchyLinksResponseLinks: TeamsHierarchyLinksResponseLinks,
    TeamsHierarchyLinksResponseMeta: TeamsHierarchyLinksResponseMeta,
    TeamsHierarchyLinksResponseMetaPage: TeamsHierarchyLinksResponseMetaPage,
    TeamsResponse: TeamsResponse,
    TeamsResponseLinks: TeamsResponseLinks,
    TeamsResponseMeta: TeamsResponseMeta,
    TeamsResponseMetaPagination: TeamsResponseMetaPagination,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
    UserTeam: UserTeam,
    UserTeamAttributes: UserTeamAttributes,
    UserTeamCreate: UserTeamCreate,
    UserTeamPermission: UserTeamPermission,
    UserTeamPermissionAttributes: UserTeamPermissionAttributes,
    UserTeamRelationships: UserTeamRelationships,
    UserTeamRequest: UserTeamRequest,
    UserTeamResponse: UserTeamResponse,
    UserTeamUpdate: UserTeamUpdate,
    UserTeamUpdateRequest: UserTeamUpdateRequest,
    UserTeamsResponse: UserTeamsResponse,
  },
};
