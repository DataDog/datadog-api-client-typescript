import { UnparsedObject } from "@datadog/datadog-api-client";

import { CalendarIntervalDay } from "./CalendarIntervalDay";
import { CalendarIntervalMonth } from "./CalendarIntervalMonth";
import { CalendarIntervalWeek } from "./CalendarIntervalWeek";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type RetentionSearchCohortCriteriaTimeInterval20270101Value =
  | CalendarIntervalDay
  | CalendarIntervalWeek
  | CalendarIntervalMonth
  | UnparsedObject;
