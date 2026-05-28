import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Mutable attributes set when creating or updating a Cloud Cost Management tag key description.
 */
export class CostTagDescriptionUpsertRequestDataAttributes {
  /**
   * Cloud provider this description applies to (for example, `aws`). Omit to set the cross-cloud default for the tag key.
   */
  "cloud"?: string;
  /**
   * The human-readable description for the tag key.
   */
  "description": string;
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
    cloud: {
      baseName: "cloud",
      type: "string",
    },
    description: {
      baseName: "description",
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
    return CostTagDescriptionUpsertRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
