import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueLabelSchemaAttributes } from "./LLMObsAnnotationQueueLabelSchemaAttributes";
import { LLMObsAnnotationQueueType } from "./LLMObsAnnotationQueueType";

/**
 * Data object for an annotation queue label schema.
 */
export class LLMObsAnnotationQueueLabelSchemaData {
  /**
   * Attributes of an annotation queue label schema.
   */
  "attributes": LLMObsAnnotationQueueLabelSchemaAttributes;
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
      type: "LLMObsAnnotationQueueLabelSchemaAttributes",
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
    return LLMObsAnnotationQueueLabelSchemaData.attributeTypeMap;
  }

  public constructor() {}
}
