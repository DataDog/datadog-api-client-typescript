import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueType } from "./LLMObsAnnotationQueueType";
import { LLMObsAnnotationQueueUpdateDataAttributesRequest } from "./LLMObsAnnotationQueueUpdateDataAttributesRequest";

/**
 * Data object for updating an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueUpdateDataRequest {
  /**
   * Attributes for updating an LLM Observability annotation queue. All fields are optional.
   */
  "attributes": LLMObsAnnotationQueueUpdateDataAttributesRequest;
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
      type: "LLMObsAnnotationQueueUpdateDataAttributesRequest",
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
    return LLMObsAnnotationQueueUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
