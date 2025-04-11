import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";

/**
 * A list of annotations used in the workflow. These are like sticky notes for your workflow!
 */
export class Annotation {
  /**
   * The definition of `AnnotationDisplay` object.
   */
  "display": AnnotationDisplay;
  /**
   * The `Annotation` `id`.
   */
  "id": string;
  /**
   * The definition of `AnnotationMarkdownTextAnnotation` object.
   */
  "markdownTextAnnotation": AnnotationMarkdownTextAnnotation;
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
    display: {
      baseName: "display",
      type: "AnnotationDisplay",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    markdownTextAnnotation: {
      baseName: "markdownTextAnnotation",
      type: "AnnotationMarkdownTextAnnotation",
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
    return Annotation.attributeTypeMap;
  }

  public constructor() {}
}
