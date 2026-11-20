/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for updating the OpenAI LLM Evaluations integration account. Only the fields provided are changed.
 */
export class OpenAILLMEvaluationsIntegrationAccountSettingsUpdate {
  /**
   * Comma-separated list of custom tags applied to the data collected for this account, for example `team:ai,env:prod`.
   */
  "customTags"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customTags: {
      baseName: "custom_tags",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAILLMEvaluationsIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
