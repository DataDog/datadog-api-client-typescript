import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookResourceType } from "./NotebookResourceType";
import { NotebooksResponseDataAttributes } from "./NotebooksResponseDataAttributes";

/**
 * The data for a notebook in get all response.
 */
export class NotebooksResponseData {
  /**
   * The attributes of a notebook in get all response.
   */
  "attributes": NotebooksResponseDataAttributes;
  /**
   * Unique notebook ID, assigned when you create the notebook.
   */
  "id": number;
  /**
   * Type of the Notebook resource.
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
    attributes: {
      baseName: "attributes",
      type: "NotebooksResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int64",
    },
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
    return NotebooksResponseData.attributeTypeMap;
  }

  public constructor() {}
}
