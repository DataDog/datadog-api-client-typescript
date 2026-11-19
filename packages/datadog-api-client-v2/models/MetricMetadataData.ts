/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricMetadataAttributes } from "./MetricMetadataAttributes";
import { MetricMetadataType } from "./MetricMetadataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for one requested metric.
 */
export class MetricMetadataData {
  /**
   * Metadata for one metric. Every attribute is always present. A value that is unknown or not set is `null`.
   */
  "attributes": MetricMetadataAttributes;
  /**
   * The metric name.
   */
  "id": string;
  /**
   * The metric metadata resource type.
   */
  "type": MetricMetadataType;

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
      type: "MetricMetadataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricMetadataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricMetadataData.attributeTypeMap;
  }

  public constructor() {}
}
