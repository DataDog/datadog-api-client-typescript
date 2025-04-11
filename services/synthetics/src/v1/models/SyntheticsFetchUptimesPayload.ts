import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing IDs of Synthetic tests and a timeframe.
 */
export class SyntheticsFetchUptimesPayload {
  /**
   * Timestamp in seconds (Unix epoch) for the start of uptime.
   */
  "fromTs": number;
  /**
   * An array of Synthetic test IDs you want uptimes for.
   */
  "publicIds": Array<string>;
  /**
   * Timestamp in seconds (Unix epoch) for the end of uptime.
   */
  "toTs": number;
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
    fromTs: {
      baseName: "from_ts",
      type: "number",
      required: true,
      format: "int64",
    },
    publicIds: {
      baseName: "public_ids",
      type: "Array<string>",
      required: true,
    },
    toTs: {
      baseName: "to_ts",
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
    return SyntheticsFetchUptimesPayload.attributeTypeMap;
  }

  public constructor() {}
}
