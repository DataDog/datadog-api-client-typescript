import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";
import { NotebookSplitBy } from "./NotebookSplitBy";

/**
 * The attributes of a notebook `distribution` cell.
 */
export class NotebookDistributionCellAttributes {
  /**
   * The Distribution visualization is another way of showing metrics
   * aggregated across one or several tags, such as hosts.
   * Unlike the heat map, a distribution graph’s x-axis is quantity rather than time.
   */
  "definition": DistributionWidgetDefinition;
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
      type: "DistributionWidgetDefinition",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookDistributionCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
