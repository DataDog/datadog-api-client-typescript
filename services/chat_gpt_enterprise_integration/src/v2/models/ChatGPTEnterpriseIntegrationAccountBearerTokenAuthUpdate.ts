import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use an admin key with the **Costs** permission set to **Read**. Create the key in the OpenAI Admin Console of your ChatGPT Enterprise workspace, not in the API Platform admin-key console. Only the provided fields are changed. To keep the stored token, omit `token`.
 */
export class ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType;
  /**
   * ChatGPT Enterprise admin API key with the **Costs** permission set to **Read** and every other permission category set to **None**. Create it in the [OpenAI Admin Console](https://admin.openai.com/credentials?tab=admin-keys) of your ChatGPT Enterprise workspace, not in the API Platform admin-key console.
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
