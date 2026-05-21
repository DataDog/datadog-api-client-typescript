import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a rendered template.
 */
export class IncidentRenderedTemplateDataAttributes {
  /**
   * The rendered template content.
   */
  "renderedContent": string;
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
    renderedContent: {
      baseName: "rendered_content",
      type: "string",
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
    return IncidentRenderedTemplateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
