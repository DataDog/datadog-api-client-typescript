import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { NotebookSearchAggregationBucketKey } from "./NotebookSearchAggregationBucketKey";
import { NotebookSearchAggregationBucketMultiKey } from "./NotebookSearchAggregationBucketMultiKey";
import { NotebookSearchAggregations } from "./NotebookSearchAggregations";
import { NotebookSearchAttributes } from "./NotebookSearchAttributes";
import { NotebookSearchHighlight } from "./NotebookSearchHighlight";
import { NotebookSearchMetadata } from "./NotebookSearchMetadata";
import { NotebookSearchResponse } from "./NotebookSearchResponse";
import { NotebookSearchResponseMeta } from "./NotebookSearchResponseMeta";
import { NotebookSearchResultData } from "./NotebookSearchResultData";
import { NotebookSearchUser } from "./NotebookSearchUser";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    MetricNotebookType: ["notebooks"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    NotebookSearchAggregationBucketKey: NotebookSearchAggregationBucketKey,
    NotebookSearchAggregationBucketMultiKey:
      NotebookSearchAggregationBucketMultiKey,
    NotebookSearchAggregations: NotebookSearchAggregations,
    NotebookSearchAttributes: NotebookSearchAttributes,
    NotebookSearchHighlight: NotebookSearchHighlight,
    NotebookSearchMetadata: NotebookSearchMetadata,
    NotebookSearchResponse: NotebookSearchResponse,
    NotebookSearchResponseMeta: NotebookSearchResponseMeta,
    NotebookSearchResultData: NotebookSearchResultData,
    NotebookSearchUser: NotebookSearchUser,
  },
};
