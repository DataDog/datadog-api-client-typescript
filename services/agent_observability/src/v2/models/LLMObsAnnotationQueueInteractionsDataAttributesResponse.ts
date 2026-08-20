import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueInteractionResponseItem } from "./LLMObsAnnotationQueueInteractionResponseItem";

/**
 * Attributes of the interaction addition response.
 */
export class LLMObsAnnotationQueueInteractionsDataAttributesResponse {
  /**
   * List of interactions that were processed.
   */
  "interactions": Array<LLMObsAnnotationQueueInteractionResponseItem>;
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
      type: "Array<LLMObsAnnotationQueueInteractionResponseItem>",
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
    return LLMObsAnnotationQueueInteractionsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
