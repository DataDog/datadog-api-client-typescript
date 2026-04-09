import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionsDataAttributesResponse } from "./LLMObsAnnotatedInteractionsDataAttributesResponse";
import { LLMObsAnnotatedInteractionsType } from "./LLMObsAnnotatedInteractionsType";

/**
 * Data object for annotated interactions.
 */
export class LLMObsAnnotatedInteractionsDataResponse {
  /**
   * Attributes containing the list of annotated interactions.
   */
  "attributes": LLMObsAnnotatedInteractionsDataAttributesResponse;
  /**
   * The queue ID.
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
      type: "LLMObsAnnotatedInteractionsDataAttributesResponse",
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
    return LLMObsAnnotatedInteractionsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
