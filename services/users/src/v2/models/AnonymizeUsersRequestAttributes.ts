import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an anonymize users request.
 */
export class AnonymizeUsersRequestAttributes {
  /**
   * List of user IDs (UUIDs) to anonymize.
   */
  "userIds": Array<string>;
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
    userIds: {
      baseName: "user_ids",
      type: "Array<string>",
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
    return AnonymizeUsersRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
