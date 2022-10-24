/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsLocation } from "./SyntheticsLocation";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * List of Synthetics locations.
 */
export class SyntheticsLocations {
  /**
   * List of Synthetics locations.
   */
  "locations"?: Array<SyntheticsLocation>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    locations: {
      baseName: "locations",
      type: "Array<SyntheticsLocation>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsLocations.attributeTypeMap;
  }

  public constructor() {}
}
