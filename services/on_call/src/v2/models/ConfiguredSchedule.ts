import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfiguredScheduleTargetAttributes } from "./ConfiguredScheduleTargetAttributes";
import { ConfiguredScheduleTargetRelationships } from "./ConfiguredScheduleTargetRelationships";
import { ConfiguredScheduleTargetType } from "./ConfiguredScheduleTargetType";

/**
 * Full resource representation of a configured schedule target with position (previous, current, or next).
 */
export class ConfiguredSchedule {
  /**
   * Attributes for a configured schedule target, including position.
   */
  "attributes": ConfiguredScheduleTargetAttributes;
  /**
   * Specifies the unique identifier of the configured schedule target.
   */
  "id": string;
  /**
   * Represents the relationships of a configured schedule target.
   */
  "relationships": ConfiguredScheduleTargetRelationships;
  /**
   * Indicates that the resource is of type `schedule_target`.
   */
  "type": ConfiguredScheduleTargetType;
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
    attributes: {
      baseName: "attributes",
      type: "ConfiguredScheduleTargetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ConfiguredScheduleTargetRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfiguredScheduleTargetType",
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
    return ConfiguredSchedule.attributeTypeMap;
  }

  public constructor() {}
}
