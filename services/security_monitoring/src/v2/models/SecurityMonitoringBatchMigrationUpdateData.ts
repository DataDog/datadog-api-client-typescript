import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationType } from "./SecurityMonitoringBatchMigrationType";
import { SecurityMonitoringBatchMigrationUpdateAttributes } from "./SecurityMonitoringBatchMigrationUpdateAttributes";

/**
 * Data of the batch migration to update.
 */
export class SecurityMonitoringBatchMigrationUpdateData {
  /**
   * Attributes of the batch migration to update. At least one attribute is required.
   */
  "attributes": SecurityMonitoringBatchMigrationUpdateAttributes;
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
      type: "SecurityMonitoringBatchMigrationUpdateAttributes",
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
    return SecurityMonitoringBatchMigrationUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
