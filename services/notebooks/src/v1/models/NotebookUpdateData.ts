import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookResourceType } from "./NotebookResourceType";
import { NotebookUpdateDataAttributes } from "./NotebookUpdateDataAttributes";

/**
 * The data for a notebook update request.
 */
export class NotebookUpdateData {
  /**
   * The data attributes of a notebook.
   */
  "attributes": NotebookUpdateDataAttributes;
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
      type: "NotebookUpdateDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotebookResourceType",
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
    return NotebookUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
