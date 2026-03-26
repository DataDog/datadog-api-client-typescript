/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsFastTestResultData } from "./SyntheticsFastTestResultData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fast test result response. Returns `null` if the result is not yet available
 * (the test is still running or timed out before completing).
 */
export class SyntheticsFastTestResult {
  /**
   * Fast test result data object (JSON:API format).
   */
  "data"?: SyntheticsFastTestResultData;

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
      type: "SyntheticsFastTestResultData",
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
    return SyntheticsFastTestResult.attributeTypeMap;
  }

  public constructor() {}
}
