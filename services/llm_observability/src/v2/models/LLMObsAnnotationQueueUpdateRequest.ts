import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueUpdateDataRequest } from "./LLMObsAnnotationQueueUpdateDataRequest";

/**
 * Request to update an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueUpdateRequest {
  /**
   * Data object for updating an LLM Observability annotation queue.
   */
  "data": LLMObsAnnotationQueueUpdateDataRequest;
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
      type: "LLMObsAnnotationQueueUpdateDataRequest",
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
    return LLMObsAnnotationQueueUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
