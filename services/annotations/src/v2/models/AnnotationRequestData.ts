import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnnotationCreateAttributes } from "./AnnotationCreateAttributes";
import { AnnotationType } from "./AnnotationType";

/**
 * Data for creating an annotation.
 */
export class AnnotationRequestData {
  /**
   * Attributes for creating or updating an annotation.
   */
  "attributes": AnnotationCreateAttributes;
  /**
   * Annotation resource type.
   */
  "type": AnnotationType;
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
      type: "AnnotationCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AnnotationType",
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
    return AnnotationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
