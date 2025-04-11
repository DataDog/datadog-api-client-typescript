import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterplotDimension } from "./ScatterplotDimension";

/**
 * Formula to be used in a Scatterplot widget query.
 */
export class ScatterplotWidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  /**
   * Dimension of the Scatterplot.
   */
  "dimension": ScatterplotDimension;
  /**
   * String expression built from queries, formulas, and functions.
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
    alias: {
      baseName: "alias",
      type: "string",
    },
    dimension: {
      baseName: "dimension",
      type: "ScatterplotDimension",
      required: true,
    },
    formula: {
      baseName: "formula",
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
    return ScatterplotWidgetFormula.attributeTypeMap;
  }

  public constructor() {}
}
