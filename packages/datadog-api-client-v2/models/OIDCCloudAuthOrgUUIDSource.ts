/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Source of the organization UUID in the signed token. The `aud` source accepts a datadog/{org_uuid} audience.
 */

export type OIDCCloudAuthOrgUUIDSource =
  | typeof DD_ORG_UUID
  | typeof AUD
  | UnparsedObject;
export const DD_ORG_UUID = "dd_org_uuid";
export const AUD = "aud";
