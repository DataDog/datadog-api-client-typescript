import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourcesCreateAttributes } from "./SecurityMonitoringBatchMigrationResourcesCreateAttributes";
import { SecurityMonitoringBatchMigrationResourcesType } from "./SecurityMonitoringBatchMigrationResourcesType";

/**
 * Data of the resources to add to a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesCreateData {
  /**
   * Attributes of the resources to add to a batch migration.
   */
  "attributes": SecurityMonitoringBatchMigrationResourcesCreateAttributes;
  /**
   * The type of resource for a request on a set of batch migration resources.
   */
  "type": SecurityMonitoringBatchMigrationResourcesType;
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
      type: "SecurityMonitoringBatchMigrationResourcesCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationResourcesType",
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
    return SecurityMonitoringBatchMigrationResourcesCreateData.attributeTypeMap;
  }

  public constructor() {}
}
