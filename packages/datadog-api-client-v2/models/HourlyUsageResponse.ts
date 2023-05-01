/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsage } from "./HourlyUsage";
import { HourlyUsageMetadata } from "./HourlyUsageMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Hourly usage response.
 */
export class HourlyUsageResponse {
  /**
   * Response containing hourly usage.
   */
  "data"?: Array<HourlyUsage>;
  /**
   * The object containing document metadata.
   */
  "meta"?: HourlyUsageMetadata;

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
      type: "Array<HourlyUsage>",
    },
    meta: {
      baseName: "meta",
      type: "HourlyUsageMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageResponse.attributeTypeMap;
  }

  public constructor() {}
}
