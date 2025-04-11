import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnnotationDisplayBounds } from "./AnnotationDisplayBounds";

/**
 * The definition of `AnnotationDisplay` object.
 */
export class AnnotationDisplay {
  /**
   * The definition of `AnnotationDisplayBounds` object.
   */
  "bounds"?: AnnotationDisplayBounds;
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
    bounds: {
      baseName: "bounds",
      type: "AnnotationDisplayBounds",
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
    return AnnotationDisplay.attributeTypeMap;
  }

  public constructor() {}
}
