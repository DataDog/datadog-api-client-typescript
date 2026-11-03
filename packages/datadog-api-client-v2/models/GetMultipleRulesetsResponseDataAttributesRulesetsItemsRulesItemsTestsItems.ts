/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A test case associated with a static analysis rule, containing the source code and expected annotation count.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems {
  /**
   * The expected number of annotations (findings) the rule should produce when run against the test code.
   */
  "annotationCount"?: number;
  /**
   * The source code snippet used as input for the rule test.
   */
  "code"?: string;
  /**
   * The filename associated with the test code snippet.
   */
  "filename"?: string;

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
    annotationCount: {
      baseName: "annotation_count",
      type: "number",
      format: "int64",
    },
    code: {
      baseName: "code",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems.attributeTypeMap;
  }

  public constructor() {}
}
