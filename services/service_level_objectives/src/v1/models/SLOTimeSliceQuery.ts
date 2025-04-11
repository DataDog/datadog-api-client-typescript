import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLODataSourceQueryDefinition } from "./SLODataSourceQueryDefinition";
import { SLOFormula } from "./SLOFormula";

/**
 * The queries and formula used to calculate the SLI value.
 */
export class SLOTimeSliceQuery {
  /**
   * A list that contains exactly one formula, as only a single formula may be used in a time-slice SLO.
   */
  "formulas": [SLOFormula];
  /**
   * A list of queries that are used to calculate the SLI value.
   */
  "queries": Array<SLODataSourceQueryDefinition>;
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
    formulas: {
      baseName: "formulas",
      type: "[SLOFormula]",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<SLODataSourceQueryDefinition>",
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
    return SLOTimeSliceQuery.attributeTypeMap;
  }

  public constructor() {}
}
