/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotBackendAxisRequest } from "./ScatterplotBackendAxisRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotRequests20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "x": ScatterplotBackendAxisRequest;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "y": ScatterplotBackendAxisRequest;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    x: {
      baseName: "x",
      type: "ScatterplotBackendAxisRequest",
      required: true,
    },
    y: {
      baseName: "y",
      type: "ScatterplotBackendAxisRequest",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotRequests20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
