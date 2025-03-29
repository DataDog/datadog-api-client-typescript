/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QuotaLimitEnforceType } from "./QuotaLimitEnforceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Unified definition of `QuotaLimit` object.
 */
export class QuotaLimit {
  /**
   * The definition of `QuotaLimitEnforceType` object.
   */
  "enforce": QuotaLimitEnforceType;
  /**
   * The limit for quota enforcement.
   */
  "limit": number;

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
    enforce: {
      baseName: "enforce",
      type: "QuotaLimitEnforceType",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QuotaLimit.attributeTypeMap;
  }

  public constructor() {}
}
