import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the Terraform export response.
 */
export class SecurityMonitoringTerraformExportAttributes {
  /**
   * The Terraform configuration for the resource.
   */
  "output"?: string;
  /**
   * The ID of the exported resource.
   */
  "resourceId": string;
  /**
   * The Terraform resource type name.
   */
  "typeName": string;
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
    output: {
      baseName: "output",
      type: "string",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    typeName: {
      baseName: "type_name",
      type: "string",
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
    return SecurityMonitoringTerraformExportAttributes.attributeTypeMap;
  }

  public constructor() {}
}
