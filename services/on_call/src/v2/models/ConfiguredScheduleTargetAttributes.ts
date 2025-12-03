import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleTargetPosition } from "./ScheduleTargetPosition";

/**
 * Attributes for a configured schedule target, including position.
 */
export class ConfiguredScheduleTargetAttributes {
  /**
   * Specifies the position of a schedule target (example `previous`, `current`, or `next`).
   */
  "position": ScheduleTargetPosition;
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
    position: {
      baseName: "position",
      type: "ScheduleTargetPosition",
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
    return ConfiguredScheduleTargetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
