/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReturnPeriodScopeTargetType } from "./ReturnPeriodScopeTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ReturnPeriodScopeTarget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ReturnPeriodScopeTargetType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "ReturnPeriodScopeTargetType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ReturnPeriodScopeTarget.attributeTypeMap;
  }

  public constructor() {}
}
