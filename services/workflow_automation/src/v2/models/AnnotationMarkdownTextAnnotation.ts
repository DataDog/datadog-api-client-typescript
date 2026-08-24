import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Markdown content displayed in an annotation.
 */
export class AnnotationMarkdownTextAnnotation {
  /**
   * The annotation's Markdown content.
   */
  "text"?: string;
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
    return AnnotationMarkdownTextAnnotation.attributeTypeMap;
  }

  public constructor() {}
}
