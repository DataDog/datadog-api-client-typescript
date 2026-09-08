/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A timeseries object containing `queries` and `formulas` arrays.
 */
export class UnitCostQueryDefinition {
  /**
   * The list of formulas applied to the queries for this side of the ratio.
   */
  "formulas": Array<{ [key: string]: any }>;
  /**
   * The list of queries evaluated for this side of the ratio.
   */
  "queries": Array<{ [key: string]: any }>;

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
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<{ [key: string]: any; }>",
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
    return UnitCostQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
