import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatusPagesUser } from "./StatusPagesUser";

/**
 * An included resource related to a status page.
 */
export type StatusPageArrayIncluded = StatusPagesUser | UnparsedObject;
