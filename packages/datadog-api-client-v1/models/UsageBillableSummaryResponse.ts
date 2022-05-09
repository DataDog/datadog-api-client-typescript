/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageBillableSummaryHour } from "./UsageBillableSummaryHour";

import { AttributeTypeMap } from "../util";

/**
 * Response with monthly summary of data billed by Datadog.
 */
export class UsageBillableSummaryResponse {
  /**
   * An array of objects regarding usage of billable summary.
   */
  "usage"?: Array<UsageBillableSummaryHour>;

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
      type: "Array<UsageBillableSummaryHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageBillableSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
