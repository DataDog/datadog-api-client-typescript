import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Cache status reported by the CDN for the response.
 */
export class SyntheticsTestResultCdnCacheStatus {
  /**
   * Whether the response was served from the CDN cache.
   */
  "cached"?: boolean;
  /**
   * Raw cache status string reported by the CDN.
   */
  "status"?: string;
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
    cached: {
      baseName: "cached",
      type: "boolean",
    },
    status: {
      baseName: "status",
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
    return SyntheticsTestResultCdnCacheStatus.attributeTypeMap;
  }

  public constructor() {}
}
