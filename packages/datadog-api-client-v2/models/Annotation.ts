/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
