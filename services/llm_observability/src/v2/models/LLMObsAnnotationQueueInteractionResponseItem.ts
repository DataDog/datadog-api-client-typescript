import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsInteractionType } from "./LLMObsInteractionType";

/**
 * A single interaction result.
 */
export class LLMObsAnnotationQueueInteractionResponseItem {
  /**
   * Whether this interaction already existed in the queue.
   */
  "alreadyExisted": boolean;
  /**
   * Identifier of the content for this interaction.
   */
  "contentId": string;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
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
    alreadyExisted: {
      baseName: "already_existed",
      type: "boolean",
      required: true,
    },
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
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
    return LLMObsAnnotationQueueInteractionResponseItem.attributeTypeMap;
  }

  public constructor() {}
}
