import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToLeakedKeyData } from "./RelationshipToLeakedKeyData";

/**
 * Relationship to the leak the access token was found in. `data` is null when the access token has not been detected as leaked.
 */
export class RelationshipToLeakedKey {
  /**
   * Relationship to the leak the access token was found in.
   */
  "data": RelationshipToLeakedKeyData | null;
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
      type: "RelationshipToLeakedKeyData",
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
    return RelationshipToLeakedKey.attributeTypeMap;
  }

  public constructor() {}
}
