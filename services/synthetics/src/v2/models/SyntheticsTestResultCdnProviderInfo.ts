import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultCdnCacheStatus } from "./SyntheticsTestResultCdnCacheStatus";

/**
 * CDN provider details inferred from response headers.
 */
export class SyntheticsTestResultCdnProviderInfo {
  /**
   * Cache status reported by the CDN for the response.
   */
  "cache"?: SyntheticsTestResultCdnCacheStatus;
  /**
   * Name of the CDN provider.
   */
  "provider"?: string;
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
    cache: {
      baseName: "cache",
      type: "SyntheticsTestResultCdnCacheStatus",
    },
    provider: {
      baseName: "provider",
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
    return SyntheticsTestResultCdnProviderInfo.attributeTypeMap;
  }

  public constructor() {}
}
