import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookSearchResponseMeta } from "./NotebookSearchResponseMeta";
import { NotebookSearchResultData } from "./NotebookSearchResultData";

/**
 * Response containing notebook search results.
 */
export class NotebookSearchResponse {
  /**
   * List of notebook search results.
   */
  "data": Array<NotebookSearchResultData>;
  /**
   * Metadata about the notebook search results.
   */
  "meta": NotebookSearchResponseMeta;
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
    data: {
      baseName: "data",
      type: "Array<NotebookSearchResultData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "NotebookSearchResponseMeta",
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
    return NotebookSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
