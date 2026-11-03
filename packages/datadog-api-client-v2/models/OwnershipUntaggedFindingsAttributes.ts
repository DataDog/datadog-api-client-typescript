/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The counts of findings without a team tag by ownership confidence.
 */
export class OwnershipUntaggedFindingsAttributes {
  /**
   * The number of high confidence findings without a team tag.
   */
  "highConfidence": number;
  /**
   * The number of low confidence findings without a team tag.
   */
  "lowConfidence": number;
  /**
   * The number of medium confidence findings without a team tag.
   */
  "mediumConfidence": number;
  /**
   * The total number of findings without a team tag.
   */
  "total": number;

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
    highConfidence: {
      baseName: "high_confidence",
      type: "number",
      required: true,
      format: "int64",
    },
    lowConfidence: {
      baseName: "low_confidence",
      type: "number",
      required: true,
      format: "int64",
    },
    mediumConfidence: {
      baseName: "medium_confidence",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return OwnershipUntaggedFindingsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
