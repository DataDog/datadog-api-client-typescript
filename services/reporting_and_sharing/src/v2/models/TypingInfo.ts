import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateSnapshotAdditionalConfig } from "./CreateSnapshotAdditionalConfig";
import { CreateSnapshotDataAttributesRequest } from "./CreateSnapshotDataAttributesRequest";
import { CreateSnapshotDataAttributesResponse } from "./CreateSnapshotDataAttributesResponse";
import { CreateSnapshotDataRequest } from "./CreateSnapshotDataRequest";
import { CreateSnapshotDataResponse } from "./CreateSnapshotDataResponse";
import { CreateSnapshotRequest } from "./CreateSnapshotRequest";
import { CreateSnapshotResponse } from "./CreateSnapshotResponse";
import { CreateSnapshotTemplateVariable } from "./CreateSnapshotTemplateVariable";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreateSnapshotTTL: ["30d", "60d", "90d", "1y", "2y", "inf"],
    CreateSnapshotTimeseriesLegendType: ["compact", "expanded", "none"],
    CreateSnapshotType: ["create_snapshot"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateSnapshotAdditionalConfig: CreateSnapshotAdditionalConfig,
    CreateSnapshotDataAttributesRequest: CreateSnapshotDataAttributesRequest,
    CreateSnapshotDataAttributesResponse: CreateSnapshotDataAttributesResponse,
    CreateSnapshotDataRequest: CreateSnapshotDataRequest,
    CreateSnapshotDataResponse: CreateSnapshotDataResponse,
    CreateSnapshotRequest: CreateSnapshotRequest,
    CreateSnapshotResponse: CreateSnapshotResponse,
    CreateSnapshotTemplateVariable: CreateSnapshotTemplateVariable,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
