/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use an admin key created in the OpenAI Admin Console of your ChatGPT Enterprise workspace, not in the API Platform admin-key console, with the **Costs** permission set to **Read**.
 */
export class ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with ChatGPT Enterprise.
   */
  "token": string;

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
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
