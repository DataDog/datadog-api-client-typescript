/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricOrigin } from "./MetricOrigin";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the metric.
 */
export class MetricMetadata {
  /**
   * Metric origin information.
   */
  "origin"?: MetricOrigin;

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
    origin: {
      baseName: "origin",
      type: "MetricOrigin",
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
    return MetricMetadata.attributeTypeMap;
  }

  public constructor() {}
}
