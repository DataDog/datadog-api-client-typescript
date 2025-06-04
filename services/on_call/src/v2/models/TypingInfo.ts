import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DataRelationshipsTeams } from "./DataRelationshipsTeams";
import { DataRelationshipsTeamsDataItems } from "./DataRelationshipsTeamsDataItems";
import { Escalation } from "./Escalation";
import { EscalationPolicy } from "./EscalationPolicy";
import { EscalationPolicyCreateRequest } from "./EscalationPolicyCreateRequest";
import { EscalationPolicyCreateRequestData } from "./EscalationPolicyCreateRequestData";
import { EscalationPolicyCreateRequestDataAttributes } from "./EscalationPolicyCreateRequestDataAttributes";
import { EscalationPolicyCreateRequestDataAttributesStepsItems } from "./EscalationPolicyCreateRequestDataAttributesStepsItems";
import { EscalationPolicyCreateRequestDataRelationships } from "./EscalationPolicyCreateRequestDataRelationships";
import { EscalationPolicyData } from "./EscalationPolicyData";
import { EscalationPolicyDataAttributes } from "./EscalationPolicyDataAttributes";
import { EscalationPolicyDataRelationships } from "./EscalationPolicyDataRelationships";
import { EscalationPolicyDataRelationshipsSteps } from "./EscalationPolicyDataRelationshipsSteps";
import { EscalationPolicyDataRelationshipsStepsDataItems } from "./EscalationPolicyDataRelationshipsStepsDataItems";
import { EscalationPolicyStep } from "./EscalationPolicyStep";
import { EscalationPolicyStepAttributes } from "./EscalationPolicyStepAttributes";
import { EscalationPolicyStepRelationships } from "./EscalationPolicyStepRelationships";
import { EscalationPolicyStepTarget } from "./EscalationPolicyStepTarget";
import { EscalationPolicyUpdateRequest } from "./EscalationPolicyUpdateRequest";
import { EscalationPolicyUpdateRequestData } from "./EscalationPolicyUpdateRequestData";
import { EscalationPolicyUpdateRequestDataAttributes } from "./EscalationPolicyUpdateRequestDataAttributes";
import { EscalationPolicyUpdateRequestDataAttributesStepsItems } from "./EscalationPolicyUpdateRequestDataAttributesStepsItems";
import { EscalationPolicyUpdateRequestDataRelationships } from "./EscalationPolicyUpdateRequestDataRelationships";
import { EscalationPolicyUser } from "./EscalationPolicyUser";
import { EscalationPolicyUserAttributes } from "./EscalationPolicyUserAttributes";
import { EscalationRelationships } from "./EscalationRelationships";
import { EscalationRelationshipsResponders } from "./EscalationRelationshipsResponders";
import { EscalationRelationshipsRespondersDataItems } from "./EscalationRelationshipsRespondersDataItems";
import { EscalationTargets } from "./EscalationTargets";
import { Layer } from "./Layer";
import { LayerAttributes } from "./LayerAttributes";
import { LayerAttributesInterval } from "./LayerAttributesInterval";
import { LayerRelationships } from "./LayerRelationships";
import { LayerRelationshipsMembers } from "./LayerRelationshipsMembers";
import { LayerRelationshipsMembersDataItems } from "./LayerRelationshipsMembersDataItems";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { RoutingRule } from "./RoutingRule";
import { RoutingRuleAttributes } from "./RoutingRuleAttributes";
import { RoutingRuleRelationships } from "./RoutingRuleRelationships";
import { RoutingRuleRelationshipsPolicy } from "./RoutingRuleRelationshipsPolicy";
import { RoutingRuleRelationshipsPolicyData } from "./RoutingRuleRelationshipsPolicyData";
import { Schedule } from "./Schedule";
import { ScheduleCreateRequest } from "./ScheduleCreateRequest";
import { ScheduleCreateRequestData } from "./ScheduleCreateRequestData";
import { ScheduleCreateRequestDataAttributes } from "./ScheduleCreateRequestDataAttributes";
import { ScheduleCreateRequestDataAttributesLayersItems } from "./ScheduleCreateRequestDataAttributesLayersItems";
import { ScheduleCreateRequestDataRelationships } from "./ScheduleCreateRequestDataRelationships";
import { ScheduleData } from "./ScheduleData";
import { ScheduleDataAttributes } from "./ScheduleDataAttributes";
import { ScheduleDataRelationships } from "./ScheduleDataRelationships";
import { ScheduleDataRelationshipsLayers } from "./ScheduleDataRelationshipsLayers";
import { ScheduleDataRelationshipsLayersDataItems } from "./ScheduleDataRelationshipsLayersDataItems";
import { ScheduleMember } from "./ScheduleMember";
import { ScheduleMemberRelationships } from "./ScheduleMemberRelationships";
import { ScheduleMemberRelationshipsUser } from "./ScheduleMemberRelationshipsUser";
import { ScheduleMemberRelationshipsUserData } from "./ScheduleMemberRelationshipsUserData";
import { ScheduleRequestDataAttributesLayersItemsMembersItems } from "./ScheduleRequestDataAttributesLayersItemsMembersItems";
import { ScheduleRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleRequestDataAttributesLayersItemsMembersItemsUser";
import { ScheduleTarget } from "./ScheduleTarget";
import { ScheduleUpdateRequest } from "./ScheduleUpdateRequest";
import { ScheduleUpdateRequestData } from "./ScheduleUpdateRequestData";
import { ScheduleUpdateRequestDataAttributes } from "./ScheduleUpdateRequestDataAttributes";
import { ScheduleUpdateRequestDataAttributesLayersItems } from "./ScheduleUpdateRequestDataAttributesLayersItems";
import { ScheduleUpdateRequestDataRelationships } from "./ScheduleUpdateRequestDataRelationships";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleUserAttributes } from "./ScheduleUserAttributes";
import { SendSlackMessageAction } from "./SendSlackMessageAction";
import { SendTeamsMessageAction } from "./SendTeamsMessageAction";
import { Shift } from "./Shift";
import { ShiftData } from "./ShiftData";
import { ShiftDataAttributes } from "./ShiftDataAttributes";
import { ShiftDataRelationships } from "./ShiftDataRelationships";
import { ShiftDataRelationshipsUser } from "./ShiftDataRelationshipsUser";
import { ShiftDataRelationshipsUserData } from "./ShiftDataRelationshipsUserData";
import { TeamOnCallResponders } from "./TeamOnCallResponders";
import { TeamOnCallRespondersData } from "./TeamOnCallRespondersData";
import { TeamOnCallRespondersDataRelationships } from "./TeamOnCallRespondersDataRelationships";
import { TeamOnCallRespondersDataRelationshipsEscalations } from "./TeamOnCallRespondersDataRelationshipsEscalations";
import { TeamOnCallRespondersDataRelationshipsEscalationsDataItems } from "./TeamOnCallRespondersDataRelationshipsEscalationsDataItems";
import { TeamOnCallRespondersDataRelationshipsResponders } from "./TeamOnCallRespondersDataRelationshipsResponders";
import { TeamOnCallRespondersDataRelationshipsRespondersDataItems } from "./TeamOnCallRespondersDataRelationshipsRespondersDataItems";
import { TeamReference } from "./TeamReference";
import { TeamReferenceAttributes } from "./TeamReferenceAttributes";
import { TeamRoutingRules } from "./TeamRoutingRules";
import { TeamRoutingRulesData } from "./TeamRoutingRulesData";
import { TeamRoutingRulesDataRelationships } from "./TeamRoutingRulesDataRelationships";
import { TeamRoutingRulesDataRelationshipsRules } from "./TeamRoutingRulesDataRelationshipsRules";
import { TeamRoutingRulesDataRelationshipsRulesDataItems } from "./TeamRoutingRulesDataRelationshipsRulesDataItems";
import { TeamRoutingRulesRequest } from "./TeamRoutingRulesRequest";
import { TeamRoutingRulesRequestData } from "./TeamRoutingRulesRequestData";
import { TeamRoutingRulesRequestDataAttributes } from "./TeamRoutingRulesRequestDataAttributes";
import { TeamRoutingRulesRequestRule } from "./TeamRoutingRulesRequestRule";
import { TeamTarget } from "./TeamTarget";
import { TimeRestriction } from "./TimeRestriction";
import { TimeRestrictions } from "./TimeRestrictions";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UserTarget } from "./UserTarget";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DataRelationshipsTeamsDataItemsType: ["teams"],
    EscalationPolicyCreateRequestDataType: ["policies"],
    EscalationPolicyDataRelationshipsStepsDataItemsType: ["steps"],
    EscalationPolicyDataType: ["policies"],
    EscalationPolicyStepAttributesAssignment: ["default", "round-robin"],
    EscalationPolicyStepTargetType: ["users", "schedules", "teams"],
    EscalationPolicyStepType: ["steps"],
    EscalationPolicyUpdateRequestDataType: ["policies"],
    EscalationPolicyUserType: ["users"],
    EscalationRelationshipsRespondersDataItemsType: ["users"],
    EscalationType: ["escalation_policy_steps"],
    LayerRelationshipsMembersDataItemsType: ["members"],
    LayerType: ["layers"],
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    RoutingRuleRelationshipsPolicyDataType: ["policies"],
    RoutingRuleType: ["team_routing_rules"],
    ScheduleCreateRequestDataType: ["schedules"],
    ScheduleDataRelationshipsLayersDataItemsType: ["layers"],
    ScheduleDataType: ["schedules"],
    ScheduleMemberRelationshipsUserDataType: ["users"],
    ScheduleMemberType: ["members"],
    ScheduleTargetType: ["schedules"],
    ScheduleUpdateRequestDataType: ["schedules"],
    ScheduleUserType: ["users"],
    SendSlackMessageActionType: ["send_slack_message"],
    SendTeamsMessageActionType: ["send_teams_message"],
    ShiftDataRelationshipsUserDataType: ["users"],
    ShiftDataType: ["shifts"],
    TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType: [
      "escalation_policy_steps",
    ],
    TeamOnCallRespondersDataRelationshipsRespondersDataItemsType: ["users"],
    TeamOnCallRespondersDataType: ["team_oncall_responders"],
    TeamReferenceType: ["teams"],
    TeamRoutingRulesDataRelationshipsRulesDataItemsType: ["team_routing_rules"],
    TeamRoutingRulesDataType: ["team_routing_rules"],
    TeamRoutingRulesRequestDataType: ["team_routing_rules"],
    TeamTargetType: ["teams"],
    Urgency: ["low", "high", "dynamic"],
    UserAttributesStatus: ["active", "deactivated", "pending"],
    UserTargetType: ["users"],
    UsersType: ["users"],
    Weekday: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
  },
  oneOfMap: {
    EscalationPolicyIncluded: [
      "TeamReference",
      "EscalationPolicyStep",
      "EscalationPolicyUser",
      "ScheduleData",
    ],
    EscalationTarget: ["TeamTarget", "UserTarget", "ScheduleTarget"],
    RoutingRuleAction: ["SendSlackMessageAction", "SendTeamsMessageAction"],
    ScheduleDataIncludedItem: [
      "TeamReference",
      "Layer",
      "ScheduleMember",
      "ScheduleUser",
    ],
    ShiftIncluded: ["ScheduleUser"],
    TeamOnCallRespondersIncluded: ["User", "Escalation"],
    TeamRoutingRulesIncluded: ["RoutingRule"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DataRelationshipsTeams: DataRelationshipsTeams,
    DataRelationshipsTeamsDataItems: DataRelationshipsTeamsDataItems,
    Escalation: Escalation,
    EscalationPolicy: EscalationPolicy,
    EscalationPolicyCreateRequest: EscalationPolicyCreateRequest,
    EscalationPolicyCreateRequestData: EscalationPolicyCreateRequestData,
    EscalationPolicyCreateRequestDataAttributes:
      EscalationPolicyCreateRequestDataAttributes,
    EscalationPolicyCreateRequestDataAttributesStepsItems:
      EscalationPolicyCreateRequestDataAttributesStepsItems,
    EscalationPolicyCreateRequestDataRelationships:
      EscalationPolicyCreateRequestDataRelationships,
    EscalationPolicyData: EscalationPolicyData,
    EscalationPolicyDataAttributes: EscalationPolicyDataAttributes,
    EscalationPolicyDataRelationships: EscalationPolicyDataRelationships,
    EscalationPolicyDataRelationshipsSteps:
      EscalationPolicyDataRelationshipsSteps,
    EscalationPolicyDataRelationshipsStepsDataItems:
      EscalationPolicyDataRelationshipsStepsDataItems,
    EscalationPolicyStep: EscalationPolicyStep,
    EscalationPolicyStepAttributes: EscalationPolicyStepAttributes,
    EscalationPolicyStepRelationships: EscalationPolicyStepRelationships,
    EscalationPolicyStepTarget: EscalationPolicyStepTarget,
    EscalationPolicyUpdateRequest: EscalationPolicyUpdateRequest,
    EscalationPolicyUpdateRequestData: EscalationPolicyUpdateRequestData,
    EscalationPolicyUpdateRequestDataAttributes:
      EscalationPolicyUpdateRequestDataAttributes,
    EscalationPolicyUpdateRequestDataAttributesStepsItems:
      EscalationPolicyUpdateRequestDataAttributesStepsItems,
    EscalationPolicyUpdateRequestDataRelationships:
      EscalationPolicyUpdateRequestDataRelationships,
    EscalationPolicyUser: EscalationPolicyUser,
    EscalationPolicyUserAttributes: EscalationPolicyUserAttributes,
    EscalationRelationships: EscalationRelationships,
    EscalationRelationshipsResponders: EscalationRelationshipsResponders,
    EscalationRelationshipsRespondersDataItems:
      EscalationRelationshipsRespondersDataItems,
    EscalationTargets: EscalationTargets,
    Layer: Layer,
    LayerAttributes: LayerAttributes,
    LayerAttributesInterval: LayerAttributesInterval,
    LayerRelationships: LayerRelationships,
    LayerRelationshipsMembers: LayerRelationshipsMembers,
    LayerRelationshipsMembersDataItems: LayerRelationshipsMembersDataItems,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    RoutingRule: RoutingRule,
    RoutingRuleAttributes: RoutingRuleAttributes,
    RoutingRuleRelationships: RoutingRuleRelationships,
    RoutingRuleRelationshipsPolicy: RoutingRuleRelationshipsPolicy,
    RoutingRuleRelationshipsPolicyData: RoutingRuleRelationshipsPolicyData,
    Schedule: Schedule,
    ScheduleCreateRequest: ScheduleCreateRequest,
    ScheduleCreateRequestData: ScheduleCreateRequestData,
    ScheduleCreateRequestDataAttributes: ScheduleCreateRequestDataAttributes,
    ScheduleCreateRequestDataAttributesLayersItems:
      ScheduleCreateRequestDataAttributesLayersItems,
    ScheduleCreateRequestDataRelationships:
      ScheduleCreateRequestDataRelationships,
    ScheduleData: ScheduleData,
    ScheduleDataAttributes: ScheduleDataAttributes,
    ScheduleDataRelationships: ScheduleDataRelationships,
    ScheduleDataRelationshipsLayers: ScheduleDataRelationshipsLayers,
    ScheduleDataRelationshipsLayersDataItems:
      ScheduleDataRelationshipsLayersDataItems,
    ScheduleMember: ScheduleMember,
    ScheduleMemberRelationships: ScheduleMemberRelationships,
    ScheduleMemberRelationshipsUser: ScheduleMemberRelationshipsUser,
    ScheduleMemberRelationshipsUserData: ScheduleMemberRelationshipsUserData,
    ScheduleRequestDataAttributesLayersItemsMembersItems:
      ScheduleRequestDataAttributesLayersItemsMembersItems,
    ScheduleRequestDataAttributesLayersItemsMembersItemsUser:
      ScheduleRequestDataAttributesLayersItemsMembersItemsUser,
    ScheduleTarget: ScheduleTarget,
    ScheduleUpdateRequest: ScheduleUpdateRequest,
    ScheduleUpdateRequestData: ScheduleUpdateRequestData,
    ScheduleUpdateRequestDataAttributes: ScheduleUpdateRequestDataAttributes,
    ScheduleUpdateRequestDataAttributesLayersItems:
      ScheduleUpdateRequestDataAttributesLayersItems,
    ScheduleUpdateRequestDataRelationships:
      ScheduleUpdateRequestDataRelationships,
    ScheduleUser: ScheduleUser,
    ScheduleUserAttributes: ScheduleUserAttributes,
    SendSlackMessageAction: SendSlackMessageAction,
    SendTeamsMessageAction: SendTeamsMessageAction,
    Shift: Shift,
    ShiftData: ShiftData,
    ShiftDataAttributes: ShiftDataAttributes,
    ShiftDataRelationships: ShiftDataRelationships,
    ShiftDataRelationshipsUser: ShiftDataRelationshipsUser,
    ShiftDataRelationshipsUserData: ShiftDataRelationshipsUserData,
    TeamOnCallResponders: TeamOnCallResponders,
    TeamOnCallRespondersData: TeamOnCallRespondersData,
    TeamOnCallRespondersDataRelationships:
      TeamOnCallRespondersDataRelationships,
    TeamOnCallRespondersDataRelationshipsEscalations:
      TeamOnCallRespondersDataRelationshipsEscalations,
    TeamOnCallRespondersDataRelationshipsEscalationsDataItems:
      TeamOnCallRespondersDataRelationshipsEscalationsDataItems,
    TeamOnCallRespondersDataRelationshipsResponders:
      TeamOnCallRespondersDataRelationshipsResponders,
    TeamOnCallRespondersDataRelationshipsRespondersDataItems:
      TeamOnCallRespondersDataRelationshipsRespondersDataItems,
    TeamReference: TeamReference,
    TeamReferenceAttributes: TeamReferenceAttributes,
    TeamRoutingRules: TeamRoutingRules,
    TeamRoutingRulesData: TeamRoutingRulesData,
    TeamRoutingRulesDataRelationships: TeamRoutingRulesDataRelationships,
    TeamRoutingRulesDataRelationshipsRules:
      TeamRoutingRulesDataRelationshipsRules,
    TeamRoutingRulesDataRelationshipsRulesDataItems:
      TeamRoutingRulesDataRelationshipsRulesDataItems,
    TeamRoutingRulesRequest: TeamRoutingRulesRequest,
    TeamRoutingRulesRequestData: TeamRoutingRulesRequestData,
    TeamRoutingRulesRequestDataAttributes:
      TeamRoutingRulesRequestDataAttributes,
    TeamRoutingRulesRequestRule: TeamRoutingRulesRequestRule,
    TeamTarget: TeamTarget,
    TimeRestriction: TimeRestriction,
    TimeRestrictions: TimeRestrictions,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
    UserTarget: UserTarget,
  },
};
