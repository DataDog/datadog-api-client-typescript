import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptVersionType } from "./LLMObsPromptVersionType";
import { LLMObsUpdatePromptVersionDataAttributes } from "./LLMObsUpdatePromptVersionDataAttributes";

/**
 * Data object for updating an LLM Observability prompt version.
 */
export class LLMObsUpdatePromptVersionData {
  /**
   * Attributes for updating an LLM Observability prompt version. At least one of `description`, `labels`, or `env_ids` must be provided; all three attributes are optional individually.
   */
  "attributes": LLMObsUpdatePromptVersionDataAttributes;
  /**
   * Resource type of an LLM Observability prompt version.
   */
  "type": LLMObsPromptVersionType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsUpdatePromptVersionDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPromptVersionType",
      required: true,
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
    return LLMObsUpdatePromptVersionData.attributeTypeMap;
  }

  public constructor() {}
}
