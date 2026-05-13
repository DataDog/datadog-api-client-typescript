import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional details for a Cloud Cost Management tag key, including its description and example tag values.
 */
export class CostTagKeyDetails {
  /**
   * Description of the tag key.
   */
  "description": string;
  /**
   * Example tag values observed for this tag key.
   */
  "tagValues": Array<string>;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    tagValues: {
      baseName: "tag_values",
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
    return CostTagKeyDetails.attributeTypeMap;
  }

  public constructor() {}
}
