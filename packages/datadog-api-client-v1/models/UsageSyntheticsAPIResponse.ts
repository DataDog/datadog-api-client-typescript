/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSyntheticsAPIHour } from "./UsageSyntheticsAPIHour";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Response containing the number of Synthetics API tests run for each hour for a given organization.
 */
export class UsageSyntheticsAPIResponse {
  /**
   * Get hourly usage for Synthetics API tests.
   */
  "usage"?: Array<UsageSyntheticsAPIHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageSyntheticsAPIHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSyntheticsAPIResponse.attributeTypeMap;
  }

  public constructor() {}
}
