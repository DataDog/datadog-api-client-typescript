import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Update request of a custom variable object.
 *
 * *All properties are optional.*
 */
export class WebhooksIntegrationCustomVariableUpdateRequest {
  /**
   * Make custom variable is secret or not.
   * If the custom variable is secret, the value is not returned in the response payload.
   */
  "isSecret"?: boolean;
  /**
   * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`. It must only contains upper-case characters, integers or underscores.
   */
  "name"?: string;
  /**
   * Value of the custom variable.
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
    },
    name: {
      baseName: "name",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return WebhooksIntegrationCustomVariableUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
