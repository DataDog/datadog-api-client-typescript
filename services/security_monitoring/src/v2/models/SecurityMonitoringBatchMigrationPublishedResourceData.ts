import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationPublishedResourceAttributes } from "./SecurityMonitoringBatchMigrationPublishedResourceAttributes";
import { SecurityMonitoringBatchMigrationPublishedResourceType } from "./SecurityMonitoringBatchMigrationPublishedResourceType";

/**
 * The publication outcome of a batch migration resource.
 */
export class SecurityMonitoringBatchMigrationPublishedResourceData {
  /**
   * Attributes of the publication outcome of a batch migration resource.
   */
  "attributes": SecurityMonitoringBatchMigrationPublishedResourceAttributes;
  /**
   * The UUID of the batch migration resource.
   */
  "id": string;
  /**
   * The type of resource for a published batch migration resource.
   */
  "type": SecurityMonitoringBatchMigrationPublishedResourceType;
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
      type: "SecurityMonitoringBatchMigrationPublishedResourceAttributes",
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
      type: "SecurityMonitoringBatchMigrationPublishedResourceType",
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
    return SecurityMonitoringBatchMigrationPublishedResourceData.attributeTypeMap;
  }

  public constructor() {}
}
