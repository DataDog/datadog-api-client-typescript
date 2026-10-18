import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationPublishedResourceData } from "./SecurityMonitoringBatchMigrationPublishedResourceData";

/**
 * Response containing the publication outcome of each resource.
 */
export class SecurityMonitoringBatchMigrationPublishResponse {
  /**
   * The publication outcome of each resource.
   */
  "data": Array<SecurityMonitoringBatchMigrationPublishedResourceData>;
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
      type: "Array<SecurityMonitoringBatchMigrationPublishedResourceData>",
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
    return SecurityMonitoringBatchMigrationPublishResponse.attributeTypeMap;
  }

  public constructor() {}
}
