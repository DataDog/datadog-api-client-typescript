import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";

/**
 * Widget definition.
 */
export class ScatterPlotWidgetDefinitionRequests {
  /**
   * Scatterplot request containing formulas and functions.
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
