/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricResponseAttributes } from "./SpansMetricResponseAttributes";
import { SpansMetricType } from "./SpansMetricType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The span-based metric properties.
 */
export class SpansMetricResponseData {
  /**
   * The object describing a Datadog span-based metric.
   */
  "attributes"?: SpansMetricResponseAttributes;
  /**
   * The name of the span-based metric.
   */
  "id"?: string;
  /**
   * The type of resource. The value should always be spans_metrics.
   */
  "type"?: SpansMetricType;

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
      type: "SpansMetricResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SpansMetricType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansMetricResponseData.attributeTypeMap;
  }

  public constructor() {}
}
