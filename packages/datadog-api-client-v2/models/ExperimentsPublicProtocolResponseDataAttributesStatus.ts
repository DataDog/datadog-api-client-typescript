/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Publication status of the protocol.
 */

export type ExperimentsPublicProtocolResponseDataAttributesStatus =
  | typeof DRAFT
  | typeof PUBLISHED
  | typeof ARCHIVED
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const PUBLISHED = "PUBLISHED";
export const ARCHIVED = "ARCHIVED";
