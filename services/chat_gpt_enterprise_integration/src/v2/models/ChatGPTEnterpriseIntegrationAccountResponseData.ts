import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountResponseAttributes } from "./ChatGPTEnterpriseIntegrationAccountResponseAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope of a ChatGPT Enterprise integration account, including server-assigned identity.
 */
export class ChatGPTEnterpriseIntegrationAccountResponseData {
  /**
   * Attributes of a ChatGPT Enterprise integration account returned in responses.
   */
  "attributes": ChatGPTEnterpriseIntegrationAccountResponseAttributes;
  /**
   * Server-generated unique identifier of the ChatGPT Enterprise integration account.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "ChatGPTEnterpriseIntegrationAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return ChatGPTEnterpriseIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
