import { UnparsedObject } from "@datadog/datadog-api-client";

export type ResourceObjectOutputAttributes =
  | { [key: string]: any }
  | any
  | UnparsedObject;
