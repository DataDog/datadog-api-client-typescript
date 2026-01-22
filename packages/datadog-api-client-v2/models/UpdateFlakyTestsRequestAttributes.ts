/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateFlakyTestsRequestTest } from "./UpdateFlakyTestsRequestTest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating flaky test states.
 */
export class UpdateFlakyTestsRequestAttributes {
  /**
   * List of flaky tests to update.
   */
  "tests": Array<UpdateFlakyTestsRequestTest>;

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
    tests: {
      baseName: "tests",
      type: "Array<UpdateFlakyTestsRequestTest>",
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
    return UpdateFlakyTestsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
