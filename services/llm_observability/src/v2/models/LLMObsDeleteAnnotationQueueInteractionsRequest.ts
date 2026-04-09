import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteAnnotationQueueInteractionsDataRequest } from "./LLMObsDeleteAnnotationQueueInteractionsDataRequest";

/**
 * Request to delete interactions from an LLM Observability annotation queue.
 */
export class LLMObsDeleteAnnotationQueueInteractionsRequest {
  /**
   * Data object for deleting interactions from an annotation queue.
   */
  "data": LLMObsDeleteAnnotationQueueInteractionsDataRequest;
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
      type: "LLMObsDeleteAnnotationQueueInteractionsDataRequest",
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
    return LLMObsDeleteAnnotationQueueInteractionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
