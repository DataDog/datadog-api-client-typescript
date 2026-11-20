/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CohortScope20270101Target } from "./CohortScope20270101Target";
import { CohortScopeType } from "./CohortScopeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CohortScope {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "target": CohortScope20270101Target;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CohortScopeType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    target: {
      baseName: "target",
      type: "CohortScope20270101Target",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CohortScopeType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CohortScope.attributeTypeMap;
  }

  public constructor() {}
}
