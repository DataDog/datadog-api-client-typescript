/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CellScopeCohortTargetIndexType } from "./CellScopeCohortTargetIndexType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CellScope20270101CohortTargetOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CellScopeCohortTargetIndexType;
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
      type: "CellScopeCohortTargetIndexType",
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
    return CellScope20270101CohortTargetOneOf.attributeTypeMap;
  }

  public constructor() {}
}
