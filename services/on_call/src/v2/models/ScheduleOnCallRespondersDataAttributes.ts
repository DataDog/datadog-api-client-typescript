import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a schedule's on-call responders lookup.
 */
export class ScheduleOnCallRespondersDataAttributes {
  /**
   * The timestamp the responders were resolved at.
   */
  "scheduledAt"?: Date;
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
    scheduledAt: {
      baseName: "scheduled_at",
      type: "Date",
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
    return ScheduleOnCallRespondersDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
