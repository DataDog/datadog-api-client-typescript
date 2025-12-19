/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteTypes } from "./SyntheticsSuiteTypes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class SuiteCreateEdit {
  /**
   * Object containing details about a Synthetic suite.
   */
  "attributes": SyntheticsSuite;
  /**
   * Type for the Synthetics suites responses, `suites`.
   */
  "type": SyntheticsSuiteTypes;

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
      type: "SyntheticsSuite",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsSuiteTypes",
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
    return SuiteCreateEdit.attributeTypeMap;
  }

  public constructor() {}
}
