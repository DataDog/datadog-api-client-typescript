import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookResourceType } from "./NotebookResourceType";

/**
 * Notebook creation data
 */
export class NotebookCreateData {
  /**
   * Notebook resource type
   */
  "type": NotebookResourceType;
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
    type: {
      baseName: "type",
      type: "NotebookResourceType",
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
    return NotebookCreateData.attributeTypeMap;
  }

  public constructor() {}
}
