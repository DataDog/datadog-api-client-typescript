import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricNotebookType } from "./MetricNotebookType";
import { NotebookSearchAttributes } from "./NotebookSearchAttributes";
import { NotebookSearchHighlight } from "./NotebookSearchHighlight";

/**
 * A notebook search result.
 */
export class NotebookSearchResultData {
  /**
   * Highlighted fields from the notebook search.
   */
  "highlight"?: NotebookSearchHighlight;
  /**
   * Notebook identifier.
   */
  "id": string;
  /**
   * Notebook search result attributes.
   */
  "notebookData": NotebookSearchAttributes;
  /**
   * Notebook resource type.
   */
  "type": MetricNotebookType;
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
    highlight: {
      baseName: "highlight",
      type: "NotebookSearchHighlight",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    notebookData: {
      baseName: "notebook_data",
      type: "NotebookSearchAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricNotebookType",
      required: true,
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
    return NotebookSearchResultData.attributeTypeMap;
  }

  public constructor() {}
}
