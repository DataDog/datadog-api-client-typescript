import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the ordered list of log index names.
 */
export class LogsIndexesOrder {
  /**
   * Array of strings identifying by their name(s) the index(es) of your organization.
   * Logs are tested against the query filter of each index one by one, following the order of the array.
   * Logs are eventually stored in the first matching index.
   */
  "indexNames": Array<string>;
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
    indexNames: {
      baseName: "index_names",
      type: "Array<string>",
      required: true,
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
    return LogsIndexesOrder.attributeTypeMap;
  }

  public constructor() {}
}
