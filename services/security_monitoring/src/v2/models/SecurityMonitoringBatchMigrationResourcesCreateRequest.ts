import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourcesCreateData } from "./SecurityMonitoringBatchMigrationResourcesCreateData";

/**
 * Request to add resources to a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesCreateRequest {
  /**
   * Data of the resources to add to a batch migration.
   */
  "data": SecurityMonitoringBatchMigrationResourcesCreateData;
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
      type: "SecurityMonitoringBatchMigrationResourcesCreateData",
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
    return SecurityMonitoringBatchMigrationResourcesCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
