import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the batch migration publish request.
 */
export class SecurityMonitoringBatchMigrationPublishAttributes {
  /**
   * Unique UUIDs of the resources to publish. Up to 1000 IDs. When omitted or empty,
   * every `completed` resource of the batch migration is published.
   */
  "resourceIds"?: Array<string>;
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
    resourceIds: {
      baseName: "resourceIds",
      type: "Array<string>",
      format: "uuid",
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
    return SecurityMonitoringBatchMigrationPublishAttributes.attributeTypeMap;
  }

  public constructor() {}
}
