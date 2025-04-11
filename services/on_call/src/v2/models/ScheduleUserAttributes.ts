import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Provides basic user information for a schedule, including a name and email address.
 */
export class ScheduleUserAttributes {
  /**
   * The user's email address.
   */
  "email"?: string;
  /**
   * The user's name.
   */
  "name"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ScheduleUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
