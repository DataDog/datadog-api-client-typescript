/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionQuotaAdaptiveConfig } from "./RumRetentionQuotaAdaptiveConfig";
import { RumRetentionQuotaCustomConfig } from "./RumRetentionQuotaCustomConfig";
import { RumRetentionQuotaMode } from "./RumRetentionQuotaMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The RUM retention quota configuration properties.
 */
export class RumRetentionQuotaConfigAttributes {
  /**
   * The configuration used when `mode` is `adaptive`.
   */
  "adaptive"?: RumRetentionQuotaAdaptiveConfig;
  /**
   * The configuration used when `mode` is `custom`.
   */
  "custom"?: RumRetentionQuotaCustomConfig;
  /**
   * The retention quota mode. `custom` enforces a fixed session limit, while
   * `adaptive` dynamically adjusts retention.
   */
  "mode": RumRetentionQuotaMode;
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
    adaptive: {
      baseName: "adaptive",
      type: "RumRetentionQuotaAdaptiveConfig",
    },
    custom: {
      baseName: "custom",
      type: "RumRetentionQuotaCustomConfig",
    },
    mode: {
      baseName: "mode",
      type: "RumRetentionQuotaMode",
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
    return RumRetentionQuotaConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
