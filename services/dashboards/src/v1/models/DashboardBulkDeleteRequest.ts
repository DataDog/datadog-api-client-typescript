import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardBulkActionData } from "./DashboardBulkActionData";

/**
 * Dashboard bulk delete request body.
 */
export class DashboardBulkDeleteRequest {
  /**
   * List of dashboard bulk action request data objects.
   */
  "data": Array<DashboardBulkActionData>;
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
      type: "Array<DashboardBulkActionData>",
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
    return DashboardBulkDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
