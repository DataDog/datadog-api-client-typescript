/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";
import { NotebookSplitBy } from "./NotebookSplitBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookDistributionCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
