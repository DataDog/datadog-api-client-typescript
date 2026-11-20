import { UnparsedObject } from "@datadog/datadog-api-client";

import { Hour12Format } from "./Hour12Format";
import { Hour24Format } from "./Hour24Format";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type Hour = Hour12Format | Hour24Format | UnparsedObject;
