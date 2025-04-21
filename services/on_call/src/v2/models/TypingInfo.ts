import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { EscalationPolicy } from "./EscalationPolicy";
import { EscalationPolicyCreateRequest } from "./EscalationPolicyCreateRequest";
import { EscalationPolicyCreateRequestData } from "./EscalationPolicyCreateRequestData";
import { EscalationPolicyCreateRequestDataAttributes } from "./EscalationPolicyCreateRequestDataAttributes";
import { EscalationPolicyCreateRequestDataAttributesStepsItems } from "./EscalationPolicyCreateRequestDataAttributesStepsItems";
import { EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItems } from "./EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItems";
import { EscalationPolicyCreateRequestDataRelationships } from "./EscalationPolicyCreateRequestDataRelationships";
import { EscalationPolicyCreateRequestDataRelationshipsTeams } from "./EscalationPolicyCreateRequestDataRelationshipsTeams";
import { EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems } from "./EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems";
import { EscalationPolicyData } from "./EscalationPolicyData";
import { EscalationPolicyDataAttributes } from "./EscalationPolicyDataAttributes";
import { EscalationPolicyDataRelationships } from "./EscalationPolicyDataRelationships";
import { EscalationPolicyDataRelationshipsSteps } from "./EscalationPolicyDataRelationshipsSteps";
import { EscalationPolicyDataRelationshipsStepsDataItems } from "./EscalationPolicyDataRelationshipsStepsDataItems";
import { EscalationPolicyDataRelationshipsTeams } from "./EscalationPolicyDataRelationshipsTeams";
import { EscalationPolicyDataRelationshipsTeamsDataItems } from "./EscalationPolicyDataRelationshipsTeamsDataItems";
import { EscalationPolicyStep } from "./EscalationPolicyStep";
import { EscalationPolicyStepAttributes } from "./EscalationPolicyStepAttributes";
import { EscalationPolicyStepRelationships } from "./EscalationPolicyStepRelationships";
import { EscalationPolicyUpdateRequest } from "./EscalationPolicyUpdateRequest";
import { EscalationPolicyUpdateRequestData } from "./EscalationPolicyUpdateRequestData";
import { EscalationPolicyUpdateRequestDataAttributes } from "./EscalationPolicyUpdateRequestDataAttributes";
import { EscalationPolicyUpdateRequestDataAttributesStepsItems } from "./EscalationPolicyUpdateRequestDataAttributesStepsItems";
import { EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems } from "./EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems";
import { EscalationPolicyUpdateRequestDataRelationships } from "./EscalationPolicyUpdateRequestDataRelationships";
import { EscalationPolicyUpdateRequestDataRelationshipsTeams } from "./EscalationPolicyUpdateRequestDataRelationshipsTeams";
import { EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems } from "./EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems";
import { Layer } from "./Layer";
import { LayerAttributes } from "./LayerAttributes";
import { LayerAttributesInterval } from "./LayerAttributesInterval";
import { LayerAttributesRestrictionsItems } from "./LayerAttributesRestrictionsItems";
import { LayerRelationships } from "./LayerRelationships";
import { LayerRelationshipsMembers } from "./LayerRelationshipsMembers";
import { LayerRelationshipsMembersDataItems } from "./LayerRelationshipsMembersDataItems";
import { Schedule } from "./Schedule";
import { ScheduleCreateRequest } from "./ScheduleCreateRequest";
import { ScheduleCreateRequestData } from "./ScheduleCreateRequestData";
import { ScheduleCreateRequestDataAttributes } from "./ScheduleCreateRequestDataAttributes";
import { ScheduleCreateRequestDataAttributesLayersItems } from "./ScheduleCreateRequestDataAttributesLayersItems";
import { ScheduleCreateRequestDataAttributesLayersItemsInterval } from "./ScheduleCreateRequestDataAttributesLayersItemsInterval";
import { ScheduleCreateRequestDataAttributesLayersItemsMembersItems } from "./ScheduleCreateRequestDataAttributesLayersItemsMembersItems";
import { ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser";
import { ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems } from "./ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems";
import { ScheduleCreateRequestDataRelationships } from "./ScheduleCreateRequestDataRelationships";
import { ScheduleCreateRequestDataRelationshipsTeams } from "./ScheduleCreateRequestDataRelationshipsTeams";
import { ScheduleCreateRequestDataRelationshipsTeamsDataItems } from "./ScheduleCreateRequestDataRelationshipsTeamsDataItems";
import { ScheduleData } from "./ScheduleData";
import { ScheduleDataAttributes } from "./ScheduleDataAttributes";
import { ScheduleDataRelationships } from "./ScheduleDataRelationships";
import { ScheduleDataRelationshipsLayers } from "./ScheduleDataRelationshipsLayers";
import { ScheduleDataRelationshipsLayersDataItems } from "./ScheduleDataRelationshipsLayersDataItems";
import { ScheduleDataRelationshipsTeams } from "./ScheduleDataRelationshipsTeams";
import { ScheduleDataRelationshipsTeamsDataItems } from "./ScheduleDataRelationshipsTeamsDataItems";
import { ScheduleMember } from "./ScheduleMember";
import { ScheduleMemberRelationships } from "./ScheduleMemberRelationships";
import { ScheduleMemberRelationshipsUser } from "./ScheduleMemberRelationshipsUser";
import { ScheduleMemberRelationshipsUserData } from "./ScheduleMemberRelationshipsUserData";
import { ScheduleTarget } from "./ScheduleTarget";
import { ScheduleUpdateRequest } from "./ScheduleUpdateRequest";
import { ScheduleUpdateRequestData } from "./ScheduleUpdateRequestData";
import { ScheduleUpdateRequestDataAttributes } from "./ScheduleUpdateRequestDataAttributes";
import { ScheduleUpdateRequestDataAttributesLayersItems } from "./ScheduleUpdateRequestDataAttributesLayersItems";
import { ScheduleUpdateRequestDataAttributesLayersItemsInterval } from "./ScheduleUpdateRequestDataAttributesLayersItemsInterval";
import { ScheduleUpdateRequestDataAttributesLayersItemsMembersItems } from "./ScheduleUpdateRequestDataAttributesLayersItemsMembersItems";
import { ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser";
import { ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItems } from "./ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItems";
import { ScheduleUpdateRequestDataRelationships } from "./ScheduleUpdateRequestDataRelationships";
import { ScheduleUpdateRequestDataRelationshipsTeams } from "./ScheduleUpdateRequestDataRelationshipsTeams";
import { ScheduleUpdateRequestDataRelationshipsTeamsDataItems } from "./ScheduleUpdateRequestDataRelationshipsTeamsDataItems";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleUserAttributes } from "./ScheduleUserAttributes";
import { TeamReference } from "./TeamReference";
import { TeamReferenceAttributes } from "./TeamReferenceAttributes";
import { TeamReferenceRelationships } from "./TeamReferenceRelationships";
import { TeamReferenceRelationshipsOncallUsers } from "./TeamReferenceRelationshipsOncallUsers";
import { TeamReferenceRelationshipsOncallUsersDataItems } from "./TeamReferenceRelationshipsOncallUsersDataItems";
import { TeamTarget } from "./TeamTarget";
import { UserTarget } from "./UserTarget";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    EscalationPolicyCreateRequestDataAttributesStepsItemsAssignment: [
      "default",
      "round-robin",
    ],
    EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItemsType: [
      "users",
      "schedules",
      "teams",
    ],
    EscalationPolicyCreateRequestDataRelationshipsTeamsDataItemsType: ["teams"],
    EscalationPolicyCreateRequestDataType: ["policies"],
    EscalationPolicyDataRelationshipsStepsDataItemsType: ["steps"],
    EscalationPolicyDataRelationshipsTeamsDataItemsType: ["teams"],
    EscalationPolicyDataType: ["policies"],
    EscalationPolicyStepAttributesAssignment: ["default", "round-robin"],
    EscalationPolicyStepType: ["steps"],
    EscalationPolicyUpdateRequestDataAttributesStepsItemsAssignment: [
      "default",
      "round-robin",
    ],
    EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItemsType: [
      "users",
      "schedules",
      "teams",
    ],
    EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItemsType: ["teams"],
    EscalationPolicyUpdateRequestDataType: ["policies"],
    LayerAttributesRestrictionsItemsEndDay: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    LayerAttributesRestrictionsItemsStartDay: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    LayerRelationshipsMembersDataItemsType: ["members"],
    LayerType: ["layers"],
    ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsEndDay: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsStartDay: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    ScheduleCreateRequestDataRelationshipsTeamsDataItemsType: ["teams"],
    ScheduleCreateRequestDataType: ["schedules"],
    ScheduleDataRelationshipsLayersDataItemsType: ["layers"],
    ScheduleDataRelationshipsTeamsDataItemsType: ["teams"],
    ScheduleDataType: ["schedules"],
    ScheduleMemberRelationshipsUserDataType: ["users"],
    ScheduleMemberType: ["members"],
    ScheduleTargetType: ["schedules"],
    ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    ScheduleUpdateRequestDataRelationshipsTeamsDataItemsType: ["teams"],
    ScheduleUpdateRequestDataType: ["schedules"],
    ScheduleUserType: ["users"],
    TeamReferenceRelationshipsOncallUsersDataItemsType: ["users"],
    TeamReferenceType: ["teams"],
    TeamTargetType: ["teams"],
    UserTargetType: ["users"],
  },
  oneOfMap: {
    EscalationPolicyIncluded: [
      "TeamReference",
      "EscalationPolicyStep",
      "UserTarget",
      "ScheduleTarget",
      "TeamTarget",
    ],
    EscalationTarget: ["TeamTarget", "UserTarget", "ScheduleTarget"],
    ScheduleDataIncludedItem: [
      "TeamReference",
      "Layer",
      "ScheduleMember",
      "ScheduleUser",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    EscalationPolicy: EscalationPolicy,
    EscalationPolicyCreateRequest: EscalationPolicyCreateRequest,
    EscalationPolicyCreateRequestData: EscalationPolicyCreateRequestData,
    EscalationPolicyCreateRequestDataAttributes:
      EscalationPolicyCreateRequestDataAttributes,
    EscalationPolicyCreateRequestDataAttributesStepsItems:
      EscalationPolicyCreateRequestDataAttributesStepsItems,
    EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItems:
      EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItems,
    EscalationPolicyCreateRequestDataRelationships:
      EscalationPolicyCreateRequestDataRelationships,
    EscalationPolicyCreateRequestDataRelationshipsTeams:
      EscalationPolicyCreateRequestDataRelationshipsTeams,
    EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems:
      EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems,
    EscalationPolicyData: EscalationPolicyData,
    EscalationPolicyDataAttributes: EscalationPolicyDataAttributes,
    EscalationPolicyDataRelationships: EscalationPolicyDataRelationships,
    EscalationPolicyDataRelationshipsSteps:
      EscalationPolicyDataRelationshipsSteps,
    EscalationPolicyDataRelationshipsStepsDataItems:
      EscalationPolicyDataRelationshipsStepsDataItems,
    EscalationPolicyDataRelationshipsTeams:
      EscalationPolicyDataRelationshipsTeams,
    EscalationPolicyDataRelationshipsTeamsDataItems:
      EscalationPolicyDataRelationshipsTeamsDataItems,
    EscalationPolicyStep: EscalationPolicyStep,
    EscalationPolicyStepAttributes: EscalationPolicyStepAttributes,
    EscalationPolicyStepRelationships: EscalationPolicyStepRelationships,
    EscalationPolicyUpdateRequest: EscalationPolicyUpdateRequest,
    EscalationPolicyUpdateRequestData: EscalationPolicyUpdateRequestData,
    EscalationPolicyUpdateRequestDataAttributes:
      EscalationPolicyUpdateRequestDataAttributes,
    EscalationPolicyUpdateRequestDataAttributesStepsItems:
      EscalationPolicyUpdateRequestDataAttributesStepsItems,
    EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems:
      EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems,
    EscalationPolicyUpdateRequestDataRelationships:
      EscalationPolicyUpdateRequestDataRelationships,
    EscalationPolicyUpdateRequestDataRelationshipsTeams:
      EscalationPolicyUpdateRequestDataRelationshipsTeams,
    EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems:
      EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems,
    Layer: Layer,
    LayerAttributes: LayerAttributes,
    LayerAttributesInterval: LayerAttributesInterval,
    LayerAttributesRestrictionsItems: LayerAttributesRestrictionsItems,
    LayerRelationships: LayerRelationships,
    LayerRelationshipsMembers: LayerRelationshipsMembers,
    LayerRelationshipsMembersDataItems: LayerRelationshipsMembersDataItems,
    Schedule: Schedule,
    ScheduleCreateRequest: ScheduleCreateRequest,
    ScheduleCreateRequestData: ScheduleCreateRequestData,
    ScheduleCreateRequestDataAttributes: ScheduleCreateRequestDataAttributes,
    ScheduleCreateRequestDataAttributesLayersItems:
      ScheduleCreateRequestDataAttributesLayersItems,
    ScheduleCreateRequestDataAttributesLayersItemsInterval:
      ScheduleCreateRequestDataAttributesLayersItemsInterval,
    ScheduleCreateRequestDataAttributesLayersItemsMembersItems:
      ScheduleCreateRequestDataAttributesLayersItemsMembersItems,
    ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser:
      ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser,
    ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems:
      ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems,
    ScheduleCreateRequestDataRelationships:
      ScheduleCreateRequestDataRelationships,
    ScheduleCreateRequestDataRelationshipsTeams:
      ScheduleCreateRequestDataRelationshipsTeams,
    ScheduleCreateRequestDataRelationshipsTeamsDataItems:
      ScheduleCreateRequestDataRelationshipsTeamsDataItems,
    ScheduleData: ScheduleData,
    ScheduleDataAttributes: ScheduleDataAttributes,
    ScheduleDataRelationships: ScheduleDataRelationships,
    ScheduleDataRelationshipsLayers: ScheduleDataRelationshipsLayers,
    ScheduleDataRelationshipsLayersDataItems:
      ScheduleDataRelationshipsLayersDataItems,
    ScheduleDataRelationshipsTeams: ScheduleDataRelationshipsTeams,
    ScheduleDataRelationshipsTeamsDataItems:
      ScheduleDataRelationshipsTeamsDataItems,
    ScheduleMember: ScheduleMember,
    ScheduleMemberRelationships: ScheduleMemberRelationships,
    ScheduleMemberRelationshipsUser: ScheduleMemberRelationshipsUser,
    ScheduleMemberRelationshipsUserData: ScheduleMemberRelationshipsUserData,
    ScheduleTarget: ScheduleTarget,
    ScheduleUpdateRequest: ScheduleUpdateRequest,
    ScheduleUpdateRequestData: ScheduleUpdateRequestData,
    ScheduleUpdateRequestDataAttributes: ScheduleUpdateRequestDataAttributes,
    ScheduleUpdateRequestDataAttributesLayersItems:
      ScheduleUpdateRequestDataAttributesLayersItems,
    ScheduleUpdateRequestDataAttributesLayersItemsInterval:
      ScheduleUpdateRequestDataAttributesLayersItemsInterval,
    ScheduleUpdateRequestDataAttributesLayersItemsMembersItems:
      ScheduleUpdateRequestDataAttributesLayersItemsMembersItems,
    ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser:
      ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser,
    ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItems:
      ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItems,
    ScheduleUpdateRequestDataRelationships:
      ScheduleUpdateRequestDataRelationships,
    ScheduleUpdateRequestDataRelationshipsTeams:
      ScheduleUpdateRequestDataRelationshipsTeams,
    ScheduleUpdateRequestDataRelationshipsTeamsDataItems:
      ScheduleUpdateRequestDataRelationshipsTeamsDataItems,
    ScheduleUser: ScheduleUser,
    ScheduleUserAttributes: ScheduleUserAttributes,
    TeamReference: TeamReference,
    TeamReferenceAttributes: TeamReferenceAttributes,
    TeamReferenceRelationships: TeamReferenceRelationships,
    TeamReferenceRelationshipsOncallUsers:
      TeamReferenceRelationshipsOncallUsers,
    TeamReferenceRelationshipsOncallUsersDataItems:
      TeamReferenceRelationshipsOncallUsersDataItems,
    TeamTarget: TeamTarget,
    UserTarget: UserTarget,
  },
};
