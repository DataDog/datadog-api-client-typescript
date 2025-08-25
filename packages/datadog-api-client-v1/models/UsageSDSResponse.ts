/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSDSHour } from "./UsageSDSHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the Sensitive Data Scanner usage for each hour for a given organization.
 */
export class UsageSDSResponse {
  /**
   * Get hourly usage for Sensitive Data Scanner.
   */
  "usage"?: Array<UsageSDSHour>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "Array<UsageSDSHour>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSDSResponse.attributeTypeMap;
  }

  public constructor() {}
}
