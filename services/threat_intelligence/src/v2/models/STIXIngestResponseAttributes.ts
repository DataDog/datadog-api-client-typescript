import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Counters describing the result of the STIX ingestion request.
 */
export class STIXIngestResponseAttributes {
  /**
   * The number of supported indicators accepted.
   */
  "accepted": number;
  /**
   * The number of indicators with patterns that could not be parsed.
   */
  "invalid": number;
  /**
   * The number of indicator objects with an unsupported STIX version or a pattern that produced no supported observable values.
   */
  "unsupported": number;
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
    accepted: {
      baseName: "accepted",
      type: "number",
      required: true,
      format: "int64",
    },
    invalid: {
      baseName: "invalid",
      type: "number",
      required: true,
      format: "int64",
    },
    unsupported: {
      baseName: "unsupported",
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
    return STIXIngestResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
