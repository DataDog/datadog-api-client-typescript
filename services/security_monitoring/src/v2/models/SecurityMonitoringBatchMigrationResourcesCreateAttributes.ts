import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourceCreateItem } from "./SecurityMonitoringBatchMigrationResourceCreateItem";

/**
 * Attributes of the resources to add to a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesCreateAttributes {
  /**
   * The resources to add. From 1 to 1000 resources.
   */
  "resources": Array<SecurityMonitoringBatchMigrationResourceCreateItem>;
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
    resources: {
      baseName: "resources",
      type: "Array<SecurityMonitoringBatchMigrationResourceCreateItem>",
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
    return SecurityMonitoringBatchMigrationResourcesCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
