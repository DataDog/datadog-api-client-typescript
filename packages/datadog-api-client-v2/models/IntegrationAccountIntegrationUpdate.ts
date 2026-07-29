/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudIntegrationUpdate } from "./ElasticCloudIntegrationUpdate";
import { TwilioIntegrationUpdate } from "./TwilioIntegrationUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Strongly-typed, per-integration partial configuration. Exactly one integration variant is set, selected by its `type`.
 */

export type IntegrationAccountIntegrationUpdate =
  | TwilioIntegrationUpdate
  | ElasticCloudIntegrationUpdate
  | UnparsedObject;
