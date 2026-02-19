import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an integration.
 */
export class IntegrationAttributes {
  /**
   * List of categories associated with the integration.
   */
  "categories": Array<string>;
  /**
   * A description of the integration.
   */
  "description": string;
  /**
   * Whether the integration is installed.
   */
  "installed": boolean;
  /**
   * The name of the integration.
   */
  "title": string;
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
    categories: {
      baseName: "categories",
      type: "Array<string>",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    installed: {
      baseName: "installed",
      type: "boolean",
      required: true,
    },
    title: {
      baseName: "title",
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
    return IntegrationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
