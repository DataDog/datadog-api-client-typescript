import { UnparsedObject } from "@datadog/datadog-api-client";

import { TimelineCellContentComment } from "./TimelineCellContentComment";

/**
 * timeline cell content
 */
export type TimelineCellContent = TimelineCellContentComment | UnparsedObject;
