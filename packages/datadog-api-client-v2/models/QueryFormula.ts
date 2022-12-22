/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaLimit } from "./FormulaLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   */
  "limit"?: FormulaLimit;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryFormula.attributeTypeMap;
  }

  public constructor() {}
}
