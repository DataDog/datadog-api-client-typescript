import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationItem } from "./LLMObsAnnotationItem";
import { LLMObsTraceInteractionType } from "./LLMObsTraceInteractionType";

/**
 * A trace, experiment trace, or session interaction with its associated annotations.
 */
export class LLMObsTraceAnnotatedInteractionItem {
  /**
   * List of annotations for this interaction.
   */
  "annotations": Array<LLMObsAnnotationItem>;
  /**
   * Upstream entity identifier supplied by the caller.
   */
  "contentId": string;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
  /**
   * Type of an upstream-entity interaction.
   */
  "type": LLMObsTraceInteractionType;
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
      type: "LLMObsTraceInteractionType",
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
    return LLMObsTraceAnnotatedInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
