import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokenUpdateData } from "./PersonalAccessTokenUpdateData";

/**
 * Request to update a personal access token.
 */
export class PersonalAccessTokenUpdateRequest {
  /**
   * Object used to update a personal access token.
   */
  "data": PersonalAccessTokenUpdateData;
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
      type: "PersonalAccessTokenUpdateData",
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
    return PersonalAccessTokenUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
