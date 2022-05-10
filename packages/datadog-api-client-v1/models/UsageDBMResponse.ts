/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageDBMHour } from "./UsageDBMHour";

import { AttributeTypeMap } from "../util";

/**
 * Response containing the Database Monitoring usage for each hour for a given organization.
 */
export class UsageDBMResponse {
  /**
   * Get hourly usage for Database Monitoring
   */
  "usage"?: Array<UsageDBMHour>;

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
      type: "Array<UsageDBMHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageDBMResponse.attributeTypeMap;
  }

  public constructor() {}
}
