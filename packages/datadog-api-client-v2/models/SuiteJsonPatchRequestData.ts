/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SuiteJsonPatchRequestDataAttributes } from "./SuiteJsonPatchRequestDataAttributes";
import { SuiteJsonPatchType } from "./SuiteJsonPatchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a JSON Patch request on a Synthetic test suite.
 */
export class SuiteJsonPatchRequestData {
  /**
   * Attributes for a JSON Patch request on a Synthetic test suite.
   */
  "attributes"?: SuiteJsonPatchRequestDataAttributes;
  /**
   * Type for a JSON Patch request on a Synthetic test suite, `suites_json_patch`.
   */
  "type"?: SuiteJsonPatchType;

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
      type: "SuiteJsonPatchRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "SuiteJsonPatchType",
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
    return SuiteJsonPatchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
