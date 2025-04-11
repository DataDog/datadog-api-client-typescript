import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaLimit } from "./FormulaLimit";

/**
 * A formula for calculation based on one or more queries.
 */
export class QueryFormula {
  /**
   * Formula string, referencing one or more queries with their name property.
   */
  "formula": string;
  /**
   * Message for specifying limits to the number of values returned by a query.
   * This limit is only for scalar queries and has no effect on timeseries queries.
   */
  "limit"?: FormulaLimit;
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
    limit: {
      baseName: "limit",
      type: "FormulaLimit",
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
    return QueryFormula.attributeTypeMap;
  }

  public constructor() {}
}
