import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for GCP Usage Cost config patch request.
 */
export class GCPUsageCostConfigPatchRequestAttributes {
  /**
   * Whether or not the Cloud Cost Management account is enabled.
   */
  "isEnabled": boolean;
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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
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
    return GCPUsageCostConfigPatchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
