import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing how to split the graph to display multiple visualizations per request.
 */
export class NotebookSplitBy {
  /**
   * Keys to split on.
   */
  "keys": Array<string>;
  /**
   * Tags to split on.
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
    keys: {
      baseName: "keys",
      type: "Array<string>",
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
    return NotebookSplitBy.attributeTypeMap;
  }

  public constructor() {}
}
