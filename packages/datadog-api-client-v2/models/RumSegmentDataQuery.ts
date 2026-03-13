/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSegmentEventPlatform } from "./RumSegmentEventPlatform";
import { RumSegmentJourney } from "./RumSegmentJourney";
import { RumSegmentReferenceTable } from "./RumSegmentReferenceTable";
import { RumSegmentStaticEntry } from "./RumSegmentStaticEntry";
import { RumSegmentTemplateInstance } from "./RumSegmentTemplateInstance";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query definition for the segment. Contains one or more query blocks and an optional combination formula.
 */
export class RumSegmentDataQuery {
  /**
   * Boolean expression combining multiple query blocks.
   */
  "combination"?: string;
  /**
   * List of event platform query blocks.
   */
  "eventPlatforms"?: Array<RumSegmentEventPlatform>;
  /**
   * List of journey-based query blocks.
   */
  "journeys"?: Array<RumSegmentJourney>;
  /**
   * List of reference table query blocks.
   */
  "referenceTables"?: Array<RumSegmentReferenceTable>;
  /**
   * List of static user list blocks.
   */
  "_static"?: Array<RumSegmentStaticEntry>;
  /**
   * List of template-based query blocks.
   */
  "templates"?: Array<RumSegmentTemplateInstance>;

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
    combination: {
      baseName: "combination",
      type: "string",
    },
    eventPlatforms: {
      baseName: "event_platforms",
      type: "Array<RumSegmentEventPlatform>",
    },
    journeys: {
      baseName: "journeys",
      type: "Array<RumSegmentJourney>",
    },
    referenceTables: {
      baseName: "reference_tables",
      type: "Array<RumSegmentReferenceTable>",
    },
    _static: {
      baseName: "static",
      type: "Array<RumSegmentStaticEntry>",
    },
    templates: {
      baseName: "templates",
      type: "Array<RumSegmentTemplateInstance>",
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
    return RumSegmentDataQuery.attributeTypeMap;
  }

  public constructor() {}
}
