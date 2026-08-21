/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A text annotation displayed on the workflow canvas.
 */
export class Annotation {
  /**
   * The annotation's position and size on the workflow canvas.
   */
  "display": AnnotationDisplay;
  /**
   * The unique identifier of this annotation within the workflow.
   */
  "id": string;
  /**
   * Markdown content displayed in an annotation.
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
