import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokenType } from "./PersonalAccessTokenType";
import { PersonalAccessTokenUpdateAttributes } from "./PersonalAccessTokenUpdateAttributes";

/**
 * Object used to update a personal access token.
 */
export class PersonalAccessTokenUpdateData {
  /**
   * Attributes used to update a personal access token.
   */
  "attributes": PersonalAccessTokenUpdateAttributes;
  /**
   * UUID of the personal access token. Must match the path parameter.
   */
  "id": string;
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
      type: "PersonalAccessTokenUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return PersonalAccessTokenUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
