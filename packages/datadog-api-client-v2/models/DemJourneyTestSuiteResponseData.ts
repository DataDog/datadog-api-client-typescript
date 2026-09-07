/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemJourneyTestSuiteResponseAttributes } from "./DemJourneyTestSuiteResponseAttributes";
import { DemJourneyTestSuiteType } from "./DemJourneyTestSuiteType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object in a DEM test suite response.
 */
export class DemJourneyTestSuiteResponseData {
  /**
   * Attributes of a DEM journey test suite response.
   */
  "attributes": DemJourneyTestSuiteResponseAttributes;
  /**
   * The public ID of the test suite.
   */
  "id": string;
  /**
   * The type identifier for DEM journey test suites.
   */
  "type": DemJourneyTestSuiteType;

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
      type: "DemJourneyTestSuiteResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemJourneyTestSuiteType",
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
    return DemJourneyTestSuiteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
