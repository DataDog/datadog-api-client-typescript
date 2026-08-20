import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueInteractionsDataAttributesResponse } from "./LLMObsAnnotationQueueInteractionsDataAttributesResponse";
import { LLMObsAnnotationQueueInteractionsType } from "./LLMObsAnnotationQueueInteractionsType";

/**
 * Data object for the interaction addition response.
 */
export class LLMObsAnnotationQueueInteractionsDataResponse {
  /**
   * Attributes of the interaction addition response.
   */
  "attributes": LLMObsAnnotationQueueInteractionsDataAttributesResponse;
  /**
   * The queue ID the interactions were added to.
   */
  "id": string;
  /**
   * Resource type for annotation queue interactions.
   */
  "type": LLMObsAnnotationQueueInteractionsType;
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
      type: "LLMObsAnnotationQueueInteractionsDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotationQueueInteractionsType",
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
    return LLMObsAnnotationQueueInteractionsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
