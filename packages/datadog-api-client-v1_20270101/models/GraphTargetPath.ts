/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GraphTargetPathType } from "./GraphTargetPathType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GraphTargetPath {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "end"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "start": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": GraphTargetPathType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    end: {
      baseName: "end",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GraphTargetPathType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GraphTargetPath.attributeTypeMap;
  }

  public constructor() {}
}
