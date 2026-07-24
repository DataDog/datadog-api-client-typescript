import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AmsIntegrationAccountSchemaResponseSettingsField } from "./AmsIntegrationAccountSchemaResponseSettingsField";

/**
 * JSON Schema definition for the secrets object.
 * Contains sensitive credentials required for the integration such as API keys,
 * tokens, and passwords. These values are write-only and never returned in responses.
 */
export class AmsIntegrationAccountSchemaResponseSecretsObject {
  /**
   * Whether additional properties are allowed (typically false).
   */
  "additionalProperties"?: boolean;
  /**
   * The individual secret fields for this integration.
   * Field names and types vary by integration.
   */
  "properties"?: {
    [key: string]: AmsIntegrationAccountSchemaResponseSettingsField;
  };
  /**
   * List of required secret field names.
   */
  "required"?: Array<string>;
  /**
   * Always "object" for the secrets container.
   */
  "type"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "boolean",
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: AmsIntegrationAccountSchemaResponseSettingsField; }",
    },
    required: {
      baseName: "required",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
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
    return AmsIntegrationAccountSchemaResponseSecretsObject.attributeTypeMap;
  }

  public constructor() {}
}
