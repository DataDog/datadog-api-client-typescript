/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
