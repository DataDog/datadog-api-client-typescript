import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationItem } from "./LLMObsAnnotationItem";
import { LLMObsInteractionType } from "./LLMObsInteractionType";

/**
 * An interaction with its associated annotations.
 */
export class LLMObsAnnotatedInteractionItem {
  /**
   * List of annotations for this interaction.
   */
  "annotations": Array<LLMObsAnnotationItem>;
  /**
   * Identifier of the content (trace ID or session ID) for this interaction.
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
    annotations: {
      baseName: "annotations",
      type: "Array<LLMObsAnnotationItem>",
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
    return LLMObsAnnotatedInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
