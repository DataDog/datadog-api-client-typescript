import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICredentialsUpdate } from "./OpenAICredentialsUpdate";
import { OpenAIIntegrationType } from "./OpenAIIntegrationType";

/**
 * The definition of the `OpenAIIntegrationUpdate` object.
 */
export class OpenAIIntegrationUpdate {
  /**
   * The definition of the `OpenAICredentialsUpdate` object.
   */
  "credentials"?: OpenAICredentialsUpdate;
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
      type: "OpenAICredentialsUpdate",
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
    return OpenAIIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
