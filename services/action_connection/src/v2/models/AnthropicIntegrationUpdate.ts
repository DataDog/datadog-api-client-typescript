import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicCredentialsUpdate } from "./AnthropicCredentialsUpdate";
import { AnthropicIntegrationType } from "./AnthropicIntegrationType";

/**
 * The definition of the `AnthropicIntegrationUpdate` object.
 */
export class AnthropicIntegrationUpdate {
  /**
   * The definition of the `AnthropicCredentialsUpdate` object.
   */
  "credentials"?: AnthropicCredentialsUpdate;
  /**
   * The definition of the `AnthropicIntegrationType` object.
   */
  "type": AnthropicIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "AnthropicCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "AnthropicIntegrationType",
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
    return AnthropicIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
