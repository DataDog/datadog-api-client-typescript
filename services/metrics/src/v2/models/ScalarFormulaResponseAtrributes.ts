import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarColumn } from "./ScalarColumn";

/**
 * The object describing a scalar response.
 */
export class ScalarFormulaResponseAtrributes {
  /**
   * List of response columns, each corresponding to an individual formula or query in the request and with values in parallel arrays matching the series list.
   */
  "columns"?: Array<ScalarColumn>;
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
    columns: {
      baseName: "columns",
      type: "Array<ScalarColumn>",
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
    return ScalarFormulaResponseAtrributes.attributeTypeMap;
  }

  public constructor() {}
}
