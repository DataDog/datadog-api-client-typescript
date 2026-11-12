import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountResponseData } from "./ChatGPTEnterpriseIntegrationAccountResponseData";

/**
 * Response payload for a list of ChatGPT Enterprise integration accounts.
 */
export class ChatGPTEnterpriseIntegrationAccountsResponse {
  /**
   * List of ChatGPT Enterprise integration accounts.
   */
  "data": Array<ChatGPTEnterpriseIntegrationAccountResponseData>;
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
      type: "Array<ChatGPTEnterpriseIntegrationAccountResponseData>",
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
    return ChatGPTEnterpriseIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
