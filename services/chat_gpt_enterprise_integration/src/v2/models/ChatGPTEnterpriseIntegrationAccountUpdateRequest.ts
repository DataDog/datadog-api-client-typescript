import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountUpdateData } from "./ChatGPTEnterpriseIntegrationAccountUpdateData";

/**
 * Request payload to update a ChatGPT Enterprise integration account.
 */
export class ChatGPTEnterpriseIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a ChatGPT Enterprise integration account.
   */
  "data": ChatGPTEnterpriseIntegrationAccountUpdateData;
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
      type: "ChatGPTEnterpriseIntegrationAccountUpdateData",
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
    return ChatGPTEnterpriseIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
