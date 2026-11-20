import { UnparsedObject } from "@datadog/datadog-api-client";

import { ProductAnalyticsEventOccurrenceQuery } from "./ProductAnalyticsEventOccurrenceQuery";
import { ProductAnalyticsEventQuery } from "../../v1/models/ProductAnalyticsEventQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type BaseProductAnalyticsQuery =
  | ProductAnalyticsEventQuery
  | ProductAnalyticsEventOccurrenceQuery
  | UnparsedObject;
