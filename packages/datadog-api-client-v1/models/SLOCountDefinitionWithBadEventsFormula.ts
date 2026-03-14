/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLODataSourceQueryDefinition } from "./SLODataSourceQueryDefinition";
import { SLOFormula } from "./SLOFormula";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
