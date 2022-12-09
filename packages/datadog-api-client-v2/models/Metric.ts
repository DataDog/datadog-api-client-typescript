/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricType } from "./MetricType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single metric tag configuration.
 */
export class Metric {
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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
    return Metric.attributeTypeMap;
  }

  public constructor() {}
}
