import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookMarkdownCellDefinition } from "./NotebookMarkdownCellDefinition";

/**
 * The attributes of a notebook `markdown` cell.
 */
export class NotebookMarkdownCellAttributes {
  /**
   * Text in a notebook is formatted with [Markdown](https://daringfireball.net/projects/markdown/), which enables the use of headings, subheadings, links, images, lists, and code blocks.
   */
  "definition": NotebookMarkdownCellDefinition;
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
    definition: {
      baseName: "definition",
      type: "NotebookMarkdownCellDefinition",
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
    return NotebookMarkdownCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
