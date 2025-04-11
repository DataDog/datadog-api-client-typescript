import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookResponseData } from "./NotebookResponseData";

/**
 * The description of a notebook response.
 */
export class NotebookResponse {
  /**
   * The data for a notebook.
   */
  "data"?: NotebookResponseData;
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
      type: "NotebookResponseData",
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
    return NotebookResponse.attributeTypeMap;
  }

  public constructor() {}
}
