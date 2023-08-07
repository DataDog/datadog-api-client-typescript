/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageMetadata } from "./HourlyUsageMetadata";
import { UsageCICommittersDetailedHour } from "./UsageCICommittersDetailedHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the user email for each CI Committed for each hour for a given organization.
 */
export class UsageCICommittersDetailedResponse {
  /**
   * An array of objects regarding hourly usage of CI Committers Detailed response.
   */
  "data"?: Array<UsageCICommittersDetailedHour>;
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
      type: "Array<UsageCICommittersDetailedHour>",
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
    return UsageCICommittersDetailedResponse.attributeTypeMap;
  }

  public constructor() {}
}
