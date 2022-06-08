/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageLambdaHour } from "./UsageLambdaHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of lambda functions and sum of the invocations of all lambda functions
 * for each hour for a given organization.
 */
export class UsageLambdaResponse {
  /**
   * Get hourly usage for Lambda.
   */
  "usage"?: Array<UsageLambdaHour>;

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
      type: "Array<UsageLambdaHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLambdaResponse.attributeTypeMap;
  }

  public constructor() {}
}
