/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricMetadataData } from "./MetricMetadataData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for each requested metric that exists, in request order.
 */
export class MetricMetadataListResponse {
  /**
   * One item per requested metric that exists. Metrics that don't exist are left out.
   */
  "data": Array<MetricMetadataData>;

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
    data: {
      baseName: "data",
      type: "Array<MetricMetadataData>",
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
    return MetricMetadataListResponse.attributeTypeMap;
  }

  public constructor() {}
}
