/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceDataRelationshipsCreatedByUser } from "./MaintenanceDataRelationshipsCreatedByUser";
import { MaintenanceDataRelationshipsLastModifiedByUser } from "./MaintenanceDataRelationshipsLastModifiedByUser";
import { MaintenanceDataRelationshipsStatusPage } from "./MaintenanceDataRelationshipsStatusPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of a maintenance.
 */
export class MaintenanceDataRelationships {
  "createdByUser"?: MaintenanceDataRelationshipsCreatedByUser;
  "lastModifiedByUser"?: MaintenanceDataRelationshipsLastModifiedByUser;
  "statusPage"?: MaintenanceDataRelationshipsStatusPage;

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
      type: "MaintenanceDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "MaintenanceDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "MaintenanceDataRelationshipsStatusPage",
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
    return MaintenanceDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
