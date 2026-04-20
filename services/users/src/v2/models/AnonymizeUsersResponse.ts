import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnonymizeUsersResponseData } from "./AnonymizeUsersResponseData";

/**
 * Response containing the result of an anonymize users request.
 */
export class AnonymizeUsersResponse {
  /**
   * Response data for anonymizing users.
   */
  "data"?: AnonymizeUsersResponseData;
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
    data: {
      baseName: "data",
      type: "AnonymizeUsersResponseData",
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
    return AnonymizeUsersResponse.attributeTypeMap;
  }

  public constructor() {}
}
