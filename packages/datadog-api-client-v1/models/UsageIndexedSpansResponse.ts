/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageIndexedSpansHour } from "./UsageIndexedSpansHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A response containing indexed spans usage.
 */
export class UsageIndexedSpansResponse {
  /**
   * Array with the number of hourly traces indexed for a given organization.
   */
  "usage"?: Array<UsageIndexedSpansHour>;

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
      type: "Array<UsageIndexedSpansHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageIndexedSpansResponse.attributeTypeMap;
  }

  public constructor() {}
}
