import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Paging settings
 */
export class LogsAggregateRequestPage {
  /**
   * The returned paging point to use to get the next results. Note: at most 1000 results can be paged.
   */
  "cursor"?: string;
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
    cursor: {
      baseName: "cursor",
      type: "string",
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
    return LogsAggregateRequestPage.attributeTypeMap;
  }

  public constructor() {}
}
