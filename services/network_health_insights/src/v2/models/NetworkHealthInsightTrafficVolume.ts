import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Network traffic volume metrics between the client and server services during the query window.
 */
export class NetworkHealthInsightTrafficVolume {
  /**
   * Total bytes read from the server to the client during the query window.
   */
  "bytesRead"?: number;
  /**
   * Total bytes written from the client to the server during the query window.
   */
  "bytesWritten"?: number;
  /**
   * Sum of bytes written and bytes read across the query window.
   */
  "totalTraffic"?: number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bytesRead: {
      baseName: "bytes_read",
      type: "number",
      format: "int64",
    },
    bytesWritten: {
      baseName: "bytes_written",
      type: "number",
      format: "int64",
    },
    totalTraffic: {
      baseName: "total_traffic",
      type: "number",
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
    return NetworkHealthInsightTrafficVolume.attributeTypeMap;
  }

  public constructor() {}
}
