import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageAsIncludedRelationshipsCreatedByUser } from "./StatusPageAsIncludedRelationshipsCreatedByUser";
import { StatusPageAsIncludedRelationshipsLastModifiedByUser } from "./StatusPageAsIncludedRelationshipsLastModifiedByUser";

export class StatusPageAsIncludedRelationships {
  "createdByUser"?: StatusPageAsIncludedRelationshipsCreatedByUser;
  "lastModifiedByUser"?: StatusPageAsIncludedRelationshipsLastModifiedByUser;
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
      type: "StatusPageAsIncludedRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "StatusPageAsIncludedRelationshipsLastModifiedByUser",
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
    return StatusPageAsIncludedRelationships.attributeTypeMap;
  }

  public constructor() {}
}
