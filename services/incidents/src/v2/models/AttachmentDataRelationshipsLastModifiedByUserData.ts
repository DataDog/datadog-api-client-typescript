import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserType } from "./UserType";

export class AttachmentDataRelationshipsLastModifiedByUserData {
  "id": string;
  /**
   * Users resource type.
   */
  "type": UserType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserType",
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
    return AttachmentDataRelationshipsLastModifiedByUserData.attributeTypeMap;
  }

  public constructor() {}
}
