import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationListMeta } from "./SecurityMonitoringBatchMigrationListMeta";
import { SecurityMonitoringBatchMigrationResourceData } from "./SecurityMonitoringBatchMigrationResourceData";

/**
 * Response containing batch migration resources.
 */
export class SecurityMonitoringBatchMigrationResourcesListResponse {
  /**
   * The batch migration resources.
   */
  "data": Array<SecurityMonitoringBatchMigrationResourceData>;
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
      type: "Array<SecurityMonitoringBatchMigrationResourceData>",
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
    return SecurityMonitoringBatchMigrationResourcesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
