/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsLocation } from "./SyntheticsLocation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of Synthetic locations.
 */
export class SyntheticsLocations {
  /**
   * List of Synthetic locations.
   */
  "locations"?: Array<SyntheticsLocation>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    locations: {
      baseName: "locations",
      type: "Array<SyntheticsLocation>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
