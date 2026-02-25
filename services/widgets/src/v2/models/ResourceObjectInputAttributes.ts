import { UnparsedObject } from "@datadog/datadog-api-client";

export type ResourceObjectInputAttributes =
  | { [key: string]: any }
  | any
  | UnparsedObject;
