/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageTimeseriesHour } from "./UsageTimeseriesHour";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing hourly usage of timeseries.
 */
export class UsageTimeseriesResponse {
  /**
   * An array of objects regarding hourly usage of timeseries.
   */
  "usage"?: Array<UsageTimeseriesHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageTimeseriesHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
