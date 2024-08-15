/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of LeakedKeyAttributes object.
 */
export class LeakedKeyAttributes {
  /**
   * The LeakedKeyAttributes date.
   */
  "date": Date;
  /**
   * The LeakedKeyAttributes leak_source.
   */
  "leakSource"?: string;

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
    date: {
      baseName: "date",
      type: "Date",
      required: true,
      format: "date-time",
    },
    leakSource: {
      baseName: "leak_source",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LeakedKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
