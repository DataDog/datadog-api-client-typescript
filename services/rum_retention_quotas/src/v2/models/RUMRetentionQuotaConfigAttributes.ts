import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionQuotaCustomConfig } from "./RUMRetentionQuotaCustomConfig";
import { RUMRetentionQuotaMode } from "./RUMRetentionQuotaMode";

/**
 * The RUM retention quota configuration properties.
 */
export class RUMRetentionQuotaConfigAttributes {
  /**
   * The configuration used when `mode` is `custom`.
   */
  "custom"?: RUMRetentionQuotaCustomConfig;
  /**
   * The retention quota mode. `custom` enforces a fixed session limit.
   * `custom` is the only supported mode.
   */
  "mode": RUMRetentionQuotaMode;
  /**
   * The ID of the organization the retention quota configuration belongs to.
   */
  "orgId": number;
  /**
   * The date the retention quota configuration was last updated.
   */
  "updatedAt"?: Date;
  /**
   * The handle of the user who last updated the retention quota configuration.
   */
  "updatedBy"?: string;
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
    custom: {
      baseName: "custom",
      type: "RUMRetentionQuotaCustomConfig",
    },
    mode: {
      baseName: "mode",
      type: "RUMRetentionQuotaMode",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return RUMRetentionQuotaConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
