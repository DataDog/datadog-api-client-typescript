import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokenCreateAttributes } from "./PersonalAccessTokenCreateAttributes";
import { PersonalAccessTokenType } from "./PersonalAccessTokenType";

/**
 * Object used to create a personal access token.
 */
export class PersonalAccessTokenCreateData {
  /**
   * Attributes used to create a personal access token.
   */
  "attributes": PersonalAccessTokenCreateAttributes;
  /**
   * Personal access tokens resource type.
   */
  "type": PersonalAccessTokenType;
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
      type: "PersonalAccessTokenCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PersonalAccessTokenType",
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
    return PersonalAccessTokenCreateData.attributeTypeMap;
  }

  public constructor() {}
}
