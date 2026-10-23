import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageLiveCallOutcome } from "./OnCallPageLiveCallOutcome";

/**
 * Information about a live call that has ended.
 */
export class OnCallPageLiveCallOver {
  /**
   * The outcome of a live call that has ended.
   */
  "outcome"?: OnCallPageLiveCallOutcome;
  /**
   * When support hours start, if the call was placed outside support hours.
   */
  "supportHoursStartAt"?: Date;
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
    outcome: {
      baseName: "outcome",
      type: "OnCallPageLiveCallOutcome",
    },
    supportHoursStartAt: {
      baseName: "support_hours_start_at",
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
    return OnCallPageLiveCallOver.attributeTypeMap;
  }

  public constructor() {}
}
