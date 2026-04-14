import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Join keys for user journey queries.
 */
export class UserJourneyJoinKeys {
  /**
   * Primary join key.
   */
  "primary": string;
  /**
   * Secondary join keys.
   */
  "secondary"?: Array<string>;
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
    primary: {
      baseName: "primary",
      type: "string",
      required: true,
    },
    secondary: {
      baseName: "secondary",
      type: "Array<string>",
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
    return UserJourneyJoinKeys.attributeTypeMap;
  }

  public constructor() {}
}
