/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageLogsByIndexHour } from "./UsageLogsByIndexHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of indexed logs for each hour and index for a given organization.
 */
export class UsageLogsByIndexResponse {
  /**
   * An array of objects regarding hourly usage of logs by index response.
   */
  "usage"?: Array<UsageLogsByIndexHour>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageLogsByIndexHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLogsByIndexResponse.attributeTypeMap;
  }

  public constructor() {}
}
