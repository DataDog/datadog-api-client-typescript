/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookCellResourceType } from "./NotebookCellResourceType";
import { NotebookCellUpdateRequestAttributes } from "./NotebookCellUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The description of a notebook cell update request.
 */
export class NotebookCellUpdateRequest {
  /**
   * The attributes of a notebook cell in update cell request. Valid cell types are `markdown`, `timeseries`, `toplist`, `heatmap`, `distribution`,
   * `log_stream`. [More information on each graph visualization type.](https://docs.datadoghq.com/dashboards/widgets/)
   */
  "attributes": NotebookCellUpdateRequestAttributes;
  /**
   * Notebook cell ID.
   */
  "id": string;
  /**
   * Type of the Notebook Cell resource.
   */
  "type": NotebookCellResourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "NotebookCellUpdateRequestAttributes",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "NotebookCellResourceType",
      required: true,
    },
  };
}
