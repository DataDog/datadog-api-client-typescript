import { UnparsedObject } from "@datadog/datadog-api-client";

import { TimelineCellContentComment } from "./TimelineCellContentComment";

/**
 * The content payload of a timeline cell, varying by cell type.
 */
export type TimelineCellContent = TimelineCellContentComment | UnparsedObject;
