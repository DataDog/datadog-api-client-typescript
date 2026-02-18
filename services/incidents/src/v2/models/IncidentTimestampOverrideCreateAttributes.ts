import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimestampType } from "./TimestampType";

/**
 * Attributes for creating an incident timestamp override.
 */
export class IncidentTimestampOverrideCreateAttributes {
  /**
   * The type of timestamp being overridden.
   */
  "timestampType": TimestampType;
  /**
   * The timestamp value for the override.
   */
  "timestampValue": Date;
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
    timestampType: {
      baseName: "timestamp_type",
      type: "TimestampType",
      required: true,
    },
    timestampValue: {
      baseName: "timestamp_value",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IncidentTimestampOverrideCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
