import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptVersionDataAttributes } from "./LLMObsPromptVersionDataAttributes";
import { LLMObsPromptVersionType } from "./LLMObsPromptVersionType";

/**
 * Data object for a specific version of an LLM Observability prompt.
 */
export class LLMObsPromptVersionData {
  /**
   * Attributes of a specific version of an LLM Observability prompt.
   */
  "attributes": LLMObsPromptVersionDataAttributes;
  /**
   * Unique identifier of the prompt version.
   */
  "id": string;
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
      type: "LLMObsPromptVersionDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return LLMObsPromptVersionData.attributeTypeMap;
  }

  public constructor() {}
}
