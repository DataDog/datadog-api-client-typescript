import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionQuotaConfigAttributes } from "./RUMRetentionQuotaConfigAttributes";
import { RUMRetentionQuotaConfigType } from "./RUMRetentionQuotaConfigType";

/**
 * The RUM retention quota configuration object.
 */
export class RUMRetentionQuotaConfigData {
  /**
   * The RUM retention quota configuration properties.
   */
  "attributes": RUMRetentionQuotaConfigAttributes;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   */
  "id": string;
  /**
   * The type of the resource, always `rum_quota_config`.
   */
  "type": RUMRetentionQuotaConfigType;
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
      type: "RUMRetentionQuotaConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMRetentionQuotaConfigType",
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
    return RUMRetentionQuotaConfigData.attributeTypeMap;
  }

  public constructor() {}
}
