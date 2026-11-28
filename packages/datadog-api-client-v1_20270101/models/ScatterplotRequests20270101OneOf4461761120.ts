/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotBackendTableRequest } from "./ScatterplotBackendTableRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotRequests20270101OneOf4461761120 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "table": ScatterplotBackendTableRequest;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    table: {
      baseName: "table",
      type: "ScatterplotBackendTableRequest",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotRequests20270101OneOf4461761120.attributeTypeMap;
  }

  public constructor() {}
}
