import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptTemplate } from "./LLMObsPromptTemplate";
import { LLMObsPromptVersionLabel } from "./LLMObsPromptVersionLabel";

/**
 * Attributes for creating a new version of an LLM Observability prompt. `template` is required; all other attributes are optional.
 */
export class LLMObsCreatePromptVersionDataAttributes {
  /**
   * Optional description of this version.
   */
  "description"?: string;
  /**
   * Optional feature-flag environment UUIDs the service attempts to enable and configure to use this version as their default after creation.
   */
  "envIds"?: Array<string>;
  /**
   * Optional labels to attach to this version. Do not use this attribute for new integrations.
   */
  "labels"?: Array<LLMObsPromptVersionLabel>;
  /**
   * A text template or a list of chat messages.
   */
  "template": LLMObsPromptTemplate;
  /**
   * Optional user-supplied version identifier for this version.
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
    template: {
      baseName: "template",
      type: "LLMObsPromptTemplate",
      required: true,
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
    return LLMObsCreatePromptVersionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
