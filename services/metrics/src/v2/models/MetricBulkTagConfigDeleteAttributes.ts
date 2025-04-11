import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Optional parameters for bulk deleting metric tag configurations.
 */
export class MetricBulkTagConfigDeleteAttributes {
  /**
   * A list of account emails to notify when the configuration is applied.
   */
  "emails"?: Array<string>;
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
    emails: {
      baseName: "emails",
      type: "Array<string>",
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
    return MetricBulkTagConfigDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
