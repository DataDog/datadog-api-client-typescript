import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * A partial error for a single annotation that could not be deleted.
 */
export class LLMObsDeleteAnnotationError {
  /**
   * ID of the annotation that could not be deleted.
   */
  "annotationId": string;
  /**
   * Error message.
   */
  "error": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    annotationId: {
      baseName: "annotation_id",
      type: "string",
      required: true,
    },
    error: {
      baseName: "error",
      type: "string",
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
    return LLMObsDeleteAnnotationError.attributeTypeMap;
  }

  public constructor() {}
}
