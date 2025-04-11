import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing all metrics and their values collected for a Synthetic API test.
 * See the [Synthetic Monitoring Metrics documentation](https://docs.datadoghq.com/synthetics/metrics/).
 */
export class SyntheticsTiming {
  /**
   * The duration in millisecond of the DNS lookup.
   */
  "dns"?: number;
  /**
   * The time in millisecond to download the response.
   */
  "download"?: number;
  /**
   * The time in millisecond to first byte.
   */
  "firstByte"?: number;
  /**
   * The duration in millisecond of the TLS handshake.
   */
  "handshake"?: number;
  /**
   * The time in millisecond spent during redirections.
   */
  "redirect"?: number;
  /**
   * The duration in millisecond of the TLS handshake.
   */
  "ssl"?: number;
  /**
   * Time in millisecond to establish the TCP connection.
   */
  "tcp"?: number;
  /**
   * The overall time in millisecond the request took to be processed.
   */
  "total"?: number;
  /**
   * Time spent in millisecond waiting for a response.
   */
  "wait"?: number;
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
    dns: {
      baseName: "dns",
      type: "number",
      format: "double",
    },
    download: {
      baseName: "download",
      type: "number",
      format: "double",
    },
    firstByte: {
      baseName: "firstByte",
      type: "number",
      format: "double",
    },
    handshake: {
      baseName: "handshake",
      type: "number",
      format: "double",
    },
    redirect: {
      baseName: "redirect",
      type: "number",
      format: "double",
    },
    ssl: {
      baseName: "ssl",
      type: "number",
      format: "double",
    },
    tcp: {
      baseName: "tcp",
      type: "number",
      format: "double",
    },
    total: {
      baseName: "total",
      type: "number",
      format: "double",
    },
    wait: {
      baseName: "wait",
      type: "number",
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
    return SyntheticsTiming.attributeTypeMap;
  }

  public constructor() {}
}
