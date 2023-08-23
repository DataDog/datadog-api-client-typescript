/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageFargateHour } from "./UsageFargateHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of Fargate tasks run and hourly usage.
 */
export class UsageFargateResponse {
  /**
   * Array with the number of hourly Fargate tasks recorded for a given organization.
   */
  "usage"?: Array<UsageFargateHour>;

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
      type: "Array<UsageFargateHour>",
    },
  };
}
