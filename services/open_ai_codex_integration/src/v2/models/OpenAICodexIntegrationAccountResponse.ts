import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountResponseData } from "./OpenAICodexIntegrationAccountResponseData";

/**
 * Response payload for a single OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountResponse {
  /**
   * Data envelope of an OpenAI Codex integration account, including server-assigned identity.
   */
  "data": OpenAICodexIntegrationAccountResponseData;
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
    data: {
      baseName: "data",
      type: "OpenAICodexIntegrationAccountResponseData",
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
    return OpenAICodexIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
