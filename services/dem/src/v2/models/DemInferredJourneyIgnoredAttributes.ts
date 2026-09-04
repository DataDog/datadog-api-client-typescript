import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemJourneyRum } from "./DemJourneyRum";
import { DemTestSuiteNested } from "./DemTestSuiteNested";
import { DemVariant } from "./DemVariant";

/**
 * Attributes of an ignored inferred journey.
 */
export class DemInferredJourneyIgnoredAttributes {
  /**
   * Timestamp when the inferred journey was first observed.
   */
  "createdAt": Date;
  /**
   * An optional description of the inferred journey.
   */
  "description"?: string;
  /**
   * Timestamp when the inferred journey was ignored.
   */
  "ignoredAt": Date;
  /**
   * The RUM definition for a DEM journey.
   */
  "journeyRum": DemJourneyRum;
  /**
   * The name of the inferred journey.
   */
  "name": string;
  /**
   * The organization ID that owns this inferred journey.
   */
  "orgId": number;
  /**
   * List of tags associated with a DEM resource.
   */
  "tags": Array<string>;
  /**
   * A test suite associated with a DEM resource.
   */
  "testSuite"?: DemTestSuiteNested;
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
    description: {
      baseName: "description",
      type: "string",
    },
    ignoredAt: {
      baseName: "ignored_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return DemInferredJourneyIgnoredAttributes.attributeTypeMap;
  }

  public constructor() {}
}
