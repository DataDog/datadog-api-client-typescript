import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationAttributes } from "./SecurityMonitoringBatchMigrationAttributes";
import { SecurityMonitoringBatchMigrationType } from "./SecurityMonitoringBatchMigrationType";

/**
 * A batch migration.
 */
export class SecurityMonitoringBatchMigrationData {
  /**
   * Attributes of a batch migration.
   */
  "attributes": SecurityMonitoringBatchMigrationAttributes;
  /**
   * The UUID of the batch migration.
   */
  "id": string;
  /**
   * The type of resource for a batch migration.
   */
  "type": SecurityMonitoringBatchMigrationType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringBatchMigrationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationType",
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
    return SecurityMonitoringBatchMigrationData.attributeTypeMap;
  }

  public constructor() {}
}
