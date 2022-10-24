/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Number of lambda functions and sum of the invocations of all lambda functions
 * for each hour for a given organization.
 */
export class UsageLambdaHour {
  /**
   * Contains the number of different functions for each region and AWS account.
   */
  "funcCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the sum of invocations of all functions.
   */
  "invocationsSum"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    funcCount: {
      baseName: "func_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    invocationsSum: {
      baseName: "invocations_sum",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLambdaHour.attributeTypeMap;
  }

  public constructor() {}
}
