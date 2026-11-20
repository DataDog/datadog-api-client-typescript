/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CohortScopeTargetAggregationType } from "./CohortScopeTargetAggregationType";
import { CohortScopeTargetAnyOfAnyOfItemValue } from "./CohortScopeTargetAnyOfAnyOfItemValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CohortScope20270101TargetOneOf4454865216 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CohortScopeTargetAggregationType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": CohortScopeTargetAnyOfAnyOfItemValue;

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
      type: "CohortScopeTargetAggregationType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "CohortScopeTargetAnyOfAnyOfItemValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CohortScope20270101TargetOneOf4454865216.attributeTypeMap;
  }

  public constructor() {}
}
