/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteTypes } from "./SyntheticsSuiteTypes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Synthetics suite response data
 */
export class SyntheticsSuiteResponseData {
  /**
   * Object containing details about a Synthetic suite.
   */
  "attributes"?: SyntheticsSuite;
  /**
   * The public ID for the suite.
   */
  "id"?: string;
  /**
   * Type for the Synthetics suites responses, `suites`.
   */
  "type"?: SyntheticsSuiteTypes;

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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsSuiteTypes",
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
    return SyntheticsSuiteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
