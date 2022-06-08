/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSyntheticsBrowserHour } from "./UsageSyntheticsBrowserHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of Synthetics Browser tests run for each hour for a given organization.
 */
export class UsageSyntheticsBrowserResponse {
  /**
   * Get hourly usage for Synthetics Browser tests.
   */
  "usage"?: Array<UsageSyntheticsBrowserHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageSyntheticsBrowserHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSyntheticsBrowserResponse.attributeTypeMap;
  }

  public constructor() {}
}
