/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerRuleIncludedItem } from "./SensitiveDataScannerRuleIncludedItem";
import { SensitiveDataScannerTargetGroupData } from "./SensitiveDataScannerTargetGroupData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A scanning group of a target, with its rules included.
 */
export class SensitiveDataScannerTargetGroupResponse {
  /**
   * A scanning group of a target.
   */
  "data": SensitiveDataScannerTargetGroupData;
  /**
   * Rules of the returned groups.
   */
  "included"?: Array<SensitiveDataScannerRuleIncludedItem>;
  /**
   * Meta response. Always an empty object.
   */
  "meta": { [key: string]: any };

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
      type: "SensitiveDataScannerTargetGroupData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<SensitiveDataScannerRuleIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
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
    return SensitiveDataScannerTargetGroupResponse.attributeTypeMap;
  }

  public constructor() {}
}
