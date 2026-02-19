import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestIncludedUserAttributes } from "./ChangeRequestIncludedUserAttributes";

/**
 * An included user resource.
 */
export class ChangeRequestIncludedUser {
  /**
   * Attributes of an included user.
   */
  "attributes": ChangeRequestIncludedUserAttributes;
  /**
   * The user UUID.
   */
  "id": string;
  /**
   * The resource type.
   */
  "type": string;
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
      type: "ChangeRequestIncludedUserAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return ChangeRequestIncludedUser.attributeTypeMap;
  }

  public constructor() {}
}
