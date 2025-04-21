import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { LogsArchive } from "./LogsArchive";
import { LogsArchiveAttributes } from "./LogsArchiveAttributes";
import { LogsArchiveCreateRequest } from "./LogsArchiveCreateRequest";
import { LogsArchiveCreateRequestAttributes } from "./LogsArchiveCreateRequestAttributes";
import { LogsArchiveCreateRequestDefinition } from "./LogsArchiveCreateRequestDefinition";
import { LogsArchiveDefinition } from "./LogsArchiveDefinition";
import { LogsArchiveDestinationAzure } from "./LogsArchiveDestinationAzure";
import { LogsArchiveDestinationGCS } from "./LogsArchiveDestinationGCS";
import { LogsArchiveDestinationS3 } from "./LogsArchiveDestinationS3";
import { LogsArchiveEncryptionS3 } from "./LogsArchiveEncryptionS3";
import { LogsArchiveIntegrationAzure } from "./LogsArchiveIntegrationAzure";
import { LogsArchiveIntegrationGCS } from "./LogsArchiveIntegrationGCS";
import { LogsArchiveIntegrationS3 } from "./LogsArchiveIntegrationS3";
import { LogsArchiveOrder } from "./LogsArchiveOrder";
import { LogsArchiveOrderAttributes } from "./LogsArchiveOrderAttributes";
import { LogsArchiveOrderDefinition } from "./LogsArchiveOrderDefinition";
import { LogsArchives } from "./LogsArchives";
import { Pagination } from "./Pagination";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RolesResponse } from "./RolesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LogsArchiveDestinationAzureType: ["azure"],
    LogsArchiveDestinationGCSType: ["gcs"],
    LogsArchiveDestinationS3Type: ["s3"],
    LogsArchiveEncryptionS3Type: ["NO_OVERRIDE", "SSE_S3", "SSE_KMS"],
    LogsArchiveOrderDefinitionType: ["archive_order"],
    LogsArchiveState: ["UNKNOWN", "WORKING", "FAILING", "WORKING_AUTH_LEGACY"],
    LogsArchiveStorageClassS3Type: [
      "STANDARD",
      "STANDARD_IA",
      "ONEZONE_IA",
      "INTELLIGENT_TIERING",
      "GLACIER_IR",
    ],
    PermissionsType: ["permissions"],
    RolesType: ["roles"],
  },
  oneOfMap: {
    LogsArchiveCreateRequestDestination: [
      "LogsArchiveDestinationAzure",
      "LogsArchiveDestinationGCS",
      "LogsArchiveDestinationS3",
    ],
    LogsArchiveDestination: [
      "LogsArchiveDestinationAzure",
      "LogsArchiveDestinationGCS",
      "LogsArchiveDestinationS3",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    LogsArchive: LogsArchive,
    LogsArchiveAttributes: LogsArchiveAttributes,
    LogsArchiveCreateRequest: LogsArchiveCreateRequest,
    LogsArchiveCreateRequestAttributes: LogsArchiveCreateRequestAttributes,
    LogsArchiveCreateRequestDefinition: LogsArchiveCreateRequestDefinition,
    LogsArchiveDefinition: LogsArchiveDefinition,
    LogsArchiveDestinationAzure: LogsArchiveDestinationAzure,
    LogsArchiveDestinationGCS: LogsArchiveDestinationGCS,
    LogsArchiveDestinationS3: LogsArchiveDestinationS3,
    LogsArchiveEncryptionS3: LogsArchiveEncryptionS3,
    LogsArchiveIntegrationAzure: LogsArchiveIntegrationAzure,
    LogsArchiveIntegrationGCS: LogsArchiveIntegrationGCS,
    LogsArchiveIntegrationS3: LogsArchiveIntegrationS3,
    LogsArchiveOrder: LogsArchiveOrder,
    LogsArchiveOrderAttributes: LogsArchiveOrderAttributes,
    LogsArchiveOrderDefinition: LogsArchiveOrderDefinition,
    LogsArchives: LogsArchives,
    Pagination: Pagination,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRole: RelationshipToRole,
    RelationshipToRoleData: RelationshipToRoleData,
    ResponseMetaAttributes: ResponseMetaAttributes,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    RolesResponse: RolesResponse,
  },
};
