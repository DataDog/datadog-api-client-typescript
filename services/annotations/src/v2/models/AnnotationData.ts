import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnnotationAttributes } from "./AnnotationAttributes";
import { AnnotationType } from "./AnnotationType";

/**
 * A single annotation resource.
 */
export class AnnotationData {
  /**
   * Attributes of an annotation returned in a response.
   */
  "attributes": AnnotationAttributes;
  /**
   * Unique identifier of the annotation.
   */
  "id": string;
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
      type: "AnnotationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return AnnotationData.attributeTypeMap;
  }

  public constructor() {}
}
