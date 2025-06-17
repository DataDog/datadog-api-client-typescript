import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AddMemberTeamRequest } from "./AddMemberTeamRequest";
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
import { TeamCreate } from "./TeamCreate";
import { TeamCreateAttributes } from "./TeamCreateAttributes";
import { TeamCreateRelationships } from "./TeamCreateRelationships";
import { TeamCreateRequest } from "./TeamCreateRequest";
import { TeamLink } from "./TeamLink";
import { TeamLinkAttributes } from "./TeamLinkAttributes";
import { TeamLinkCreate } from "./TeamLinkCreate";
import { TeamLinkCreateRequest } from "./TeamLinkCreateRequest";
import { TeamLinkResponse } from "./TeamLinkResponse";
import { TeamLinksResponse } from "./TeamLinksResponse";
import { TeamPermissionSetting } from "./TeamPermissionSetting";
import { TeamPermissionSettingAttributes } from "./TeamPermissionSettingAttributes";
import { TeamPermissionSettingResponse } from "./TeamPermissionSettingResponse";
import { TeamPermissionSettingUpdate } from "./TeamPermissionSettingUpdate";
import { TeamPermissionSettingUpdateAttributes } from "./TeamPermissionSettingUpdateAttributes";
import { TeamPermissionSettingUpdateRequest } from "./TeamPermissionSettingUpdateRequest";
import { TeamPermissionSettingsResponse } from "./TeamPermissionSettingsResponse";
import { TeamRelationships } from "./TeamRelationships";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";
import { TeamResponse } from "./TeamResponse";
import { TeamUpdate } from "./TeamUpdate";
import { TeamUpdateAttributes } from "./TeamUpdateAttributes";
import { TeamUpdateRelationships } from "./TeamUpdateRelationships";
import { TeamUpdateRequest } from "./TeamUpdateRequest";
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
    TeamLinkType: ["team_links"],
    TeamPermissionSettingSerializerAction: ["manage_membership", "edit"],
    TeamPermissionSettingType: ["team_permission_settings"],
    TeamPermissionSettingValue: [
      "admins",
      "members",
      "organization",
      "user_access_manage",
      "teams_manage",
    ],
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
    TeamCreate: TeamCreate,
    TeamCreateAttributes: TeamCreateAttributes,
    TeamCreateRelationships: TeamCreateRelationships,
    TeamCreateRequest: TeamCreateRequest,
    TeamLink: TeamLink,
    TeamLinkAttributes: TeamLinkAttributes,
    TeamLinkCreate: TeamLinkCreate,
    TeamLinkCreateRequest: TeamLinkCreateRequest,
    TeamLinkResponse: TeamLinkResponse,
    TeamLinksResponse: TeamLinksResponse,
    TeamPermissionSetting: TeamPermissionSetting,
    TeamPermissionSettingAttributes: TeamPermissionSettingAttributes,
    TeamPermissionSettingResponse: TeamPermissionSettingResponse,
    TeamPermissionSettingUpdate: TeamPermissionSettingUpdate,
    TeamPermissionSettingUpdateAttributes:
      TeamPermissionSettingUpdateAttributes,
    TeamPermissionSettingUpdateRequest: TeamPermissionSettingUpdateRequest,
    TeamPermissionSettingsResponse: TeamPermissionSettingsResponse,
    TeamRelationships: TeamRelationships,
    TeamRelationshipsLinks: TeamRelationshipsLinks,
    TeamResponse: TeamResponse,
    TeamUpdate: TeamUpdate,
    TeamUpdateAttributes: TeamUpdateAttributes,
    TeamUpdateRelationships: TeamUpdateRelationships,
    TeamUpdateRequest: TeamUpdateRequest,
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
