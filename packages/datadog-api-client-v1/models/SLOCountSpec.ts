/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCountCondition } from "./SLOCountCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A count-based SLI specification.
 */
export class SLOCountSpec {
  /**
   * A count-based SLI specification, composed of three parts: the good events formula, the total events formula,
   * and the involved queries.
   */
  "count": SLOCountCondition;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "SLOCountCondition",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCountSpec.attributeTypeMap;
  }

  public constructor() {}
}
