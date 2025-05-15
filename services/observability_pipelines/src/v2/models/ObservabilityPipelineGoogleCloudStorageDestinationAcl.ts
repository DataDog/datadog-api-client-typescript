import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Access control list setting for objects written to the bucket.
 */
export type ObservabilityPipelineGoogleCloudStorageDestinationAcl =
  | typeof PRIVATE
  | typeof PROJECTNOT_PRIVATE
  | typeof PUBLICNOT_READ
  | typeof AUTHENTICATEDNOT_READ
  | typeof BUCKETNOT_OWNERNOT_READ
  | typeof BUCKETNOT_OWNERNOT_FULLNOT_CONTROL
  | UnparsedObject;
export const PRIVATE = "private";
export const PROJECTNOT_PRIVATE = "project-private";
export const PUBLICNOT_READ = "public-read";
export const AUTHENTICATEDNOT_READ = "authenticated-read";
export const BUCKETNOT_OWNERNOT_READ = "bucket-owner-read";
export const BUCKETNOT_OWNERNOT_FULLNOT_CONTROL = "bucket-owner-full-control";
