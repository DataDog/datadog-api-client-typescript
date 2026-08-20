/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionQuotaConfigType } from "./RumRetentionQuotaConfigType";
import { RumRetentionQuotaConfigUpdateAttributes } from "./RumRetentionQuotaConfigUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The RUM retention quota configuration to create or update.
 */
export class RumRetentionQuotaConfigUpdateData {
  /**
   * The RUM retention quota configuration properties to create or update.
   */
  "attributes": RumRetentionQuotaConfigUpdateAttributes;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * Must match `scope_id` in the path.
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
      type: "RumRetentionQuotaConfigUpdateAttributes",
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
    return RumRetentionQuotaConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
