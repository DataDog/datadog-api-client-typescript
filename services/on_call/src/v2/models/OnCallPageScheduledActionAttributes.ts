import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageScheduledActionAttributesType } from "./OnCallPageScheduledActionAttributesType";

/**
 * The attributes of a scheduled action.
 */
export class OnCallPageScheduledActionAttributes {
  /**
   * The time when the action is scheduled to run.
   */
  "at"?: Date;
  /**
   * The kind of action that is scheduled.
   */
  "type"?: OnCallPageScheduledActionAttributesType;
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
    at: {
      baseName: "at",
      type: "Date",
      format: "date-time",
    },
    type: {
      baseName: "type",
      type: "OnCallPageScheduledActionAttributesType",
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
    return OnCallPageScheduledActionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
