import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLODataSourceQueryDefinition } from "./SLODataSourceQueryDefinition";
import { SLOFormula } from "./SLOFormula";

export class SLOCountDefinitionWithTotalEventsFormula {
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCountDefinitionWithTotalEventsFormula.attributeTypeMap;
  }

  public constructor() {}
}
