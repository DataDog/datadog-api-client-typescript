/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnthropicEffort } from "./LLMObsAnthropicEffort";
import { LLMObsAnthropicThinkingConfig } from "./LLMObsAnthropicThinkingConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Anthropic-specific metadata for an inference request.
 */
export class LLMObsAnthropicMetadata {
  /**
   * The effort level for Anthropic inference.
   */
  "effort"?: LLMObsAnthropicEffort;
  /**
   * Configuration for Anthropic extended thinking feature.
   */
  "thinking"?: LLMObsAnthropicThinkingConfig;

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
    effort: {
      baseName: "effort",
      type: "LLMObsAnthropicEffort",
    },
    thinking: {
      baseName: "thinking",
      type: "LLMObsAnthropicThinkingConfig",
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
    return LLMObsAnthropicMetadata.attributeTypeMap;
  }

  public constructor() {}
}
