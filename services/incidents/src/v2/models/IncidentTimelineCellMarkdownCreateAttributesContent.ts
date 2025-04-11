import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Markdown timeline cell contents.
 */
export class IncidentTimelineCellMarkdownCreateAttributesContent {
  /**
   * The Markdown content of the cell.
   */
  "content"?: string;
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
    content: {
      baseName: "content",
      type: "string",
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
    return IncidentTimelineCellMarkdownCreateAttributesContent.attributeTypeMap;
  }

  public constructor() {}
}
