/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricBulkConfigureTagsType } from "./MetricBulkConfigureTagsType";
import { MetricBulkTagConfigDeleteAttributes } from "./MetricBulkTagConfigDeleteAttributes";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Request object to bulk delete all tag configurations for metrics matching the given prefix.
 */

export class MetricBulkTagConfigDelete {
  "attributes"?: MetricBulkTagConfigDeleteAttributes;
  /**
   * A text prefix to match against metric names.
   */
  "id": string;
  "type": MetricBulkConfigureTagsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "MetricBulkTagConfigDeleteAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricBulkConfigureTagsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigDelete.attributeTypeMap;
  }

  public constructor() {}
}
