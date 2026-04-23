/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultRelationshipTest } from "./SyntheticsTestResultRelationshipTest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships for a Synthetic test result.
 */
export class SyntheticsTestResultRelationships {
  /**
   * Relationship to the Synthetic test.
   */
  "test"?: SyntheticsTestResultRelationshipTest;

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
    test: {
      baseName: "test",
      type: "SyntheticsTestResultRelationshipTest",
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
    return SyntheticsTestResultRelationships.attributeTypeMap;
  }

  public constructor() {}
}
