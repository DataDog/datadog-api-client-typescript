import { UnparsedObject } from "@datadog/datadog-api-client";

import { DataScalarColumn } from "./DataScalarColumn";
import { GroupScalarColumn } from "./GroupScalarColumn";

/**
 * A single column in a scalar query response.
 */
export type ScalarColumn = GroupScalarColumn | DataScalarColumn | UnparsedObject;
