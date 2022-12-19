/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSyntheticsHour } from "./UsageSyntheticsHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of Synthetics API tests run for each hour for a given organization.
 */
export class UsageSyntheticsResponse {
  /**
   * Array with the number of hourly Synthetics test run for a given organization.
   */
  "usage"?: Array<UsageSyntheticsHour>;

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
      type: "Array<UsageSyntheticsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSyntheticsResponse.attributeTypeMap;
  }

  public constructor() {}
}
