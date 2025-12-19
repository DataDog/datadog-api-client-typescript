import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachmentDataRelationshipsLastModifiedByUserData } from "./AttachmentDataRelationshipsLastModifiedByUserData";

export class AttachmentDataRelationshipsLastModifiedByUser {
  "data": AttachmentDataRelationshipsLastModifiedByUserData;
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
      type: "AttachmentDataRelationshipsLastModifiedByUserData",
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
    return AttachmentDataRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
