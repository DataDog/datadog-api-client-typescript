import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueInteractionsType } from "./LLMObsAnnotationQueueInteractionsType";
import { LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest } from "./LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest";

/**
 * Data object for deleting interactions from an annotation queue.
 */
export class LLMObsDeleteAnnotationQueueInteractionsDataRequest {
  /**
   * Attributes for deleting interactions from an annotation queue.
   */
  "attributes": LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest;
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
      type: "LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest",
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
    return LLMObsDeleteAnnotationQueueInteractionsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
