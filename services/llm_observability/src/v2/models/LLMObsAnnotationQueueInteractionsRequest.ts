import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueInteractionsDataRequest } from "./LLMObsAnnotationQueueInteractionsDataRequest";

/**
 * Request to add interactions to an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueInteractionsRequest {
  /**
   * Data object for adding interactions to an annotation queue.
   */
  "data": LLMObsAnnotationQueueInteractionsDataRequest;
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
    data: {
      baseName: "data",
      type: "LLMObsAnnotationQueueInteractionsDataRequest",
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
    return LLMObsAnnotationQueueInteractionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
