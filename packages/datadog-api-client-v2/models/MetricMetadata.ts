/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricOrigin } from "./MetricOrigin";

import { AttributeTypeMap } from "../util";

/**
 * Metadata for the metric.
 */
export class MetricMetadata {
  /**
   * Metric origin information.
   */
  "origin"?: MetricOrigin;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    origin: {
      baseName: "origin",
      type: "MetricOrigin",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricMetadata.attributeTypeMap;
  }

  public constructor() {}
}
