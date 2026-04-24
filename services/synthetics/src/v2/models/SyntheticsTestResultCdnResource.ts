import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultCdnProviderInfo } from "./SyntheticsTestResultCdnProviderInfo";

/**
 * A CDN resource encountered while executing a browser step.
 */
export class SyntheticsTestResultCdnResource {
  /**
   * CDN provider details inferred from response headers.
   */
  "cdn"?: SyntheticsTestResultCdnProviderInfo;
  /**
   * Resolved IP address for the CDN resource.
   */
  "resolvedIp"?: string;
  /**
   * Unix timestamp (ms) of when the resource was fetched.
   */
  "timestamp"?: number;
  /**
   * Timing breakdown for fetching the CDN resource.
   */
  "timings"?: { [key: string]: any };
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
    cdn: {
      baseName: "cdn",
      type: "SyntheticsTestResultCdnProviderInfo",
    },
    resolvedIp: {
      baseName: "resolved_ip",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
    },
    timings: {
      baseName: "timings",
      type: "{ [key: string]: any; }",
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
    return SyntheticsTestResultCdnResource.attributeTypeMap;
  }

  public constructor() {}
}
