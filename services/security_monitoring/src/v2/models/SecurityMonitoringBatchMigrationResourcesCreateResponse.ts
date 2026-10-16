import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourceData } from "./SecurityMonitoringBatchMigrationResourceData";

/**
 * Response containing the batch migration resources that were added.
 */
export class SecurityMonitoringBatchMigrationResourcesCreateResponse {
  /**
   * The added batch migration resources.
   */
  "data": Array<SecurityMonitoringBatchMigrationResourceData>;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringBatchMigrationResourcesCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
