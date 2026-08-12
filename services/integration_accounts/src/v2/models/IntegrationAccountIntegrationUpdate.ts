import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationUpdate } from "./ElasticCloudIntegrationUpdate";
import { TwilioIntegrationUpdate } from "./TwilioIntegrationUpdate";

/**
 * Strongly-typed, per-integration partial configuration. Exactly one integration variant is set, selected by its `type`.
 */
export type IntegrationAccountIntegrationUpdate =
  | TwilioIntegrationUpdate
  | ElasticCloudIntegrationUpdate
  | UnparsedObject;
