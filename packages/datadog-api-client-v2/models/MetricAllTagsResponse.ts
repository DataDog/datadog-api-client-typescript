/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricAllTags } from "./MetricAllTags";

import { AttributeTypeMap } from "../util";

/**
 * Response object that includes a single metric's indexed tags.
 */
export class MetricAllTagsResponse {
  /**
   * Object for a single metric's indexed tags.
   */
  "data"?: MetricAllTags;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "MetricAllTags",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricAllTagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
