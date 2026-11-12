import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountCreateAttributes } from "./ChatGPTEnterpriseIntegrationAccountCreateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for creating a ChatGPT Enterprise integration account.
 */
export class ChatGPTEnterpriseIntegrationAccountCreateData {
  /**
   * Writable attributes used to create a ChatGPT Enterprise integration account.
   */
  "attributes": ChatGPTEnterpriseIntegrationAccountCreateAttributes;
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
      type: "ChatGPTEnterpriseIntegrationAccountCreateAttributes",
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
    return ChatGPTEnterpriseIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
