/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricsAndMetricTagConfigurations } from "./MetricsAndMetricTagConfigurations";

export class MetricsAndMetricTagConfigurationsResponse {
  /**
   * Array of metrics and metric tag configurations.
   */
  "data"?: Array<MetricsAndMetricTagConfigurations>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    data: {
      baseName: "data",
      type: "Array<MetricsAndMetricTagConfigurations>",
    },
  };

  static getAttributeTypeMap() {
    return MetricsAndMetricTagConfigurationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
