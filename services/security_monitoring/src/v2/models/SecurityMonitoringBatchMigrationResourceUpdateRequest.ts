import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourceUpdateData } from "./SecurityMonitoringBatchMigrationResourceUpdateData";

/**
 * Request to update a batch migration resource.
 */
export class SecurityMonitoringBatchMigrationResourceUpdateRequest {
  /**
   * Data of the batch migration resource to update.
   */
  "data": SecurityMonitoringBatchMigrationResourceUpdateData;
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
      type: "SecurityMonitoringBatchMigrationResourceUpdateData",
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
    return SecurityMonitoringBatchMigrationResourceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
