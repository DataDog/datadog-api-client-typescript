import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataRelationshipsStatusPageData } from "./MaintenanceDataRelationshipsStatusPageData";

/**
 * The status page the maintenance belongs to.
 */
export class MaintenanceDataRelationshipsStatusPage {
  /**
   * The data object identifying the status page associated with a maintenance.
   */
  "data": MaintenanceDataRelationshipsStatusPageData;
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
      type: "MaintenanceDataRelationshipsStatusPageData",
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
    return MaintenanceDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
