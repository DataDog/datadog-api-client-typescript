import { UnparsedObject } from "@datadog/datadog-api-client";

import { LegacyUserJourneySearch } from "./LegacyUserJourneySearch";
import { UserJourneySearch } from "./UserJourneySearch";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaUserJourneyQuery20270101Search =
  | LegacyUserJourneySearch
  | UserJourneySearch
  | UnparsedObject;
