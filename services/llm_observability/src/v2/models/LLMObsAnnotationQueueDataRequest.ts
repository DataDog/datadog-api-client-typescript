import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueDataAttributesRequest } from "./LLMObsAnnotationQueueDataAttributesRequest";
import { LLMObsAnnotationQueueType } from "./LLMObsAnnotationQueueType";

/**
 * Data object for creating an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueDataRequest {
  /**
   * Attributes for creating an LLM Observability annotation queue.
   */
  "attributes": LLMObsAnnotationQueueDataAttributesRequest;
  /**
   * Resource type of an LLM Observability annotation queue.
   */
  "type": LLMObsAnnotationQueueType;
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
      type: "LLMObsAnnotationQueueDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotationQueueType",
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
    return LLMObsAnnotationQueueDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
