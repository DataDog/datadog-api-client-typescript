import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedGlobalTimeLiveSpan } from "./SecureEmbedGlobalTimeLiveSpan";

/**
 * Default time range configuration for the secure embed.
 */
export class SecureEmbedGlobalTime {
  /**
   * Dashboard global time live_span selection.
   */
  "liveSpan"?: SecureEmbedGlobalTimeLiveSpan;
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
    liveSpan: {
      baseName: "live_span",
      type: "SecureEmbedGlobalTimeLiveSpan",
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
    return SecureEmbedGlobalTime.attributeTypeMap;
  }

  public constructor() {}
}
