import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueLabelSchemaUpdateAttributes } from "./LLMObsAnnotationQueueLabelSchemaUpdateAttributes";
import { LLMObsAnnotationQueueType } from "./LLMObsAnnotationQueueType";

/**
 * Data object for updating an annotation queue label schema.
 */
export class LLMObsAnnotationQueueLabelSchemaUpdateData {
  /**
   * Attributes for updating an annotation queue label schema.
   */
  "attributes": LLMObsAnnotationQueueLabelSchemaUpdateAttributes;
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
      type: "LLMObsAnnotationQueueLabelSchemaUpdateAttributes",
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
    return LLMObsAnnotationQueueLabelSchemaUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
