import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringBatchMigrationPublishErrorDetail } from "./SecurityMonitoringBatchMigrationPublishErrorDetail";

/**
 * The reason why the resource could not be published.
 */
export class SecurityMonitoringBatchMigrationPublishError {
  /**
   * The error code returned on rule creation.
   */
  "code"?: string;
  /**
   * The rule validation errors returned on rule creation.
   */
  "details"?: Array<SecurityMonitoringBatchMigrationPublishErrorDetail>;
  /**
   * The error message.
   */
  "message": string;
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
    code: {
      baseName: "code",
      type: "string",
    },
    details: {
      baseName: "details",
      type: "Array<SecurityMonitoringBatchMigrationPublishErrorDetail>",
    },
    message: {
      baseName: "message",
      type: "string",
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
    return SecurityMonitoringBatchMigrationPublishError.attributeTypeMap;
  }

  public constructor() {}
}
