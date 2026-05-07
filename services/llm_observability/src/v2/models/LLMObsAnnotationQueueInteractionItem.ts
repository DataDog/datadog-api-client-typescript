import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsInteractionType } from "./LLMObsInteractionType";

/**
 * A single interaction to add to an annotation queue.
 */
export class LLMObsAnnotationQueueInteractionItem {
  /**
   * Identifier of the content (trace ID or session ID) for this interaction.
   */
  "contentId": string;
  /**
   * Type of interaction in an annotation queue.
   */
  "type": LLMObsInteractionType;
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
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsInteractionType",
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
    return LLMObsAnnotationQueueInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
