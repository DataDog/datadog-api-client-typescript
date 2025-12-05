/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsSuiteOptions } from "./SyntheticsSuiteOptions";
import { SyntheticsSuiteTest } from "./SyntheticsSuiteTest";
import { SyntheticsSuiteType } from "./SyntheticsSuiteType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing details about a Synthetic suite.
 */
export class SyntheticsSuite {
  /**
   * Notification message associated with the suite.
   */
  "message": string;
  /**
   * Name of the suite.
   */
  "name": string;
  /**
   * Object describing the extra options for a Synthetic suite.
   */
  "options": SyntheticsSuiteOptions;
  /**
   * The public ID for the test.
   */
  "publicId"?: string;
  /**
   * Array of tags attached to the suite.
   */
  "tags"?: Array<string>;
  "tests": Array<SyntheticsSuiteTest>;
  /**
   * Type of the Synthetic suite, `suite`.
   */
  "type": SyntheticsSuiteType;

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
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "SyntheticsSuiteOptions",
      required: true,
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsSuiteTest>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsSuiteType",
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
    return SyntheticsSuite.attributeTypeMap;
  }

  public constructor() {}
}
