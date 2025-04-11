import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestDataAttributesLayersItemsInterval } from "./ScheduleCreateRequestDataAttributesLayersItemsInterval";
import { ScheduleCreateRequestDataAttributesLayersItemsMembersItems } from "./ScheduleCreateRequestDataAttributesLayersItemsMembersItems";
import { ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems } from "./ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems";

/**
 * Describes a schedule layer, including rotation intervals, members, restrictions, and timeline settings.
 */
export class ScheduleCreateRequestDataAttributesLayersItems {
  /**
   * The date/time when this layer becomes active (in ISO 8601).
   */
  "effectiveDate": Date;
  /**
   * The date/time after which this layer no longer applies (in ISO 8601).
   */
  "endDate"?: Date;
  /**
   * Defines how frequently the rotation repeats, using days and/or seconds (up to certain limits).
   */
  "interval": ScheduleCreateRequestDataAttributesLayersItemsInterval;
  /**
   * A list of members who participate in this layer's rotation.
   */
  "members": Array<ScheduleCreateRequestDataAttributesLayersItemsMembersItems>;
  /**
   * The name of this layer.
   */
  "name": string;
  /**
   * Zero or more time-based restrictions (for example, only weekdays, during business hours).
   */
  "restrictions"?: Array<ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems>;
  /**
   * The date/time when the rotation for this layer starts (in ISO 8601).
   */
  "rotationStart": Date;
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
    effectiveDate: {
      baseName: "effective_date",
      type: "Date",
      required: true,
      format: "date-time",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    interval: {
      baseName: "interval",
      type: "ScheduleCreateRequestDataAttributesLayersItemsInterval",
      required: true,
    },
    members: {
      baseName: "members",
      type: "Array<ScheduleCreateRequestDataAttributesLayersItemsMembersItems>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    restrictions: {
      baseName: "restrictions",
      type: "Array<ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems>",
    },
    rotationStart: {
      baseName: "rotation_start",
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
    return ScheduleCreateRequestDataAttributesLayersItems.attributeTypeMap;
  }

  public constructor() {}
}
