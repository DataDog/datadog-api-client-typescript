import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionDataAttributesResponse } from "./LLMObsAnnotatedInteractionDataAttributesResponse";
import { LLMObsAnnotatedInteractionsType } from "./LLMObsAnnotatedInteractionsType";

/**
 * Data object for a single annotated interaction.
 */
export class LLMObsAnnotatedInteractionDataResponse {
  /**
   * Attributes containing the annotated interaction.
   */
  "attributes": LLMObsAnnotatedInteractionDataAttributesResponse;
  /**
   * The annotation queue ID.
   */
  "id": string;
  /**
   * Resource type for annotated interactions.
   */
  "type": LLMObsAnnotatedInteractionsType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsAnnotatedInteractionDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotatedInteractionsType",
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
    return LLMObsAnnotatedInteractionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
