/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricAllTagsAttributes } from "./MetricAllTagsAttributes";
import { MetricType } from "./MetricType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object for a single metric's indexed tags.
 */
export class MetricAllTags {
  /**
   * Object containing the definition of a metric's tags.
   */
  "attributes"?: MetricAllTagsAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric resource type.
   */
  "type"?: MetricType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "MetricAllTagsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricAllTags.attributeTypeMap;
  }

  public constructor() {}
}
