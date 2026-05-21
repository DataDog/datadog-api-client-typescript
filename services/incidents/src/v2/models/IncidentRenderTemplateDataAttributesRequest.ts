import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for rendering a template.
 */
export class IncidentRenderTemplateDataAttributesRequest {
  /**
   * The template content to render.
   */
  "content": string;
  /**
   * The date-time format to use for rendering.
   */
  "datetimeFormat"?: string;
  /**
   * The timezone to use for rendering.
   */
  "timezone"?: string;
  /**
   * Whether to validate links in the rendered template.
   */
  "validateLinks"?: boolean;
  /**
   * Whether to validate variables in the template.
   */
  "validateVariables"?: boolean;
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
      required: true,
    },
    datetimeFormat: {
      baseName: "datetime_format",
      type: "string",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    validateLinks: {
      baseName: "validate_links",
      type: "boolean",
    },
    validateVariables: {
      baseName: "validate_variables",
      type: "boolean",
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
    return IncidentRenderTemplateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
