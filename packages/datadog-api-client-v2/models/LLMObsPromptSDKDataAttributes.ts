/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptChatTemplateItem } from "./LLMObsPromptChatTemplateItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a flattened prompt version returned for SDK consumption. Exactly one of `template` and `chat_template` is returned. Empty `config` is omitted when configuration authoring is disabled for the organization. Non-empty saved configuration is always returned.
 */
export class LLMObsPromptSDKDataAttributes {
  /**
   * Chat template for this prompt version, as a list of messages and named message placeholders. Omitted for text templates.
   * **Preview:** Message placeholders are available in Preview. To request access, contact [Datadog Support](https://www.datadoghq.com/support/) or your Customer Success Manager.
   */
  "chatTemplate"?: Array<LLMObsPromptChatTemplateItem>;
  /**
   * Versioned prompt configuration is in Preview. To request access, contact [Datadog Support](https://www.datadoghq.com/support/) or your Customer Success Manager. Customer-owned configuration delivered with a prompt version. Datadog stores and returns the object without interpolating it, validating provider-specific keys, or applying it to model calls. Do not include secrets.
   */
  "config"?: { [key: string]: any };
  /**
   * Labels attached to the selected version.
   */
  "labels"?: Array<string>;
  /**
   * Customer-provided identifier of the prompt.
   */
  "promptId"?: string;
  /**
   * Unique identifier of this prompt version.
   */
  "promptVersionUuid"?: string;
  /**
   * Text template for this prompt version. Omitted for chat templates.
   */
  "template"?: string;
  /**
   * Version identifier for this prompt version. This is the sequential version number unless a user-supplied version identifier was set, in which case that identifier is used instead.
   */
  "version"?: string;

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
    chatTemplate: {
      baseName: "chat_template",
      type: "Array<LLMObsPromptChatTemplateItem>",
    },
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
    },
    labels: {
      baseName: "labels",
      type: "Array<string>",
    },
    promptId: {
      baseName: "prompt_id",
      type: "string",
    },
    promptVersionUuid: {
      baseName: "prompt_version_uuid",
      type: "string",
    },
    template: {
      baseName: "template",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return LLMObsPromptSDKDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
