/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagConfigurationCreateData } from "./MetricTagConfigurationCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object that includes the metric that you would like to configure tags for.
 */
export class MetricTagConfigurationCreateRequest {
  /**
   * Object for a single metric to be configure tags on.
   */
  "data": MetricTagConfigurationCreateData;

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
      type: "MetricTagConfigurationCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfigurationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
