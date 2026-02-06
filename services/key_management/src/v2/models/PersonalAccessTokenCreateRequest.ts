import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokenCreateData } from "./PersonalAccessTokenCreateData";

/**
 * Request to create a personal access token.
 */
export class PersonalAccessTokenCreateRequest {
  /**
   * Object used to create a personal access token.
   */
  "data": PersonalAccessTokenCreateData;
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
      type: "PersonalAccessTokenCreateData",
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
    return PersonalAccessTokenCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
