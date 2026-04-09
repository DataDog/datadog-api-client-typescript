import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueInteractionItem } from "./LLMObsAnnotationQueueInteractionItem";

/**
 * Attributes for adding interactions to an annotation queue.
 */
export class LLMObsAnnotationQueueInteractionsDataAttributesRequest {
  /**
   * List of interactions to add to the queue. Must contain at least one item.
   */
  "interactions": Array<LLMObsAnnotationQueueInteractionItem>;
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
    interactions: {
      baseName: "interactions",
      type: "Array<LLMObsAnnotationQueueInteractionItem>",
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
    return LLMObsAnnotationQueueInteractionsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
