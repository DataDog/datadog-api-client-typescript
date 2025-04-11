import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookMarkdownCellDefinitionType } from "./NotebookMarkdownCellDefinitionType";

/**
 * Text in a notebook is formatted with [Markdown](https://daringfireball.net/projects/markdown/), which enables the use of headings, subheadings, links, images, lists, and code blocks.
 */
export class NotebookMarkdownCellDefinition {
  /**
   * The markdown content.
   */
  "text": string;
  /**
   * Type of the markdown cell.
   */
  "type": NotebookMarkdownCellDefinitionType;
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
    text: {
      baseName: "text",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotebookMarkdownCellDefinitionType",
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
    return NotebookMarkdownCellDefinition.attributeTypeMap;
  }

  public constructor() {}
}
