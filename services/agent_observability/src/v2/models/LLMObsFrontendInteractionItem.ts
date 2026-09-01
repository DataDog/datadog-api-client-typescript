import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsFrontendContent } from "./LLMObsFrontendContent";
import { LLMObsFrontendInteractionType } from "./LLMObsFrontendInteractionType";

/**
 * An interaction whose rendered content is supplied directly as web
 * content. The server generates `content_id` deterministically from the
 * content.
 */
export class LLMObsFrontendInteractionItem {
  /**
   * Web content that makes up a `frontend` interaction.
   */
  "frontend": LLMObsFrontendContent;
  /**
   * Type discriminator for a `frontend` interaction.
   */
  "type": LLMObsFrontendInteractionType;
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
    frontend: {
      baseName: "frontend",
      type: "LLMObsFrontendContent",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsFrontendInteractionType",
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
    return LLMObsFrontendInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
