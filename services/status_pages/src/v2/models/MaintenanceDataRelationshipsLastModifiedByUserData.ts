import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesUserType } from "./StatusPagesUserType";

export class MaintenanceDataRelationshipsLastModifiedByUserData {
  /**
   * The ID of the Datadog user who last modified the maintenance.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": StatusPagesUserType;
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
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "StatusPagesUserType",
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
    return MaintenanceDataRelationshipsLastModifiedByUserData.attributeTypeMap;
  }

  public constructor() {}
}
