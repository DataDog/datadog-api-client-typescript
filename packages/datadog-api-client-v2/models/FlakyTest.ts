/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlakyTestAttributes } from "./FlakyTestAttributes";
import { FlakyTestType } from "./FlakyTestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A flaky test object.
 */
export class FlakyTest {
  /**
   * Attributes of a flaky test.
   */
  "attributes"?: FlakyTestAttributes;
  /**
   * Test's ID. This ID is the hash of the test's Fully Qualified Name and Git repository ID. On the Test Runs UI it is the same as the `test_fingerprint_fqn` tag.
   */
  "id"?: string;
  /**
   * The type of the flaky test from Flaky Test Management.
   */
  "type"?: FlakyTestType;

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
      type: "FlakyTestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FlakyTestType",
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
    return FlakyTest.attributeTypeMap;
  }

  public constructor() {}
}
