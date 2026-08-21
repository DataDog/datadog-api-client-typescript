import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationQueueLabelSchemaUpdateData } from "./LLMObsAnnotationQueueLabelSchemaUpdateData";

/**
 * Request to update the label schema of an annotation queue.
 */
export class LLMObsAnnotationQueueLabelSchemaUpdateRequest {
  /**
   * Data object for updating an annotation queue label schema.
   */
  "data": LLMObsAnnotationQueueLabelSchemaUpdateData;
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
      type: "LLMObsAnnotationQueueLabelSchemaUpdateData",
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
    return LLMObsAnnotationQueueLabelSchemaUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
