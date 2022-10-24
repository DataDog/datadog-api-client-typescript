/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookMarkdownCellDefinition } from "./NotebookMarkdownCellDefinition";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The attributes of a notebook `markdown` cell.
 */
export class NotebookMarkdownCellAttributes {
  /**
   * Text in a notebook is formatted with [Markdown](https://daringfireball.net/projects/markdown/), which enables the use of headings, subheadings, links, images, lists, and code blocks.
   */
  "definition": NotebookMarkdownCellDefinition;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    definition: {
      baseName: "definition",
      type: "NotebookMarkdownCellDefinition",
      required: true,
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
