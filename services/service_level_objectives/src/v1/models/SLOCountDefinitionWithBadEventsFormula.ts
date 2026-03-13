import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLODataSourceQueryDefinition } from "./SLODataSourceQueryDefinition";
import { SLOFormula } from "./SLOFormula";

export class SLOCountDefinitionWithBadEventsFormula {
  /**
   * A formula that specifies how to combine the results of multiple queries.
   */
  "badEventsFormula": SLOFormula;
  /**
   * A formula that specifies how to combine the results of multiple queries.
   */
  "goodEventsFormula": SLOFormula;
  "queries": Array<SLODataSourceQueryDefinition>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    badEventsFormula: {
      baseName: "bad_events_formula",
      type: "SLOFormula",
      required: true,
    },
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCountDefinitionWithBadEventsFormula.attributeTypeMap;
  }

  public constructor() {}
}
