import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsGeoIPParserType } from "./LogsGeoIPParserType";

/**
 * The GeoIP parser takes an IP address attribute and extracts if available
 * the Continent, Country, Subdivision, and City information in the target attribute path.
 */
export class LogsGeoIPParser {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  /**
   * Name of the parent attribute that contains all the extracted details from the `sources`.
   */
  "target": string;
  /**
   * Type of GeoIP parser.
   */
  "type": LogsGeoIPParserType;
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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsGeoIPParserType",
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
    return LogsGeoIPParser.attributeTypeMap;
  }

  public constructor() {}
}
