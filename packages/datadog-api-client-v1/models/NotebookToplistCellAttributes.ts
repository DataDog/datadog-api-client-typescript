/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookCellTime } from "./NotebookCellTime";
import { NotebookGraphSize } from "./NotebookGraphSize";
import { NotebookSplitBy } from "./NotebookSplitBy";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a notebook `toplist` cell.
 */
export class NotebookToplistCellAttributes {
  /**
   * The top list visualization enables you to display a list of Tag value like hostname or service with the most or least of any metric value, such as highest consumers of CPU, hosts with the least disk space, etc.
   */
  "definition": ToplistWidgetDefinition;
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
      type: "ToplistWidgetDefinition",
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
    return NotebookToplistCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
