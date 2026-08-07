import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceUpdateDataRelationshipsMaintenance } from "./MaintenanceUpdateDataRelationshipsMaintenance";
import { MaintenanceUpdateDataRelationshipsUser } from "./MaintenanceUpdateDataRelationshipsUser";

/**
 * Relationships of a maintenance update resource.
 */
export class MaintenanceUpdateDataRelationships {
  /**
   * A user relationship of a maintenance update.
   */
  "createdByUser"?: MaintenanceUpdateDataRelationshipsUser;
  /**
   * A user relationship of a maintenance update.
   */
  "lastModifiedByUser"?: MaintenanceUpdateDataRelationshipsUser;
  /**
   * The parent maintenance of the update.
   */
  "maintenance"?: MaintenanceUpdateDataRelationshipsMaintenance;
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
      type: "MaintenanceUpdateDataRelationshipsUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "MaintenanceUpdateDataRelationshipsUser",
    },
    maintenance: {
      baseName: "maintenance",
      type: "MaintenanceUpdateDataRelationshipsMaintenance",
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
    return MaintenanceUpdateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
