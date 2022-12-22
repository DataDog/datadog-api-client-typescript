/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryFormula } from "./QueryFormula";
import { ScalarQuery } from "./ScalarQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a scalar formula request.
 */
export class ScalarFormulaRequestAttributes {
  /**
   * List of formulas to be calculated and returned as responses.
   */
  "formulas"?: Array<QueryFormula>;
  /**
   * Start date (inclusive) of the query in milliseconds since the Unix epoch.
   */
  "from": number;
  /**
   * List of queries to be run and used as inputs to the formulas.
   */
  "queries": Array<ScalarQuery>;
  /**
   * End date (exclusive) of the query in milliseconds since the Unix epoch.
   */
  "to": number;

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
      type: "Array<QueryFormula>",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    queries: {
      baseName: "queries",
      type: "Array<ScalarQuery>",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarFormulaRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
