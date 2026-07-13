import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { ScatterplotDataProjectionProjection } from "./ScatterplotDataProjectionProjection";
import { ScatterplotDataProjectionQuery } from "./ScatterplotDataProjectionQuery";
import { ScatterplotTableRequestType } from "./ScatterplotTableRequestType";
import { ScatterplotWidgetFormula } from "./ScatterplotWidgetFormula";

/**
 * Scatterplot table request. Supports two modes:
 * - **Formulas and functions** (default): `request_type` is absent or `"table"`. Uses `queries` and `formulas`.
 * - **Data projection**: `request_type` is `"data_projection"`. Uses `query`, `projection`, and optionally `limit`.
 */
export class ScatterplotTableRequest {
  /**
   * List of Scatterplot formulas that operate on queries.
   */
  "formulas"?: Array<ScatterplotWidgetFormula>;
  /**
   * Maximum number of rows to return. Used when `request_type` is `"data_projection"`.
   */
  "limit"?: number;
  /**
   * The projection configuration for a scatterplot data projection request.
   */
  "projection"?: ScatterplotDataProjectionProjection;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  /**
   * The query for a scatterplot data projection request.
   */
  "query"?: ScatterplotDataProjectionQuery;
  /**
   * The type of the scatterplot table request.
   */
  "requestType"?: ScatterplotTableRequestType;
  /**
   * Timeseries, scalar, or event list response. Event list response formats are supported by Geomap widgets.
   */
  "responseFormat"?: FormulaAndFunctionResponseFormat;
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
      type: "Array<ScatterplotWidgetFormula>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    projection: {
      baseName: "projection",
      type: "ScatterplotDataProjectionProjection",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    query: {
      baseName: "query",
      type: "ScatterplotDataProjectionQuery",
    },
    requestType: {
      baseName: "request_type",
      type: "ScatterplotTableRequestType",
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
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
    return ScatterplotTableRequest.attributeTypeMap;
  }

  public constructor() {}
}
