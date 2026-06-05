/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A partial error for a single annotation that could not be deleted.
 */
export class LLMObsDeleteAnnotationError {
  /**
   * ID of the annotation that could not be deleted.
   */
  "annotationId": string;
  /**
   * Error message.
   */
  "error": string;

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
    annotationId: {
      baseName: "annotation_id",
      type: "string",
      required: true,
    },
    error: {
      baseName: "error",
      type: "string",
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
    return LLMObsDeleteAnnotationError.attributeTypeMap;
  }

  public constructor() {}
}
