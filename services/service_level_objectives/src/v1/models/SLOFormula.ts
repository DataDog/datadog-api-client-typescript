import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A formula that specifies how to combine the results of multiple queries.
 */
export class SLOFormula {
  /**
   * The formula string, which is an expression involving named queries.
   */
  "formula": string;
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
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOFormula.attributeTypeMap;
  }

  public constructor() {}
}
