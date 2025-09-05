/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ShiftData } from "./ShiftData";
import { ShiftIncluded } from "./ShiftIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An on-call shift with its associated data and relationships.
 */
export class Shift {
  /**
   * Data for an on-call shift.
   */
  "data"?: ShiftData;
  /**
   * The `Shift` `included`.
   */
  "included"?: Array<ShiftIncluded>;

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
      type: "ShiftData",
    },
    included: {
      baseName: "included",
      type: "Array<ShiftIncluded>",
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
    return Shift.attributeTypeMap;
  }

  public constructor() {}
}
