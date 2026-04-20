import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnonymizeUsersRequestData } from "./AnonymizeUsersRequestData";

/**
 * Request body for anonymizing users.
 */
export class AnonymizeUsersRequest {
  /**
   * Object to anonymize a list of users.
   */
  "data": AnonymizeUsersRequestData;
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
      type: "AnonymizeUsersRequestData",
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
    return AnonymizeUsersRequest.attributeTypeMap;
  }

  public constructor() {}
}
