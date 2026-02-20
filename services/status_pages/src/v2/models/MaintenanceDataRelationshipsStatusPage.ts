import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataRelationshipsStatusPageData } from "./MaintenanceDataRelationshipsStatusPageData";

export class MaintenanceDataRelationshipsStatusPage {
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
