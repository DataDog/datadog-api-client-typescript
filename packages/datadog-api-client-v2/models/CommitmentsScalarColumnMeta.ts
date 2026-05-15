/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsUnit } from "./CommitmentsUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for a scalar column, including unit information.
 */
export class CommitmentsScalarColumnMeta {
  /**
   * Unit metadata for a numeric metric.
   */
  "unit": CommitmentsUnit;

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
    unit: {
      baseName: "unit",
      type: "CommitmentsUnit",
      required: true,
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
    return CommitmentsScalarColumnMeta.attributeTypeMap;
  }

  public constructor() {}
}
