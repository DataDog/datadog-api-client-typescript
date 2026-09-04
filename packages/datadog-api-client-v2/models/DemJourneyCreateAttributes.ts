/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemJourneyRum } from "./DemJourneyRum";
import { DemVariant } from "./DemVariant";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a DEM journey.
 */
export class DemJourneyCreateAttributes {
  /**
   * An optional human-readable description of the journey.
   */
  "description"?: string;
  /**
   * The RUM definition for a DEM journey.
   */
  "journeyRum": DemJourneyRum;
  /**
   * The name of the DEM journey.
   */
  "name": string;
  /**
   * List of tags associated with a DEM resource.
   */
  "tags": Array<string>;
  /**
   * List of variants associated with a DEM journey.
   */
  "variants"?: Array<DemVariant>;

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
    description: {
      baseName: "description",
      type: "string",
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
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<DemVariant>",
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
    return DemJourneyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
