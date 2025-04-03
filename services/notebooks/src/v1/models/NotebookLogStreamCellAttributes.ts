import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";

/**
 * The attributes of a notebook `log_stream` cell.
 */
export class NotebookLogStreamCellAttributes {
  /**
   * The Log Stream displays a log flow matching the defined query. Only available on FREE layout dashboards.
   */
  "definition": LogStreamWidgetDefinition;
  /**
   * The size of the graph.
   */
  "graphSize"?: NotebookGraphSize;
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
      type: "LogStreamWidgetDefinition",
      required: true,
    },
    graphSize: {
      baseName: "graph_size",
      type: "NotebookGraphSize",
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
    return NotebookLogStreamCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
