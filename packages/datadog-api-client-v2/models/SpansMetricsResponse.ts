/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricResponseData } from "./SpansMetricResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * All the available span-based metric objects.
 */
export class SpansMetricsResponse {
  /**
   * A list of span-based metric objects.
   */
  "data"?: Array<SpansMetricResponseData>;

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
      type: "Array<SpansMetricResponseData>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
