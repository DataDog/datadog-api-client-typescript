import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";

/**
 * Attributes of a flattened prompt version returned for SDK consumption. Exactly one of `template` and `chat_template` is returned.
 */
export class LLMObsPromptSDKDataAttributes {
  /**
   * Chat template for this prompt version, as a list of role and content messages. Omitted for text templates.
   */
  "chatTemplate"?: Array<LLMObsPromptChatMessage>;
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
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<LLMObsPromptChatMessage>",
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
