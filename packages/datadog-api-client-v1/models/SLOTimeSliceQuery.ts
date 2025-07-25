/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLODataSourceQueryDefinition } from "./SLODataSourceQueryDefinition";
import { SLOFormula } from "./SLOFormula";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
