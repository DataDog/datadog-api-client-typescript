import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The response containing attributes for custom reports.
 */
export class UsageCustomReportsAttributes {
  /**
   * The date the specified custom report was computed.
   */
  "computedOn"?: string;
  /**
   * The ending date of custom report.
   */
  "endDate"?: string;
  /**
   * size
   */
  "size"?: number;
  /**
   * The starting date of custom report.
   */
  "startDate"?: string;
  /**
   * A list of tags to apply to custom reports.
   */
  "tags"?: Array<string>;
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
    computedOn: {
      baseName: "computed_on",
      type: "string",
    },
    endDate: {
      baseName: "end_date",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCustomReportsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
