import { UnparsedObject } from "@datadog/datadog-api-client";

import { TimelineCellAuthorUser } from "./TimelineCellAuthorUser";

/**
 * author of the timeline cell
 */
export type TimelineCellAuthor = TimelineCellAuthorUser | UnparsedObject;
