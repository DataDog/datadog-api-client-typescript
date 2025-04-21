import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DowntimeCreateRequest } from "./DowntimeCreateRequest";
import { DowntimeCreateRequestAttributes } from "./DowntimeCreateRequestAttributes";
import { DowntimeCreateRequestData } from "./DowntimeCreateRequestData";
import { DowntimeMeta } from "./DowntimeMeta";
import { DowntimeMetaPage } from "./DowntimeMetaPage";
import { DowntimeMonitorIdentifierId } from "./DowntimeMonitorIdentifierId";
import { DowntimeMonitorIdentifierTags } from "./DowntimeMonitorIdentifierTags";
import { DowntimeMonitorIncludedAttributes } from "./DowntimeMonitorIncludedAttributes";
import { DowntimeMonitorIncludedItem } from "./DowntimeMonitorIncludedItem";
import { DowntimeRelationships } from "./DowntimeRelationships";
import { DowntimeRelationshipsCreatedBy } from "./DowntimeRelationshipsCreatedBy";
import { DowntimeRelationshipsCreatedByData } from "./DowntimeRelationshipsCreatedByData";
import { DowntimeRelationshipsMonitor } from "./DowntimeRelationshipsMonitor";
import { DowntimeRelationshipsMonitorData } from "./DowntimeRelationshipsMonitorData";
import { DowntimeResponse } from "./DowntimeResponse";
import { DowntimeResponseAttributes } from "./DowntimeResponseAttributes";
import { DowntimeResponseData } from "./DowntimeResponseData";
import { DowntimeScheduleCurrentDowntimeResponse } from "./DowntimeScheduleCurrentDowntimeResponse";
import { DowntimeScheduleOneTimeCreateUpdateRequest } from "./DowntimeScheduleOneTimeCreateUpdateRequest";
import { DowntimeScheduleOneTimeResponse } from "./DowntimeScheduleOneTimeResponse";
import { DowntimeScheduleRecurrenceCreateUpdateRequest } from "./DowntimeScheduleRecurrenceCreateUpdateRequest";
import { DowntimeScheduleRecurrenceResponse } from "./DowntimeScheduleRecurrenceResponse";
import { DowntimeScheduleRecurrencesCreateRequest } from "./DowntimeScheduleRecurrencesCreateRequest";
import { DowntimeScheduleRecurrencesResponse } from "./DowntimeScheduleRecurrencesResponse";
import { DowntimeScheduleRecurrencesUpdateRequest } from "./DowntimeScheduleRecurrencesUpdateRequest";
import { DowntimeUpdateRequest } from "./DowntimeUpdateRequest";
import { DowntimeUpdateRequestAttributes } from "./DowntimeUpdateRequestAttributes";
import { DowntimeUpdateRequestData } from "./DowntimeUpdateRequestData";
import { ListDowntimesResponse } from "./ListDowntimesResponse";
import { MonitorDowntimeMatchResponse } from "./MonitorDowntimeMatchResponse";
import { MonitorDowntimeMatchResponseAttributes } from "./MonitorDowntimeMatchResponseAttributes";
import { MonitorDowntimeMatchResponseData } from "./MonitorDowntimeMatchResponseData";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DowntimeIncludedMonitorType: ["monitors"],
    DowntimeNotifyEndStateActions: ["canceled", "expired"],
    DowntimeNotifyEndStateTypes: ["alert", "no data", "warn"],
    DowntimeResourceType: ["downtime"],
    DowntimeStatus: ["active", "canceled", "ended", "scheduled"],
    MonitorDowntimeMatchResourceType: ["downtime_match"],
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    DowntimeMonitorIdentifier: [
      "DowntimeMonitorIdentifierId",
      "DowntimeMonitorIdentifierTags",
    ],
    DowntimeResponseIncludedItem: ["User", "DowntimeMonitorIncludedItem"],
    DowntimeScheduleCreateRequest: [
      "DowntimeScheduleRecurrencesCreateRequest",
      "DowntimeScheduleOneTimeCreateUpdateRequest",
    ],
    DowntimeScheduleResponse: [
      "DowntimeScheduleRecurrencesResponse",
      "DowntimeScheduleOneTimeResponse",
    ],
    DowntimeScheduleUpdateRequest: [
      "DowntimeScheduleRecurrencesUpdateRequest",
      "DowntimeScheduleOneTimeCreateUpdateRequest",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DowntimeCreateRequest: DowntimeCreateRequest,
    DowntimeCreateRequestAttributes: DowntimeCreateRequestAttributes,
    DowntimeCreateRequestData: DowntimeCreateRequestData,
    DowntimeMeta: DowntimeMeta,
    DowntimeMetaPage: DowntimeMetaPage,
    DowntimeMonitorIdentifierId: DowntimeMonitorIdentifierId,
    DowntimeMonitorIdentifierTags: DowntimeMonitorIdentifierTags,
    DowntimeMonitorIncludedAttributes: DowntimeMonitorIncludedAttributes,
    DowntimeMonitorIncludedItem: DowntimeMonitorIncludedItem,
    DowntimeRelationships: DowntimeRelationships,
    DowntimeRelationshipsCreatedBy: DowntimeRelationshipsCreatedBy,
    DowntimeRelationshipsCreatedByData: DowntimeRelationshipsCreatedByData,
    DowntimeRelationshipsMonitor: DowntimeRelationshipsMonitor,
    DowntimeRelationshipsMonitorData: DowntimeRelationshipsMonitorData,
    DowntimeResponse: DowntimeResponse,
    DowntimeResponseAttributes: DowntimeResponseAttributes,
    DowntimeResponseData: DowntimeResponseData,
    DowntimeScheduleCurrentDowntimeResponse:
      DowntimeScheduleCurrentDowntimeResponse,
    DowntimeScheduleOneTimeCreateUpdateRequest:
      DowntimeScheduleOneTimeCreateUpdateRequest,
    DowntimeScheduleOneTimeResponse: DowntimeScheduleOneTimeResponse,
    DowntimeScheduleRecurrenceCreateUpdateRequest:
      DowntimeScheduleRecurrenceCreateUpdateRequest,
    DowntimeScheduleRecurrenceResponse: DowntimeScheduleRecurrenceResponse,
    DowntimeScheduleRecurrencesCreateRequest:
      DowntimeScheduleRecurrencesCreateRequest,
    DowntimeScheduleRecurrencesResponse: DowntimeScheduleRecurrencesResponse,
    DowntimeScheduleRecurrencesUpdateRequest:
      DowntimeScheduleRecurrencesUpdateRequest,
    DowntimeUpdateRequest: DowntimeUpdateRequest,
    DowntimeUpdateRequestAttributes: DowntimeUpdateRequestAttributes,
    DowntimeUpdateRequestData: DowntimeUpdateRequestData,
    ListDowntimesResponse: ListDowntimesResponse,
    MonitorDowntimeMatchResponse: MonitorDowntimeMatchResponse,
    MonitorDowntimeMatchResponseAttributes:
      MonitorDowntimeMatchResponseAttributes,
    MonitorDowntimeMatchResponseData: MonitorDowntimeMatchResponseData,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
  },
};
