import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the bulk export request.
 */
export class SecurityMonitoringTerraformBulkExportAttributes {
  /**
   * The list of resource IDs to export. Maximum 1000 items.
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
      baseName: "resource_ids",
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
    return SecurityMonitoringTerraformBulkExportAttributes.attributeTypeMap;
  }

  public constructor() {}
}
