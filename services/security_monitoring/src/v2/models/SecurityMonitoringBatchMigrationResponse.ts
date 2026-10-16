import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationData } from "./SecurityMonitoringBatchMigrationData";

/**
 * Response containing a batch migration.
 */
export class SecurityMonitoringBatchMigrationResponse {
  /**
   * A batch migration.
   */
  "data": SecurityMonitoringBatchMigrationData;
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
      type: "SecurityMonitoringBatchMigrationData",
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
    return SecurityMonitoringBatchMigrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
