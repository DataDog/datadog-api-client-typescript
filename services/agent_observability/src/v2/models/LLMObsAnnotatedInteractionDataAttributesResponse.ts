import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionItem } from "./LLMObsAnnotatedInteractionItem";

/**
 * Attributes containing the annotated interaction.
 */
export class LLMObsAnnotatedInteractionDataAttributesResponse {
  /**
   * An interaction with its associated annotations.
   */
  "annotatedInteraction": LLMObsAnnotatedInteractionItem;
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
    annotatedInteraction: {
      baseName: "annotated_interaction",
      type: "LLMObsAnnotatedInteractionItem",
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
    return LLMObsAnnotatedInteractionDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
