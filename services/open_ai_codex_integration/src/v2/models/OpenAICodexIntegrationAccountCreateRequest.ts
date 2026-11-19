import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountCreateData } from "./OpenAICodexIntegrationAccountCreateData";

/**
 * Request payload to create an OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating an OpenAI Codex integration account.
   */
  "data": OpenAICodexIntegrationAccountCreateData;
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
      type: "OpenAICodexIntegrationAccountCreateData",
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
    return OpenAICodexIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
