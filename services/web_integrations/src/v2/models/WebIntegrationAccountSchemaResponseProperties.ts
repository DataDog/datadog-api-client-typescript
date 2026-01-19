import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountSchemaResponseSecretsObject } from "./WebIntegrationAccountSchemaResponseSecretsObject";
import { WebIntegrationAccountSchemaResponseSettingsObject } from "./WebIntegrationAccountSchemaResponseSettingsObject";

/**
 * The properties object containing settings and secrets schema definitions.
 * Both are always present in every integration schema.
 */
export class WebIntegrationAccountSchemaResponseProperties {
  /**
   * JSON Schema definition for the secrets object.
   * Contains sensitive credentials required for the integration such as API keys,
   * tokens, and passwords. These values are write-only and never returned in responses.
   */
  "secrets": WebIntegrationAccountSchemaResponseSecretsObject;
  /**
   * JSON Schema definition for the settings object.
   * Contains integration-specific configuration fields such as account identifiers,
   * feature toggles, and non-sensitive configuration options.
   */
  "settings": WebIntegrationAccountSchemaResponseSettingsObject;
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
    secrets: {
      baseName: "secrets",
      type: "WebIntegrationAccountSchemaResponseSecretsObject",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "WebIntegrationAccountSchemaResponseSettingsObject",
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
    return WebIntegrationAccountSchemaResponseProperties.attributeTypeMap;
  }

  public constructor() {}
}
