import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookCellCreateRequestAttributes } from "./NotebookCellCreateRequestAttributes";
import { NotebookCellResourceType } from "./NotebookCellResourceType";

/**
 * The description of a notebook cell create request.
 */
export class NotebookCellCreateRequest {
  /**
   * The attributes of a notebook cell in create cell request. Valid cell types are `markdown`, `timeseries`, `toplist`, `heatmap`, `distribution`,
   * `log_stream`. [More information on each graph visualization type.](https://docs.datadoghq.com/dashboards/widgets/)
   */
  "attributes": NotebookCellCreateRequestAttributes;
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
      baseName: "attributes",
      type: "NotebookCellCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotebookCellResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookCellCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
