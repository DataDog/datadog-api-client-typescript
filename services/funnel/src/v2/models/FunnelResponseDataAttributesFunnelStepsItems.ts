import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelResponseElapsedTime } from "./FunnelResponseElapsedTime";

export class FunnelResponseDataAttributesFunnelStepsItems {
  "elapsedTimeToNextStep"?: FunnelResponseElapsedTime;
  "label"?: string;
  "value"?: number;
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
    elapsedTimeToNextStep: {
      baseName: "elapsed_time_to_next_step",
      type: "FunnelResponseElapsedTime",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return FunnelResponseDataAttributesFunnelStepsItems.attributeTypeMap;
  }

  public constructor() {}
}
