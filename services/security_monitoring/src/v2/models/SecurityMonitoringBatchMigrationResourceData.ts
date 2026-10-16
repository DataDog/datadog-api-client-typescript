import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationResourceAttributes } from "./SecurityMonitoringBatchMigrationResourceAttributes";
import { SecurityMonitoringBatchMigrationResourceType } from "./SecurityMonitoringBatchMigrationResourceType";

/**
 * A batch migration resource.
 */
export class SecurityMonitoringBatchMigrationResourceData {
  /**
   * Attributes of a batch migration resource.
   */
  "attributes": SecurityMonitoringBatchMigrationResourceAttributes;
  /**
   * The UUID of the batch migration resource.
   */
  "id": string;
  /**
   * The type of resource for a batch migration resource.
   */
  "type": SecurityMonitoringBatchMigrationResourceType;
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
      type: "SecurityMonitoringBatchMigrationResourceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationResourceType",
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
    return SecurityMonitoringBatchMigrationResourceData.attributeTypeMap;
  }

  public constructor() {}
}
