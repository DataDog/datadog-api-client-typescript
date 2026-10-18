import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationInputSource } from "./SecurityMonitoringBatchMigrationInputSource";
import { SecurityMonitoringBatchMigrationResourceStatusCounts } from "./SecurityMonitoringBatchMigrationResourceStatusCounts";
import { SecurityMonitoringBatchMigrationStatus } from "./SecurityMonitoringBatchMigrationStatus";

/**
 * Attributes of a batch migration.
 */
export class SecurityMonitoringBatchMigrationAttributes {
  /**
   * The creation date of the batch migration, in RFC 3339 format.
   */
  "createdAt": Date;
  /**
   * The UUID of the user or service account who created the batch migration.
   */
  "createdBy"?: string;
  /**
   * The description of the batch migration.
   */
  "description"?: string;
  /**
   * The origin of a batch migration. Always `batch_migration` for batch migrations
   * created through this API.
   */
  "inputSource": SecurityMonitoringBatchMigrationInputSource;
  /**
   * The last update date of the batch migration, in RFC 3339 format.
   */
  "lastUpdatedAt": Date;
  /**
   * The UUID of the user or service account who last updated the batch migration,
   * or the name of a system actor.
   */
  "lastUpdatedBy"?: string;
  /**
   * The name of the batch migration.
   */
  "name": string;
  /**
   * The ID of the organization that owns the batch migration.
   */
  "orgId": number;
  /**
   * The number of resources of a batch migration in each status.
   */
  "resourceStatusCounts": SecurityMonitoringBatchMigrationResourceStatusCounts;
  /**
   * The status of a batch migration. A batch migration is created as `draft` and moves to
   * `in_progress` when started. It moves to `completed` once no resource is `pending` or
   * `in_progress`, or to `canceled` when canceled.
   */
  "status": SecurityMonitoringBatchMigrationStatus;
  /**
   * Tags of the batch migration. Up to 50 tags, each up to 256 characters.
   */
  "tags": Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "createdBy",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    inputSource: {
      baseName: "inputSource",
      type: "SecurityMonitoringBatchMigrationInputSource",
      required: true,
    },
    lastUpdatedAt: {
      baseName: "lastUpdatedAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    lastUpdatedBy: {
      baseName: "lastUpdatedBy",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "orgId",
      type: "number",
      required: true,
      format: "int64",
    },
    resourceStatusCounts: {
      baseName: "resourceStatusCounts",
      type: "SecurityMonitoringBatchMigrationResourceStatusCounts",
      required: true,
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringBatchMigrationStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringBatchMigrationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
