/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemCreateJourneyTestSuiteAttributes } from "./DemCreateJourneyTestSuiteAttributes";
import { DemCreateJourneyTestSuiteRequestType } from "./DemCreateJourneyTestSuiteRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a create test suite request.
 */
export class DemCreateJourneyTestSuiteData {
  /**
   * Attributes for creating a test suite for a DEM journey.
   */
  "attributes"?: DemCreateJourneyTestSuiteAttributes;
  /**
   * The resource type for a request to create a DEM journey test suite.
   */
  "type": DemCreateJourneyTestSuiteRequestType;

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
      type: "DemCreateJourneyTestSuiteAttributes",
    },
    type: {
      baseName: "type",
      type: "DemCreateJourneyTestSuiteRequestType",
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
    return DemCreateJourneyTestSuiteData.attributeTypeMap;
  }

  public constructor() {}
}
