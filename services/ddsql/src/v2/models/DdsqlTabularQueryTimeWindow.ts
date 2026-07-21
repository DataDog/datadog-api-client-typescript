import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Time window scoping the underlying data sources, expressed in Unix milliseconds
 * since the epoch. Inclusive on `from_timestamp`, exclusive on `to_timestamp`.
 * Results from static tables (for example, `dd.hosts`) are not affected by the
 * time window, but the field must still be provided.
 */
export class DdsqlTabularQueryTimeWindow {
  /**
   * Start of the query window (inclusive), in Unix milliseconds since the epoch.
   */
  "fromTimestamp": number;
  /**
   * End of the query window (exclusive), in Unix milliseconds since the epoch.
   */
  "toTimestamp": number;
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
    fromTimestamp: {
      baseName: "from_timestamp",
      type: "number",
      required: true,
      format: "int64",
    },
    toTimestamp: {
      baseName: "to_timestamp",
      type: "number",
      required: true,
      format: "int64",
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
    return DdsqlTabularQueryTimeWindow.attributeTypeMap;
  }

  public constructor() {}
}
