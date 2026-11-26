/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIModelInferenceIntegrationAccountBearerTokenAuthType } from "./OpenAIModelInferenceIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use a project-scoped OpenAI API key with Write permission for model capabilities. While `openai-llm-completions` is enabled, the API returns a `422` response for a key that cannot call the OpenAI chat completions endpoint.
 */
export class OpenAIModelInferenceIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": OpenAIModelInferenceIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with OpenAI.
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
      type: "OpenAIModelInferenceIntegrationAccountBearerTokenAuthType",
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
    return OpenAIModelInferenceIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
