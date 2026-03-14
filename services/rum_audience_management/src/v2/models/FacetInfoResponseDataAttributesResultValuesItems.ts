import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single facet value with its occurrence count in the dataset.
 */
export class FacetInfoResponseDataAttributesResultValuesItems {
  /**
   * The number of records that have this facet value.
   */
  "count"?: number;
  /**
   * The facet value (for example, a browser name or country code).
   */
  "value"?: string;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return FacetInfoResponseDataAttributesResultValuesItems.attributeTypeMap;
  }

  public constructor() {}
}
