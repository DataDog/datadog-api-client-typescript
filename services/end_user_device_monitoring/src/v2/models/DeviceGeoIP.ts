import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Location derived from the device's public IP address.
 * Absent when no location data is available.
 */
export class DeviceGeoIP {
  /**
   * City resolved from the device's public IP address.
   */
  "geoCity"?: string;
  /**
   * ISO 3166-1 alpha-2 country code resolved from the device's public IP address.
   */
  "geoCountryIsoCode"?: string;
  /**
   * Latitude resolved from the device's public IP address.
   */
  "geoLatitude"?: number;
  /**
   * Longitude resolved from the device's public IP address.
   */
  "geoLongitude"?: number;
  /**
   * ISO 3166-2 subdivision code (for example, a state or province)
   * resolved from the device's public IP address.
   */
  "geoSubdivisionIsoCode"?: string;
  /**
   * Public IPv4 or IPv6 address of the device.
   */
  "publicIpAddress"?: string;
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
    geoCity: {
      baseName: "geo_city",
      type: "string",
    },
    geoCountryIsoCode: {
      baseName: "geo_country_iso_code",
      type: "string",
    },
    geoLatitude: {
      baseName: "geo_latitude",
      type: "number",
      format: "double",
    },
    geoLongitude: {
      baseName: "geo_longitude",
      type: "number",
      format: "double",
    },
    geoSubdivisionIsoCode: {
      baseName: "geo_subdivision_iso_code",
      type: "string",
    },
    publicIpAddress: {
      baseName: "public_ip_address",
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
    return DeviceGeoIP.attributeTypeMap;
  }

  public constructor() {}
}
