import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookCreateData } from "./NotebookCreateData";

/**
 * The description of a notebook create request.
 */
export class NotebookCreateRequest {
  /**
   * The data for a notebook create request.
   */
  "data": NotebookCreateData;
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
      type: "NotebookCreateData",
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
    return NotebookCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
