import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A rule validation error.
 */
export class SecurityMonitoringBatchMigrationPublishErrorDetail {
  /**
   * The error code.
   */
  "code"?: string;
  /**
   * The error message.
   */
  "message"?: string;
  /**
   * The rule field the error applies to.
   */
  "target"?: string;
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
    message: {
      baseName: "message",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
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
    return SecurityMonitoringBatchMigrationPublishErrorDetail.attributeTypeMap;
  }

  public constructor() {}
}
