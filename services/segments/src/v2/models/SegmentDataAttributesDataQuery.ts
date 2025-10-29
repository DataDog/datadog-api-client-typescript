import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentDataAttributesDataQueryEventPlatformItems } from "./SegmentDataAttributesDataQueryEventPlatformItems";
import { SegmentDataAttributesDataQueryReferenceTableItems } from "./SegmentDataAttributesDataQueryReferenceTableItems";
import { SegmentDataAttributesDataQueryStaticItems } from "./SegmentDataAttributesDataQueryStaticItems";
import { SegmentDataAttributesDataQueryUserStoreItems } from "./SegmentDataAttributesDataQueryUserStoreItems";

export class SegmentDataAttributesDataQuery {
  "combination"?: string;
  "eventPlatform"?: Array<SegmentDataAttributesDataQueryEventPlatformItems>;
  "referenceTable"?: Array<SegmentDataAttributesDataQueryReferenceTableItems>;
  "_static"?: Array<SegmentDataAttributesDataQueryStaticItems>;
  "userStore"?: Array<SegmentDataAttributesDataQueryUserStoreItems>;
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
    eventPlatform: {
      baseName: "event_platform",
      type: "Array<SegmentDataAttributesDataQueryEventPlatformItems>",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "Array<SegmentDataAttributesDataQueryReferenceTableItems>",
    },
    _static: {
      baseName: "static",
      type: "Array<SegmentDataAttributesDataQueryStaticItems>",
    },
    userStore: {
      baseName: "user_store",
      type: "Array<SegmentDataAttributesDataQueryUserStoreItems>",
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
    return SegmentDataAttributesDataQuery.attributeTypeMap;
  }

  public constructor() {}
}
