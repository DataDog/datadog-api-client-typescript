import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use an admin key created in the OpenAI Admin Console of your ChatGPT Enterprise workspace, not in the API Platform admin-key console, with the **Costs** permission set to **Read**. Only the fields provided are changed; omit `token` to keep the stored one.
 */
export class ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with ChatGPT Enterprise.
   */
  "token"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authType: {
      baseName: "auth_type",
      type: "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType",
      required: true,
    },
    token: {
      baseName: "token",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
