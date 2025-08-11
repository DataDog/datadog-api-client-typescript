import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICredentials } from "./OpenAICredentials";
import { OpenAIIntegrationType } from "./OpenAIIntegrationType";

/**
 * The definition of the `OpenAIIntegration` object.
 */
export class OpenAIIntegration {
  /**
   * The definition of the `OpenAICredentials` object.
   */
  "credentials": OpenAICredentials;
  /**
   * The definition of the `OpenAIIntegrationType` object.
   */
  "type": OpenAIIntegrationType;
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
      type: "OpenAICredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OpenAIIntegrationType",
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
    return OpenAIIntegration.attributeTypeMap;
  }

  public constructor() {}
}
