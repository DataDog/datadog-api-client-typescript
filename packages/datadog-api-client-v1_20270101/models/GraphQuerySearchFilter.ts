/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GraphQuerySearchFilterOperator } from "./GraphQuerySearchFilterOperator";
import { GraphTarget } from "./GraphTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GraphQuerySearchFilter {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "operator": GraphQuerySearchFilterOperator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "target"?: GraphTarget;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    operator: {
      baseName: "operator",
      type: "GraphQuerySearchFilterOperator",
      required: true,
    },
    target: {
      baseName: "target",
      type: "GraphTarget",
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
    return GraphQuerySearchFilter.attributeTypeMap;
  }

  public constructor() {}
}
