import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebooksResponseData } from "./NotebooksResponseData";
import { NotebooksResponseMeta } from "./NotebooksResponseMeta";

/**
 * Notebooks get all response.
 */
export class NotebooksResponse {
  /**
   * List of notebook definitions.
   */
  "data"?: Array<NotebooksResponseData>;
  /**
   * Searches metadata returned by the API.
   */
  "meta"?: NotebooksResponseMeta;
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
      type: "Array<NotebooksResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "NotebooksResponseMeta",
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
    return NotebooksResponse.attributeTypeMap;
  }

  public constructor() {}
}
