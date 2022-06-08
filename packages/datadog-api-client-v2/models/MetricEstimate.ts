/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricEstimateAttributes } from "./MetricEstimateAttributes";
import { MetricEstimateResourceType } from "./MetricEstimateResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a metric cardinality estimate.
 */
export class MetricEstimate {
  /**
   * Object containing the definition of a metric estimate attribute.
   */
  "attributes"?: MetricEstimateAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric estimate resource type.
   */
  "type"?: MetricEstimateResourceType;

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
      type: "MetricEstimateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricEstimateResourceType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricEstimate.attributeTypeMap;
  }

  public constructor() {}
}
