/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultData } from "./SyntheticsTestResultData";
import { SyntheticsTestResultIncludedItem } from "./SyntheticsTestResultIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for a Synthetic test result.
 */
export class SyntheticsTestResultResponse {
  /**
   * Wrapper object for a Synthetic test result.
   */
  "data"?: SyntheticsTestResultData;
  /**
   * Array of included related resources, such as the test definition.
   */
  "included"?: Array<SyntheticsTestResultIncludedItem>;

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
      type: "SyntheticsTestResultData",
    },
    included: {
      baseName: "included",
      type: "Array<SyntheticsTestResultIncludedItem>",
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
    return SyntheticsTestResultResponse.attributeTypeMap;
  }

  public constructor() {}
}
