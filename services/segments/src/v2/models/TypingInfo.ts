import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Segment } from "./Segment";
import { SegmentArray } from "./SegmentArray";
import { SegmentData } from "./SegmentData";
import { SegmentDataAttributes } from "./SegmentDataAttributes";
import { SegmentDataAttributesDataQuery } from "./SegmentDataAttributesDataQuery";
import { SegmentDataAttributesDataQueryEventPlatformItems } from "./SegmentDataAttributesDataQueryEventPlatformItems";
import { SegmentDataAttributesDataQueryReferenceTableItems } from "./SegmentDataAttributesDataQueryReferenceTableItems";
import { SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems } from "./SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems";
import { SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition } from "./SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition";
import { SegmentDataAttributesDataQueryStaticItems } from "./SegmentDataAttributesDataQueryStaticItems";
import { SegmentDataAttributesDataQueryUserStoreItems } from "./SegmentDataAttributesDataQueryUserStoreItems";
import { SegmentDataSource } from "./SegmentDataSource";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SegmentDataType: ["segment"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Segment: Segment,
    SegmentArray: SegmentArray,
    SegmentData: SegmentData,
    SegmentDataAttributes: SegmentDataAttributes,
    SegmentDataAttributesDataQuery: SegmentDataAttributesDataQuery,
    SegmentDataAttributesDataQueryEventPlatformItems:
      SegmentDataAttributesDataQueryEventPlatformItems,
    SegmentDataAttributesDataQueryReferenceTableItems:
      SegmentDataAttributesDataQueryReferenceTableItems,
    SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems:
      SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems,
    SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition:
      SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition,
    SegmentDataAttributesDataQueryStaticItems:
      SegmentDataAttributesDataQueryStaticItems,
    SegmentDataAttributesDataQueryUserStoreItems:
      SegmentDataAttributesDataQueryUserStoreItems,
    SegmentDataSource: SegmentDataSource,
  },
};
