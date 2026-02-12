import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLODataSourceQueryDefinition } from "./SLODataSourceQueryDefinition";
import { SLOFormula } from "./SLOFormula";

/**
 * A count-based (metric) SLI specification, composed of three parts: the good events formula, the total events formula,
 * and the underlying queries.
 */
export class SLOCountDefinition {
  /**
   * A formula that specifies how to combine the results of multiple queries.
   */
  "goodEventsFormula": SLOFormula;
  "queries": Array<SLODataSourceQueryDefinition>;
  /**
   * A formula that specifies how to combine the results of multiple queries.
   */
  "totalEventsFormula": SLOFormula;
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
    goodEventsFormula: {
      baseName: "good_events_formula",
      type: "SLOFormula",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<SLODataSourceQueryDefinition>",
      required: true,
    },
    totalEventsFormula: {
      baseName: "total_events_formula",
      type: "SLOFormula",
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
    return SLOCountDefinition.attributeTypeMap;
  }

  public constructor() {}
}
