import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueLabelSchemaData } from "./LLMObsAnnotationQueueLabelSchemaData";

/**
 * Response containing the label schema of an annotation queue.
 */
export class LLMObsAnnotationQueueLabelSchemaResponse {
  /**
   * Data object for an annotation queue label schema.
   */
  "data": LLMObsAnnotationQueueLabelSchemaData;
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
      type: "LLMObsAnnotationQueueLabelSchemaData",
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
    return LLMObsAnnotationQueueLabelSchemaResponse.attributeTypeMap;
  }

  public constructor() {}
}
