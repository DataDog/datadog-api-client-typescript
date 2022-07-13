/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { ScatterplotWidgetFormula } from "./ScatterplotWidgetFormula";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scatterplot request containing formulas and functions.
 */
export class ScatterplotTableRequest {
  /**
   * List of Scatterplot formulas that operate on queries.
   */
  "formulas"?: Array<ScatterplotWidgetFormula>;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Timeseries or Scalar response.
   */
  "responseFormat"?: FormulaAndFunctionResponseFormat;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    formulas: {
      baseName: "formulas",
      type: "Array<ScatterplotWidgetFormula>",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotTableRequest.attributeTypeMap;
  }

  public constructor() {}
}
