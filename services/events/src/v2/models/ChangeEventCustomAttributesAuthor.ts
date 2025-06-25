import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesAuthorType } from "./ChangeEventCustomAttributesAuthorType";

/**
 * The entity that made the change. Optional, if provided it must include `type` and `name`.
 */
export class ChangeEventCustomAttributesAuthor {
  /**
   * The name of the user or system that made the change. Limited to 128 characters.
   */
  "name": string;
  /**
   * Author's type.
   */
  "type": ChangeEventCustomAttributesAuthorType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeEventCustomAttributesAuthorType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeEventCustomAttributesAuthor.attributeTypeMap;
  }

  public constructor() {}
}
