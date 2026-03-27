/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestParentSuiteAttributes } from "./SyntheticsTestParentSuiteAttributes";
import { SyntheticsTestParentSuiteType } from "./SyntheticsTestParentSuiteType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a parent suite.
 */
export class SyntheticsTestParentSuiteData {
  /**
   * Object containing details about a parent suite of a Synthetic test.
   */
  "attributes"?: SyntheticsTestParentSuiteAttributes;
  /**
   * The public ID of the parent suite.
   */
  "id"?: string;
  /**
   * Type of the parent suite resource.
   */
  "type"?: SyntheticsTestParentSuiteType;

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
    attributes: {
      baseName: "attributes",
      type: "SyntheticsTestParentSuiteAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestParentSuiteType",
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
    return SyntheticsTestParentSuiteData.attributeTypeMap;
  }

  public constructor() {}
}
