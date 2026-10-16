import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationPublishedResourceStatus } from "./SecurityMonitoringBatchMigrationPublishedResourceStatus";

/**
 * Attributes of the publication outcome of a batch migration resource.
 */
export class SecurityMonitoringBatchMigrationPublishedResourceAttributes {
  /**
   * The reason why the resource could not be published.
   */
  "error"?: string;
  /**
   * The ID of the created Cloud SIEM detection rule.
   */
  "ruleId"?: string;
  /**
   * The outcome of publishing a batch migration resource.
   */
  "status": SecurityMonitoringBatchMigrationPublishedResourceStatus;
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
    error: {
      baseName: "error",
      type: "string",
    },
    ruleId: {
      baseName: "ruleId",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringBatchMigrationPublishedResourceStatus",
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
    return SecurityMonitoringBatchMigrationPublishedResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
