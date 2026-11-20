/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomTopologyMapProjectionDimensionsItems } from "./CustomTopologyMapProjectionDimensionsItems";
import { CustomTopologyMapProjectionType } from "./CustomTopologyMapProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<CustomTopologyMapProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CustomTopologyMapProjectionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<CustomTopologyMapProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomTopologyMapProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapProjection.attributeTypeMap;
  }

  public constructor() {}
}
