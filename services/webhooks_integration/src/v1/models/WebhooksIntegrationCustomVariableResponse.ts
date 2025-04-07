import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Custom variable for Webhook integration.
 */
export class WebhooksIntegrationCustomVariableResponse {
  /**
   * Make custom variable is secret or not.
   * If the custom variable is secret, the value is not returned in the response payload.
   */
  "isSecret": boolean;
  /**
   * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`. It must only contains upper-case characters, integers or underscores.
   */
  "name": string;
  /**
   * Value of the custom variable. It won't be returned if the variable is secret.
   */
  "value"?: string;
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
    isSecret: {
      baseName: "is_secret",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WebhooksIntegrationCustomVariableResponse.attributeTypeMap;
  }

  public constructor() {}
}
