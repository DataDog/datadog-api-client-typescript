/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageQuotaType } from "./UsageQuotaType";
import { UsageQuotaUpdateAttributes } from "./UsageQuotaUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A usage quota resource to update.
 */
export class UsageQuotaUpdateData {
  /**
   * Attributes to update on a usage quota. Omitting a property leaves its current value unchanged.
   */
  "attributes": UsageQuotaUpdateAttributes;
  /**
   * The opaque usage quota identifier, which must match the identifier in the request path.
   */
  "id": string;
  /**
   * The JSON:API resource type for a usage quota.
   */
  "type": UsageQuotaType;

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
      type: "UsageQuotaUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UsageQuotaType",
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
    return UsageQuotaUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
