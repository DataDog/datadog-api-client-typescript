import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the convert request.
 */
export class SecurityMonitoringTerraformConvertAttributes {
  /**
   * The resource attributes as a JSON object, matching the structure returned by the corresponding Datadog API (for example, the attributes of a suppression rule).
   */
  "resourceJson": { [key: string]: any };
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
    resourceJson: {
      baseName: "resource_json",
      type: "{ [key: string]: any; }",
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
    return SecurityMonitoringTerraformConvertAttributes.attributeTypeMap;
  }

  public constructor() {}
}
