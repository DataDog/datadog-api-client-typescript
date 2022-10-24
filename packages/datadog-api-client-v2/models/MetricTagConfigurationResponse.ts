/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagConfiguration } from "./MetricTagConfiguration";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Response object which includes a single metric's tag configuration.
 */
export class MetricTagConfigurationResponse {
  /**
   * Object for a single metric tag configuration.
   */
  "data"?: MetricTagConfiguration;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "MetricTagConfiguration",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
