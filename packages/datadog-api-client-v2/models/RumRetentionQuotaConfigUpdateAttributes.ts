/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionQuotaCustomConfig } from "./RumRetentionQuotaCustomConfig";
import { RumRetentionQuotaMode } from "./RumRetentionQuotaMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The RUM retention quota configuration properties to create or update.
 */
export class RumRetentionQuotaConfigUpdateAttributes {
  /**
   * The configuration used when `mode` is `custom`.
   */
  "custom"?: RumRetentionQuotaCustomConfig;
  /**
   * The retention quota mode. `custom` enforces a fixed session limit.
   * `custom` is the only supported mode.
   */
  "mode": RumRetentionQuotaMode;

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
      type: "RumRetentionQuotaCustomConfig",
    },
    mode: {
      baseName: "mode",
      type: "RumRetentionQuotaMode",
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
    return RumRetentionQuotaConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
