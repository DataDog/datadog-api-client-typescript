import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an LLM Observability annotation queue. All fields are optional.
 */
export class LLMObsAnnotationQueueUpdateDataAttributesRequest {
  /**
   * Updated description of the annotation queue.
   */
  "description"?: string;
  /**
   * Updated name of the annotation queue.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return LLMObsAnnotationQueueUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
