import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourceType } from "./SecurityMonitoringBatchMigrationResourceType";
import { SecurityMonitoringBatchMigrationResourceUpdateAttributes } from "./SecurityMonitoringBatchMigrationResourceUpdateAttributes";

/**
 * Data of the batch migration resource to update.
 */
export class SecurityMonitoringBatchMigrationResourceUpdateData {
  /**
   * Attributes of the batch migration resource to update. At least one attribute is required.
   */
  "attributes": SecurityMonitoringBatchMigrationResourceUpdateAttributes;
  /**
   * The type of resource for a batch migration resource.
   */
  "type": SecurityMonitoringBatchMigrationResourceType;
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
      type: "SecurityMonitoringBatchMigrationResourceUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationResourceType",
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
    return SecurityMonitoringBatchMigrationResourceUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
