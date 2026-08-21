import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionItem } from "./LLMObsAnnotatedInteractionItem";

/**
 * Attributes containing the list of annotated interactions.
 */
export class LLMObsAnnotatedInteractionsDataAttributesResponse {
  /**
   * List of interactions with their annotations.
   */
  "annotatedInteractions": Array<LLMObsAnnotatedInteractionItem>;
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
    annotatedInteractions: {
      baseName: "annotated_interactions",
      type: "Array<LLMObsAnnotatedInteractionItem>",
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
    return LLMObsAnnotatedInteractionsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
