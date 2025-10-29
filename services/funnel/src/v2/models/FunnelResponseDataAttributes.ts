import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelResponseDataAttributesFunnelStepsItems } from "./FunnelResponseDataAttributesFunnelStepsItems";
import { FunnelResponseElapsedTime } from "./FunnelResponseElapsedTime";

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
