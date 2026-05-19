import { UnparsedObject } from "@datadog/datadog-api-client";

import { TimelineCellAuthorUser } from "./TimelineCellAuthorUser";

/**
 * The author of the timeline cell. Currently only user authors are supported.
 */
export type TimelineCellAuthor = TimelineCellAuthorUser | UnparsedObject;
