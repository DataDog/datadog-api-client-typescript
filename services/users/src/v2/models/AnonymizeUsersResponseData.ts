import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnonymizeUsersResponseAttributes } from "./AnonymizeUsersResponseAttributes";
import { AnonymizeUsersResponseType } from "./AnonymizeUsersResponseType";

/**
 * Response data for anonymizing users.
 */
export class AnonymizeUsersResponseData {
  /**
   * Attributes of an anonymize users response.
   */
  "attributes"?: AnonymizeUsersResponseAttributes;
  /**
   * Unique identifier of the response.
   */
  "id"?: string;
  /**
   * Type of the anonymize users response.
   */
  "type"?: AnonymizeUsersResponseType;
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
    attributes: {
      baseName: "attributes",
      type: "AnonymizeUsersResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AnonymizeUsersResponseType",
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
    return AnonymizeUsersResponseData.attributeTypeMap;
  }

  public constructor() {}
}
