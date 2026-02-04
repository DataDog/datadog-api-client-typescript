import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Highlighted fields from the notebook search.
 */
export class NotebookSearchHighlight {
  /**
   * Highlighted cell text matches.
   */
  "cellsText"?: Array<string>;
  /**
   * Highlighted cell title matches.
   */
  "cellsTitle"?: Array<string>;
  /**
   * Highlighted notebook name matches.
   */
  "name"?: Array<string>;
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
    cellsText: {
      baseName: "cells.text",
      type: "Array<string>",
    },
    cellsTitle: {
      baseName: "cells.title",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "Array<string>",
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
    return NotebookSearchHighlight.attributeTypeMap;
  }

  public constructor() {}
}
