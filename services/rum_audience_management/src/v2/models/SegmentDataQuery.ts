import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentEventPlatformBlock } from "./SegmentEventPlatformBlock";
import { SegmentJourneyBlock } from "./SegmentJourneyBlock";
import { SegmentProfileStoreBlock } from "./SegmentProfileStoreBlock";
import { SegmentReferenceTableBlock } from "./SegmentReferenceTableBlock";
import { SegmentStaticBlock } from "./SegmentStaticBlock";
import { SegmentTemplateBlock } from "./SegmentTemplateBlock";

/**
 * Defines who belongs to the segment. It contains one or more blocks, up to 20 in total.
 * Use `combination` to combine named blocks with a boolean formula such as `A AND NOT B`.
 */
export class SegmentDataQuery {
  /**
   * Account profile blocks.
   */
  "accountStore"?: Array<SegmentProfileStoreBlock>;
  /**
   * Boolean formula that combines blocks by name.
   */
  "combination"?: string;
  /**
   * Event blocks.
   */
  "eventPlatform"?: Array<SegmentEventPlatformBlock>;
  /**
   * Funnel blocks.
   */
  "journeys"?: Array<SegmentJourneyBlock>;
  /**
   * Reference table blocks.
   */
  "referenceTable"?: Array<SegmentReferenceTableBlock>;
  /**
   * Retention blocks.
   */
  "retentions"?: Array<{ [key: string]: any }>;
  /**
   * Uploaded list blocks.
   */
  "_static"?: Array<SegmentStaticBlock>;
  /**
   * Template blocks.
   */
  "templates"?: Array<SegmentTemplateBlock>;
  /**
   * User profile blocks.
   */
  "userStore"?: Array<SegmentProfileStoreBlock>;
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
    accountStore: {
      baseName: "account_store",
      type: "Array<SegmentProfileStoreBlock>",
    },
    combination: {
      baseName: "combination",
      type: "string",
    },
    eventPlatform: {
      baseName: "event_platform",
      type: "Array<SegmentEventPlatformBlock>",
    },
    journeys: {
      baseName: "journeys",
      type: "Array<SegmentJourneyBlock>",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "Array<SegmentReferenceTableBlock>",
    },
    retentions: {
      baseName: "retentions",
      type: "Array<{ [key: string]: any; }>",
    },
    _static: {
      baseName: "static",
      type: "Array<SegmentStaticBlock>",
    },
    templates: {
      baseName: "templates",
      type: "Array<SegmentTemplateBlock>",
    },
    userStore: {
      baseName: "user_store",
      type: "Array<SegmentProfileStoreBlock>",
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
    return SegmentDataQuery.attributeTypeMap;
  }

  public constructor() {}
}
