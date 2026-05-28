/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnnotationCreateAttributes } from "./AnnotationCreateAttributes";
import { AnnotationType } from "./AnnotationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
