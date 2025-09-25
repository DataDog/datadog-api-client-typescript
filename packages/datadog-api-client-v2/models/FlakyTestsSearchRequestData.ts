/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlakyTestsSearchRequestAttributes } from "./FlakyTestsSearchRequestAttributes";
import { FlakyTestsSearchRequestDataType } from "./FlakyTestsSearchRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API data for flaky tests search request.
 */
export class FlakyTestsSearchRequestData {
  /**
   * Attributes for the flaky tests search request.
   */
  "attributes"?: FlakyTestsSearchRequestAttributes;
  /**
   * The definition of `FlakyTestsSearchRequestDataType` object.
   */
  "type"?: FlakyTestsSearchRequestDataType;

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
      type: "FlakyTestsSearchRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "FlakyTestsSearchRequestDataType",
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
    return FlakyTestsSearchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
