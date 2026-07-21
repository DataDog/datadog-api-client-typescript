import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptTemplate } from "./LLMObsPromptTemplate";
import { LLMObsPromptVersionLabel } from "./LLMObsPromptVersionLabel";

/**
 * Attributes for creating an LLM Observability prompt and its first version. `prompt_id` and `template` are required; all other attributes are optional.
 */
export class LLMObsCreatePromptDataAttributes {
  /**
   * Optional description of the prompt.
   */
  "description"?: string;
  /**
   * Optional feature-flag environment UUIDs the service attempts to enable and configure to use the first version as their default after creation.
   */
  "envIds"?: Array<string>;
  /**
   * Optional labels to attach to the first version. Do not use this attribute for new integrations.
   */
  "labels"?: Array<LLMObsPromptVersionLabel>;
  /**
   * Customer-provided identifier for the new prompt.
   */
  "promptId": string;
  /**
   * A text template or a list of chat messages.
   */
  "template": LLMObsPromptTemplate;
  /**
   * Optional title of the prompt.
   */
  "title"?: string;
  /**
   * Optional user-supplied version identifier for the first version.
   */
  "userVersion"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    envIds: {
      baseName: "env_ids",
      type: "Array<string>",
    },
    labels: {
      baseName: "labels",
      type: "Array<LLMObsPromptVersionLabel>",
    },
    promptId: {
      baseName: "prompt_id",
      type: "string",
      required: true,
    },
    template: {
      baseName: "template",
      type: "LLMObsPromptTemplate",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
    },
    userVersion: {
      baseName: "user_version",
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
    return LLMObsCreatePromptDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
