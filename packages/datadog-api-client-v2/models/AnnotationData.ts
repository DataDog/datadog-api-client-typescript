/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnnotationAttributes } from "./AnnotationAttributes";
import { AnnotationType } from "./AnnotationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
