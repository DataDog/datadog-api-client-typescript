/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceTemplateDataRelationshipsCreatedByUser } from "./MaintenanceTemplateDataRelationshipsCreatedByUser";
import { MaintenanceTemplateDataRelationshipsLastModifiedByUser } from "./MaintenanceTemplateDataRelationshipsLastModifiedByUser";
import { MaintenanceTemplateDataRelationshipsStatusPage } from "./MaintenanceTemplateDataRelationshipsStatusPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of a maintenance template.
 */
export class MaintenanceTemplateDataRelationships {
  /**
   * The Datadog user who created the maintenance template.
   */
  "createdByUser"?: MaintenanceTemplateDataRelationshipsCreatedByUser;
  /**
   * The Datadog user who last modified the maintenance template.
   */
  "lastModifiedByUser"?: MaintenanceTemplateDataRelationshipsLastModifiedByUser;
  /**
   * The status page the maintenance template belongs to.
   */
  "statusPage"?: MaintenanceTemplateDataRelationshipsStatusPage;

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
      type: "MaintenanceTemplateDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "MaintenanceTemplateDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "MaintenanceTemplateDataRelationshipsStatusPage",
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
    return MaintenanceTemplateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
