import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourcesDeleteData } from "./SecurityMonitoringBatchMigrationResourcesDeleteData";

/**
 * Request to delete resources from a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesDeleteRequest {
  /**
   * Data of the resources to delete from a batch migration.
   */
  "data": SecurityMonitoringBatchMigrationResourcesDeleteData;
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
      type: "SecurityMonitoringBatchMigrationResourcesDeleteData",
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
    return SecurityMonitoringBatchMigrationResourcesDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
