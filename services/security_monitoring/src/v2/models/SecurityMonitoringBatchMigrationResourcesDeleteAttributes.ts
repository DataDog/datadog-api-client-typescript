import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the resources to delete from a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesDeleteAttributes {
  /**
   * Unique UUIDs of batch migration resources. From 1 to 1000 IDs.
   */
  "resourceIds": Array<string>;
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
    resourceIds: {
      baseName: "resourceIds",
      type: "Array<string>",
      required: true,
      format: "uuid",
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
    return SecurityMonitoringBatchMigrationResourcesDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
