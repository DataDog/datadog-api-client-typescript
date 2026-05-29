import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokensType } from "./PersonalAccessTokensType";
import { PersonalAccessTokenUpdateAttributes } from "./PersonalAccessTokenUpdateAttributes";

/**
 * Object used to update an access token.
 */
export class PersonalAccessTokenUpdateData {
  /**
   * Attributes used to update an access token.
   */
  "attributes": PersonalAccessTokenUpdateAttributes;
  /**
   * ID of the access token.
   */
  "id": string;
  /**
   * Personal access tokens resource type.
   */
  "type": PersonalAccessTokensType;
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
      type: "PersonalAccessTokenUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PersonalAccessTokensType",
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
    return PersonalAccessTokenUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
