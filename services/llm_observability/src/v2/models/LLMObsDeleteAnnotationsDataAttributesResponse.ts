import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteAnnotationError } from "./LLMObsDeleteAnnotationError";

/**
 * Attributes of the annotation deletion response.
 */
export class LLMObsDeleteAnnotationsDataAttributesResponse {
  /**
   * IDs of the successfully deleted annotations.
   */
  "annotationIds": Array<string>;
  /**
   * Errors for annotations that could not be deleted.
   */
  "errors": Array<LLMObsDeleteAnnotationError>;
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
    annotationIds: {
      baseName: "annotation_ids",
      type: "Array<string>",
      required: true,
    },
    errors: {
      baseName: "errors",
      type: "Array<LLMObsDeleteAnnotationError>",
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
    return LLMObsDeleteAnnotationsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
