import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptVersionData } from "./LLMObsPromptVersionData";

/**
 * Response containing a specific version of an LLM Observability prompt.
 */
export class LLMObsPromptVersionResponse {
  /**
   * Data object for a specific version of an LLM Observability prompt.
   */
  "data": LLMObsPromptVersionData;
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
    data: {
      baseName: "data",
      type: "LLMObsPromptVersionData",
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
    return LLMObsPromptVersionResponse.attributeTypeMap;
  }

  public constructor() {}
}
