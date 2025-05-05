/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeRestriction } from "./TimeRestriction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Holds time zone information and a list of time restrictions for a routing rule.
 */
export class TimeRestrictions {
  /**
   * Defines the list of time-based restrictions.
   */
  "restrictions": Array<TimeRestriction>;
  /**
   * Specifies the time zone applicable to the restrictions.
   */
  "timeZone": string;

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
    restrictions: {
      baseName: "restrictions",
      type: "Array<TimeRestriction>",
      required: true,
    },
    timeZone: {
      baseName: "time_zone",
      type: "string",
      required: true,
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
    return TimeRestrictions.attributeTypeMap;
  }

  public constructor() {}
}
