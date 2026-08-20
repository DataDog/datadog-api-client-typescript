import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueInteractionsDataAttributesRequest } from "./LLMObsAnnotationQueueInteractionsDataAttributesRequest";
import { LLMObsAnnotationQueueInteractionsType } from "./LLMObsAnnotationQueueInteractionsType";

/**
 * Data object for adding interactions to an annotation queue.
 */
export class LLMObsAnnotationQueueInteractionsDataRequest {
  /**
   * Attributes for adding interactions to an annotation queue.
   */
  "attributes": LLMObsAnnotationQueueInteractionsDataAttributesRequest;
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
      type: "LLMObsAnnotationQueueInteractionsDataAttributesRequest",
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
    return LLMObsAnnotationQueueInteractionsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
