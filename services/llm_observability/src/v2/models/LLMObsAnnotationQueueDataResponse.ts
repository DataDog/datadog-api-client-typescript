import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueDataAttributesResponse } from "./LLMObsAnnotationQueueDataAttributesResponse";
import { LLMObsAnnotationQueueType } from "./LLMObsAnnotationQueueType";

/**
 * Data object for an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueDataResponse {
  /**
   * Attributes of an LLM Observability annotation queue.
   */
  "attributes": LLMObsAnnotationQueueDataAttributesResponse;
  /**
   * Unique identifier of the annotation queue.
   */
  "id": string;
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
      type: "LLMObsAnnotationQueueDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return LLMObsAnnotationQueueDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
