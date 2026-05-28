import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnnotationRequestData } from "./AnnotationRequestData";

/**
 * Request body for creating an annotation.
 */
export class AnnotationCreateRequest {
  /**
   * Data for creating an annotation.
   */
  "data": AnnotationRequestData;
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
      type: "AnnotationRequestData",
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
    return AnnotationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
