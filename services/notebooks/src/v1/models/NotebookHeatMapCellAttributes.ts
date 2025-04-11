import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";
import { NotebookSplitBy } from "./NotebookSplitBy";

/**
 * The attributes of a notebook `heatmap` cell.
 */
export class NotebookHeatMapCellAttributes {
  /**
   * The heat map visualization shows metrics aggregated across many tags, such as hosts. The more hosts that have a particular value, the darker that square is.
   */
  "definition": HeatMapWidgetDefinition;
  /**
   * The size of the graph.
   */
  "graphSize"?: NotebookGraphSize;
  /**
   * Object describing how to split the graph to display multiple visualizations per request.
   */
  "splitBy"?: NotebookSplitBy;
  /**
   * Timeframe for the notebook cell. When 'null', the notebook global time is used.
   */
  "time"?: NotebookCellTime;
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
    definition: {
      baseName: "definition",
      type: "HeatMapWidgetDefinition",
      required: true,
    },
    graphSize: {
      baseName: "graph_size",
      type: "NotebookGraphSize",
    },
    splitBy: {
      baseName: "split_by",
      type: "NotebookSplitBy",
    },
    time: {
      baseName: "time",
      type: "NotebookCellTime",
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
    return NotebookHeatMapCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
