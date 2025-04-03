import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookUpdateData } from "./NotebookUpdateData";

/**
 * The description of a notebook update request.
 */
export class NotebookUpdateRequest {
  /**
   * The data for a notebook update request.
   */
  "data": NotebookUpdateData;
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
      type: "NotebookUpdateData",
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
    return NotebookUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
