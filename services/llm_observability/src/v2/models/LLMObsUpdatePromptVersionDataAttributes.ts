import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptVersionLabel } from "./LLMObsPromptVersionLabel";

/**
 * Attributes for updating an LLM Observability prompt version. At least one of `description`, `labels`, or `env_ids` must be provided; all three attributes are optional individually.
 */
export class LLMObsUpdatePromptVersionDataAttributes {
  /**
   * Optional new description for this version.
   */
  "description"?: string;
  /**
   * Optional feature-flag environment UUIDs the service attempts to enable and configure to use this version as their default.
   */
  "envIds"?: Array<string>;
  /**
   * Optional new labels for this version. Do not use this attribute for new integrations.
   */
  "labels"?: Array<LLMObsPromptVersionLabel>;
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
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsUpdatePromptVersionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
