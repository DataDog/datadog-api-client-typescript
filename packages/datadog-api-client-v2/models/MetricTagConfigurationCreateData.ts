/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagConfigurationCreateAttributes } from "./MetricTagConfigurationCreateAttributes";
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single metric to be configure tags on.
 */
export class MetricTagConfigurationCreateData {
  /**
   * Object containing the definition of a metric tag configuration to be created.
   */
  "attributes"?: MetricTagConfigurationCreateAttributes;
  /**
   * The metric name for this resource.
   */
  "id": string;
  /**
   * The metric tag configuration resource type.
   */
  "type": MetricTagConfigurationType;

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
      type: "MetricTagConfigurationCreateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfigurationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
