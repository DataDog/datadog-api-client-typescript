import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationPublishAttributes } from "./SecurityMonitoringBatchMigrationPublishAttributes";
import { SecurityMonitoringBatchMigrationPublishType } from "./SecurityMonitoringBatchMigrationPublishType";

/**
 * Data of the batch migration publish request.
 */
export class SecurityMonitoringBatchMigrationPublishData {
  /**
   * Attributes of the batch migration publish request.
   */
  "attributes": SecurityMonitoringBatchMigrationPublishAttributes;
  /**
   * The type of resource for a batch migration publish request.
   */
  "type": SecurityMonitoringBatchMigrationPublishType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringBatchMigrationPublishAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationPublishType",
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
    return SecurityMonitoringBatchMigrationPublishData.attributeTypeMap;
  }

  public constructor() {}
}
