/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsAndMetricTagConfigurations } from "./MetricsAndMetricTagConfigurations";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object that includes metrics and metric tag configurations.
 */
export class MetricsAndMetricTagConfigurationsResponse {
  /**
   * Array of metrics and metric tag configurations.
   */
  "data"?: Array<MetricsAndMetricTagConfigurations>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<MetricsAndMetricTagConfigurations>",
    },
  };
}
