import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookSearchMetadata } from "./NotebookSearchMetadata";

/**
 * Notebook search result attributes.
 */
export class NotebookSearchAttributes {
  /**
   * Metadata about the notebook.
   */
  "meta": NotebookSearchMetadata;
  /**
   * Name of the notebook.
   */
  "name": string;
  /**
   * List of tags for the notebook.
   */
  "tags": Array<string>;
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
    meta: {
      baseName: "meta",
      type: "NotebookSearchMetadata",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return NotebookSearchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
