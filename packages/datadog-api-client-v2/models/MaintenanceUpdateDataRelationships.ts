/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceUpdateDataRelationshipsMaintenance } from "./MaintenanceUpdateDataRelationshipsMaintenance";
import { MaintenanceUpdateDataRelationshipsUser } from "./MaintenanceUpdateDataRelationshipsUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
