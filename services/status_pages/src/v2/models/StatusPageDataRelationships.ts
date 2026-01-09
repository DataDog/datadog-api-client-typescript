import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageDataRelationshipsCreatedByUser } from "./StatusPageDataRelationshipsCreatedByUser";
import { StatusPageDataRelationshipsLastModifiedByUser } from "./StatusPageDataRelationshipsLastModifiedByUser";

export class StatusPageDataRelationships {
  "createdByUser"?: StatusPageDataRelationshipsCreatedByUser;
  "lastModifiedByUser"?: StatusPageDataRelationshipsLastModifiedByUser;
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
    createdByUser: {
      baseName: "created_by_user",
      type: "StatusPageDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "StatusPageDataRelationshipsLastModifiedByUser",
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
    return StatusPageDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
