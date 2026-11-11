import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountCreateData } from "./ChatGPTEnterpriseIntegrationAccountCreateData";

/**
 * Request payload to create a ChatGPT Enterprise integration account.
 */
export class ChatGPTEnterpriseIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a ChatGPT Enterprise integration account.
   */
  "data": ChatGPTEnterpriseIntegrationAccountCreateData;
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
      type: "ChatGPTEnterpriseIntegrationAccountCreateData",
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
    return ChatGPTEnterpriseIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
