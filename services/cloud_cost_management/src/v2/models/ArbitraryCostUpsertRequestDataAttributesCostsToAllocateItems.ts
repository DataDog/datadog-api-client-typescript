import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems` object.
 */
export class ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems {
  /**
   * The `items` `condition`.
   */
  "condition": string;
  /**
   * The `items` `tag`.
   */
  "tag": string;
  /**
   * The `items` `value`.
   */
  "value"?: string;
  /**
   * The `items` `values`.
   */
  "values"?: Array<string>;
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
    condition: {
      baseName: "condition",
      type: "string",
      required: true,
    },
    tag: {
      baseName: "tag",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems.attributeTypeMap;
  }

  public constructor() {}
}
