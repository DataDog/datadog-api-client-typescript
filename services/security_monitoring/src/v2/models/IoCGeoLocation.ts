import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Geographic location information for an IP indicator.
 */
export class IoCGeoLocation {
  /**
   * City name.
   */
  "city"?: string;
  /**
   * ISO country code.
   */
  "countryCode"?: string;
  /**
   * Full country name.
   */
  "countryName"?: string;
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
    city: {
      baseName: "city",
      type: "string",
    },
    countryCode: {
      baseName: "country_code",
      type: "string",
    },
    countryName: {
      baseName: "country_name",
      type: "string",
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
    return IoCGeoLocation.attributeTypeMap;
  }

  public constructor() {}
}
