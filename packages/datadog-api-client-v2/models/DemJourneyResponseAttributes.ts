/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemJourneyRum } from "./DemJourneyRum";
import { DemTestSuiteNested } from "./DemTestSuiteNested";
import { DemUser } from "./DemUser";
import { DemVariant } from "./DemVariant";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes returned in a DEM journey response.
 */
export class DemJourneyResponseAttributes {
  /**
   * The timestamp when the journey was created.
   */
  "createdAt": Date;
  /**
   * A Datadog user associated with a DEM operation.
   */
  "createdBy": DemUser;
  /**
   * An optional human-readable description of the journey.
   */
  "description": string | null;
  /**
   * The RUM definition for a DEM journey.
   */
  "journeyRum": DemJourneyRum;
  /**
   * The name of the DEM journey.
   */
  "name": string;
  /**
   * The organization ID that owns this journey.
   */
  "orgId": number;
  /**
   * List of tags associated with a DEM resource.
   */
  "tags": Array<string>;
  /**
   * A test suite associated with a DEM resource.
   */
  "testSuite": DemTestSuiteNested;
  /**
   * The timestamp when the journey was last updated.
   */
  "updatedAt": Date | null;
  /**
   * A Datadog user associated with a DEM operation.
   */
  "updatedBy": DemUser;
  /**
   * List of variants associated with a DEM journey.
   */
  "variants": Array<DemVariant>;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "DemUser",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    journeyRum: {
      baseName: "journey_rum",
      type: "DemJourneyRum",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    testSuite: {
      baseName: "test_suite",
      type: "DemTestSuiteNested",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "DemUser",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<DemVariant>",
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
    return DemJourneyResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
