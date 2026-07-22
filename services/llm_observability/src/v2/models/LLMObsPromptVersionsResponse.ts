import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptVersionListData } from "./LLMObsPromptVersionListData";

/**
 * Response containing the versions of an LLM Observability prompt.
 */
export class LLMObsPromptVersionsResponse {
  /**
   * Prompt versions ordered from newest to oldest.
   */
  "data": Array<LLMObsPromptVersionListData>;
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
    data: {
      baseName: "data",
      type: "Array<LLMObsPromptVersionListData>",
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
    return LLMObsPromptVersionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
