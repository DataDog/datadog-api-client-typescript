import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Uses a GeoIP database to enrich logs based on an IP field.
 */
export class ObservabilityPipelineEnrichmentTableGeoIp {
  /**
   * Path to the IP field in the log.
   */
  "keyField": string;
  /**
   * Locale used to resolve geographical names.
   */
  "locale": string;
  /**
   * Path to the GeoIP database file.
   */
  "path": string;
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
    keyField: {
      baseName: "key_field",
      type: "string",
      required: true,
    },
    locale: {
      baseName: "locale",
      type: "string",
      required: true,
    },
    path: {
      baseName: "path",
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
    return ObservabilityPipelineEnrichmentTableGeoIp.attributeTypeMap;
  }

  public constructor() {}
}
