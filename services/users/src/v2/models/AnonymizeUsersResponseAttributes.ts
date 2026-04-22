import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnonymizeUserError } from "./AnonymizeUserError";

/**
 * Attributes of an anonymize users response.
 */
export class AnonymizeUsersResponseAttributes {
  /**
   * List of errors encountered during anonymization, one entry per failed user.
   */
  "anonymizeErrors": Array<AnonymizeUserError>;
  /**
   * List of user IDs (UUIDs) that were successfully anonymized.
   */
  "anonymizedUserIds": Array<string>;
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
    anonymizeErrors: {
      baseName: "anonymize_errors",
      type: "Array<AnonymizeUserError>",
      required: true,
    },
    anonymizedUserIds: {
      baseName: "anonymized_user_ids",
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
    return AnonymizeUsersResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
