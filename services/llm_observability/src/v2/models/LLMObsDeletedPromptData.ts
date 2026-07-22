import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeletedPromptDataAttributes } from "./LLMObsDeletedPromptDataAttributes";
import { LLMObsPromptType } from "./LLMObsPromptType";

/**
 * Data object confirming that an LLM Observability prompt was deleted.
 */
export class LLMObsDeletedPromptData {
  /**
   * Attributes confirming that an LLM Observability prompt was deleted.
   */
  "attributes": LLMObsDeletedPromptDataAttributes;
  /**
   * Unique identifier of the deleted prompt.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability prompt.
   */
  "type": LLMObsPromptType;
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
      type: "LLMObsDeletedPromptDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPromptType",
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
    return LLMObsDeletedPromptData.attributeTypeMap;
  }

  public constructor() {}
}
