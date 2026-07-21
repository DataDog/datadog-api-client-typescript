import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampType } from "./IncidentTimestampType";

/**
 * Attributes for creating a timestamp override.
 */
export class IncidentTimestampOverrideDataAttributesRequest {
  /**
   * The type of timestamp to override.
   */
  "timestampType": IncidentTimestampType;
  /**
   * The overridden timestamp value.
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
      type: "IncidentTimestampType",
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
    return IncidentTimestampOverrideDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
