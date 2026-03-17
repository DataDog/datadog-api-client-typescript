import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a web integration account.
 */
export class WebIntegrationAccountAttributes {
  /**
   * The name of the account.
   */
  "name": string;
  /**
   * Integration-specific settings for the account. The structure and required fields vary by integration type.
   * Use the schema endpoint to retrieve the specific requirements for each integration.
   */
  "settings": { [key: string]: any };
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: any; }",
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
    return WebIntegrationAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
