import { UnparsedObject } from "@datadog/datadog-api-client";

import { ScatterplotRequests20270101OneOf } from "./ScatterplotRequests20270101OneOf";
import { ScatterplotRequests20270101OneOf4461761120 } from "./ScatterplotRequests20270101OneOf4461761120";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ScatterplotRequests =
  | ScatterplotRequests20270101OneOf
  | ScatterplotRequests20270101OneOf4461761120
  | UnparsedObject;
