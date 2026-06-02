import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Average timing breakdown per network phase for a resource.
 */
export class AggregatedResourceTimingBreakdown {
  /**
   * Average TCP connect duration in milliseconds.
   */
  "avgConnectMs": number;
  /**
   * Average DNS resolution duration in milliseconds.
   */
  "avgDnsMs": number;
  /**
   * Average download phase duration in milliseconds.
   */
  "avgDownloadMs": number;
  /**
   * Average time to first byte in milliseconds.
   */
  "avgFirstByteMs": number;
  /**
   * Average redirect phase duration in milliseconds.
   */
  "avgRedirectMs": number;
  /**
   * Average SSL handshake duration in milliseconds.
   */
  "avgSslMs": number;
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
    avgConnectMs: {
      baseName: "avg_connect_ms",
      type: "number",
      required: true,
      format: "double",
    },
    avgDnsMs: {
      baseName: "avg_dns_ms",
      type: "number",
      required: true,
      format: "double",
    },
    avgDownloadMs: {
      baseName: "avg_download_ms",
      type: "number",
      required: true,
      format: "double",
    },
    avgFirstByteMs: {
      baseName: "avg_first_byte_ms",
      type: "number",
      required: true,
      format: "double",
    },
    avgRedirectMs: {
      baseName: "avg_redirect_ms",
      type: "number",
      required: true,
      format: "double",
    },
    avgSslMs: {
      baseName: "avg_ssl_ms",
      type: "number",
      required: true,
      format: "double",
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
    return AggregatedResourceTimingBreakdown.attributeTypeMap;
  }

  public constructor() {}
}
