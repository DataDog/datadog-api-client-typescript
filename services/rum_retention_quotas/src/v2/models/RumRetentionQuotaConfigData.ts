import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionQuotaConfigAttributes } from "./RumRetentionQuotaConfigAttributes";
import { RumRetentionQuotaConfigType } from "./RumRetentionQuotaConfigType";

/**
 * The RUM retention quota configuration object.
 */
export class RumRetentionQuotaConfigData {
  /**
   * The RUM retention quota configuration properties.
   */
  "attributes": RumRetentionQuotaConfigAttributes;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   */
  "id": string;
  /**
   * The type of the resource, always `rum_quota_config`.
   */
  "type": RumRetentionQuotaConfigType;
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
    attributes: {
      baseName: "attributes",
      type: "RumRetentionQuotaConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumRetentionQuotaConfigType",
      required: true,
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
    return RumRetentionQuotaConfigData.attributeTypeMap;
  }

  public constructor() {}
}
