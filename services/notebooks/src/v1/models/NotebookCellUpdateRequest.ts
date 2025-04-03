import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookCellResourceType } from "./NotebookCellResourceType";
import { NotebookCellUpdateRequestAttributes } from "./NotebookCellUpdateRequestAttributes";

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
    attributes: {
      baseName: "attributes",
      type: "NotebookCellUpdateRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotebookCellResourceType",
      required: true,
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
    return NotebookCellUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
