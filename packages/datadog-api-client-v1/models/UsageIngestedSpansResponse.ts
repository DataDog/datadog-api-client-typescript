/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageIngestedSpansHour } from "./UsageIngestedSpansHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the ingested spans usage for each hour for a given organization.
 */
export class UsageIngestedSpansResponse {
  /**
   * Get hourly usage for ingested spans.
   */
  "usage"?: Array<UsageIngestedSpansHour>;

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
      type: "Array<UsageIngestedSpansHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageIngestedSpansResponse.attributeTypeMap;
  }

  public constructor() {}
}
