import { UnparsedObject } from "@datadog/datadog-api-client";

import { CalendarIntervalDay } from "./CalendarIntervalDay";
import { CalendarIntervalMonth } from "./CalendarIntervalMonth";
import { CalendarIntervalWeek } from "./CalendarIntervalWeek";
import { CalendarIntervalYear } from "./CalendarIntervalYear";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CalendarInterval =
  | CalendarIntervalDay
  | CalendarIntervalWeek
  | CalendarIntervalMonth
  | CalendarIntervalYear
  | UnparsedObject;
