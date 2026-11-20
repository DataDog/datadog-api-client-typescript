import { UnparsedObject } from "@datadog/datadog-api-client";

import { ScatterplotBackendTableRequest20270101OneOf } from "./ScatterplotBackendTableRequest20270101OneOf";
import { ScatterplotBackendTableRequest20270101OneOf4461521920 } from "./ScatterplotBackendTableRequest20270101OneOf4461521920";
import { ScatterplotBackendTableRequest20270101OneOf4461523200 } from "./ScatterplotBackendTableRequest20270101OneOf4461523200";
import { ScatterplotBackendTableRequest20270101OneOf4461524480 } from "./ScatterplotBackendTableRequest20270101OneOf4461524480";
import { ScatterplotBackendTableRequest20270101OneOf4461525600 } from "./ScatterplotBackendTableRequest20270101OneOf4461525600";
import { ScatterplotBackendTableRequest20270101OneOf4461756480 } from "./ScatterplotBackendTableRequest20270101OneOf4461756480";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ScatterplotBackendTableRequest =
  | ScatterplotBackendTableRequest20270101OneOf
  | ScatterplotBackendTableRequest20270101OneOf4461521920
  | ScatterplotBackendTableRequest20270101OneOf4461523200
  | ScatterplotBackendTableRequest20270101OneOf4461524480
  | ScatterplotBackendTableRequest20270101OneOf4461525600
  | ScatterplotBackendTableRequest20270101OneOf4461756480
  | UnparsedObject;
