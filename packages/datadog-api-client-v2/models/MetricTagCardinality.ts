/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagCardinalityAttributes } from "./MetricTagCardinalityAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing metadata and attributes related to a specific tag key associated with the metric.
 */
export class MetricTagCardinality {
  /**
   * An object containing properties related to the tag key
   */
  "attributes"?: MetricTagCardinalityAttributes;
  /**
   * The name of the tag key.
   */
  "id"?: string;
  /**
   * This describes the endpoint action.
   */
  "type"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "MetricTagCardinalityAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagCardinality.attributeTypeMap;
  }

  public constructor() {}
}
