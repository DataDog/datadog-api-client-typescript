/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagConfigurationAttributes } from "./MetricTagConfigurationAttributes";
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single metric tag configuration.
 */
export class MetricTagConfiguration {
  /**
   * Object containing the definition of a metric tag configuration attributes.
   */
  "attributes"?: MetricTagConfigurationAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric tag configuration resource type.
   */
  "type"?: MetricTagConfigurationType;

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
      type: "MetricTagConfigurationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
