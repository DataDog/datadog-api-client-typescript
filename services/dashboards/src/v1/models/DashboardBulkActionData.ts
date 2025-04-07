import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardResourceType } from "./DashboardResourceType";

/**
 * Dashboard bulk action request data.
 */
export class DashboardBulkActionData {
  /**
   * Dashboard resource ID.
   */
  "id": string;
  /**
   * Dashboard resource type.
   */
  "type": DashboardResourceType;
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
    },
    type: {
      baseName: "type",
      type: "DashboardResourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardBulkActionData.attributeTypeMap;
  }

  public constructor() {}
}
