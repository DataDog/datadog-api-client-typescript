import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of GeoIP parser.
 */
export type LogsGeoIPParserType = typeof GEO_IP_PARSER | UnparsedObject;
export const GEO_IP_PARSER = "geo-ip-parser";
