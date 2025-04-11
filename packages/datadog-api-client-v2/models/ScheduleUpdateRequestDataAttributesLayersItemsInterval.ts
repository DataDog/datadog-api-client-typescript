/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Specifies how the rotation repeats: number of days, plus optional seconds, up to the given maximums.
 */
export class ScheduleUpdateRequestDataAttributesLayersItemsInterval {
  /**
   * How many days each rotation cycle should span.
   */
  "days"?: number;
  /**
   * Additional seconds to add to the rotation cycle (for example, partial days).
   */
  "seconds"?: number;

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
    days: {
      baseName: "days",
      type: "number",
      format: "int32",
    },
    seconds: {
      baseName: "seconds",
      type: "number",
      format: "int64",
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
    return ScheduleUpdateRequestDataAttributesLayersItemsInterval.attributeTypeMap;
  }

  public constructor() {}
}
