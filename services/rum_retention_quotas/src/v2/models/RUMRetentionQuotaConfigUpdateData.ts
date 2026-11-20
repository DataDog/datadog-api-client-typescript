import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionQuotaConfigType } from "./RUMRetentionQuotaConfigType";
import { RUMRetentionQuotaConfigUpdateAttributes } from "./RUMRetentionQuotaConfigUpdateAttributes";

/**
 * The RUM retention quota configuration to create or update.
 */
export class RUMRetentionQuotaConfigUpdateData {
  /**
   * The RUM retention quota configuration properties to create or update.
   */
  "attributes": RUMRetentionQuotaConfigUpdateAttributes;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * Must match `scope_id` in the path.
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
      type: "RUMRetentionQuotaConfigUpdateAttributes",
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
    return RUMRetentionQuotaConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
