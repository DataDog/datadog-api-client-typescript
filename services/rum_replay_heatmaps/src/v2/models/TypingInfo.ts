import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Snapshot } from "./Snapshot";
import { SnapshotArray } from "./SnapshotArray";
import { SnapshotCreateRequest } from "./SnapshotCreateRequest";
import { SnapshotCreateRequestData } from "./SnapshotCreateRequestData";
import { SnapshotCreateRequestDataAttributes } from "./SnapshotCreateRequestDataAttributes";
import { SnapshotData } from "./SnapshotData";
import { SnapshotDataAttributes } from "./SnapshotDataAttributes";
import { SnapshotUpdateRequest } from "./SnapshotUpdateRequest";
import { SnapshotUpdateRequestData } from "./SnapshotUpdateRequestData";
import { SnapshotUpdateRequestDataAttributes } from "./SnapshotUpdateRequestDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SnapshotUpdateRequestDataType: ["snapshots"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Snapshot: Snapshot,
    SnapshotArray: SnapshotArray,
    SnapshotCreateRequest: SnapshotCreateRequest,
    SnapshotCreateRequestData: SnapshotCreateRequestData,
    SnapshotCreateRequestDataAttributes: SnapshotCreateRequestDataAttributes,
    SnapshotData: SnapshotData,
    SnapshotDataAttributes: SnapshotDataAttributes,
    SnapshotUpdateRequest: SnapshotUpdateRequest,
    SnapshotUpdateRequestData: SnapshotUpdateRequestData,
    SnapshotUpdateRequestDataAttributes: SnapshotUpdateRequestDataAttributes,
  },
};
