/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagConfigurationUpdateData } from "./MetricTagConfigurationUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object that includes the metric that you would like to edit the tag configuration on.
 */
export class MetricTagConfigurationUpdateRequest {
  /**
   * Object for a single tag configuration to be edited.
   */
  "data": MetricTagConfigurationUpdateData;

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
      type: "MetricTagConfigurationUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfigurationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
