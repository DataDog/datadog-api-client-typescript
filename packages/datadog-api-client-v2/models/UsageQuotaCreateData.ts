/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageQuotaCreateAttributes } from "./UsageQuotaCreateAttributes";
import { UsageQuotaType } from "./UsageQuotaType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A usage quota resource to create or update by scope.
 */
export class UsageQuotaCreateData {
  /**
   * Attributes for creating or updating a usage quota by scope.
   */
  "attributes": UsageQuotaCreateAttributes;
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
      type: "UsageQuotaCreateAttributes",
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
    return UsageQuotaCreateData.attributeTypeMap;
  }

  public constructor() {}
}
