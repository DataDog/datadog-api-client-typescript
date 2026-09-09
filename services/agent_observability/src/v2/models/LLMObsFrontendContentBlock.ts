import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsFrontendContentBlockType } from "./LLMObsFrontendContentBlockType";

/**
 * Validation requirements for a `frontend` display block.
 */
export class LLMObsFrontendContentBlock {
  /**
   * HTML code rendered by a `frontend` block. Required for `frontend` blocks.
   */
  "code": string;
  /**
   * Type discriminator for a `frontend` display block.
   */
  "type"?: LLMObsFrontendContentBlockType;
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
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsFrontendContentBlockType",
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
    return LLMObsFrontendContentBlock.attributeTypeMap;
  }

  public constructor() {}
}
