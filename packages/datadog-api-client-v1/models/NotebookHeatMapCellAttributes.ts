/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";
import { NotebookSplitBy } from "./NotebookSplitBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookHeatMapCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
