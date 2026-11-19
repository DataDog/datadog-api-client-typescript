/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for creating the OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountSettingsRequest {
  /**
   * ID of the Codex workspace to collect data from.
   */
  "codexWorkspaceId": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    codexWorkspaceId: {
      baseName: "codex_workspace_id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
