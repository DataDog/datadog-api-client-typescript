import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationData } from "./SecurityMonitoringBatchMigrationData";
import { SecurityMonitoringBatchMigrationListMeta } from "./SecurityMonitoringBatchMigrationListMeta";

/**
 * Response containing a page of batch migrations.
 */
export class SecurityMonitoringBatchMigrationsListResponse {
  /**
   * The batch migrations.
   */
  "data": Array<SecurityMonitoringBatchMigrationData>;
  /**
   * Metadata of a list response.
   */
  "meta": SecurityMonitoringBatchMigrationListMeta;
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
      type: "Array<SecurityMonitoringBatchMigrationData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringBatchMigrationListMeta",
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
    return SecurityMonitoringBatchMigrationsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
