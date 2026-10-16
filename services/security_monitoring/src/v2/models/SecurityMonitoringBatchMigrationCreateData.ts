import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationCreateAttributes } from "./SecurityMonitoringBatchMigrationCreateAttributes";
import { SecurityMonitoringBatchMigrationType } from "./SecurityMonitoringBatchMigrationType";

/**
 * Data of the batch migration to create.
 */
export class SecurityMonitoringBatchMigrationCreateData {
  /**
   * Attributes of the batch migration to create.
   */
  "attributes": SecurityMonitoringBatchMigrationCreateAttributes;
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
      type: "SecurityMonitoringBatchMigrationCreateAttributes",
      required: true,
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
    return SecurityMonitoringBatchMigrationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
