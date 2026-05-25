import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiPromptResponseData } from "./AiPromptResponseData";

/**
 * Response containing a list of AI prompts.
 */
export class AiPromptsResponse {
  /**
   * The list of AI prompts.
   */
  "data": Array<AiPromptResponseData>;
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
      type: "Array<AiPromptResponseData>",
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
    return AiPromptsResponse.attributeTypeMap;
  }

  public constructor() {}
}
