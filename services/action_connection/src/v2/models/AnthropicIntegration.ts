import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicCredentials } from "./AnthropicCredentials";
import { AnthropicIntegrationType } from "./AnthropicIntegrationType";

/**
 * The definition of the `AnthropicIntegration` object.
 */
export class AnthropicIntegration {
  /**
   * The definition of the `AnthropicCredentials` object.
   */
  "credentials": AnthropicCredentials;
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
      type: "AnthropicCredentials",
      required: true,
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
    return AnthropicIntegration.attributeTypeMap;
  }

  public constructor() {}
}
