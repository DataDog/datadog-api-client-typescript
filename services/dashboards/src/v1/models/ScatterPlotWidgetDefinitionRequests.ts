import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";

/**
 * Widget definition.
 */
export class ScatterPlotWidgetDefinitionRequests {
  /**
   * Scatterplot table request. Supports two modes:
   * - **Formulas and functions** (default): `request_type` is absent or `"table"`. Uses `queries` and `formulas`.
   * - **Data projection**: `request_type` is `"data_projection"`. Uses `query`, `projection`, and optionally `limit`.
   */
  "table"?: ScatterplotTableRequest;
  /**
   * Updated scatter plot.
   */
  "x"?: ScatterPlotRequest;
  /**
   * Updated scatter plot.
   */
  "y"?: ScatterPlotRequest;
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
    table: {
      baseName: "table",
      type: "ScatterplotTableRequest",
    },
    x: {
      baseName: "x",
      type: "ScatterPlotRequest",
    },
    y: {
      baseName: "y",
      type: "ScatterPlotRequest",
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
    return ScatterPlotWidgetDefinitionRequests.attributeTypeMap;
  }

  public constructor() {}
}
