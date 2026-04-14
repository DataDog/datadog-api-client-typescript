import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Target for user journey search.
 */
export class UserJourneySearchTarget {
  /**
   * End value.
   */
  "end"?: string;
  /**
   * Start value.
   */
  "start"?: string;
  /**
   * Target type.
   */
  "type": string;
  /**
   * Target value.
   */
  "value"?: string;
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
    end: {
      baseName: "end",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return UserJourneySearchTarget.attributeTypeMap;
  }

  public constructor() {}
}
