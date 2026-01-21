/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DegradationArrayIncluded } from "./DegradationArrayIncluded";
import { DegradationData } from "./DegradationData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class Degradation {
  "data"?: DegradationData;
  /**
   * The included related resources of a degradation. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<DegradationArrayIncluded>;

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
    data: {
      baseName: "data",
      type: "DegradationData",
    },
    included: {
      baseName: "included",
      type: "Array<DegradationArrayIncluded>",
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
    return Degradation.attributeTypeMap;
  }

  public constructor() {}
}
