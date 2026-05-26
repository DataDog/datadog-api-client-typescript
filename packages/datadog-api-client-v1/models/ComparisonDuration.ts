/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComparisonCustomTimeframe } from "./ComparisonCustomTimeframe";
import { ComparisonDurationType } from "./ComparisonDurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The comparison period. Use a preset `type` value or set `type` to `custom_timeframe` and provide `custom_timeframe` with explicit millisecond epoch bounds.
 */
export class ComparisonDuration {
  /**
   * Fixed time range for a `custom_timeframe` comparison.
   */
  "customTimeframe"?: ComparisonCustomTimeframe;
  /**
   * The comparison window type.
   */
  "type": ComparisonDurationType;

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
    customTimeframe: {
      baseName: "custom_timeframe",
      type: "ComparisonCustomTimeframe",
    },
    type: {
      baseName: "type",
      type: "ComparisonDurationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComparisonDuration.attributeTypeMap;
  }

  public constructor() {}
}
