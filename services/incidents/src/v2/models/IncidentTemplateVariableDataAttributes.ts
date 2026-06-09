import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a template variable.
 */
export class IncidentTemplateVariableDataAttributes {
  /**
   * A description of the template variable.
   */
  "description": string;
  /**
   * The display name of the template variable.
   */
  "displayName": string;
  /**
   * The domain of the template variable.
   */
  "domain": string;
  /**
   * The variable name used in templates.
   */
  "variable": string;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    variable: {
      baseName: "variable",
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
    return IncidentTemplateVariableDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
