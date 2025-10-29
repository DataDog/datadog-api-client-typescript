/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelResponseDataAttributesFunnelStepsItems } from "./FunnelResponseDataAttributesFunnelStepsItems";
import { FunnelResponseElapsedTime } from "./FunnelResponseElapsedTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FunnelResponseDataAttributes {
  "endToEndConversionRate"?: number;
  "endToEndElapsedTime"?: FunnelResponseElapsedTime;
  "funnelSteps"?: Array<FunnelResponseDataAttributesFunnelStepsItems>;
  "initialCount"?: number;

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
    endToEndConversionRate: {
      baseName: "end_to_end_conversion_rate",
      type: "number",
      format: "double",
    },
    endToEndElapsedTime: {
      baseName: "end_to_end_elapsed_time",
      type: "FunnelResponseElapsedTime",
    },
    funnelSteps: {
      baseName: "funnel_steps",
      type: "Array<FunnelResponseDataAttributesFunnelStepsItems>",
    },
    initialCount: {
      baseName: "initial_count",
      type: "number",
      format: "int64",
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
    return FunnelResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
