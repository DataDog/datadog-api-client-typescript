/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `ActionConnectionIntegrationUpdate` object.
 */

export type ActionConnectionIntegrationUpdate =
  | AWSIntegrationUpdate
  | HTTPIntegrationUpdate
  | UnparsedObject;
