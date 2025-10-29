/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentDataAttributesDataQueryEventPlatformItems } from "./SegmentDataAttributesDataQueryEventPlatformItems";
import { SegmentDataAttributesDataQueryReferenceTableItems } from "./SegmentDataAttributesDataQueryReferenceTableItems";
import { SegmentDataAttributesDataQueryStaticItems } from "./SegmentDataAttributesDataQueryStaticItems";
import { SegmentDataAttributesDataQueryUserStoreItems } from "./SegmentDataAttributesDataQueryUserStoreItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
