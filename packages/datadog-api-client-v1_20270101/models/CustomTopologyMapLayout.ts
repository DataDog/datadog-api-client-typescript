/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomTopologyMapLayoutDirection } from "./CustomTopologyMapLayoutDirection";
import { CustomTopologyMapLayoutType } from "./CustomTopologyMapLayoutType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapLayout {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "direction": CustomTopologyMapLayoutDirection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CustomTopologyMapLayoutType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    direction: {
      baseName: "direction",
      type: "CustomTopologyMapLayoutDirection",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomTopologyMapLayoutType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapLayout.attributeTypeMap;
  }

  public constructor() {}
}
