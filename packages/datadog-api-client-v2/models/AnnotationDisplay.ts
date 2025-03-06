/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnnotationDisplayBounds } from "./AnnotationDisplayBounds";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AnnotationDisplay` object.
 */
export class AnnotationDisplay {
  /**
   * The definition of `AnnotationDisplayBounds` object.
   */
  "bounds"?: AnnotationDisplayBounds;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnnotationDisplay.attributeTypeMap;
  }

  public constructor() {}
}
