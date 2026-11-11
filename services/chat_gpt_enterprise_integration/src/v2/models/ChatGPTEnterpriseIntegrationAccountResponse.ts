import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountResponseData } from "./ChatGPTEnterpriseIntegrationAccountResponseData";

/**
 * Response payload for a single ChatGPT Enterprise integration account.
 */
export class ChatGPTEnterpriseIntegrationAccountResponse {
  /**
   * Data envelope of a ChatGPT Enterprise integration account, including server-assigned identity.
   */
  "data": ChatGPTEnterpriseIntegrationAccountResponseData;
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
      type: "ChatGPTEnterpriseIntegrationAccountResponseData",
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
    return ChatGPTEnterpriseIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
