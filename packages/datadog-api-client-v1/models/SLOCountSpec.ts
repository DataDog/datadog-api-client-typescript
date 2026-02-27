/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCountDefinition } from "./SLOCountDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A metric SLI specification.
 */
export class SLOCountSpec {
  /**
   * A count-based (metric) SLI specification, composed of three parts: the good events formula, the bad or total events formula, and the underlying queries.
   */
  "count": SLOCountDefinition;

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
      type: "SLOCountDefinition",
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
