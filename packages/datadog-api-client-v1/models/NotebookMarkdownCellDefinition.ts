/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookMarkdownCellDefinitionType } from "./NotebookMarkdownCellDefinitionType";

import { AttributeTypeMap } from "../util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookMarkdownCellDefinition.attributeTypeMap;
  }

  public constructor() {}
}
